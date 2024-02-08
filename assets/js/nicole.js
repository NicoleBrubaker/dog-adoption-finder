var breedTypeForm = document.getElementById("breedTypeForm");
var breedInput = document.getElementById("breedType");
var infoHeader = document.getElementById("infoHeader");

function handleForm(event) {
  event.preventDefault();
  console.log(breedInput.value);
  infoHeader.textContent = `Learn more about ${breedInput.value}'s.`;
  // call api
}
breedTypeForm.addEventListener("submit", handleForm);


