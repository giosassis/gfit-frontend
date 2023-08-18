import { Link } from "react-router-dom";


function Personal() {
  return (
    <div className="container">
      <section className="main-content">
        <div className="text">
          <h1 className="title"> Prescreva treinos em até 5 minutos</h1>
          <p className="description">
            Substitua suas antigas planilhas pelo gFit. Excel? Nunca mais!
          </p>
        </div>
        <div className="text">
          <h1 className="title"> Utilize mais de 250 vídeos prontos</h1>
          <p className="description">
            Aproveite os vídeos de exercicio da nossa galeria ou envie os seus
            próprios vídeos.
          </p>
        </div>
        <div className="text">
          <h1 className="title"> Receba feedbacks instantaneos </h1>
          <p className="description">
            Você vai ser avisado em tempo real quando seu aluno concluir um
            treino. Prático né?
          </p>
        </div>
        <div className="text">
          <h1 className="title"> Seja econtrado por alunos </h1>
          <p className="description">
            Ative seu perfil e comece a receber contato de alunos que estão
            buyscando por personal trainers como você.
          </p>
        </div>
        <h1> Tudo isso de forma gratuita.</h1>
      </section>
      <section className="btn-choice">
        <Link to="/cadastro-personal">
          <button className="btn-choice"> Fazer Cadastro </button>
        </Link>
        <button className="btn-choice"> Já tenho uma conta </button>
      </section>
    </div>
  );
}

export default Personal;
