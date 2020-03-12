class VigenereCipheringMachine {
    constructor(reverse = true) {
        this.reverseBool = reverse;
        this.alphabet = String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
    }

    encrypt(message, keyword) {
        if (!message || !keyword) {
            throw new Error('Incorrect parameters');
        }

        let arrWords = this.getFullKeyword(message, keyword);

        return arrWords[0].map((el, indx) => {
            if (el.charCodeAt() > 64 && el.charCodeAt() < 91) {
                return this.alphabet[((this.alphabet.indexOf(el) + this.alphabet.indexOf(arrWords[1][indx])) % 26)];
            } else {
                return el;
            }
        }).join('');
    }

    decrypt(message, keyword) {
        if (!message || !keyword) {
            throw new Error('Incorrect parameters');
        }

        let arrWords = this.getFullKeyword(message, keyword);

        return arrWords[0].map((el, indx) => {
            if (el.charCodeAt() > 64 && el.charCodeAt() < 91) {
                return this.alphabet[
                    (this.alphabet.indexOf(el) - this.alphabet.indexOf(arrWords[1][indx])) >= 0 ?
                    (this.alphabet.indexOf(el) - this.alphabet.indexOf(arrWords[1][indx])) :
                    (this.alphabet.indexOf(el) + 26 - this.alphabet.indexOf(arrWords[1][indx]))
                ];
            } else {
                return el;
            }
        }).join('');
    }

    getFullKeyword(msg, kword) {
        if (!this.reverseBool) {
            msg = msg.split('').reverse().join('');
        }

        let ASCmsgSymb = [],
            fullKeyword = [],
            lengthKw = 0;

        msg = msg.toUpperCase();
        kword = kword.toUpperCase();

        for (let i = 0; i < msg.length; i++) {
            ASCmsgSymb.push(msg[i]);

            if (lengthKw == kword.length) {
                lengthKw = 0;
            }

            if (msg[i].charCodeAt() > 64 && msg[i].charCodeAt() < 91) {
                fullKeyword.push(kword[lengthKw]);
                lengthKw++;
            } else {
                fullKeyword.push(msg[i]);
            }
        }

        return [ASCmsgSymb, fullKeyword];
    }
}

module.exports = VigenereCipheringMachine;
