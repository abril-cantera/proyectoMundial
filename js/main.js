
// const btnSelection = document.getElementById('btnSelection');
// btnSelection.addEventListener('click', getSelection);


async function getSelection() {
  const response = await fetch("http://localhost:5000/api/v1/selection");
  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    containerPrincipal.classList.toggle('inactive');
    const div = document.createElement("div");
    const section = document.createElement("section");
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    img.classList.add('imgSelection');


    h2 = data[i].nameEquipment;
    img.src = data[i].image;

    section.append(h2);
    section.append(img);
    div.appendChild(section);
    containerPrincipal.append(div);

  }
  console.log(data);
};









getSelection();
