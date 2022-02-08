import Main from './components/MainComponents';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {

  render(){
  return (
    <BrowserRouter>
      <div>
          <Main/>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
