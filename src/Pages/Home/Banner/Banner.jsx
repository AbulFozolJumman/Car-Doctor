import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"
import banner5 from "../../../assets/images/banner/5.jpg"
import banner6 from "../../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl mb-28">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />
                <div className="absolute p-24 h-full text-white flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div>
                        <h1 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-lg font-normal my-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Discover More</button>
                        <button className="btn bg-transparent border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform bottom-[50px] right-[50px]">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-opacity-0">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute p-24 h-full text-white flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div>
                        <h1 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-lg font-normal my-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Discover More</button>
                        <button className="btn bg-transparent border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform  bottom-[50px] right-[50px]">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-opacity-0">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute p-24 h-full text-white flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div>
                        <h1 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-lg font-normal my-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Discover More</button>
                        <button className="btn bg-transparent border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform  bottom-[50px] right-[50px]">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-opacity-0">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute p-24 h-full text-white flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div>
                        <h1 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-lg font-normal my-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Discover More</button>
                        <button className="btn bg-transparent border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform  bottom-[50px] right-[50px]">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-opacity-0">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />
                <div className="absolute p-24 h-full text-white flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div>
                        <h1 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-lg font-normal my-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Discover More</button>
                        <button className="btn bg-transparent border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform  bottom-[50px] right-[50px]">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-opacity-0">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute p-24 h-full text-white flex items-center justify-start bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div>
                        <h1 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                        <p className="text-lg font-normal my-8">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className="btn mr-5 bg-[#FF3811] outline-none border-opacity-0">Discover More</button>
                        <button className="btn bg-transparent border-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform  bottom-[50px] right-[50px]">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-opacity-0">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;