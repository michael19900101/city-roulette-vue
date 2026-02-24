
        
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
},
  {
    id: 'beijing',
    name: '北京',
    region: '华北',
    rating: 4.9,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/995ae427-65e8-4741-a08b-a71af92b5f45.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/874249f9-67f0-4bd8-8004-be9af6b59ea5.png",
    shortDescription: '千年古都，现代之城，承载着厚重的历史与辉煌。',
    fullDescription: '北京是中国的首都，拥有故宫、长城等世界文化遗产。这里是政治、文化中心，既有宏伟的皇家园林，也有充满市井气息的胡同小巷。',
    attractions: [
      { name: '故宫博物院', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/7c827b65-1339-4460-a267-fe3db1be0d6e.png", description: '明清两代的皇家宫殿。' },
      { name: '八达岭长城', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/271b4679-bbb6-4410-964b-bfa337f2caca.png", description: '万里长城的精华，壮丽非凡。' }
    ],
    cuisines: [
      { name: '北京烤鸭', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/9c86ee7f-e323-4bdd-834e-2ccbd8d2d5d4.png", description: '色泽红亮，肉质细嫩。' }
    ],
    tips: ['故宫门票需提前在官网预约', '登长城建议穿舒适的运动鞋', '春秋两季是北京最美的季节']
  },
  {
    id: 'shanghai',
    name: '上海',
    region: '华北',
    rating: 4.9,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/7ee65159-8045-4917-8586-11fc6921de40.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/fccaca4f-3cf9-4159-97a6-2ebc85eba973.png",
    shortDescription: '魔都上海，海派文化与国际时尚的交汇点。',
    fullDescription: '上海是中国最大的经济中心，外滩的万国建筑博览群与浦东的摩天大楼隔江相望，展现了过去与未来的完美对话。',
    attractions: [
      { name: '外滩', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/44edf23a-938c-4a1b-9add-524bbd3ceeba.png", description: '欣赏浦江两岸璀璨夜景的最佳地点。' },
      { name: '上海迪士尼乐园', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/3ddecc59-b108-466e-ad56-dbfb33468fa0.png", description: '点亮心中奇梦，老少皆宜的童话世界。' }
    ],
    cuisines: [
      { name: '南翔小笼馒头', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/98b8842d-e3dc-4389-ab09-faea176765bb.png", description: '皮薄馅丰，汤汁鲜美。' }
    ],
    tips: ['武康路适合Citywalk慢游', '外滩亮灯时间通常在19点', '地铁是出行的首选方式']
  },
  {
    id: 'guangzhou',
    name: '广州',
    region: '华南',
    rating: 4.8,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/35f89075-29cb-4693-b0f6-7880197adcb5.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/19805e61-5e9e-4cd3-bd0a-a78dba83c9b6.png",
    shortDescription: '食在广州，千年商都的烟火气与现代感。',
    fullDescription: '广州是岭南文化的核心地，繁华的珠江新城与古老的西关大屋共存。早茶文化深刻体现了这座城市对于生活品质的极致追求。',
    attractions: [
      { name: '广州塔（小蛮腰）', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/f882f810-4cfc-4428-b8a7-b725687d3a0f.png", description: '广州的地标建筑，俯瞰全城美景。' },
      { name: '沙面岛', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/cab33d0d-4489-4f98-b88d-622bb61ff5a5.png", description: '充满欧式风情的历史建筑群。' }
    ],
    cuisines: [
      { name: '粤式早茶', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/15d71d44-6d43-45bf-976a-64c552b0f7aa.png", description: '点心丰富多样，精致美味。' }
    ],
    tips: ['一定要体验一次正宗的广式早茶', '上下九步行街是美食和逛街的好去处', '夏季注意防高温防阵雨']
  },
  {
    id: 'shenzhen',
    name: '深圳',
    region: '华南',
    rating: 4.6,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/000458e2-87a3-4d1d-8a4f-a576bb3600ae.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/fa5d0859-f626-442e-9b72-ed0013a70867.png",
    shortDescription: '创新之都，中国硅谷，年轻活力的梦想之城。',
    fullDescription: '深圳是一座从渔村奇迹般崛起的现代化大都市。这里充满了科技感与创新精神，同时拥有美丽的海岸线和丰富的公园资源。',
    attractions: [
      { name: '大梅沙海滨公园', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/847b58e6-378f-4c98-9705-386687d2130a.png", description: '金色的沙滩，迷人的海景。' },
      { name: '世界之窗', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/00c5a591-ff4f-4e0c-83ed-da3a23b2bbe4.png", description: '缩微景观公园，带你一日游遍全球。' }
    ],
    cuisines: [
      { name: '光明乳鸽', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/31e13b0f-cb6a-4181-b1cd-a89eedd0f554.png", description: '皮酥、骨软、肉嫩、多汁。' }
    ],
    tips: ['体验最前沿的电子产品集散地华强北', '深圳湾公园适合骑行观鸟', '注意做好防晒措施']
  },
  {
    id: 'nanjing',
    name: '南京',
    region: '华东',
    rating: 4.7,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/129b92ca-13c7-4f8b-ae15-75abd815c2f6.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/b761c163-3360-4b48-8d71-b6eff10cbd5c.png",
    shortDescription: '六朝古都，十里秦淮，读懂金陵的温柔与厚重。',
    fullDescription: '南京承载着厚重的历史记忆。从中山陵的庄严肃穆到先锋书店的人文气息，这座城市散发着一种安稳而深沉的魅力。',
    attractions: [
      { name: '夫子庙秦淮风光带', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/ea8e73f1-72c4-4e0c-b227-487d2ea946f1.png", description: '沉浸在烟笼寒水月笼沙的古意中。' },
      { name: '明孝陵', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/676e4302-680e-4531-9a0f-f746d6334a00.png", description: '明朝开国皇帝的陵寝，石象路秋景绝美。' }
    ],
    cuisines: [
      { name: '南京盐水鸭', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/700a2619-f297-4f92-b073-d3d12a97ecbb.png", description: '皮爽肉嫩，肥而不腻。' }
    ],
    tips: ['鸡鸣寺的樱花季非常推荐', '参观南京大屠杀遇难同胞纪念馆请保持肃静', '玄武湖适合晚饭后散步']
  },
  {
    id: 'suzhou',
    name: '苏州',
    region: '华东',
    rating: 4.8,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/e7d43b89-e54e-4e2a-883f-063f461c2fb3.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/e800ff4a-7dbc-40d8-94b6-fbd0b6ccbaaa.png",
    shortDescription: '园林之城，东方威尼斯，苏式生活的精致缩影。',
    fullDescription: '苏州自古便是江南繁华地。私家园林的移步换景与平江路的临水而居，构成了人们对江南水乡的所有向往。',
    attractions: [
      { name: '拙政园', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/239ce2ff-7564-4edf-b2a9-3d1eebc999ab.png", description: '中国四大名园之一，展现古典园林艺术精粹。' },
      { name: '虎丘', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/bf5ff905-e8dd-4056-b49f-96a4dea116f4.png", description: '“吴中第一名胜”，云岩寺塔屹立山巅。' }
    ],
    cuisines: [
      { name: '松鼠桂鱼', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/a149c7f0-f6a5-4d19-b5a4-e6b650a61316.png", description: '造型别致，酸甜可口。' }
    ],
    tips: ['园林门票建议提前通过公众号预约', '平江路适合慢慢游走寻找小吃', '可以去诚品书店感受现代苏州的一面']
  },
  {
    id: 'xiamen',
    name: '厦门',
    region: '华南',
    rating: 4.8,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/0d9843f7-1a06-4c5e-99e8-468d83bb977e.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/2b82c65f-751e-4345-87d5-5fedd7920cbd.png",
    shortDescription: '海上花园，清新鹭岛，慢节奏的海滨生活。',
    fullDescription: '厦门是一座适合浪费时光的城市。在鼓浪屿的小巷中迷路，或者在环岛路骑行吹海风，都是极为惬意的体验。',
    attractions: [
      { name: '鼓浪屿', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/3d5e6c6a-d2cd-43c0-9887-8778a124cfd4.png", description: '海上钢琴之岛，万国建筑汇聚地。' },
      { name: '厦门大学', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/a02b9b55-f28f-4cfb-8a1d-92cce60dc3df.png", description: '中国最美校园之一，背山面海。' }
    ],
    cuisines: [
      { name: '沙茶面', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/c84982d0-e8de-4f2e-aac0-255fc43dba6a.png", description: '浓郁的沙茶酱汁，配料自定义。' }
    ],
    tips: ['去鼓浪屿一定要提前买船票', '环岛路可以租双人自行车骑行', '曾厝垵适合晚上去逛小吃街']
  },
  {
    id: 'chongqing',
    name: '重庆',
    region: '西南',
    rating: 4.9,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/38441fc8-02b7-42d0-b02a-2c1a6e7829f1.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/8c9861b7-d574-4c5f-842a-6b8cdf94c28e.png",
    shortDescription: '魔幻8D城市，赛博朋克风格与热辣火锅的狂欢。',
    fullDescription: '山城重庆，导航在这里也会迷路。穿楼而过的轻轨、洪崖洞的梦幻灯火，以及街头巷尾的麻辣香气，共同构成了这座城市的独特性格。',
    attractions: [
      { name: '洪崖洞', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/9638618c-bd21-49ba-a58a-de1d3baae1b8.png", description: '极具巴渝传统建筑特色的吊脚楼建筑群。' },
      { name: '李子坝轻轨站', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/10d7f057-9a77-4097-9f4c-75e7ed1c0ffc.png", description: '亲眼见证轻轨在楼宇间穿梭的神奇场景。' }
    ],
    cuisines: [
      { name: '九宫格火锅', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/3904fa58-e098-4632-b497-fe0b97ee7bd5.png", description: '重油重辣，爽口痛快。' }
    ],
    tips: ['在重庆千万不要只相信地图，多问问当地人', '洪崖洞晚上亮灯后最壮观', '体验皇冠大扶梯，感受山城特色步道']
  },
  {
    id: 'wuhan',
    name: '武汉',
    region: '华中',
    rating: 4.6,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/0790e5df-d09a-44fc-8ee4-eca27c25589b.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/71440b55-2058-4964-8bf1-55c11ca27498.png",
    shortDescription: '九省通衢，江湖儿女，过早文化与樱花的绚烂。',
    fullDescription: '武汉是一座拥有江湖豪气的城市。武汉三镇不仅有长江奔流而过的壮阔，更有街头巷尾热干面的生活本味。',
    attractions: [
      { name: '黄鹤楼', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/253a8512-855a-4708-b3d7-5335877bd87d.png", description: '天下江山第一楼，文化底蕴深厚。' },
      { name: '东湖风景区', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/a6fac842-06c6-431d-a443-258637427827.png", description: '水域辽阔，一年四季皆有景。' }
    ],
    cuisines: [
      { name: '热干面', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/e6848041-7faf-4965-abaa-4351f764d037.png", description: '武汉过早的灵魂。' }
    ],
    tips: ['三四月是武大樱花最盛的时候', '户部巷可以尝试各种各样的汉味小吃', '体验一次轮渡过江，感受长江的宽广']
  },
  {
    id: 'changsha',
    name: '长沙',
    region: '华中',
    rating: 4.7,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/b004c53e-9141-44ee-8835-cf286c60fc75.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/b5bf1ffc-91bf-4d1f-a33f-f10c0de4f565.png",
    shortDescription: '不夜城长沙，湘味麻辣与现代网红潮流的碰撞。',
    fullDescription: '长沙以美食闻名遐迩。这里的深夜食堂从不打烊，从臭豆腐到网红奶茶，这里的街头永远充满活力。',
    attractions: [
      { name: '橘子洲', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/4581f260-4f35-4f47-909a-250559e0ff57.png", description: '“江天暮雪”，领略领袖风采。' },
      { name: '岳麓山', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/5c30b033-e16c-41b5-8f3e-891a3be3f1b2.png", description: '千年书院所在地，秋季赏枫绝佳。' }
    ],
    cuisines: [
      { name: '长沙臭豆腐', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/d450cfac-51d0-4c2c-9fff-8530fc3f4fc9.png", description: '闻着臭，吃着香，外酥里嫩。' }
    ],
    tips: ['茶颜悦色是这里的必喝饮品', '坡子街、五一广场是美食核心区', '岳麓书院门票要提前预约']
  },
  {
    id: 'guilin',
    name: '桂林',
    region: '华南',
    rating: 4.8,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/5d0507f8-1e36-4ff1-a66e-d42a8e98cebc.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/8beea1dc-8781-4536-a929-e75af4d414cd.png",
    shortDescription: '桂林山水甲天下，置身于水墨画般的漓江胜境。',
    fullDescription: '桂林以奇特的喀斯特地貌闻名。泛舟漓江，看象鼻山，或者在阳朔西街度过一个自由的夜晚，都是极佳的选择。',
    attractions: [
      { name: '漓江景区', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/5ecbe77e-65dc-48db-b2df-1a7b5d16e3a2.png", description: '沿途风光如画，二十元人民币背景所在地。' },
      { name: '象鼻山公园', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/46024678-8d3b-415b-8b11-ed21f9c57e6e.png", description: '桂林城徽，栩栩如生。' }
    ],
    cuisines: [
      { name: '桂林米粉', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/833cf9ce-8180-4d7a-b48a-e3b45c8a7615.png", description: '洁白、嫩滑、香口。' }
    ],
    tips: ['推荐尝试漓江竹筏游', '阳朔适合租电动车环游田园', '遇龙河漂流也是非常有意思的体验']
  },
  {
    id: 'kunming',
    name: '昆明',
    region: '西南',
    rating: 4.6,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/314f270c-c7c2-4f74-b54b-276b27431323.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/dbd544c2-c7e2-4f8d-a153-b58217980345.png",
    shortDescription: '春城昆明，鲜花不败，海鸥与碧湖的浪漫约会。',
    fullDescription: '昆明四季如春，气候宜人。漫步滇池岸边，或者去斗南花卉市场感受全国最大的浪漫中心，是放松心情的好办法。',
    attractions: [
      { name: '石林风景区', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/0a381fe8-41cf-4aa2-865e-c38218167b14.png", description: '世界地质奇观，鬼斧神工。' },
      { name: '滇池海埂公园', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/12be08f0-a78d-4911-95ae-21fd52c1c025.png", description: '冬季成千上万的海鸥从西伯利亚飞来。' }
    ],
    cuisines: [
      { name: '过桥米线', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/a0272b14-e036-47cd-bc14-66b4d833305a.png", description: '汤清味鲜，仪式感十足。' }
    ],
    tips: ['昆明海拔较高，紫外线强，注意防晒', '去斗南花市建议晚上去，种类更全', '野生菌火锅要在正规餐厅吃，确保煮熟']
  },
  {
    id: 'guiyang',
    name: '贵阳',
    region: '西南',
    rating: 4.5,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/a8f9fd78-2947-4175-9b5d-6483952fc375.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/61d4eb8e-a758-4c19-b44e-3e76e719d279.png",
    shortDescription: '爽爽的贵阳，避暑胜地，酸辣爽口的民族风情。',
    fullDescription: '贵阳是一座森林覆盖率极高的城市。这里的饮食文化极具特色，折耳根、酸汤鱼，带给你不一样的味觉挑战。',
    attractions: [
      { name: '甲秀楼', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/665fe517-1ddf-4faf-b98a-88cac8fca640.png", description: '闹中取静的古建筑，贵阳的地标。' },
      { name: '青岩古镇', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/0c60857b-cc2e-4fe6-8457-6c88de5ba4fd.png", description: '明代古镇，城墙保存完好。' }
    ],
    cuisines: [
      { name: '凯里酸汤鱼', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/b787fddb-3793-4cf6-a632-fa8cbac04ff7.png", description: '开胃神器，酸香麻辣。' }
    ],
    tips: ['贵阳天气阴晴不定，随身带把雨伞', '黔灵山公园的猴子很活泼，注意安全', '夜市上的小吃值得一一尝试']
  },
  {
    id: 'lhasa',
    name: '拉萨',
    region: '西南',
    rating: 4.9,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/07384942-039b-407b-abf9-97cb8b47025d.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/5b7ac7d9-381e-4272-acce-fe8cae63dfcd.png",
    shortDescription: '日光之城，信仰的高度，灵魂洗涤的纯净之地。',
    fullDescription: '拉萨是西藏首府，拥有庄严的布达拉宫和虔诚的大昭寺。在这里，天空近在咫尺，转经筒的声响回荡在高原。',
    attractions: [
      { name: '布达拉宫', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/67bf86bb-0367-40e8-9c59-c73d922d50a6.png", description: '世界上海拔最高的宏伟建筑群。' },
      { name: '大昭寺', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/f73c5389-8e79-4f9e-9e62-e1091ba09bbf.png", description: '西藏最神圣的寺庙，朝拜者的向往。' }
    ],
    cuisines: [
      { name: '酥油茶 & 糌粑', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/c83ddb28-8279-44d0-ab72-2b47fabccdda.png", description: '高原生活的能量源泉。' }
    ],
    tips: ['初到高原避免剧烈运动，预防高反', '布达拉宫门票需提前在公众号预约', '尊重当地宗教信仰和习俗']
  },
  {
    id: 'lanzhou',
    name: '兰州',
    region: '西北',
    rating: 4.4,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/27d4cf87-d6da-4e46-9f7d-8d289a2e9ef6.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/d35e3837-1965-4d2f-b67b-21ee330dc971.png",
    shortDescription: '金城兰州，黄河唯一的过城之光，一碗面的江湖。',
    fullDescription: '兰州是丝绸之路的重镇。黄河奔腾而过，在这里留下了古老的羊皮筏子和那一碗香透全国的牛肉面。',
    attractions: [
      { name: '中山桥', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/d8f67d6f-8dc0-4aa8-a157-b86ca9e2f891.png", description: '黄河第一桥，见证了兰州的百年沧桑。' },
      { name: '黄河母亲雕塑', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/9f74d435-59e9-4696-ad72-b7b0946bf284.png", description: '兰州的地标之一，表达对黄河的崇敬。' }
    ],
    cuisines: [
      { name: '兰州牛肉面', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/0c546884-82e5-4d83-9479-5ae252e35fce.png", description: '一清二白三红四绿五黄。' }
    ],
    tips: ['牛肉面一定要在早上吃才是最原味的', '体验一下羊皮筏子漂流', '这里是进入甘南旅游的最佳中转站']
  },
  {
    id: 'urumqi',
    name: '乌鲁木齐',
    region: '西北',
    rating: 4.6,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/7c25cd2f-58ca-43fd-809b-03569c89e325.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/aaacd261-5553-40b7-b5d9-a29d4a972906.png",
    shortDescription: '离海最远的城市，异域风情的极致诱惑。',
    fullDescription: '乌鲁木齐是新疆维吾尔自治区的首府。大巴扎的热闹、天山的巍峨，构成了这颗丝路明珠的迷人风采。',
    attractions: [
      { name: '新疆国际大巴扎', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/2338a5b0-d1aa-4908-84b2-99ed4185ead5.png", description: '世界规模最大的巴扎，集伊斯兰文化、建筑于一体。' },
      { name: '天山天池', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/f4d0acc2-de1e-4efd-a4f1-861e32704ed0.png", description: '高山湖泊，风景美如图画。' }
    ],
    cuisines: [
      { name: '新疆羊肉串', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/c6f61be6-abdc-4fd2-bcc2-e8b317a21791.png", description: '色香俱全，回味无穷。' }
    ],
    tips: ['新疆温差大，无论什么季节去都带一件外套', '当地水果非常甜脆，但也注意不要贪杯', '乌鲁木齐到天山天池需要大约1.5小时车程']
  },
  {
    id: 'dalian',
    name: '大连',
    region: '华北',
    rating: 4.7,
    previewImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/0ce76563-9858-4b44-93ba-e9259f176594.png",
    heroImageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/cca2e6df-c131-4d89-ae6e-2af527612fb9.png",
    shortDescription: '浪漫之都大连，北方的海，有广场与足球的回忆。',
    fullDescription: '大连拥有曲折迷人的海岸线和各式各样的广场景观。这里的街道整洁，充满海洋的气息，是一座充满浪漫情调的港口城市。',
    attractions: [
      { name: '星海广场', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/a2c91fcf-2d4f-4343-a464-4aa1f2bd034e.png", description: '世界最大的城市广场，赏夜景看喷泉。' },
      { name: '老虎滩海洋公园', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/3daa1d18-bd1c-46e8-a62c-6a2f1d3aaf7f.png", description: '集海洋生物展示、表演、游乐于一体。' }
    ],
    cuisines: [
      { name: '大连海鲜派', imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/2/24/04cad7e2-5837-450c-bd02-cfc2fbb0c443.png", description: '新鲜捕捞，保留大海的原味。' }
    ],
    tips: ['大连的现代有轨电车值得体验', '棒棰岛的海景非常适合拍照', '吃海鲜要去口碑好的正规饭店']
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
        
      