//css
import stylesTodo from './Todo.module.css';
import clsx from 'clsx'

//icon 
import { FaTrash} from "react-icons/fa"
import { FaPlus} from "react-icons/fa"
import { FaCheck} from "react-icons/fa"
import { FaSearch} from "react-icons/fa"

//react redux
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../redux/actions';
import { searchTodo } from '../../../redux/actions';

//import id 
import {v4 as uuidv4} from 'uuid';
//hook
import { useState} from 'react'  
import { todoListSelector, searchTextSelector } from '../../../redux/selecters';


function Todo() {
    const priorityColorMapping = {
      High: 'red',
      Medium: 'blue',
      Low: 'gray',
    };
    const dispatch =useDispatch();
  
    const [todoName, setTodoName] = useState('') 
    const [priority, setPriority] = useState('Medium') 
    const [search, setSearch] = useState('') 

    const todoList = useSelector(todoListSelector)
    const searchText = useSelector(searchTextSelector)
   
    const handleSubmit = () => {
  
      //use redux
      dispatch(
        addTodo({
          id:uuidv4(),
          name:todoName,
          priority: priority,
          completed:  false
        })
      )
    }
    const handleInputChange = (e) => {
      setTodoName(e.target.value);
      setTodoName('')
    }

    const handlePriorityChange = (e) => {
      setPriority(e.target.value)

    }
    const handleSearch = (e) => {
      setSearch(e.target.value)
      dispatch(searchTodo(e.target.value))
    }
   
    
  

    return (
      
      <div  className={clsx(stylesTodo.todoApp)}>
          
          <div className={clsx(stylesTodo.todoFrom)}>
            <div>
              <div style={{display: 'flex', margin: '20px'}}>
                <input
                placeholder='Enter Text'
                
                value={todoName}
                onChange={handleInputChange}
                />
                <span>
                  <select value={priority} onChange={handlePriorityChange} style={{border: '0',height:'50px'}}>
                    <option  className={clsx(stylesTodo.todoOption)} value='High' label='High' ></option>
                    <option  className={clsx(stylesTodo.todoOption)} value='Medium' label='Medium'></option>
                    <option  className={clsx(stylesTodo.todoOption)} value='Low' label='Low'></option>
                  </select>
                </span>
                <button  onClick={handleSubmit} className={clsx(stylesTodo.btn)} ><FaPlus /></button>
              </div>
              
              <ul >
                {todoList.map((todo)=> (
                  <div className={stylesTodo.job} key={todo.id}>
                    <ul >
                      <li>{todo.name}</li>
                      <li style={{marginLeft: '20px',color:`${priorityColorMapping[todo.priority]}`}}>{todo.priority}</li>
                    </ul>
                    <div>
                      <FaCheck className={clsx(stylesTodo.icon, stylesTodo.iconCheck)}  />
                      <FaTrash className={clsx(stylesTodo.icon)}/>
                    </div>

                  </div>
                ))}
              </ul>
            </div>
            <div className={clsx(stylesTodo.todoMenu)}>
              <div  style={{display: 'flex', margin: '20px'}}>
                <input 
                  placeholder='Search Text'
                  value={search}
                  onChange={handleSearch}
                />
                <button className={clsx(stylesTodo.btn)}>
                  <FaSearch className={clsx(stylesTodo.icon, stylesTodo.iconCheck)}/>
                </button>
              </div>
              
            </div>
        
          </div>
      </div>
    );
}

export default Todo