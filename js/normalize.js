// ハンバーガーメニュー押下時にアクティブに切り替える
window.addEventListener('load',() => {
    const humToggle = document.querySelector('.hum-toggle');
    document.addEventListener('click', () => {
        humToggle.classList.toggle('active');
        document.querySelector('.accordion').classList.toggle('active');
    })
});