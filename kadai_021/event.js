const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click' , function () {
    setTimeout(() => {
  console.log('btn');
  text.textContent ="ボタンをクリックしました";
}, 2000);  
});
