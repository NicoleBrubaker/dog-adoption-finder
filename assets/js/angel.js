

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJDMThhZlhBQk5kUmlaenZnZXNGQUVYRHJQUUs3TjRnV2lrQ3dDYVpCYnRmSjRsUkFhSSIsImp0aSI6ImJhOWNmMTUzYWU4Y2Q0ZTczMDY5OTNhODllZWQ3ZDU5YzcxMmNkNDhhOTExNzYzYmJmZmJlY2VlMGJhZWRmY2UyNjRiNGZiYWM0NmY1MjI5IiwiaWF0IjoxNzA3MzY2NzUyLCJuYmYiOjE3MDczNjY3NTIsImV4cCI6MTcwNzM3MDM1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.agTStiJ92NqtWUrQKKMTkDVj1_1z-MYETmzrVDGtDozroA_gQVxdSi-qHsjgx3K6Z0G9PcGsEDeoITg8sUwpv3fTQgM66rsS29m06lZavrgBQFx_oGAAkS2CZmd4d-H1sfDnNrjSLleEkL4klx0gfp-D-rav1LDcZWGMitDVEUK6xDzsIZ9j8V3qdlWIy5eftVGYUknSKymokuTd6SnTI4661HyxBIB8jRAnIDWfm3S-BpMnVgmrR2i8Ol8o2hcwNIdMhnqyjNs9qnWoFzzmdsc1-nmTfzUCRPJStcITblkaNR6BTfTWGr9yt73caih1Pp_argpXXBfeP606eUOoGQ';
const apiUrl = 'https://api.petfinder.com/v2/types/dog/breeds';

   fetch(apiUrl, {
     headers: {
       'Authorization': `Bearer ${apiKey}`
     }
   })
   .then(response => response.json())
   .then(data => {
     const breeds = data.breeds;
     const breedList = document.getElementById('breedList');
     const searchInput = document.getElementById('breedInput');
   
     function displayBreeds(filteredBreeds) {
       breedList.innerHTML = ''; 
       
       if (filteredBreeds.length === 0) {
         breedList.innerHTML = 'No breeds found.';
       } else {
         filteredBreeds.forEach(breed => {
           const li = document.createElement('li');
           li.textContent = breed.name;
           breedList.appendChild(li);
         });
          searchInput.addEventListener('input', function() {
       const searchTerm = searchInput.value.toLowerCase();
       const filteredBreeds = breeds.filter(breed => breed.name.toLowerCase().includes(searchTerm));
       displayBreeds(filteredBreeds);
     });
       }
     }
   
    

     // Initial display of all breeds
     displayBreeds(breeds);
   })
   .catch(error => {
     console.error('Error fetching breeds:', error);
   });