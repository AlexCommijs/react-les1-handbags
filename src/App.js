import React from 'react';
import './App.css';
import handy from "./assets/bag_1.png";
import stylish from "./assets/bag_2.png";
import simple from "./assets/bag_3.png";
import trendy from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";
import Button from "./components/Buttons";
import Products from "./components/Products";
import Tiles from "./components/Tiles";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonText="to the collection"/>
                <Button buttonText="shop all bags"/>
                <Button buttonText="pre-order"/>
            </nav>
            <main>
                <Products advice="Best seller" productImage=<img src={handy} alt="Handy bag"/> articleName="The handy
                bag" price="€450,-"/>
                <Products advice="Best seller" productImage=<img src={stylish} alt="Stylish bag"/> articleName="The
                stylish bag" price="€250,-"/>
                <Products advice="New collection" productImage=<img src={simple} alt="Simple bag"/> articleName="The
                simple bag" price="€300,-"/>
                <Products advice="New collection" productImage=<img src={trendy} alt="Trendy bag"/> articleName="The
                trendy bag" price="€150,-"/>
            </main>
            <footer>
                <Tiles title="The brand" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est itaque natus odit quaerat unde,
                        voluptatum. Alias consequatur cupiditate dolore laborum minus nemo provident quas rerum."
                />
                <Tiles tileImage=<img src={brand} alt="Brand"/> />
                <Tiles tileImage=<img src={story} alt="Story"/> />
                <Tiles title="Our story" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam, commodi dicta ea facilis,
                    itaque laboriosam magnam officiis quasi quidem rem repellat velit voluptate? Aspernatur doloribus
                    harum incidunt nesciunt quis quo rerum sapiente tenetur voluptatem?"
                />
            </footer>
        </>
    );
}

export default App;



