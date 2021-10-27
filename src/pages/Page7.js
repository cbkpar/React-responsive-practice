import React from 'react'
import './Page7.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

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

      <nav>
        <h2>반응형 사이트 메뉴</h2>
      </nav>
      <article>
        <h2>반응형 사이트 서브 타이틀</h2>
      </article>
      <section>
        <h2>반응형 사이트 컨텐츠</h2>
        <section>
          <h3>반응형 사이트 왼쪽</h3>
          <article>
            <h4>반응형 사이트 왼쪽 컨텐츠1</h4>
            <h4>반응형 사이트 왼쪽 컨텐츠2</h4>
            <h4>반응형 사이트 왼쪽 컨텐츠3</h4>
          </article>
        </section>
        <section>
          <h3>반응형 사이트 가운데</h3>
          <h4>반응형 사이트 가운데 컨텐츠1</h4>
          <h4>반응형 사이트 가운데 컨텐츠2</h4>
          <h4>반응형 사이트 가운데 컨텐츠3</h4>
        </section>
        <section>
          <h3>반응형 사이트 오른쪽</h3>
          <h4>반응형 사이트 오른쪽 컨텐츠1</h4>
          <h4>반응형 사이트 오른쪽 컨텐츠2</h4>
          <h4>반응형 사이트 오른쪽 컨텐츠3</h4>
        </section>
      </section>
      <footer>
        <h2>반응형 사이트 푸터</h2>
      </footer>
    </div>
  );
}

export default Page7;