// Ausgabe Objekt
const cat = {
    name : "Mieze",
    breed: "Hauskatze",
    age: 13,
    showCat: function() {
        document.querySelector('#objectOutput').innerHTML = 
        `Name: ${this.name} gehört zur Rasse ${this.breed}. <br>
        Alter: ${this.age}<br></hr>`;
        console.log(cat);

        //Alternativ
        /* document.querySelector("#objectOutput").innerHTML = 
        "Name:" + this.name + "gehört zur Rasse" + this.breed +"<br>" +
        "Alter:" + this.age + "<br><hr>";
        */
    }
}
document.querySelector("#catObject").addEventListener("click", function(){
    cat.showCat();
});


// mit Klasse
class catClass {
    constructor (name, breed, age, birth, button) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.birth = birth;
        this.button = button;

    }
    showCat() {
        show(this);
    }

}
document.querySelector("#newCatClass").addEventListener("click", function(){
    let returnValue = validateForm();
    if (returnValue != false) {
        allCats.push(new catClass (
            returnValue[0], returnValue[1], returnValue[2], returnValue[3], "Object via Class"
        ))
    }
    showAllCats(); 
})

// Mit Konstruktor
function catConstructor(name, breed, age, birth, button) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.birth = birth; 
    this.button = button;
    this.showCat = function() { show(this); }

}
document.querySelector("'newCatConstructor").addEventListener("click", function(){
    let returnValue = validateForm();
    if (returnValue != false) {
        allCats[allCats.length] = new catConstructor(
            returnValue[0], returnValue[1], returnValue[2], returnValue[3], "Constructor Object"
        );
        showAllCats();
    }
});


//allgemeine Klassen
let allCats = [];
const months = [
    "Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
   
];

const weeks = [
    "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
];


function validateForm() {
    let input = [];
    input[0] = document.querySelector("#name").value;
    input[1] = document.querySelector("#breed").value;
    input[2] = document.querySelector("#age").value;
    input[3] = document.querySelector("#birth").value;
    //Todo if input empty
    return input
}






function show(value) {
    document.querySelector("#Output").innerHTML += 
    `<p>Name: ${value.name}<br>
    Geboren Monat: ${months[value.birth.getMonth()]}
    </p>`;
    // Todo restliche ausgabe anschauen!


}

function showAllCats(){
    document.querySelector("#output").innerHTML = "";
    allCats.sort((minAge, maxAge) => minAge.age - maxAge.age);
    // Todo get younges and oldest cat
    // Show Cats
    for(const thisCat of allCats){
        thisCat.showCat();
    }


}

function showAge(allCats) {

}
