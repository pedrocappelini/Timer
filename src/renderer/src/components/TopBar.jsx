
export default function TopBar() {

  const handleClose = () => {
    window.electron.ipcRenderer.send("close-window")
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send("minimize-window")
  }

  return (
    <div>
      <div className='bg-blue-400 w-screen h-7' 
      style={{WebkitAppRegion:"drag"}}
      ></div>

      <div id="Buttons" className='absolute right-0 top-0' style={{WebkitAppRegion:"no-drag"}}>
        <button id = "minimize"
         className='bg-yellow-300 px-1 h-7'
         onClick={handleMinimize}>&#128469;</button>
        <button id = "close"
         className='bg-red-500 px-1 h-7'
         onClick={handleClose}>&#x2715;</button>
      </div>
    </div>
  )
}
