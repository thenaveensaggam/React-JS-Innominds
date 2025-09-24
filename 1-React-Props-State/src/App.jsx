import { useState } from 'react'

import './App.css'
import CardNew from './components/Card'
import MyCard from './components/MyCard'

function App() {
  
  const [state, setState] = useState([
    {
      title : "React  JS",
      subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officiis corrupti cumque quia vel, incidunt explicabo mollitia, earum a quaerat modi esse at. In impedit culpa illum! Ducimus, cupiditate laudantium."
    },
    {
      title : "Angular JS",
      subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officiis corrupti cumque quia vel, incidunt explicabo mollitia, earum a quaerat modi esse at. In impedit culpa illum! Ducimus, cupiditate laudantium."
    },
    {
      title : "Vue JS",
      subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officiis corrupti cumque quia vel, incidunt explicabo mollitia, earum a quaerat modi esse at. In impedit culpa illum! Ducimus, cupiditate laudantium."
    }
    
  ]);

  
  return (
    <>
      <div className="flex flex-col align-items-center">
        <MyCard title={state[0].title} subTitle={state[0].subTitle}/>
        <MyCard title={state[1].title} subTitle={state[1].subTitle}/>
        <MyCard title={state[2].title} subTitle={state[2].subTitle}/>
      </div>
    </>
  )
}

export default App
