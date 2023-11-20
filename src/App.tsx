import React from "react";
import Coffee from "./Coffee";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>HAIRAH COFFEE SHOP</h1>
        <h2>
          In a world full of Mondays and struggles, i hope u choose a cup of
          coffee;
        </h2>
      </header>
      <p>
        We are located in the heart of Kitunzi town lungujja at Divine mercy
        building 2nd floor
      </p>

      <Coffee
        type="Cappuccino"
        price="5000 ush"
        image="coffee2.jpeg"
        descripton="A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam.
         Variations of the drink involve the use of cream instead of milk, using non-dairy milk 
         substitutes and flavoring with cinnamon or chocolate powder"
      />
      <Coffee
        type="Espresso"
        price="25000 ush"
        image="coffee1.jpeg"
        descripton="Espresso is one of the most popular coffee-brewing methods, 
      of Italian origin. The French also made a significant contribution to the invention of the first coffee makers, predecessors of today's
        espresso machines and generally to the café"
      />

      <Coffee
        type="Latte"
        price="15000 ush"
        image="coffee2.jpeg"
        descripton="Caffè latte, often shortened to just latte in English, 
        is a coffee drink of Italian origin made with espresso and steamed milk."
      />
      <Coffee
        type="Americano"
        price="20000 ush"
        image="coffee3.jpeg"
        descripton="Caffè Americano is a type of coffee drink prepared by
         diluting an espresso shot with hot water"
      />
    </div>
  );
}

export default App;
