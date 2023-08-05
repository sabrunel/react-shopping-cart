import hero from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="flex-grow bg-center bg-cover bg-no-repeat flex"  style={{backgroundImage: `url(${hero})`}}>
            <section className="px-8 md:px-32 py-10 flex flex-col justify-between md:justify-start items-center md:items-start text-center md:text-left" >
                <div>
                    <h2 className="text-3xl  md:text-4xl font-light uppercase leading-relaxed"> Unwind in style </h2>
                    <h1 className="max-w-[10ch] text-6xl md:text-8xl font-bold uppercase"> Casual Elegance Redefined </h1>
                </div>
                <Link to="/store" className="inline-block w-full md:max-w-[250px] md:px-14 py-4 md:mt-10 bg-slate-800 hover:bg-black text-white text-xl rounded-md"> Shop Now &#8594; </Link>
            </section>
        </main>
    )
}