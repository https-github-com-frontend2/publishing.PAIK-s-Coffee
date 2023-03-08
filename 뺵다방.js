// document.querySelector('#btn2').addEventListener('click',function(){
//   document.querySelector('.container').style.transform = 'translate(-100vw)';
// })
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const button4 = document.querySelector('#btn4');
const bannerContainer = document.querySelector('.container');

button2.addEventListener('click',function(){
  bannerContainer.style.transform = 'translate(-100vw)';
  // button2.style.backgroundColor = 'yellow';
})
button3.addEventListener('click',function(){
  bannerContainer.style.transform = 'translate(-200vw)';
  // button3.style.backgroundColor = 'yellow';
})
button4.addEventListener('click',function(){
  bannerContainer.style.transform = 'translate(-300vw)';
  // button4.style.backgroundColor = 'yellow';
})
button1.addEventListener('click',function(){
  bannerContainer.style.transform = 'translate(0)';
  // button1.style.backgroundColor = 'yellow';
})