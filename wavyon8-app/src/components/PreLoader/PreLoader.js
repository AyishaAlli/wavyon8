import React, { useEffect, useState } from "react";
import "./PreLoader.css";

function PreLoader() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);

      setTimeout(() => {
        setcompleted(true);
      }, 2000);
    }, 3000);
  }, []);

  return (
    <div className="preloaderContainer">
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">

            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
         
        </>
      )}
    </div>
  );
}

export default PreLoader;
