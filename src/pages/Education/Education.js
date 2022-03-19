//css
import styleEducation from './Education.module.css'
import clsx from 'clsx'

//icon
import { FaGraduationCap} from "react-icons/fa"
import { FaBriefcase} from "react-icons/fa"



function Education() {

    const ListSKill = [
        {id: 1,name: 'HTML', width: '85%'},
        {id: 2,name: 'CSS', width: '60%'},
        {id: 3,name: 'Javascript', width: '50%'},
        {id: 4,name: 'ReactJS', width: '15%'},
    ]

    return(
        <div className={clsx(styleEducation.main)}>
           <div className={clsx(styleEducation.education)} >
               
                <div className={clsx(styleEducation.shool)}>
                    <h1 className={clsx(styleEducation.title )}>
                        <FaGraduationCap className={clsx(styleEducation.icon)} />
                        <p>Education</p>
                    </h1>

                    <div className={clsx(styleEducation.paraphrase)}>
                        <h2 >Trường Học viện Kỹ thuật mật mã</h2>
                        <p >Vào học từ 2017 đến nay những năm đầu của sinh viên, học tập chưa rõ ràng định hướng sẽ làm gì trong ngành nghề này..., cho đến này tập trung vào con đường Web Developer.</p>
                    </div>
                </div>
                <div className={clsx(styleEducation.experience)}> 
                    <h1 className={clsx(styleEducation.title )}>
                        <FaBriefcase className={clsx(styleEducation.icon)} />
                        <p>Skill</p>
                    </h1>
                    <div className={clsx(styleEducation.skills)}>
                        {ListSKill.map((skill) => (
                            <div key={skill.id} className={clsx(styleEducation.skill)}>
                                <div className={clsx(styleEducation.skillChild)} style={{width: `${skill.width}`}}>
                                    <p>{skill.name}</p>
                                    <span >{skill.width}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                    
                    
           </div>
        
           </div>
           
        </div>
    )
}

export default Education