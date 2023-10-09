import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <div className="App">
    <Header />
    <ToDoForm />
    <Todos/>
    </div>
  );
}

export default App;
