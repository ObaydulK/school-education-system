
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import img from '../../assets/Img/School_Icon.png'


const Header = () => {

    return (
        <div>
            <Navbar className="bg-[#26335D]    " fluid rounded >
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <img src={img} className="mr-3 h-6 sm:h-9" alt="Sristy central school and collage" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold  first-line:">School Education</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className="  ">
                    <Navbar.Link href="/"  active > Home </Navbar.Link>
                    <Navbar.Link href="/services">Services</Navbar.Link>
                    <Navbar.Link href="pricing">Pricing</Navbar.Link>
                    <Navbar.Link href="contact">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;