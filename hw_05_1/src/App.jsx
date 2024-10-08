import React from "react";
import Card from "./сomponents/Card/Card";

function App() {
    return (
        <div>
            <Card
                title={"Card title"}
                text={
                    " Some quick example text to build on the card title and make up the\n" +
                    "          bulk of the card's content."
                }
            >
                <img
                    alt={""}
                    src={"https://imgholder.ru/300x150/8493a8/adb9ca&text=Image+cap&font=kelson"}
                    className="card-img-top"
                />
            </Card>
            <Card
                title={"Special title treatment"}
                text={
                    "With supporting text below as a natural lead-in to additional content."
                }
            />
        </div>
    );
}

export default App;