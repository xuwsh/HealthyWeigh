// 肥胖定义与判定
export const obesityDefinition = {
  title: '肥胖定义与判定',
  description: '肥胖是一种慢性代谢性疾病，近些年来，全球超重和肥胖率正快速增长，已成为威胁人类健康的严重问题。',
  sections: [
    {
      title: '什么是肥胖',
      content: '肥胖是指人体脂肪积聚过多，导致体重超过正常范围的一种慢性代谢性疾病。肥胖的发生与遗传、饮食、身体活动、生活习惯等多种因素有关。'
    },
    {
      title: 'BMI判定标准',
      content: '体质指数（BMI）是衡量人体胖瘦程度的标准，计算公式为：BMI = 体重(kg) ÷ 身高²(m²)',
      table: {
        headers: ['分类', 'BMI范围', '说明'],
        rows: [
          ['体重过低', 'BMI < 18.5', '体重不足，需增加营养'],
          ['体重正常', '18.5 ≤ BMI < 24.0', '健康体重范围'],
          ['超重', '24.0 ≤ BMI < 28.0', '体重超标，需注意控制'],
          ['肥胖', 'BMI ≥ 28.0', '肥胖状态，需积极干预'],
        ]
      },
      note: '对于80岁以上高龄老人，建议BMI适宜范围为22.0-26.9kg/m²。'
    },
    {
      title: '腰围判定标准',
      content: '腰围是判断中心型肥胖的重要指标，反映腹部脂肪堆积情况。',
      table: {
        headers: ['性别', '中心型肥胖前期', '中心型肥胖'],
        rows: [
          ['男性', '85cm ≤ 腰围 < 90cm', '腰围 ≥ 90cm'],
          ['女性', '80cm ≤ 腰围 < 85cm', '腰围 ≥ 85cm'],
        ]
      },
      note: '腰围测量位置：腋中线肋弓下缘和髂嵴连线中点的水平位置处体围的周径长度。'
    },
    {
      title: '肥胖的危害',
      content: '肥胖是多种慢性病的导火索，可增加以下疾病风险：',
      list: [
        '心血管疾病：高血压、冠心病、脑卒中等',
        '2型糖尿病：肥胖是主要诱因之一',
        '血脂异常：高胆固醇、高甘油三酯',
        '代谢综合征：多种代谢异常聚集',
        '呼吸系统疾病：睡眠呼吸暂停综合征',
        '骨关节疾病：骨关节炎等',
        '某些癌症：乳腺癌、结肠癌等'
      ]
    }
  ]
};

// 中医对肥胖的认识
export const tcmObesityKnowledge = {
  title: '中医对肥胖的认识及分型',
  description: '中医学将肥胖归属于"脂人""膏人""肥人"等范畴，记载最早见于《黄帝内经》。',
  sections: [
    {
      title: '中医对肥胖的认识',
      content: '《灵枢·卫气失常》篇将人之肥瘦分为"有肥、有膏、有肉"。肥胖病因多与年龄、体质、饮食、情志、劳逸因素有关。中医认为，肥胖属本虚标实证，辨证涉及痰、湿、热等病理因素，常兼夹痰湿、血瘀、气郁等标实之证，其病位多在脾胃，与肾气虚关系密切，并可涉及五脏。'
    },
    {
      title: '胃热火郁证',
      symptoms: ['肥胖多食', '消谷善饥', '大便不爽，甚或干结', '尿黄', '或有口干口苦', '喜饮水', '舌质红，苔黄', '脉数'],
      foodTherapy: '采用具有清胃热、消导滞作用的食药物质，如铁皮石斛、麦芽等。',
      recommendedFoods: ['铁皮石斛', '麦芽', '山楂', '苦瓜', '绿豆']
    },
    {
      title: '痰湿内盛证',
      symptoms: ['形体肥胖', '身体沉重', '肢体困倦', '脘痞胸满', '可伴头晕', '口干而不欲饮', '大便黏滞不爽', '嗜食肥甘醇酒', '喜卧懒动', '舌质淡胖或大，苔白腻或白滑', '脉滑'],
      foodTherapy: '采用化痰消滞作用的食药物质，如薏苡仁、橘皮、砂仁等。',
      recommendedFoods: ['薏苡仁', '橘皮', '砂仁', '茯苓', '冬瓜']
    },
    {
      title: '气郁血瘀证',
      symptoms: ['肥胖懒动', '喜太息', '胸闷胁满', '面晦唇暗', '肢端色泽不鲜，甚或青紫', '可伴便干', '失眠', '男子性欲下降甚至阳痿', '女子月经不调、量少甚或闭经', '经血色暗或有血块', '舌质暗或有瘀斑瘀点', '舌苔薄', '脉弦或涩'],
      foodTherapy: '采用理气化瘀作用的食药物质，如橘皮、山楂、当归等。',
      recommendedFoods: ['橘皮', '山楂', '当归', '玫瑰花', '红花']
    },
    {
      title: '脾虚不运证',
      symptoms: ['肥胖臃肿', '神疲乏力', '身体困重', '脘腹痞闷', '或有四肢轻度浮肿', '晨轻暮重', '劳则尤甚', '饮食如常或偏少', '既往多有暴饮暴食史', '小便不利', '大便溏或便秘', '舌质淡胖，边有齿印', '苔薄白或白腻', '脉濡细'],
      foodTherapy: '采用健脾益气作用的食药物质，如茯苓、山药、莲子等。',
      recommendedFoods: ['茯苓', '山药', '莲子', '白术', '黄芪']
    },
    {
      title: '脾肾阳虚证',
      symptoms: ['形体肥胖', '易于疲劳', '四肢不温', '甚或四肢厥冷', '喜食热饮', '小便清长', '舌淡胖', '舌苔薄白', '脉沉细'],
      foodTherapy: '采用温阳补虚作用的食药物质，如小茴香、山药、肉桂等。',
      recommendedFoods: ['小茴香', '山药', '肉桂', '干姜', '枸杞子']
    }
  ]
};

