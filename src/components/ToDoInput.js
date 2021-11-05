import React, {useState} from 'react'
import { addTodo } from '../redux/todoSlice';
import { useDispatch} from 'react-redux'
function ToDoInput(props) {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    
     const onSubmit = (event) => {
        event.preventDefault();
        if(value.trim() == '') return;
        dispatch(addTodo({
            title: value,
        }))
        setValue('');
    }


    return (
        <form className="input-container" onSubmit={onSubmit}>
            <div className="input">
                    <input onChange={e => setValue(e.target.value)} value={value} ></input>
                    <button type="submit" className="success-button noselect">Send</button>
            </div>
        </form>
    )
}

export default ToDoInput
