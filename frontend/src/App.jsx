import { useState } from "react"
import InputBox from "./components/InputBox.component"
import Registration from "./pages/Registration.page"
import Users from "./pages/Users.page"
import "./App.css"


function App() {
  
  const [page, setPage] = useState(false);

  return (
    <div>

      {
        page
        ?
        <Users page={page} setPage={setPage} />
        :
        <Registration page={page} setPage={setPage} />
      }

    </div>
  )
}

export default App
