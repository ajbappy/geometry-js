const getInputValue = function (inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  if (isNaN(inputValue)) {
    window.alert("Please provide a valid Number");
    inputValue = 0;
  }
  return inputValue;
};

const setAreaElement = function (elementId, newElement) {
  const area = document.getElementById(elementId);
  area.innerText = newElement;
};

// traingle button
const calculateButton = document
  .getElementById("Triangle-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("first-input");
    const secondInputValue = getInputValue("second-input");
    const areaCalculate = 0.5 * firstinputValue * secondInputValue;
    const setArea = setAreaElement("set-area", areaCalculate);
  });

// Rectangle btn

const ractengleBtnCalulate = document
  .getElementById("Rectangle-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("r-f-input");
    const secondInputValue = getInputValue("r-s-input");
    const areaCalculate = firstinputValue * secondInputValue;
    const setArea = setAreaElement("set-rectangle-area", areaCalculate);
  });

// "Parallelogram-btn

const parallelogramBtnCalulate = document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("p-f-input");
    const secondInputValue = getInputValue("p-s-input");
    const areaCalculate = firstinputValue * secondInputValue;
    const setArea = setAreaElement("set-Parallelogram-area", areaCalculate);
  });

// "Parallelogram-btn

const rhombuBtnCalulate = document
  .getElementById("Rhombus-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("Rhombus-f-input");
    const secondInputValue = getInputValue("Rhombus-s-input");
    const areaCalculate = 0.5 * firstinputValue * secondInputValue;
    const setArea = setAreaElement("set-Rhombus-area", areaCalculate);
  });
// Pentagon btn

const pentagonBtnCalulate = document
  .getElementById("Pentagon-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("Pentagon-f-input");
    const secondInputValue = getInputValue("Pentagon-s-input");
    const areaCalculate = 0.5 * firstinputValue * secondInputValue;
    const setArea = setAreaElement("set-Pentagon-area", areaCalculate);
  });

// Pentagon btn

const ellipseBtnCalulate = document
  .getElementById("ellipse-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("ellipse-f-input");
    const secondInputValue = getInputValue("ellipse-s-input");
    const areaCalculate = 3.1416 * firstinputValue * secondInputValue;
    const setArea = setAreaElement(
      "set-ellipse-area",
      areaCalculate.toFixed(2)
    );
  });
