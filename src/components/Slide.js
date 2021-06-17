import React, { useState } from "react";


function SlydeProjetSnap({langage, titre, infos, dataImg}) {
    const nombreDeImage = dataImg.length;
    const [compteur, setCompteur] = useState(0);
    
    function slydeSuivant() {
        if (compteur < nombreDeImage - 1) {
            setCompteur(compteur + 1);
        } else {
            setCompteur(0);
        }
    }
    function slydePrecedent() {
        if (compteur == 0) {
            setCompteur (nombreDeImage -1);
        } else {
            setCompteur( compteur -1);
        }
    }
    
    return (
        <div className="carouselContainer">
            <div className="carousel">
                {
                    dataImg.map((valeur, index) => {
                        return <img key={index} src={valeur} className={compteur == index ? "active" : null}/>
                    })
                }
            </div>
            <div className="cont-btn">
                <div className="btn-nav left" onClick={slydePrecedent}>🠔</div>
                <div className="btn-nav right" onClick={slydeSuivant}>🠖</div>
            </div>
            <div className='snap'>
                <div className='snap-infos-left'>
                    <p>LANGAGE</p>
                    <p>TITRE</p>
                    <p>INFOS</p>
                    <p></p>
                </div>
                <div className='snap-infos-right'>
                    <p> {langage} </p>
                    <p> {titre} </p>
                    <p> {infos} </p>
                </div>
            </div>
        </div>
        );
    }
    
    export default SlydeProjetSnap;