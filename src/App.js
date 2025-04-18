// import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'; 
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'; 
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'; 
import LifecycleB from './components/LifecycleB'; 
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>  */}
      {/* //cant access in any other child components */}
      {/* <Greet name="Bruce" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="clark" heroName="superman">
        <button>Action</button>
      </Greet>
     
      <Welcome name="Bruce" heroName="batman" />
      <Welcome name="clark" heroName="superman" />
      <Hello />
      <Message />
      <Counter /> */}


      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Message />
      <EventBind />
      <ParentComponent /> */}

      {/* <UserGreeting/> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true} />
      <Inline /> */}
      {/* <Form /> */}
      {/* <LifecycleA />
      <LifecycleB /> */}

      <FragmentDemo />
      <Table />




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
