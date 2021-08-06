import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

function ToDoInput() {
    return (
        <div className="input-container">
            <div className="input">
                <div>
                    <input></input>
                </div>
                <div>
                    <div className="success-button"> Send</div>
                </div>
            </div>
        </div>
    )
}

export default ToDoInput
