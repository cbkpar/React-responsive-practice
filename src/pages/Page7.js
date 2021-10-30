import React, { Component } from 'react';
import './Page7.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp, faAngleDown, faAngleRight, faPlusCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

class Page7 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isopen: false
    };
  }

  togglebtn = (e) => {
    this.setState({
      isopen: !this.state.isopen
    });
  }

  render() {

    const images = [
      {
        url: process.env.PUBLIC_URL + '/img/pet1.jpg',
        no: 0
      },
      {
        url: process.env.PUBLIC_URL + '/img/pet2.jpg',
        no: 1
      },
      {
        url: process.env.PUBLIC_URL + '/img/pet3.jpg',
        no: 2
      },
      {
        url: process.env.PUBLIC_URL + '/img/pet4.jpg',
        no: 3
      },
      {
        url: process.env.PUBLIC_URL + '/img/pet5.jpg',
        no: 4
      },
    ];

    return (
      <div className="Page7">
        {/* Header  */}
        <header id="header">
          <div className="container">
            <div className="header">
              {/* Header Menu */}
              <div className="header_menu">
                <a href="https://cbkpar.tistory.com/" target="_blank">Blog</a>
                <a href="https://github.com/cbkpar" target="_blank">Github</a>
                <a href="https://cbkpar-mbti.netlify.app/" target="_blank">MBTI</a>
              </div>
              {/* Header Title */}
              <div className="header_title">
                <h1>Responsive practice</h1>
                <a href="https://cbkpar.github.io/React-responsive-practice/index.html">Responsive</a>
              </div>
              {/* Header icon */}
              <div className="header_icon">
                <ul>
                  <li><a href="#"><FontAwesomeIcon icon={faHtml5} /><span>HTML5</span></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faGithub} /><span>Github</span></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook} /><span>Facebook</span></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faInstagram} /><span>Instagram</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        {this.state.isopen ?
          <nav id="nav">
            <div className="container">
              <div className="row">
                <div className="nav">
                  {/* 반응형 사이트 메뉴 */}
                  <div>
                    <h3>Layout</h3>
                    <o1>
                      <li><a href="#">Layout 1</a></li>
                      <li><a href="#">Layout 2</a></li>
                      <li><a href="#">Layout 3</a></li>
                      <li><a href="#">Layout 4</a></li>
                      <li><a href="#">Layout 5</a></li>
                      <li><a href="#">Layout 6</a></li>
                    </o1>
                  </div>
                  <div>
                    <h3>Homepage</h3>
                    <o1>
                      <li><a href="#">Homepage 1</a></li>
                      <li><a href="#">Homepage 2</a></li>
                      <li><a href="#">Homepage 3</a></li>
                      <li><a href="#">Homepage 4</a></li>
                      <li><a href="#">Homepage 5</a></li>
                      <li><a href="#">Homepage 6</a></li>
                      <li><a href="#">Homepage 7</a></li>
                    </o1>
                  </div>
                  <div>
                    <h3>Others</h3>
                    <o1>
                      <li><a href="#">Other 1</a></li>
                      <li><a href="#">Other 2</a></li>
                      <li><a href="#">Other 3</a></li>
                      <li><a href="#">Other 4</a></li>
                      <li><a href="#">Other 5</a></li>
                    </o1>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          : ""}
        {/* 서브타이틀 */}
        <article id="title">
          <div className="container">
            <div class="title">
              <h2>반응형 웹페이지를 만들자!</h2>
              <a href="#" onClick={this.togglebtn} className="btn">
                {this.state.isopen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                <span>전체 메뉴 보기</span>
              </a>
            </div>
          </div>
        </article>
        {/* 본문 */}
        <section id="contents">
          <div className="container">
            {/* 본문 왼쪽 내용 */}
            <section id="cont_left">
              <article className="column">
                <h4 className="col_title">Menu</h4>
                <p className="col_desc">Box-shadow</p>
                <div className="menu">
                  <ul>
                    <li><a href="#">Menu <FontAwesomeIcon className="icon" icon={faAngleRight} /></a></li>
                    <li><a href="#">Main <FontAwesomeIcon className="icon" icon={faAngleRight} /></a></li>
                    <li><a href="#">Layout <FontAwesomeIcon className="icon" icon={faAngleRight} /></a></li>
                    <li><a href="#">Homepage <FontAwesomeIcon className="icon" icon={faAngleRight} /></a></li>
                    <li><a href="#">HTML5 <FontAwesomeIcon className="icon" icon={faAngleRight} /></a></li>
                    <li><a href="#">CSS3 <FontAwesomeIcon className="icon" icon={faAngleRight} /></a></li>
                  </ul>
                </div>
              </article>
              {/* 공지사항 */}
              <article className="column">
                <h4 className="col_title">Notice</h4>
                <p className="col_desc">공지사항</p>
                <div className="notice1">
                  <h5>Notice 1</h5>
                  <a href="#" className="more" title="더 보기">More <FontAwesomeIcon className="icon" icon={faPlusCircle} /></a>
                  <ul>
                    <li><a href="#">2021.10.26 개설 (상세 내용)</a></li>
                    <li><a href="#">2021.10.27 버튼 추가 (상세 내용)</a></li>
                    <li><a href="#">2021.10.28 배너 추가 (상세 내용)</a></li>
                    <li><a href="#">2021.10.28 메뉴 추가 (상세 내용)</a></li>
                    <li><a href="#">2021.10.28 게시판 추가 (상세 내용)</a></li>
                  </ul>
                </div>
                <div className="notice2">
                  <h5>Notice 2</h5>
                  <a href="#" className="more" title="더 보기">More <FontAwesomeIcon className="icon" icon={faPlusCircle} /></a>
                  <ul>
                    <li><a href="#">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</a></li>
                    <li><a href="#">남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세</a></li>
                    <li><a href="#">가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편 단심일세</a></li>
                    <li><a href="#">이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세</a></li>
                    <a href="#" className="more" title="더 보기"></a>
                  </ul>
                </div>
              </article>
              {/* 블로그 */}
              <article className="column">
                <h4 className="col_title">Blog</h4>
                <p className="col_desc">반응형 이미지</p>
                <div className="blog1">
                  <h5>Programming</h5>
                  <figure>
                    <img src={process.env.PUBLIC_URL + '/img/coding_low.jpg'} alt="normal image" />
                    <figcaption>Hello world!</figcaption>
                  </figure>
                </div>
                <div className="blog2">
                  <h5>Pet</h5>
                  <figure>
                    <img src={process.env.PUBLIC_URL + '/img/cat.jpg'} alt="normal image" />
                    <figcaption>Cat Image</figcaption>
                  </figure>
                </div>
              </article>
            </section>
            {/* 본문 가운데 내용 */}
            <section id="cont_center">
              {/* 이미지 슬라이드 */}
              <article className="column">
                <h4 className="col_title">Slide</h4>
                <p className="col_desc">Image Slide</p>
                <div className="slide">
                  <Swiper
                    className="slider"
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}>
                    {images?.map((image, no) => (
                      <SwiperSlide><img src={image.url} alt="" /></SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </article>
              <article className="column">
                <h4 className="col_title">Blend-effect</h4>
                <p className="col_desc">Blend mode</p>
                <div className="lightbox">
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet1.jpg'} alt="pet" /><em>blur</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet2.jpg'} alt="pet" /><em>bright</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet3.jpg'} alt="pet" /><em>contrast</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet4.jpg'} alt="pet" /><em>grayscale</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet5.jpg'} alt="pet" /><em>hue-rotate</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet6.jpg'} alt="pet" /><em>invert</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet7.jpg'} alt="pet" /><em>opacity</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet8.jpg'} alt="pet" /><em>saturate</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet9.jpg'} alt="pet" /><em>sepia</em></a>
                  <a href="#"><img src={process.env.PUBLIC_URL + '/img/pet10.jpg'} alt="pet" /><em>Mix</em></a>
                </div>
              </article>
              {/* 비디오 */}
              <article className="column">
                <h4 className="col_title">Video</h4>
                <p className="col_desc">Music Playing~</p>
                <div className="video">
                  <iframe src="https://www.youtube.com/embed/yyzYr21MumM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </article>
            </section>
            {/* 본문 왼쪽 내용 */}
            <section id="cont_right">
              <article className="column">
                <h4 className="col_title">Effect 1</h4>
                <p className="col_desc">Rotation with Y axis</p>
                <div className="side1">
                  <figure className="front">
                    <img src={process.env.PUBLIC_URL + '/img/side1.jpg'} alt="side image"></img>
                  </figure>
                  <div className="back">
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                  </div>
                </div>
              </article>
              <article className="column">
                <h4 className="col_title">Effect 2</h4>
                <p className="col_desc">Rotation with Y axis</p>
                <div className="side2">
                  <figure className="front">
                    <img src={process.env.PUBLIC_URL + '/img/side2.jpg'} alt="side image"></img>
                    <figcaption>
                      Flower
                    </figcaption>
                  </figure>
                  <figure className="back">
                    <img src={process.env.PUBLIC_URL + '/img/side4.jpg'} alt="side image"></img>
                    <figcaption>
                      Mountain
                    </figcaption>
                  </figure>
                </div>
              </article>
              <article className="column">
                <h4 className="col_title">Effect 3</h4>
                <p className="col_desc">Rolling dark ball</p>
                <div className="side3">
                  <figure>
                    <img src={process.env.PUBLIC_URL + '/img/side3.jpg'} alt="side image"></img>
                    <figcaption>
                      Lotus
                    </figcaption>
                  </figure>
                </div>
              </article>
            </section>
          </div>
        </section>
        {/* 푸터 */}
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="footer">
                <ul>
                  <li><a href="#">사이트 도움말</a></li>
                  <li><a href="#">사이트 이용약관</a></li>
                  <li><a href="#">사이트 운영원칙</a></li>
                  <li><a href="#"><strong>개인정보취급방침</strong></a></li>
                  <li><a href="#">책임의 한계와 법적고지</a></li>
                  <li><a href="#">게시중단요청서비스</a></li>
                  <li><a href="#">고객센터</a></li>
                </ul>
                <address>
                  Copyright ©
                  <a href="https://github.com/cbkpar"> <strong>cbkpar</strong> </a>
                  All Rights Reserved.
                </address>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Page7;