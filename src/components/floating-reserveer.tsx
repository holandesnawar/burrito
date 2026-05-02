import Link from "next/link";

export function FloatingReserveer() {
  return (
    <Link href="/reserveren" className="ba-fab-reserveer">
      <span>Reserveren</span>
      <span aria-hidden>→</span>
    </Link>
  );
}
