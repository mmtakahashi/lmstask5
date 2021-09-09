// ハンバーガーメニュー押下時にアクティブに切り替える
window.addEventListener('load',() => {
    const humToggle = document.querySelector('.hum-act');
    document.addEventListener('click', () => {
        humToggle.classList.toggle('active');
        document.querySelector('.accordion').classList.toggle('active');
    })
});