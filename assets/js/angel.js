const apiKeytoken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJDMThhZlhBQk5kUmlaenZnZXNGQUVYRHJQUUs3TjRnV2lrQ3dDYVpCYnRmSjRsUkFhSSIsImp0aSI6IjVlZjlhZTE4MWRlMDM3ZTFmMGRmY2E2OWM1ZWM5YmFlZTI3MDgwNzU5OGM4MzU0NzZlODk5NTI2MWRiMzIzODcyZjE0MTE0ZDU5YmZmODdiIiwiaWF0IjoxNzA3OTY3NzU3LCJuYmYiOjE3MDc5Njc3NTcsImV4cCI6MTcwNzk3MTM1Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.So9DV7-0lHJyomcw1_3cWDuvk8NBtXYnBjwRWuFb4-HvGsSU9Dv6hEgOK7uID2Kzt3tHnOMqyHL37JGV2H1n2CsI5jIqPCveNKp9J1FZkNXs3J4b03PnoPHg7RCebQtDhdUvdsJJfBJoYHspwqOF29kUxKyWZJg9Z31mNlKGn3C85e9RGELUXBQGbiGygtjGCbYpwK4S8e4jw23Kk-H6AB057Gc1CVn3LnzvB93DTyUlwuhpi0tiPhAWxjudORKe6nWSmxTpTBRB84dXOHUWqvcosgWE86rlSMpp4zN_hAMEkcNi21bU8ErCIGcB2NKVYHFRFQt1H-IbimX562Wl3A';
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