import React from 'react';
import Header from './Header';
import Search from './Search';

import Contact from '../Contact';
import Profile from './Profile';


const list = [
    {
        name: 'Tiago Bispo',
        status: 'No trabalho'
    },
    {
        name: 'Oscar Martins',
        status: 'Viagando...'
    }
];

const ListComponent = () => (
    list.map(item => (
        <Contact key={item} name={item.name} status={item.status} />
    ))
)
const Sidebar = props => (
    <div className="sidebar">
        <Header />
        <Search />
        <ListComponent />
        <Profile />
    </div>
);

export default Sidebar;