import React from 'react';
import {Logo} from "../../conmponents/logo/Logo";
import {Container} from "../../conmponents/Container";
import {FlexWrapper} from "../../conmponents/FlexWrapper";
import {DesktopMenu} from "./headerMenu/DesktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu />
                                        : <DesktopMenu />}

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

