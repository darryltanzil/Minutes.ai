import './App.css';
import Artyom from "artyom.js"


const artyom = new Artyom();
var settings = {
    continuous:true, // Don't stop never because i have https connection
    onResult:function(text){
        console.log(text);
    },
    onStart:function(){
        console.log("Dictation started by the user");
    },
    onEnd:function(){
        alert("Dictation stopped by the user");
    }
};

var UserDictation = artyom.newDictation(settings);

// Start listening
UserDictation.start();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
