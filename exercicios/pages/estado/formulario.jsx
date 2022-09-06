import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("")

    const alterarValor = () => setValor(valor + '!')

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>{valor}</span>
            <input type="text" value={valor} 
                onChange={event => setValor(event.target.value)}/>
            <button onClick={alterarValor}>Alterar</button>
        </div>
    )
}