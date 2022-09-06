export default function DisplayContador(props) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            backgroundColor: "#444",
            color: "#fff"
        }}>
            {props.valor}
        </div>
    )
}