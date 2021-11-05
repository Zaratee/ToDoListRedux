import React from 'react';
import '../App.css'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch} from 'react-redux'
import { completeTodo } from '../redux/todoSlice';


 

function ToDoItem(props) {
    const {allTodos} = props;
    const dispatch = useDispatch();
    const taskCompleted = (id, state) => {
        if(state) return;
        dispatch(completeTodo({
            id: id,
        }));
    }

    return (

        <div className="item-container">
        {
                allTodos.map((item, index) =>
                        <div className='item'>
                            <div className="todo-name">
                                {item.title}
                            </div>
                            <div className="check-box">
                                <FontAwesomeIcon icon={ item.completed ? faCheckSquare : faSquare } onClick={() => taskCompleted(item.id, item.completed)} size="2x" />
                            </div>
                        </div>
                    
                    )
        }    
        </div>
  
    )
}

export default ToDoItem;
