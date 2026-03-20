import { useState } from 'react'
import DashboardMain from './dashboard/Dashboard-Main/dashboardMain'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-900 min-h-screen'>
        <DashboardMain />
      </div>
    </>
  )
}

export default App
