import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Menu} from "../../../conmponents/menu/Menu";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.jpg'
import timerImg from './../../../assets/images/sell.jpg'

const worksItems = ["All", "landing page", "React", "spa"]



export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #afafe4;
`
