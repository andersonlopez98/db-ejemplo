import {Route, Routes} from 'react-router-dom';

//pages
import Customers from './pages/Customers'

const ARoutes = () => (
    <Routes>
        <Route exact path="/" Component={Customers} />
        <Route exact path="/clientes" Component={Customers} />
        <Route exact path="/clientes/agregar" Component={Customers} />
    </Routes>
)

export default ARoutes;