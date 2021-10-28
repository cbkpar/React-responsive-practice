import React from 'react'
import './Page7.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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