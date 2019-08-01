import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`

const dragReject = css`
    border-color: #e57878;
`

export const Content = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 20px;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragReject}
`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    success: '#78e5d5'
}

export const UploadMenssage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin: 0;
`