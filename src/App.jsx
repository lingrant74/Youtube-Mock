import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
import cardData from "./components/cardData.js"
import Sidebar from "./components/SideBar.jsx"

export default function App() {
  const card = cardData.map((element)=>{
    return (

      <Card 
        key = {element.id}
        thumbnail = {element.thumbnail}
        title = {element.title}
        channel = {element.channel}
        meta = {element.meta}
        topLeftLabel = {element.topLeftLabel}
        bottomRightLabel = {element.bottomRightLabel}
        accountImg = {element.accountImg}
        time = {element.time}
    />

      
    )
  })
  return (
    <>
      <Header/>
      <div className = "cardContainer">
        {card}
      </div>
      <Sidebar />
    </>
  )
}
