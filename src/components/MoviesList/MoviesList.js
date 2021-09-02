import "./MoviesList.css";

export default function MoviesList() {
    const list = [1,2,3,4,5,6,7,8,9,10]
    console.log("OPA")
    return (
        <section className = "movies-list">
            <p>Selecione o filme</p>
            <div>
              {list.map( (element) => <Movie /> )}
            </div>
        </section>
    );
}

function Movie() {
    return (
        <img src="temp/Holmes.png" />
    );
}