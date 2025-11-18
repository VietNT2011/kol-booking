import React from 'react'
import banner from '../../assets/herro-banner_1.png'
import tvc from '../../assets/hero-tvc.mov'
import img1 from '../../assets/img_solution_1.png'
import img2 from '../../assets/img_solution_2.png'
import img3 from '../../assets/img_solution_3.jpg'
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

    </div>
  )
}

export default Home