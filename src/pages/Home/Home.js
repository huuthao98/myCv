//css
import clsx from 'clsx'
import styleHome from './Home.module.css'
//hook
import { useState }  from 'react'  

function Home() {
  //array
  const listTicktack = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9}];
  
  //hook
  const [tick, setTick ] = useState(); 
  //logic
 
  //function
  
  const checkTicktack = (id) => {
    
    return function() {
    
      for(let i = 0; i < listTicktack.length; i++) {
        if(id === listTicktack[i].id) {
          setTick(id)
        }
       }
    }
  }
  
  

  return(
    <div className={clsx(styleHome.main)}>
      <div className={clsx(styleHome.homePage)}>
        <h1 className={clsx(styleHome.title, {[styleHome.active] : true}) } style={{color: 'currentcolor'}}>Chao xìn!!!</h1>
      </div>

      <div className={clsx(styleHome.games)}>
       <div className={clsx(styleHome.ticktacktoe)}> 
         
         {listTicktack.map((ticklist) => (
            <button key={ticklist.id} className={clsx(styleHome.ticktackButton, {[styleHome.tick] : tick === ticklist.id })}  onClick={checkTicktack(ticklist.id)}></button>

          ))}
            
       </div>
      </div>
    </div>
  )
}

export default Home