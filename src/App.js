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

function Page3() {
  return (
    <section className='offer'>
      <h1>Posso oferecer</h1>
      <button>
        <h2>Sites Dinâmicos</h2>
        <h3>React.js</h3>
      </button>
      <button>
        <h2>Apps responsivos</h2>
        <h3>React Native e Expo</h3>
      </button>
      <button>
        <h2>Layouts UI/UX engajadores</h2>
        <h3>Figma e Affinity Designer</h3>
      </button>
      <button>
        <h2>Servidores e banco de dados</h2>
        <h3>Node.js, express.js e mongoDB</h3>
      </button>
    </section>
  )
}

function Page4() {
  return (
    <section className='projects'>
      <div className='title'>
        <h1>Projetos</h1>
      </div>
      <section>
        <div>
          <h2>Lorem Ipsum</h2>
        </div>
        <div>
          <h2>Lorem Ipsum</h2>
        </div>
        <div>
          <h2>Lorem Ipsum</h2>
        </div>
      </section>
    </section>
  )
}

function App() {
  const [page, setPage] = useState(<Page1/>)
  const [heigth, setHeigth] = useState(window.innerHeight)
  
  useEffect(() => {
    setHeigth(window.innerHeight)
  },[])
  
  return (
    <div className="App" style={{
      height: `${heigth}px`,
    }}>
      {page}
      <nav>
        <button onClick={() => setPage(<Page1/>)}/>
        <button onClick={() => setPage(<Page2/>)}/>
        <button onClick={() => setPage(<Page3/>)}/>
        <button onClick={() => setPage(<Page4/>)}/>
      </nav>
    </div>
  )
}

export default App
