import React from 'react'
import './Page7.scss';

function Page7() {

  return (
    <div className="Page7">

      {/* Header  */}
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="header_menu">
              <a href="#">Blog</a>
              <a href="#">Github</a>
              <a href="#">Webstandard</a>
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