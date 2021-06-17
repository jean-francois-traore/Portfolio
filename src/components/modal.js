import React, { useState } from 'react';
import allProjet from './allProjet';
import Slide from '../components/Slide';

function Modal({id, close}) {
    const [state, setState] = useState(false);
    const montre = () => {
        setState(!state)
    }
    let valeur = allProjet[id]
    return(
        <>
            <div className='modal' id='mymodal'>
                <div className='modal-content'
                >
                    <button onClick={close} className='close-modal'>retour</button>
                    {
                        <Slide 
                        key={id} 
                        langage={valeur.langage} 
                        titre={valeur.titre} 
                        infos={valeur.infos} 
                        dataImg={valeur.img}
                        />
                    }
                </div>
            </div>
        </>
    )
}
export default Modal;