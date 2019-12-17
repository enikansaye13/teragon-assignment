module.exports = (app) => {
   const todoResource = require("../controllers/todoController");

    app.route("/todos")
    .get(todoResource.readAllTodos)
    .post(todoResource.createTodo);

    app.route("/todo/:id")
    .get(todoResource.readOneTodo)
    .put(todoResource.updateTodo)
    .delete(todoResource.deleteTodo);
}
// const todos = [];
// // {text: "go to school"}
// app.get("/get_todos", (req, res) => {
//     res.status(200).send(todos)
// })

// app.post("/new_todo", (req, res) => {
//     
