import React, {useState, useEffect}  from "react"

function Reloj({hora}){
  return(
    <h2>{hora}</h2>
  )
}

function RelojReact() {

  const [hora, setHora] = useState( new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    let contador;
    visible ?
    (contador =  setInterval(()=>{
      setHora(new Date().toLocaleTimeString())
    }, 1000))
    : clearInterval(contador)

    return () => {
      clearInterval(contador)
    }
  }, [visible])

  return (
    <>
    <h2>Reloj en React </h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={()=>setVisible(true)}>Mostrar</button>
      <button onClick={()=>setVisible(false)}>Ocultar</button>
    </>
  )
}

export default RelojReact;