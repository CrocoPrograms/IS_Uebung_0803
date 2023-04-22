function displayAllCatFacts() {
    const catsContainer = document.querySelector('#cats');
    const factUrl = 'https://cat-fact.herokuapp.com/facts';

    fetch(factUrl)
        .then(response => response.json())
        .then(data => {
            const factElements = data.map(fact => {
                const newDiv = document.createElement('section');
                const factElement = document.createElement('p');
                factElement.innerText = fact.text;
                //console.log(newDiv, factElement, fact);//
                newDiv.appendChild(factElement);
                return newDiv;
            });

            console.log(factElements)
            factElements.forEach(arrayElement => catsContainer.appendChild(arrayElement));

        }) .catch(error => console.error(error));


}

// Funktionsaufruf, um die Fakten anzuzeigen
displayAllCatFacts();



// Firefox: https://cat-fact.herokuapp.com/facts