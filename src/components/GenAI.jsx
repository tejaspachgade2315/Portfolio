import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import { RotatingLines } from "react-loader-spinner";
// import { Spinner } from "@material-tailwind/react";
import { SyncLoader } from "react-spinners";
import axios from "axios";

const GenAI = () => {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const textInput = inputValue; // Use state value instead of document.getElementById

    try {
      const response = await axios.post(
        "https://portfolio-backend-1dji.onrender.com/submit",
        { text: textInput },
        { headers: { "Content-Type": "application/json" } }
      );
      const data = response.data;
      const result = await run(inputValue);
      setResponse(result);
    } catch (error) {
      // console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
    setHasSubmitted(true);
    setInputValue("");
  };

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  async function run(str) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = str || "What is the meaning of life?";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }

  return (
    <div className="py-2 max-w-[1040px] m-auto h-full flex items-center flex-col mb-10 md:pl-20">
      <form onSubmit={handleSubmit} id="textForm">
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={handleChange}
          className="px-4 py-2 text-black placeholder-gray-700 md:w-[750px] border-black border-[1px] "
          placeholder="Get answer to your question here..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white border-black border-[1px] transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 animate-pulse"
        >
          Search
        </button>
      </form>
      {isLoading ? (
        <div className="px-4 py-6">
          {/* <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          /> */}
          {/* <Spinner className="h-16 w-16" color="blue" /> */}
          <SyncLoader color="blue" />
        </div>
      ) : hasSubmitted && !response ? (
        <p className="py-2 px-3">Failed to get response</p>
      ) : null}
      {hasSubmitted && response ? (
        <div className="mt-2 border-2 rounded-lg py-2 px-3 text-justify">
          <div className="mt-4 text-lg">{response}</div>
        </div>
      ) : null}
    </div>
  );
};
export default GenAI;
