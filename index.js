//*****************Ici je crée le live des inputs du formulaire sur la carte ************************** */

let numCard = document.getElementById ('num_card');
let numCard2 = document.getElementById('num_card2');
let date_Expe = document.getElementById('expe1');
let crypt = document.getElementById('expe')

numCard.onkeyup = numCard.onkeypress = function(){
    document.getElementById('card_number').innerHTML = this.value;
    if (this.value.length === 4|| this.value.length === 9||this.value.length === 14) {
        this.value = this.value += ' ';
    }
}
numCard2.onkeyup = numCard2.onkeypress = function(){
    document.getElementById('card_name').innerHTML = this.value;
}
date_Expe.onkeyup = date_Expe.onkeypress = function(){
    document.getElementById('card_expire').innerHTML = this.value;
    if (this.value.length === 2) {
        this.value = this.value += '/';
    }
}
crypt.onkeyup = crypt.onkeypress = function(){
    document.getElementById('der_number').innerHTML = this.value;
}
//****************Je crée le flip de la carte en cliquant dans le input Cryptogramme*********** */
let number = document.getElementById("flip-card-inner")

crypt.addEventListener("focus", () => {
    number.style.transform = "rotateY(180deg)";
});
crypt.addEventListener("blur", () => {
    number.style.transform = "rotateY(0deg)";
});
