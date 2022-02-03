import react from 'react';
import { useEffect, useState } from 'react'
import './App.css'

function Page1() {
  return (
    <react.Fragment>
      <div className="photo"/>
      <div className="text">
        <h1>Angelus</h1>
        <h2>Programador e designer.</h2>
      </div> 
    </react.Fragment>
  )
}

function Page2() {
  return (
    <div className='about'>
      <div className="profile">
        <div className="profile--text">
          <h2>Angelus</h2>
          <h3>Programador e designer.</h3>
        </div>
        <div className="social-medias">
          <div/>
          <div/>
          <div/>
        </div>
      </div> 
      <section>
        <h1>Sobre mim</h1>
        <h2>
          Tenho 4 anos de experiência em programação 
          e design, e tenho certeza que posso ajudar
          sua empresa alcançar seus objetivos!
        </h2>
      </section>
      
      <aside>
        <div>
          <div/>
          <h2>Telefone</h2>
        </div>
        <h3>(81) 99564-0616</h3>
        
        <div>
          <div/>
          <h2>Email</h2>
        </div>
        <h3>angelusrt@gmail.com</h3>
      </aside>
    </div>
  )
}

function App() {
  const [page, setPage] = useState(<Page1/>)
  const [heigth, setHeigth] = useState(window.innerHeight)
  
  useEffect(() => {
    setHeigth(window.innerHeight)
  },[window.innerHeight])

  return (
    <div className="App" style={{height: `${heigth}px`}}>
      {page}
      <nav className="Navbar">
        <button onClick={() => setPage(<Page1/>)}/>
        <button onClick={() => setPage(<Page2/>)}/>
        <button onClick={() => setPage(<Page2/>)}/>
        <button onClick={() => setPage(<Page2/>)}/>
      </nav>
    </div>
  )
}

export default App
