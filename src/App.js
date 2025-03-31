
import './App.css';
import MenuTop from "./components/MenuTop";
import UserList from "./components/UserList";

function App() {
  return (
      <>
        <MenuTop/>
        <div className="container">
          <UserList/>
        </div>

      </>
  )
}

export default App;
