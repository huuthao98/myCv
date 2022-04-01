import styleApp from './App.module.css'
import clsx from 'clsx';
import './reset.css'
import { Routes, Route, Link} from 'react-router-dom'

// page
import HomePage from './pages/Home/Home'
import PersonalPage from './pages/Personal/Personal'
import EducationPage from './pages/Education/Education'
import CareerPage from './pages/Career/Career'
import InterestsPage from './pages/Interests/Interests'



//routes
import TodoApp from './pages/Personal/Todo/Todo'

//import componets
import GlobalStyles from './components/GlobalStyles'

// imort icon 
import { FaHome  } from "react-icons/fa"
import { FaUser  } from "react-icons/fa"
import { FaBook  } from "react-icons/fa"
import { FaBullseye  } from "react-icons/fa"
import { FaHeart  } from "react-icons/fa"
// import hook

import { useState } from 'react'

function App() {
  //array
  const listMenu = [
    { name:'',id: 1,icon: FaHome,color:'#80ff80'},
    {name:'Personal', id: 2,icon: FaUser,color:'#ffa117'},
    {name:'Education', id: 3,icon: FaBook,color:'#b145e9'},
    {name:'Career', id:4,icon: FaBullseye,color:'#2196f3'},
    {name:'Interests', id:5,icon: FaHeart,color:'#f44336'}
  ]

  //hook
  const [openMenu, setOpenMenu] = useState(false);
  const [activeColor, setActiveColor] = useState(1)                      

  //logic

  const actionsOpenMenu = () => {
    setOpenMenu(!openMenu)
    
  }
  
  
  const actionsOpenLink = (id) => { 
    
    return function() {
      
      for(let i = 0;i < listMenu.length; i++){
        if(activeColor === listMenu[i].id) {
          setActiveColor(id)
          }
       }
      }
    } 
 
  return (
    <GlobalStyles>
      <div id={styleApp.main}>
        <nav className={clsx(styleApp.controlPage , {[styleApp.openMenu] : openMenu } ) }>
          
          <div className={clsx(styleApp.menuControl )} onClick={actionsOpenMenu}></div>
          
          <ul className={clsx(styleApp.routes)}>
            {listMenu.map((menu) => (
                <li key={menu.id} className={clsx(styleApp.route, {[styleApp.active] : activeColor === menu.id})}   onClick={actionsOpenLink(menu.id)} >

                    <Link to={`/${menu.name}`} className={clsx(styleApp.linkRoute)}>
                      <menu.icon className={clsx(styleApp.icon )}  style={{color:` ${menu.color}`}}/>
                      <div  className={clsx(styleApp.text)}>{menu.name || 'Home'}</div>
                    </Link>
                </li>
              
            ))}
            
          </ul>

        </nav>

        <nav className={styleApp.showPage}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Personal" element={<PersonalPage/>} />
            <Route path="/Personal/Todo" element={<TodoApp/>} />
            <Route path="/Education" element={<EducationPage/>} />
            <Route path="/Career" element={<CareerPage/>} />
            <Route path="/Interests" element={<InterestsPage/>} />

          </Routes>
        </nav>
      </div>
    </GlobalStyles>
  );
 
}

export default App;
