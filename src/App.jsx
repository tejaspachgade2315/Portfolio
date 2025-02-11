import { useEffect, useState } from "react";
// import { Hourglass } from "react-loader-spinner";
// import AnimatedCursor from "react-animated-cursor";
import Loader from "./components/Loader";
import Main from "../src/components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {/* {
          <div className="cursor__dot">
            <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color="250, 0 ,0"
              outerAlpha={0.4}
              innerScale={0.7}
              outerScale={5}
            />
          </div>
        } */}
      {loading ? (
        // <div className="flex justify-center items-center h-screen bg-black">
        //   <Hourglass
        //     visible={true}
        //     height="180"
        //     width="180"
        //     ariaLabel="hourglass-loading"
        //     wrapperStyle={{}}
        //     wrapperClass=""
        //     colors={["black", "gray"]}
        //   />
        // </div>
        <div className="dark-theme">
          <Loader />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
