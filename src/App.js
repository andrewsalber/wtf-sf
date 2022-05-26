import './App.css';
import {useState} from 'react';
import Indoor from './components/Indoor'
import Suggestion from './components/Suggestion'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [indoor, setIndoor] = useState(null);
  const [badIdeas, setBadIdeas] = useState([]);

  const indoorToggle = (event) => {
    if(indoor === null) {
      setIndoor(true);
    } else {
      setIndoor(!indoor);
    }
  }

  const badIdeaToggle = (newBadIdea) => {
    setBadIdeas(oldArray => [...oldArray, newBadIdea])
  }
  
  return (
    <div className="overall-container">
      <Header />
      <div className="container">
        <div className="Title-font">So you're bored in</div>
        <div className="City-name">San Francisco...</div>
        <div className="Title-font">How about you go to</div>
        <Suggestion indoor = {indoor} badIdeaToggle = {badIdeaToggle} badIdeas={badIdeas}/>
        <Indoor indoor = {indoor} indoorToggle = {indoorToggle}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
