import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";
import {Icon} from "../../../conmponents/icon/Icon";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                My Skills
            </SectionTitle>
            <FlexWrapper>
                <Skill/>
                <Skill/>
                <Skill/>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    
`