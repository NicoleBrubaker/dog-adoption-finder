const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJDMThhZlhBQk5kUmlaenZnZXNGQUVYRHJQUUs3TjRnV2lrQ3dDYVpCYnRmSjRsUkFhSSIsImp0aSI6ImI3ZjA4MGYwZjgxMjNkYWQ5YmE4M2QyMGFjOTM2YjA2YmNkOGFlYWExNjQ1ZGFiY2ExMWIxOTA5NDIxMGNkMjMwMjFjN2I0NDljNTEwMTU5IiwiaWF0IjoxNzA3OTU5NDAxLCJuYmYiOjE3MDc5NTk0MDEsImV4cCI6MTcwNzk2MzAwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.CpPb5fyAhIB35S5ARcJ9UcH8XnYxD8gaUAp7aNZgQ-14bzEAdpbZRUdHZurQCD1smEcPPFBFzKBHNMS2hd7hwAp7eWqJ6eGS06frqkuJVr1gK6wVtJCVVYUYs1W4dokNq9O03XbGtLFQi5iHwu1RZlvu0tsYyYRQy5ZS7-jVRcQGAB2TWwEmML4YCEnlvMvj00o_Oe5Uvq6HHHTvzSitAn2w-orQkctSL7QphVyXMDh2iBpALsAja5S0DkWKj2z-p6eUun37IG2niksPlTfP1eqUm2cfIRpW197gHO1Xm_vdNf9Jg61-0w3LBMG7c4NeAq8paM21evbNwUFWk8ROjQ';
const apiUrl = 'https://api.petfinder.com/v2/types/dog/breeds';
const searchBtn = document.getElementById('searchpets');
const breedInputEl = document.getElementById('breedInput');

// Function to open Petfinder URL for a specific breed
function openPetfinderUrl(breedName) {
  const petfinderUrl = `https://www.petfinder.com/dog-breeds/${breedName}`;
  // console.log('Opening Petfinder URL:', petfinderUrl);
  // window.open(petfinderUrl, '_blank');
  
  fetch('https://api.petfinder.com/v2/animals?type=dog', {
  headers: {
    'Authorization': "Bearer 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJDMThhZlhBQk5kUmlaenZnZXNGQUVYRHJQUUs3TjRnV2lrQ3dDYVpCYnRmSjRsUkFhSSIsImp0aSI6IjZlNzk2ZDY5OGI0OWM4ZmFkMzEzZjcxZDIwNzBiYTVjOGIxOWM1ZjUxM2Q3NTcwY2QxMjE2NDUzN2I0OGI0NGQwZTkyZmZhMTNiOGNiNDQxIiwiaWF0IjoxNzA3OTM2MTk5LCJuYmYiOjE3MDc5MzYxOTksImV4cCI6MTcwNzkzOTc5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.ZTWP04CktJ9kXPvfvJMxIp7PGCmqGoUAsuje94P6Cru4ngc_ntNrX6DCpJ3p1wexrGNODwaMW89VPenlCl_kus4kDjHlD8_jy5l6WblzDkJ1SXbqT0YQLtYdfAanH-ZCDHX6__XflT3wFFuJykzCSw2KwANlAX3UUO-XTuo2rePtc1k7ZTgBqESrNW2Lpbe9hi52xO0MkhL7aMyHiKGWLX-FlXzEfxnZTVv5lKiyJSSiisesenJ-gFEwd_zyjNbFTmontVLCfZrdZXGNuUXz42N6k3jGqMHJz4S6vNjyM-yv-2Yd7ybyFVJ4xOvFnQ-7aGfHuZFTU4u8rnZ-2P6OOg';\n"
  }
})
//   fetch(petfinderUrl, {
//   headers: {
//     'Authorization': `Bearer ${apiKey}`
//   }
// })
  .then(response => response.json())
  .then(data => {
    const breeds = data.breeds;
    console.log(data);
    // You can do something with the breeds here if needed
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

// Fetch breeds from Petfinder API



  // fetch access token in console

//   function fetchaccesstoken(){
//     fetch('https://api.petfinder.com/v2/oauth2/token', {
//   method: 'POST',
//   body: new URLSearchParams({
//     'grant_type': 'client_credentials',
//     'client_id': 'C18afXABNdRiZzvgesFAEXDrPQK7N4gWikCwCaZBbtfJ4lRAaI',
//     'client_secret': 'F9fMYv1CtxFmx7foLXmkuubzVTF6u11fOgSeQq6i'
//   })
// }).then(res=> res.json())
// .then(data => {console.log(data)})
//   }

//   fetchaccesstoken()