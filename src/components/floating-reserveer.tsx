import { restaurant } from "@/lib/restaurant";

export function FloatingReserveer() {
  return (
    <a
      href={restaurant.reservation.url}
      target="_blank"
      rel="noopener noreferrer"
      className="ba-fab-reserveer"
    >
      <span>Reserveer een tafel</span>
      <span aria-hidden>→</span>
    </a>
  );
}
