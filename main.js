// 南昌相关诗句
const poems = [
    "滕王高阁临江渚，佩玉鸣鸾罢歌舞",
    "落霞与孤鹜齐飞，秋水共长天一色",
    "南昌故郡，洪都新府",
    "星分翼轸，地接衡庐",
    "襟三江而带五湖，控蛮荆而引瓯越",
    "物华天宝，龙光射牛斗之墟",
    "人杰地灵，徐孺下陈蕃之榻",
    "雄州雾列，俊采星驰",
    "台隍枕夷夏之交，宾主尽东南之美",
    "南昌美食，瓦罐汤香",
    "赣江风光，秋水长天",
    "八一起义，英雄城市",
    "梅湖春色，烟波浩渺",
    "南昌拌粉，香飘四溢",
    "滕王阁上，望尽天涯",
];

// 南昌数据
const nanchangData = {
    name: "南昌",
    attractions: [
        {
            name: "滕王阁",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/tengwangge.jpg",
            description: "江南三大名楼之一，因王勃的《滕王阁序》而闻名于世。"
        },
        {
            name: "八一起义纪念馆",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/bayi.jpg",
            description: "纪念1927年南昌起义的重要历史遗址。"
        },
        {
            name: "秋水广场",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/qiushui.jpg",
            description: "南昌市最大的城市广场，是市民休闲娱乐的重要场所。"
        },
        {
            name: "梅湖景区",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/meihu.jpg",
            description: "以梅花为主题的生态公园，四季景色各异。"
        }
    ],
    foods: [
        {
            name: "南昌拌粉",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/banfen.jpg",
            description: "南昌特色小吃，口感爽滑，配料丰富。"
        },
        {
            name: "瓦罐汤",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/waguantang.jpg",
            description: "传统名菜，汤鲜味美，营养丰富。"
        },
        {
            name: "南昌炒粉",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/chaofen.jpg",
            description: "南昌特色美食，口感独特，香辣可口。"
        },
        {
            name: "白糖糕",
            image: "https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/baitanggao.jpg",
            description: "传统小吃，甜而不腻，软糯可口。"
        }
    ]
};

