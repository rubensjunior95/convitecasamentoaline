export function FiligreeDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7e2a2" />
          <stop offset=".3" stopColor="#EDC967" />
          <stop offset=".55" stopColor="#c9a13c" />
          <stop offset=".8" stopColor="#f4dc98" />
          <stop offset="1" stopColor="#EDC967" />
        </linearGradient>
        <g id="scroll">
          <path d="M2,64 C2,30 26,4 58,4 C88,4 100,30 88,52 C78,70 50,74 38,58 C28,45 34,28 48,26 C60,24 68,34 64,44 C61,51 52,52 48,47 C55,49 60,44 58,38 C55,31 44,32 41,41 C37,54 48,66 62,62 C80,57 86,36 76,22 C64,6 34,8 20,26 C10,39 8,52 10,66 Z" />
        </g>
        <g id="coil">
          <path d="M3 48 C3 26 10 7 27 4 C42 1.5 49 14 42 24 C35 33 21 32 20 21 C19.3 13 27 10 31 14.5" />
        </g>
        <g id="drop">
          <path d="M0 10 C8 -2 24 -3 30 6 C22 16 7 18 0 10Z" />
        </g>
        <g id="filigreeCorner" fill="url(#goldGrad)">
          <path d="M292,12 C206,17 118,42 74,104 C40,150 30,222 30,296 C30,300 40,300 40,296 C42,224 58,160 92,116 C136,58 212,32 293,26 C297,26 297,12 292,12 Z" />
          <use href="#scroll" transform="translate(296,-4) rotate(58) scale(0.62)" />
          <use href="#scroll" transform="translate(4,300) rotate(-34) scale(0.62)" />
          <use href="#scroll" transform="translate(212,8) rotate(20) scale(0.92)" />
          <use href="#scroll" transform="translate(122,40) rotate(160) scale(0.88)" />
          <use href="#scroll" transform="translate(46,150) rotate(250) scale(0.92)" />
          <use href="#scroll" transform="translate(22,238) rotate(300) scale(0.72)" />
          <use href="#scroll" transform="translate(160,70) rotate(-30) scale(0.55)" />
          <use href="#scroll" transform="translate(70,110) rotate(120) scale(0.5)" />
        </g>
        <g id="filigreeBar">
          <g fill="none" stroke="url(#goldGrad)" strokeLinecap="round" strokeWidth="3">
            <path d="M0 -38 C-12 -26 -30 -21 -34 -8 C-37 3 -25 10 -17 3 C-11 -2 -13 -12 -20 -11" />
            <path d="M0 -38 C12 -26 30 -21 34 -8 C37 3 25 10 17 3 C11 -2 13 -12 19 -11" />
            <path d="M-34 -8 C-64 -17 -104 -8 -134 4 C-154 12 -174 6 -176 -6 C-178 -17 -166 -23 -159 -16" />
            <path d="M34 -8 C64 -17 104 -8 134 4 C154 12 174 6 176 -6 C178 -17 166 -23 159 -16" />
            <use href="#coil" transform="translate(-74,-6) rotate(-158) scale(0.6)" strokeWidth="2.4" />
            <use href="#coil" transform="translate(74,-6) rotate(-22) scale(0.6)" strokeWidth="2.4" />
            <path d="M-218 0 L-182 0" strokeWidth="1.2" />
            <path d="M218 0 L182 0" strokeWidth="1.2" />
          </g>
          <g fill="url(#goldGrad)">
            <use href="#drop" transform="translate(-17,-46) rotate(-35) scale(0.8)" />
            <use href="#drop" transform="translate(17,-46) rotate(215) scale(0.8)" />
            <circle cx="-226" cy="0" r="3" />
            <circle cx="226" cy="0" r="3" />
            <circle cx="0" cy="5" r="4" />
            <circle cx="-180" cy="0" r="2.4" />
            <circle cx="180" cy="0" r="2.4" />
          </g>
        </g>
      </defs>
    </svg>
  );
}

export function FiligreeCorners() {
  return (
    <>
      <svg className="filigree tl" viewBox="-30 -30 380 380" aria-hidden="true">
        <use href="#filigreeCorner" />
      </svg>
      <svg className="filigree tr" viewBox="-30 -30 380 380" aria-hidden="true">
        <use href="#filigreeCorner" />
      </svg>
      <svg className="filigree bl" viewBox="-30 -30 380 380" aria-hidden="true">
        <use href="#filigreeCorner" />
      </svg>
      <svg className="filigree br" viewBox="-30 -30 380 380" aria-hidden="true">
        <use href="#filigreeCorner" />
      </svg>
    </>
  );
}

type OrnamentBarProps = {
  flip?: boolean;
};

export function OrnamentBar({ flip = false }: OrnamentBarProps) {
  return (
    <svg
      className={flip ? "orn-bar flip" : "orn-bar"}
      viewBox="0 0 480 60"
      aria-hidden="true"
    >
      <g transform="translate(240,50)">
        <use href="#filigreeBar" />
      </g>
    </svg>
  );
}
