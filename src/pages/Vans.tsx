import Navbar from '../components/Navbar';
import VansContent from '../components/VansContent';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const vanJson = `
{"description":"The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
"id":"1",
"imageUrl":"https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
"name":"Modest Explorer",
"price":"60",
"type":"simple"
}
`
export interface Van {
    id: string,
    name: string,
    type: string,
    price: number,
    description: string,
    imageUrl: string
}

const Vans = () => {
    const [vans , setVans] = useState<Van[]>([]);

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => { setVans(data.vans) });
    }, []);
    
    return (
        <div>
            <Navbar currentPage='vans'/>
            <VansContent vans={vans}/>
            <Footer />
        </div>
    )
}

export default Vans;