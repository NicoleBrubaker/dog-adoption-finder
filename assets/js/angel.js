const apiKeytoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJDMThhZlhBQk5kUmlaenZnZXNGQUVYRHJQUUs3TjRnV2lrQ3dDYVpCYnRmSjRsUkFhSSIsImp0aSI6ImYyNTliNzE3YTMxMjdkOWYxNDQxMjU5MTc4MWUyZDhmNjhjNTZlZmE2ZGFmZWNiY2MyMzkwY2NhNjVlZGQ1NDFjYWQ4NjI2YjUyMWU2NThkIiwiaWF0IjoxNzA3OTYzOTE5LCJuYmYiOjE3MDc5NjM5MTksImV4cCI6MTcwNzk2NzUxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.kIeVggu-6JyxE-kaa20ezw6fio-fFIIn6xtnDfvBjpVvRl0TN0d0rejkvGr2FGafbkI1JLSLC3wcDuelwgTOQ0OcGR1xyuy-ifg5wkQWEpBWwNw0lHAW8K9ilV2zLXsPJcD9zyLfP5BX8qP8tHeF4MiPjZO6okCsBOAET8xhMgRQmwz3vSMTp9d7iRvnKS0eTM0uKCHE3GLVkqc0GT5uFYmqi_kcEySoCgWLnPI3K-ks1ne4olwIiAEAw8SizZGgltOk9UhP1FoNkA1qDQqY6IC6FNtMC9AEakui3J_MPBRlAMpLd4afJ8mEC2TRunukkZzpudoIEBkLvWD2atElhA';
const breedsapiUrl = 'https://api.petfinder.com/v2/types/dog/breeds';
const searchBtn = document.getElementById('searchpets');
const breedInputEl = document.getElementById('breedInput');
const dogLink = document.getElementById('dogLink1');

// Function to open Petfinder URL for a specific breed
function openPetfinderUrl(breedName) {
  const petfinderUrl = `https://www.petfinder.com/dog-breeds/${breedName}`;
  // console.log('Opening Petfinder URL:', petfinderUrl);
  // window.open(petfinderUrl, '_blank');
  
  fetch('https://api.petfinder.com/v2/animals?type=dog&breeds=' + breedInputEl.value, {
  headers: {
    'Authorization': "Bearer " + apiKeytoken
  }
})
//   fetch(petfinderUrl, {
//   headers: {
//     'Authorization': `Bearer ${apiKey}`
//   }
// })
  .then(response => {
    console.log(response)
    if(response.status===401) {
      fetchaccesstoken()
    }
    response.json();
  } )
  
  .then(data => {
    const breeds = data.breeds;
    console.log(data.breeds);
 
  })
  .catch(error => {
    console.error('Error fetching breeds:', error);
  });
}

// Event listener for clicks on dog photos
function handleSearch(event){
 // event.preventDefault()
 //  if (event.target.classList.contains('dog-photo')) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const breedName = breedInputEl.value.trim().toLowerCase().replace(/\s+/g, '-');
    openPetfinderUrl(breedName);
//  }
}
 

breedTypeForm.addEventListener("submit", handleSearch);


var dogCardLink = function(){


var dogLink = `https://www.petfinder.com/dogs-breeds/${breedName}`;
}

// Fetch breeds from Petfinder API



// //  fetch access token in console

//   function fetchaccesstoken(){
//     fetch('https://api.petfinder.com/v2/oauth2/token', {
//   method: 'POST',
//   body: new URLSearchParams({
//     'grant_type': 'client_credentials',
//     'client_id': 'C18afXABNdRiZzvgesFAEXDrPQK7N4gWikCwCaZBbtfJ4lRAaI',
//     'client_secret': 'F9fMYv1CtxFmx7foLXmkuubzVTF6u11fOgSeQq6i'
//   })
// }).then(res=> res.json())
// .then(data => {console.log(data)
// apiKeytoken = data.access_token})

//   }


//   fetchaccesstoken()