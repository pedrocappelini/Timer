
export default function TopBar() {

  const handleClose = () => {
    window.electron.ipcRenderer.send("close-window")
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send("minimize-window")
  }

  return (
    <div>
      <div className='bg-gray-800 w-screen h-7 rounded-t-xl' 
      style={{WebkitAppRegion:"drag"}}
      ></div>

      <div id="Buttons" className='absolute right-0 top-0' style={{WebkitAppRegion:"no-drag"}}>
        <button id = "minimize"
         className='px-1 h-7 text-gray-400 text-xl'
         onClick={handleMinimize}>&#128469;</button>
        <button id = "close"
         className='px-1 py-1 h-7 rounded text-gray-400 text-xl'
         onClick={handleClose}>&#x2715;</button>
      </div>
    </div>
  )
}
