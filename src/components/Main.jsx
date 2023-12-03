import Card from "./Card";
import data from "./data";

function Main() {
  data.map((item) => console.log(item));
  return (
    <main className="main">
      <Card />
    </main>
  );
}

export default Main;
