import { Monogram } from "./Monogram";

type WaxSealProps = {
  pulsing: boolean;
};

export function WaxSeal({ pulsing }: WaxSealProps) {
  return <Monogram variant="seal" pulsing={pulsing} />;
}
