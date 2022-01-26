import React from "react";
import RenderPanels from "./RenderPanels";
import products from "../products";


function App() {
    //const [items, setItems] = useState([])

    return(
        <div>
            <RenderPanels products = {products}/>
        </div>

    );
}

export default App;