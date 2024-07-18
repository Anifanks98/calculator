function btnclick(val) {
  const output = document.getElementById("output");
  output.value += val;
}

function screenclear() {
  document.getElementById("output").value = "";
}

function clearOne() {
  const output = document.getElementById("output");
  output.value = output.value.slice(0, -1);
}

function equalClick() {
  const output = document.getElementById("output");
  let text = output.value;
  //   if ((text = "")) alert("type number");
  try {
    let result = eval(text);
    output.value = result; // Update the input field with the result
    addToHistory(text, result); // Add the calculation to history
  } catch (e) {
    output.value = "Error";
  }
}

function addToHistory(expression, result) {
  const historyList = document.getElementById("history-list");
  const historyItem = document.createElement("li");
  historyItem.textContent = `${expression} = ${result}`;
  historyList.appendChild(historyItem);
}
