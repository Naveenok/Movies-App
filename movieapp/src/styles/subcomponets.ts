import styled from "styled-components";

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieContainer = styled.div`
  border: 1px solid black;
  width: 15%;
  height: fit-content;
  margin: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const TitleAndRating = styled.div`
  margin-top: -5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid red;
`;
