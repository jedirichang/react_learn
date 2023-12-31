import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovies } from "../features/movie/moviesSlice";

function Movies() {
  const { movies, isLoading } = useSelector(selectMovies).movie;
  console.log(movies);
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {!isLoading &&
          movies &&
          movies.length &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <img src={movie.cardImg} />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
  }
`;
