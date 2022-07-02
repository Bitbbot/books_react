import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { BookPage } from "./pages/book-page";
import { Header } from "./components/header";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            {/* <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:id">
              <BookPage />
            </Route> */}
            {/* <Route exact path="/" component={HomePage} />
            <Route exact path="/app/:id" component={BookPage} /> */}
            <Route exact path="/app/:id" element={<BookPage />} />
            {/* <BookPage />
            </Route> */}
            <Route exact path="/" element={<HomePage />} />
            {/* <HomePage /> */}
            {/* </Route> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
