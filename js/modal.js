const sendRequest = document.querySelector(".send-request");
const repoImg = document.querySelectorAll(".repo-img");
const template = `<div class="modal flex">
<div class="modal-content flex">
<i class="bi bi-x-circle modal-close"></i>
</div>
</div>`;
const message = `<p class="modal-text">Thanks for sending request</p>`;

sendRequest.addEventListener("click", ()=>{
    addModal();
    const modalContent = document.querySelector(".modal-content");
    modalContent.insertAdjacentHTML("beforeend",message);
})
document.body.addEventListener("click", removeModal);
function addModal() {
    document.body.insertAdjacentHTML("beforeend",template);
}
function removeModal(e) {
    if(e.target.matches(".modal-close")) {
        const template = e.target.parentNode.parentNode;
        template.parentNode.removeChild(template);
    } else if(e.target.matches(".modal")) {
        e.target.parentNode.removeChild(e.target);
    }
}
[...repoImg].forEach(i => i.addEventListener("click", (e) => {
    addModal();
    const modalContent = document.querySelector(".modal-content");
    const image = e.target.getAttribute("src");
    const images = `<div class = "modal-wrapper">
    <img src="${image}" alt="" class="modal-image"/>
    </div>`;
    modalContent.insertAdjacentHTML("beforeend",images);
}))
// modal on mobile
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navList = document.querySelector(".nav-list");
menuOpen.onclick = () => navList.style.transform = "translateX(0%)";
menuClose.onclick = () => navList.style.transform = "translateX(100%)";
