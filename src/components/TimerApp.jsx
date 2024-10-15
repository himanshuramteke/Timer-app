import { useState } from "react";
import AddTimer from "./AddTimer";
import Timer from "./Timer";

function TimerApp() {
    const [timers, setTimers] = useState([]);

    function addTimer(initialTime) {
        setTimers([...timers, initialTime])
    }

    function deleteTimer(index) {
        setTimers(timers.filter((_, i) => i !== index));
    }

    return(
       <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
         <h1 className="text-3xl font-bold mb-8 text-center bg-green-400">Timer App</h1>
         <AddTimer onAdd={addTimer} />
         {timers.map((timer, index) => (
            <Timer 
             key={index}
             initialTime={timer}
             onDelete={() => deleteTimer(index)}
            />
         ))}
        </div>
       </div>
    )
}

export default TimerApp;