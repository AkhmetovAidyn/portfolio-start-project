import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Icon} from "../../../conmponents/icon/Icon";
import {Slider} from "../../../conmponents/slider/Slider";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../conmponents/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    background-color: #5546d8;
    min-height: 50vh;

    ${IconWrapper} {
        margin: 28px 0 72px;
    }
`

