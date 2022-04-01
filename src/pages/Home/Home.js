//css
import clsx from 'clsx'
import styleHome from './Home.module.css'
//hook 

 function Home() {
  //array
  
 

  return(
    <div className={clsx(styleHome.main)}>
      <div className={clsx(styleHome.homePage)}>
        <h1 className={clsx(styleHome.title)}>Chao xìn!!!</h1>
      </div>

      <div className={clsx(styleHome.games)}>
       <div className={clsx(styleHome.manRun)}> 
         <div className={clsx(styleHome.man)} ></div>
       </div>
      </div>
    </div>
  )
}

export default Home