import hero from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="px-32 py-10 flex flex-grow justify-between bg-cover"  style={{backgroundImage: `url(${hero})`}}>
            <section className="py-12" >
                <h2 className="text-4xl font-light uppercase leading-relaxed"> Unwind in style </h2>
                <h1 className="text-7xl font-bold uppercase mb-10"> Casual Elegance Redefined </h1>
                <Link to="/store" className="inline-block px-8 py-3 my-12 bg-slate-800 hover:bg-black text-white text-xl rounded-md"> Shop Now &#8594; </Link>
            </section>
        </main>
    )
}