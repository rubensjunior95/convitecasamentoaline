type CloseButtonProps = {
  onClick: () => void;
};

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button type="button" className="fechar-btn" onClick={onClick}>
      Fechar
    </button>
  );
}
