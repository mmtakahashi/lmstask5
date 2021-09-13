window.addEventListener('load',() => {
    const humToggle = document.getElementById('hum-button');
    const closeButton = document.getElementById('close-button');

    humToggle.addEventListener('click',() => {
        
        
        // (e.target != e.currentTarget)
        
        if(!humToggle.classList.contains('active')){
            humToggle.classList.add('active');
            closeButton.classList.add('active');
            document.getElementById('flag-home').classList.add('active');
            document.getElementById('lines__container').classList.add('active');
            document.getElementById('buns-top').classList.add('active');
            document.getElementById('patty').classList.add('active');
            document.getElementById('buns-bottom').classList.add('active');
            document.getElementById('cheese-photo').classList.add('active');
            document.getElementById('tomato-video').classList.add('active');
            document.getElementById('lettuce-form').classList.add('active');
        }

    })
    closeButton.addEventListener('click',() => {
    console.log('Hallo');
    humToggle.classList.remove('active');
    closeButton.classList.remove('active');
    document.getElementById('flag-home').classList.remove('active');
    document.getElementById('lines__container').classList.remove('active');
    document.getElementById('buns-top').classList.remove('active');
    document.getElementById('patty').classList.remove('active');
    document.getElementById('buns-bottom').classList.remove('active');
    document.getElementById('cheese-photo').classList.remove('active');
    document.getElementById('tomato-video').classList.remove('active');
    document.getElementById('lettuce-form').classList.remove('active');
    })

    // アルバムデータの作成
    let album = [
    { src: '../img/amuro.png', msg: '女に作戦を聞くわけにはいかない'},
    { src: '../img/bright.png', msg: '殴ってなぜ悪いか'},
    { src: '../img/garma.png', msg: 'ガルマの肖像画'},
    ];
  
    // 最初のデータを表示しておく
    let mainImage = document.createElement('img');
    mainImage.setAttribute('src', album[0].src);
    mainImage.setAttribute('alt', album[0].msg);

    let mainMsg = document.createElement('p');
    mainMsg.innerText = mainImage.alt;

    let mainFlame = document.querySelector('#photo-gallery .main-photo');
    mainFlame.insertBefore(mainImage, null);
    mainFlame.insertBefore(mainMsg, null);

    // サムネイル画像の表示
    let thumbFlame = document.querySelector('#photo-gallery .thumb-photo');
    for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
    }

    // クリックした画像をメインにする
    thumbFlame.addEventListener('click', function(event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
 })
  
});

