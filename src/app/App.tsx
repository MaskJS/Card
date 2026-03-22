import { useState } from 'react';
import { motion } from 'motion/react';
import { CardCarousel } from './components/CardCarousel';
import { CardResult } from './components/CardResult';
import { dreamCards } from './data/cards';
import type { CardData } from './data/cards';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDraw = () => {
    setIsDrawing(true);
    setSelectedCard(null);
  };

  const handleCardSelect = (card: CardData) => {
    setSelectedCard(card);
    setIsDrawing(false);
  };

  const handleReset = () => {
    setSelectedCard(null);
    setIsDrawing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* 标题 */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <h1 className="text-5xl font-bold text-white">三生三世</h1>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <p className="text-purple-200 text-lg">探索时间的奥秘，解读命运的密语</p>
        </motion.div>

        {/* 主内容区 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          {!selectedCard ? (
            <>
              {/* 卡牌轮播 */}
              <div className="mb-8">
                <CardCarousel
                  cards={dreamCards}
                  onCardSelect={handleCardSelect}
                  isDrawing={isDrawing}
                />
              </div>

              {/* 抽卡按钮 */}
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={handleDraw}
                  disabled={isDrawing}
                  className={`px-12 py-4 rounded-full text-white text-xl font-medium shadow-lg transition-all ${
                    isDrawing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:via-pink-600 hover:to-purple-700 transform hover:scale-105 hover:shadow-2xl'
                  }`}
                >
                  {isDrawing ? '抽取中...' : '开始抽取'}
                </button>
                <p className="text-purple-200 text-sm">
                  {isDrawing ? '命运之轮正在转动...' : '点击按钮，让命运为你选择一张牌'}
                </p>
              </div>
            </>
          ) : (
            /* 结果展示 */
            <CardResult card={selectedCard} onReset={handleReset} />
          )}
        </div>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-purple-300 text-sm"
        >
          共 {dreamCards.length} 张神秘卡牌 · 每张都蕴含独特的启示
        </motion.div>
      </div>
    </div>
  );
}
