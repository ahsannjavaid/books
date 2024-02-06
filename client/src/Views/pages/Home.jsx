import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { fetchResponse } from "../../apis/service";
import { bookEndpoints } from "../../apis/endpoints/bookEndpoints";

const Home = () => {
  let [books, setBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [ serverStarted, setServerStarted ] = useState(sessionStorage.getItem("serverStarted") ? true : false);

  useEffect(() => {
      const GetBooks = async () => {
      try {
        const responseData = await fetchResponse(
          bookEndpoints.getBooks(),
          0,
          null
        );
        setBooks(responseData.books);
        if (!responseData.success) alert(responseData.message);
        setServerStarted(true);
        sessionStorage.setItem("serverStarted", 1);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    GetBooks();
  }, [setServerStarted]);

  const DeleteBook = async (id) => {
    setIsLoading(true);
    try {
      const responseData = await fetchResponse(
        bookEndpoints.deleteBook(id),
        3,
        null
      );
      if (!responseData.success) alert(responseData.message);
      setBooks(books.filter((book) => book._id !== id));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <Spinner showingApologoies={!serverStarted ? true : false} />;

  return (
    <Layout>
      <div className="row">
        {books.map((book) => {
          return (
            <div className="col d-flex justify-content-center" key={book._id}>
              <Card
                id={book._id}
                title={book.title}
                author={book.author}
                year={book.publicationYear}
                action={DeleteBook}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
