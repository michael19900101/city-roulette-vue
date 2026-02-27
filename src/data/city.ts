

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
    previewImageUrl: "/images/e6e6cda0-c3e3-4c18-8456-d46023841416.png",
    heroImageUrl: "/images/39e629c4-b7d4-4227-8847-a5334f484eef.png",
    shortDescription: '天府之国，美食之都，一只大熊猫慢生活的家园。',
    fullDescription: '成都，简称“蓉”，四川省省会。这里不仅有令人垂涎欲滴的川菜，更有深厚的历史底蕴和悠闲的生活节奏。从武侯祠的历史沉淀到春熙路的时尚繁华，成都总能给你独特的惊喜。',
    attractions: [
      {
        name: '大熊猫繁育研究基地',
        imageUrl: "/images/499efd09-1a56-4aa8-abe2-10b03c498186.png",
        description: '近距离观察国宝大熊猫的成长环境。'
      },
      {
        name: '宽窄巷子',
        imageUrl: "/images/79e24251-ff8d-454a-8170-ec2aaff3961b.png",
        description: '清代古街，体验成都最地道的慢生活时光。'
      }
    ],
    cuisines: [
      {
        name: '麻辣火锅',
        imageUrl: "/images/78528537-3b2b-4c7c-a326-9fc16fcc5856.png",
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
    previewImageUrl: "/images/104e631a-616e-4bab-b6f6-20706df4ff5c.png",
    heroImageUrl: "/images/fd0b7ded-8673-41f8-b4ef-e5afaf7d6341.png",
    shortDescription: '人间天堂，湖光山色与数字科技的完美融合。',
    fullDescription: '杭州以西湖美景著称于世，是中国最具幸福感的城市之一。这里既有古时的文人气息，又是现代电商与科技的弄潮儿。',
    attractions: [
      {
        name: '西湖风景名胜区',
        imageUrl: "/images/998b6490-a324-4d53-84ea-eef895bace23.png",
        description: '漫步苏堤，欣赏雷峰夕照。'
      }
    ],
    cuisines: [
      {
        name: '龙井虾仁',
        imageUrl: "/images/6298ab87-4ecd-45b5-abd5-69381a0d98a9.png",
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
    previewImageUrl: "/images/ef163f3b-9bbc-4ad6-88a6-f019b6541993.png",
    heroImageUrl: "/images/1aaea31a-7938-497e-b510-eebe0d321d6c.png",
    shortDescription: '十三朝古都，在这里一眼看尽千年中华历史。',
    fullDescription: '西安，古称长安。每一块秦砖汉瓦都诉说着历史的故事。从震撼世界的兵马俑到香气扑鼻的回民街，这里是文化旅者的必经之地。',
    attractions: [
      {
        name: '秦始皇兵马俑',
        imageUrl: "/images/7ca73381-ae15-43e3-8138-d50ecf813421.png",
        description: '世界第八大奇迹。'
      }
    ],
    cuisines: [
      {
        name: '肉夹馍',
        imageUrl: "/images/cb425296-6c81-4bbd-a1f7-1b0b1638e2df.png",
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
    previewImageUrl: "/images/995ae427-65e8-4741-a08b-a71af92b5f45.png",
    heroImageUrl: "/images/874249f9-67f0-4bd8-8004-be9af6b59ea5.png",
    shortDescription: '千年古都，现代之城，承载着厚重的历史与辉煌。',
    fullDescription: '北京是中国的首都，拥有故宫、长城等世界文化遗产。这里是政治、文化中心，既有宏伟的皇家园林，也有充满市井气息的胡同小巷。',
    attractions: [
      { name: '故宫博物院', imageUrl: "/images/7c827b65-1339-4460-a267-fe3db1be0d6e.png", description: '明清两代的皇家宫殿。' },
      { name: '八达岭长城', imageUrl: "/images/271b4679-bbb6-4410-964b-bfa337f2caca.png", description: '万里长城的精华，壮丽非凡。' }
    ],
    cuisines: [
      { name: '北京烤鸭', imageUrl: "/images/9c86ee7f-e323-4bdd-834e-2ccbd8d2d5d4.png", description: '色泽红亮，肉质细嫩。' }
    ],
    tips: ['故宫门票需提前在官网预约', '登长城建议穿舒适的运动鞋', '春秋两季是北京最美的季节']
  },
  {
    id: 'shanghai',
    name: '上海',
    region: '华北',
    rating: 4.9,
    previewImageUrl: "/images/7ee65159-8045-4917-8586-11fc6921de40.png",
    heroImageUrl: "/images/fccaca4f-3cf9-4159-97a6-2ebc85eba973.png",
    shortDescription: '魔都上海，海派文化与国际时尚的交汇点。',
    fullDescription: '上海是中国最大的经济中心，外滩的万国建筑博览群与浦东的摩天大楼隔江相望，展现了过去与未来的完美对话。',
    attractions: [
      { name: '外滩', imageUrl: "/images/44edf23a-938c-4a1b-9add-524bbd3ceeba.png", description: '欣赏浦江两岸璀璨夜景的最佳地点。' },
      { name: '上海迪士尼乐园', imageUrl: "/images/3ddecc59-b108-466e-ad56-dbfb33468fa0.png", description: '点亮心中奇梦，老少皆宜的童话世界。' }
    ],
    cuisines: [
      { name: '南翔小笼馒头', imageUrl: "/images/98b8842d-e3dc-4389-ab09-faea176765bb.png", description: '皮薄馅丰，汤汁鲜美。' }
    ],
    tips: ['武康路适合Citywalk慢游', '外滩亮灯时间通常在19点', '地铁是出行的首选方式']
  },
  {
    id: 'guangzhou',
    name: '广州',
    region: '华南',
    rating: 4.8,
    previewImageUrl: "/images/35f89075-29cb-4693-b0f6-7880197adcb5.png",
    heroImageUrl: "/images/19805e61-5e9e-4cd3-bd0a-a78dba83c9b6.png",
    shortDescription: '食在广州，千年商都的烟火气与现代感。',
    fullDescription: '广州是岭南文化的核心地，繁华的珠江新城与古老的西关大屋共存。早茶文化深刻体现了这座城市对于生活品质的极致追求。',
    attractions: [
      { name: '广州塔（小蛮腰）', imageUrl: "/images/f882f810-4cfc-4428-b8a7-b725687d3a0f.png", description: '广州的地标建筑，俯瞰全城美景。' },
      { name: '沙面岛', imageUrl: "/images/cab33d0d-4489-4f98-b88d-622bb61ff5a5.png", description: '充满欧式风情的历史建筑群。' }
    ],
    cuisines: [
      { name: '粤式早茶', imageUrl: "/images/15d71d44-6d43-45bf-976a-64c552b0f7aa.png", description: '点心丰富多样，精致美味。' }
    ],
    tips: ['一定要体验一次正宗的广式早茶', '上下九步行街是美食和逛街的好去处', '夏季注意防高温防阵雨']
  },
  {
    id: 'shenzhen',
    name: '深圳',
    region: '华南',
    rating: 4.6,
    previewImageUrl: "/images/000458e2-87a3-4d1d-8a4f-a576bb3600ae.png",
    heroImageUrl: "/images/fa5d0859-f626-442e-9b72-ed0013a70867.png",
    shortDescription: '创新之都，中国硅谷，年轻活力的梦想之城。',
    fullDescription: '深圳是一座从渔村奇迹般崛起的现代化大都市。这里充满了科技感与创新精神，同时拥有美丽的海岸线和丰富的公园资源。',
    attractions: [
      { name: '大梅沙海滨公园', imageUrl: "/images/847b58e6-378f-4c98-9705-386687d2130a.png", description: '金色的沙滩，迷人的海景。' },
      { name: '世界之窗', imageUrl: "/images/00c5a591-ff4f-4e0c-83ed-da3a23b2bbe4.png", description: '缩微景观公园，带你一日游遍全球。' }
    ],
    cuisines: [
      { name: '光明乳鸽', imageUrl: "/images/31e13b0f-cb6a-4181-b1cd-a89eedd0f554.png", description: '皮酥、骨软、肉嫩、多汁。' }
    ],
    tips: ['体验最前沿的电子产品集散地华强北', '深圳湾公园适合骑行观鸟', '注意做好防晒措施']
  },
  {
    id: 'nanjing',
    name: '南京',
    region: '华东',
    rating: 4.7,
    previewImageUrl: "/images/129b92ca-13c7-4f8b-ae15-75abd815c2f6.png",
    heroImageUrl: "/images/b761c163-3360-4b48-8d71-b6eff10cbd5c.png",
    shortDescription: '六朝古都，十里秦淮，读懂金陵的温柔与厚重。',
    fullDescription: '南京承载着厚重的历史记忆。从中山陵的庄严肃穆到先锋书店的人文气息，这座城市散发着一种安稳而深沉的魅力。',
    attractions: [
      { name: '夫子庙秦淮风光带', imageUrl: "/images/ea8e73f1-72c4-4e0c-b227-487d2ea946f1.png", description: '沉浸在烟笼寒水月笼沙的古意中。' },
      { name: '明孝陵', imageUrl: "/images/676e4302-680e-4531-9a0f-f746d6334a00.png", description: '明朝开国皇帝的陵寝，石象路秋景绝美。' }
    ],
    cuisines: [
      { name: '南京盐水鸭', imageUrl: "/images/700a2619-f297-4f92-b073-d3d12a97ecbb.png", description: '皮爽肉嫩，肥而不腻。' }
    ],
    tips: ['鸡鸣寺的樱花季非常推荐', '参观南京大屠杀遇难同胞纪念馆请保持肃静', '玄武湖适合晚饭后散步']
  },
  {
    id: 'suzhou',
    name: '苏州',
    region: '华东',
    rating: 4.8,
    previewImageUrl: "/images/e7d43b89-e54e-4e2a-883f-063f461c2fb3.png",
    heroImageUrl: "/images/e800ff4a-7dbc-40d8-94b6-fbd0b6ccbaaa.png",
    shortDescription: '园林之城，东方威尼斯，苏式生活的精致缩影。',
    fullDescription: '苏州自古便是江南繁华地。私家园林的移步换景与平江路的临水而居，构成了人们对江南水乡的所有向往。',
    attractions: [
      { name: '拙政园', imageUrl: "/images/239ce2ff-7564-4edf-b2a9-3d1eebc999ab.png", description: '中国四大名园之一，展现古典园林艺术精粹。' },
      { name: '虎丘', imageUrl: "/images/bf5ff905-e8dd-4056-b49f-96a4dea116f4.png", description: '“吴中第一名胜”，云岩寺塔屹立山巅。' }
    ],
    cuisines: [
      { name: '松鼠桂鱼', imageUrl: "/images/a149c7f0-f6a5-4d19-b5a4-e6b650a61316.png", description: '造型别致，酸甜可口。' }
    ],
    tips: ['园林门票建议提前通过公众号预约', '平江路适合慢慢游走寻找小吃', '可以去诚品书店感受现代苏州的一面']
  },
  {
    id: 'xiamen',
    name: '厦门',
    region: '华南',
    rating: 4.8,
    previewImageUrl: "/images/0d9843f7-1a06-4c5e-99e8-468d83bb977e.png",
    heroImageUrl: "/images/2b82c65f-751e-4345-87d5-5fedd7920cbd.png",
    shortDescription: '海上花园，清新鹭岛，慢节奏的海滨生活。',
    fullDescription: '厦门是一座适合浪费时光的城市。在鼓浪屿的小巷中迷路，或者在环岛路骑行吹海风，都是极为惬意的体验。',
    attractions: [
      { name: '鼓浪屿', imageUrl: "/images/3d5e6c6a-d2cd-43c0-9887-8778a124cfd4.png", description: '海上钢琴之岛，万国建筑汇聚地。' },
      { name: '厦门大学', imageUrl: "/images/a02b9b55-f28f-4cfb-8a1d-92cce60dc3df.png", description: '中国最美校园之一，背山面海。' }
    ],
    cuisines: [
      { name: '沙茶面', imageUrl: "/images/c84982d0-e8de-4f2e-aac0-255fc43dba6a.png", description: '浓郁的沙茶酱汁，配料自定义。' }
    ],
    tips: ['去鼓浪屿一定要提前买船票', '环岛路可以租双人自行车骑行', '曾厝垵适合晚上去逛小吃街']
  },
  {
    id: 'chongqing',
    name: '重庆',
    region: '西南',
    rating: 4.9,
    previewImageUrl: "/images/38441fc8-02b7-42d0-b02a-2c1a6e7829f1.png",
    heroImageUrl: "/images/8c9861b7-d574-4c5f-842a-6b8cdf94c28e.png",
    shortDescription: '魔幻8D城市，赛博朋克风格与热辣火锅的狂欢。',
    fullDescription: '山城重庆，导航在这里也会迷路。穿楼而过的轻轨、洪崖洞的梦幻灯火，以及街头巷尾的麻辣香气，共同构成了这座城市的独特性格。',
    attractions: [
      { name: '洪崖洞', imageUrl: "/images/9638618c-bd21-49ba-a58a-de1d3baae1b8.png", description: '极具巴渝传统建筑特色的吊脚楼建筑群。' },
      { name: '李子坝轻轨站', imageUrl: "/images/10d7f057-9a77-4097-9f4c-75e7ed1c0ffc.png", description: '亲眼见证轻轨在楼宇间穿梭的神奇场景。' }
    ],
    cuisines: [
      { name: '九宫格火锅', imageUrl: "/images/3904fa58-e098-4632-b497-fe0b97ee7bd5.png", description: '重油重辣，爽口痛快。' }
    ],
    tips: ['在重庆千万不要只相信地图，多问问当地人', '洪崖洞晚上亮灯后最壮观', '体验皇冠大扶梯，感受山城特色步道']
  },
  {
    id: 'wuhan',
    name: '武汉',
    region: '华中',
    rating: 4.6,
    previewImageUrl: "/images/0790e5df-d09a-44fc-8ee4-eca27c25589b.png",
    heroImageUrl: "/images/71440b55-2058-4964-8bf1-55c11ca27498.png",
    shortDescription: '九省通衢，江湖儿女，过早文化与樱花的绚烂。',
    fullDescription: '武汉是一座拥有江湖豪气的城市。武汉三镇不仅有长江奔流而过的壮阔，更有街头巷尾热干面的生活本味。',
    attractions: [
      { name: '黄鹤楼', imageUrl: "/images/253a8512-855a-4708-b3d7-5335877bd87d.png", description: '天下江山第一楼，文化底蕴深厚。' },
      { name: '东湖风景区', imageUrl: "/images/a6fac842-06c6-431d-a443-258637427827.png", description: '水域辽阔，一年四季皆有景。' }
    ],
    cuisines: [
      { name: '热干面', imageUrl: "/images/e6848041-7faf-4965-abaa-4351f764d037.png", description: '武汉过早的灵魂。' }
    ],
    tips: ['三四月是武大樱花最盛的时候', '户部巷可以尝试各种各样的汉味小吃', '体验一次轮渡过江，感受长江的宽广']
  },
  {
    id: 'changsha',
    name: '长沙',
    region: '华中',
    rating: 4.7,
    previewImageUrl: "/images/b004c53e-9141-44ee-8835-cf286c60fc75.png",
    heroImageUrl: "/images/b5bf1ffc-91bf-4d1f-a33f-f10c0de4f565.png",
    shortDescription: '不夜城长沙，湘味麻辣与现代网红潮流的碰撞。',
    fullDescription: '长沙以美食闻名遐迩。这里的深夜食堂从不打烊，从臭豆腐到网红奶茶，这里的街头永远充满活力。',
    attractions: [
      { name: '橘子洲', imageUrl: "/images/4581f260-4f35-4f47-909a-250559e0ff57.png", description: '“江天暮雪”，领略领袖风采。' },
      { name: '岳麓山', imageUrl: "/images/5c30b033-e16c-41b5-8f3e-891a3be3f1b2.png", description: '千年书院所在地，秋季赏枫绝佳。' }
    ],
    cuisines: [
      { name: '长沙臭豆腐', imageUrl: "/images/d450cfac-51d0-4c2c-9fff-8530fc3f4fc9.png", description: '闻着臭，吃着香，外酥里嫩。' }
    ],
    tips: ['茶颜悦色是这里的必喝饮品', '坡子街、五一广场是美食核心区', '岳麓书院门票要提前预约']
  },
  {
    id: 'guilin',
    name: '桂林',
    region: '华南',
    rating: 4.8,
    previewImageUrl: "/images/5d0507f8-1e36-4ff1-a66e-d42a8e98cebc.png",
    heroImageUrl: "/images/8beea1dc-8781-4536-a929-e75af4d414cd.png",
    shortDescription: '桂林山水甲天下，置身于水墨画般的漓江胜境。',
    fullDescription: '桂林以奇特的喀斯特地貌闻名。泛舟漓江，看象鼻山，或者在阳朔西街度过一个自由的夜晚，都是极佳的选择。',
    attractions: [
      { name: '漓江景区', imageUrl: "/images/5ecbe77e-65dc-48db-b2df-1a7b5d16e3a2.png", description: '沿途风光如画，二十元人民币背景所在地。' },
      { name: '象鼻山公园', imageUrl: "/images/46024678-8d3b-415b-8b11-ed21f9c57e6e.png", description: '桂林城徽，栩栩如生。' }
    ],
    cuisines: [
      { name: '桂林米粉', imageUrl: "/images/833cf9ce-8180-4d7a-b48a-e3b45c8a7615.png", description: '洁白、嫩滑、香口。' }
    ],
    tips: ['推荐尝试漓江竹筏游', '阳朔适合租电动车环游田园', '遇龙河漂流也是非常有意思的体验']
  },
  {
    id: 'kunming',
    name: '昆明',
    region: '西南',
    rating: 4.6,
    previewImageUrl: "/images/314f270c-c7c2-4f74-b54b-276b27431323.png",
    heroImageUrl: "/images/dbd544c2-c7e2-4f8d-a153-b58217980345.png",
    shortDescription: '春城昆明，鲜花不败，海鸥与碧湖的浪漫约会。',
    fullDescription: '昆明四季如春，气候宜人。漫步滇池岸边，或者去斗南花卉市场感受全国最大的浪漫中心，是放松心情的好办法。',
    attractions: [
      { name: '石林风景区', imageUrl: "/images/0a381fe8-41cf-4aa2-865e-c38218167b14.png", description: '世界地质奇观，鬼斧神工。' },
      { name: '滇池海埂公园', imageUrl: "/images/12be08f0-a78d-4911-95ae-21fd52c1c025.png", description: '冬季成千上万的海鸥从西伯利亚飞来。' }
    ],
    cuisines: [
      { name: '过桥米线', imageUrl: "/images/a0272b14-e036-47cd-bc14-66b4d833305a.png", description: '汤清味鲜，仪式感十足。' }
    ],
    tips: ['昆明海拔较高，紫外线强，注意防晒', '去斗南花市建议晚上去，种类更全', '野生菌火锅要在正规餐厅吃，确保煮熟']
  },
  {
    id: 'guiyang',
    name: '贵阳',
    region: '西南',
    rating: 4.5,
    previewImageUrl: "/images/a8f9fd78-2947-4175-9b5d-6483952fc375.png",
    heroImageUrl: "/images/61d4eb8e-a758-4c19-b44e-3e76e719d279.png",
    shortDescription: '爽爽的贵阳，避暑胜地，酸辣爽口的民族风情。',
    fullDescription: '贵阳是一座森林覆盖率极高的城市。这里的饮食文化极具特色，折耳根、酸汤鱼，带给你不一样的味觉挑战。',
    attractions: [
      { name: '甲秀楼', imageUrl: "/images/665fe517-1ddf-4faf-b98a-88cac8fca640.png", description: '闹中取静的古建筑，贵阳的地标。' },
      { name: '青岩古镇', imageUrl: "/images/0c60857b-cc2e-4fe6-8457-6c88de5ba4fd.png", description: '明代古镇，城墙保存完好。' }
    ],
    cuisines: [
      { name: '凯里酸汤鱼', imageUrl: "/images/b787fddb-3793-4cf6-a632-fa8cbac04ff7.png", description: '开胃神器，酸香麻辣。' }
    ],
    tips: ['贵阳天气阴晴不定，随身带把雨伞', '黔灵山公园的猴子很活泼，注意安全', '夜市上的小吃值得一一尝试']
  },
  {
    id: 'lhasa',
    name: '拉萨',
    region: '西南',
    rating: 4.9,
    previewImageUrl: "/images/07384942-039b-407b-abf9-97cb8b47025d.png",
    heroImageUrl: "/images/5b7ac7d9-381e-4272-acce-fe8cae63dfcd.png",
    shortDescription: '日光之城，信仰的高度，灵魂洗涤的纯净之地。',
    fullDescription: '拉萨是西藏首府，拥有庄严的布达拉宫和虔诚的大昭寺。在这里，天空近在咫尺，转经筒的声响回荡在高原。',
    attractions: [
      { name: '布达拉宫', imageUrl: "/images/67bf86bb-0367-40e8-9c59-c73d922d50a6.png", description: '世界上海拔最高的宏伟建筑群。' },
      { name: '大昭寺', imageUrl: "/images/f73c5389-8e79-4f9e-9e62-e1091ba09bbf.png", description: '西藏最神圣的寺庙，朝拜者的向往。' }
    ],
    cuisines: [
      { name: '酥油茶 & 糌粑', imageUrl: "/images/c83ddb28-8279-44d0-ab72-2b47fabccdda.png", description: '高原生活的能量源泉。' }
    ],
    tips: ['初到高原避免剧烈运动，预防高反', '布达拉宫门票需提前在公众号预约', '尊重当地宗教信仰和习俗']
  },
  {
    id: 'lanzhou',
    name: '兰州',
    region: '西北',
    rating: 4.4,
    previewImageUrl: "/images/27d4cf87-d6da-4e46-9f7d-8d289a2e9ef6.png",
    heroImageUrl: "/images/d35e3837-1965-4d2f-b67b-21ee330dc971.png",
    shortDescription: '金城兰州，黄河唯一的过城之光，一碗面的江湖。',
    fullDescription: '兰州是丝绸之路的重镇。黄河奔腾而过，在这里留下了古老的羊皮筏子和那一碗香透全国的牛肉面。',
    attractions: [
      { name: '中山桥', imageUrl: "/images/d8f67d6f-8dc0-4aa8-a157-b86ca9e2f891.png", description: '黄河第一桥，见证了兰州的百年沧桑。' },
      { name: '黄河母亲雕塑', imageUrl: "/images/9f74d435-59e9-4696-ad72-b7b0946bf284.png", description: '兰州的地标之一，表达对黄河的崇敬。' }
    ],
    cuisines: [
      { name: '兰州牛肉面', imageUrl: "/images/0c546884-82e5-4d83-9479-5ae252e35fce.png", description: '一清二白三红四绿五黄。' }
    ],
    tips: ['牛肉面一定要在早上吃才是最原味的', '体验一下羊皮筏子漂流', '这里是进入甘南旅游的最佳中转站']
  },
  {
    id: 'urumqi',
    name: '乌鲁木齐',
    region: '西北',
    rating: 4.6,
    previewImageUrl: "/images/7c25cd2f-58ca-43fd-809b-03569c89e325.png",
    heroImageUrl: "/images/aaacd261-5553-40b7-b5d9-a29d4a972906.png",
    shortDescription: '离海最远的城市，异域风情的极致诱惑。',
    fullDescription: '乌鲁木齐是新疆维吾尔自治区的首府。大巴扎的热闹、天山的巍峨，构成了这颗丝路明珠的迷人风采。',
    attractions: [
      { name: '新疆国际大巴扎', imageUrl: "/images/2338a5b0-d1aa-4908-84b2-99ed4185ead5.png", description: '世界规模最大的巴扎，集伊斯兰文化、建筑于一体。' },
      { name: '天山天池', imageUrl: "/images/f4d0acc2-de1e-4efd-a4f1-861e32704ed0.png", description: '高山湖泊，风景美如图画。' }
    ],
    cuisines: [
      { name: '新疆羊肉串', imageUrl: "/images/c6f61be6-abdc-4fd2-bcc2-e8b317a21791.png", description: '色香俱全，回味无穷。' }
    ],
    tips: ['新疆温差大，无论什么季节去都带一件外套', '当地水果非常甜脆，但也注意不要贪杯', '乌鲁木齐到天山天池需要大约1.5小时车程']
  },
  {
    id: 'dalian',
    name: '大连',
    region: '华北',
    rating: 4.7,
    previewImageUrl: "/images/0ce76563-9858-4b44-93ba-e9259f176594.png",
    heroImageUrl: "/images/cca2e6df-c131-4d89-ae6e-2af527612fb9.png",
    shortDescription: '浪漫之都大连，北方的海，有广场与足球的回忆。',
    fullDescription: '大连拥有曲折迷人的海岸线和各式各样的广场景观。这里的街道整洁，充满海洋的气息，是一座充满浪漫情调的港口城市。',
    attractions: [
      { name: '星海广场', imageUrl: "/images/a2c91fcf-2d4f-4343-a464-4aa1f2bd034e.png", description: '世界最大的城市广场，赏夜景看喷泉。' },
      { name: '老虎滩海洋公园', imageUrl: "/images/3daa1d18-bd1c-46e8-a62c-6a2f1d3aaf7f.png", description: '集海洋生物展示、表演、游乐于一体。' }
    ],
    cuisines: [
      { name: '大连海鲜派', imageUrl: "/images/04cad7e2-5837-450c-bd02-cfc2fbb0c443.png", description: '新鲜捕捞，保留大海的原味。' }
    ],
    tips: ['大连的现代有轨电车值得体验', '棒棰岛的海景非常适合拍照', '吃海鲜要去口碑好的正规饭店']
  },
  {
    id: 'yangzhou',
    name: '扬州',
    region: '华东',
    rating: 4.7,
    previewImageUrl: "/images/a5179a1e-8482-47a1-af79-3c93943807e1.png",
    heroImageUrl: "/images/9e716709-615f-439f-9df3-20716816e523.png",
    shortDescription: '烟花三月下扬州，感受文人笔下的江南雅致生活。',
    fullDescription: '扬州是一座有着两千多年历史的古城，以园林艺术和精致的淮扬菜闻名。瘦西湖的旖旎风光与个园的石艺景观，构成了一幅绝美的江南画卷。',
    attractions: [
      { name: '瘦西湖', imageUrl: "/images/29288b3d-8bd6-4d86-89bf-a97d89683093.png", description: '园林与湖泊的完美契合。' },
      { name: '个园', imageUrl: "/images/3f165337-d66b-4b58-9bc1-ebf35696de68.png", description: '中国四大名园之一，以四季假山著称。' }
    ],
    cuisines: [
      { name: '扬州炒饭', imageUrl: "/images/b453688c-abce-4cab-8ae1-c02de86125ae.png", description: '颗粒分明，色香味俱全。' }
    ],
    tips: ['“早上皮包水”体验扬州早茶十分重要', '三月份是扬州最美的季节', '古运河边夜游很有意境']
  },
  {
    id: 'shaoxing',
    name: '绍兴',
    region: '华东',
    rating: 4.6,
    previewImageUrl: "/images/760ab26b-95a3-474a-85d4-d261fd42bcbc.png",
    heroImageUrl: "/images/5b781d0c-a371-42d2-ba29-f89b7a93bb1e.png",
    shortDescription: '鲁迅笔下的故乡，充满书卷气与黄酒香的水乡。',
    fullDescription: '绍兴是著名的水乡之都，拥有深厚的人文底蕴。乌篷船、黄酒、鲁迅故居，都是这座城市独有的名片。',
    attractions: [
      { name: '鲁迅故里', imageUrl: "/images/c7cf809a-94ae-4b61-85e9-af25b50987ba.png", description: '寻找百草园到三味书屋的童年。' },
      { name: '沈园', imageUrl: "/images/8f60ff43-64a7-455b-8604-5b282c50e9f3.png", description: '陆游与唐婉的凄美爱情见证地。' }
    ],
    cuisines: [
      { name: '绍兴黄酒', imageUrl: "/images/d127264f-3e30-4648-9a50-0b394721bbc4.png", description: '越酒之魂，口感醇厚。' }
    ],
    tips: ['体验乌篷船一定要选择东湖或柯岩线路', '绍兴话比较有意思可以尝试学两句', '臭豆腐在路边摊买往往味道更正。']
  },
  {
    id: 'ningbo',
    name: '宁波',
    region: '华东',
    rating: 4.5,
    previewImageUrl: "/images/534cf04a-476a-4448-90ff-fca5ae20cf1b.png",
    heroImageUrl: "/images/bbcfe3f9-47d1-47c5-a621-d44499885f3e.png",
    shortDescription: '海定则波宁，书藏古今，港通天下的商贸之城。',
    fullDescription: '宁波是中国首批沿海开放城市，既有时光沉淀的古老藏书阁，也有繁忙的现代化东方大港。',
    attractions: [
      { name: '天一阁', imageUrl: "/images/d3e3d3d5-c8e9-4d62-85d0-5fe179cd8062.png", description: '亚洲现存最古老的私家藏书楼。' },
      { name: '老外滩', imageUrl: "/images/755e92eb-175b-48df-af59-b1dc547df75d.png", description: '中国最早的外滩，比上海大滩更早开埠。' }
    ],
    cuisines: [
      { name: '宁波汤圆', imageUrl: "/images/2f322d48-5668-4de0-ba0d-ef04975e3a1b.png", description: '香甜糯滑，传统的中式甜点。' }
    ],
    tips: ['如果您喜欢海洋，可以去舟山普陀山很近', '老外滩适合感受夜生活', '宁波博物馆建筑艺术感极强']
  },
  {
    id: 'qingdao',
    name: '青岛',
    region: '华东',
    rating: 4.8,
    previewImageUrl: "/images/ed7e900f-2dc5-49f6-97bf-b2d13f18b2f2.png",
    heroImageUrl: "/images/25d25fc7-a0b2-4111-b9d5-20f8e7425c01.png",
    shortDescription: '红瓦绿树，碧海蓝天，在这座啤酒之城畅饮。',
    fullDescription: '青岛是一座极具欧陆风情的滨海城市，八大关的德式建筑群与五四广场的现代地标交相辉映。',
    attractions: [
      { name: '栈桥', imageUrl: "/images/024155f1-75a9-4462-a799-a1f3269417e2.png", description: '青岛的象征，深入大海的步行桥。' },
      { name: '八大关', imageUrl: "/images/03b95398-af00-4268-863d-d6a104941829.png", description: '万国建筑博览群，漫步其间仿佛置身欧洲。' }
    ],
    cuisines: [
      { name: '青岛啤酒', imageUrl: "/images/deca8ca2-7220-4306-a99c-540270e81aa9.png", description: '世界著名的特产，享受当地扎啤的豪爽。' }
    ],
    tips: ['一定要喝塑料袋装的扎啤', '崂山登山建议预留一整天时间', '石老人海水浴场人相对少一些。']
  },
  {
    id: 'weihai',
    name: '威海',
    region: '华东',
    rating: 4.7,
    previewImageUrl: "/images/975a37da-2cd3-4570-87b3-ab7bf75c05f2.png",
    heroImageUrl: "/images/676d1217-254b-4d65-8c35-8d569f973032.png",
    shortDescription: '精致威海，最干净的滨海之城，看绝美日落。',
    fullDescription: '威海是中国最宜居的城市之一，拥有清澈的海水和整洁的街道。在这里，每一处海岸线都是一幅风景画。',
    attractions: [
      { name: '刘公岛', imageUrl: "/images/4453a970-25d1-4194-be66-6aafdfbec026.png", description: '甲午战争的历史见证地。' },
      { name: '火炬八街', imageUrl: "/images/9ad7190b-8f47-453b-b1b5-029600f4ae4c.png", description: '国内版的“小镰仓”，出片率极高。' }
    ],
    cuisines: [
      { name: '威海海鲜', imageUrl: "/images/0cc02e09-a116-4d99-8b06-94feb5d0caa2.png", description: '来自北纬37度的纯净美味。' }
    ],
    tips: ['租摩的环海路骑行是最佳游玩方式', '一定要去那香海看一次日落', '防晒措施什么时候都不能省。']
  },
  {
    id: 'huangshan',
    name: '黄山',
    region: '华东',
    rating: 4.9,
    previewImageUrl: "/images/97a009e3-5eb7-4e33-b027-57344611f2c8.png",
    heroImageUrl: "/images/74f58f71-cb76-485f-9641-86556767c66e.png",
    shortDescription: '五岳归来不看山，黄山归来不看岳。',
    fullDescription: '黄山以奇松、怪石、云海、温泉、冬雪“五绝”称著于世，被誉为“天下第一奇山”。下山后还可漫步在徽州古村落中感受白墙黑瓦的韵味。',
    attractions: [
      { name: '黄山风景区', imageUrl: "/images/259435f7-370d-4f6a-8125-49ad382f7d27.png", description: '徒步登山探访“猴子观海”。' },
      { name: '宏村', imageUrl: "/images/255417c3-881c-4c7f-be24-c8c70affe52b.png", description: '水墨画里的村庄，徽派建筑的巅峰之作。' }
    ],
    cuisines: [
      { name: '臭鳜鱼', imageUrl: "/images/f7741dc3-1c71-4af1-8854-aee2c3abf3b8.png", description: '闻着臭吃着香，徽菜的杰出代表。' }
    ],
    tips: ['登山建议带登山杖和雨披', '一定要去迎客松前留纪念', '汤口镇是通往景区的核心中转站']
  },
  {
    id: 'hefei',
    name: '合肥',
    region: '华东',
    rating: 4.3,
    previewImageUrl: "/images/751caae9-ca20-42db-8b18-f57b0a529adf.png",
    heroImageUrl: "/images/37ddb665-7b48-4313-822f-160c8363943d.png",
    shortDescription: '包拯故里，科技新城，合肥在不断崛起中。',
    fullDescription: '合肥作为安徽省会，近年来发展极其迅速。这里既有历史气息浓厚的三河古镇，也有充满现代感的科技艺术场馆。',
    attractions: [
      { name: '包公园', imageUrl: "/images/02033a1b-4169-4c2f-a583-38ba882b527f.png", description: '纪念著名清官包拯的文化景区。' },
      { name: '三河古镇', imageUrl: "/images/7ab8b6aa-7c78-43a5-b67f-7dbf7a7da301.png", description: '典型的皖中水乡古镇。' }
    ],
    cuisines: [
      { name: '逍遥鸡', imageUrl: "/images/9948b1f3-b713-4487-9301-697a15ec02a0.png", description: '肉色金黄，咸中带甜。' }
    ],
    tips: ['合肥的高铁站交通便利，适合周边游起点', '科技型景点可以提前预约参观', '推荐去罍街品尝徽式小吃']
  },
  {
    id: 'zhuhai',
    name: '珠海',
    region: '华南',
    rating: 4.7,
    previewImageUrl: "/images/052f5e5b-067e-4199-a53e-9f55d3d2d950.png",
    heroImageUrl: "/images/9db3a044-046c-48d8-8b92-60b7cbf6d799.png",
    shortDescription: '海上云天，百岛之市，浪漫的情侣大道在延伸。',
    fullDescription: '珠海是一座环境优美的花园式滨海城市。漫步情侣路，欣赏灯塔与珠海大剧院，感受悠闲的生活节奏。',
    attractions: [
      { name: '长隆海洋王国', imageUrl: "/images/c29c488e-125b-4deb-91e7-dcca884e9806.png", description: '全球最大的海洋主题乐园之一。' },
      { name: '情侣路', imageUrl: "/images/651ea191-7566-4804-ab97-eadcf16fd540.png", description: '珠海浪漫的标志，串联多个核心地标。' }
    ],
    cuisines: [
      { name: '横琴蚝', imageUrl: "/images/969edd1d-aa78-426b-a898-4804203b5641.png", description: '肥硕鲜嫩，远近驰名。' }
    ],
    tips: ['珠海大剧院（日月贝）适合夜晚拍照', '可以去香洲港坐船去外岭岛游玩', '注意关注去澳门的过关人流量']
  },
  {
    id: 'foshan',
    name: '佛山',
    region: '华南',
    rating: 4.5,
    previewImageUrl: "/images/23b8925b-d7bd-427a-b755-39acf2a7e41d.png",
    heroImageUrl: "/images/a17b4b79-b027-462c-9e1e-e1298d5d4759.png",
    shortDescription: '武术之乡，美食之源，探访黄飞鸿的传承地。',
    fullDescription: '佛山是岭南文化的重要发源地，以顺德美食和功夫文化闻名海内外。这里是黄飞鸿与叶问的故乡。',
    attractions: [
      { name: '顺德清晖园', imageUrl: "/images/1f696108-f6cc-4292-a8e8-71f90647f6ca.png", description: '岭南四大名园之一，步步皆精致。' },
      { name: '祖庙', imageUrl: "/images/66f7a64a-4b0d-45fe-9191-d107c4cda74d.png", description: '集合了道教文化、功夫文化与民间艺术的圣地。' }
    ],
    cuisines: [
      { name: '顺德双皮奶', imageUrl: "/images/8ef52e00-83ab-4d29-8b8d-ecc78fa28529.png", description: '奶香醇厚，口感丝滑柔润。' }
    ],
    tips: ['在佛山一定要去顺德吃一整天', '租一套传统汉服在祖庙拍照非常有格调', '黄飞鸿纪念馆每天有几场武术表演不能错过']
  },
  {
    id: 'nanning',
    name: '南宁',
    region: '华南',
    rating: 4.4,
    previewImageUrl: "/images/4056113b-8b46-4cc0-8536-5ed68748cee4.png",
    heroImageUrl: "/images/9a4bafbe-fd95-416a-8ea4-8129e0305c14.png",
    shortDescription: '中国绿城，半城绿树半城楼。',
    fullDescription: '南宁是一座充满热带气息的绿色城市。这里的夜市灯火通明，满载着广西特色和东南亚风情的美食。',
    attractions: [
      { name: '青秀山', imageUrl: "/images/601252b0-2bac-4adf-b986-0125fc368d90.png", description: '国家5A级景区，森林覆盖率极高。' },
      { name: '中山路夜市', imageUrl: "/images/8e1beec0-0123-4aad-8f18-8c452925f7dc.png", description: '著名的美食一条街，越夜越热闹。' }
    ],
    cuisines: [
      { name: '老友粉', imageUrl: "/images/405f4852-d9cf-4d3c-9c03-54788269c84c.png", description: '酸辣咸香，开胃首选。' }
    ],
    tips: ['一定要尝试广西各种各样的水果', '夏季防暑降温和防雨是非常重要的', '广西民族博物馆可以了解壮乡文化']
  },
  {
    id: 'beihai',
    name: '北海',
    region: '华南',
    rating: 4.6,
    previewImageUrl: "/images/7f654f7a-4540-4364-a70a-9b57ac287afb.png",
    heroImageUrl: "/images/835733d0-7aa3-4612-90bc-84e67dd4639b.png",
    shortDescription: '海上丝路起点，拥有全国最美的银滩。',
    fullDescription: '北海拥有得天独厚的海洋旅游资源，涠洲岛的火山奇景和十里银滩的细腻沙质吸引着无数游客。',
    attractions: [
      { name: '涠洲岛', imageUrl: "/images/237a0a59-ad17-4ca1-b796-ffa30bcabf98.png", description: '中国最年轻的火山岛。' },
      { name: '银滩', imageUrl: "/images/d914a80c-44ac-4381-a76d-7de1d70ad0be.png", description: '因沙子纯净呈白色、在阳光下如银粉般闪亮而得名。' }
    ],
    cuisines: [
      { name: '北海大虾', imageUrl: "/images/5e350c36-e6ce-490c-b88a-2f7ba47ec877.png", description: '肉质紧实，鲜美回甘。' }
    ],
    tips: ['去涠洲岛的船票一定要提前通过公众号购买', '北海老街适合看充满历史感的建筑', '带好充足的防晒霜']
  },
  {
    id: 'quanzhou',
    name: '泉州',
    region: '华南',
    rating: 4.7,
    previewImageUrl: "/images/d7ef859a-c223-4009-bfa6-4a306f74c361.png",
    heroImageUrl: "/images/860f7d44-6832-4188-b8b5-80e3da458b2c.png",
    shortDescription: '半城烟火半城仙，诸神的人间办事处。',
    fullDescription: '泉州是联合国唯一认定的海上丝绸之路起点。这座城市充满了虔诚的信仰气息，随处可见古老的寺庙与古朴的红砖古厝。',
    attractions: [
      { name: '开元寺', imageUrl: "/images/3b69ea54-743a-41af-9cc2-669059fb3e4a.png", description: '福建省规模最大的佛教寺院。' },
      { name: '西街', imageUrl: "/images/6bd94f7d-27da-42f2-872a-59fa88656146.png", description: '保留了鲜活闽南城市记忆的历史街区。' }
    ],
    cuisines: [
      { name: '面线糊', imageUrl: "/images/318d090b-5fcf-40d6-81ab-3f6547db989b.png", description: '细腻顺滑，鲜美无比。' }
    ],
    tips: ['一定要尝试一次当地特色的簪花围体验', '去开元寺塔下坐一坐非常有宁静感', '泉州的美食非常多，建议错峰打卡著名的几家店']
  },
  {
    id: 'shantou',
    name: '汕头',
    region: '华南',
    rating: 4.4,
    previewImageUrl: "/images/408afd43-5a1d-46e0-9afb-33e1973d891e.png",
    heroImageUrl: "/images/f0578047-93f1-495c-8f7f-ae2fcba200e3.png",
    shortDescription: '潮汕美食之都，骑楼街区下的百年商都。',
    fullDescription: '汕头作为经济特区，保留了全国最大的骑楼建筑群“小公园”。这里更是食客们向往的圣地，每一顿潮汕牛肉火锅都是对味蕾的极致宠溺。',
    attractions: [
      { name: '汕头小公园', imageUrl: "/images/d4732108-14cb-48cc-afc0-5b3da53f1f83.png", description: '中国现存规模最大的城市骑楼群。' },
      { name: '南澳岛', imageUrl: "/images/b2bdb297-8b8a-4ada-bc7c-4d963c495e22.png", description: '广东唯一的海岛县，风景如画。' }
    ],
    cuisines: [
      { name: '潮汕牛肉火锅', imageUrl: "/images/02904f45-ecd1-4f25-9f9d-a5d399ce3597.png", description: '讲究刀工与肉质，享受大荤本味。' }
    ],
    tips: ['自驾过南澳大桥是令人愉悦的体验', '牛肉丸一定要买当地刚打出来的', '夏季游玩南澳岛要注意错开高峰游客']
  },
  {
    id: 'lijiang',
    name: '丽江',
    region: '华南',
    rating: 4.9,
    previewImageUrl: "/images/edb0f854-e425-48e0-aafc-9db3864eb392.png",
    heroImageUrl: "/images/08e35780-6116-4ee7-80a5-56f7fd3be6fc.png",
    shortDescription: '发呆圣地，玉龙雪山下的柔软慢时光。',
    fullDescription: '丽江古镇以流水潺潺的小径和独特的纳西文化吸引着世界各地的游客。在玉龙雪山的见证下，感受这一方净土的宁静。',
    attractions: [
      { name: '玉龙雪山', imageUrl: "/images/dfd8aa7a-ef88-4a65-a3ba-053291eaabb9.png", description: '北半球最南的现代海洋性冰川。' },
      { name: '大研古镇', imageUrl: "/images/e04f1d98-9f00-487b-9bcc-c70885707494.png", description: '没有围墙的古城，感受纯粹的纳西风情。' }
    ],
    cuisines: [
      { name: '腊排骨火锅', imageUrl: "/images/db10aed4-c631-4f73-a59d-8f55be32a26f.png", description: '纳西族传统美食，浓郁咸香。' }
    ],
    tips: ['古城维护费需要根据当地政策缴纳', '上雪山一定要注意保暖和预防高反', '丽江各季气温差异大，请带好防寒服']
  },
  {
    id: 'tianjin',
    name: '天津',
    region: '华北',
    rating: 4.7,
    previewImageUrl: "/images/c07ef820-de84-4997-aa17-13b6ab85eff1.png",
    heroImageUrl: "/images/0b78edf5-506e-48fe-9b52-951869e898d7.png",
    shortDescription: '雅俗共赏的哏儿都，看万国建筑与天津之眼。',
    fullDescription: '天津以其中西合璧的风情闻名，海河两岸错落有致的欧式建筑与独具韵味的民俗共同构成了这座城市的独特气质。',
    attractions: [
      { name: '五大道', imageUrl: "/images/7d63fc43-7c77-488a-a852-625f8994925c.png", description: '被称为“万国建筑博览会”的洋楼区域。' },
      { name: '瓷房子', imageUrl: "/images/05453fbe-1d8d-498a-bab9-0176c0edcc4d.png", description: '用数亿片古瓷片装饰而成的博物馆。' }
    ],
    cuisines: [
      { name: '煎饼馃子', imageUrl: "/images/ab25a8a5-3af0-49ed-9922-36abc6c8f426.png", description: '天津人的味觉信仰。' }
    ],
    tips: ['听一场名流茶馆的相声是必选项目', '海河游船在傍晚时分非常漂亮', '煎饼果子一定要去排队长的老字号买']
  },
  {
    id: 'shijiazhuang',
    name: '石家庄',
    region: '华北',
    rating: 4.2,
    previewImageUrl: "/images/94411892-70fe-4914-9d55-7f7955cdbec6.png",
    heroImageUrl: "/images/a29180af-1796-42e6-9caa-561252305328.png",
    shortDescription: '燕赵咽喉，红色西柏坡，探秘太行秘境。',
    fullDescription: '石家庄是铁路拉来的城市，也是革命圣地西柏坡所在地。下辖的正定古城更是一座活的历史博物馆。',
    attractions: [
      { name: '隆兴寺', imageUrl: "/images/2c92afaf-cedf-4fd2-93f6-a2d77b088551.png", description: '拥有中国最大的铜铸千手观音像。' },
      { name: '正定古城', imageUrl: "/images/35409ce0-6092-4d91-b221-a2c623c90a14.png", description: '北方著名的佛教重地和历史名城。' }
    ],
    cuisines: [
      { name: '正定八大碗', imageUrl: "/images/bbf8773f-048f-443b-bd71-e5c1ff76c5fa.png", description: '传统的节庆佳肴，大块朵颐。' }
    ],
    tips: ['正定就在石家庄市区旁边，强烈推荐一去', '想放松可以去嶂石岩看丹霞地貌', '注意当地空气质量及出行建议']
  },
  {
    id: 'chengde',
    name: '承德',
    region: '华北',
    rating: 4.6,
    previewImageUrl: "/images/54cba35d-5240-4800-bc33-f2201af309c4.png",
    heroImageUrl: "/images/ddc77a16-e3f1-4225-b54f-4f01a2962a69.png",
    shortDescription: '清代皇家避暑胜地，长城边的园林之奇。',
    fullDescription: '承德拥有世界最大的皇家园林——避暑山庄，以及辉煌宏大的外八庙建筑群，是承载历史与自然的清凉宝地。',
    attractions: [
      { name: '避暑山庄', imageUrl: "/images/f1ad88e1-49a2-4ab0-b55b-847bb17698d0.png", description: '中国著名的古代帝王宫苑地。' },
      { name: '普陀宗乘之庙', imageUrl: "/images/e61d6686-0a8a-4a6f-b5ee-3d9b0c72a152.png", description: '仿拉萨布达拉宫而建的天上佛国。' }
    ],
    cuisines: [
      { name: '鹿肉面', imageUrl: "/images/cec93d3d-42a3-4bd1-a627-77ca0481c42b.png", description: '极具满族特色的高热量美食。' }
    ],
    tips: ['夏季是承德的最佳旅游时间，气温清爽', '参观避暑山庄需要步行很多路，注意穿舒适的鞋', '外八庙非常壮观，可以预留一天参观']
  },
  {
    id: 'qinhuangdao',
    name: '秦皇岛',
    region: '华北',
    rating: 4.5,
    previewImageUrl: "/images/2a1c0572-d291-4e6b-9908-dce9e9f663c6.png",
    heroImageUrl: "/images/c95c7aa1-86cd-449f-a4eb-dc2f7d27ca4c.png",
    shortDescription: '京津冀后花园，在长城入海处拥抱浪花。',
    fullDescription: '秦皇岛以北戴河海上日出闻名，拥有长城的东部起点山海关。在这里，古老的防御工事与现代的沙滩度假完美融合。',
    attractions: [
      { name: '山海关', imageUrl: "/images/3ada8568-a9e2-42f4-a34a-9c937dab8fb6.png", description: '“天下第一关”，雄关守护边境。' },
      { name: '北戴河', imageUrl: "/images/051b7735-5ae3-4d5c-b91a-30c8ac382b34.png", description: '避暑康养圣地，沙滩细腻平缓。' }
    ],
    cuisines: [
      { name: '长城干红', imageUrl: "/images/0d2e55e1-3494-4641-bb6d-362f7b8d68c5.png", description: '当地著名的特产佳酿。' }
    ],
    tips: ['阿那亚黄金海岸是网红打卡必去地，需提前预约门票', '老龙头可以拍到很有气魄的长城入海图', '海鮮排档注意区分价格陷阱']
  },
  {
    id: 'taiyuan',
    name: '太原',
    region: '华北',
    rating: 4.4,
    previewImageUrl: "/images/ae77da8d-d6ad-4e0b-976f-125334b87b61.png",
    heroImageUrl: "/images/6b1e23cb-d454-497c-af62-cf9796c51169.png",
    shortDescription: '龙城太原，山西首府，探寻晋商文化的精髓。',
    fullDescription: '太原拥有两千五百年的建城史。晋祠的精美雕刻与蒙山大佛的庄严雄伟，都诉说着这座古老城市的辉煌与厚重。',
    attractions: [
      { name: '晋祠', imageUrl: "/images/b9fbfa1c-85c5-4352-b62f-e8ea96bd1931.png", description: '中国保存最完整的祭祀建筑群。' },
      { name: '山西博物院', imageUrl: "/images/b190a848-0773-40da-897e-d9b18b99c01d.png", description: '了解华夏文明及晋商奋斗史的最佳场馆。' }
    ],
    cuisines: [
      { name: '太原头脑', imageUrl: "/images/6d01312c-6e61-4b23-b562-170005fad4d9.png", description: '滋补圣品，有着四百多年历史的奇特早点。' }
    ],
    tips: ['山西非常干燥，记得多喝水多吃水果', '晋祠的导游讲解非常重要，有助于了解背景', '想买特产可以去老陈醋博物馆']
  },
  {
    id: 'datong',
    name: '大同',
    region: '华北',
    rating: 4.8,
    previewImageUrl: "/images/f348c14a-944d-4928-b708-54d60b36b19e.png",
    heroImageUrl: "/images/d8994e14-fb16-4f8e-95ca-3f076c275a51.png",
    shortDescription: '北魏京华，云冈石窟里的不朽神秀。',
    fullDescription: '大同是中国著名的石刻之都。云冈石窟的宏大造像与悬空寺的精妙结构，让每一个访客都感叹中国工匠的巧夺天工。',
    attractions: [
      { name: '云冈石窟', imageUrl: "/images/85cbf116-43ee-4a22-885b-325a691e477b.png", description: '中国著名的佛教文化圣地和石刻艺术巅峰。' },
      { name: '恒山悬空寺', imageUrl: "/images/c9c6b3ff-353f-495e-86ed-a5ec4d2e9af4.png", description: '“空中楼阁”，建筑工程力学的奇迹。' }
    ],
    cuisines: [
      { name: '大同削面', imageUrl: "/images/16efba1d-44a7-4afc-ad51-870d81630e90.png", description: '北方面食之王，入口爽滑有劲道。' }
    ],
    tips: ['大同昼夜温差非常大，哪怕夏天也要带外套', '悬空寺排队会很久，建议早去或淡季前往', '云冈石窟建议请专业人工讲解']
  },
  {
    id: 'zhengzhou',
    name: '郑州',
    region: '华中',
    rating: 4.3,
    previewImageUrl: "/images/80768919-383e-4d44-b8da-ae49d1f06e8b.png",
    heroImageUrl: "/images/c19f5308-d26c-4475-82a7-1bbaeb0cfa4c.png",
    shortDescription: '中原之中，嵩山少林，在这座商都触摸三千载文明。',
    fullDescription: '郑州是河南省会，拥有丰富的文明史遗迹。嵩山少林寺的禅宗武功与河南博物院的稀世奇珍，都代表了中原文化的底气。',
    attractions: [
      { name: '嵩山少林寺', imageUrl: "/images/2fda77ba-530a-42d7-9e44-3bcafebf0a42.png", description: '天下第一名刹，禅宗祖庭。' },
      { name: '唯美·郑州园博园', imageUrl: "/images/3f24fb7b-788a-4191-9fc0-f94d22835c36.png", description: '汇聚了世界各地的园林艺术风格。' }
    ],
    cuisines: [
      { name: '胡辣汤', imageUrl: "/images/ad2e7f76-7bcb-488c-91a2-bf325bad1d85.png", description: '早晨醒脑必喝，口感麻辣鲜香。' }
    ],
    tips: ['少林寺离市区较远，建议预留一整天时间', '河南博物院的文创周边（如考古盲盒）非常有创意', '郑州东站交通异常方便，是旅行中转的最佳选择']
  },
  {
    id: 'luoyang',
    name: '洛阳',
    region: '华中',
    rating: 4.8,
    previewImageUrl: "/images/6a336f4f-6ed6-4200-a9f9-cce97ce7b32c.png",
    heroImageUrl: "/images/d1080598-d143-4195-8a0b-07ba0b73f01c.png",
    shortDescription: '唯有牡丹真国色，花开时节动京城。',
    fullDescription: '洛阳是著名的十三朝古都，拥有令世界震撼的龙门石窟。当春季到来，整座城市都被雍容华贵的牡丹花点亮。',
    attractions: [
      { name: '龙门石窟', imageUrl: "/images/9e37fc97-394b-418e-9b28-6440917f12a4.png", description: '规模宏大、保存完整的中原佛教艺术宝库。' },
      { name: '应天门遗址', imageUrl: "/images/f1197537-7559-43db-a83a-c54cd8128aec.png", description: '感受隋唐神都的绝代风华。' }
    ],
    cuisines: [
      { name: '洛阳水席', imageUrl: "/images/250f10c2-a14c-4e6b-b1c9-ddd68f9bbcf5.png", description: '有着一千多年历史，冷热荤素均有汤。' }
    ],
    tips: ['四月洛阳牡丹花会期间人流量极大，请提前定房', '龙门石窟建议晚上来看亮灯仪式，非常神圣感', '老城区十字街是夜晚觅食的好去处']
  },
  {
    id: 'kaifeng',
    name: '开封',
    region: '华中',
    rating: 4.5,
    previewImageUrl: "/images/0ee713b2-8208-44d7-aa95-68cbf090eabb.png",
    heroImageUrl: "/images/13f01a28-9b6c-4a3a-8cbe-78e871461db0.png",
    shortDescription: '东京梦华，一朝步入开封，一日梦回大宋。',
    fullDescription: '开封曾是北宋时期的东京汴梁。现在的开封通过清明上河园等项目，完美还原了当时繁华的社会面貌。',
    attractions: [
      { name: '清明上河园', imageUrl: "/images/33ec6755-e07b-4f4c-a955-eb3888add1fe.png", description: '大型宋文化主题公园，沉浸式游玩感。' },
      { name: '铁塔', imageUrl: "/images/1a8d2bd0-42ea-46c9-aec6-30dba787b129.png", description: '素有“天下第一塔”美称。' }
    ],
    cuisines: [
      { name: '开封灌汤包', imageUrl: "/images/7def247f-c648-4f4f-9b46-129a3529133c.png", description: '提起来像灯笼，放下像菊花。' }
    ],
    tips: ['一定要看晚上的《大宋·东京梦华》实景演出', '鼓楼夜市的美食种类繁多且极富特色', '开封市区不大，适合骑自行车漫游']
  },
  {
    id: 'yichang',
    name: '宜昌',
    region: '华中',
    rating: 4.6,
    previewImageUrl: "/images/69b05476-4a87-4e0a-85da-0afc8f92905d.png",
    heroImageUrl: "/images/38d329da-dd2e-4af1-a0c2-7b4f935c0e3f.png",
    shortDescription: '峡江明珠，看大国重器，游三峡秘境。',
    fullDescription: '宜昌是万里长江的一颗璀璨明珠。在这里可以亲眼见证宏伟的三峡大坝，也可以在三峡人家感受淳朴的峡江民俗。',
    attractions: [
      { name: '三峡大坝', imageUrl: "/images/c245aee9-28b2-462a-a2e7-b2d625b851b8.png", description: '当今世界规模最大的水利枢纽工程。' },
      { name: '三峡人家', imageUrl: "/images/2b2a0d82-c46a-4b25-a1d7-dd8eb3cc2968.png", description: '融入自然山水的画卷式景区。' }
    ],
    cuisines: [
      { name: '宜昌江鲜', imageUrl: "/images/927b33a7-2eed-461b-ad6d-3c0f25590299.png", description: '肉质细腻，原汁原味。' }
    ],
    tips: ['一定要体验一次坐船过大坝五级船闸', '清江画廊的水质极好，非常推荐游览', '防滑舒适的运动鞋是游玩三峡必备']
  },
  {
    id: 'zhangjiajie',
    name: '张家界',
    region: '华中',
    rating: 4.9,
    previewImageUrl: "/images/dd4d6f31-4c3f-415b-9edc-1d390b751892.png",
    heroImageUrl: "/images/fbe09d69-9ca4-44d4-8e05-0cbd3a66bb60.png",
    shortDescription: '阿凡达的潘多拉星球，张家界地貌的旷世绝美。',
    fullDescription: '张家界武陵源景区以罕见的砂岩峰林地貌闻名于世，三千根石峰拔地而起。天门山的玻璃栈道更是对胆量的极致考验。',
    attractions: [
      { name: '天子山', imageUrl: "/images/dca468d6-9966-4cc0-895b-030c0d0ad2dd.png", description: '“三千奇峰，八百秀水”。' },
      { name: '天门山', imageUrl: "/images/aa8a5260-bcc8-4ab9-8e71-150ebd332d0a.png", description: '拥有著名的天门洞与刺激的玻璃栈道。' }
    ],
    cuisines: [
      { name: '三下锅', imageUrl: "/images/30a5c3b1-daa7-43b3-8a6c-262d3ca8014f.png", description: '土家族特色，咸辣可口，下饭神器。' }
    ],
    tips: ['张家界景区很大，游玩需要很强的体力', '一定要提前在网上预定各景区进山门票', '避免在山上买高价食品，可以随身带少量补给']
  },
  {
    id: 'hengshan',
    name: '衡山',
    region: '华中',
    rating: 4.6,
    previewImageUrl: "/images/ad330deb-8f36-46f5-a489-6930e12210b1.png",
    heroImageUrl: "/images/5448a6e6-53bc-46fb-a395-077c12e7dafb.png",
    shortDescription: '南岳衡山，五岳独秀，祝融峰下看云卷云舒。',
    fullDescription: '衡山作为南岳，以“秀”著称。这里是著名的长寿福地，名胜古迹众多，文化气息极其浓厚。',
    attractions: [
      { name: '祝融峰', imageUrl: "/images/2d557dfc-8c80-4e80-92f6-5baefa9edf51.png", description: '南岳最高峰，览胜最佳地点。' },
      { name: '南岳大庙', imageUrl: "/images/68cea452-06af-41b7-a90e-65e68e2fd188.png", description: '江南第一庙，佛道共存的奇观。' }
    ],
    cuisines: [
      { name: '衡山素斋', imageUrl: "/images/0362211e-c8fa-4b90-9608-2b81ba707676.png", description: '工艺考究，禅味满盈。' }
    ],
    tips: ['登山可以选择环保车或步行，步行较累', '烧香祈福建议在山下购买好香烛', '阴雨天看云海概率比较大']
  },
  {
    id: 'harbin',
    name: '哈尔滨',
    region: '东北',
    rating: 4.9,
    previewImageUrl: "/images/d8c0ac2a-ad8d-40d0-9d5b-1eeb3a46fcb6.png",
    heroImageUrl: "/images/ba4f41cd-af04-4164-b502-52119867f4c9.png",
    shortDescription: '冰雪大世界，东方小巴黎，在零下三十度中狂欢。',
    fullDescription: '哈尔滨是冰城的代名词。中央大街上的欧式建筑与漫天飞雪构成了一幅梦幻的冬日景观，特别是冬季的冰雪大世界。',
    attractions: [
      { name: '冰雪大世界', imageUrl: "/images/135ad1eb-cdb8-469f-ba06-42e5b5940922.png", description: '年度最震撼的冰雪嘉年华。' },
      { name: '中央大街', imageUrl: "/images/67b810b1-ad9f-43a0-a10d-c05f627a018f.png", description: '感受浓郁的异国情调。' }
    ],
    cuisines: [
      { name: '锅包肉', imageUrl: "/images/9067bc99-5436-41bb-be2c-e644705da275.png", description: '酸甜酥脆，东北菜的明星。' }
    ],
    tips: ['冬天保暖工作一定要做到极致，暖宝宝是必备的', '马迭尔冰棍建议在刺骨的寒风中尝试一次', '室外电子设备电池掉电极快，记得备好充电宝']
  },
  {
    id: 'changchun',
    name: '长春',
    region: '东北',
    rating: 4.4,
    previewImageUrl: "/images/60eac53f-ce79-429c-b975-1a49aa0e7571.png",
    heroImageUrl: "/images/7d45dc74-36e2-4606-971c-0ba6727640ff.png",
    shortDescription: '北国春城，中国汽车工业的摇篮，看末代皇宫。',
    fullDescription: '长春是一座工业气息与人文历史并重的城市。从辉煌的伪满皇宫到清静优美的净月潭，展现了不一样的东北韵味。',
    attractions: [
      { name: '伪满皇宫博物院', imageUrl: "/images/9c81f790-48c0-43b4-87b1-1a4b47418a2c.png", description: '了解近代史沉痛记忆的历史场所。' },
      { name: '净月潭', imageUrl: "/images/744da786-0acc-4a9a-a7aa-9d0617cde1a4.png", description: '台湾日月潭的姐妹潭。' }
    ],
    cuisines: [
      { name: '长春熏肉大饼', imageUrl: "/images/621c3cc9-2e33-4481-a5fa-c5608426beab.png", description: '外焦里嫩，酱香味浓。' }
    ],
    tips: ['长春的现代有轨电车很有复古风情，建议尝试', '电影爱好者可以去长影旧址博物馆打卡', '秋天的净月潭层林尽染，非常壮观']
  },
  {
    id: 'shenyang',
    name: '沈阳',
    region: '东北',
    rating: 4.5,
    previewImageUrl: "/images/98841e6b-296d-429a-8893-b0b640e1ff21.png",
    heroImageUrl: "/images/9407d769-b355-48bf-8f90-1eb2735ef106.png",
    shortDescription: '一朝发祥地，两代帝王都。',
    fullDescription: '沈阳是著名的重工业基地，同时也是满清入关前的都城。这里的历史遗迹和豪爽的民族性格共同构建了独特的城市魅力。',
    attractions: [
      { name: '沈阳故宫', imageUrl: "/images/0c1f1b5d-3cab-4a92-85db-66df174480b4.png", description: '中国现存仅次于北京故宫的皇家宫殿建筑群。' },
      { name: '张学良旧居', imageUrl: "/images/bad7ea59-3ece-4d24-b2d5-6b034a389a1d.png", description: '民国少帅的宅邸，有“一座大帅府，半部民国史”之说。' }
    ],
    cuisines: [
      { name: '中街冰点', imageUrl: "/images/71cc7b14-6316-4001-9db1-32ad3651f3d8.png", description: '沈阳人的国民品牌甜点。' }
    ],
    tips: ['沈阳故宫的红墙非常适合拍照', '早市可以体验最接地气的中国百姓生活', '西塔街是体验韩式地道美食的必选之地']
  },
  {
    id: 'jilin',
    name: '吉林',
    region: '东北',
    rating: 4.6,
    previewImageUrl: "/images/110d4762-efab-43e6-9157-fa9f6fc9bdec.png",
    heroImageUrl: "/images/d8d0af03-9f65-45cb-b1db-88fbadd4c81f.png",
    shortDescription: '看江城雾凇，享北国滑雪之乐。',
    fullDescription: '吉林市是一座四面环水的江城。冬季的雾凇奇观与松花湖的无限风光，加上顶级的滑雪场，构成了一站式冰雪体验。',
    attractions: [
      { name: '雾凇岛', imageUrl: "/images/706a3d78-70af-482c-b889-f0a92ede6285.png", description: '冬季观赏雾凇的最佳圣地之一。' },
      { name: '松花湖', imageUrl: "/images/1469d3fa-07bd-4311-bdcb-522d45ac7b69.png", description: '高山人工湖，一年四季皆如画。' }
    ],
    cuisines: [
      { name: '吉林乌拉火锅', imageUrl: "/images/98fe493e-1c58-470a-8ad0-c2b572733d89.png", description: '满族特色锅底，味道醇厚鲜香。' }
    ],
    tips: ['雾凇受天气影响较大，行前请咨询当地气象', '滑雪时注意安全穿戴好护具', '松花江畔的夜景非常值得一逛']
  },
  {
    id: 'dunhuang',
    name: '敦煌',
    region: '西北',
    rating: 4.9,
    previewImageUrl: "/images/9d2e0b4d-534a-4676-a2ee-89f09f059661.png",
    heroImageUrl: "/images/a38b747e-8b9c-4519-ae15-77fdd37160dd.png",
    shortDescription: '大漠孤烟，飞天壁画，在丝绸之路上重拾文化记忆。',
    fullDescription: '敦煌作为古丝绸之路的核心驿站，以莫高窟壁画和鸣沙山月牙泉美景。每一颗流沙都仿佛在诉说着千年往事。',
    attractions: [
      { name: '莫高窟', imageUrl: "/images/5820ec10-4eb2-4dc0-8564-b83252a2ca78.png", description: '世界上规模最大、内容最丰富的佛教艺术地。' },
      { name: '鸣沙山月牙泉', imageUrl: "/images/8b6daebc-7df6-458f-b153-29a41327c05a.png", description: '“山泉共处，砂水共生”的奇观。' }
    ],
    cuisines: [
      { name: '驴肉黄面', imageUrl: "/images/f33d7872-81e1-47e8-9c1a-66ac705e3ede.png", description: '敦煌传统风味，面的韧道与肉的鲜美。' }
    ],
    tips: ['莫高窟门票非常抢手，务必提前一个月预约', '沙漠风沙大注意保护相机镜头及个人防沙', '晚上去看一场《又见敦煌》，身临其境感受历史']
  },
  {
    id: 'turpan',
    name: '吐鲁番',
    region: '西北',
    rating: 4.6,
    previewImageUrl: "/images/66ed6f60-b9ab-4c00-b69d-0117f83a63bc.png",
    heroImageUrl: "/images/a8bb8a82-1251-4382-be85-9e956d47492f.png",
    shortDescription: '火州吐鲁番，在那葡萄熟了的地方。',
    fullDescription: '吐鲁番是中国著名的低洼盆地。交河故城的断壁残垣诉说着曾经的繁荣，葡萄沟的凉爽则是应对酷夏灼热的最佳庇护。',
    attractions: [
      { name: '火焰山', imageUrl: "/images/9e97859d-1163-45cb-a454-23f7a53e94bd.png", description: '《西游记》故事发生地，气温曾创造记录。' },
      { name: '坎儿井', imageUrl: "/images/648cef2e-29da-48fe-82da-cfe363c04053.png", description: '荒漠中的绿洲保障，古代伟大的灌溉工程。' }
    ],
    cuisines: [
      { name: '吐鲁番葡萄', imageUrl: "/images/3138fc1a-5bc0-4b2d-81c0-40b2f24abafc.png", description: '世界最甜的葡萄产地之一。' }
    ],
    tips: ['夏季温度极高，注意带足水、防晒服和帽子', '葡萄沟的葡萄架下不仅有美食还有歌舞表演', '坎儿井博物馆展示了新疆人民的智慧']
  },
  {
    id: 'xining',
    name: '西宁',
    region: '西北',
    rating: 4.5,
    previewImageUrl: "/images/978cdc3e-ff8f-4a4d-9b8b-87f3007ce33b.png",
    heroImageUrl: "/images/bdaec150-d01b-4390-849d-7b2635755f12.png",
    shortDescription: '夏都西宁，凉快一夏，看大美青海。',
    fullDescription: '西宁是青藏高原的门户。以雄伟的塔尔寺和广阔的青海湖为依托，展现了浓郁的藏传佛教和多民族融合文化。',
    attractions: [
      { name: '塔尔寺', imageUrl: "/images/2f902f82-cef7-4bd5-8e55-045b25a9d13d.png", description: '喇嘛教格鲁派六大寺院之一。' },
      { name: '青海湖', imageUrl: "/images/cfae9808-5253-45bc-ad47-24293ead0313.png", description: '中国最大的内陆湖，美不胜收。' }
    ],
    cuisines: [
      { name: '酸奶', imageUrl: "/images/551ad486-d5e0-40d8-af8a-a8047520c587.png", description: '浓稠糯滑，带有自然的奶香甜味。' }
    ],
    tips: ['青海湖海拔3000米以上，注意高原反应', '塔尔寺内严禁拍照和穿短裙短裤', '当地羊肉极其鲜美，酸奶更是必尝甜品']
  },
  {
    id: 'yinchuan',
    name: '银川',
    region: '西北',
    rating: 4.4,
    previewImageUrl: "/images/e196078a-4045-4217-b667-2b0c69d6acde.png",
    heroImageUrl: "/images/28e6ba93-5f83-49a2-9275-1d671b707011.png",
    shortDescription: '塞上江南，西夏王陵的残阳叹怀。',
    fullDescription: '银川是西夏王朝的旧都。雄浑的回乡风情与荒漠中的水乡奇观，让这座城市在寂寥中展现着另一种坚毅。',
    attractions: [
      { name: '西夏王陵', imageUrl: "/images/6462c6dc-028d-4861-aaa1-fc4f207a8ec3.png", description: '神秘的西夏金字塔。' },
      { name: '沙湖', imageUrl: "/images/0c088489-fd3b-4398-9bae-76335fb164f3.png", description: '半是沙漠半是水的奇妙组合。' }
    ],
    cuisines: [
      { name: '手抓羊肉', imageUrl: "/images/4c9468f6-fbd0-40c2-8055-1f1b61210232.png", description: '原汁原味，软糯适口。' }
    ],
    tips: ['镇北堡影视城适合cosplay拍照', '银川日照非常强烈建议戴好墨镜', '品尝著名的宁夏红枸杞及衍生产品']
  },
  {
    id: 'kashgar',
    name: '喀什',
    region: '西北',
    rating: 4.8,
    previewImageUrl: "/images/e22b2e67-eb99-40ea-8b80-3ff931f99fb4.png",
    heroImageUrl: "/images/493caccc-9031-437b-9b62-ffc9397c413b.png",
    shortDescription: '不到喀什，不算到新疆。体验最浓郁的西域柔情。',
    fullDescription: '喀什是一座活着的千年古城。每一条弯曲的小巷似乎都藏着故事，老城的茶馆里坐满了悠闲地人们，时光在这里似乎慢了几个世纪。',
    attractions: [
      { name: '喀什古城', imageUrl: "/images/33597719-4b84-4ec6-ba92-6f2edf5d8cb5.png", description: '浓郁的民族风情与活态历史传承地。' },
      { name: '香妃园', imageUrl: "/images/5d9eb97b-47ed-4614-a025-171048487c9a.png", description: '集历史、建筑艺术于一体的人文景观。' }
    ],
    cuisines: [
      { name: '烤馕', imageUrl: "/images/1c767703-b87f-4ab8-9b3a-91445ee1fc33.png", description: '主食中的黄金，外焦里透着谷物醇香。' }
    ],
    tips: ['喀什老城的开城仪式非常有看点建议早到', '多与当地人微笑交流你会感到非常友好', '巴扎购物建议货比三家大胆砍价']
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

