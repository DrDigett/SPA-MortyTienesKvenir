const Header = () =>{
    const view = /*html*/ `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="#/?page=1/">
                        MortyTienesKvenir
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header