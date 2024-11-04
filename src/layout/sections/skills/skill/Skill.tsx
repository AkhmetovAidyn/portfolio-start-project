import React from 'react';
import {Icon} from "../../../../conmponents/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../conmponents/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
`

const SkillText = styled.p`
    text-align: center;
`