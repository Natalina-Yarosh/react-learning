import { ToDoList } from "./components/ToDoList"
import { useTheme } from "./hooks/service/useTheme"


function App() {

  const {themeColor} = useTheme()

  return (
  
    <ToDoList bgColor={themeColor} />
    
  )
}

export default App
