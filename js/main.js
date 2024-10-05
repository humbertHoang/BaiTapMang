"use strict";
let currArray = [];
const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value;
const setValue = (id, value) => {
  getElement(id).value = value;
  getElement(id).innerHTML = value;
};

const formatArray = (arr) => {
  const formatArray = arr.join(" | ");
  setValue("currArray", formatArray);
};
const addToArray = () => {
  const value = getValue("arrvalueInput");
  if (value) {
    currArray.push(Number(value));
    formatArray(currArray);
    setValue("arrvalueInput", "");
  } else {
    alert("Vui lòng nhập số");
  }
};
const deleteFromArray = () => {
  if (currArray.length > 0) {
    currArray.pop();
    console.log(currArray);
    formatArray(currArray);
  } else {
    alert("Mảng rỗng");
  }
};

getElement("arrvalueInput").onkeydown = (event) => {
  if (event.key === "Enter") {
    addToArray();
    event.preventDefault();
  }
};

//Bài 1
getElement("sumarrBtn").onclick = () => {
  let sum = 0;
  for (let i = 0; i < currArray.length; i++) {
    if (currArray[i] > 0) {
      sum += currArray[i];
    }
  }
  setValue("sumArray", sum);
};

getElement("addBtn").onclick = addToArray;
getElement("delBtn").onclick = deleteFromArray;
