// import logo from './logo.svg';
import './App.css';
import Card from './componets/card';
import Form from './componets/form';
// import Backlog from './componets/backlog';
// import Evaluate from './componets/evaluate';
// import Inprogress from './componets/inprogress';
// import Done from './componets/done';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Kanban Board</h1>
        <hr />
        <Form />
        <br />
        {/* <Backlog />
        <Inprogress />
        <Evaluate />
        <Done /> */}

        <Card />
      </div>
    </div>
  );
}

export default App;
