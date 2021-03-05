// import React from 'react'

// import { ExampleComponent } from '@jyothi/pg-bar-react'
// import '@jyothi/pg-bar-react/dist/index.css'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

// export default App
import React, { useState, useEffect } from 'react'

import ProgressBar from '@jyothi/pg-bar-react'
import '@jyothi/pg-bar-react/dist/index.css'

const App = () => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000)
  }, [])

  return (
    <div className='App'>
      <ProgressBar bgcolor={'#6a1b9a'} completed={completed} />
    </div>
  )
}

export default App
