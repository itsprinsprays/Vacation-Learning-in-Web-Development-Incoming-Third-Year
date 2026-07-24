import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Counter from "./components/Counter"

function App() {
  return (
    <>
    <Header />
    <div>
      <h1>Course Management System</h1>
      <p>Welcome to my first React application!</p>
      <Main name="Prince Benitez" age={21}/>

      <Counter />
    </div>
    <Footer />
  </>
  )
}

export default App