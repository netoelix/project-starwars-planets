import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
`;

export const TableContainer = styled.table`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border: 1px solid #828282;
    border-collapse: collapse;
    color: white;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-top: 20px;

    thead {
        tr {
            th {
                width: 202px;
                height: 70px;
                flex-shrink: 0;
                border-radius: 1px 0px 0px 0px;
                border: 1px solid #000;
                background: #2E3035;
            }
        }
    }

    tbody {
        tr {
            td {
                width: 85.568px;
                height: 101.796px;
                flex-shrink: 0;
                border-bottom: 1px solid #828282;
                text-align: center;
            }
        }
    }
`;
