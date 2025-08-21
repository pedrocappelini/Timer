import TopBar from "./components/TopBar";
import Timer from "./components/Timer";
import { useState, useEffect } from "react";

function App() {
  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    window.electron.ipcRenderer.on("overlay-mode", () => {
      setIsOverlay((prev) => !prev);
    });

    return () => {
      window.electron.ipcRenderer.removeAllListeners("overlay-mode");
    };
  });

  return (
    <>
      <div className={!isOverlay ? "visible" : "invisible"}>
        <TopBar></TopBar>
      </div>
      <div
        className={
          !isOverlay
            ? "bg-black bg-opacity-40 p-2 rounded-b-xl"
            : "bg-black bg-opacity-40 p-2 rounded-xl"
        }
      >
        <Timer isOverlay={isOverlay}></Timer>
      </div>
    </>
  );
}

export default App;
