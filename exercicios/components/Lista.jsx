export default function Lista(props) {
    return (
        <>
            <h1>Lista </h1>
            <ul style={{
                listStyle: "none",
                padding: 0
            }}>
                {props.children}
            </ul>
        </>
    )
}