import {phones} from "../sources/sources.js"

const root = document.getElementById("root");
const main = document.createElement("div");
const h1 = document.createElement("h1");

main.className = "container";

for (let i of phones) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const desc = document.createElement("p");

    div.className = "phone";

    img.src = `images/${i.brand}/${i.image}`;
    desc.innerHTML = `<small>N.</small><strong>${i.id}</strong> brand: <span>"${i.brand}"</span> model: <span>"${i.model}"</span>`
    div.append(img, desc);
    main.appendChild(div)
}
h1.innerText = "Mobile store";


root.append(h1, main);
document.body.append(root);


