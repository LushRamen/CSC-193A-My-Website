/*
 * Starter file 
 */
(function() {
  "use strict";
  console.log("Window loaded");
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */

  /**
   * @function init
   * This function is called when the window's load event fires,
   * indicating that the DOM is fully constructed. It sets up event handlers
   * for UI elements on the page, such as the "Encrypt-It!" button.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    //Set up event listender for the "Reset" button
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * @function handleEncrypt
   * This function is triggered when the "Encrypt-It" button is clicked.
   * It retrieves the input text, encrpyts it using a shift cipher, and outputs
   * the encrypted text to the "result" paragraph.
   */
  /**
   

   * @function handleClick
   * This function is triggered when the "Encrypt-It!" button is clicked.
   * It logs the message "Button clicked!" to the console.
   */

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleEncrypt(){
    const inputText = document.getElementById("input-text").value;
    const encryptedText =shiftCipher(inputText);
    document.getElementById("result").textContent = encryptedText;
    console.log("Text encrypted:", encryptedText);
  }

  /**
   * @function shiftCipher
   * This function takes a string and returns a new string where each letter
   * is shifted by one position in the alphabet.
   * Non-alphabetic characters are not changed.
   * @param (string) text - The input text to be encrypted.
   * @returns (string) - The encrypted text.
   */

  function shiftCipher(text){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < text.length; i++){
      let char = text[i];
      let lowerChar = char.toLowerCase();
      let index = alphabet.indexOf(lowerChar);

      if(index === -1){
        //Non-alphabetic characters remain unchanged.
        result += char;
      } else {
        //Shift the character
        let newIndex = (index + 1) % alphabet.length;
        let newChar = alphabet[newIndex];

        //Preserve original case
        if (char === char.toUpperCase()) {
          result += newChar.toUpperCase();
        } else {
          result += newChar;
        }
      }
    }
    return result;
  }
  function handleClick(){
    console.log("Button clicked!");
  }

  /**
   * @function handleReset
   * This function is triggered when the "Reset" button is clicked.
   * It clears the content of the text area with the ID "input-text."
   */
  function handleReset(){
   // const inputText = document.getElementById("input-text");
   // inputText.value = ""; //Clear the text area
   document.getElementById("input-text").value = ""; //Clear the textarea
   document.getElementById("result").textContent = ""; //Clear the result
    console.log("Reset button clicked, input text cleared.");
  }

})();