// 食养原则
export const dietaryPrinciples = {
  title: '食养原则与建议',
  description: '根据营养科学理论、中医理论和膳食相关肥胖科学研究文献证据，对成人肥胖患者提出6条日常食养原则和建议。',
  principles: [
    {
      id: 1,
      title: '控制总能量摄入，保持合理膳食',
      icon: 'Scale',
      content: '控制总能量摄入是体重管理的关键。建议每日能量摄入平均降低30%~50%或降低500~1000kcal，或男性限制在1200~1500kcal/d，女性限制在1000~1200kcal/d。',
      details: [
        '三大宏量营养素供能比：脂肪20%~30%，蛋白质15%~20%，碳水化合物50%~60%',
        '一日三餐供能比推荐为3:4:3',
        '主食以全谷物为主，增加粗粮摄入，减少精白米面',
        '保障足量新鲜蔬果摄入，减少高糖水果及高淀粉含量蔬菜',
        '优先选择低脂肪动物性食物和低脂或脱脂奶类'
      ]
    },
    {
      id: 2,
      title: '少吃高能量食物，饮食清淡，限制饮酒',
      icon: 'Apple',
      content: '高能量密度食物通常指提供400kcal/100g以上能量的食物，如油炸食品、含糖烘焙糕点等。减重期间应少吃这类食物。',
      details: [
        '严格控制脂肪/油、盐、添加糖的摄入量',
        '多选用蒸、煮、炖等烹调方式，少油煎炸',
        '采购时阅读食品营养标签，选择低脂肪、低钠、低糖食物',
        '严格限制饮酒，每克酒精可产生7.1kcal能量'
      ]
    },
    {
      id: 3,
      title: '纠正不良饮食行为，科学进餐',
      icon: 'Clock',
      content: '保持一日三餐时间相对固定，定时定量规律进餐，是维持健康体重的重要措施。',
      details: [
        '重视早餐，不漏餐',
        '晚餐建议在17:00-19:00进食',
        '晚餐后不宜再进食食物，但可以饮水',
        '不暴饮暴食，控制零食、饮料的随意进食，避免夜宵',
        '细嚼慢咽，有助于增加饱腹感',
        '按照蔬菜-肉类-主食的顺序进餐'
      ]
    },
    {
      id: 4,
      title: '多动少静，睡眠充足，作息规律',
      icon: 'Activity',
      content: '身体活动不足或缺乏以及久坐的静态生活方式是肥胖发生的主要原因之一。',
      details: [
        '每周进行150~300分钟中等强度的有氧运动',
        '每周5~7天，至少隔天运动1次',
        '抗阻运动每周2~3天，隔天1次，每次10~20分钟',
        '每周通过运动消耗能量2000kcal或以上',
        '每天静坐和被动视屏时间控制在2~4小时以内',
        '保证每日7小时左右的睡眠时间，建议在夜里11点之前上床睡觉'
      ]
    },
    {
      id: 5,
      title: '食养有道，合理选择食药物质',
      icon: 'Leaf',
      content: '遵循"药食同源"理论，结合中医辨证分型论治，合理选择食药物质辅助减重。',
      details: [
        '根据"因人、因时、因地"三因原则选择相应食药物质',
        '选用国家公布的既是食品又是中药材的物质',
        '将食药物质能量与宏量营养素纳入全天饮食总量考虑',
        '已知对某种食药物质过敏者需在专业人员指导下食用'
      ]
    },
    {
      id: 6,
      title: '安全减重，达到并保持健康体重',
      icon: 'Shield',
      content: '科学减重需遵照循序渐进的原则，使大脑思维、体脂肪、肌肉和各个器官适应新能量状态。',
      details: [
        '较为理想的减重目标：6个月内减少当前体重的5%~10%',
        '合理的减重速度：每月减2~4kg',
        '减重初始目标：体重减轻约0.5kg/周',
        '关注体脂率和肌肉量的变化，减少肌肉流失',
        '孕妇、乳母、老年人及慢性病患者需在专业人员指导下减重'
      ]
    }
  ]
};

