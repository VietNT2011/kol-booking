import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">

        <div className="footer__title">

          <h2>KOL BOOKING - nền tảng Influencer KOL marketing </h2>

        </div>

        <div className="footer__body">

          <div className="footer__body-column">

            <h3 className="column__title">Sáng lập bởi VietNguyen</h3>
            
            <div className="column__content">
              <p>Trụ sở: XXx, Quận XX, TP.HCM</p>
              <p>CN1: Xx, Quận XX, TP.HCM</p>
              <p>CN2: XXx, Quận X, TP.HCM</p>
              <p>Email: ContactThanhViet@gmail.com</p>
              <p>Hotline: 0xxxxxxx</p>
            </div>

          </div>

          <div className="footer__body-column">

            <h3 className="column__title">Giải pháp</h3>

            <div className="column__content">
              <p>Review</p>
              <p>Livestream</p>
              <p>Quản lý KOL</p>
              <p>Nano-influencer marketing</p>
              <p>Mã số thuế: 00xxx338x002xx</p>
            </div>

          </div>
          
          <div className="footer__body-column">

            <h3 className="column__title">Về nền tảng</h3>

            <div className="column__content">
              <p>Giới thiệu chung</p>
              <p>Hoạt động tiêu biểu</p>
              <p>Tin tức</p>
            </div>

          </div>

          <div className="footer__body-column">

            <h3 className="column__title">Trợ giúp khách hàng</h3>

            <div className="column__content">
              <p>Hình thức thanh toán</p>
              <p>Câu hỏi thường gặp</p>
              <p>Tài liệu hỗ trợ</p>
              <p>Hỗ trợ 24/7</p>
            </div>

          </div>

        </div>

        <div className="footer__devider"></div>

        <div className="footer__end">

          <div className="footer__end-column">

            <p>+ Báo chí nói gì về chúng tôi?</p>
            <p>+ Doanh số bùng nổ thương hiệu tăng gấp 200% khi sử dụng Nano Influelencer cùng nền tảng?</p>

          </div>

          <div className="footer__end-column">

            <p>+ Lợi thế cho Influencer khi tham gia Social Commerce</p>
            
          </div>

        </div>

        <div className="footer__watermark">
          
          <p>
            © Developed by Thanhviet. All rights reserved.
          </p>

        </div>

      </div>

    </>
  )
}

export default Footer