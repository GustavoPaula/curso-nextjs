export default function SomentePar(props) {
    return (
        <div>
            {props.numero % 2 === 0 ? 
            <span>{props.numero}</span> : null
            }
        </div>
    )
}