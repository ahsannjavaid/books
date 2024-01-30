import React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import { fetchResponse } from "../../apis/service";
import { bookEndpoints } from "../../apis/endpoints/bookEndpoints";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [year, setYear] = useState();
  let [isLoading, setIsLoading] = useState(false);

  const handleAddBook = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const responseData = await fetchResponse(bookEndpoints.addBook(), 1, {
        title,
        author,
        publicationYear: year,
      });
      alert(responseData.message);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <Layout>
      <form className="form">
        <input
          className="form-control mb-2 form-w"
          onChange={(event) => setTitle(event.target.value)}
          type={"text"}
          placeholder="Book Title"
        />
        <input
          className="form-control mb-2"
          onChange={(event) => setAuthor(event.target.value)}
          type={"text"}
          placeholder="Author"
        />
        <input
          className="form-control"
          onChange={(event) => setYear(event.target.value)}
          type={"number"}
          placeholder="Publication Year"
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          onClick={(event) => handleAddBook(event)}
        >
          Add
        </button>
      </form>
    </Layout>
  );
};

export default AddBook;
