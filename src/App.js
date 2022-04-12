import Category from "./components/Category";
import Layout from "./components/Layouts/Layout";
import Pages from "./pages/Pages";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Category />
        <Search />
      <Pages />
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
