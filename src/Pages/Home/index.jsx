import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <header>
      <img className="picture-container" src={require("./Assets/logo-sem-fundo.png")} alt=""/>  
      </header>
      <section className="main-content">
        <h1>Transforme sua vida com a orientação de profissionais comprometidos com a sua jornada. </h1>
        <h2>Junte-se ao nosso time!</h2>
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
