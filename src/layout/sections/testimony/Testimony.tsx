import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Icon} from "../../../conmponents/icon/Icon";
import {Slider} from "../../../conmponents/slider/Slider";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    background-color: #5546d8;
    min-height: 50vh;
    
    ${IconWrapper} {
        margin: 40px 0 72px;
    }
`