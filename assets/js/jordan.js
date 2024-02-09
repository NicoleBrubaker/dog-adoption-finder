var accesskey ="8KUYju2fMKa07wcc0bQTxubvo7B7yPKgcK8Aa4zD"

var formEl = document.querySelector("")
var inputEl = document.getElementById("")
var searchResults = document.querySelector("")

let inputdata = ""
let page 1;

async function searchImages(){
    inputdata = inputEl.ariaValueMax; 
    var url = 

    var response = await fetch(url)
    var data = await response.json()

    var results = data.results

    if (page === 1){
        searchResults.innerHTML = ""
    }
}
