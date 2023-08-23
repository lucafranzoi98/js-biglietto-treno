const distance = Number(prompt("Inserisci il numero di chilometri:"));

const age = Number(prompt("Inserisci la tua età:"));

const basePrice = distance * 0.21;

let discount;

if (age < 18){
   discount = basePrice * 0.8;
} else if (age > 65){
   discount = basePrice * 0.6;
} else{
   discount = basePrice;
}

let discountRounded = discount.toFixed(2);

document.getElementById("price").innerHTML = discountRounded;