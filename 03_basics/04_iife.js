// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
}) ();

( function aurcode() {
    console.log(`DB CONNECTED TWO`)
})();

( () => {
    // unnamed IIFE
    console.log(`DB CONNECTED THREE`)
})();

( (name) => {
    // parameterised IIFE
    console.log(`DB CONNECTED FOUR ${name}`)
})('piyush')

