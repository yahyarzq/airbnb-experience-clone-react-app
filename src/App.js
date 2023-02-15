import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data";

function App() {
  const cardList = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="App-background">
      <div className="App-main-container">
        <Navbar />
        <Hero />
        <div className="card-container">
          {cardList}
          {/* <Card
            img="person.png"
            rating={4.6}
            reviewCount={66}
            location="USA"
            title="Life Lesson with Kattie Zaferes"
            price={588}
          />
          <Card
            img="person.png"
            rating={4.6}
            reviewCount={66}
            location="USA"
            title="Life Lesson with Kattie Zaferes"
            price={588}
          />
          <Card
            img="person.png"
            rating={4.8}
            reviewCount={128}
            location="CANADA"
            title="Life Lesson with Mr Bean"
            price={99999}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
