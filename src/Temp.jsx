// import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";

// const Temp = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div>
//       <div className="w-full h-screen border-2 border-red-500 relative">
//         {!nav && (
//           <img
//             className="w-full h-full object-cover"
//             src="./bg-tejas.jpg"
//             alt=""
//           />
//         )}
//         <AiOutlineMenu
//           style={{ color: "green", fontSize: "100px" }}
//           onClick={handleNav}
//           className="absolute top-4 right-4 cursor-pointer z-10"
//         />
//         {nav && (
//           <div
//             id="tejas"
//             className="fixed w-full h-screen opacity-90 flex flex-col justify-center items-center text-black border-red-900 bg-blue-900 z-50"
//           >
//             <a onClick={handleNav}>Tejas Pachgade</a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useState, useRef, useEffect } from "react";
// import "./Interactive.css";

// const Interactive = () => {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const inputRef = useRef();
//   // useEffect(() => {
//   // inputRef.current.focus();
//   // }, []);
//   return (
//     <div
//       className="App"
//       // onClick={(e) => {
//       //   inputRef.current.focus();
//       // }}
//     >
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         ref={inputRef}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             let newOutput = "";
//             newOutput = output + "\n" + "$ " + input + "\n";
//             switch (input) {
//               case "ls":
//                 newOutput += "List of Projects";
//                 break;
//               case "pwd":
//                 newOutput += "Current Directory";
//                 break;
//               default:
//                 newOutput += "Unknown Command";
//                 break;
//             }
//             setOutput(newOutput);
//             setInput("");
//           }
//         }}
//       />
//       <div className="terminal">{output}</div>
//     </div>
//   );
// };

// export  {Temp, Interactive}

// // https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80

// // "dev": "vite --host",

// import React from "react";
// import Marquee from "react-fast-marquee";

// const MyComponent = () => (
//   <div style={{ width: 200, height: 200, background: "red" }} />
// );

// const Temp = () => (
//   <Marquee speed={500}>
//     <MyComponent />
//     <MyComponent />
//     <MyComponent />
//   </Marquee>
// );

// export default Temp;

// import React from "react";

// const Temp = () => {
//   return (
//     <div className="w-full h-[100vh] bg-red-900">
//       <div className="w-[1040px] h-full bg-black mx-auto flex justify-between">
//         <div className="w-[40%] h-1/2 bg-blue-500 rounded-xl">
//           <h3 className="text-center font-bold text-2xl">GeeksforGeeks</h3>
//           <div className="flex flex-col w-full h-full items-center justify-evenly">
//             <img
//               src=""
//               alt=""
//               className="w-[40%] h-[40%]  border-2 border-red-900"
//             />
//             <button>Link to Profile</button>
//           </div>
//         </div>
//         <div className="w-[40%] h-1/2 bg-blue-500 rounded-xl"></div>
//       </div>
//     </div>
//   );
// };

// export default Temp;

// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const Temp=()=>{
//     const [inputValue, setInputValue] = useState("");
//     const [response, setResponse] = useState("");

//     const handleChange = (e) => {
//       setInputValue(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const result = await run(inputValue);
//       setResponse(result);
//     };

//     const genAI = new GoogleGenerativeAI(process.env.API_KEY);

//     async function run(str) {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//       const prompt = str || "What is the meaning of life?";
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();
//       return text;
//     }

//     return (
//       <div className="bg- zinc-400 py-2 w-full h-screen">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//             className="px-4 py-2"
//             placeholder="Enter something..."
//           />
//           <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
//             Submit
//           </button>
//         </form>
//         {response && <div className="mt-4 text-lg">{response}</div>}
//       </div>
//     );
// }
// export default Temp;

import axios from "axios";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";


const Temp = () => {
  const [result, setResult] = useState("1 USD is equal to 74.5 INR");
  const [input, setInput] = useState("");
  const [currency, setCurrency] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [displayed, setDisplayed] = useState(false);
  const [buttonName, setButtonName] = useState("Get all currency codes");

  // Infinite scroll API




  useEffect(() => {
    const fetchCurrency = async () => {
      const response = axios
        .get("https://api.exchangerate-api.com/v4/latest/USD")
        .then((response) => {
          // console.log(response.data.rates);
          // console.log(Object.values(response.data.rates));
          //   setInterval(() => {
          //     setCurrency(Object.keys(response.data.rates));
          //     setLoading(false);
          //   }
          //     , 10000);

          setCurrency(Object.keys(response.data.rates));
        })
        .catch((error) => {
          console.log(error);
          setCurrency(["Error in Fetching Data"]);
        });

      console.log(response);
    };
    fetchCurrency();
  }, []);
  const fetchCurrency = async (input) => {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    currency.map((item) => console.log(item));
    console.log(currency);
    if (data.rates[input]) {
      setResult(`1 USD is equal to ${data.rates[input]} ${input}`);
    } else {
      setResult("Currency Code Entered is Wrong");
    }
    setInput("");
  };

  const handleGetAllCurrencyButton = () => {
    setDisplayed(!displayed);
    if (displayed) {
      setButtonName("Get all currency codes");
    } else {
      setButtonName("Hide all currency codes");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCurrency(input);
  };
  return (
    <div className="w-full h-[100vh]">
      <form onSubmit={handleSubmit}>
        <input
          id="currencyInput"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Enter Currency Code e.g.USD, INR, CAD"
          className="border-2 border-black w-1/2 h-12 m-2 placeholder:grey-900 text-black p-2 text-center"
          required
        />
        <button
          type="submit"
          className="border-2 border-red-900 bg-red-900 w-1/2 m-2"
        >
          Convert
        </button>
        <button type="submit" className="border-2 border-red-900 bg-red-900 w-1/2 m-2" onClick={handleGetAllCurrencyButton}>
          {buttonName}
        </button>
      </form>
      <div
        className="border-4 border-black h-12 w-1/2 m-2 flex items-center justify-center"
        id="results"
      >
        {result}
      </div>
      <div className="bg-red-100 h-[500px] overflow-auto flex justify-center">
        {/* {
          loading ? <Spinner width={40} /> : <div className="h-1/2 list-none">
            {currency.map((item) => (
              <li key={item} className="list-decimal">
                {item}
              </li>
            ))}
          </div>
        } */}
        {
          !displayed ? <div>Get all currency codes...</div>
            : <div>
              <ul className="list-none">
                {currency.map((item) => (
                  <li key={item} className="list-decimal">
                    {item}
                  </li>
                ))}
              </ul>
            </div>}
      </div>
    </div>
  );
};

export default Temp;
