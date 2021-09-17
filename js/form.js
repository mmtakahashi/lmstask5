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
    
    
    // フォームの要素を取得
    let textArea = document.getElementById('textarea');

    // textAreaからmaxlengthの値を取得
    let maxTextNum = textArea.getAttribute('maxlength');

    // ②入力されると文字数制限の文言が挿入される
    const zanlength = textArea.addEventListener('input', () => {
        let currentTextNum = textArea.value.length;
        hiku = maxTextNum - currentTextNum;
        textMsg.innerHTML = '<p>あと' + hiku + '字入力可</p>';
    })

    // 残り文字数を表示する要素の追加
    let textMsg = document.createElement('div');
    let parent = textArea.parentElement;
    parent.insertBefore(textMsg, textArea.nextSibling);

    // ①最初から表示されている(フォーム入力で②に置き換わる)
    textMsg.innerHTML = '<p>あと' + 500 + '文入力可</p>';

});

