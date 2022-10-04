import React from 'react'
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <div>
         <header>
    <div className="logo">
        <img src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png" alt="logo techmaster"/>
    </div>
    <div className="side_bar">
        <div className="menu">
            <ul>

                <li className="menu_item">
                    <Link to="/route">LỘ TRÌNH</Link>
                    <span><i className="fa-solid fa-caret-down"></i></span>
                    <ul className="sub_menu">
                        <li className="sub_menu_item">
                            <Link to="/route/frontend">Web Front End + React.js</Link>
                        </li>
                        <li className="sub_menu_item">
                            <Link to="/route/php">Java Spring Boot FullStack</Link>
                        </li>
                        <li className="sub_menu_item">DevOps</li>
                        <li className="sub_menu_item">Amazon Web Service</li>
                        <li className="sub_menu_item">Google Flutter</li>
                        <li className="sub_menu_item">Apple iOS</li>

                    </ul>
                </li>
                <li className="menu_item">DOANH NGHIỆP</li>
                <li className="menu_item">KHÓA HỌC
                    <span><i className="fa-solid fa-caret-down"></i></span>
                    <ul className="sub_menu">
                        <li className="sub_menu_item">
                            <Link to="/onlab">Onlab</Link>
                        </li>
                        <li className="sub_menu_item">Trực tuyến</li>
                    </ul>  
                </li>
                <li className="menu_item">SẢN PHẨM HỌC VIÊN</li>
                <li className="menu_item">KHAI GIẢNG</li>
                <li className="menu_item">BLOG</li>
                <li className="menu_item">TRẢI NGHIỆM</li>
                <li className="menu_item">CHÚNG TÔI
                    <span><i className="fa-solid fa-caret-down"></i></span>
                    <ul className="sub_menu">
                        <li className="sub_menu_item">Trung tâm</li>
                        <li className="sub_menu_item">Quy định chung</li>
                        <li className="sub_menu_item">Giảng viên</li>
                        <li className="sub_menu_item">Hướng dẫn đăng kí học</li>
                    </ul> 
                </li>
            </ul>
        </div>
        <div className="card">
            <div className="card_icon">
                <span className="icon_shopping"><i className="fa-solid fa-cart-shopping"></i></span>
                <span className="card_number">0</span>
            </div>
            
        </div>
        <div className="avatar">
            <img src="https://media.techmaster.vn/api/static/pL3scdG6/joC6n37K" alt="avatar"/>
        </div>
    </div>

  </header>
    </div>
  )
}

export default Sidebar