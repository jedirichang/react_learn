import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Book } from "./pages/Book";
import { BookDetail } from "./pages/BookDetail";
import { Home } from "./pages/Home";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<Book />} />
          <Route path=":id" element={<BookDetail />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* <Route path="/books" element={<Book />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
