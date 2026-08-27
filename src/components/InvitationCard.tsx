import { Gift, MapPin } from "@phosphor-icons/react";
import { WEDDING, DRESS_CODE } from "../data/wedding";
import { Countdown } from "./Countdown";
import { FloralCorners } from "./FloralCorners";
import { Monogram } from "./Monogram";

type InvitationCardProps = {
  onOpenGifts: () => void;
};

export function InvitationCard({ onOpenGifts }: InvitationCardProps) {
  return (
    <article className="invite-sheet">
      <section className="invite-cover" aria-label="Cartão de convite">
        <FloralCorners />
        <Monogram variant="cover" />
      </section>

      <section className="invite-body">
        <p className="invite-kicker">Com a bênção de Deus</p>
        <p className="invite-verse">“{WEDDING.verse}”</p>
        <span className="invite-ref">{WEDDING.verseRef}</span>

        <p className="invite-lead">
          Surpresa para alguns, loucura para outros — mas acreditem:
        </p>
        <h1 className="invite-title">Vamos nos casar!</h1>
        <p className="invite-names">{WEDDING.names}</p>

        <figure className="invite-photo">
          <img
            src={WEDDING.couplePhoto}
            alt="Aline e Hebert"
            width={720}
            height={960}
          />
        </figure>

        <p className="invite-date">{WEDDING.dateLabel}</p>
        <Countdown />

        <div className="invite-place">
          <p>
            <MapPin size={18} weight="fill" aria-hidden="true" />
            {WEDDING.venue}
          </p>
          <p>{WEDDING.city}</p>
          <a href={WEDDING.mapUrl} target="_blank" rel="noopener noreferrer">
            Ver no mapa
          </a>
        </div>

        <p className="invite-story">
          Para alívio de nossos pais, que já não viam a hora de sairmos de casa,
          chegou o grande dia de unirmos o nosso amor — e queremos convidar você
          para celebrar essa união conosco.
        </p>

        <p className="invite-kicker">Dress code</p>
        <p className="invite-note">
          Capriche no look — pedimos apenas atenção a alguns detalhes. Não é
          permitido:
        </p>
        <ul className="invite-list">
          {DRESS_CODE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="invite-note">
          O traje completo é exclusivo dos padrinhos.
        </p>

        <p className="invite-kicker">Bora festar?</p>
        <p className="invite-note">Sua presença é o nosso maior presente.</p>
        <button type="button" className="invite-cta" onClick={onOpenGifts}>
          <Gift size={18} weight="fill" aria-hidden="true" />
          Presentear
        </button>
      </section>
    </article>
  );
}
