import { BASE_URL } from "../config";

const entity = "books";

export const bookEndpoints = {
  getBooks: () => `${BASE_URL}/api/v1/${entity}/get-all`,

  addBook: () => `${BASE_URL}/api/v1/${entity}/add-new`,
  
  deleteBook: (id) => `${BASE_URL}/api/v1/${entity}/delete/${id}`,
};
