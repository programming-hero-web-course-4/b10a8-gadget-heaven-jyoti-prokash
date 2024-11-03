

import { useEffect, useState } from "react";
import Gadget from "./Gadget";


const Gadgets = () => {
    const [gadgets,setGadgets] = useState([]);
    useEffect(()=>{
        fetch("/gadget.json")
        .then(res => res.json())
        .then(data =>setGadgets(data))
    },[])
    
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
            </div>
        </div>
    );
};

export default Gadgets;