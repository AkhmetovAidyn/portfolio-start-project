import React from 'react';
import {Logo} from "../../conmponents/logo/Logo";
import {Container} from "../../conmponents/Container";
import {FlexWrapper} from "../../conmponents/FlexWrapper";
import {DesktopMenu} from "./DesktopMenu/DesktopMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]


export const Header: React.FC = () => {


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

