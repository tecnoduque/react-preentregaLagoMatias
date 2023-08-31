import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from '../NavBar';
import ItemListContainer from '../ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer';

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/categ/:id' element={<ItemListContainer />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router