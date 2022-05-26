import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Navigation_Container = styled.div` 
    height: 70px;
    width: auto;
    display: flex;
    background: linear-gradient(to left, #00818A, #92B4EC, #00818A);
    border: 2px solid #293462;
    min-width: 300px;
`;



export const Nav_Links = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


export const Nav_Box = styled.div`
    background: linear-gradient(to top, #6F4C5B, #DEBA9D, #6F4C5B);
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 50px;
    margin: 20px 10px;
    height: 20px;
    border-radius: 25px;
    border: 2px solid #293462;
    font-size: 1.2rem;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        background: linear-gradient(to left, #DEBA9D, #6F4C5B);
    }
`

export const Nav_Link = styled(Link)`
    background: linear-gradient(to top, #6F4C5B, #DEBA9D, #6F4C5B);
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 50px;
    margin: 20px 10px;
    height: 20px;
    border-radius: 25px;
    border: 2px solid #293462;
    font-size: 1.2rem;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        background: linear-gradient(to left, #DEBA9D, #6F4C5B);
    }
`;

export const Nav_Link_Extended = styled(Link)`
    display: flex;
    margin: 0 15px;
    color: #DBD0C0;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        opacity: 0.9;
    }
`;