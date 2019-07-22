let modal = document.querySelector(".modal");
let trigger = document.querySelector(".button-register");
let closeButton = document.querySelector(".close-button");

const toggleModal = () => modal.classList.toggle("show-modal");

const windowOnClick = (e) => {
  if (e.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//[hyde-api.herokuapp.com/users/