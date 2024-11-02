import React from 'react';
import styled from "styled-components";
import {Logo} from "../../conmponents/logo/Logo";
import {Menu} from "../../conmponents/menu/Menu";
import {Container} from "../../conmponents/Container";
import {FlexWrapper} from "../../conmponents/FlexWrapper";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgb(31,31,32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
