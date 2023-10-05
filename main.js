let main = document.getElementById("main")


let rickAPI = fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {


      let card = document.createElement("div")
      card.classList.add ("flip-card")

    

      let divgroupinfo = document.createElement("div")
      divgroupinfo.classList.add ("divgroupinfo")

      let infocard = document.createElement("div")
      infocard.classList.add ("flip-card-inner")

      let infobackcard = document.createElement("div")
      infobackcard.classList.add ("flip-card-back")

      let infofrontcard = document.createElement("div")
      infofrontcard.classList.add ("flip-card-front")
      
      let title = document.createElement("h2")
      title.classList.add ("card-container")
      title.innerText = character.name

      let status = document.createElement("h3")
      status.classList.add ("card-container")
      status.innerText = "STATUS:"+character.status

      let specie = document.createElement("h3")
      specie.classList.add ("card-container")
      specie.innerText = "SPECIE: "+character.species

      let gender = document.createElement("h3")
      gender.classList.add ("card-container")
      gender.innerText = "GENDER: "+character.gender

      let location = document.createElement("h4")
      location.classList.add ("location")
      location.innerText = "LOCATION: "+character.location.name

      let origin = document.createElement("h4")
      origin.classList.add ("origin")
      origin.innerText = "ORIGIN: "+character.origin.name

      let imgpic = document.createElement("img")
      imgpic.classList.add ("imgpic")
      imgpic.src = character.image

      let imgback = document.createElement("img")
      imgback.classList.add ("imgback")
      imgback.src = "./rick.jpg"

      
      
      infobackcard.appendChild(origin)
      infobackcard.appendChild(location)
      infobackcard.appendChild(imgback)
      

      divgroupinfo.appendChild(title)
      divgroupinfo.appendChild(status)
      divgroupinfo.appendChild(specie)
      divgroupinfo.appendChild(gender)

      infofrontcard.appendChild(divgroupinfo)
      infofrontcard.appendChild(imgpic)
      
      infocard.appendChild(infobackcard)
      infocard.appendChild(infofrontcard)
      

      card.appendChild(infocard)

      main.appendChild(card)

    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
      
