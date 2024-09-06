import Header from "./components/Header";
import Sneaker from "./components/Sneaker";
import { db } from "./data/db";

function App() {
  return (
    <>
      <Header />

      <div className="bg-white sm:grid grid-cols-2 lg:grid-cols-3">
        {db.map((sneaker) => (
          <>
            <div className="m-2 p-10">
              <Sneaker sneaker={sneaker}/>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
