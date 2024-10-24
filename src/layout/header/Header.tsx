import React from 'react';
import styled from "styled-components";
import {Logo} from "../../conmponents/logo/Logo";
import {Menu} from "../../conmponents/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: green;
`
