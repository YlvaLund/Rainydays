let params = new URLSearchParams(window.location.search);
let category = params.get("gender");

function setup() {
    const jacketContainer = document.getElementById("jacketContainer");
    
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

/* Setup filter for genders */
let filter_male = document.getElementById("filter_men");
let menSelected = false;
let filter_women = document.getElementById("filter_women");
let womenSelected = false;

switch(category) {
    case 'men':
        filter_male.classList.add("selected");
        menSelected = true;
        break;
    case 'women':
        filter_women.classList.add("selected");
        womenSelected = true;
        break;
    default:
        // none are selected
        break;
}

filter_male.addEventListener("click", () => {
    if(menSelected) {
        window.location = "/pages/listofjackets.html"
    } else {
        window.location = "/pages/listofjackets.html?gender=men"
    }
});

filter_women.addEventListener("click", () => {
    if(womenSelected) {
        window.location = "/pages/listofjackets.html"
    } else {
        window.location = "/pages/listofjackets.html?gender=women"
    }
});

setup();