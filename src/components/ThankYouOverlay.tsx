type ThankYouOverlayProps = {
  onClose: () => void;
};

export function ThankYouOverlay({ onClose }: ThankYouOverlayProps) {
  return (
    <div className="thanks-overlay" role="dialog" aria-modal="true" aria-labelledby="thanks-title">
      <h2 id="thanks-title">Muito obrigado!</h2>
      <p>
        Recebemos a confirmação do seu presente! Aline &amp; Hebert vão lembrar
        desse carinho para sempre.
      </p>
      <button type="button" className="thanks-btn" onClick={onClose}>
        Voltar ao convite
      </button>
    </div>
  );
}
