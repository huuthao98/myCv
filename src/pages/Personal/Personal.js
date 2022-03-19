import clsx from "clsx"
import { Routes, Route, Link} from 'react-router-dom'

//router
import TodoApp from './Todo/Todo'

// import TodoApp from '../Todo/Todo'
//css
import stylePersonal from './Personal.module.css'


//icon
import { FaTiktok  } from "react-icons/fa"
import { FaFacebook  } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

import { FaEnvelope } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaCalendarDay } from "react-icons/fa"
import { FaSearchLocation} from "react-icons/fa"
import { FaUser  } from "react-icons/fa"
import { FaUsers  } from "react-icons/fa"



function Personal() {
   const listInfoBasic = [
       {id:6,icon:FaPhone,info:'034***6333'},
       {id:1,icon:FaUser,info:'Male'},
       {id:2,icon:FaCalendarDay,info:'1998'},
       {id:5,icon:FaEnvelope,info:'huuthao98@gmail.com'},
       {id:4,icon:FaSearchLocation,info:'Tp Hồ Chí Minh, Việt Nam'},
       {id:7,icon:FaUsers, info: ''}

    ]

    const listInfoSocial = [
        {id :1, icon: FaFacebook ,link: 'https://www.facebook.com/profile.php?id=100010297324110'},
        {id :2, icon: FaTiktok, link:'https://www.tiktok.com/@huu_thor'},
        {id :3, icon: FaInstagram , link: 'https://www.instagram.com/_huuthor/'},
        {id :4, icon: FaGithub, link: 'https://github.com/huuthao98'}
    ]

    const listApp = [
        {id :1, name: 'Todo', img : '/todo.png'}

    ]

    const listAppLink = [
        {id :2, name: 'Tiki', img : '/tiki.png', link: 'https://huuthao98.github.io/tiki-app/'},
        {id :7, name: 'Slider', img : '/silder.png', link: 'https://huuthao98.github.io/slider-marvel/'},
        {id :5, name: 'TodoOLd', img : '/todoOLd.png', link: 'https://huuthao98.github.io/Todo-App/'},
        {id :3, name: 'Music', img : '/music.png', link: 'https://huuthao98.github.io/app-Music/'},
        {id :4, name: 'ChoiceSize', img : '/choiceSize.png', link: 'https://huuthao98.github.io/choice-size/'},
        
    ]
    
    return(
        <div className={clsx(stylePersonal.main)}> 
            <div className={clsx(stylePersonal.about)}>
                <div className={clsx(stylePersonal.avatar)}>
                    <img src="/a2.jpg" alt="" ></img>
                    <div>
                        <h1>NGUYỄN HỮU THẢO</h1>
                        <p>Sinh Viên</p>
                    </div>
                </div>

                <div className={clsx(stylePersonal.info)} >
                    <div className={clsx(stylePersonal.infoBasic)}>
                        <div className={clsx(stylePersonal.infoBasicIcon)}>
                            {listInfoBasic.map((basic) => (
                                <div key={basic.id} >
                                   <basic.icon className={clsx(stylePersonal.infoBasicIconChild)}/> 
                                </div>
                            ))}
                        </div>
                        <div className={clsx(stylePersonal.infoBasicText)}>
                            {listInfoBasic.map((basic) => (
                                <div key={basic.id} >
                                    <p className={clsx(stylePersonal.infoBasicTextChild)}>{ basic.info}</p>
                                </div>
                            ))}
                            <div className={clsx(stylePersonal.infoSocial)}>
                                {listInfoSocial.map((social)=> (
                                    <a href={`${social.link}`} key={social.id} className={clsx(stylePersonal.infoSocialIcon)}>
                                        <social.icon/>
                                    </a>
                                ))}
                            
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </div>
            <div className={clsx(stylePersonal.show)}>
                <div  className={clsx(stylePersonal.showChild)}>
                    {listApp.map((app) => (
                        <div key={app.id}  >
                            <Link to={`/Personal/${app.name}`}  className={clsx(stylePersonal.Route)}>
                                <img src={`${app.img}`} alt=""  className={clsx(stylePersonal.RouteLinkImg)}></img>
                            </Link>
                        </div>  
                    ))}           
                </div>
                <div className={clsx(stylePersonal.showChild)}>
                    {listAppLink.map((app) => (
                        <div  key={app.id}>
                            <a   href={`${app.link}`} className={clsx(stylePersonal.Route)}>
                                <img src={`${app.img}`} alt=""  className={clsx(stylePersonal.RouteLinkImg)}></img>
                            </a>  
                        </div>
                    ))}      
                
                </div>        
            </div>

            <Routes>
                <Route path="/Personal/*Todo" element={<TodoApp/>} />
            </Routes>  
        </div>
    )
}

export default Personal