// 食物选择建议
export const foodChoices = {
  title: '成人肥胖患者的食物选择',
  categories: [
    {
      name: '谷薯类',
      recommended: ['全谷物', '粗粮', '煮玉米', '杂粮煎饼', '全麦粉馒头', '土豆', '山药', '芋头'],
      limited: ['精制米面制品', '馒头', '面条', '米饭'],
      avoid: ['高糖食品', '油炸食品', '糕点类', '奶黄包', '油条', '油饼']
    },
    {
      name: '蔬菜类',
      recommended: ['根菜类', '鲜豆类', '茄果', '瓜菜类', '嫩茎叶花菜', '水生蔬菜类'],
      limited: ['淀粉含量高的根茎类', '莲藕', '山药'],
      avoid: ['油炸或烧烤的蔬菜', '油炸的果蔬脆']
    },
    {
      name: '水果类',
      recommended: ['低GI水果', '柚子', '蓝莓', '草莓', '苹果', '樱桃', '猕猴桃', '圣女果'],
      limited: ['含糖量高的水果', '榴莲', '香蕉', '荔枝', '鲜枣', '芒果'],
      avoid: ['水果罐头', '果脯', '蜜饯']
    },
    {
      name: '畜禽类',
      recommended: ['脂肪含量低的肉类', '鸡肉', '牛瘦肉'],
      limited: ['带皮禽肉', '猪肉', '羊肉'],
      avoid: ['肥肉', '五花肉', '肥肠', '脑']
    },
    {
      name: '水产类',
      recommended: ['清蒸和水煮海鲜', '河鲜'],
      limited: ['较多油盐糖烹饪的水产品', '红烧鱼', '糖醋鱼'],
      avoid: ['油炸或腌制的水产品', '鱼片', '鱿鱼丝']
    },
    {
      name: '豆类',
      recommended: ['大豆和杂豆制品', '豆腐', '无糖豆浆'],
      limited: ['添加少量糖和油的豆制品', '腐竹', '素鸡'],
      avoid: ['油盐糖含量高的加工豆制品', '油豆腐', '油豆皮']
    },
    {
      name: '蛋乳类',
      recommended: ['蒸煮蛋类', '脱脂及低脂乳制品', '脱脂牛奶', '无糖酸奶'],
      limited: ['少油煎蛋', '含少量添加糖的乳制品'],
      avoid: ['含有大量添加糖的乳制品', '风味酸奶']
    },
    {
      name: '饮料类',
      recommended: ['白开水', '矿泉水', '淡茶水'],
      limited: ['不加糖的鲜榨果汁'],
      avoid: ['含糖饮料', '甜味饮料']
    },
    {
      name: '坚果类',
      recommended: ['原味坚果'],
      limited: ['添加少量油盐糖调味的坚果'],
      avoid: ['添加大量油盐糖调味的坚果']
    }
  ]
};

// 运动指导
export interface ExerciseActivity {
  name: string;
  intensity: string;
  calories?: string;
  target?: string;
}

