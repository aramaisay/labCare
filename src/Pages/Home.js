import React from 'react';

// Components
import Branches from '../Components/Branches';
import ProjectsList from '../Components/ProjectsList';
import SectionDeviderText from '../Components/SectionDeviderText';
import SectionDeviderImage from '../Components/SectionDeviderImage';
import PartnerList from '../Components/PartnerList';

// Css
import '../Css/Pages/Home.css'

const Home = () => {

    return(
        <div className = 'HomeMain' >
            <Branches/>
            <SectionDeviderText text = {'Our projects'} color = {'orange'} />
            <ProjectsList/>
            <SectionDeviderImage />
            <SectionDeviderText text =  {'Our partners'} color = {'green'} />
            <PartnerList timeInterval = {5000}/>
        </div>
    )
}

export default Home;