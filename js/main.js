const navItem = document.querySelectorAll(".nav-item");
const repoLink = document.querySelectorAll(".repo-link")
const line = document.createElement("div");
const btnInfo = document.querySelectorAll('.btn-info');
const sliderMain = document.querySelector(".slider-main");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const arrow = document.querySelectorAll(".arrow");
const slider = document.querySelectorAll(".slider");
const btn = document.querySelectorAll(".btn");
const sliderWidth = slider[0].offsetWidth;
let index = 0;
let positionX = 0;

[...navItem].forEach((i) => i.addEventListener("mouseenter", handleHover));
[...repoLink].forEach((i) => i.addEventListener("mouseenter", handleHover));
[...navItem].forEach((i) => i.addEventListener("mouseleave", removeLine));
[...repoLink].forEach((i) => i.addEventListener("mouseleave", removeLine));
[...navItem].forEach((i) => i.addEventListener("click", handleChangeSlideByOther));
[...btnInfo].forEach(i => i.addEventListener("click", handleChangeSlideByOther));
[...btn].forEach(i => i.addEventListener("mouseenter", changeColorBtn));
[...btn].forEach(i => i.addEventListener("mouseleave", changeColorBtn));
[...navItem][navItem.length - 1].addEventListener("click",() => {
  arrowRight.classList.add("hide");
})
function handleChangeSlideByOther (e) {
  [...arrow].forEach(i => i.classList.remove("hide"));
  index = e.target.dataset.index;
  positionX = -1 * index * sliderWidth;
  sliderMain.style = `transform: translateX(${positionX}px)`;
  [...navItem].forEach(i => i.classList.remove("active"));
  [...navItem][index - 1].classList.add("active");
}
function handleHover(e) {
  let { top, left, width, height } = e.target.getBoundingClientRect();
  line.style.left = `${left}px`;
  line.style.top = `${top + height}px`;
  line.style.width = `${width}px`;
}
function removeLine () {
  line.style.width = 0;
};
arrowLeft.classList.add("hide");
line.classList.add("line-effect");
document.body.appendChild(line);
arrowRight.addEventListener("click", () => {
  console.log(index);
  if(index <= 1) {
    arrowLeft.classList.remove("hide");
  } else {
    arrowRight.classList.add("hide");
  }
    if(index >= slider.length - 1) return;
    index++;
    positionX = positionX - sliderWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    activeIndexNav(index);
});
arrowLeft.addEventListener("click", () => {
  console.log(index);
  if(index > 0) {
    arrowRight.classList.remove("hide");
  } 
  if(index <= 1) {
    arrowLeft.classList.add("hide");
  }
  if(index <= 0 ) {
    return;
  }
    index--;
    positionX = positionX + sliderWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
    activeIndexNav(index);
})
function activeIndexNav(e) {
  [...navItem].forEach(i => i.classList.remove("active"));
  e = parseInt(e) - 1;
  if(e >= 0) [...navItem][e].classList.add("active");
}
function changeColorBtn (e) {
  e.target.classList.toggle("yellow");
  e.target.classList.toggle("blue");
}

//save dữ liệu request vào local storage
//sử dụng validation cho email
//tải CV ở phần my resume