// Ceaser Cipher
// Encryption
document.addEventListener("DOMContentLoaded", function () {
    const encryptButton = document.getElementById("encryptButton");
    encryptButton.addEventListener("click", encrypt);
  
    function caesarCipherEncrypt(plainText, key) {
      let encryptedText = "";
  
      for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
  
        if (char.match(/[a-zA-Z]/)) {
          let isUpperCase = char === char.toUpperCase();
          let offset = isUpperCase ? 65 : 97;
          let encryptedCharCode = (char.charCodeAt(0) - offset + key) % 26 + offset;
  
          encryptedText += String.fromCharCode(encryptedCharCode);
        } else {
          encryptedText += char;
        }
      }
  
      return encryptedText;
    }
  
    function encrypt() {
      const plainText = document.getElementById("plainText").value;
      const key = parseInt(document.getElementById("key").value);
  
      const encryptedText = caesarCipherEncrypt(plainText, key);
      document.getElementById("encryptedText").textContent = "Encrypted text: " + encryptedText;
    }
  });

  // Decryption
  document.addEventListener("DOMContentLoaded", function () {
    const decryptButton = document.getElementById("decryptButton");
    decryptButton.addEventListener("click", decrypt);
  
    function caesarCipherDecrypt(cipherText, key) {
      let decryptedText = "";
  
      for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText[i];
  
        if (char.match(/[a-zA-Z]/)) {
          let isUpperCase = char === char.toUpperCase();
          let offset = isUpperCase ? 65 : 97;
          let decryptedCharCode = (char.charCodeAt(0) - offset - key + 26) % 26 + offset;
  
          decryptedText += String.fromCharCode(decryptedCharCode);
        } else {
          decryptedText += char;
        }
      }
  
      return decryptedText;
    }

    function decrypt() {
      const cipherText = document.getElementById("cipherText").value;
      const key = parseInt(document.getElementById("cipherKey").value);
  
      const decryptedText = caesarCipherDecrypt(cipherText, key);
      document.getElementById("decryptText").textContent = "Decrypted text: " + decryptedText;
    }
  });
  

  
// Monoalphabetic cipher
// Encryption
document.addEventListener("DOMContentLoaded", function () {
    const encryptButton1 = document.getElementById("encryptButton1");
    encryptButton1.addEventListener("click", encrypt);
  
    const substitutionKey = {
      a: 'q', b: 'w', c: 'e', d: 'r', e: 't', f: 'y', g: 'u', h: 'i', i: 'o', j: 'p', k: 'a', l: 's',
      m: 'd', n: 'f', o: 'g', p: 'h', q: 'j', r: 'k', s: 'l', t: 'z', u: 'x', v: 'c', w: 'v', x: 'b', y: 'n', z: 'm'
    };
  
    function monoalphabeticCipherEncrypt(plainText) {
      let encryptedText = "";
  
      for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i].toLowerCase();
  
        if (substitutionKey[char]) {
          encryptedText += substitutionKey[char];
        } else {
          encryptedText += char;
        }
      }
  
      return encryptedText;
    }
  
    function encrypt() {
      const plainText = document.getElementById("plainText1").value;
  
      const encryptedText = monoalphabeticCipherEncrypt(plainText);
      document.getElementById("encryptedText1").textContent = "Encrypted text: " + encryptedText;
    }
  });

  //Decryption
  document.addEventListener("DOMContentLoaded", function () {

    const decryptButton1 = document.getElementById("decryptButton1");
    decryptButton1.addEventListener("click", decrypt);
  
    const substitutionKey = {
      a: 'q', b: 'w', c: 'e', d: 'r', e: 't', f: 'y', g: 'u', h: 'i', i: 'o', j: 'p', k: 'a', l: 's',
      m: 'd', n: 'f', o: 'g', p: 'h', q: 'j', r: 'k', s: 'l', t: 'z', u: 'x', v: 'c', w: 'v', x: 'b', y: 'n', z: 'm'
    };
  
    function monoalphabeticCipherDecrypt(cipherText) {
      let decryptedText = "";
  
      for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText[i].toLowerCase();
  
        if (Object.values(substitutionKey).includes(char)) {
          for (const key in substitutionKey) {
            if (substitutionKey[key] === char) {
              decryptedText += key;
              break;
            }
          }
        } else {
          decryptedText += char;
        }
      }
  
      return decryptedText;
    }
  
    function decrypt() {
      const cipherText = document.getElementById("cipherText1").value;
      const decryptedText = monoalphabeticCipherDecrypt(cipherText);
      document.getElementById("decryptedText1").textContent = "Decrypted text: " + decryptedText;
    }
  });
  
 //Rail Fence Cipher
 //Encryption
document.addEventListener("DOMContentLoaded", function () {
    const encryptButton3 = document.getElementById("encryptButton3");
    encryptButton3.addEventListener("click", encrypt);
  
    function railFenceCipherEncrypt(plainText, rails) {
      let encryptedText = "";
      const matrix = [];
  
      for (let i = 0; i < rails; i++) {
        matrix.push(new Array(plainText.length).fill(""));
      }
  
      let row = 0;
      let direction = 1;
  
      for (let i = 0; i < plainText.length; i++) {
        matrix[row][i] = plainText[i];
  
        if (row === 0) direction = 1;
        if (row === rails - 1) direction = -1;
  
        row += direction;
      }
  
      for (let i = 0; i < rails; i++) {
        encryptedText += matrix[i].join("");
      }
  
      return encryptedText;
    }
  
    function encrypt() {
      const plainText = document.getElementById("plainText3").value;
      const rails = parseInt(document.getElementById("key3").value);
  
      const encryptedText = railFenceCipherEncrypt(plainText, rails);
      document.getElementById("encryptedText3").textContent = "Encrypted text: " + encryptedText;
    }
  });
  
  //Decryption

  document.addEventListener("DOMContentLoaded", function () {
    const decryptButton = document.getElementById("decryptButton2");
    decryptButton.addEventListener("click", decrypt);
  
    function railFenceCipherDecrypt(cipherText, rails) {
      let decryptedText = "";
      const matrix = new Array(rails).fill().map(() => new Array(cipherText.length).fill(""));
    
      let row = 0;
      let direction = 1;
    
      for (let i = 0; i < cipherText.length; i++) {
        matrix[row][i] = "*"; // Mark positions with '*'
    
        if (row === 0) direction = 1;
        if (row === rails - 1) direction = -1;
    
        row += direction;
      }
    
      let index = 0;
      for (let i = 0; i < rails; i++) {
        for (let j = 0; j < cipherText.length; j++) {
          if (matrix[i][j] === "*") {
            matrix[i][j] = cipherText[index];
            index++;
          }
        }
      }
    
      row = 0;
      direction = 1;
    
      for (let i = 0; i < cipherText.length; i++) {
        decryptedText += matrix[row][i];
    
        if (row === 0) direction = 1;
        if (row === rails - 1) direction = -1;
    
        row += direction;
      }
    
      return decryptedText;
    }
      
    function decrypt() {
      const cipherText = document.getElementById("cipherText2").value;
      const rails = parseInt(document.getElementById("rails").value);
  
      const decryptedText = railFenceCipherDecrypt(cipherText, rails);
      document.getElementById("decryptedText").textContent = "Decrypted text: " + decryptedText;
    }
  });
  