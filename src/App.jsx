import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleClick = (value) => {
    setInputValue(inputValue + value);
  };
  const resultclr = () => {
    setInputValue("");
  };
  const result = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 outline-none">
        {/* Display */}
        <input
          type="text"
          value={inputValue}
          readOnly
          className="w-full text-right text-2xl font-mono px-4 py-4 mb-5 rounded-md bg-gray-200"
        />

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-4 text-white text-xl font-bold">
          {/* First row */}
          <button
            onClick={resultclr}
            className="col-span-2 bg-red-500 py-4 rounded-md hover:bg-red-600"
          >
            Clear
          </button>
          <button
            onClick={() => handleClick("/")}
            className="bg-blue-500 py-4 rounded-md hover:bg-blue-600"
          >
            /
          </button>
          <button
            onClick={() => handleClick("*")}
            className="bg-blue-500 py-4 rounded-md hover:bg-blue-600"
          >
            *
          </button>
          {/* Second row */}
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-700 py-4 rounded-md hover:bg-gray-800"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("-")}
            className="bg-blue-500 py-4 rounded-md hover:bg-blue-600"
          >
            -
          </button>

          {/* Third row */}
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-700 py-4 rounded-md hover:bg-gray-800"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleClick("+")}
            className="bg-blue-500 py-4 rounded-md hover:bg-blue-600"
          >
            +
          </button>

          {/* Fourth row */}
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-700 py-4 rounded-md hover:bg-gray-800"
            >
              {num}
            </button>
          ))}
          <button
            onClick={result}
            className="bg-green-500 py-4 rounded-md hover:bg-green-600 row-span-2"
          >
            =
          </button>
          {/* Fifth row */}
          <button
            onClick={() => handleClick("0")}
            className="col-span-2 bg-gray-700 py-4 rounded-md hover:bg-gray-800"
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className="bg-gray-700 py-4 rounded-md hover:bg-gray-800"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
