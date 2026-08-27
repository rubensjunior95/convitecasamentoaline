import { ArrowLeft } from "@phosphor-icons/react";
import { FloralCorners } from "./FloralCorners";
import { formatReais, GIFTS, type Gift } from "../data/gifts";
import { Monogram } from "./Monogram";

type GiftListProps = {
  onBack: () => void;
  onSelect: (gift: Gift) => void;
};

export function GiftList({ onBack, onSelect }: GiftListProps) {
  return (
    <article className="invite-sheet">
      <section className="invite-cover invite-cover--compact" aria-hidden="true">
        <FloralCorners />
        <Monogram variant="cover" />
      </section>
      <section className="invite-body">
        <p className="invite-kicker">Lista de presentes</p>
        <p className="invite-note">
          Estamos muito felizes por celebrar este momento tão especial com vocês!
          Escolha o presente que fará parte da nossa história.
        </p>
        <div className="gift-grid">
          {GIFTS.map((gift) => (
            <GiftCard key={gift.id} gift={gift} onSelect={onSelect} />
          ))}
        </div>
        <button type="button" className="invite-ghost" onClick={onBack}>
          <ArrowLeft size={16} weight="bold" aria-hidden="true" />
          Voltar ao convite
        </button>
      </section>
    </article>
  );
}

type GiftCardProps = {
  gift: Gift;
  onSelect: (gift: Gift) => void;
};

function GiftCard({ gift, onSelect }: GiftCardProps) {
  return (
    <button type="button" className="gift-item" onClick={() => onSelect(gift)}>
      <img className="gift-photo" src={gift.image} alt="" />
      <span className="gift-name">{gift.name}</span>
      <p className="gift-desc">{gift.description}</p>
      <span className="gift-price">
        {formatReais(gift.valueCents)}
        <span> · Presentear →</span>
      </span>
    </button>
  );
}
