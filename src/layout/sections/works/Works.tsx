import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/social.jpg'
import timerImg from './../../../assets/images/sell.jpg'
import {Container} from "../../../conmponents/Container";

const worksItems = ["All", "landing page", "React", "spa"]



export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"}>
                    <Work title={"Social Network"}
                          src={socialImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work title={"Timer"}
                          src={timerImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`
