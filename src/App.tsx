import "./App.css";
import Message, { MessageAlignment } from "./components/Message/Message";

const App = () => {
  return (
    <div className="App">
      <Message text="This is a test message. 😎" />
      <Message text="This is another test message. 🥰" />
      <Message
        text="You are better than you think! 🫵"
        align={MessageAlignment.LEFT}
      />
      <Message text="Thank you! 😇" align={MessageAlignment.LEFT} />
      <Message text="You can change the way people experience life! 🌞" />
    </div>
  );
};

export default App;
