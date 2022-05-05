const meats = [
    "红烧排骨",
    "红烧鸡翅",
    "红烧鸡爪",
    "红烧牛腩",
    "生炒鸡",
    "排骨玉米汤",
    "小炒牛肉",
    "啤酒鸭",
    "辣椒炒肉",
    "照烧肥牛",
]

const vegetables = [
    "肉沫茄子",
    "炒豆角",
    "小青菜",
    "香煎豆腐",
    "酸辣土豆丝",
    "炒香干",
    "酸辣金针菇",
    "红烧冬瓜",
    "酸辣藕片",
    "肉沫山药",
    "香菜萝卜丝",
    "素三鲜",
    "蒜蓉蒸茄子",
    "蒜苔炒肉",
    "清炒荷兰豆",
    "爆炒豆芽",
    "干煸四季豆",
    "手撕杏鲍菇",
    "凉拌木耳",
    "口菇汤",
    "紫菜汤",
    "冬瓜汤",
    "丝瓜汤",
]

const quicks = [
    "西红柿鸡蛋面",
    "肉丝炒面",
    "青菜粉丝",
    "炒米粉",
    "煎饼",
    "绿豆汤",
    "煮泡面",
    "炒年糕",
    "蛋炒饭",
]

const getRandomItem = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}

const getRandomTwo = arr => {
    const first = getRandomItem(arr)
    let second = first
    while (second === first) {
        second = getRandomItem(arr)
    }
    return [first, second]
}

console.log(`今天午饭吃${getRandomTwo(vegetables).join("、")}和${getRandomItem(meats)}, 晚饭吃${getRandomItem(quicks)}`)