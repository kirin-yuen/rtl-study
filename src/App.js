import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import BookContextProvider from "./contexts/BookContextProvider";

function App() {
  return (
    <div>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
