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
    // const foundEvent = eventData.find((event) => event.id === even);
    setEvents(randomIndex);
    // const selectedEvent = eventData[_.random(eventData.length - 1)];
    // eventData.filter((event) => event.id !== selectedEvent);
    //  const selectedEvent = getRandomItem(eventData)
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
        <p className="main__section-text">{events ? events.name : "Name"}</p>
        <p className="main__section-text">{events ? events.date : "Date"}</p>
        <p className="main__section-text">{events ? events.time : "time"}</p>
        <p className="main__section-text">
          {events ? events.adress : "Adress"}
        </p>
      </section>
    </main>
  );
}
