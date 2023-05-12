import person from "../../../../src/assets/images/about_us/person.jpg"
import parts from "../../../../src/assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div id="about" className="hero mb-28">
            <div className="p-0 m-0 hero-content flex-col lg:flex-row">
                <div className="pr-14 w-1/2 relative">
                    <img src={person} className="mb-20 rounded-lg w-full" />
                    <img src={parts} className="border-8 border-white left-[187px] bottom-[-12px] absolute rounded-lg w-2/3" />
                </div>
                <div className="pl-14 w-1/2">
                    <h5 className="text-[#FF3811] text-xl font-bold pb-5">About Us</h5>
                    <h2 className="text-5xl font-bold pb-7">We are qualified & of experience in this field</h2>
                    <p className="pb-5 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable.</p>
                    <p className="pb-7 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized words which don&#39;t look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] outline-none border-opacity-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;