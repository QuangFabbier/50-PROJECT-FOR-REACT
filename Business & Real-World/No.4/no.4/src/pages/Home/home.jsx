function Home() {
  const defaultData = {
    name: "Moonlight Festival",
    tagline: "Amazing event",
    date: "2026",
    venue: "HCM City",
    description: "Default description",
  };

  const storedData = localStorage.getItem("festivalSettings");
  return <h1>Home Page</h1>;
}

export default Home;
