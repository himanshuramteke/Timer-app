import { useEffect } from "react";
import { useState } from "react";

function Timer({ initialTime, onDelete }) {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }

        return () => clearInterval(interval)
    }, [isRunning, time]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString()
            .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
        }
    function toggleTimer() {
        setIsRunning(!isRunning)
    }

    function resetTimer() {
        setTime(initialTime);
        setIsRunning(false);
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
         <div className="text-4xl font-bold mb-4">{formatTime(time)}</div>
         <div className="flex space-x-2">
           <button
            className={`px-4 py-2 rounded ${
                isRunning
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
            } text-white`}
            onClick={toggleTimer}
           >
            {isRunning ? 'Stop' : 'Start'}
           </button>
           <button
             className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
             onClick={resetTimer}
           >
            Reset
           </button>
           <button
            className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
            onClick={onDelete}
           >
            Delete
           </button>
         </div>
        </div>
    )

}

export default Timer;