export const exerciseGuidance = {
  title: '运动指导',
  description: '超重和肥胖者减重的运动原则是以中-低强度有氧运动为主，抗阻运动为辅。',
  sections: [
    {
      title: '有氧运动',
      content: '每周进行150~300分钟中等强度的有氧运动，每周5~7天，至少隔天运动1次。',
      activities: [
        { name: '快走', intensity: '中等', calories: '约300kcal/小时' },
        { name: '慢跑', intensity: '中等', calories: '约400kcal/小时' },
        { name: '游泳', intensity: '中等', calories: '约500kcal/小时' },
        { name: '骑自行车', intensity: '中等', calories: '约350kcal/小时' },
        { name: '跳绳', intensity: '中等', calories: '约600kcal/小时' },
        { name: '太极拳', intensity: '低', calories: '约200kcal/小时' }
      ]
    },
    {
      title: '抗阻运动',
      content: '抗阻运动每周2~3天，隔天1次，每次10~20分钟。',
      activities: [
        { name: '俯卧撑', intensity: '中等', target: '上肢、胸部' },
        { name: '深蹲', intensity: '中等', target: '下肢、臀部' },
        { name: '平板支撑', intensity: '中等', target: '核心肌群' },
        { name: '哑铃训练', intensity: '中等', target: '全身肌肉' },
        { name: '弹力带训练', intensity: '低-中等', target: '全身肌肉' }
      ]
    },
    {
      title: '运动注意事项',
      list: [
        '运动前进行5-10分钟热身',
        '运动后进行5-10分钟拉伸',
        '循序渐进，逐步增加运动量',
        '选择适合自己的运动方式',
        '贵在坚持，把运动融入日常生活',
        '每周通过运动消耗能量2000kcal或以上'
      ]
    },
    {
      title: '减少久坐',
      content: '每天静坐和被动视屏时间要控制在2~4小时以内。对于长期静坐或伏案工作者，每小时要起来活动3~5分钟。'
    }
  ]
};

