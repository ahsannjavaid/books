import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { fetchResponse } from "../../apis/service";
import { bookEndpoints } from "../../apis/endpoints/bookEndpoints";

const Home = () => {
  let [books, setBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(1);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');

    if (hasLoadedBefore) {
      setFirstLoad(0);
    } else {
      // If it's the first time, show an apology and set the flag in local storage
      localStorage.setItem('hasLoadedBefore', 1);
    }

    const GetBooks = async () => {
      try {
        const responseData = await fetchResponse(
          bookEndpoints.getBooks(),
          0,
          null
        );
        setBooks(responseData.books);
        if (!responseData.success) alert(responseData.message);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    GetBooks();
  }, []);

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

  if (isLoading) return <Spinner showingApologoies={firstLoad ? true : false} />;

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
