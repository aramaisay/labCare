import React from 'react';

import SectionDevider from '../../components/SectionDeviderText';
import Layout from '../../components/Layout';

import { RowFlexDiv, Image } from '../../styles';
import { ContactSecondText ,ContactMainText ,ContactInfo ,ContactIcon ,ContactCont ,ContactWrapper, LeftCont, RightCont} from './style';
import { GREEEN_HEX, WHITE_HEX } from '../../config/constants';


const Contacts = () => {
    const data = [
        {
            title: 'Our company gmail',
            secondary: 'lorem ipsum lorem ipsum',
            src: 'https://www.dropbox.com/s/zqvt8fy0c5ikjx3/mail.png?raw=1',
        },
        {
            title: 'Our company gmail',
            secondary: 'lorem ipsum lorem ipsum',
            src: 'https://www.dropbox.com/s/ykkx2pag99led19/phone-call.png?raw=1',
        },
        {
            title: 'Our company gmail',
            secondary: 'lorem ipsum lorem ipsum',
            src: 'https://www.dropbox.com/s/lef0iyhcv5wfp8o/placeholder.png?raw=1',
        },
    ]
    return (
        <ContactWrapper>
            <Layout background = {WHITE_HEX} >
                <SectionDevider text = 'our locations' backgroundColor = {WHITE_HEX} textColor = {GREEEN_HEX} noMarginBottom = {true} ></SectionDevider>
                <RowFlexDiv justifyContent = 'space-around' alignItems = 'center' >
                    <LeftCont>
                        <iframe 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24384.604513130744!2d45.71711527464609!3d40.18513176709114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f95ede87e6fbb%3A0xeef8e625dfa98442!2sVardenis%2C%20Armenia!5e0!3m2!1sen!2s!4v1616959419059!5m2!1sen!2s" 
                            width="450" 
                            height="450" 
                            style={{
                                border: 0,
                            }} 
                            allowfullscreen="" 
                            loading="lazy"
                        ></iframe>
                    </LeftCont>
                    <RightCont>
                        {data.map(({src, title, secondary}) => {
                            return(
                                <ContactCont key = {title+secondary}>
                                    <ContactIcon><Image noBackground = {true} width='80px' height='80px' src = {src} ></Image></ContactIcon>
                                    <ContactInfo>
                                        <ContactMainText>{title}</ContactMainText>
                                        <ContactSecondText>{secondary}</ContactSecondText>
                                    </ContactInfo>
                                </ContactCont>
                            )
                        })}
                        
                    </RightCont>
                </RowFlexDiv>
            </Layout>
        </ContactWrapper>
    )
}

export default Contacts;