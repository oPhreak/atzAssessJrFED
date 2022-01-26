import React, { useState } from "react";
import RenderPanels from "./RenderPanels";
import products from "../products";
import Button from '@mui/material/Button';




function App() {
    var allProducts = products;
    const [filters, setFilters] = useState([]); // Add filters in here

    // User selects a filter option
    filters.push(Button.dressType);

    // User deselects a filter option
    filters.pop(Button.dressType);

    var results;
    if (filters.length !== 0) {
    results = allProducts.filter(product => filters.includes(product.type)); 
    } 
    else {
    results = allProducts;
    }

    return(
        <div>
            <RenderPanels products = {results}/>
        </div>

    );
}

export default App;