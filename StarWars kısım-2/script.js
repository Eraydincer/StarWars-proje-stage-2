
    const characters = [
      {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
      },
      {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
      },
      {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
      },
      {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
      },
      {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
      },
      {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
      },
      {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
      },
      {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
      },
      {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
      },
      {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
      },
      {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
      },
      {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
      },
      {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
      },
      {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
      },
      {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
      },
      {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
      }
    ];
 
    let homeworldsRaw = characters.map(character => character.homeworld || "other");
const homeworldsUnique = [...new Set(homeworldsRaw)];

const homeworldsLowercase = homeworldsUnique.map(homeworld => homeworld.toLowerCase());

const homeworlds = homeworldsLowercase;

const radioInputsContainer = document.getElementById("radioInputsContainer");

homeworlds.forEach(homeworld => {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "homeworld";
    input.id = `homeworld-${homeworld}`;
    input.value = homeworld;
    input.addEventListener("change", () => renderCharacters());

    const label = document.createElement("label");
    label.htmlFor = `homeworld-${homeworld}`;
    label.textContent = homeworld;

    radioInputsContainer.appendChild(input);
    radioInputsContainer.appendChild(label);
});




 function renderCharacters() {
       const selectedHomeworld = document.querySelector('input[name="homeworld"]:checked').value;
     const showInfo = document.getElementById("showInfo");
     showInfo.innerHTML = "";

     characters.forEach(character => {
         if (character.homeworld.toLowerCase() === selectedHomeworld) {
             const card = document.createElement("showInfo");
             
             card.innerHTML = `
             <div class="col-lg-3 col-md-6 col-sm-12 card ">
                          <img src="${character.pic}">
                          <h2>${character.name}</h2>
                           <p>Homeworld:${character.homeworld||"Unknown"}</p>
                          </div>
             `;
             showInfo.appendChild(card);
         }
     });
 }
  
    
   const showCharactersButton= document.getElementById("showCharacters");
   showCharactersButton.style.backgroundColor="#a9e984";
//    let renderStatus= true;
//  function renderCharacters(){
//       const showInfo = document.getElementById("showInfo")
//       if(renderStatus){
//          showInfo.innerHTML =characters.map(function(character){

//               return(
//                  `
//              <div class="col-lg-3 col-md-6 col-sm-12 card">
//              <img src="${character.pic}">
//              <h2>${character.name}</h2>
//               <p>Homeworld:${character.homeworld||"Unknown"}</p>
//              </div>
//              `)
            
            
//          }).join("")
//           showCharactersButton.textContent="karakterleri gizle";
//           showCharactersButton.style.backgroundColor="#e293ab";
        
//       }else{
//          showInfo.innerHTML="";
//           showCharactersButton.textContent="karakterleri göster"
//           showCharactersButton.style.backgroundColor="#a9e984";

//      }
//      renderStatus = !renderStatus;
//  }
