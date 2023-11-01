import Header from './Components/Header/Header'
import Leftside from './Components/LeftSide/Leftside'
import Communities from './Components/RightSide/Communities'
import Mainnav from './Components/Main/Mainnav'
import Mobilenav from './Components/mobilenav'
import {BrowserRouter} from 'react-router-dom'
import "./App.css"

function App() {

  return (
    <>
        <BrowserRouter>
        
        <div className="maincard">
            <div className="gg">
              <Header />
            </div>
              <div className="leftsideS" >
                  <Leftside />
              </div>
              <div className="mainS" >
                <div className="top">
                    <Mainnav/>
                </div>
                <div className="bottom">
                    <Mobilenav/>
                </div>             
              </div>
              <div className="rightsideS" >
                  <Communities/>
              </div>     
        </div>   
        </BrowserRouter>
    </>
  );
}

export default App;
