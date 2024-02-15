var breedTypeForm = document.getElementById("breedTypeForm");
var breedInput = document.getElementById("breedInput");
var infoHeader = document.getElementById("infoHeader");
var adoptionSection = document.getElementById("adoptionSection");
var factsBox = document.getElementById("factsBox");
var infoBody = document.getElementById("infoBody");
var adoptionHeader = document.getElementById("adoptionHeader");
var learnMorePTag = document.getElementById("learnMorePTag");

function handleForm(event) {
  event.preventDefault();
  // Inserting the breed input value into section title content
  infoHeader.textContent = `Learn more about ${breedInput.value}'s.`;
  adoptionHeader.textContent = `${breedInput.value}s ready for a home!`;
  // Removing "hidden" class when a breed is entered into the form
  infoHeader.classList.remove("hidden");
  factsBox.classList.remove("hidden");
  infoBody.classList.remove("hidden");
  adoptionHeader.classList.remove("hidden");
  adoptionSection.classList.remove("hidden");
  learnMorePTag.classList.remove("hidden");
}

breedTypeForm.addEventListener("submit", handleForm);

// Favorites modal functionality open & close
document.addEventListener("DOMContentLoaded", (event) => {
  var allFavoritesButton = document.getElementById("allFavorites");
  var favoritesModal = document.getElementById("favoritesModal");
  var closeModal = document.getElementById("closeModal");

  allFavoritesButton.addEventListener("click", function () {
    favoritesModal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", function () {
    favoritesModal.classList.add("hidden");
  });
});

// Saving "favorites" to local storage
document.querySelectorAll(".saveFavorite").forEach((button) => {
  button.addEventListener("click", function () {
    localStorage.setItem("saveFavorite", JSON.stringify(saveFavorite));
  });
});
