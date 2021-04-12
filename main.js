(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",e=async e=>{const a=e?`${n}${e}`:n;try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error",n)}},a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=async()=>{const n=await a();return`\n  <section class="About">\n    <p>Personajes de Rick y Morty:</p>\n  </section>\n  <div class="Characters">\n    ${(await e(n)).results.map((n=>`\n    <article class="Character-item">\n      <a href="#/${n.id}/">\n        <img class="Character-img" src="${n.image}" alt="${n.name}">\n        <h2>${n.name}</h2>\n      </a>\n    </article>\n    `)).join("")}\n  </div>\n  `},i=()=>'\n        <div class="Error404">\n            <h2>Error404</h2>\n        </div>\n    ',s={"/":t,"/:id":async()=>{const n=a(),t=await e(n);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${t.image}" alt="{character.name}">\n                <h2>${t.name}</h2>\n            </article>\n\n            <article class="Characters-card">\n                <h3>Episodios: <span>${t.episode.length}</span></h3>\n                <h3>Status: <span>${t.status}</span></h3>\n                <h3>Especies: <span>${t.species}</span></h3>\n                <h3>Gender: <span>${t.gender}</span></h3>\n                <h3>Origen:<span>${t.origin.name}</span></h3>\n                <h3>Ultima Ubicacion: <span>${t.location.name}</span></h3>\n            </article>\n        </div>\n    `},"/contact":"Contact","/:pages":t,"/about":async()=>'\n        <section class="About">\n            <span>Datos extraidos de <a href="https://rickandmortyapi.com/">Rick and Morty API</a></span>\n            <h1>\n                Esta es una <a target="_blank" href="https://es.wikipedia.org/wiki/Single-page_application">\n                "Single-page application"</a> desarrollada con la ayuda de node.js, webpack e integrado con \n                Travis.\n            </h1>\n            <section>\n                <h1>\n                    <a href="https://github.com/DrDigett/SPA-MortyTienesKvenir">Repositorio :D</a>\n                </h1>\n            </section>\n        </section>\n    '},r=async()=>{const n=document.getElementById("header"),t=document.getElementById("content"),r=document.getElementById("footer");n.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1>\n                    <a href="#/?page=1/">\n                        MortyTienesKvenir\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about/">\n                    About\n                </a>\n            </div>\n        </div>\n    ';let c=a(),o=await(n=>{if("about"!=n){if("/"===n)return n;if(n.length<=3)return"/:id";if(n.includes("page"))return"/:pages"}return console.log("se fue por route: "+n),`/${n}`})(c),d=s[o]?s[o]:i;t.innerHTML=await d(),r.innerHTML=await(async()=>{const n=await e();let a=[];for(let e=1;e<=n.info.pages;e++)a.push(e);let t=0;return`\n    <div class="Footer-pages">\n        <h4>Pages</h4>\n        <div>\n            ${a.map((()=>`<a href="#/?page=${++t}/">${t}</a>`)).join("")}\n        </div>\n    </div>\n    `})();const h=document.querySelector('.theme-switch input[type="checkbox"]');var l=document.getElementById("texto-toogle");l.innerHTML="Light Mode",h.addEventListener("change",(function(n){n.target.checked?(document.documentElement.setAttribute("data-theme","light"),l.innerHTML="Dark Mode"):(document.documentElement.setAttribute("data-theme","dark"),l.innerHTML="Light Mode")}),!1)};window.addEventListener("load",r),window.addEventListener("hashchange",r)})();