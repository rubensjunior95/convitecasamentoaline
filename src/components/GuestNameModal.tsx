import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Gift } from "../data/gifts";

type GuestNameModalProps = {
  gift: Gift;
  loading: boolean;
  error: string | null;
  onCancel: () => void;
  onConfirm: (fullName: string) => void;
};

export function GuestNameModal({
  gift,
  loading,
  error,
  onCancel,
  onConfirm,
}: GuestNameModalProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onConfirm(name.trim());
  }

  return (
    <div className="overlay" role="presentation" onClick={onCancel}>
      <form
        className="nome-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="nome-titulo"
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h3 id="nome-titulo">{gift.name}</h3>
        <p>
          Digite seu <strong>nome completo</strong> para os noivos saberem quem
          está presenteando:
        </p>
        <label className="sr-only" htmlFor={inputId}>
          Nome completo
        </label>
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          name="nome"
          placeholder="Seu nome completo"
          maxLength={80}
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={loading}
        />
        {error ? <p className="nome-erro">{error}</p> : null}
        {loading ? <p className="nome-loading">Gerando seu link de pagamento…</p> : null}
        <div className="nome-actions">
          <button
            type="button"
            className="nome-btn-cancel"
            onClick={onCancel}
            disabled={loading}
          >
            Cancelar
          </button>
          <button type="submit" className="nome-btn-ok" disabled={loading}>
            Continuar →
          </button>
        </div>
      </form>
    </div>
  );
}
