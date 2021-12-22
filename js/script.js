console.log("JS OK!");

/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/



//stampo i numeri da 1 a 10

for (let i = 1; i <= 100; i++) {
    let result = '';
    //condizioni 
    if (i % 3 === 0) result += 'Fizz';

    else if (i % 5 === 0) result += 'Buzz';

    console.log("Risultato: ", result || i);
}