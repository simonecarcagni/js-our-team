containerDom = document.getElementById('container');

let teamInformation = {
    name : ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"],
    role: ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"],
    img: ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"]
}

for (let i = 0; i < 6; i++){

    containerDom.innerHTML += `<div class="card">
                                ${teamInformation.name[i]}<br>
                                ${teamInformation.role[i]}<br>
                                <img src="./img/${teamInformation.img[i]}">`;
    
}


