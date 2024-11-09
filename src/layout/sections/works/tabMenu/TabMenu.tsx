import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../syles/Theme";


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

const ListItem = styled.li `
    position: relative;
`

const Link = styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    
    &:before {
        content: '';
        display: inline-block;
        height: 10px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        bottom: 0;
        left: -10px;
        right: -10px;
    }
`