console.log("JS OK!");

/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

let result = "";

for (let i = 1; i <= 100; i++) {
    result += `${i} `;
}

console.log("result a fine ciclo: ", result)