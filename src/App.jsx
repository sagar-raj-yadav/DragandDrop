import React from 'react'
import DragDrop from './DragDrop';

const App = () => {
  const initialdata={
   TODO:[
    "design ui management",
    "setup project repo",
    "setup backend"
   ],
   Inprogress:[
    "setop frontend",
    "call me sagar",
   ],
   Completed:[
    "setup CI/CD",
    "conduct code review",
    "add github"
   ]
  }
  return (
    <>
      <DragDrop initialdata={initialdata}/>
    </>
  )
}

export default App