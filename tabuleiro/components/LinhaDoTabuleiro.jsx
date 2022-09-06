import CasaDoTabuleiro from "./CasaDoTabuleiro";
import styles from "../styles/tabuleiro.module.css"

export default function LinhaDoTabuleiro(props) {
    return (
        <>
            <div className={styles.linha}>
                <CasaDoTabuleiro branco={props.branco}/>
                <CasaDoTabuleiro branco={!props.branco}/>
                <CasaDoTabuleiro branco={props.branco}/>
                <CasaDoTabuleiro branco={!props.branco}/>
                <CasaDoTabuleiro branco={props.branco}/>
                <CasaDoTabuleiro branco={!props.branco}/>
                <CasaDoTabuleiro branco={props.branco}/>
                <CasaDoTabuleiro branco={!props.branco}/>
            </div>
        </>
    )
}