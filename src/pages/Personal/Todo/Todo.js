//css
import stylesTodo from './Todo.module.css';
import clsx from 'clsx'

//icon 
import { FaTrash} from "react-icons/fa"
import { FaPlus} from "react-icons/fa"

//hook
import { useState} from 'react'  

function Todo() {
  

    const [job, setJob] = useState({name:'',id:''}) 
    
    const getLocalStorage = JSON.parse(localStorage.getItem('Name') )
    
    const [jobs, setJobs] = useState(getLocalStorage)

    localStorage.setItem('Name', JSON.stringify(jobs));
   
    const handleSubmit = () => {
      if(job.name.trim() !== '') {
        setJobs(prev => [...prev, job]) 
        setJob({name:''})

      }

    }
  
    const onChangeJob = (e) => {
      setJob({name:e.target.value,id: indexId()})
    }

    const handleDel =(id) => {
 
      return function() {
        for(let i = 0; i < jobs.length; i++) {
          if(id === jobs[i].id) {
         
            jobs.splice(i, 1)
            setJobs(prev => [...prev]) 

           }
        }
        
      } 
    }
   
    
    const indexId =() => {
      const alphabet = 'abcdefghijklmnouptqxyz1234567890';
      return alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)] 
      + alphabet[Math.floor(Math.random()*alphabet.length)] + alphabet[Math.floor(Math.random()*alphabet.length)]
    }

    // useEffect(() => {
    //   const getLocalStorage = localStorage.getItem('Name') 
    // }, [jobs])
    

    return (
      
      <div  className={clsx(stylesTodo.todoApp)}>
          
          <div className={clsx(stylesTodo.todoFrom)}>
            
            <input
              placeholder='Enter Text'
              
              value={job.name}
              onChange={onChangeJob}
            />
            <button  onClick={handleSubmit} className={clsx(stylesTodo.btn)} ><FaPlus /></button>
  
            <ul >
              {jobs.map((job) =>(
                <div key={job.id} className={stylesTodo.job}>
                  <li >{job.name}</li>
                  <FaTrash className={clsx(stylesTodo.icon)} onClick={handleDel(job.id)}/>
                </div>
              ))}
            </ul>
  
          </div>
        
      </div>
    );
}

export default Todo