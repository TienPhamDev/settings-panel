
const settingBox = document.getElementById('setting-box');
const syncBTN = settingBox.children["sync"];
const visibilityBTN = settingBox.children["visibility"];
const privacyBTN = settingBox.children["privacy"];
const deleteBTN = settingBox.children["delete"];

// functions
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
// toggle button switch when clicked and added to localStorage
switchButton(syncBTN);
switchButton(visibilityBTN);
switchButton(privacyBTN);

// if button is activated 
activateButton(syncBTN);
activateButton(visibilityBTN);
activateButton(privacyBTN);

// set all buttons to non active state when delete button clicked
deleteBTN.addEventListener("click", () => {
  setDefaultButton(syncBTN);
  setDefaultButton(visibilityBTN);
  setDefaultButton(privacyBTN);
});

