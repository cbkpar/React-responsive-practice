import React, { Component, useState } from 'react';
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

  constructor(props) {
    super(props);
    this.state = {
      mvtabidx: 0
    };
  }

  changemvtab = (e, idx) => {
    e.preventDefault();
    this.setState({
      mvtabidx: idx
    });
  }

  render() {
    const movieArr = [
      {
        name: '박스오피스',
        content: [0, 1, 2, 3, 4, 5],
      },
      {
        name: '최신개봉작',
        content: [2, 3, 4, 5, 7, 8],
      },
      {
        name: '상영예정작',
        content: [6, 7, 8, 9, 1, 2],
      },
      {
        name: '큐레이션',
        content: [0, 1, 3, 5, 6 , 4],
      },
    ];

    const movieList = [
      {
        name: '침묵',
        src: process.env.PUBLIC_URL + '/img/poster1.jpg',
        age: 'a15',
      },
      {
        name: '신세계',
        src: process.env.PUBLIC_URL + '/img/poster2.jpg',
        age: 'a19',
      },
      {
        name: '마스터',
        src: process.env.PUBLIC_URL + '/img/poster3.jpg',
        age: 'a15',
      },
      {
        name: '마약왕',
        src: process.env.PUBLIC_URL + '/img/poster4.jpg',
        age: 'a19',
      },
      {
        name: 'her',
        src: process.env.PUBLIC_URL + '/img/poster5.jpg',
        age: 'a15',
      },
      {
        name: '괴물',
        src: process.env.PUBLIC_URL + '/img/poster6.jpg',
        age: 'a12',
      },
      {
        name: '꼭두각시',
        src: process.env.PUBLIC_URL + '/img/poster7.jpg',
        age: 'a19',
      },
      {
        name: 'GETOUT',
        src: process.env.PUBLIC_URL + '/img/poster8.jpg',
        age: 'a15',
      },
      {
        name: '문라이트',
        src: process.env.PUBLIC_URL + '/img/poster9.jpg',
        age: 'a15',
      },
      {
        name: '보헤미안랩소디',
        src: process.env.PUBLIC_URL + '/img/poster10.jpg',
        age: 'all',
      },
    ]
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
        {/* 영화상영표 */}
        <section id="movie">
          <div className="container">
            <div className="movie">
              <span className="movie_title_top">영화 예매</span>
              <div className="movie_title">
                <ul>
                  {movieArr.map((ele, idx) => {
                    return (
                      <li
                        key={idx}
                        className={this.state.mvtabidx === idx ? "active" : ""}
                        onClick={(e) => this.changemvtab(e, idx)}
                      ><a href="#">{ele.name}</a></li>
                    )
                  })}
                </ul>
              </div>
              <div className="movie_chart">
                <div className="chart_cont">
                  <Swiper
                    spaceBetween={5}
                    slidesPerView={1.5}
                    loop={true}
                    autoplay={{ delay: 6000 }}
                    breakpoints={{
                      "600": {
                        "slidesPerView": 2,
                        "spaceBetween": 10
                      },
                      "960": {
                        "slidesPerView": 3,
                        "spaceBetween": 15
                      },
                      "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 10
                      }
                    }}
                  >
                  {movieArr.map((ele, idx) => {
                    return (
                      this.state.mvtabidx === idx &&
                        movieArr[idx].content.map((s, sidx) => {
                          return (
                            <SwiperSlide>
                            <div className="poster">
                              <figure><img src={movieList[s].src} alt="poster" /></figure>
                              <div className="rank"><strong>{sidx + 1}</strong></div>
                              <div className="mx">
                                <span className="icon m"></span>
                                <span className="icon b"></span>
                              </div>
                              <div className="infor">
                                <h3><span className={"icon " + movieList[s].age}></span><strong>{movieList[s].name}</strong></h3>
                                <div className="infor_btn">
                                  <a href="#">상세보기</a>
                                  <a href="#">예매하기</a>
                                </div>
                              </div>
                            </div>
                            </SwiperSlide>
                          )
                        })
                    )
                  })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Page8;