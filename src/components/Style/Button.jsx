import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.$primary ? '#BBD6B8' : props.$delete ? '#FA7070' : 'white'};
  color: ${(props) =>
    props.$primary ? 'white' : props.$delete ? 'white' : '#BBD6B8'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.$delete ? '#FA7070' : '#BBD6B8')};
  border-radius: 3px;
  :hover {
    background-color: ${(props) => (props.$delete ? '#DF7861' : '#94af9f')};
    color: #fff;
  }
`
