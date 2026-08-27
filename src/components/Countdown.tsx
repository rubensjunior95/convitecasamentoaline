import { useEffect, useState } from "react";
import { WEDDING } from "../data/wedding";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function remaining(targetMs: number): CountdownParts | null {
  const diff = targetMs - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function Countdown() {
  const targetMs = new Date(WEDDING.datetime).getTime();
  const [parts, setParts] = useState<CountdownParts | null>(() => remaining(targetMs));

  useEffect(() => {
    const id = window.setInterval(() => {
      setParts(remaining(targetMs));
    }, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  if (!parts) {
    return <p className="countdown-today">É hoje!</p>;
  }

  return (
    <div className="countdown" aria-live="polite">
      <div className="count-cell">
        <div className="count-num">{parts.days}</div>
        <div className="count-label">Dias</div>
      </div>
      <div className="count-cell">
        <div className="count-num">{pad(parts.hours)}</div>
        <div className="count-label">Horas</div>
      </div>
      <div className="count-cell">
        <div className="count-num">{pad(parts.minutes)}</div>
        <div className="count-label">Min</div>
      </div>
      <div className="count-cell">
        <div className="count-num">{pad(parts.seconds)}</div>
        <div className="count-label">Seg</div>
      </div>
    </div>
  );
}
