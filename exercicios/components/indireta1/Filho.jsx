export default function Filho(props) {
    return (
        <div>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={
                () => props.funcao('Passei no ENEM', 'Uhuuuuu', 10)}>
                    Falar com o Pai #02
            </button>
        </div>
    )
}