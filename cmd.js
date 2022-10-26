#!/usr/bin/env node
const { getToDos, deleteToDo, updateToDo, addToDo } = require("./todos");
function displayToDos() {
    console.table(getToDos());
}
const [, , crud, ...text] = process.argv;
const [id] = text;
switch (crud) {
    case 'get':
        displayToDos();
        break;
    case 'create':
        console.log(text.join(' '))
        addToDo(text.join(' '));
        break;
    case 'delete':
        console.log(`removed successfully: `, deleteToDo(id));
        break;
    case 'update':
        const [, ...sentence] = text;
        updateToDo(id, sentence.join(' '));
        break;
    default:
        console.log('write something valid')
}