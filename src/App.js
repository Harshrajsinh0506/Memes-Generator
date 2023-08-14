import React from "react"
import Header from "./components/header"
import Meme from "./components/meme"
import "./App.css"

export default function App() {
    return (
        <div className="main-app">
            <Header />
            <Meme />
        </div>
    )
}
