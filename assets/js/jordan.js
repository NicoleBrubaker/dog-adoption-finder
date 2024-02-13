var accesskey ="8KUYju2fMKa07wcc0bQTxubvo7B7yPKgcK8Aa4zD"
var apiurl = "https://api.api-ninjas.com/v1/dogs?name=" + inputEl.value; 


var formEl = document.querySelector("breedTypeForm")
 var inputEl = document.getElementById("breedInput")

formEl.addEventListener('submit',function(){searchImages()})

let inputdata = ""
 let page = 1;

async function searchImages(){
   // inputdata = inputEl.ariaValueMax; 
  
    const response = await fetch(apiurl, {
		method: 'GET',
		headers: {
			
			'X-Api-Key': accesskey,
		}
	})
    var data = await response.json();

    var results = data.results
    console.log(data)

//    if (page === 1){
//          searchResults.innerHTML = "
 //   }
}


searchImages();
