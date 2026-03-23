import { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { CardData } from '../data/cards';
import { TarotCard } from './TarotCard';

interface CardCarouselProps {
  cards: CardData[];
  onCardSelect: (card: CardData) => void;
  isDrawing: boolean;
}

export function CardCarousel({ cards, onCardSelect, isDrawing }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isDrawing) {
      // 自动循环滚动
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 800);
      return () => clearInterval(interval);
    } else {
      // 抽卡时加速滚动
      let speed = 100;
      const speedUpInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, speed);

      // 2秒后停止并选中
      setTimeout(() => {
        clearInterval(speedUpInterval);
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentIndex(randomIndex);
        setTimeout(() => {
          onCardSelect(cards[randomIndex]);
        }, 300);
      }, 2000);

      return () => clearInterval(speedUpInterval);
    }
  }, [isDrawing, cards, onCardSelect]);

  // 使用 useMemo 缓存可见卡牌
  const visibleCards = useMemo(() => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + cards.length) % cards.length;
      visible.push({ card: cards[index], offset: i });
    }
    return visible;
  }, [currentIndex, cards]);

  return (
    <div className="relative h-80 flex items-center justify-center overflow-hidden py-4">
      {visibleCards.map(({ card, offset }) => (
        <motion.div
          key={`${card.id}-${currentIndex}-${offset}`}
          className="absolute"
          initial={false}
          animate={{
            x: offset * 120,
            scale: offset === 0 ? 1 : 0.65,
            opacity: offset === 0 ? 1 : Math.max(0.25, 1 - Math.abs(offset) * 0.3),
            zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
            rotateY: offset * 15,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut"
          }}
        >
          <div className="w-36 h-56">
            <TarotCard card={card} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}