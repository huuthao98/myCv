//css
import styleCareer from './Career.module.css'
import clsx from 'clsx'

//icon


function Carrer() {



    return(
        <div className={clsx(styleCareer.main)}>
           <div className={clsx(styleCareer.carrer)} >
               
                <div className={clsx(styleCareer.short)}>
                    <h1 className={clsx(styleCareer.title )}>
                        <p>Career Objective</p>
                    </h1>

                    <div className={clsx(styleCareer.paraphrase)}>
                        <h2 >Học và rèn luyện HTMl</h2>
                        <p >Là một ngôn ngữ đánh dấu siêu văn bản nên HTML sẽ có vai trò xây dựng cấu trúc siêu văn bản trên một website, hoặc khai báo các tập tin kỹ thuật số như hình ảnh, video, nhạc. Học lập trình web với HTML sẽ định hướng cho mình muốn theo đuổi lập trình web.</p>
                    </div>
                    <div className={clsx(styleCareer.paraphrase)}>
                        <h2 >Học và rèn luyện CSS</h2>
                        <p >CSS tạo phong cách và định kiểu cho các yếu tố được viết dưới dạng ngôn ngữ đánh dấu HTML. Nó giúp người dùng tiết kiệm thời gian và công sức viết web nhờ khả năng điều khiển định dạng của nhiều trang web cùng lúc</p>
                    </div>
                    <div className={clsx(styleCareer.paraphrase)}>
                        <h2 >Học và rèn luyện Javascript</h2>
                        <p >JavaScript là ngôn ngữ lập trình phổ biến nhất, Javascript có lương viện đảm bảo và có cơ hội việc làm nhiều hơn nên mình chọn Javascript để học .</p>
                    </div> 
                    <div className={clsx(styleCareer.paraphrase)}>
                        <h2 >Học và rèn luyện React Js</h2>
                        <p >ReactJS giúp các doanh nghiệp tạo ra ứng dụng với cấu trúc UI tốt hơn nhằm nâng cao và tối ưu hóa UX. Với công nghệ này, họ có thể dễ dàng tăng tương tác của người dùng, đồng thời tỉ lệ click và chuyển đổi conversion cũng sẽ cao hơn.</p>
                    </div> 
                </div>
        
           </div>
           
        </div>
    )
}

export default Carrer