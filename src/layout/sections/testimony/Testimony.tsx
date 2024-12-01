import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Icon} from "../../../conmponents/icon/Icon";
import {Slider} from "../../../conmponents/slider/Slider";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";
import {Container} from "../../../conmponents/Container";
import {S} from '../skills/Skills_Styles'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    background-color: #5546d8;
    min-height: 50vh;
    position: relative;

    ${S.IconWrapper} {
        margin: 28px 0 72px;
    }
`

