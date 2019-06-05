window.onload = init();

function init() {
  function chuckInit() {
    this.httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert("Giving up! Cannot create an XMLHTTP instance");
    }

    httpRequest.onreadystatechange = processContents;
   

    httpRequest.open(
      "GET",
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random"
    );
    httpRequest.setRequestHeader(
      "X-RapidAPI-Host",
      "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"
    );
    httpRequest.setRequestHeader(
      "X-RapidAPI-Key",
      "efcdc68c39msha464a459921fc2bp1e6573jsnf677d17e2212"
    );
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    httpRequest.send();
  }

  function processContents() {
      console.log(`readystate: `, httpRequest.readyState );
      
      
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let data = httpRequest.responseText;
      
        console.log(`Before parsed data type: `, typeof data, data);
        
        if (data) {
          data = JSON.parse(data);
          console.log(`After Parsed data type`, typeof data, data);
 
          
          if (data) createCards(data.value);
        }
      } else {
        alert("There was a problem with request");
      }
    }
  }

  function createCards(items) {
      console.log(items)
    let cardDeck = document.querySelector(".container > .card-deck");
    let cards = ``;

    for (let item in items) {
      if (item.hasOwnProperty(item)) {
        console.log(items);
        cards += `<div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">Horrible Chuck Jokes</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">${items}</h1>
                                </div>
                            </div>`;
      }
    }

    cardDeck.innerHTML = cards;
  }

  chuckInit();
}
setInterval(init, 3000);
