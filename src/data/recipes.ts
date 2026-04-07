export interface Recipe {
  name: string;
  ingredients: string[];
}

export interface MealPlan {
  id: string;
  name: string;
  calories: number;
  meals: {
    breakfast: Recipe;
    lunch: Recipe;
    dinner: Recipe;
    snacks?: Recipe[];
  };
  oil: string;
  salt: string;
  note: string;
}

export interface RegionRecipes {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  mealPlans: {
    spring: MealPlan[];
    summer: MealPlan[];
    autumn: MealPlan[];
    winter: MealPlan[];
  };
}

export const regionRecipesData: RegionRecipes[] = [
  {
    id: 'northeast',
    name: '东北地区',
    description: '东北地区居民饮食以米面、畜禽肉及奶类为主，烹饪方式以炖菜为主，肥厚实在，味重色浓。',
    features: ['主食以米面为主', '畜禽肉摄入较多', '炖菜烹饪方式', '味重色浓'],
    image: `${import.meta.env.BASE_URL}recipe-northeast.jpg`,
    color: 'from-orange-400 to-red-500',
    mealPlans: {
      spring: [
        {
          id: 'ne-spring-1',
          name: '春季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['馒头(面粉50g)', '煮鸡蛋(鸡蛋50g)', '低脂牛奶(250mL)', '凉拌菠菜(菠菜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['二米饭(大米30g,小米20g)', '铁锅炖鱼(草鱼50g,北豆腐50g,白菜100g,黄芪5g,八角茴香3g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['菜包饭(生菜100g,大米30g,小米20g,猪里脊肉50g,土豆30g)', '西兰花虾皮萝卜汤(西兰花100g,白萝卜30g,虾皮10g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['苹果(200g)'] }
            ]
          },
          oil: '15g',
          salt: '<5g',
          note: '本食谱提供能量约1200kcal，蛋白质64g，碳水化合物164g及脂肪40g'
        }
      ],
      summer: [
        {
          id: 'ne-summer-1',
          name: '夏季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['杂粮煎饼(面粉40g,玉米面10g)', '煮鸡蛋(鸡蛋50g)', '无糖豆浆(200mL)', '凉拌黄瓜(黄瓜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['荞麦面(荞麦面粉50g)', '西红柿鸡蛋卤(西红柿100g,鸡蛋50g)', '凉拌豆腐丝(豆腐丝50g,胡萝卜50g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['小米粥(小米30g)', '清蒸鱼(草鱼60g)', '蒜蓉西兰花(西兰花100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['西瓜(200g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '夏季饮食以清淡为主，多补充水分'
        }
      ],
      autumn: [
        {
          id: 'ne-autumn-1',
          name: '秋季食谱一',
          calories: 1400,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['杂粮馒头(面粉40g,玉米面10g)', '煮鸡蛋(鸡蛋50g)', '牛奶(250mL)', '拌白菜心(白菜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['大米饭(大米60g)', '土豆炖牛肉(牛肉50g,土豆100g,胡萝卜50g)', '紫菜蛋花汤(紫菜5g,鸡蛋20g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['打卤面(面粉50g,西红柿50g,鸡蛋30g)', '凉拌木耳(木耳10g,黄瓜50g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['梨(200g)'] }
            ]
          },
          oil: '15g',
          salt: '<5g',
          note: '秋季适当增加热量，为冬季储备能量'
        }
      ],
      winter: [
        {
          id: 'ne-winter-1',
          name: '冬季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['杂粮煎饼(面粉40g)', '煮鸡蛋(鸡蛋50g)', '牛奶(250mL)', '凉拌菠菜(菠菜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['东北一锅出(排骨50g,土豆100g,豆角50g,玉米50g)', '二米饭(大米30g,小米20g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['打卤面(面粉50g,香菇20g,鸡蛋30g,黄花菜10g)', '凉拌萝卜丝(白萝卜100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['苹果(200g)'] }
            ]
          },
          oil: '15g',
          salt: '<5g',
          note: '冬季早餐来份杂粮煎饼，中餐吃东北一锅出，晚餐可以来碗打卤面'
        }
      ]
    }
  },
  {
    id: 'northwest',
    name: '西北地区',
    description: '西北居民喜食面食，主食以小麦、玉米和其他杂粮为主，肉类以牛、羊肉为主，瓜果丰富，绿叶蔬菜相对较少。',
    features: ['面食为主食', '牛羊肉较多', '瓜果丰富', '绿叶蔬菜较少'],
    image: `${import.meta.env.BASE_URL}recipe-2.jpg`,
    color: 'from-yellow-400 to-orange-500',
    mealPlans: {
      spring: [
        {
          id: 'nw-spring-1',
          name: '春季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['煮玉米(玉米200g)', '杂粮粥(赤小豆10g,小米10g,大米10g)', '煮鸡蛋(鸡蛋50g)', '凉拌木耳胡萝卜丝(胡萝卜100g,木耳10g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['杂粮饭(大米25g,薏苡仁25g,紫米25g)', '猪肉白菜豆腐炖粉条(粉条25g,北豆腐50g,猪后腿肉35g,白菜200g)', '香菇炒青菜(小青菜100g,香菇20g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['清炒芹菜(芹菜100g)', '羊肉汤(羊瘦肉25g,面粉15g,小葱5g,生姜2g,花椒1g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['低脂羊奶(250mL)', '橘子(200g)', '腰果仁(10g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '蛋白质50g，碳水化合物180g，脂肪35g；蛋白质16%，碳水化合物58%，脂肪26%'
        },
        {
          id: 'nw-spring-2',
          name: '春季食谱二',
          calories: 1400,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['杂粮花卷(面粉25g,玉米面25g)', '鸡蛋羹(鸡蛋50g)', '小葱拌豆腐(嫩豆腐50g,香葱20g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['糙米饭(糙米35g,大米40g)', '红烧牛肉(牛瘦肉60g,胡萝卜100g,土豆100g,生姜2g)', '芹菜腐竹炒肉(芹菜100g,腐竹20g,猪瘦肉50g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['莜麦汤面(莜麦面50g)', '凉拌三丝(胡萝卜100g,海带丝10g,豆腐皮30g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['低脂酸奶(100g)', '苹果(200g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '蛋白质71g，碳水化合物199g，脂肪40g；蛋白质20%，碳水化合物55%，脂肪25%'
        }
      ],
      summer: [
        {
          id: 'nw-summer-1',
          name: '夏季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['烙饼(面粉50g)', '煮鸡蛋(鸡蛋50g)', '凉拌小菜(胡萝卜丝50g,紫甘蓝50g,绿豆芽50g)', '莲子百合羹(莲子10g,百合10g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['洋芋叉叉(面粉50g,土豆100g)', '香菇油菜(油菜100g,香菇20g)', '红烧鲫鱼(鲫鱼60g,豆豉20g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['杂粮粥(赤小豆10g,小米10g,大米10g)', '素炒西兰花(西兰花100g,胡萝卜50g,木耳10g)', '西葫芦炒肉(西葫芦100g,猪瘦肉50g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['低脂羊奶(250mL)', '西瓜(200g)', '葡萄(100g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '蛋白质56g，碳水化合物148g，脂肪38g；蛋白质19%，碳水化合物50%，脂肪28%'
        }
      ],
      autumn: [
        {
          id: 'nw-autumn-1',
          name: '秋季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['鸡蛋杂粮饼(面粉25g,玉米面25g,鸡蛋50g,葱花10g)', '红枣桂圆羹(大枣25g,桂圆25g)', '炒豆芽(黄豆芽100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['鸡丝豆角炒莜面(莜麦面75g,豆角50g,鸡胸肉50g)', '素炒菜花(菜花100g)', '凉拌菜(生菜50g,黄瓜50g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['面片汤(面粉25g)', '豆腐皮炒茼蒿(茼蒿50g,豆皮50g)', '西兰花炒肉(西兰花100g,猪瘦肉50g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['低脂酸奶(150g)', '猕猴桃(100g)', '圣女果(100g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '蛋白质59g，碳水化合物157g，脂肪39g；蛋白质19%，碳水化合物52%，脂肪30%'
        }
      ],
      winter: [
        {
          id: 'nw-winter-1',
          name: '冬季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['锅盔辣子馍(面粉25g,油辣子2g)', '煮鸡蛋(鸡蛋50g)', '清炒豆芽(黄豆芽100g)', '豆腐脑(豆腐100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['杂粮饼(面粉50g,玉米面25g)', '冬瓜炖排骨(冬瓜100g,猪排骨80g)', '芹菜炒香干(芹菜100g,豆腐干50g)', '莲子百合羹(百合20g,莲子10g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['羊肉汤面(面粉50g,羊肉25g,土豆30g,胡萝卜50g,西红柿20g,小白菜30g)', '炒青菜(小油菜100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['红李子(100g)', '低脂酸奶(100g)', '砂糖橘(100g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '蛋白质60g，碳水化合物161g，脂肪35g；蛋白质20%，碳水化合物54%，脂肪26%'
        },
        {
          id: 'nw-winter-2',
          name: '冬季食谱二',
          calories: 1400,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['菜包子(面粉25g,雪菜50g,茄子50g)', '煮鸡蛋(鸡蛋50g)', '红薯山药粥(红薯50g,山药20g,大米25g)', '小葱拌豆腐(嫩豆腐50g,香葱20g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['杂粮饭(大米25g,薏苡仁25g,紫米25g)', '清蒸虾仁(冻虾仁70g)', '羊肉汤(西葫芦100g,胡萝卜100g,羊瘦肉25g,小茴香2g,肉桂5g)', '豆奶(大豆粉20g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['肉丝面(面粉50g,油菜100g,猪瘦肉25g)', '醋熘白菜(白菜100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['低脂酸奶(100g)', '苹果(100g)', '丰水梨(200g)'] }
            ]
          },
          oil: '15g',
          salt: '<5g',
          note: '蛋白质56g，碳水化合物189g，脂肪44g；蛋白质16%，碳水化合物55%，脂肪29%'
        },
        {
          id: 'nw-winter-3',
          name: '冬季食谱三',
          calories: 1600,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['杂粮馒头(面粉40g,玉米面25g)', '圆白菜炒腐竹(圆白菜100g,腐竹20g)', '虾皮紫菜鸡蛋羹(虾皮10g,紫菜5g,鸡蛋50g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['羊肉泡馍(羊瘦肉50g,面粉50g,粉丝25g)', '凉拌三丝(胡萝卜丝100g,海带丝50g,豆腐丝50g)', '清炒豆芽(绿豆芽100g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['葱花饼(面粉75g,大葱10g)', '西红柿炖牛腩(西红柿100g,牛腩50g)', '红枣枸杞羹(大枣20g,枸杞子10g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['开心果仁(10g)', '低脂羊奶(250mL)', '苹果(200g)', '香蕉(100g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '蛋白质79g，碳水化合物206g，脂肪51g；蛋白质20%，碳水化合物52%，脂肪29%'
        }
      ]
    }
  },
  {
    id: 'south',
    name: '南方地区',
    description: '南方地区饮食以大米为主食，口味偏清淡，蔬菜、水果、水产品丰富，具有东方健康膳食模式的特点。',
    features: ['大米为主食', '口味偏清淡', '蔬果丰富', '水产品充足'],
    image: `${import.meta.env.BASE_URL}recipe-4.jpg`,
    color: 'from-green-400 to-teal-500',
    mealPlans: {
      spring: [
        {
          id: 'south-spring-1',
          name: '春季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['杂粮粥(大米20g,小米15g,燕麦15g)', '煮鸡蛋(鸡蛋50g)', '凉拌黄瓜(黄瓜100g)', '牛奶(250mL)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['糙米饭(糙米50g)', '清蒸鱼(鲈鱼60g)', '蒜蓉西兰花(西兰花100g)', '冬瓜汤(冬瓜100g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['小米粥(小米30g)', '芹菜炒豆干(芹菜100g,豆干50g)', '凉拌木耳(木耳10g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['苹果(200g)'] }
            ]
          },
          oil: '10g',
          salt: '<5g',
          note: '春季饮食清淡，多摄入新鲜蔬果'
        }
      ],
      summer: [
        {
          id: 'south-summer-1',
          name: '夏季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['绿豆粥(绿豆20g,大米20g)', '煮鸡蛋(鸡蛋50g)', '凉拌西红柿(西红柿100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['米饭(大米50g)', '清蒸虾(虾60g)', '凉拌黄瓜(黄瓜100g)', '紫菜蛋花汤(紫菜5g,鸡蛋20g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['薏米粥(薏米30g)', '炒青菜(小白菜100g)', '凉拌豆腐(嫩豆腐100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['西瓜(200g)'] }
            ]
          },
          oil: '10g',
          salt: '<5g',
          note: '夏季清淡解暑，多补充水分'
        }
      ],
      autumn: [
        {
          id: 'south-autumn-1',
          name: '秋季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['百合粥(百合15g,大米25g)', '煮鸡蛋(鸡蛋50g)', '凉拌萝卜丝(白萝卜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['米饭(大米50g)', '白切鸡(鸡胸肉60g)', '炒时蔬(油麦菜100g)', '萝卜汤(白萝卜100g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['红豆粥(红豆20g,大米20g)', '炒芹菜(芹菜100g)', '凉拌海带(海带50g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['梨(200g)'] }
            ]
          },
          oil: '10g',
          salt: '<5g',
          note: '秋季润燥，多食白色食物'
        }
      ],
      winter: [
        {
          id: 'south-winter-1',
          name: '冬季食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['山药粥(山药30g,大米25g)', '煮鸡蛋(鸡蛋50g)', '凉拌菠菜(菠菜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['米饭(大米50g)', '清蒸鱼(草鱼60g)', '炒小白菜(小白菜100g)', '豆腐汤(豆腐50g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['小米粥(小米30g)', '炒西兰花(西兰花100g)', '凉拌木耳(木耳10g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['橙子(200g)'] }
            ]
          },
          oil: '10g',
          salt: '<5g',
          note: '冬季温补，适量增加热量'
        }
      ]
    }
  },
  {
    id: 'general',
    name: '通用减脂餐',
    description: '科学配比的通用减脂食谱，适合各地区人群参考使用，营养均衡，热量控制科学。',
    features: ['科学配比', '营养均衡', '热量可控', '简单易做'],
    image: `${import.meta.env.BASE_URL}recipe-1.jpg`,
    color: 'from-pink-400 to-rose-500',
    mealPlans: {
      spring: [
        {
          id: 'gen-spring-1',
          name: '春季减脂食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['全麦面包(50g)', '煮鸡蛋(鸡蛋50g)', '牛奶(250mL)', '小番茄(100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['糙米饭(糙米50g)', '烤三文鱼(三文鱼60g)', '蔬菜沙拉(生菜50g,黄瓜50g,西红柿50g)', '橄榄油(5g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['杂粮粥(燕麦20g,小米20g)', '鸡胸肉(鸡胸肉50g)', '炒青菜(菠菜100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['苹果(150g)', '坚果(10g)'] }
            ]
          },
          oil: '10g',
          salt: '<5g',
          note: '蛋白质60g，碳水化合物150g，脂肪35g'
        }
      ],
      summer: [
        {
          id: 'gen-summer-1',
          name: '夏季减脂食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['燕麦粥(燕麦40g)', '煮鸡蛋(鸡蛋50g)', '凉拌黄瓜(黄瓜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['藜麦饭(藜麦50g)', '清蒸虾(虾80g)', '凉拌西兰花(西兰花100g)', '柠檬汁(适量)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['绿豆汤(绿豆20g)', '鸡胸肉沙拉(鸡胸肉50g,生菜50g,西红柿50g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['西瓜(200g)'] }
            ]
          },
          oil: '8g',
          salt: '<5g',
          note: '夏季清淡，多补充水分和电解质'
        }
      ],
      autumn: [
        {
          id: 'gen-autumn-1',
          name: '秋季减脂食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['紫薯(紫薯100g)', '煮鸡蛋(鸡蛋50g)', '牛奶(250mL)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['糙米饭(糙米50g)', '煎牛排(牛肉60g)', '炒时蔬(西兰花100g,胡萝卜50g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['南瓜粥(南瓜50g,大米20g)', '清蒸鱼(鳕鱼60g)', '凉拌菠菜(菠菜100g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['梨(150g)'] }
            ]
          },
          oil: '10g',
          salt: '<5g',
          note: '秋季适当增加优质蛋白'
        }
      ],
      winter: [
        {
          id: 'gen-winter-1',
          name: '冬季减脂食谱一',
          calories: 1200,
          meals: {
            breakfast: {
              name: '早餐',
              ingredients: ['全麦馒头(50g)', '煮鸡蛋(鸡蛋50g)', '豆浆(250mL)', '拌白菜(白菜100g)']
            },
            lunch: {
              name: '午餐',
              ingredients: ['杂粮饭(大米30g,小米20g)', '炖牛肉(牛肉50g,白萝卜100g)', '炒青菜(小白菜100g)']
            },
            dinner: {
              name: '晚餐',
              ingredients: ['小米粥(小米30g)', '清蒸鱼(鲈鱼60g)', '凉拌木耳(木耳10g)']
            },
            snacks: [
              { name: '加餐', ingredients: ['苹果(150g)'] }
            ]
          },
          oil: '12g',
          salt: '<5g',
          note: '冬季可适当增加热量，注意保暖'
        }
      ]
    }
  }
];

export const seasons = [
  { id: 'spring', name: '春季', icon: '🌸', color: 'from-pink-400 to-rose-400' },
  { id: 'summer', name: '夏季', icon: '☀️', color: 'from-yellow-400 to-orange-400' },
  { id: 'autumn', name: '秋季', icon: '🍂', color: 'from-orange-400 to-amber-500' },
  { id: 'winter', name: '冬季', icon: '❄️', color: 'from-blue-400 to-cyan-500' }
];
