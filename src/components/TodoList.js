import React from 'react'
import '../index.css'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

function TodoList() {
    return (
        <div className="list-container">
            <div className="item-container">
                <div className='item'>
                    <div className="todo-name">
                        Wake up
                    </div>
                    <div className="check-box">
                        <FontAwesomeIcon icon={faSquare} size="2x" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TodoList
