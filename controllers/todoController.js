const todos = [];
module.exports.readAllTodos = (req, res) => {
    res.status(200).send(todos);
}
module.exports.createTodo = (req, res) => {
    const todo = req.body;
    if (todo.text) {
        let createDate = Date.now().toString();
        todos.push({
            ...todo,
            users: `${todos.length + 1}`,
            id: `${todos.length + 1}`,
            createdAt: createDate,
            updatedAt: createDate
        })
        res.status(200).json({ messages: "todo created successfully" })
    } else {
        res.status(401).json({ message: "invalid todo" })
    }
}


module.exports.readOneTodo = (req, res) => {
    let todo = todos.find((eachTodo) => eachTodo.id == req.params.id);
    if(todo){
        return res.status(200).send(todo)
    }else{
        res.status(404).json({message:"Todo not found"})
    }
}

module.exports.updateTodo = (req, res) => {
    let todo = todos.find((eachTodo) => eachTodo.id == req.params.id);
    if(todo){
        todo.text = req.body.text;
        return res.status(200).send({message:"update Succes", date:todo})
    }else{
        res.status(404).json({message:"Todo not found"})
    }
}

module.exports.deleteTodo = (req, res) => {
    let todo = todos.find((eachTodo) => eachTodo.id == req.params.id);
    if(todo){
        todos.splice(todos.indexOf(todo), 1)
        return res.status(200).send({message:"todo deleted Succesfully"})
    }else{
        res.status(404).json({message:"Todo not found"})
    }
}
