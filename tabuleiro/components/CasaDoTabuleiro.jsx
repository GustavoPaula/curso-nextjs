export default function CasaDoTabuleiro(props) {
    return (
        <>
            <div style={{
                height: "100px",
                width: "100px",
                backgroundColor: props.branco ? "#fff" : "#000"
            }}></div>
        </>
    )
}