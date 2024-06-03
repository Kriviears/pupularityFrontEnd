import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './HomePage/HomePage';


// {/**Header */}
// {/**Tinder Cards */}
// {/**Below the tinder cards */}

// {/**Chat screen */}
// {/**Individual chat screen */}

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route path="/chat" 
            element={<h1>This is the chat page</h1>}
          />

          <Route path="/"
            element={<HomePage/>}
          />
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;

