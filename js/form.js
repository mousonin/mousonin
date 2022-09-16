const requestForm = document.querySelector(".request-form");
let num = 1;
const getName = requestForm.elements["getName"];
const getEmail = requestForm.elements["getEmail"];
const getMessage = requestForm.elements["getMessage"];
let valueName = getName.value;
let valueEmail = getEmail.value;
let valueMessage = getMessage.value;
const inputs = document.querySelectorAll("#request-input");
setInterval(function() {
  const inputValue = [...inputs].map((input) => input.value);
  const validInput = inputValue.every((value) => value.length > 0);
  if(validInput) {
    sendRequest.classList.remove("invalid")
  } else {
    sendRequest.classList.add("invalid")
  }}, 2000);
sendRequest.addEventListener("click", (e) => {
  const inputValue = [...inputs].map((input) => input.value);
  console.log(inputValue);
  e.preventDefault();
  let request = `${valueName},${valueEmail},${valueMessage}`;
  localStorage.setItem(`request${num}`, JSON.stringify(request));
  num++;
});