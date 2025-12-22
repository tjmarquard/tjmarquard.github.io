import image from './assets/main_photo.jpg';
import './App.css'

function App() {

  return (
    <>
      <div>
        <a>
          <img src={image} className="logo react" alt="Fit Spouses logo" />
        </a>
      </div>
      <h1>Fit Spouse Running Club</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
