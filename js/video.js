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

//   ビデオギャラリー
    const KEY = 'AIzaSyAfzZ0fO9BUY5qjsFfXAf60lXM7rRq4rHM';
    let url = 'https://www.googleapis.com/youtube/v3/search?';
    url += 'type=video';            // 動画を検索する
    url += '&part=snippet';         // 検索結果にすべてのプロパティを含む
    url += '&q=music';              // 検索ワード このサンプルでは music に指定
    url += '&videoEmbeddable=true'; // Webページに埋め込み可能な動画のみを検索
    url += '&videoSyndicated=true'; // youtube.com 以外で再生できる動画のみに限定
    url += '&maxResults=4';         // 動画の最大取得件数
    url += '&key=' + KEY;           // API KEY
    
    const videoGallery = document.getElementById('video-gallery');

    const callApi = async () => {
        const response = await fetch(url);
        const json = await response.json();
        // const JSON = JSON.parse(json);
        // const items = json.items;
        // const id = items[i].id;
        // console.log(videoID);
        let video = '';
        let result = '';
        for (let i = 0; i < json.items.length; i++) {
            
            video = '<iframe src="https://www.youtube.com/embed/';
            video += json.items[i].id.videoId;
            video += '"></iframe>';
            result+= '<div class="video">' + video + '</div>'
            videoGallery.innerHTML = result;
        }
    }
    callApi();

});

