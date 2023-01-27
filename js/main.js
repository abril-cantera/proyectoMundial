
// const btnSelection = document.getElementById('btnSelection');
// btnSelection.addEventListener('click', getSelection);


async function getSelection() {
  const response = await fetch("http://localhost:5000/api/v1/selection");
  let data = await response.json();

  const clickSelection = document.getElementById('clickSelection')
  clickSelection.addEventListener('click', openContainerSelection)
  function openContainerSelection() {
    console.log('funciona')
  }

  for (let i = 0; i < data.length; i++) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    containerPrincipal.classList.toggle('inactive');
    const divSelection = document.createElement("div");
    const sectionSelection = document.createElement("section");
    sectionSelection.classList.add('sectionSelection')
    let h2 = document.createElement("h2");
    let img = document.createElement("img");
    img.classList.add('imgSelection');

    h2 = data[i].nameEquipment;
    img.src = data[i].image;


    sectionSelection.append(h2);
    sectionSelection.append(img);
    divSelection.appendChild(sectionSelection);
    containerPrincipal.append(divSelection);

  }
  console.log(data);
};









getSelection();
