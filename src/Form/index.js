import "./style.css";


const Form = () => (
    <form className="form">
        <h2 className="form__header">Dodaj nowe zadanie</h2>
        <div className="form__input"><input className="form__newTask" placeholder="Co jest do zrobienia?" />
          <button className="form__button"> Dodaj zadanie</button>
        </div>
      </form>
);

export default Form;