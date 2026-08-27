import { WaxSeal } from "./WaxSeal";

type EnvelopeProps = {
  opened: boolean;
  onOpen: () => void;
};

export function Envelope({ opened, onOpen }: EnvelopeProps) {
  const layerClass = opened
    ? "envelope-layer envelope-texture is-opening is-open"
    : "envelope-layer envelope-texture";

  return (
    <div className={layerClass} aria-hidden={opened}>
      <div className="flap flap-left envelope-texture flap-shadow-left" />
      <div className="flap flap-right envelope-texture flap-shadow-right" />
      <div className="envelope-seam" />
      <div className="seal-hint">
        <p>
          Clique no selo
          <br />
          para abrir
        </p>
        <div className="seal-hint-rule" />
      </div>
      <button
        type="button"
        className="seal-button"
        aria-label="Abrir convite"
        onClick={onOpen}
        disabled={opened}
      >
        <WaxSeal pulsing={!opened} />
      </button>
    </div>
  );
}
