/*
    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10,</span>
    </div>
*/

export default function list1() {
    return (
        <div>
            {generateList(10)}
        </div>
    )
}

function generateList(value = 10) {
    const list = []
    
    for (let i = 1; i <= value; i ++) {
        list.push(<span>{i},</span>)
    }

    return list
}