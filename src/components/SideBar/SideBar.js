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
    <SubMenu title="Components" icon={<FaHeart />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    </div>
  );
}
export default SideBar;