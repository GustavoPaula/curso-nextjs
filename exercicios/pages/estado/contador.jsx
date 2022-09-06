import { useState } from "react"
import DisplayContador from "../../components/DisplayContador"
import styles from "./contador.module.css"

export default function contador() {
    const [valor, setValor] = useState(0)

    const decrement = () => setValor(valor - 1)

    const increment = () => setValor(valor + 1)

    return (
        <div style={{
            backgroundColor: "#999",
            height: "100vh",
        }}>
            <div id={styles.container}>
                <h1>Contador</h1>
                <DisplayContador valor={valor}/>
            </div>             
            <div id={styles.containerButton}>
                <button className={styles.tamanhoButton} onClick={decrement}>-</button>
                <button className={styles.tamanhoButton} onClick={increment}>+</button>
            </div>
        </div>
    )
}