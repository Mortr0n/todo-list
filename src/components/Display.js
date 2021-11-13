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
                        {todoItem.complete == true  ?
                        <p style={{textDecoration:'line-through'}}>{todoItem.todo}</p>
                             :
                            <p>{todoItem.todo}</p>
                        }
                        <button onClick={() => completeHandler(todoItem, index) } style={{color:'white', marginRight:'10px', marginBottom:'10px', backgroundColor:'blue', borderRadius:'10px', boxShadow:'3px 3px gray'}} >Complete</button>
                        <button onClick={() => deleteTodoItem(index)} style={{ backgroundColor:'red', borderRadius:'10px', marginBottom:'10px', boxShadow:'3px 3px gray'}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )

}

export default Display;