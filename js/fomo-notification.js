function fomoTemplate(title) {
  const fomo = `<div class="noti shadow">
    <p class="noti-content">Good ${title}</p>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", fomo)
}
const timing = ["morning", "afternoon", "evening"];
const getHour = new Date().getHours();
if (getHour >= 20) {
    title = timing[2]
} else if (getHour >= 12) {
    title = timing[1]
} else {
    title = timing[0]   
}
setTimeout(fomoTemplate(title),2000)