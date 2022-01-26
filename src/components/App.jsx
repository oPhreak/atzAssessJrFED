import React, { useState } from "react";
import products from "../products";
import Panel from "./Panel";

const items = products();

function App() {
    //const [items, setItems] = useState([])

    return(
        <div>
            {items.map((product, index) => {
                return (
                        <Panel
                            id = {index}
                            brand = {product.brand}
                            name = {product.name}
                            price = {product.price}
                        />
                );
                })}
        </div>
    )
}

export default App;