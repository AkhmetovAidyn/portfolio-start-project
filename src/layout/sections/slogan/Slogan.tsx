import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Button} from "../../../conmponents/Button";
import {Container} from "../../../conmponents/Container";
import {FlexWrapper} from "../../../conmponents/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #6fbda4;
`
