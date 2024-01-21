import {Route, Routes} from 'react-router-dom';

//pages
import Customers from './pages/Customers'
import CustomerForm from './pages/Customers/CustomerForm';

const ARoutes = () => (
    <Routes>
        <Route exact path="/" Component={Customers} />
        <Route exact path="/clientes" Component={Customers} />
        <Route exact path="/clientes/agregar" Component={CustomerForm} />
    </Routes>
)

export default ARoutes;