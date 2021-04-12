const About = async () =>{
    const view = /*html*/`
        <section class="About">
            <span>Datos extraidos de <a href="https://rickandmortyapi.com/">Rick and Morty API</a></span>
            <h1>
                Esta es una <a target="_blank" href="https://es.wikipedia.org/wiki/Single-page_application">
                "Single-page application"</a> desarrollada con la ayuda de node.js, webpack e integrado con 
                Travis.
            </h1>
            <section>
                <h1>
                    <a href="https://github.com/DrDigett/SPA-MortyTienesKvenir">Repositorio :D</a>
                </h1>
            </section>
        </section>
    `;
    return view;
}

export default About;