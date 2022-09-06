import { useState } from "react"
import style from "./mouse.module.css"

export default function mouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function alterarValor(event) {
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div id={style.div} onMouseMove={alterarValor}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}