import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <section className="main-content">
        <h1>Bora ajudar a democratizar ao acesso a Personal Trainer? </h1>
        <h2>Conta com a gente!</h2>
      </section>
      <section className="btn-choice">
        <Link to="/personal">
          <button className="btn-choice"> Sou Personal </button>
        </Link>
        <button className="btn-choice"> Sou Aluno </button>
      </section>
    </div>
  );
}

export default Home;
