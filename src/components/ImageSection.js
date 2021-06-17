import React from 'react';
import avatar from '../img/image_72192707.JPG';
function ImageSection(){
    return(
        <div className="ImageSection">
            <div className="img">
                <img src={avatar} alt="" />
            </div>
            <div className="avatar-info">
                <h4><span>Jean-françois</span></h4>
                <p className='avatar-text-1'>
                Je suis Jean-François Traoré, en formation à la Web@cademie by EPITECH. Une formation pas 
comme les autres : pas de cours, une pédagogie par projets, un apprentissage de l'autonomie et 
de la collaboration.
En un peu moins d'un an, nous avons développé 12 projets (individuellement ou en groupe) : d'un site similaire à Twitter à un framework MVC en passant par un jeu de stratégie. 

Les langages appris au fil de ses projets : HTML, CSS, JS, NODE JS, REACT, REACT NATIVE, LARAVEL, SYMFONY......</p>
                <div className='avatar-details'>
                    <div className='left-section'>
                        <p>Nom</p>
                        <p>Age</p>
                        <p>Nationalité</p>
                        <p>Langages</p>
                        <p>Adresse</p>
                        <p>Pays</p>
                    </div>
                    <div className='right-section'>
                        <p>: TAORE jean-françois</p>
                        <p>: 22</p>
                        <p>: Ivoirienne</p>
                        <p>: Francais, Anglais(.........)</p>
                        <p>: 33 - 35 rue cartault 92800, Puteaux</p>
                        <p>: France</p>
                    </div>
                </div>
                <button className='btn'><a href='../img/CV - Jean-François TRAORE.pdf'></a>Telecharger CV</button>
            </div>
        </div>
    )
}
export default ImageSection;