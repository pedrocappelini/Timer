import { useEffect, useState } from "react";
import alarm from "../assets/sounds/alarm.wav";
import TimeScroller from "./TimeScroller";
export default function Timer({ isOverlay }) {
  const [isEditing, setIsEditing] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false); //todo from here.
  const [isActiveFoward, setIsActiveFoward] = useState(false);
  const [Foward, setFoward] = useState(true);
  const [audio] = useState(new Audio(alarm));

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes == 0 && hours == 0) {
            audio.play();
            clearInterval(intervalId);
            setIsActive;
          } else {
            if (minutes == 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          }
        }
      }, 1000);
    } else if (isActiveFoward) {
      intervalId = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds == 59) {
          if (minutes == 59) {
            setHours(hours + 1);
            setMinutes(0);
            setSeconds(0);
          } else {
            setMinutes(minutes + 1);
            setSeconds(0);
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, isActiveFoward, minutes, seconds, hours]);

  return (
    <div>
      {isEditing ? (
        //setup
        <div className="">
          <div className="flex justify-center items-center space-x-1">
            <TimeScroller value={hours} onChange={setHours} max={23} />
            <div></div>
            <span className="text-5xl text-gray-600 pb-8 h-14">:</span>
            <TimeScroller value={minutes} onChange={setMinutes} max={59} />
            <span className="text-5xl text-gray-600 pb-8 h-14">:</span>
            <TimeScroller value={seconds} onChange={setSeconds} max={59} />
          </div>
          <div
            id="ReadyButton"
            className="flex justify-center mt-2 gap-4 bg-black p-2 rounded-lg bg-opacity-50 w-full"
          >
            <button
              className="flex text-green-300 font-bold px-20 rounded-xl text-xl "
              onClick={() => setIsEditing(false)}
            >
              &#10003;
            </button>
          </div>
        </div>
      ) : (
        //timer
        <div>
          <div id="clock" className="flex justify-center font-bold">
            <h1 className="text-green-500 text-6xl">{`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h1>
          </div>

          <div
            id="TimerButtons"
            className={
              !isOverlay
                ? "flex justify-center mt-2 gap-4 bg-black p-2 rounded-lg bg-opacity-50"
                : "hidden"
            }
          >
            {isActive || isActiveFoward ? (
              <>
                <button
                  id="pause"
                  className="text-yellow-400 rounded text-5xl px-4"
                  onClick={() => {
                    setIsActive(false);
                    setIsActiveFoward(false);
                  }}
                >
                  &#x23F8;
                </button>
                <button
                  id="reset"
                  className="text-red-600 rounded text-5xl px-4"
                  onClick={() => {
                    setIsActive(false);
                    setIsActiveFoward(false);
                    setMinutes(0);
                    setSeconds(0);
                    setHours(0);
                  }}
                >
                  &#x23EE;
                </button>
              </>
            ) : (
              <>
                <button
                  id="start"
                  className="text-green-400 rounded text-5xl px-4"
                  onClick={
                    !Foward
                      ? () => setIsActive(true)
                      : () => setIsActiveFoward(true)
                  }
                >
                  &#9658;
                </button>
                <button
                  id="edit"
                  className="text-yellow-400 rounded text-5xl px-3"
                  onClick={() => setIsEditing(true)}
                >
                  &#9881;
                </button>
                <button
                  id="reverse"
                  className={"text-purple-500 rounded text-5xl px-3"}
                  onClick={() => setFoward(!Foward)}
                >
                  {!Foward ? <>&#9660;</> : <>&#9650;</>}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
