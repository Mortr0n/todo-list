import React, {useState} from 'react';

const Todo = (props) => {

    const { todoList, setTodoList, } = props;
    const [todo, setTodo] = useState("");
    
    // handle submit prevent page refresh, create the todo item and set completed to false initially
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
                    {/* set todo item to the value in the input box */}
                    <input name="todo" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                </p>
                <input type="submit" value="Add Item" />
                <hr />
            </form>

        </div>



    );


}

export default Todo;