// 路由配置
const routes = [
    {
        path: '/',
        component: {
            template: `
                <div class="entry-animation" @click="goToHome">
                    <div class="hero-city-symbol"></div>
                    <div class="city-silhouette"></div>
                    <div class="light-effect"></div>
                    <div class="city-name">
                        <span>南</span>
                        <span>昌</span>
                        <span>印</span>
                        <span>象</span>
                    </div>
                    <div class="city-slogan">英雄之城 · 红色故都</div>
                </div>
            `,
            methods: {
                goToHome() {
                    this.$router.push('/home');
                }
            }
        }
    },
    {
        path: '/home',
        component: {
            template: `
                <div class="page-container">
                    <van-nav-bar
                        title="南昌印象"
                    />
                    <div class="welcome-section">
                        <h1 class="welcome-title">欢迎来到南昌</h1>
                        <p class="welcome-desc">英雄之城，红色故都</p>
                        <div class="city-image-container">
                            <img class="city-image" src="https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/city-view.jpg" alt="南昌城市风光">
                        </div>
                    </div>
                    
                    <h2 class="section-title">特色美食</h2>
                    <div class="cards-container">
                        <div v-for="food in nanchangData.foods" :key="food.name" class="card card-flip">
                            <div class="card-flip-inner">
                                <div class="card-front">
                                    <img class="card-image" :src="food.image" :alt="food.name">
                                    <div class="card-content">
                                        <h3 class="card-title">{{ food.name }}</h3>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <p class="card-desc">{{ food.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 class="section-title">著名景点</h2>
                    <div class="cards-container">
                        <div v-for="attraction in nanchangData.attractions" :key="attraction.name" class="card card-flip">
                            <div class="card-flip-inner">
                                <div class="card-front">
                                    <img class="card-image" :src="attraction.image" :alt="attraction.name">
                                    <div class="card-content">
                                        <h3 class="card-title">{{ attraction.name }}</h3>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <p class="card-desc">{{ attraction.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    nanchangData: {
                        foods: [
                            {
                                name: '南昌拌粉',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/banfen.jpg',
                                description: '南昌特色小吃，以米粉为主料，配以各种调料，口感爽滑，香辣可口。'
                            },
                            {
                                name: '瓦罐汤',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/waguantang.jpg',
                                description: '传统名菜，以瓦罐为器皿，慢火炖煮，汤汁浓郁，营养丰富。'
                            },
                            {
                                name: '南昌炒粉',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/chaofen.jpg',
                                description: '南昌特色小吃，米粉与各种配料一起翻炒，香气四溢。'
                            },
                            {
                                name: '白糖糕',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/baitanggao.jpg',
                                description: '传统甜点，口感软糯，甜而不腻。'
                            }
                        ],
                        attractions: [
                            {
                                name: '滕王阁',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/tengwangge.jpg',
                                description: '江南三大名楼之一，始建于唐代，是南昌的标志性建筑。'
                            },
                            {
                                name: '八一起义纪念馆',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/bayi.jpg',
                                description: '纪念1927年南昌起义的重要历史遗址，展示了中国革命的光辉历程。'
                            },
                            {
                                name: '秋水广场',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/qiushui.jpg',
                                description: '南昌市中心的大型城市广场，是市民休闲娱乐的重要场所。'
                            },
                            {
                                name: '梅湖景区',
                                image: 'https://imgform.oss-cn-hangzhou.aliyuncs.com/nanchang/meihu.jpg',
                                description: '南昌市著名的自然风景区，以梅花和湖泊景观著称。'
                            }
                        ]
                    }
                }
            },
        }
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const poemContainer = document.getElementById("poemContainer");
    const loadingOverlay = document.getElementById("loadingOverlay");
    const maxPoems = 6;
    let activePoems = 0;

    function createPoem() {
        if (activePoems >= maxPoems) return;
        const poem = poems[Math.floor(Math.random() * poems.length)];
        setTimeout(() => {
            if (poemContainer) {
                const poemElement = document.createElement("div");
                poemElement.className = "poem";
                poemElement.textContent = poem;
                const direction = Math.floor(Math.random() * 4);
                let startX, startY, endX, endY;
                switch (direction) {
                    case 0:
                        startX = Math.random() * 40;
                        startY = 60 + Math.random() * 40;
                        endX = 60 + Math.random() * 40;
                        endY = Math.random() * 40;
                        break;
                    case 1:
                        startX = 60 + Math.random() * 40;
                        startY = 60 + Math.random() * 40;
                        endX = Math.random() * 40;
                        endY = Math.random() * 40;
                        break;
                    case 2:
                        startX = Math.random() * 40;
                        startY = Math.random() * 40;
                        endX = 60 + Math.random() * 40;
                        endY = 60 + Math.random() * 40;
                        break;
                    case 3:
                        startX = 60 + Math.random() * 40;
                        startY = Math.random() * 40;
                        endX = Math.random() * 40;
                        endY = 60 + Math.random() * 40;
                        break;
                }
                const rotate = (Math.random() - 0.5) * 60;
                const duration = 2.5 + Math.random() * 2;
                poemElement.style.setProperty("--moveX", `${endX - startX}vw`);
                poemElement.style.setProperty("--moveY", `${endY - startY}vh`);
                poemElement.style.setProperty("--rotate", `${rotate}deg`);
                poemElement.style.left = `${startX}vw`;
                poemElement.style.top = `${startY}vh`;
                poemElement.style.animation = `float-poem ${duration}s ease-in-out infinite`;
                poemElement.style.animationDelay = `${Math.random() * 1}s`;
                poemContainer.appendChild(poemElement);
                activePoems++;
                poemElement.addEventListener("animationend", () => {
                    poemElement.remove();
                    activePoems--;
                    createPoem();
                });
            }
        }, Math.random() * 500);
    }
    for (let i = 0; i < maxPoems; i++) {
        createPoem();
    }
    // 2秒后隐藏loading
    setTimeout(() => {
        loadingOverlay.style.opacity = 0;
        setTimeout(() => {
            loadingOverlay.style.display = "none";
        }, 500);
    }, 2000);
});

// Vue初始化
const router = new VueRouter({ routes });
new Vue({
    el: "#app",
    router
});