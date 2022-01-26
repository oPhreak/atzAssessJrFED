import React, { useState } from "react";
import Button from '@mui/material/Button';

import RenderPanels from "./RenderPanels";
import products from "../products";
import Header from "./Header";
import Footer from "./Footer";




function App() {
    var allProducts = products;
    const [filters, setFilters] = useState([]); // Add filters in here

    // User selects a filter option
    filters.push(Button.dressType);

    // User deselects a filter option
    filters.pop(Button.dressType);

    // should probably extract this
    // function SelectButton(props) {
    //     const [selected, setSelected] = useState(false);
      
    //     function pushItemToFilter(filter) {
    //       props.setFilters(prevFilters => {
    //         return [...prevFilters, filter];
    //       });
    //     }
      
    //     function popItemFromFilter(filter) {
    //       props.setFilters(prevFilters => {
    //         return prevFilters.filter((element) => {
    //           return element !== filter; 
    //         })
    //       });
    //     }
    //     function handleClick() {
    //         // Not the recommended way to do it
    //        setSelected(!selected);
    //        if(selected) {
    //          pushItemToFilter(props.dressType);
    //        } 
    //        else {
    //          popItemFromFilter(props.dressType);
    //        }   
    //      } 
    // }

    // {SelectButton(setFilters)};

    var results;
    if (filters.length !== 0) {
    results = allProducts.filter(product => filters.includes(product.type)); 
    } 
    else {
    results = allProducts;
    }

    return (
        <div>
            <Header />
            <RenderPanels products = {results}/>
            <Footer />
        </div>
    );
}

export default App;