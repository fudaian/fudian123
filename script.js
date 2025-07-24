// 英雄数据
const heroes = {
    jett: {
        name: '捷风',
        image: '/fudain123/images/img-jf.webp',
        skills: [
            '疾风步：快速冲刺一段距离',
            '乘风：短暂飞行',
            '闪流：扔出一个闪光飞镖',
            '刀锋之舞：获得一把无限弹药的武士刀'
        ],
        items: [
            '标准手枪',
            '短刀'
        ]
    },
    sage: {
        name: '贤智',
        image: 'images/sage.jpg',
        skills: [
            '治疗之球：治疗自己或队友',
            '守护之壁：创建一道屏障',
            '冰封陷阱：放置一个陷阱，敌人触发后会被冻结',
            '安息：复活一名倒下的队友'
        ],
        items: [
            '标准手枪',
            '短刀'
        ]
    },
    heimeng: {
        name: '黑梦',
        image: 'fudain123/images/img-hm.webp',
        skills: [
            '疾风步：快速冲刺一段距离',
            '乘风：短暂飞行',
            '闪流：扔出一个闪光飞镖',
            '刀锋之舞：获得一把无限弹药的武士刀'
        ],
        items: [
            '标准手枪',
            '短刀'
        ]
    },

    }

// 主页面点击事件
const heroCards = document.querySelectorAll('.hero-card');
heroCards.forEach(card => {
    card.addEventListener('click', () => {
        const heroName = card.dataset.hero;
        localStorage.setItem('selectedHero', heroName);
        window.location.href = 'hero-detail.html';
    });
});

// 英雄详情页加载数据
if (window.location.pathname.includes('hero-detail.html')) {
    const selectedHero = localStorage.getItem('selectedHero');
    const hero = heroes[selectedHero];
    if (hero) {
        document.getElementById('hero-name').textContent = hero.name;
        document.getElementById('hero-image').src = hero.image;
        const skillsList = document.getElementById('hero-skills');
        const itemsList = document.getElementById('hero-items');
        hero.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
        hero.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            itemsList.appendChild(li);
        });
    } else {
        console.error('未找到对应的英雄数据');
    }
}

// 地图视频页逻辑
if (window.location.pathname.includes('map-video.html')) {
    const mapSelect = document.getElementById('map');
    const sideSelect = document.getElementById('side');
    const playButton = document.getElementById('play-video');
    const videoPlayer = document.getElementById('map-video-player');

    playButton.addEventListener('click', () => {
        const map = mapSelect.value;
        const side = sideSelect.value;
        // 视频文件名格式示例：bind_attack.mp4
        const videoSrc = `videos/${map}_${side}.mp4`; 
        videoPlayer.src = videoSrc;
        videoPlayer.play().catch(error => {
            console.error('视频播放失败:', error);
        });
    });
}