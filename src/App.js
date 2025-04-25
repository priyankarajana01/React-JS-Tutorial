// import logo from './logo.svg';
import './App.css';
import './appStyles.css';
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
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'; 
import LifecycleB from './components/LifecycleB'; 
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp'; 
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput'; 
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderprops from './components/CounterRenderprops'; 
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';  
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import CounterOne from './components/CounterOne'; 
import CounterTwo from './components/CounterTwo'; 
import UseState from './components/UseState/UseState';

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
      {/* <FragmentDemo />
      <Table /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <Input /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="xyz" />
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? "xyz" : "Guest"} /> */}
      {/*  <CounterRenderprops render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />
      <CounterRenderprops render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} />    */}
      {/* <UserProvider value="xyz">
        <h1>Context API</h1>
        <ComponentC />    
      </UserProvider> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <UseState />


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
