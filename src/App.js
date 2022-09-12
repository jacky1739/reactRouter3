// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import FAQ from './components/FAQ'

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function NotFound () {
  return (
    <>
      <h2>您的網址出錯囉</h2>
      <Link to="/">回到首頁</Link>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {/* 建立路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
