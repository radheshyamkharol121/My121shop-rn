import React from "react"

const Header = () => {
  return (
    <header style={{
      background: "#34495e",
      color: "white",
      padding: "1rem",
      textAlign: "center"
    }}>
      <h1>My121Shop</h1>
      <nav>
        <span style={{margin: "0 10px"}}>Home</span>
        <span style={{margin: "0 10px"}}>Products</span>
        <span style={{margin: "0 10px"}}>About</span>
        <span style={{margin: "0 10px"}}>Contact</span>
      </nav>
    </header>
  )
}

export default Header
