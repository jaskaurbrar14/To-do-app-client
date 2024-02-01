import "./Main.scss";
import city from "../../Assets/Images/city.png";
export default function Main() {
  return (
    <main className="main">
      <p>
        Welcome to the city are you looking forward to the exciting things
        happening around you{" "}
      </p>
      <button>Click here to join the excitement</button>
      <section>
        <div>
          <img className="header-logo__img" src={city} alt="To-do-app Logo" />
        </div>
        <div>
          {" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </section>
    </main>
  );
}