// 药食同源食材
export const foodMedicineItems = [
  {
    name: '山药',
    pinyin: 'Shan Yao',
    nature: '平',
    taste: '甘',
    meridian: '脾、肺、肾',
    effects: ['补脾养胃', '生津益肺', '补肾涩精'],
    indications: ['脾虚食少', '久泻不止', '肺虚喘咳', '肾虚遗精', '带下', '尿频'],
    usage: '15-30g，可煮粥、炖汤、炒菜',
    contraindications: '湿盛中满或有实邪、积滞者不宜单独使用'
  },
  {
    name: '薏米',
    pinyin: 'Yi Mi',
    nature: '凉',
    taste: '甘、淡',
    meridian: '脾、胃、肺',
    effects: ['利水渗湿', '健脾止泻', '除痹', '排脓', '解毒散结'],
    indications: ['水肿', '脚气', '小便不利', '脾虚泄泻', '湿痹拘挛', '肺痈', '肠痈'],
    usage: '9-30g，可煮粥、煮汤',
    contraindications: '孕妇慎用'
  },
  {
    name: '红豆',
    pinyin: 'Hong Dou',
    nature: '平',
    taste: '甘、酸',
    meridian: '心、小肠',
    effects: ['利水消肿', '解毒排脓'],
    indications: ['水肿胀满', '脚气浮肿', '黄疸尿赤', '风湿热痹', '痈肿疮毒', '肠痈腹痛'],
    usage: '9-30g，可煮粥、煮汤',
    contraindications: '阴虚津伤者慎用，过剂令人枯燥'
  },
  {
    name: '枸杞',
    pinyin: 'Gou Qi Zi',
    nature: '平',
    taste: '甘',
    meridian: '肝、肾',
    effects: ['滋补肝肾', '益精明目'],
    indications: ['虚劳精亏', '腰膝酸痛', '眩晕耳鸣', '内热消渴', '血虚萎黄', '目昏不明'],
    usage: '6-12g，可泡茶、煮粥、炖汤',
    contraindications: '外邪实热，脾虚有湿及泄泻者忌服'
  },
  {
    name: '山楂',
    pinyin: 'Shan Zha',
    nature: '微温',
    taste: '酸、甘',
    meridian: '脾、胃、肝',
    effects: ['消食健胃', '行气散瘀', '化浊降脂'],
    indications: ['肉食积滞', '胃脘胀满', '泻痢腹痛', '瘀血经闭', '产后瘀阻', '心腹刺痛', '胸痹心痛', '疝气疼痛', '高脂血症'],
    usage: '9-12g，可泡茶、煮粥',
    contraindications: '胃酸过多者慎用'
  },
  {
    name: '荷叶',
    pinyin: 'He Ye',
    nature: '平',
    taste: '苦、涩',
    meridian: '肝、脾、胃',
    effects: ['清暑化湿', '升发清阳', '凉血止血'],
    indications: ['暑热烦渴', '暑湿泄泻', '脾虚泄泻', '血热吐衄', '便血崩漏'],
    usage: '3-10g，可泡茶',
    contraindications: '体瘦气血虚弱者慎服'
  },
  {
    name: '决明子',
    pinyin: 'Jue Ming Zi',
    nature: '微寒',
    taste: '甘、苦、咸',
    meridian: '肝、大肠',
    effects: ['清热明目', '润肠通便'],
    indications: ['目赤涩痛', '羞明多泪', '头痛眩晕', '目暗不明', '大便秘结'],
    usage: '9-15g，可泡茶',
    contraindications: '脾胃虚寒及便溏者慎服'
  },
  {
    name: '茯苓',
    pinyin: 'Fu Ling',
    nature: '平',
    taste: '甘、淡',
    meridian: '心、肺、脾、肾',
    effects: ['利水渗湿', '健脾', '宁心'],
    indications: ['水肿尿少', '痰饮眩悸', '脾虚食少', '便溏泄泻', '心神不安', '惊悸失眠'],
    usage: '10-15g，可煮粥、煮汤',
    contraindications: '阴虚而无湿热、虚寒滑精、气虚下陷者慎服'
  },
  {
    name: '橘皮',
    pinyin: 'Ju Pi',
    nature: '温',
    taste: '苦、辛',
    meridian: '脾、肺',
    effects: ['理气健脾', '燥湿化痰'],
    indications: ['脘腹胀满', '食少吐泻', '咳嗽痰多'],
    usage: '3-10g，可泡茶、煮汤',
    contraindications: '气虚体燥、阴虚燥咳、吐血及内有实热者慎服'
  },
  {
    name: '黄芪',
    pinyin: 'Huang Qi',
    nature: '微温',
    taste: '甘',
    meridian: '肺、脾',
    effects: ['补气升阳', '固表止汗', '利水消肿', '生津养血', '行滞通痹', '托毒排脓', '敛疮生肌'],
    indications: ['气虚乏力', '食少便溏', '中气下陷', '久泻脱肛', '便血崩漏', '表虚自汗', '气虚水肿', '内热消渴', '血虚萎黄', '半身不遂', '痹痛麻木', '痈疽难溃', '久溃不敛'],
    usage: '9-30g，可泡茶、煮汤',
    contraindications: '表实邪盛，气滞湿阻，食积停滞，阴虚阳亢或痈疽初起、热毒尚盛等实证，以及阴虚阳亢者慎服'
  },
  {
    name: '麦芽',
    pinyin: 'Mai Ya',
    nature: '平',
    taste: '甘',
    meridian: '脾、胃、肝',
    effects: ['行气消食', '健脾开胃', '回乳消胀'],
    indications: ['食积不消', '脘腹胀痛', '脾虚食少', '乳汁郁积', '乳房胀痛', '妇女断乳', '肝郁胁痛', '肝胃气痛'],
    usage: '10-15g，可煮水',
    contraindications: '哺乳期妇女不宜使用'
  },
  {
    name: '莲子',
    pinyin: 'Lian Zi',
    nature: '平',
    taste: '甘、涩',
    meridian: '脾、肾、心',
    effects: ['补脾止泻', '止带', '益肾涩精', '养心安神'],
    indications: ['脾虚泄泻', '带下', '遗精', '心悸失眠'],
    usage: '6-15g，可煮粥',
    contraindications: '中满痞胀及大便燥结者忌服'
  }
];

