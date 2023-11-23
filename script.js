// Henter fra Html til Javascript

const cat = document.querySelector("#cat");
const corgiPuppy = document.querySelector("#corgiPuppy");
const fox = document.querySelector("#fox");
const lion = document.querySelector("#lion");

// Setter opp let is true

let task1ChangeSzizeImg = true;
let task2ChangeSzizeImg = true;

// Trykker på et bilde få å blir stor, trykker igjen blir det mindre

cat.addEventListener("click", function() {
    if (task1ChangeSzizeImg == true){
        cat.classList = "bigSize";
        task1ChangeSzizeImg = false;
    }else{
        cat.classList = "smallSize";
        task1ChangeSzizeImg = true;
    }
})

// Trykker på et bilde blir flere bilder stor, trykker igjen blir de mindre

corgiPuppy.addEventListener("click", function() {
    if (task2ChangeSzizeImg == true){
       corgiPuppy.classList = "bigSize";
       fox.classList = "diffrentSize";
       lion.classList = "bigSize";
       task2ChangeSzizeImg = false;
    }else{
        corgiPuppy.classList = "smallSize";
        fox.classList = "smallSize";
        lion.classList = "smallSize";
       task2ChangeSzizeImg = true;
    }
   
})

