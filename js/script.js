const switchesBTN = document.querySelectorAll(".switch-btn");

for (let i = 0; i < switchesBTN.length;i++){
  let switchBTN = switchesBTN[i]
  switchBTN.addEventListener("click", (e)=>{
    if (switchBTN.classList.contains("switched")) {
      switchBTN.classList.remove("switched");
    } else {
      switchBTN.classList.add('switched');
      
    }
   });
}