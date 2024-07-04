// script.js

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");

// Function to open the modal with the clicked image
function openModal() {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get all images with the class 'modal-image'
var images = document.querySelectorAll('.modal-image');
images.forEach(function(image) {
  image.addEventListener('click', openModal);
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}