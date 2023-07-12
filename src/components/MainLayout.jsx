import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <>
      <AppTitle />
      <Nav />
      <Outlet />
    </>
  );
};

export default MainLayout;
