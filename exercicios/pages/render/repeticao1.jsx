export default function repeticao1() {
    const lista = ['João', 'Maria', 'Ana', 'Bia', 'Carlos', 'Daniel']

    function renderizarLista() {
        return lista.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <div>
            {renderizarLista()}
        </div>
    )
}