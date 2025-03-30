"use strict"

const inputElement = document.querySelector('#input');
const btnElement = document.querySelector('#btn');
const listElement = document.querySelector('#list')

const notes = [
    {
        title: 'BRO HELLO',
        completed: false
    },
    {
        title: 'BRO HELLO',
        completed: false
    },
]

btnElement.addEventListener('click', () => {

    if (inputElement.value === '' || inputElement.value.length === 2) {
        inputElement.value = ''
        return
    }
    
    const newNote = {
        title: inputElement.value,
        completed: false
    }

    notes.push(newNote)
    render()
    inputElement.value = ''
})

document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        btnElement.click()
    }
})

function render() {
    listElement.innerHTML = ''

    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', generateLi(notes[i].title))
    }
}

function generateLi(value) {
    return `
        <li>${value}</li>
    `
}

render()

function showMore(muchSay) {
    return 
}