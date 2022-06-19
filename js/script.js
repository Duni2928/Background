
"use strict"

//bg-section

const block = document.querySelector('.block');
const img = document.getElementsByClassName('img');
let blockRect = block.getBoundingClientRect();
for (let i = 0; i < 200; i++) {
  block.innerHTML+='<div class="block-element"><picture><source srcset="img/f2.webp" type="image/webp"><img class="img" src="img/f2.jpg" alt=""></picture></div>';
  const blockEl = document.getElementsByClassName('block-element');
  let delay = Math.random() * 5;
  let duration = 2 + Math.random() * 5;
  blockEl[i].style.animationDuration = 2 + duration + 's';
  blockEl[i].style.animationDelay = +duration + 's';
  let blockElRect = blockEl[i].getBoundingClientRect();
  let x = -blockElRect.left + blockRect.left + "px";
  let y = -blockElRect.top + blockRect.top +"px";
  img[i].style.width = block.offsetWidth + "px"
  img[i].style.height = block.offsetHeight +"px"
  img[i].style.left = x
  img[i].style.top = y
}
