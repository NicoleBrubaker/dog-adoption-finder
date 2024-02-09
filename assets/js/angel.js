const apiKey = 'C18afXABNdRiZzvgesFAEXDrPQK7N4gWikCwCaZBbtfJ4lRAaI';
 const apiUrl = `https://api.petfinder.com/v2/types/dog/breeds`;

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