import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/moviesSlice";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { thunks } from "../features/movie/moviesSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunks.fetchMoviesThunk());
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0%;
    bottom: 0;
    z-index: -1;
  }
`;
