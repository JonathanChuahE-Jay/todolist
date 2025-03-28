import { Outlet, createRootRoute } from '@tanstack/react-router';
import Navbar from '../components/Navbar/Navbar';
import Drawer from '../components/Drawer/Drawer';

export const Route = createRootRoute({
  component: AppLayout,
});

function AppLayout() {
  return (
    <>
      <Drawer />
      <Navbar />
      <main className=" bg-[#504B38]">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
