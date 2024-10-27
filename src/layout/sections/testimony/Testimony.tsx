import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Icon} from "../../../conmponents/icon/Icon";
import {Slider} from "../../../conmponents/slider/Slider";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`
    background-color: #5546d8;
    min-height: 50vh;
`