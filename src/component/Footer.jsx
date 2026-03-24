import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [count, setCount] = useState(5);

// useEffect(() => {
  
//   const timeout = setTimeout(() => {
//     setShowPopUp(true);

//     const timer = setInterval(() => {
//       setCount((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           setShowPopUp(false);
//           return 0; 
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, 5000);

//   return () => clearTimeout(timeout);
// }, []);




  return (
    
      <div className="relative flex items-center justify-center min-h-screen w-full">
        <p className="text-4xl text-yellow-400 font-bold text-center">
          useffect
        </p>
        {showPopUp && (
          <div className="absolute inset-0 w-full h-screen bg-black/70 flex flex-col items-center justify-center">
            <div className="relative w-2/5 h-1/2 bg-white p-10 rounded-2xl flex flex-col gap-5 items-center justify-center">
              <button
                onClick={() => {
                  setShowPopUp(false);
                }}
                className="absolute top-5 right-5 font-bold text-xl text-black"
              >
                x
              </button>
              <p className="text-lg text-black font-semibold">
                PopUp closing after
              </p>
              <p className="text-6xl text-black font-semibold">{count}</p>
              <p className="text-lg text-black font-semibold">seconds</p>
            </div>
          </div>
        )}
      </div>
  );
};

export default Footer;
