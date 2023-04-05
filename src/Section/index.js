import "./style.css";

const Section = ({ title, body, headerExtra }) => (
    <section>
        <header className="section__header">
            <h2 className="section__title">{title}</h2>
            {headerExtra}
        </header>
        <div>
            {body}
        </div>
    </section >
);

export default Section;