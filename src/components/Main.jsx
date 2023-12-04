import Card from "./Card";
import data from "./data";

function Main() {
  return (
    <main className="main">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.coverImg}
          country={item.country}
          city={item.city}
          description={item.description}
          mapLink={item.mapLink}
          durationFrom={item.duration.from}
          durationTo={item.duration.to}
        />
      ))}
    </main>
  );
}

export default Main;
