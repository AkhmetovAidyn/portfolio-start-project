import React from 'react';
import {Icon} from "../../../../conmponents/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../conmponents/FlexWrapper";
import {theme} from "../../../../syles/Theme";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};
