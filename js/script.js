
const settingBox = document.getElementById('setting-box');
const syncBTN = settingBox.children["sync"];
const visibilityBTN = settingBox.children["visibility"];
const privacyBTN = settingBox.children["privacy"];
const deleteBTN = settingBox.children["delete"];
const darkModeBTN = settingBox.children["darkmode"];
const deleteAccountDiv = deleteBTN.previousElementSibling;


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
    if (button.name === "darkmode") {
      document.body.classList.add("dark-mode");
    }
  }
}
function setDefaultButton(button) {
  if (localStorage.getItem(button.name)==="active") {
    localStorage.removeItem(button.name);
    button.classList.remove("active");
    if (button.name === "darkmode") {
      document.body.classList.remove("dark-mode");
    }
  }
}

// toggle button switch when clicked and added to localStorage
switchButton(syncBTN);
switchButton(visibilityBTN);
switchButton(privacyBTN);
switchButton(darkModeBTN)
// change body to darkmode when dark mode button is activated
darkModeBTN.addEventListener("click", () => {
  if (darkModeBTN.classList.contains("active")) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
// if button is activated 
activateButton(syncBTN);
activateButton(visibilityBTN);
activateButton(privacyBTN);
activateButton(darkModeBTN);


// set all buttons to non active state when delete button clicked
deleteBTN.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    const blur = document.querySelector("#blur");
    const deleteModal = document.getElementById("delete-confirm");
    blur.classList.add("delete-active");
    deleteModal.classList.remove("hidden");

    const SelectDeleteButtons = document.getElementById("delete-buttons");
    const deleteButtons = SelectDeleteButtons.children;
    
    for (let i = 0; i < deleteButtons.length; i++){
      let buttons = deleteButtons[i];
      buttons.addEventListener("click", (e) => {
        if (buttons.id === "delete-no") {
          deleteModal.classList.add("hidden");
          blur.classList.remove("delete-active");
        } else if (buttons.id === "delete-yes") {
          setDefaultButton(syncBTN);
          setDefaultButton(visibilityBTN);
          setDefaultButton(privacyBTN);
          setDefaultButton(darkModeBTN);
          deleteModal.classList.add("hidden");
          blur.classList.remove("delete-active");

          deleteBTN.textContent = "Create an Account";
          settingBox.removeChild(deleteAccountDiv);
          deleteBTN.classList.remove("grid-item-btn");
          deleteBTN.classList.add("grid-create-account-btn");

        }
      });
      
    }
    
  }

});

