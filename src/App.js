import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Routers from "./routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routers />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
