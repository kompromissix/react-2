import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import putin from '/flnwxqh1.png'
import './novova.css'
import Header from './katalog/header'
import Button from './komponent/button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section>
        </section>
        <section>
          <h3>xhxhxjh</h3>
          <Button onClick={handleClick}>Подход</Button>
          <Button onClick={handleClick}>Доступность</Button>
          <Button onClick={handleClick}>Концентрачия</Button>
        </section>
      </main>
    </>
  )
}

export default App
