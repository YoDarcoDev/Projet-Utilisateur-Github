//  https://api.github.com/users/

const APICALL = " https://api.github.com/users/";
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');



// FONCTION ASYNCHRONE QUI VA RECUPERER LES DONNEES DE L'API

async function dataGithub(utilisateur) {

    const reponse = await fetch(`${APICALL}${utilisateur}`);
    const data = await reponse.json();

    // console.log(data)
    // console.log(data.created_at)

    creationCarte(data);
}



// CREATION DE CARTE

function creationCarte(user) {

    dateRecuperee = user.created_at
    dateFormatee = dateRecuperee.split("T")

    
    const carteHTML = `
    <div class="carte">
        <img src="${user.avatar_url}" alt="icone avatar" class="avatar">
        <h2>${user.name}</h2>
        <h3>${user.login}</h3>
        <ul class="cont-infos">
            <li class="bio">Bio : ${user.bio}</li>
            <li class="followers">Followers : ${user.followers}</li>
            <li class="followers">Following : ${user.following}</li>
            <li class="etoiles">Repositories : ${user.public_repos}</li>
            <li class="date creation">Date de création : ${dateFormatee[0]}</li>
        </ul>
    </div>
    `;

    affichage.innerHTML = carteHTML;    
}



// EVENT SE DECLENCHE QUAND ON VALIDE

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inpRecherche.value.length > 0) {
        
        dataGithub(inpRecherche.value);
        inpRecherche.value = "";
    }
})