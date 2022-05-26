import styled from 'styled-components';
import { Nav_Link } from '../../../pages/navigation/navigation.styles';

export const Page_1_container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 340px;
    margin: 30px auto;
    background: linear-gradient(to right, #009DAE, #C2FFF9, #009DAE);
    border: 6px double #603601;
`;


export const Creativity_Link = styled(Nav_Link)`
    background: linear-gradient(to top, #8D8DAA, #D3ECA7, #8D8DAA);
    color: purple;
    width: 90px;
    height: 30px;
    font-family: 'Pacifico', cursive;
    letter-spacing: 2.5px;

    &:hover {
        background: linear-gradient(to right, #D3ECA7, #8D8DAA, #D3ECA7);
    }
`;

export const Logic_Link = styled(Creativity_Link)`
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
`;


export const Both_Link = styled(Creativity_Link)`
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Bigelow Rules', cursive;
`;