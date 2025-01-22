import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklkmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%&*<>?()[]:;";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      console.log("char: ", char);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select(); // selects the text
    

  }

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-3xl font-bold">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden my-3">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          className="w-full p-4 outline-none text-white bg-gray-700"
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none w-14 flex items-center justify-center text-white bg-green-500 border-l rounded-r hover:bg-green-600">
          Copy
        </button>
      </div>
      <div className="flex text-sm justify-between">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
            name=""
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
