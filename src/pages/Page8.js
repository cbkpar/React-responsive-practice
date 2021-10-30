import React, { Component } from 'react';
import './Page8.scss';

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
                <div className="nav">
                  <ul>
                    <li><a href="#">영화</a></li>
                    <li><a href="#">큐레이션</a></li>
                    <li><a href="#">영화관</a></li>
                    <li><a href="#">특별관</a></li>
                    <li><a href="#">스토어</a></li>
                    <li><a href="#">이벤트</a></li>
                    <li><a href="#">로그인</a></li>
                  </ul>
                </div>
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
                    <li className="total"><a href="#">전체메뉴</a></li>
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
          <div className="slider">
            <img src={process.env.PUBLIC_URL + '/img/movie_slider1.jpg'} alt="slider1"></img>
          </div>
        </section>
      </div>
    );
  }
}
export default Page8;