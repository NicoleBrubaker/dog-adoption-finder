
var formEl = document.querySelector("#breedTypeForm");
var inputEl = document.getElementById("breedInput");
//where to display info
var infoTextArea = document.getElementById("infoBody");
var accesskey = "8KUYju2fMKa07wcc0bQTxubvo7B7yPKgcK8Aa4zD";
var apiUrl = "https://api.api-ninjas.com/v1/dogs?";

formEl.addEventListener("submit", function () {
    var breedName = inputEl.value;
  searchImages(breedName);
});
async function searchImages(breedName) {
  const response = await fetch(apiUrl + 'name=' + breedName, {
    method: "GET",
    headers: {
      "X-Api-Key": accesskey,
    },
  });
  var data = await response.json();
  console.log(data);
 
    const element = data[0];
    console.log(element)
    console.log(element.good_with_children);

    //add data elements as list items 
}

