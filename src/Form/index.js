import "./style.css";

const Form = () => (
  <form>
    <div className="form__input">
      <input className="form__newTask" placeholder="Co jest do zrobienia?" />
      <button className="form__button"> Dodaj zadanie
      </button>
    </div>
  </form>
);

export default Form;