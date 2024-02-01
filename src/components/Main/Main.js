import "./Main.scss";
import city from "../../Assets/Images/city.png";
export default function Main() {
  return (
    <main className="main">
      <h1 className="main__text">
        Welcome to the city are you looking forward to the exciting things
        happening around you!
      </h1>
      <button className="main__button" type="submit">
        Click here to join the excitement
      </button>
      <section className="main__section">
        <img className="main__section-img" src={city} alt="To-do-app Logo" />
        <p className="main__section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </section>
    </main>
  );
}
