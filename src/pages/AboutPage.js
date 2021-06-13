import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
function AboutPage(){
    return(
        <div className="about-page" id='about'>
            <Title title={'A propos de moi'} span={' A propos de moi'}/>
            <ImageSection />
            <Title title={'Compétences'} span={'Compétences'}/>
            <div className='Skills-container'>
                <SkillsSection />
            </div>
        </div>
    )
}
export default AboutPage;