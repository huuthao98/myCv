
//css
import styleInterests from './Interests.module.css'
import clsx from 'clsx'

function Interests() {
    return (
        <div className={clsx(styleInterests.main)}>
           <div className={clsx(styleInterests.content)} >
               
                <div className={clsx(styleInterests.about)}>
                    <h1 className={clsx(styleInterests.title )}>
                        <p>Interests</p>
                    </h1>

                    <div className={clsx(styleInterests.paraphrase)}>
                        <h2 >Bóng đá</h2>
                        <div className={clsx(styleInterests.note)}>
                            <span><img src="/interests/bongpng.png" alt=''></img></span>
                            <p >Giải bóng đá Ngoại hang Anh là một trong những giải mình cực kỳ thích.</p>
                        </div>
                    </div>
                    <div className={clsx(styleInterests.paraphrase)}>
                        <h2 >Liên minh huyền thoại</h2>
                        <div className={clsx(styleInterests.note)}>
                            <span><img src="/interests/lmht.jpg" alt=''></img></span>
                            <p >Đã bỏ chơi rất lâu, nhưng vẫn thích xem highlight.</p>
                        </div>
                    </div>
                    
                </div>
        
           </div>
           
        </div>
    )
}

export default Interests;