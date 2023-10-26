import { useState } from "react"
import "./App.css"


function Excercise() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <button>Increase</button>
            <button>Decrease</button>
            <button>Set to Zero</button> <br />
            {count}
        </div>
    )
}

export default Excercise;
