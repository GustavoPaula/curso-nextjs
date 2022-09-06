import LinhaDoTabuleiro from "./LinhaDoTabuleiro";

export default function Tabuleiro() {
    return (
        <div>
            <LinhaDoTabuleiro branco/>
            <LinhaDoTabuleiro preto/>
            <LinhaDoTabuleiro branco/>
            <LinhaDoTabuleiro preto/>
            <LinhaDoTabuleiro branco/>
            <LinhaDoTabuleiro preto/>
            <LinhaDoTabuleiro branco/>
            <LinhaDoTabuleiro preto/>
        </div>
    )
}