let msg = document.getElementById("user_input");
let duration = document.getElementById("duration");
let cancel = document.getElementById("cancel");

let success = document.getElementById("success");
let error = document.getElementById("error");

let addToast = document.getElementById("addToast");
let removeToasts = document.getElementById("removeToasts");

success.addEventListener("change", handleRadioChange);
error.addEventListener("change", handleRadioChange);

let isSuccess = "";
let isError = "";

addToast.addEventListener("click", () => {
  let message = msg.value;
  let time = duration.value;
  let isCancelled = cancel.checked;

  console.log("Message: ", message);
  console.log("Duration: ", time);
  console.log("Is it cancelled? : ", isCancelled);
  console.log(isSuccess ? success.value : error.value);

  const div = document.createElement("div");
  const cancelBtn = document.createElement("h3");
  cancelBtn.innerText = "X";
  div.classList.add = "toast";
});

function handleRadioChange(e) {
  if (e.target.value == "success") {
    isSuccess = true;
  } else if (e.target.value == "error") {
    isError = true;
  }
}
