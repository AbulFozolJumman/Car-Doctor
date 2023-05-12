import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import NavBar from '../Pages/Home/Home/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='max-w-[1140px] mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;