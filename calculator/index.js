// Calculator

let currentDisplay = "0"; // The current display content
let resultDisplay = false; // Flag to track whether the result is displayed

function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay && value != "+" && value != "-" && value != "*" && value != "/" ) {
      // If the current display is "0" or the result is already displayed, replace it with the new value,
      // If operator, do not

      currentDisplay = value;
    } else {
      // Otherwise, concatenate the new value to the current display
      currentDisplay += value;
    }
  
    // Reset the result display flag to false, as the user entered a new value
    resultDisplay = false;
  
    // Update the calculator display to show the new content
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
  }


function calculateResult() {
    try {
      // Use the eval() function to evaluate the mathematical expression
      result = eval(currentDisplay);
  
      // Append the result to the current display, preceded by an equal sign (=)
      currentDisplay = result.toString();
  
      // Update the calculator display with the result
      updateDisplay();
    } catch (error) {
      // If there is an error in the expression (e.g., dividing by zero), display an error message
      currentDisplay = "\nError";
      updateDisplay();

    }
  
    // Set the result display flag to true to indicate that the result is displayed
    resultDisplay = true;
}

function clearLastElement() {
    // Remove the last character from the current display using the slice() method, if showind number is not a result

    if (resultDisplay === false && currentDisplay != result)
      currentDisplay = currentDisplay.slice(0, -1);
  
    // If the current display becomes empty, set it back to "0"
    if (currentDisplay === "") {
      currentDisplay = "0";
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0"; // Reset the current display to "0"
    resultDisplay = false; // Reset the result display flag to false
    updateDisplay();
}