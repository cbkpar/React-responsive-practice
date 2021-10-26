import './App.scss';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {

  let page = 1;

  return (
    <div id="container">
      <header><h1>Responsive Practice</h1></header>
      <nav></nav>
      <aside></aside>
      <section>
        {page==0?<Page1></Page1>:""}
        {page==1?<Page2></Page2>:""}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
