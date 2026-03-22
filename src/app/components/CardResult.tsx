import { motion } from 'motion/react';
import { CardData } from '../data/cards';
import { Sparkles, Clock, Zap } from 'lucide-react';
import { TarotCard } from './TarotCard';

interface CardResultProps {
  card: CardData;
  onReset: () => void;
}

export function CardResult({ card, onReset }: CardResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* 卡牌展示 */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
        {/* 左侧：卡牌图片 */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full lg:w-80 flex-shrink-0"
        >
          <div className="w-full aspect-[2/3]">
            <TarotCard card={card} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4"
          >
            <h2 className="text-3xl font-bold text-yellow-200 mb-2">{card.name}</h2>
            <p className="text-purple-200 text-sm">第 {card.id} 号牌 · {card.emoji}</p>
          </motion.div>
        </motion.div>

        {/* 右侧：解析内容 */}
        <div className="flex-1 space-y-4">
          {/* 过去 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center border border-blue-400/50">
                <Clock className="w-5 h-5 text-blue-200" />
              </div>
              <h3 className="text-xl font-medium text-blue-100">过去</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">{card.past}</p>
          </motion.div>

          {/* 现在 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center border border-purple-400/50">
                <Zap className="w-5 h-5 text-purple-200" />
              </div>
              <h3 className="text-xl font-medium text-purple-100">现在</h3>
            </div>
            <p className="text-purple-100 leading-relaxed">{card.present}</p>
          </motion.div>

          {/* 未来 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-pink-900/40 to-pink-800/40 backdrop-blur-md rounded-2xl p-6 border border-pink-400/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/30 flex items-center justify-center border border-pink-400/50">
                <Sparkles className="w-5 h-5 text-pink-200" />
              </div>
              <h3 className="text-xl font-medium text-pink-100">未来</h3>
            </div>
            <p className="text-pink-100 leading-relaxed">{card.future}</p>
          </motion.div>
        </div>
      </div>

      {/* 重新抽取按钮 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex justify-center"
      >
        <button
          onClick={onReset}
          className="px-10 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 text-white rounded-full hover:from-amber-700 hover:via-yellow-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 border-2 border-yellow-500/50 font-medium text-lg"
        >
          ✨ 再抽一次
        </button>
      </motion.div>
    </motion.div>
  );
}