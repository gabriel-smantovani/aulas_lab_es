var i = 0;

function Convidar() {
    let mensagem = "Venha estudar na Fatec!";

    if(i == 24)
        i = 0;

    let convite = mensagem.substring(0, i);

    i++;

    return (
        <div>
            <h1>{convite}</h1>
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function tick() {
    root.render(<Convidar />);
}

setInterval(tick, 300);