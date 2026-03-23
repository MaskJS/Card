import { CardData } from '../data/cards';
// import { LazyImage } from './LazyImage';

interface TarotCardProps {
  card: CardData;
  className?: string;
}

export function TarotCard({ card, className = '' }: TarotCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100">
        <img
          src={card.imageUrl}
          alt={card.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
