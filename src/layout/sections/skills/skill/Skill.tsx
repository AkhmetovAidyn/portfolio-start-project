import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";
import {Icon} from "../../../../conmponents/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"code"}/>
            <SkillTitle>html5</SkillTitle>
            <SkillText>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            </SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
`
const SkillTitle = styled.h3`
    
`
const SkillText = styled.p`
    
`