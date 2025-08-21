import {useEffect, useState} from 'react'
import alarm from "../assets/sounds/alarm.wav"
import InputField from './InputField'
export default function Timer({ isOverlay }) {
    const [isEditing, setIsEditing] = useState(false)
    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    const [hours, setHours] = useState(0)
    const [isActive, setIsActive] = useState(false) //todo from here.
    const [audio] = useState(new Audio(alarm))

    useEffect(() => {

        let intervalId;

        if(isActive){
            intervalId = setInterval(() =>{
                if(seconds > 0){
                    setSeconds(seconds - 1)
                }else{
                    if(minutes==0 && hours == 0){
                        audio.play();
                        clearInterval(intervalId)
                        setIsActive
                    }else {
                        if(minutes == 0){
                            setHours(hours - 1)
                            setMinutes(59)
                            setSeconds(59)
                        }else{
                            setMinutes(minutes - 1)
                            setSeconds(59)
                        }
                    }
                }
            },1000)
        }else{
            clearInterval(intervalId)
        }
    return () => clearInterval(intervalId)

    }, [isActive, minutes, seconds, hours])

    return (
        <div>
            {isEditing ? (
                //setup
            <div className='flex justify-center'>
        <div>
            <InputField label = {"Hours"}
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            ></InputField>
            <InputField label = {"Minutes"}
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
            ></InputField>
            <InputField label = {"Seconds"}
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
            ></InputField>
            <button className='bg-green-500 text-white text-stone-200 px-20 py-1 rounded-xl text-xl mt-1 ml-1'
            onClick={() => setIsEditing(false)}
            >&#10004;</button>
            </div>
        </div>
            ):(
                //timer
                <div>
                    <div id = "clock" className='flex justify-center'>
                        <h1 className='text-green-500 text-6xl'
                        >{`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}</h1>
                    </div>

                    <div id = "TimerButtons" className={ !isOverlay ? 'flex justify-center mt-2 gap-4 bg-black p-2 rounded-lg bg-opacity-50' 
                    : 'hidden'}
                    >{isActive ? (
                        <>
                        <button
                        className ='text-yellow-400 rounded text-5xl px-4'
                        onClick={() => setIsActive(false)}
                        >&#x23F8;</button>
                        <button
                        className ='text-red-600 rounded text-5xl px-4'
                        onClick={() => {
                            setIsActive(false)
                            setMinutes(0)
                            setSeconds(0)
                            setHours(0)
                        }}
                        >&#9724;</button>
                        </>
                    ) : (
                        <>
                        <button id="start"className ='text-green-400 rounded text-5xl px-4'
                        onClick={() => setIsActive(true)}
                        >&#9658;</button>
                        <button id="edit" className ='text-yellow-400 rounded text-4xl px-3'
                        onClick={() => setIsEditing(true)}
                        >&#9998;</button>
                        </>
                    )}
                    </div>

                </div>
            )
        }
        </div>
  )
}
