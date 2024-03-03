// const switchesBTN = document.querySelectorAll(".switch-btn");
// const switche = document.querySelector(".switch-btn");
// let store =[]
// for (let i = 0; i < switchesBTN.length;i++){
//   let switchBTN = switchesBTN[i]
//   switchBTN.addEventListener("click", (e)=>{
//     if (switchBTN.classList.contains("active")) {
//       switchBTN.classList.remove("active");
//     } else {
//       switchBTN.classList.add('active');
//       store.push(switchBTN)
//       localStorage.setItem("activate",switchBTN.classList);
//     }
//    });
// }



const settingBox = document.getElementById('setting-box');
const syncBTN = settingBox.children["sync"];
const visibilityBTN = settingBox.children["visibility"];
const privacyBTN = settingBox.children["privacy"];
const deleteBTN = settingBox.children["delete"];
const settingBoxBTN = document.querySelectorAll(".switch-btn");


function switchButton(button) {
  button.addEventListener("click", (e) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        localStorage.setItem(button.name, "no-active");
      } else {
        button.classList.add('active');
        localStorage.setItem(button.name,"active")
      }
      
    });
  }
function activateButton(button) {
  if (localStorage.getItem(button.name) === "active") {
    button.classList.add("active");
  }
}
function setDefaultButton(button) {
  if (localStorage.getItem(button.name)==="active") {
    localStorage.removeItem(button.name);
    button.classList.remove("active");
  }
}
switchButton(syncBTN);
switchButton(visibilityBTN);
switchButton(privacyBTN);

activateButton(syncBTN);
activateButton(visibilityBTN);
activateButton(privacyBTN);


deleteBTN.addEventListener("click", () => {
  setDefaultButton(syncBTN);
  setDefaultButton(visibilityBTN);
  setDefaultButton(privacyBTN);
});

