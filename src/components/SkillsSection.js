import React from 'react';
function SkillsSection({skill, progress, width}){
    return(
        <div className="SkillsSection">
            <>
                <img src="https://img.icons8.com/color/48/26e07f/html-5--v1.png"/>
            </>
            <div>
                <img src="https://img.icons8.com/dusk/64/26e07f/css3.png"/>
            </div>
            <div>
                <img src="https://img.icons8.com/dusk/64/26e07f/php-logo.png"/>
            </div>
            <div>
                <img src="https://img.icons8.com/fluent/64/26e07f/mysql-logo.png"/>
            </div>
            <div>
                <img src="https://img.icons8.com/color/48/26e07f/javascript.png"/>
            </div>
            <div>
                <img src="https://img.icons8.com/nolan/64/react-native.png"/>
            </div>
            <div>
                <img src="https://img.icons8.com/color/48/26e07f/mongodb.png"/>
            </div>
        </div>
    )
}
export default SkillsSection;