import React, {useState} from 'react';

const Display = (props) => {
    const { todoList, setTodoList } = props;

    const completeHandler = (todoItem, index) => {
        todoItem.complete=true;

        setTodoList( 
            [...todoList.slice(0, index), todoItem].concat(todoList.slice(index + 1))
        )
    }

    const deleteTodoItem = (index) => {
        const filteredTodo = todoList.filter( (element, idx) => idx !== index);
        setTodoList(filteredTodo);
    }


    return(
        <div className="display">
            {
                todoList.map((todoItem, index) => (
                    <div key={index} style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                    }}>
                        <p>{todoItem.todo}</p>
                        <button onClick={() => completeHandler(todoItem, index) } >Complete</button>
                        <button onClick={() => deleteTodoItem(index)} style={{ backgroundColor:'red'}}>Delete</button>
                    </div>
                ))
            }
        </div>

    )

}

export default Display;