import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <p>This is a home page</p>
        <p>Go to <Link to="/products">the list of products</Link></p>
    </>
}

export default Home;