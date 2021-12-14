import styled from "styled-components";

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: black;
`;

export const MovieContainer = styled.div`
  // border: 1px solid black;
  width: 250px;
  height: fit-content;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0px 0px;
`;

export const TitleAndRating = styled.div`
  margin-top: -5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // border: 1px solid red;
`;
