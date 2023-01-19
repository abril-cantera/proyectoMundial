async function datos() {
  const response = await fetch("http://localhost:3000/api/v1/players");
  let data = await response.json();





  for (let i = 0; i < data.length; i++) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const div = document.createElement("div");
    const section = document.createElement("section");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");


    h2 = data[i].name_player;
    h3 = data[i].last_name_player;

    section.append(h2);
    section.append(h3);
    div.appendChild(section);
    containerPrincipal.append(div);

  }





  console.log(data);
};


datos();
