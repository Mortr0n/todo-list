import React, {useState} from 'react';

const Todo = (props) => {

    const { todoList, setTodoList, } = props;
    const [todo, setTodo] = useState("");
    

    const submitHandler = (e) => {
        e.preventDefault(e);

        const newTodoItem = ([...todoList, {
            todo,
            complete:false,
        }])
        setTodoList(newTodoItem);
        setTodo("");
    }


    return(
        <div>
            <h1>TODO LIST</h1>

            <form onSubmit={submitHandler} >
                <p>
                    <label htmlFor="todo">Todo :</label>
                    <input name="todo" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                </p>
                <input type="submit" value="Add Item" />
                <hr />
            </form>

        </div>



    );


}

export default Todo;