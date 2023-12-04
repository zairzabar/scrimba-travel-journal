import Card from "./Card";
import data from "./data";

function Main() {
  return (
    <main className="main">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
}

export default Main;
