import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header__logo">KOL Booking</div>
        <div className="header__nav">
            <div className="header__nav-item">Trang Chủ</div>
            <div className="header__nav-item">Tin Tức</div>
            <div className="header__nav-item">Danh sách KOL/KOC</div>
            <div className="header__nav-item">Dich vụ</div>
        </div>
        <div className="header__auth">
            <button className="header__auth-login">Đăng nhập</button>
            <button className="header__auth-register">Đăng Ký</button>
        </div>
    </div>
  )
}

export default Header