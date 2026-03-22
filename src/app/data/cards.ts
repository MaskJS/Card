// 动态导入所有图片
const images = import.meta.glob<{ default: string }>('../../assets/*.png', { eager: true });
const tarotImages = Object.values(images).map(img => img.default);

export interface CardData {
  id: number;
  name: string;
  emoji: string;
  past: string;
  present: string;
  future: string;
  imageUrl: string;
}

// 定义每张图片对应的卡片主题
const cardThemes = [
  { name: "太阳", emoji: "☀️", past: "过去的努力已经播下希望的种子", present: "当下充满积极的能量和光明", future: "未来会迎来成功和繁荣" },
  { name: "月亮", emoji: "🌙", past: "曾经的迷茫让你学会倾听内心", present: "需要关注潜意识和直觉", future: "神秘的事物将为你指引方向" },
  { name: "星星", emoji: "⭐", past: "过往的梦想一直在心中闪耀", present: "希望和灵感正在降临", future: "愿望即将实现" },
  { name: "火焰", emoji: "🔥", past: "激情曾推动你前进", present: "充满创造力和行动力", future: "将迎来重大变革" },
  { name: "水滴", emoji: "💧", past: "情感经历滋养了你的成长", present: "需要保持情绪的流动性", future: "心灵将得到净化" },
  { name: "山峰", emoji: "⛰️", past: "过去的挑战让你更坚强", present: "正面临重大考验", future: "将登上人生新高度" },
  { name: "森林", emoji: "🌲", past: "成长之路虽曲折但充满生机", present: "需要探索内在的丰富性", future: "将找到新的发展空间" },
  { name: "海洋", emoji: "🌊", past: "情感的浪潮曾带来起伏", present: "面对深层的情感世界", future: "将拥有广阔的可能性" },
  { name: "彩虹", emoji: "🌈", past: "风雨之后见彩虹", present: "多彩的机遇正在出现", future: "美好的承诺即将兑现" },
  { name: "闪电", emoji: "⚡", past: "突然的变化改变了轨迹", present: "灵感和顿悟的时刻", future: "将经历快速的转变" },
  { name: "玫瑰", emoji: "🌹", past: "爱与美曾点亮生活", present: "浪漫和激情正在绽放", future: "将收获深刻的情感" },
  { name: "钥匙", emoji: "🔑", past: "过去的经验是解锁之匙", present: "掌握了关键的信息", future: "将打开新的大门" },
  { name: "镜子", emoji: "🪞", past: "自我认知的旅程已开始", present: "需要诚实地面对自己", future: "将看清真实的自我" },
  { name: "羽毛", emoji: "🪶", past: "轻盈自由是你的向往", present: "释放负担获得自由", future: "将实现心灵的飞翔" },
  { name: "皇冠", emoji: "👑", past: "天生的领导力逐渐显现", present: "正处于权威的位置", future: "将获得应有的认可" },
  { name: "宝石", emoji: "💎", past: "内在价值等待发掘", present: "珍贵的品质正在闪耀", future: "将得到珍视和重视" },
  { name: "天使", emoji: "😇", past: "守护的力量一直存在", present: "神圣的指引正在发生", future: "将受到庇佑和保护" },
];

// 塔罗牌图片池（17张图片循环使用）
export const dreamCards: CardData[] = [
  ...cardThemes.map((theme, index) => ({
    id: index + 1,
    ...theme,
    imageUrl: tarotImages[index % tarotImages.length]
  }))
];
