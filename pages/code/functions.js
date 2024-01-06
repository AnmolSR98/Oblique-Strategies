/*Look into getting the script to actually read the csv file I've created []*/

 /* For future reference, this is how you write an IIFE (function foo {//function logic})(); */
 /* let limits to local scope */



// this entire function is working as intended, save for the final line of actual logic [FIXED]
(function pickBackground(){

    let firstpath = '../backgrounds/';
    let secondpath = '.jpg';

    // will generate numbers from 1 to 14, tested this very informally
    let number = Math.ceil(Math.random()*14)

    if (number < 10) {
        var address = '0'; 
        address = address.concat(number.toString());
    }

    else {

        var address = number.toString();
    }

    // can use either .concat(), or simples +'s for strings in js
    let path = firstpath.concat(address, secondpath);
    // could have also used '${path}' 
    let url = "url('" + path + "')";

    document.body.style.backgroundImage = url; 

})();