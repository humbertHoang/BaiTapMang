"use strict";
let currArray = [];
const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value;
const setValue = (id, value) => {
  getElement(id).value = value;
  getElement(id).innerHTML = value;
};

const formatArray = (arr, id = "currArray") => {
  const formatArray = arr.join(" | ");
  setValue(id, formatArray);
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
//Bài 2
getElement("countposnumBtn").onclick = () => {
  let count = 0;
  for (let i = 0; i < currArray.length; i++) {
    if (currArray[i] > 0) {
      count++;
    }
  }
  setValue("countposnumArray", count);
};
//Bài 3
getElement("findminBtn").onclick = () => {
  let min = currArray[0];
  for (let i = 0; i < currArray.length; i++) {
    if (currArray[i] < min) {
      min = currArray[i];
    }
  }
  setValue("findminArray", min);
};
//Bài 4
getElement("findposminBtn").onclick = () => {
  let min = currArray[0];
  for (let i = 0; i < currArray.length; i++) {
    if (currArray[i] < min && currArray[i] > 0) {
      min = currArray[i];
    }
  }
  setValue("findposminArray", min);
};
//Bài 5
getElement("evennumBtn").onclick = () => {
  let evenArray = null;
  for (let i = 0; i < currArray.length; i++) {
    if (currArray[i] % 2 === 0) {
      evenArray = currArray[i];
    }
  }
  if (evenArray === null) {
    setValue("evennumArray", "-1");
  } else {
    setValue("evennumArray", evenArray);
  }
};
//Bài 6
getElement("switchnumBtn").onclick = () => {
  const firstIndex = getValue("firstindexInput");
  const secondIndex = getValue("secondindexInput");
  let copyArray = [...currArray];
  console.log(copyArray);
  if (firstIndex && secondIndex) {
    const temp = copyArray[firstIndex];
    copyArray[firstIndex] = copyArray[secondIndex];
    copyArray[secondIndex] = temp;
    formatArray(copyArray, "switchnumArray");
  } else {
    alert("Vui long nhap index");
  }
};
//Bài 7
getElement("sortingBtn").onclick = () => {
  let copyArray = [...currArray];
  copyArray.sort((a, b) => a - b);
  formatArray(copyArray, "sortingArray");
};

//Bài 8
const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
getElement("firstprimenumBtn").onclick = () => {
  let firstPrimeNum = -1;
  for (let i = 0; i < currArray.length; i++) {
    if (checkPrime(currArray[i])) {
      firstPrimeNum = currArray[i];
      break;
    }
  }
  setValue("firstprimenumArray", firstPrimeNum);
};
// Bài 9
getElement("isintBtn").onclick = () => {
  let countInt = 0;
  for (let i = 0; i < currArray.length; i++) {
    if (Number.isInteger(currArray[i])) {
      countInt++;
    }
  }
  setValue("isintArray", countInt);
};

//Bai 10
getElement("compareBtn").onclick = () => {
  let posNumber = 0;
  let negNumber = 0;
  for (let i = 0; i < currArray.length; i++) {
    currArray[i] > 0 ? posNumber++ : currArray[i] < 0 && negNumber++;
  }
  posNumber > negNumber
    ? setValue("compareArray", "Số dương > Số âm")
    : posNumber < negNumber
    ? setValue("compareArray", "Số dương < Số âm")
    : setValue("compareArray", "Số dương = Số âm");
};
getElement("addBtn").onclick = addToArray;
getElement("delBtn").onclick = deleteFromArray;
