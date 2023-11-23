const popupWrapper = document.getElementById("popup-wrapper");
const closeButton = document.getElementById("close-button");
const orderForm = document.getElementById("order-form");

function showPopup() {
  popupWrapper.style.display = "flex";
}

document.addEventListener("mouseleave", function(event) {
  event.preventDefault();
  popupWrapper.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  popupWrapper.style.display = "none";
  orderForm.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});

setTimeout("showPopup()", 20000);