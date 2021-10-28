import React from 'react'
import './Page7.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleRight, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Page7() {

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
      {/* 서브타이틀 */}
      <article id="title">
        <div className="container">
          <div class="title">
            <h2>반응형 웹페이지를 만들자!</h2>
            <a href="#" className="btn">
              <FontAwesomeIcon icon={faAngleDown} />
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
                  <li><a href="#">Main <FontAwesomeIcon className="icon" icon={faAngleRight}/></a></li>
                  <li><a href="#">Layout <FontAwesomeIcon className="icon" icon={faAngleRight}/></a></li>
                  <li><a href="#">Homepage <FontAwesomeIcon className="icon" icon={faAngleRight}/></a></li>
                  <li><a href="#">HTML5 <FontAwesomeIcon className="icon" icon={faAngleRight}/></a></li>
                  <li><a href="#">CSS3 <FontAwesomeIcon className="icon" icon={faAngleRight}/></a></li>
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
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
          </section>
          {/* 본문 가운데 내용 */}
          <section id="cont_center">
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
          </section>
          {/* 본문 왼쪽 내용 */}
          <section id="cont_right">
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
            <article className="column">
              <h4 className="col_title">Title</h4>
              <p class="col_desc">Description</p>
            </article>
          </section>
        </div>
      </section>
      {/* 푸터 */}
      <footer id="footer">
        <div className="container">
          <h2>반응형 사이트 푸터</h2>
        </div>
      </footer>
    </div>
  );
}

export default Page7;