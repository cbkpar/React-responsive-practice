import { Component } from 'react';

import './App.scss';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 7,
      mode: '95%'
    }
  }

  changeMode = () => {
    this.setState({
      page: (this.state.page+7)%8
    });
  }

  render() {
    const pagename = [
      {
        name:"Layout 1"
      },
      {
        name:"Layout 2"
      },
      {
        name:"Layout 3"
      },
      {
        name:"Layout 4"
      },
      {
        name:"Layout 5"
      },
      {
        name:"Layout 6"
      },
      {
        name:"Responsive Web"
      },
      {
        name:"MegaBox"
      },
    ];

    return (
      <div id="container">
        <header><h1>Responsive Practice({pagename[this.state.page].name})</h1>
          <button onClick={this.changeMode}>바꾸기</button></header>
        <nav></nav>
        <aside></aside>
        <section style={{width:this.state.mode}}>
          {this.state.page === 0 ? <Page1></Page1> : ""}
          {this.state.page === 1 ? <Page2></Page2> : ""}
          {this.state.page === 2 ? <Page3></Page3> : ""}
          {this.state.page === 3 ? <Page4></Page4> : ""}
          {this.state.page === 4 ? <Page5></Page5> : ""}
          {this.state.page === 5 ? <Page6></Page6> : ""}
          {this.state.page === 6 ? <Page7></Page7> : ""}
          {this.state.page === 7 ? <Page8></Page8> : ""}
        </section>
        <footer></footer>
      </div>
    );
  }
}

export default App;
