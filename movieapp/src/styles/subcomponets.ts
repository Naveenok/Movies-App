import styled from "styled-components";

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: black;
`;

export const Description = styled.div`
  color: white;
  display: none;
  padding: 20px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0px 0px;
`;

export const MovieAndRating = styled.div``;

export const MovieContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
  transition: transform 2s ease-in-out;

  &:hover {
    background-color: black;
    transform: rotate(360deg);
    cursor: pointer;
  }
  &:hover ${MovieAndRating} {
    display: none;
  }
  &:hover ${Description} {
    display: block;
  }
`;

export const TitleAndRating = styled.div`
  padding: 10px;
  margin-top: -5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const MovieSearchContainer = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: flex-end;
`;
export const MovieSearch = styled.input`
  height: 30px;
  border-radius: 15px;
  padding-left: 20px;
`;

export const AppContainer = styled.div`
  background: black;
`;
