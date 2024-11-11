import React from 'react';
import styled from "styled-components";
import {Icon} from "../../conmponents/icon/Icon";
import {FlexWrapper} from "../../conmponents/FlexWrapper";
import {theme} from "../../syles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Svetlana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>
                    © 2023 Svetlana Dyablo, All Rights Reserved.
                </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.14em;
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`