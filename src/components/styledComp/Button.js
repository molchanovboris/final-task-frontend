import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'violet' : '#F5FFFA')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid #000000'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? '#4682B4' : '#4682B4'};
  }
`;