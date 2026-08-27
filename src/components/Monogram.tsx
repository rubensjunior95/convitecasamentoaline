import { WEDDING } from "../data/wedding";

type MonogramProps = {
  variant: "seal" | "header" | "cover";
  pulsing?: boolean;
};

export function Monogram({ variant, pulsing = false }: MonogramProps) {
  const className =
    variant === "seal"
      ? pulsing
        ? "monogram monogram--seal seal-pulse"
        : "monogram monogram--seal"
      : variant === "cover"
        ? "monogram monogram--cover"
        : "monogram monogram--header";

  return (
    <img
      className={className}
      src={WEDDING.logo}
      alt={
        variant === "seal"
          ? "Lacre de cera com o monograma do casal"
          : "Monograma Aline e Hebert"
      }
      draggable={false}
    />
  );
}
