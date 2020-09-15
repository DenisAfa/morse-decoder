const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arrMorse = expr.split("");
    let arrMorseLetters = [];
    let arrDecryption = [];
    while(arrMorse.length > 0) {
        arrMorseLetters.push( arrMorse.splice(0, 10) );
    }
    for (let arrMorse of arrMorseLetters) {
        arrDecryption.push( decodeLetter(arrMorse) );
    }

    let decryption = arrDecryption.join("");
    return decryption;
}

function decodeLetter (arrCodeLet){
    let strCodeLet = arrCodeLet.join("");
    let letterArr = [];

    if (strCodeLet == "**********") {
        letterArr.push(" ");
    } else {
        for (let morseLet in MORSE_TABLE) {
            if (encode(MORSE_TABLE[morseLet]) == strCodeLet) {
                letterArr.push(MORSE_TABLE[morseLet]);
            }
        }
    }
    let letter = letterArr.join("");

    return letter;
}

function encode(lett) {
    let temp = [0,0,0,0,0,0,0,0,0,0];
    let dot = "10";
    let dash = "11";
    let codeMorse;
  
    for (let morseLet in MORSE_TABLE) {
        if (lett == MORSE_TABLE[morseLet]) {
           codeMorse = morseLet;
        }
    }
 
    for (value of codeMorse) {
        if (value == ".") {
            temp.shift();
            temp.shift();
            temp.push(dot);
        } else if (value == "-") {
            temp.shift();
            temp.shift();
            temp.push(dash);
        }
    }

    let encodeLet = temp.join("")
    return encodeLet;
}

module.exports = {
    decode
}