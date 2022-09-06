import Filho from "./Filho";

export default function Pai() {

    function falarCom(param1, param2, param3) {
        console.log(param1, param2, param3)
    }

    return (
        <div>
            <Filho funcao={falarCom}/>
        </div>
    )
}