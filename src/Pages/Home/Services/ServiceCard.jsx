import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card card-compact border border-[#E8E8E8]	">
            <figure className="p-5"><img className="rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="card-body p-0">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="card-actions items-center justify-end">
                    <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
                    <button className="btn text-[#FF3811] bg-transparent rounded-full border-0"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;