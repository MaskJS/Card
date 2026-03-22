import { CardData } from '../data/cards';

interface TarotCardProps {
  card: CardData;
  className?: string;
}

export function TarotCard({ card, className = '' }: TarotCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={card.imageUrl}
          alt={card.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
