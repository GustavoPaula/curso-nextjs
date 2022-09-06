export default function DisplayContador(props) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            height: "100px",
            width: "100px",
            borderRadius: "50px",
            backgroundColor: "#444",
            color: "#fff"
        }}>
            {props.value}
        </div>
    )
}