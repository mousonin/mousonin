const requestForm = document.querySelector(".request-form");
let num = 1;
const getName = requestForm.elements["getName"];
const getEmail = requestForm.elements["getEmail"];
const getMessage = requestForm.elements["getMessage"];
let valueName = getName.value;
let valueEmail = getEmail.value;
let valueMessage = getMessage.value;
const input = requestForm.getElementsByTagName("input");
console.log([...input]);
sendRequest.classList.add("invalid");
// [...].addEventListener("mouseenter", (e) => {
//     if(valueEmail && valueMessage && valueMessage) {
//         e.target.classList.remove("invalid");       
//     }
// })
sendRequest.addEventListener("click", (e) => {
    e.preventDefault();
    let request = `${valueName},${valueEmail},${valueMessage}`;
    localStorage.setItem(`request${num}`, JSON.stringify(request));
    num++;
})