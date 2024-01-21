import { BrowserRouter as Router } from "react-router-dom";

import Layout from './components/layout';
import ARoutes from './Routes';

function App() {
  return (
    <Router>
      <Layout>
        <ARoutes />
      </Layout>
    </Router>
  );
}

export default App;
