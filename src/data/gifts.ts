export type Gift = {
  id: string;
  name: string;
  description: string;
  valueCents: number;
  checkoutUrl: string;
  image: string;
};

export const GIFTS: Gift[] = [
  {
    id: "jantar",
    name: "Primeiro Jantar",
    description: "O primeiro delivery da casa nova.",
    valueCents: 20000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/V2LpGsLkpP",
    image: "/images/gifts/01.jpg",
  },
  {
    id: "tijolo",
    name: "Tijolinho da Casa",
    description: "Ajude a construir nosso castelo.",
    valueCents: 25000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/ih3ypjB2IQ",
    image: "/images/gifts/02.jpg",
  },
  {
    id: "buffet",
    name: "Fura-Fila do Buffet",
    description: "Seja o VIP que ataca o jantar antes de todos.",
    valueCents: 30000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/Tzgrxd5ace",
    image: "/images/gifts/03.jpg",
  },
  {
    id: "foto-bolo",
    name: "Foto na Mesa do Bolo",
    description: "Seu post sem nenhum penetra atrás.",
    valueCents: 20000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/r4yZeiRWNg",
    image: "/images/gifts/04.jpg",
  },
  {
    id: "buque",
    name: "Alvo do Buquê",
    description: "A noiva garante que o alvo é você.",
    valueCents: 35000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/Katf3QtvlJ",
    image: "/images/gifts/05.jpg",
  },
  {
    id: "nao-jogue",
    name: 'Taxa "Não jogue nela"',
    description: "Seguro pro namorado que ainda não quer casar.",
    valueCents: 50000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/uO1FJWhepa",
    image: "/images/gifts/06.jpg",
  },
  {
    id: "maracujina",
    name: "Maracujina",
    description: "Pra noiva não surtar nos preparativos finais.",
    valueCents: 20000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/buPPpb8UNB",
    image: "/images/gifts/07.jpg",
  },
  {
    id: "tampao",
    name: "Tampão de Ouvido",
    description: "Pra sobreviver ao ronco do marido.",
    valueCents: 22000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/4ix0BYg4o8",
    image: "/images/gifts/08.jpg",
  },
  {
    id: "rolo",
    name: "Rolo de Macarrão",
    description: "Pra disciplinar o noivo, se preciso.",
    valueCents: 24000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/xv836WwaYo",
    image: "/images/gifts/09.jpg",
  },
  {
    id: "capacete",
    name: "Capacete de Proteção",
    description: "Estratégico pro noivo após a primeira DR.",
    valueCents: 26000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/Za0uNRmmLs",
    image: "/images/gifts/10.jpg",
  },
  {
    id: "parente",
    name: "Parente Favorito",
    description: "Compre e ganhe o título oficial de honra.",
    valueCents: 60000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/Ir4dhc9I0O",
    image: "/images/gifts/11.jpg",
  },
  {
    id: "boleto",
    name: "Adote um Boleto",
    description: "Escolha um e pague com muito amor.",
    valueCents: 20000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/jURFzoBqdP",
    image: "/images/gifts/12.jpg",
  },
  {
    id: "sogra",
    name: "Passagem da Sogra",
    description: "Viagem de 1 ano bem longe (só ida).",
    valueCents: 28000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/BXJz0sIg4M",
    image: "/images/gifts/13.jpg",
  },
  {
    id: "gravata",
    name: "Impedir Gravata Brega",
    description: "Um favor à estética do álbum de fotos.",
    valueCents: 25000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/KySDhjxCEM",
    image: "/images/gifts/14.jpg",
  },
  {
    id: "luz",
    name: 'Cota "Haja Luz!"',
    description: "O primeiro boleto de luz da casa nova.",
    valueCents: 21000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/LmNQwOODxa",
    image: "/images/gifts/15.jpg",
  },
  {
    id: "streamings",
    name: "Pagar Streamings",
    description: "Netflix, HBO, Disney e o resto.",
    valueCents: 30000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/F2nukmbWPR",
    image: "/images/gifts/16.jpg",
  },
  {
    id: "bolo",
    name: "Bolo de Cenoura",
    description: "Pra manter a noiva dócil e feliz (semanal).",
    valueCents: 20000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/WTHSYSAb62",
    image: "/images/gifts/17.jpg",
  },
  {
    id: "robo",
    name: "Robô Salva-Casamento",
    description: "Aspira a sujeira e as discussões.",
    valueCents: 27000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/nL8zJokkVu",
    image: "/images/gifts/18.jpg",
  },
  {
    id: "motorhome",
    name: "Parcela Motorhome",
    description: "Pra viajar sem compromissos.",
    valueCents: 25000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/gzUuIJx7Kz",
    image: "/images/gifts/19.jpg",
  },
  {
    id: "paz",
    name: 'Cota "Paz no Quarto"',
    description: "Um colchão que não afunde.",
    valueCents: 22000,
    checkoutUrl: "https://checkout.infinitepay.io/travaline-01/SJixWjg3UF",
    image: "/images/gifts/20.jpg",
  },
];

export function formatReais(valueCents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valueCents / 100);
}
