import React from 'react';
import {SectionTitle} from "../../../conmponents/SectionTitle";
import {Button} from "../../../conmponents/Button";
import {Container} from "../../../conmponents/Container";
import {S} from './Contacts_Styles'

export const Contact: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

