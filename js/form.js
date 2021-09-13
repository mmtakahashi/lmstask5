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
  
});

