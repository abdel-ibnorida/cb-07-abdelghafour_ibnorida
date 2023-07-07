import { useState } from 'react';
import './Navbar.scss';

import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
    const profileItems = [
        {
            id: 1,
            label: "Profile",
            items: [
                {
                    id: 1,
                    label: "Settings",
                },
                {
                    id: 2,
                    label: "Messages",
                },
                {
                    id: 3,
                    label: "Logout",
                },
            ],
        },
    ];
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <div className='navbar'>
            <ul className='navbar_item'>
                <li>Home</li>
                {
                    profileItems.map(item => {
                        return (
                            <li>
                                {item.label}
                                <FaChevronDown />
                                <ul>
                                    {item.items.map(itemOption => {
                                        return (
                                            <li className={profileItems?'itemOption':'itemOption_active'}>
                                                {
                                                    itemOption.label
                                                }
                                            </li>
                                        )
                                    })}
                                
                                </ul>
                            </li>
                        )
                    })
                }

                <li>About US</li>
            </ul>
        </div>
    )
}

export default Navbar;