const { readFileSync, writeFileSync } = require('fs');
function getToDos() {
    const data = readFileSync('todos.json').toString();
    return  JSON.parse(data);
}
function setToDos(todos) {
    return writeFileSync('todos.json', JSON.stringify(todos));
}
function addToDo(text) {
    const todos = getToDos();
    todos.push({
         id: Math.random().toString().slice(3, 8),
        task: text,
        created: new Date(),
        isDone: false })
    setToDos(todos);
}
function deleteToDo(id) {
     let deletedItem;
    const todos = getToDos();
    const filtertodos = todos.filter(function(todo){
        if ( todo.id ===id) {
          deletedItem = todo 
          return false;
        }
        return true;
    });
    setToDos(filtertodos);
    return deletedItem;
}

function updateToDo(id, todo) {
    const todos = getToDos();
    const updateToDo = todos.find(function(todo){
        return todo.id ===id;
    })
    updateToDo.task = todo;
    setToDos(todos);
}
module.exports = { getToDos, deleteToDo, updateToDo, addToDo }