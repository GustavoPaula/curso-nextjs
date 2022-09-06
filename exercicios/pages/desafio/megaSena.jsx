import { useState } from "react"
import DisplayMegaSena from "./DisplayMegaSena"
import { mega } from "./mega"

export default function megaSena() {

    const [valor, setValor] = useState("")
    const [qtde, setQtde] = useState(mega(qtde))

    function renderNumbers() {
        const array = mega(qtde)
        return array.map(n => <DisplayMegaSena key={n} valor={n}/>)
    }

    return (
        <div style={{
            display: "flex", 
            flexDirection:"column",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <div style={{display: "flex"}}>
                {renderNumbers()}
            </div>
            <input type="number" value={qtde} onChange={e => setQtde(e.target.value)}/>
            <button onClick={() => setValor(mega(qtde))}>GerarAleatorio</button>
        </div>
    )
}