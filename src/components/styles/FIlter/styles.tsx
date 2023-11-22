import styled from 'styled-components';

export const Container = styled.div`
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
align-content: center;
justify-content: space-between;
`;

export const ContainerAllFilters = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 40px;
width: 100%;
`;

export const ContainerSearch = styled.div`
display: flex;
width: 671px;
height: 42px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #FFF;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
align-items: center;
justify-content: center;

    input {
        width: 90%;
        height: 100%;
        background: transparent;
        border: none;
        padding-left: 10px;
        color: #FFF;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        ::placeholder {
            color: #FFF;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
        }
    }
`;

export const SearchLogo = styled.div`
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8292 12.8292C14.9398 10.7186 14.9398 7.29659 12.8292 5.18598C10.7186 3.07538 7.29659 3.07538 5.18598 5.18598C3.07538 7.29659 3.07538 10.7186 5.18598 12.8292C7.29659 14.9398 10.7186 14.9398 12.8292 12.8292ZM13.9756 16.5233C10.4782 18.8405 5.71968 18.4583 2.63826 15.3769C-0.879419 11.8592 -0.879419 6.15594 2.63826 2.63826C6.15594 -0.879419 11.8592 -0.879419 15.3769 2.63826C18.4583 5.71968 18.8405 10.4782 16.5233 13.9756L20.4723 17.9246C21.1759 18.6282 21.1759 19.7688 20.4723 20.4723C19.7688 21.1759 18.6282 21.1759 17.9246 20.4723L13.9756 16.5233Z" fill="white"/></svg>');
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #FFF;
  width: 21px;
  height: 21px;
  flex-shrink: 0;
`;

export const ContainerFilter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #AEAEAE;
font-family: sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
flex-wrap: wrap;

    select {
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 5px;
        color: #FFF;
        font-family: sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        background-color: #0000006c;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
        margin-top: 5px;

        input {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            stroke-width: 2px;
            stroke: #FAE60A;
        }
        input:focus {
            outline: none;
            border-color: #FAE60A;
        }
    }
`;

export const ContainerValues = styled.div`
width: 91px;
height: 42px;
flex-shrink: 0;
stroke-width: 1px;
stroke: #FFF;
border: 1px solid #FFF;
border-radius: 5px;

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        color: #FFF;
        font-family: sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
    }
`;

export const ButtonFilter = styled.div`

    button {
        width: 91px;
        height: 85px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #FAE60A;
        border: 1px solid #FAE60A;
        border-radius: 5px;
        background-color: #0000003b;
        color: #FAE60A;
        font-family: sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 800;
        line-height: 18px;
    }
`;

export const Filters = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
        margin: 5px;

        button {
            margin-left: 10px;
        }
    }

    button {
        width: 120px;
        flex-shrink: 0;
        stroke-width: 1px;
        stroke: #FAE60A;
        border: 1px solid #FAE60A;
        border-radius: 5px;
        background-color: #0000003b;
        color: #FAE60A;
        font-family: sans-serif;
        font-size: 15px;
        font-style: normal;
        font-weight: 800;
        line-height: 18px;
    }
`;
