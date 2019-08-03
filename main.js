let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");

const toggleModal = () => {
  modal.classList.toggle("show-modal");
  document.getElementById('myForm').reset();
}

const windowOnClick = (e) => {
  if (e.target === modal) {
    toggleModal();
  }
}

$('#myForm').submit(function(e){
  e.preventDefault();
  let formData = $("#myForm").serializeArray();
  const [nameFiled, emailField, phoneField ] = formData;

  let jsonData = {
    name: nameFiled.value,
    email: emailField.value,
    number: phoneField.value
  };

  $.ajax({
      url:'https://hyde-api.herokuapp.com/users/',
      type:'post',
      data:jsonData,
      success:function(data){
          $('#message').html(data.message);
          toggleModal();
      },
      error: function(data) {
        $('#message').html(data.responseJSON.message);
        toggleModal();
      }
  });
});

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);