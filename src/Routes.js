import {Route, Routes} from 'react-router-dom';

//pages
import Customers from './pages/Customers'
import CustomerForm from './pages/Customers/CustomerForm';
import Products from './pages/Products';
import ProductForm from './pages/Products/ProductForm';

const ARoutes = () => (
    <Routes>
        <Route exact path="/" Component={Customers} />
        <Route exact path="/clientes" Component={Customers} />
        <Route exact path="/clientes/agregar" Component={CustomerForm} />
        <Route exact path="/productos" Component={Products} />
        <Route exact path="/productos/agregar" Component={ProductForm} />
        <Route exact path="/productos/editar" Component={ProductForm} />

    </Routes>
)

export default ARoutes;