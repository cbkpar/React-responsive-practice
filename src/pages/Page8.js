import React, { Component } from 'react';
import './Page8.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Page8 extends Component {

  render() {
    return (
      <div className="Page8">
        {/* 헤더 */}
        <header id="header">
          <div className="container">
            <div class="row">
              <div className="header clearfix">
                <h1><a href="#">
                  <em><img src={process.env.PUBLIC_URL + '/img/movie-logo.png'} alt="logo" /></em>
                  <strong><img src={process.env.PUBLIC_URL + '/img/movie-logo-sub.png'} alt="logo_sub"></img></strong>
                </a></h1>
                <nav id="mNav">
                  <a href="#" className="ham"><span></span></a>
                </nav>
                <nav className="nav">
                  <ul>
                    <li><a href="#">영화</a></li>
                    <li><a href="#">큐레이션</a></li>
                    <li><a href="#">영화관</a></li>
                    <li><a href="#">특별관</a></li>
                    <li><a href="#">스토어</a></li>
                    <li><a href="#">이벤트</a></li>
                    <li><a href="#">로그인</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* 배너 */}
        <section id="banner">
          <div className="banner_menu">
            <div className="container">
              <div className="row">
                <div className="bm_left">
                  <ul>
                    <li className="total"><a href="#"><FontAwesomeIcon icon={faBars} />전체메뉴</a></li>
                    <li className="line"><a href="#">필름 소사이어티</a></li>
                    <li><a href="#">클래식 소사이어티</a></li>
                  </ul>
                </div>
                <div className="bm_right">
                  <ul>
                    <li className="line"><a href="#">고객센터</a></li>
                    <li className="line"><a href="#">멤버십</a></li>
                    <li><a href="#">VIP</a></li>
                  </ul>
                  <ul>
                    <li className="white"><a href="#">상영시간표</a></li>
                    <li className="purple"><a href="#">빠른 예매</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            className="slider"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500 }}>
            <SwiperSlide>
              <div className="container">
                <h2>베스와 베라</h2>
                <p>드라마 / 공포</p>
              </div>
              <img src={process.env.PUBLIC_URL + '/img/movie_slider1.jpg'} alt="slider1" /></SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <h2>워킹 데드</h2>
                <p>드라마 / 공포</p>
              </div>
              <img src={process.env.PUBLIC_URL + '/img/movie_slider2.jpg'} alt="slider2" /></SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <h2>어벤져스</h2>
                <p>액션 / 모험</p>
              </div>
              <img src={process.env.PUBLIC_URL + '/img/movie_slider3.jpg'} alt="slider3" /></SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <h2>왕좌의 게임</h2>
                <p>드라마</p>
              </div>
              <img src={process.env.PUBLIC_URL + '/img/movie_slider4.jpg'} alt="slider4" /></SwiperSlide>
          </Swiper>
        </section>
      </div>
    );
  }
}
export default Page8;