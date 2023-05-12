import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className="mb-28">
            <div className="text-center">
                <h5 className="text-[#FF3811] text-xl font-bold">Services</h5>
                <h2 className="text-5xl font-bold py-5">Our Service Area</h2>
                <p className="pb-12 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don&#39;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;