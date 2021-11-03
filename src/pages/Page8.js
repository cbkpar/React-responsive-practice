import React, { Component, useState } from 'react';
import './Page8.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlay } from "@fortawesome/free-solid-svg-icons";
SwiperCore.use([Navigation, Pagination, Autoplay]);

class Page8 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mvtabidx: 0,
      timeidx: 0,
      noticeidx: 0,
    };
  }

  changemvtab = (e, idx) => {
    e.preventDefault();
    this.setState({
      mvtabidx: idx
    });
  }

  changetime = (e, idx) => {
    e.preventDefault();
    this.setState({
      timeidx: idx
    });
  }

  changenotice = (e, idx) => {
    e.preventDefault();
    this.setState({
      noticeidx: idx
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
        content: [0, 1, 3, 5, 6, 4],
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

    const TimeArr = ['오전 0:00', '오전 1:00', '오전 2:00', '오전 8:00', '오후 3:00', '오후 6:00']

    const noticeArr = [
      {
        classidx: 0,
        class: '전체',
        date: '2019.05.28',
        article: '[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
      },
      {
        classidx: 0,
        class: '전체',
        date: '2019.06.22',
        article: '[무대인사] 로그 원 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼',
      },
      {
        classidx: 1,
        class: '서울',
        date: '2019.02.03',
        article: '[CGV판교점] 캐러멜 팝콘 1 + 1 행사',
      },
      {
        classidx: 0,
        class: '전체',
        date: '2020.04.11',
        article: '[사전예약] 어바웃타임 재상영 티켓 사전 예약',
      },
      {
        classidx: 1,
        class: '평택',
        date: '2019.02.04',
        article: '[CGV평택점] 학생 영화 반값 할인 행사~',
      },
      {
        classidx: 0,
        class: '전체',
        date: '2020.06.23',
        article: '[전체] 메가박스 10주년 기념 행사 안내',
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
        {/* 이벤트 */}
        <section id="event">
          <div className="container">
            <div className="event">
              <h2>이벤트</h2>
              <div className="event_left">
                <div className="event_slider">
                  <img src={process.env.PUBLIC_URL + '/img/movie_event1.jpg'} alt="시티 패키지" />
                </div>
                <div className="event_box1">
                  <img src={process.env.PUBLIC_URL + '/img/movie_event2.jpg'} alt="남포항점 2019년 시즌 할인권" />
                </div>
                <div className="event_box2">
                  <img src={process.env.PUBLIC_URL + '/img/movie_event3.jpg'} alt="설 선물 이수점 전용 관람권 런칭" />
                </div>
              </div>
              <div className="event_right">
                <img src={process.env.PUBLIC_URL + '/img/movie_event4.jpg'} alt="사표 대신 영화표" />
              </div>
            </div>
          </div>
        </section>
        {/* 오프닝 */}
        <section id="opening">
          <div className="container">
            <div className="opening">
              <h2><span className="grand icon"></span></h2>
              <strong class="date icon"></strong>
              <p className="desc">LIFE THEATER로 새롭게 시작하는 메가박스를 만나보세요!</p>
              <div class="open_box">
                <div>
                  <h3>리뉴얼 오픈</h3>
                  <p><em>경기도</em><strong>안양</strong>11월 8일</p>
                </div>
                <div>
                  <h3>리뉴얼 오픈</h3>
                  <p><em>경기도</em><strong>평택</strong>11월 8일</p>
                </div>
                <div>
                  <h3>리뉴얼 오픈</h3>
                  <p><em>서울</em><strong>판교</strong>11월 9일</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 새로운 영화 */}
        <section id="newmovie">
          <div className="container">
            <h2>새로운 영화</h2>
            <div className="newmovie">
              <div className="new_left">
                <div className="play">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
              </div>
              <div className="new_right">
                <div className="info">
                  <div className="name">
                    로그 원: 스타워즈 스토리
                  </div>
                  <div className="debutdate">
                    2016년 10월 28일 개봉
                  </div>
                  <div className="score">
                    <span className="icon num1"></span>
                    <span className="icon num2"></span>
                    <span className="icon num3"></span>
                    <span className="icon num4"></span>
                    <span className="icon num5"></span>
                    7.5/10
                  </div>
                  <div className="genre">
                    액션 미국, 오스트레일리아
                  </div>
                  <div className="type">
                    142분 12세 이상 관람가
                  </div>
                  <div className="desc">
                    단숨에 행성 하나를 파괴할 위력을 지닌 데스 스타가 완성되기 전에 설계도를 훔쳐내야 하는 이번 작전의 성공 확률은 고작 2.4%. 생사도 모르는 아버지에 얽힌 비밀을 밝히려는 진을 ...비롯해 유능한 정보 요원 ‘카시안’(디에고 루나), 두 눈이 멀었지만 탁월한 무술 실력을 지닌 ‘치루트’(견자단), 전투 베테랑 ‘베이즈’, 파일럿 ‘보디’, 시니컬한 드로이드 ‘K-2SO’까지 합류, 거대한 전쟁을 끝낼 ‘로그 원’이 이끄는 가장 비밀스런 작전이 시작되는데…
                  </div>
                </div>
                <div className="ticket">
                  <input type="text" id="udate" name="udate" value="2021년 11월 2일" className="date"></input>
                  <select className="time" onChange={(e, idx) => this.changetime(e, idx)} value={this.state.timeidx}>
                    {TimeArr.map((time, idx) => (
                      <option value={idx} key={idx}>{TimeArr[idx]}</option>
                    ))}
                  </select>
                  <input className="address" type="text" id="utext" name="utext" placeholder="주소 또는 도로명을 입력해주세요." />
                  <div className="btn">
                    <a href="#" className="white">좌석확인</a>
                    <a href="#" className="purple">예매하기</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 헬프 */}
        <section id="help">
          <div className="container">
            <div className="help clearfix">
              <article className="help_box1">
                <h3>공지사항</h3>
                <div className="notice">
                  <ul>
                    <li
                      className={this.state.noticeidx === 0 ? "active" : ""}
                      onClick={(e) => this.changenotice(e, 0)}>
                      <a href="#">전체 공지</a>
                    </li>
                    <li
                      className={this.state.noticeidx === 1 ? "active" : ""}
                      onClick={(e) => this.changenotice(e, 1)}>
                      <a href="#">영화관 공지</a>
                    </li>
                  </ul>
                  <ul className="content">
                    {noticeArr.map((notice, idx) => (
                      notice.classidx === this.state.noticeidx &&
                      <li>
                        <strong>{notice.class}</strong>
                        <em>{notice.date}</em>
                        <span>{notice.article}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="help_box2">
                <h3>메가박스 할인카드</h3>
                <div className="card">
                  <ul>
                    <li>
                      <a href="#">
                        <span>
                          <img src={process.env.PUBLIC_URL + '/img/movie_card1.jpg'} alt="card1" />
                          <strong>T멤버십 일반</strong>
                          <em>영화 2,000원 현장 즉시 할인(1일 5매)</em>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img src={process.env.PUBLIC_URL + '/img/movie_card2.jpg'} alt="card2" />
                          <strong>T멤버십 VIP</strong>
                          <em>영화 5,000원 현장 즉시 할인(1일 5매)</em>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <img src={process.env.PUBLIC_URL + '/img/movie_card3.jpg'} alt="card3" />
                          <strong>T멤버십 VVIP</strong>
                          <em>영화 6,000원 현장 즉시 할인(1일 10매)</em>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article className="help_box3">
                <h3>고객센터</h3>
                <div className="service">
                  <ul>
                    <li><a href="#"><span className="icon sv1"></span>1:1 문의</a></li>
                    <li><a href="#"><span className="icon sv2"></span>단체관람</a></li>
                    <li><a href="#"><span className="icon sv3"></span>자주묻는 질문</a></li>
                    <li><a href="#"><span className="icon sv4"></span>분실물 문의</a></li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div id="footer_sns">
            <div className="footer_sns">
              <ul>
                <li className="icon s1"><span className="ir_pm">트위터</span></li>
                <li className="icon s2"><span className="ir_pm">페이스북</span></li>
                <li className="icon s3"><span className="ir_pm">인스타그램</span></li>
                <li className="icon s4"><span className="ir_pm">구글 플레이</span></li>
                <li className="icon s5"><span className="ir_pm">아이폰 앱스토어</span></li>
              </ul>
              <div className="tel">
                <a href="#">ARS <em>1544-0070</em></a>
              </div>
            </div>
          </div>
          <div id="footer_info">
            <div className="container">
              <div className="footer_info">
                <h2><img src={process.env.PUBLIC_URL + '/img/movie-logo-sub.png'} alt="" /></h2>
                <ul>
                  <li><a href="#">회사소개</a></li>
                  <li><a href="#">채용정보</a></li>
                  <li><a href="#">제휴/광고/부대사업 문의</a></li>
                  <li><a href="#">이용약관</a></li>
                  <li><a href="#">개인정보처리방침</a></li>
                  <li><a href="#">고객센터</a></li>
                  <li><a href="#">윤리경영</a></li>
                </ul>
                <address>
                  <p>서울특별시 강남구 도산대로 156, 2층 메가박스중앙(주) (논현동, 중앙엠앤비사옥)<br /><span class="bar2">대표자명 김진선</span> 개인정보보호 책임자 경영지원실 실장 박영진<br /><span class="bar2">사업자등록번호 211-86-59478</span> 통신판매업신고번호 제 833호</p>
                  <p>Copyright 2014 by MegaboxJoongAng Inc. All right reserved</p>
                </address>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Page8;