import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="João" familia={props.familia}/>
            <Filho nome="Pedro" familia={props.familia}/>
            <Filho {...props} />
        </div>
    )
}