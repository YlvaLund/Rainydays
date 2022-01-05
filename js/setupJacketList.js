function setup() {
    const jacketContainer = document.getElementById("jacketContainer");
    console.log(jacketContainer);
    let params = new URLSearchParams(window.location.search);
    let category = params.get("gender");
    console.log(category);
    
    if (raincoats.length > 0){
        for (let r of raincoats){
            if (category){
                if (r.category !== category){
                    continue;
                }
            }
            /*
            <div>
                <a href="/pages/jacketspesific.html"><img src="../images/Jacket list front.jpg" alt="list of jacket" /></a>
                <p>Yellow raincoat</p>
                <p>799kr</p>
            </div>
            */
            let itemContainer = document.createElement("div");
            
            itemContainer.innerHTML = `<a href="/pages/jacketspesific.html?item=${r.id}"><img src="${r.image}" alt="${r.alt}" /><p>${r.name}</p><p>${r.price}</p></a>`;
            jacketContainer.appendChild(itemContainer);
        }
    }
}

setup();