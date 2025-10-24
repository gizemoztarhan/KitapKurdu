import Category from "./pages/Category";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Story from "./pages/Story";
import Novel from "./pages/Novel";

const App = () => {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
    <Header/>
    <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* Dynamic Route */}
            <Route path="/detail/:book_id" element={<Detail />} />

            {/* Nested Routes */}
            <Route path="/category" element={<Category />}>
              <Route path="story" element={<Story />} />
              <Route path="novel" element={<Novel />} />
            </Route>

         {/*404*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
    </main>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App