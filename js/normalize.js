// ハンバーガーメニュー押下時にアクティブに切り替える
// window.addEventListener('load',() => {
//     const humToggle = document.querySelectorAll('.hum-act');
//     humToggle.forEach(act => {
//         act.addEventListener('click', () => {
//             // console.log('Hallo');
//             // humToggle.classList.toggle('active');
//             document.querySelector('.accordion').classList.toggle('active');
//         });
//     });
// });

window.addEventListener('load',() => {
    const humToggle = document.getElementById('hum-button');
    humToggle.addEventListener('click',() => {
        humToggle.classList.toggle('active');
        document.getElementById('lines__container').classList.toggle('active');
        document.getElementById('buns-top').classList.toggle('active');
        document.getElementById('patty').classList.toggle('active');
        document.getElementById('buns-bottom').classList.toggle('active');
        document.getElementById('accordion').classList.toggle('active');
    })
});