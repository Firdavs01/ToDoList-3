"use strict";

const inputElement = document.querySelector("#input");
const btnElement = document.querySelector("#btn");
const listElement = document.querySelector("#list");
const delBtnElement = document.querySelector("#delBtn");

const notes = [
  {
    title: "BRO HELLO",
    completed: false,
  },
  {
    title: "BRO HELLO",
    completed: false,
  },
];

btnElement.addEventListener("click", () => {
  if (inputElement.value === "" || inputElement.value.length === 2) {
    inputElement.value = "";
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };

  notes.push(newNote);
  render();
  inputElement.value = "";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnElement.click();
  }
});

function render() {
  listElement.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", generateLi(notes[i].title, i));
  }
}

function generateLi(value, index) {
  return `
        <li >${value} <button id="delBtn" data-type="remove" data-index="${index}" data-name="delete" id="delBtn">d</button></li>
    `;
}

listElement.addEventListener("click", (event) => {
  if (event.target.dataset.index) {
    let index = parseInt(event.target.dataset.index);
    let type = event.target.dataset.type;

    if (type === "remove") {
      notes.splice(index, 1);
    }
  }

  render();
});

render();
