window.onload = init() 

function init() {
    let httpRequest
    
    function initialRequest() {
        httpRequest = new XMLHttpRequest()

        if (!httpRequest) {
            alert("Giving up! Cannot create an XMLHTTP instance")
        }
         
        httpRequest.onreadystatechange = processContents
        httpRequest.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random")
        httpRequest.setRequestHeader("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
        httpRequest.setRequestHeader("X-RapidAPI-Key", "efcdc68c39msha464a459921fc2bp1e6573jsnf677d17e2212")
        httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        httpRequest.send() 
    }

    function processContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = httpRequest.responseText

                if (data) {
                    data = JSON.parse(data)
                    console.log(data)
                    if (data.value) createCards(data.value)
                }
            } else {
                alert("There was a problem with request")
            }
        }
    }

    function createCards(items) {
        let cardDeck = document.querySelector(".container > .card-deck")
        let cards = ``
        
        for (let item in items) {
            if (item.hasOwnProperty(item)) {
                cards += `<div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">Horrible Chuck Jokes</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">${items}</h1>
                                </div>
                            </div>`
            }
        }

        cardDeck.innerHTML = cards
    }

    initialRequest()
    
}
setInterval(init, 5000);

