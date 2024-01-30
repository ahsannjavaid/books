import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import { fetchResponse } from "../../apis/service";
import { bookEndpoints } from "../../apis/endpoints/bookEndpoints";

const Home = () => {
  let [books, setBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    GetBooks();
  }, []);

  if (isLoading) return <Spinner showingApologoies={true} />;

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
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
