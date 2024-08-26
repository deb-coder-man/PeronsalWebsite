import { useState, useEffect } from 'react'

import './App.css'
import InitialPage from './InitialPage'

function App() {

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  const mainContent = (
    <div>
      <InitialPage />
    </div>
  )


  return (
    <div>
     {loading ? <div className='LoadingScreen'></div> : mainContent}
    </div>
  )

}

export default App
