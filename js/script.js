const switchesBTN = document.querySelectorAll(".switch-btn");
const switche = document.querySelector(".switch-btn");
let store =[]
for (let i = 0; i < switchesBTN.length;i++){
  let switchBTN = switchesBTN[i]
  switchBTN.addEventListener("click", (e)=>{
    if (switchBTN.classList.contains("active")) {
      switchBTN.classList.remove("active");
    } else {
      switchBTN.classList.add('active');
      store.push(switchBTN)
      localStorage.setItem("activate",switchBTN.classList);
    }
   });
}


