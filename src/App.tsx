import { useEffect, useState } from "react"
import { ToDoList } from "./components/ToDoList"


function App() {

  const [themeColor, setThemeColor] = useState('#333')
  const urlParams = new URLSearchParams(window.location.search)


  useEffect(() => {
    if(urlParams.get('theme') === 'dark') {
      setThemeColor('#333')
    }
    else if(urlParams.get('theme') === 'light') {
      setThemeColor('ghostwhite')
    }
  }, [])


  useEffect(() => {
    document.body.className = 'theme-' + themeColor
  }, [themeColor])

  return (
  
    <ToDoList bgColor={themeColor} />
    
  )
}

export default App
