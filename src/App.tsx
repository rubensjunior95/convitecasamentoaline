import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { Gift } from "./data/gifts";
import { WEDDING } from "./data/wedding";
import { CloseButton } from "./components/CloseButton";
import { Envelope } from "./components/Envelope";
import { GiftList } from "./components/GiftList";
import { GuestNameModal } from "./components/GuestNameModal";
import { InvitationCard } from "./components/InvitationCard";
import { ThankYouOverlay } from "./components/ThankYouOverlay";

type Page = "invite" | "gifts";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [page, setPage] = useState<Page>("invite");
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nsu = params.get("order_nsu");
    if (!nsu) return;

    setOpened(true);
    setShowThanks(true);

    const confirm =
      `?action=confirm&order_nsu=${encodeURIComponent(nsu)}` +
      `&capture_method=${encodeURIComponent(params.get("capture_method") ?? "")}` +
      `&receipt_url=${encodeURIComponent(params.get("receipt_url") ?? "")}`;

    void fetch(WEDDING.scriptUrl + confirm).catch(() => undefined);
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  const handleOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpened(false);
    setPage("invite");
  }, []);

  const openGifts = useCallback(() => {
    setPage("gifts");
    const scroller = document.querySelector(".invite-scroll");
    scroller?.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "instant" });
  }, []);

  const closeGifts = useCallback(() => {
    setPage("invite");
    const scroller = document.querySelector(".invite-scroll");
    scroller?.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "instant" });
  }, []);

  const confirmGift = useCallback(
    async (fullName: string) => {
      if (!selectedGift) return;
      if (fullName.length < 3 || !fullName.includes(" ")) {
        setCheckoutError("Por favor, digite seu nome completo.");
        return;
      }

      setCheckoutError(null);
      setCheckoutLoading(true);
      const fallback = selectedGift.checkoutUrl;
      const popup = window.open("about:blank", "_blank");
      const query =
        `?action=link&nome=${encodeURIComponent(fullName)}` +
        `&presente=${encodeURIComponent(selectedGift.name)}` +
        `&valor=${encodeURIComponent(String(selectedGift.valueCents))}`;

      try {
        const response = await fetch(WEDDING.scriptUrl + query);
        const payload = (await response.json()) as { ok?: boolean; url?: string };
        const destination = payload.ok && payload.url ? payload.url : fallback;
        if (popup) popup.location.href = destination;
        else window.open(destination, "_blank", "noopener");
      } catch {
        if (popup) popup.location.href = fallback;
        else window.open(fallback, "_blank", "noopener");
      } finally {
        setCheckoutLoading(false);
        setSelectedGift(null);
      }
    },
    [selectedGift],
  );

  let pageContent: ReactNode;
  switch (page) {
    case "invite":
      pageContent = <InvitationCard onOpenGifts={openGifts} />;
      break;
    case "gifts":
      pageContent = (
        <GiftList onBack={closeGifts} onSelect={(gift) => setSelectedGift(gift)} />
      );
      break;
    default: {
      const _exhaustive: never = page;
      return _exhaustive;
    }
  }

  const inviteClass = opened ? "invite-layer is-opening" : "invite-layer is-entering";

  return (
    <main className={opened ? "stage" : "stage stage--closed"}>
      <div className={inviteClass}>
        <div className="invite-scroll">
          <div className="invite-frame">{pageContent}</div>
        </div>
      </div>
      <Envelope opened={opened} onOpen={handleOpen} />
      {opened ? <CloseButton onClick={handleClose} /> : null}
      {selectedGift ? (
        <GuestNameModal
          gift={selectedGift}
          loading={checkoutLoading}
          error={checkoutError}
          onCancel={() => {
            setSelectedGift(null);
            setCheckoutError(null);
          }}
          onConfirm={(name) => {
            void confirmGift(name);
          }}
        />
      ) : null}
      {showThanks ? <ThankYouOverlay onClose={() => setShowThanks(false)} /> : null}
    </main>
  );
}
