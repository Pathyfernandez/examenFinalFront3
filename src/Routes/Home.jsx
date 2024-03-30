import Card from "../Components/Card";
import { useContextStates } from "../Context/Context";

const Home = () => {
  const { state } = useContextStates();
  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.list.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  );
};

export default Home;
