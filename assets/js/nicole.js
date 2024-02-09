var breedTypeForm = document.getElementById("breedTypeForm");
var breedInput = document.getElementById("breedInput");
var infoHeader = document.getElementById("infoHeader");
var adoptionSection = document.getElementById("adoptionSection"); 
var factsBox = document.getElementById("factsBox"); 
var infoBody = document.getElementById("infoBody");
var adoptionHeader = document.getElementById("adoptionHeader"); 

function handleForm(event) {
  event.preventDefault();
  console.log(breedInput.value);
  // Inserting the breed input value into section title content
  infoHeader.textContent = `Learn more about ${breedInput.value}'s.`;
  adoptionHeader.textContent = `${breedInput.value}s ready for a home!`
  // Removing "hidden" class when a breed is entered into the form
  infoHeader.classList.remove("hidden");
  factsBox.classList.remove("hidden");
  infoBody.classList.remove("hidden");
  adoptionHeader.classList.remove("hidden");
  adoptionSection.classList.remove("hidden");
}

breedTypeForm.addEventListener("submit", handleForm);

// Saving "favorites" to local storage
document.querySelectorAll(".saveFavorite").forEach((button) => {
  button.addEventListener("click", function () {
    console.log("Save to favorites");
    localStorage.setItem("saveFavorite", JSON.stringify(saveFavorite));
  });
});

// Retrieving local storage items to display when user views their favorites
document.getElementById("allFavorites");
