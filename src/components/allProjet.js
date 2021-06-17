import { pageAcceuilSnap,
    pageInscriptionSnap ,
    pageconnexionSnap,
    destinateurSnap ,
    pasDeSnapRecuSnap,
    unSnapPritSnap,
    pageHomeTwitter,
    pageInscriptionTwitter,
    pageConnexionTwitter,
    pageProfilTwitter,
    pageModeNuitTwitter,
    envoyerUnTwitteTwitter,
    twitterEnvoyerTwitter
    } from '../img';



const array = [
    {
        langage: 'PHP, HTML & CSS, JS',
        titre: 'Site similaire au site Twitter.',
        infos: 'Le but de ce projet est de créer un réseau social pour les étudiants de votre promotion, qui aura les mêmes fonctionnalités que twitter. Il devra être le plus ressemblant possible en terme de fonctionnalités par rapport au site “Twitter”',
        img: [pageHomeTwitter,
            pageInscriptionTwitter,
            pageConnexionTwitter,
            pageProfilTwitter,
            pageModeNuitTwitter,
            envoyerUnTwitteTwitter,
            twitterEnvoyerTwitter]
        },
        {
            langage: 'REACT mobile first, REACT Native',
            titre: "Application similaire à l'application Snapchat.",
            infos: 'Application mobile qui envoie des images à vos amis pour un certain laps detemps, puis qui seront supprimées par la suite.',
            img: [pageAcceuilSnap,
                pageInscriptionSnap,
                pageconnexionSnap,
                unSnapPritSnap,
                destinateurSnap,
                pasDeSnapRecuSnap]
        }
]

export default array;