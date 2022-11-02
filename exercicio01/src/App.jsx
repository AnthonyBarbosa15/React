import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [contador, setContador] = useState(0)
  const [mlCopo, setMlCopo] = useState(250)
  const [metaDiaria, setMetaDiaria] = useState(2000)
  const [total, setTotal] = useState(0)
  const [msg, setMsg] = useState("")
  const [data, setData] = useState("")

  
  function clique() {
    if (mlCopo > 0) {
      setContador(prevState => prevState + 1)
      setTotal(mlCopo * (contador + 1))
      setData(prevState => prevState + new Date().toLocaleString())
      if ((mlCopo * (contador + 1)) >= metaDiaria) {
        setMsg("meta Cumprida")
      }
    } else {
      setMsg(alert("não foi possivel fazer multiplicação por 0 ou menor"))
    }
  }

  function reset() {
    setContador(0)
    setTotal(0)
    setMlCopo(prevState => prevState)
    setMsg(" ")
    setData(" ")
  }


  return (
    <>
    
    <div className='meta'>
      <h1 className='Titulo'>Meta Diaria: {metaDiaria + 'mls'}</h1>
      <input className='metaDiaria'
        type='number'
        placeholder="Digite a sua meta de hoje"
        onChange={e => setMetaDiaria(e.target.value)} />
    </div>
    
    <div className='MlPorCopo'>
        <h2>Capacidade em Mls de seu copo: {mlCopo + 'mls'}</h2>
        <input className='capacidade' type='number'
          placeholder="Digite a capacidade em mls"
          onChange={e => setMlCopo(e.target.value)} />
      </div>

      <div className='butao'>
        <button onClick={clique}> Add Copo</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h2>Copos consumidos: {contador}</h2>
        <h3>Agua Consumida {total} ml </h3>
        <h2 className="msg">{msg}</h2>
        <h5>Data: {data}</h5>
      </div>

    </>



  )
}
export default App
