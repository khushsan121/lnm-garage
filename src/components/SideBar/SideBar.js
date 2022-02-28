import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart } from 'react-icons/fa';
import  Container  from 'react-bootstrap/Container';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css';

function SideBar() {
  return (
    <div className='sidebar'>

      <ProSidebar>
    <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>HOME</MenuItem>
    <SubMenu title="Category" icon={<FaHeart />}>
      <MenuItem>Mobile & Tablets</MenuItem>
      <MenuItem>Car</MenuItem>
      <MenuItem>Bike</MenuItem>
      <MenuItem>Electronics</MenuItem>
      <MenuItem>Furniture</MenuItem>
      <MenuItem>Real Estate</MenuItem>
      <MenuItem>Jobs</MenuItem>
      <MenuItem>Services</MenuItem>
      <MenuItem>Others</MenuItem>
    </SubMenu>
    <MenuItem icon={<FaGem />}>About Us</MenuItem>
    <MenuItem icon={<FaGem />}>Contact Us</MenuItem>
    <MenuItem icon={<FaGem />}>FAQ</MenuItem>
    <MenuItem icon={<FaGem />}>Advertise With Us</MenuItem>
    <MenuItem icon={<FaGem />}>Blog</MenuItem>
    <MenuItem icon={<FaGem />}>LNM Tapri</MenuItem>
  </Menu>
</ProSidebar>
    </div>
  );
}
export default SideBar;