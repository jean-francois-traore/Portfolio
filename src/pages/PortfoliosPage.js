import React, { useState } from 'react';
import Title from '../components/Title';
import portfolios from '../components/allportfolios';
import Modal from '../components/modal';

function PortfoliosPage(){
    const [state, setState] = useState(false);
    const [page, setPage] = useState(0);
    const montre = () => {
        setState(!state)
    }
    
    return(
        <div className='PortfoliosPage' id='portfolios'>
            <div className='Title'>
            <Title title={'Portfolios'} span={' portfolios'}/>
            </div>
            <div className='portfolios-data'>
                <div className='portfolis'>
                    {
                        portfolios.map((item, index) => {
                            return <div className='portfolio' key={portfolios.id}>
                                <div onClick={()=>{setPage(index); montre()}} className='image-data'>
                                    <img src={item.image} alt=''/>
                                    <p>voir.....</p>
                                </div>
                                <h5>
                                    {item.title}
                                </h5>
                                <p>{item.infos}</p>
                            </div>
                        })
                    }
                </div>
                    {
                        state && (
                            <Modal close={montre} id={page}/>
                        )
                    }
            </div>
        </div>
    )
}
export default PortfoliosPage;