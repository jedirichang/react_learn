import { useParams } from "react-router-dom";

export const BookDetail = () => {
  const params = useParams();
  return <h1>Book Detail {params.id}</h1>;
};