// 常见食物热量表
export const foodCalories = [
  { category: '谷薯类', name: '米饭', amount: '100g', calories: 116 },
  { category: '谷薯类', name: '馒头', amount: '100g', calories: 223 },
  { category: '谷薯类', name: '面条', amount: '100g', calories: 137 },
  { category: '谷薯类', name: '红薯', amount: '100g', calories: 86 },
  { category: '谷薯类', name: '玉米', amount: '100g', calories: 112 },
  { category: '谷薯类', name: '燕麦', amount: '100g', calories: 377 },
  { category: '蔬菜类', name: '白菜', amount: '100g', calories: 18 },
  { category: '蔬菜类', name: '菠菜', amount: '100g', calories: 24 },
  { category: '蔬菜类', name: '西兰花', amount: '100g', calories: 34 },
  { category: '蔬菜类', name: '西红柿', amount: '100g', calories: 18 },
  { category: '蔬菜类', name: '黄瓜', amount: '100g', calories: 16 },
  { category: '蔬菜类', name: '胡萝卜', amount: '100g', calories: 41 },
  { category: '水果类', name: '苹果', amount: '100g', calories: 52 },
  { category: '水果类', name: '香蕉', amount: '100g', calories: 89 },
  { category: '水果类', name: '橙子', amount: '100g', calories: 47 },
  { category: '水果类', name: '葡萄', amount: '100g', calories: 69 },
  { category: '水果类', name: '西瓜', amount: '100g', calories: 30 },
  { category: '水果类', name: '草莓', amount: '100g', calories: 32 },
  { category: '畜禽类', name: '鸡胸肉', amount: '100g', calories: 165 },
  { category: '畜禽类', name: '猪瘦肉', amount: '100g', calories: 143 },
  { category: '畜禽类', name: '牛肉', amount: '100g', calories: 106 },
  { category: '畜禽类', name: '鸡蛋', amount: '100g', calories: 144 },
  { category: '水产类', name: '草鱼', amount: '100g', calories: 93 },
  { category: '水产类', name: '鲫鱼', amount: '100g', calories: 108 },
  { category: '水产类', name: '虾', amount: '100g', calories: 85 },
  { category: '奶豆类', name: '牛奶', amount: '250ml', calories: 135 },
  { category: '奶豆类', name: '酸奶', amount: '100g', calories: 70 },
  { category: '奶豆类', name: '豆腐', amount: '100g', calories: 76 },
  { category: '坚果类', name: '核桃', amount: '10g', calories: 65 },
  { category: '坚果类', name: '杏仁', amount: '10g', calories: 58 },
  { category: '油脂类', name: '食用油', amount: '10g', calories: 90 },
];

// 指南介绍
export const guideIntroduction = {
  title: '指南介绍',
  sections: [
    {
      title: '制定目的和意义',
      content: '以满足人民健康需求为出发点，预防和控制肥胖，改善肥胖患者体重，调整膳食结构，提高营养健康水平，发展传统食养服务。充分发挥现代营养学和传统食养优势，融入食药物质辅助预防和改善肥胖。'
    },
    {
      title: '制定依据',
      content: '依据《健康中国行动(2019-2030年)》和《国民营养计划(2017-2030年)》等相关要求，鼓励发展传统食养服务，发挥中医药特色优势。'
    },
    {
      title: '主要内容',
      content: '根据肥胖的疾病特点和中医辨证分型，给出食养原则和建议，附录中详细描述了成人肥胖患者的食物选择、不同证型推荐食药物质和食养方举例，以及不同地区、不同季节的食谱示例和常见食物交换表等工具。'
    },
    {
      title: '适用人群',
      content: '主要面向基层卫生工作者(包括营养指导人员)、无合并症和并发症的成人肥胖患者。肥胖合并其他急或慢性病的患者或有并发症者，需在专业人员指导下合理膳食。'
    }
  ]
};

// 免责声明
export const disclaimer = {
  title: '免责声明',
  content: `本网站内容基于国家卫生健康委员会发布的《成人肥胖食养指南（2024年版）》整理制作，仅供参考和学习使用。

1. 本网站提供的信息不能替代专业医疗建议、诊断或治疗。如果您有健康问题，请咨询专业医生或营养师。

2. 每个人的身体状况不同，减重方案应因人而异。建议在进行任何减重计划前，先咨询专业医疗人员。

3. 本网站提供的食谱和建议适用于一般健康的成人肥胖患者，不适用于孕妇、哺乳期妇女、儿童、老年人以及患有慢性疾病的人群。

4. 本网站对因使用或依赖本网站内容而导致的任何损失或损害不承担责任。

5. 本网站内容仅供参考，不构成医疗建议或治疗方案。

6. 使用本网站内容即表示您同意本免责声明的所有条款。`
};
