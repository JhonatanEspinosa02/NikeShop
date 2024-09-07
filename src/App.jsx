import { useState } from "react";
import Header from "./components/Header";
import Sneaker from "./components/Sneaker";
import { db } from "./data/db";

function App() {
  const [bag, setBag] = useState([]);

  const itemsMax = 5;
  const itemsMin = 1;

  function addToBag(item) {
    const itemAdded = bag.findIndex((sneaker) => sneaker.id === item.id);

    if (itemAdded >= 0) {
      const bagItemsAdded = [...bag];
      bagItemsAdded[itemAdded].quantity++;
      setBag(bagItemsAdded);
    } else {
      item.quantity = 1;
      setBag([...bag, item]);
    }
  }

  function bagQuantityIncrease(id) {
    const updatedAmount = bag.map(item => {
      if(item.id === id && item.quantity < itemsMax) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item;
    })
    setBag(updatedAmount)
  }

  function badQuantityDecrease(id) {
    const updatedAmount = bag.map(item => {
      if(item.id === id && item.quantity > itemsMin) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })
    setBag(updatedAmount)
  }

  function emptyBag(id) {

    const bagFilter = bag.filter(item => item.id !== id)
    setBag(bagFilter)
  }



  return (
    <>
      <Header bag={bag} bagQuantityIncrease={bagQuantityIncrease} badQuantityDecrease={badQuantityDecrease} emptyBag={emptyBag}/>

      <div className="bg-white sm:grid grid-cols-2 lg:grid-cols-3">
        {db.map((sneaker) => (
          <>
            <div className="m-2 p-10">
              <Sneaker sneaker={sneaker} addToBag={addToBag} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
