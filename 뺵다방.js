// document.querySelector('#btn2').addEventListener('click',function(){
//   document.querySelector('.container').style.transform = 'translate(-100vw)';
// })
const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const button4 = document.querySelector('#btn4');
const bannerContainer = document.querySelector('.container');
const siteLinkButton = document.querySelector('.familySiteLink');

button2.addEventListener('click', function () {
   bannerContainer.style.transform = 'translate(-100vw)';
   // button2.style.backgroundColor = 'yellow';
});
button3.addEventListener('click', function () {
   bannerContainer.style.transform = 'translate(-200vw)';
   // button3.style.backgroundColor = 'yellow';
});
button4.addEventListener('click', function () {
   bannerContainer.style.transform = 'translate(-300vw)';
   // button4.style.backgroundColor = 'yellow';
});
button1.addEventListener('click', function () {
   bannerContainer.style.transform = 'translate(0)';
   // button1.style.backgroundColor = 'yellow';
});

let scrollTopBtn = document.querySelector('.scrollTopBtn');
let rootElement = document.documentElement;

function handleScroll() {
   // Do something on scroll
   let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
   if (rootElement.scrollTop / scrollTotal > 0.02) {
      // Show button
      scrollTopBtn.classList.add('showBtn');
   } else {
      // Hide button
      scrollTopBtn.classList.remove('showBtn');
   }
}

function scrollTop() {
   // Scroll to top logic
   rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
   });
}
scrollTopBtn.addEventListener('click', scrollTop);
document.addEventListener('scroll', handleScroll);
