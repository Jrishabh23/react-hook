import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Routing } from "./Router/Routing";

function App() {
    const [count, setCount] = useState(0);

    return <Routing />;
}

export default App;
