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

const ParallelogramBtnCalulate = document
  .getElementById("Parallelogram-btn")
  .addEventListener("click", function () {
    const firstinputValue = getInputValue("p-f-input");
    const secondInputValue = getInputValue("p-s-input");
    const areaCalculate = firstinputValue * secondInputValue;
    const setArea = setAreaElement("set-Parallelogram-area", areaCalculate);
  });
