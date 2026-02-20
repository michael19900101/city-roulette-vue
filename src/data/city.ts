
        
export interface AttractionModel {
  name: string;
  imageUrl: string;
  description: string;
}

export interface CuisineModel {
  name: string;
  imageUrl: string;
  description: string;
}

export interface CityDetailModel {
  id: string;
  name: string;
  region: string;
  rating: number;
  previewImageUrl: string;
  heroImageUrl: string;
  shortDescription: string;
  fullDescription: string;
  attractions: AttractionModel[];
  cuisines: CuisineModel[];
  tips: string[];
}

export const CITIES: CityDetailModel[] = [
  {
    id: 'chengdu',
    name: '成都',
    region: '西南',
    rating: 4.9,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/e6e6cda0-c3e3-4c18-8456-d46023841416.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/39e629c4-b7d4-4227-8847-a5334f484eef.png",
    shortDescription: '天府之国，美食之都，一只大熊猫慢生活的家园。',
    fullDescription: '成都，简称“蓉”，四川省省会。这里不仅有令人垂涎欲滴的川菜，更有深厚的历史底蕴和悠闲的生活节奏。从武侯祠的历史沉淀到春熙路的时尚繁华，成都总能给你独特的惊喜。',
    attractions: [
      { 
        name: '大熊猫繁育研究基地', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/499efd09-1a56-4aa8-abe2-10b03c498186.png",
        description: '近距离观察国宝大熊猫的成长环境。' 
      },
      { 
        name: '宽窄巷子', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/79e24251-ff8d-454a-8170-ec2aaff3961b.png",
        description: '清代古街，体验成都最地道的慢生活时光。' 
      }
    ],
    cuisines: [
      { 
        name: '麻辣火锅', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/78528537-3b2b-4c7c-a326-9fc16fcc5856.png",
        description: '成都灵魂，辣而不燥，鲜香四溢。' 
      }
    ],
    tips: ['建议携带消食片', '锦里建议晚上去更有氛围', '提前在网上预约大熊猫基地门票']
  },
  {
    id: 'hangzhou',
    name: '杭州',
    region: '华东',
    rating: 4.8,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/104e631a-616e-4bab-b6f6-20706df4ff5c.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/fd0b7ded-8673-41f8-b4ef-e5afaf7d6341.png",
    shortDescription: '人间天堂，湖光山色与数字科技的完美融合。',
    fullDescription: '杭州以西湖美景著称于世，是中国最具幸福感的城市之一。这里既有古时的文人气息，又是现代电商与科技的弄潮儿。',
    attractions: [
      { 
        name: '西湖风景名胜区', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/998b6490-a324-4d53-84ea-eef895bace23.png",
        description: '漫步苏堤，欣赏雷峰夕照。' 
      }
    ],
    cuisines: [
      { 
        name: '龙井虾仁', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/6298ab87-4ecd-45b5-abd5-69381a0d98a9.png",
        description: '清香淡雅，江南滋味。' 
      }
    ],
    tips: ['西湖边早晚温差大', '推荐租自行车环湖游', '避开节假日高峰人流']
  },
  {
    id: 'xian',
    name: '西安',
    region: '西北',
    rating: 4.7,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/ef163f3b-9bbc-4ad6-88a6-f019b6541993.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/1aaea31a-7938-497e-b510-eebe0d321d6c.png",
    shortDescription: '十三朝古都，在这里一眼看尽千年中华历史。',
    fullDescription: '西安，古称长安。每一块秦砖汉瓦都诉说着历史的故事。从震撼世界的兵马俑到香气扑鼻的回民街，这里是文化旅者的必经之地。',
    attractions: [
      { 
        name: '秦始皇兵马俑', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/7ca73381-ae15-43e3-8138-d50ecf813421.png",
        description: '世界第八大奇迹。' 
      }
    ],
    cuisines: [
      { 
        name: '肉夹馍', 
        imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/20/cb425296-6c81-4bbd-a1f7-1b0b1638e2df.png",
        description: '中国汉堡，肉香四溢。' 
      }
    ],
    tips: ['回民街美食虽多但要注意卫生', '建议租自行车骑行古城墙', '博物馆门票需提前一周预约']
  }
];

export const getCityById = (id: string): CityDetailModel | undefined => {
  return CITIES.find(city => city.id === id);
};

export const getRandomCity = (filters?: { region?: string }): CityDetailModel => {
  const filtered = filters?.region 
    ? CITIES.filter(c => c.region === filters.region) 
    : CITIES;
  const pool = filtered.length > 0 ? filtered : CITIES;
  return pool[Math.floor(Math.random() * pool.length)];
};
        
      