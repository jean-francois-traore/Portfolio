import React, { useState } from 'react';
import Title from '../components/Title';
// import emailjs from 'emailjs-com';

function ContactPage(){
    const [nom, setNom] = useState();
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    const [message, setMessage] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
    
        sendFeedback("template_8vj7s5g", {
            nom,
            email,
            telephone,
            message
        });
    };
    
    const sendFeedback = (templateId, variables) => {
    
        window.emailjs
            .send("service_gg62222", templateId, variables)
            .then((res) => {
            console.log('success !');
            setNom("");
            setEmail("");
            setTelephone("");
            setMessage("");
        })
        .catch(
            (err) =>
            console.log(err),
            document.querySelector('.form-message').innerHTML =
                "Une erreur s'est produite, veuillez réessayer.")
    };

    return(
        
            <div className='ContactPage' id='contact'>
                <header className='header'>
                    <Title title={'Contact'} span={' Contact'}/>
                    <div className='contact'>
                        <form>
                            <div className='input'>
                                <input 
                                type='text'
                                placeholder='Votre nom *'
                                name='nom'
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                />
                            </div>
                            <div className='input email-tel'>
                                <div className='email-1'>
                                    <input 
                                    type='email' 
                                    placeholder='Votre email *'
                                    name='email'
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                    />
                                </div>
                                <div className='telephone-1'>
                                    <input 
                                    type='text' 
                                    placeholder='Votre telephone *' 
                                    name='telephone'
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='input'>
                                <textarea 
                                placeholder='Votre message *'
                                name='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className='input'>
                                <input
                                type="button"
                                value="Envoyer"
                                onClick={handleSubmit} />
                            </div>
                            <div className="form-message"></div>
                        </form>
                    </div>
                </header>
            </div>
        
    )
}
export default ContactPage;