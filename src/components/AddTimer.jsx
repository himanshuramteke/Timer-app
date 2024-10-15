import { useState } from "react";

function AddTimer({ onAdd }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function handleAdd() {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalSeconds > 0) {
            onAdd(totalSeconds);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex space-x-2 mb-4">
             <input 
               type="number"
               className="w-20 px-2 py-1 border rounded"
               placeholder="HH"
               value={hours}
               onChange={(e) => setHours(parseInt(e.target.value) || 0)}
               min="0"
             />
             <input 
               type="number"
               className="w-20 px-2 py-1 border rounded"
               placeholder="MM"
               value={minutes}
               onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
               min="0"
               max="59"
             />
            </div>
            <button
              className="px-4 py-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
              onClick={handleAdd}
            >
                Add Timer
            </button>
        </div>
    )

}

export default AddTimer;