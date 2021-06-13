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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus, purus quis volutpat feugiat, est ex faucibus eros, in suscipit lacus augue a mi. Nulla congue ipsum urna, eget rutrum ligula congue eget. Proin sollicitudin, lorem scelerisque tincidunt mollis, dolor orci vehicula tellus, id porttitor eros ante dapibus nibh. Nunc erat odio, pulvinar ut laoreet ut, lobortis eget nibh. Sed vehicula, enim vitae                </p>
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