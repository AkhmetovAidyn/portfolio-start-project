import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from 'react-scroll'

export const GoToBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])
    return (

        <>
            {showBtn && (
                <StyledGoToBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowGoTop"} height={"15"} width={"15"} viewBox={"0 0 16 15"}/>
                </StyledGoToBtn>
            )}
        </>
    );
};

const StyledGoToBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`
