import React from 'react'
import banner from '../../assets/herro-banner_1.png'
import tvc from '../../assets/hero-tvc.mov'
import img1 from '../../assets/img_solution_1.png'
import img2 from '../../assets/img_solution_2.png'
import img3 from '../../assets/img_solution_3.jpg'
import vision_image from '../../assets/visionimage/visionimage.png'
import strength_image from '../../assets/strengthimage/strength_img.png'
import contact_img from '../../assets/contactimage/contact_img.svg'
import './Home.css'
import BrandSlider from "../../components/BrandSlider/BrandSlider";
const Home = () => {
  return (
    <div className='home'>

        <div className="home__hero">

            <div className="home__hero-video">
                <video autoPlay loop muted playsInline src={tvc}/>
            </div>

            <div className="home__hero-banner">
                <img src={banner} alt="" />
            </div>

        </div>
        
        <div className="home__solutions">

            <h2 className='home__solutions__title'>Chúng Tôi Cung Cấp Các <span className="highlight-text" >Giải Pháp</span> </h2>

            <div className="home__solutions__list">

                <div className="home__solutions__list-item">
                    <div className="item__right">
                        <h3 className="item__right-title">Quản lý và vận hành kênh tiếp thị của KOL</h3>
                        <p className="item__right-desc">Quản lý và lên kế hoạch giúp KOL phát triển, sáng tạo các nội dung mới, xu hướng, thu hút nhãn hàng tài trợ quảng cáo sản phẩm.</p>
                    </div>
                    <div className="item__left">
                        <img className='item__left-img' src={img1} alt="" />
                    </div>
                </div>

                <div className="home__solutions__list-item">
                    <div className="item__right">
                        <h3 className="item__right-title">Influencer và KOL review đa nền tảng</h3>
                        <p className="item__right-desc">Influencer KOL trải nghiệm, đánh giá sản phẩm, dịch vụ qua video ngắn giúp người dùng tham khảo thông tin và tin tưởng mua hàng.</p>
                    </div>
                    <div className="item__left">
                        <img className='item__left-img' src={img2} alt="" />
                    </div>
                </div>

                <div className="home__solutions__list-item">
                    <div className="item__right">
                        <h3 className="item__right-title">Live stream đa nền tảng</h3>
                        <p className="item__right-desc">Phát sóng trực tiếp để tiếp cận, truyền tải thông điệp, lan toả thương hiệu hoặc thu hút khách hàng xem và mua sản phẩm, dịch vụ...</p>
                    </div>
                    <div className="item__left">
                        <img className='item__left-img' src={img3} alt="" />
                    </div>
                </div>
                
            </div>

        </div>

        <BrandSlider />

        <div className="home__vision">
            <div className="home__vision-left">
                <img className="home__vision-image" src={vision_image} alt="Vision"/>
            </div>
                <div className="home__vision-content">
                    <h2 className="home__vision-title">
                        Không ngừng <br />
                        <span>đổi mới và sáng tạo</span>
                        </h2>
                    <p className="home__vision-body">
                        Không chỉ theo kịp xu hướng, chúng tôi còn tạo ra xu hướng. Bởi trong mỗi dự án mà chúng tôi thực hiện đều đề cao sự đầu tư tâm huyết và tinh thần sáng tạo không giới hạn. Hãy để Halago trở thành đối tác đồng hành tin cậy của bạn, cung cấp những giải pháp influencer marketing hiệu quả nhất, thu hút nhất và phù hợp nhất với thị trường hiện tại.
                    </p>
                <button className="home__vision-btn">Kết nối ngay với chúng tôi</button>
            </div>
        </div>

        <div className="home__strengths">
            <div className="strengths__left">
                <h2 className="strengths__left-title"> <span>Thế Mạnh Và Ưu Điểm</span> <br /> Của chúng Tôi</h2>
                <div className="strengths__left-list">
                    <details className="list__item">
                        <summary>Cung cấp đa dạng giải pháp tiếp thị</summary>
                        <p>Chúng tôi sử dụng sức mạnh của người có ảnh hưởng để mang tới cho nhãn hàng các giải pháp tiếp thị hiệu quả và phù hợp xu hướng như review, livestream, khách mời tham dự workshop, đại sứ thương hiệu, TVC quảng cáo…</p>
                    </details>
                    <details className="list__item">
                        <summary>Chiến lược branding đột phá, sáng tạo</summary>
                        <p>Từng dự án truyền thông đều được các nhân sự chuyên môn tại Halago sáng tạo thành những câu chuyện mới mẻ với các phương thức tiếp cận mới, thu hút và gây ấn tượng trong tâm trí khách hàng.</p>
                    </details>
                    <details className="list__item">
                        <summary>Mạng lưới influencer đông đảo, chuyên nghiệp</summary>
                        <p>Hiện tại, Halago đã liên kết và quản lý mạng lưới với hơn 50,000 influencers KOL thuộc nhiều lĩnh vực, trong đó bao gồm cả sự hợp tác với các nghệ sĩ, ca sĩ, diễn viên, hoa hậu, MC...</p>
                    </details>
                </div>
                <div className="strengths__left-btn">
                    <button>Kết nối ngay với chúng tôi</button>
                </div>
            </div>

            <div className="strengths__right">
                <img className="strengths__right-image" src={strength_image} alt="Strengths"/>
            </div>
        </div>

        <div className="home__contact">
            <div className="contact__top">
                <h2 className="contact__top-title">Vui Lòng Để Lại Thông Tin <br />HALAGO Tư Vấn Miễn Phí</h2>
            </div>
            <div className="contact__form">
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <button>Tư vấn cho tôi</button>
                </form>
            </div>
            <div className="contact__bot">
                <img src={contact_img} alt="" className="contact__bot-img" />
            </div>
        </div>

    </div>
  )
}

export default Home