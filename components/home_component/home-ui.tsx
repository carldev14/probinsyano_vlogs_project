import Greetings from "./greetings";
import HeroCard from "./HeroCard";


export default function HomeUi() {
    return (
        <main className="w-full p-4">
                
                <Greetings/>
                <div className="my-6"></div>
                <HeroCard/>


        </main>
    );
}