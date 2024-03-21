import React from "react";
import { render, screen, } from "@testing-library/react";
import Welcome from "../components/Welcome";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";
import CommentArea from "../components/CommentArea";
import BookList from "../components/BookList";


test("renders the welcome message", () => {
  render(<Welcome />);
  const welcomeMessage = screen.getByText(/Benvenuti in EpiBooks!/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test("renders correct number of book cards", () => {
  render(<AllTheBooks />);
  const bookCards = screen.getAllByTestId("card");
  expect(bookCards).toHaveLength(fantasy.length);
});

test("renders the comment section", () => {
  render(<CommentArea />);
  const commentSection = screen.getByText(/Recensione/i);
  expect(commentSection).toBeInTheDocument();
});

test("renders the search input field", () => {
  render(<BookList books={fantasy} />);
  const searchInput = screen.getByPlaceholderText(/Cerca un libro/i);
  expect(searchInput).toBeInTheDocument();
});
