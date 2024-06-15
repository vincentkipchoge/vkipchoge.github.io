const add = document.getElementById("add");
const container = document.querySelector(".container");
add.addEventListener("click", () => {
  const tbodyRef = document
    .getElementById("mytable")
    .getElementsByTagName("tbody")[0];
  const newRow = tbodyRef.insertRow();
  const numbercol = newRow.insertCell();
  const inputcol = newRow.insertCell();
  const len = newRow.insertCell();

  const numberText = document.createTextNode(tbodyRef.rows.length - 1);
  numbercol.appendChild(numberText);
  const inp = document.createElement("input");
  inp.type = "text";
  inp.setAttribute("id", "inputs", length);
  inputcol.appendChild(inp);
});

document.getElementById("remove").addEventListener("click", () => {
  const tbodyRef = document.getElementById("mytable");
  if (inputs.length > 1) {
    tbodyRef.deleteRow(1);
  }
});

document.getElementById("sort").addEventListener("click", () => {
  const values = document.querySelectorAll("input");
  let arr = [];
  for (let i = 0; i < values.length; i++) {
    arr.push(values[i].value);
  }
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    values[i].value = arr[i];
  }
});