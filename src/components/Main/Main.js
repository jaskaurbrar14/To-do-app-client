import "./Main.scss";
import city from "../../Assets/Images/city.png";
import { useState } from "react";
import eventData from "../../data/eventData.json";

export default function Main() {
  const [events, setEvents] = useState(null);
  console.log(events);

  const handleFoundEvent = () => {
    // const previousIndex = events?.id;
    let randomIndex =
      eventData[Math.floor(Math.random() * (eventData.length - 1))];
    // // const foundEvent = eventData.find((event) => event.id === even);
    setEvents(randomIndex);
    // const selectedEvent = eventData[_.random(eventData.length - 1)];
    // eventData.filter((event) => event.id !== selectedEvent);
    //  const selectedEvent = getRandomItem(eventData)

    // let newEvent = eventData.forEach(
    //   (event) => event.id === setEvents(event.id)
    // // );
    // let newEvent = "";
    // for (let i = 0; i < eventData.length; i++) {
    //   newEvent = eventData[i];
    // }
    // setEvents(newEvent);
  };

  return (
    <main className="main">
      <h1 className="main__text">
        Welcome to the city are you looking forward to the exciting things
        happening around you!
      </h1>
      <button
        className="main__button"
        type="submit"
        onClick={() => handleFoundEvent()}
      >
        Click here to join the excitement
      </button>

      <section className="main__section">
        <img
          className="main__section-img"
          src={events ? events.image : city}
          alt="To-do-app Logo"
        />
        <div className="main__section-text">
          <p className="main__section-text-name">
            {events
              ? events.name
              : "Welcome to Toronto, a city where culture and excitement intertwine! Immense yourself in lively Toronto International Film Festival, groove to teh beat at the Tornto Caribbean Carnival, and savor diverse flavors at the Tast eof Tornot food festival."}
          </p>
          <p className="main__section-text-date">{events ? events.date : ""}</p>
          <p className="main__section-text-address">
            {events ? events.address : ""}{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
