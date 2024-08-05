import smallfontFace from "@/utils/smallfontface";

export default function HeroCard() {
    interface HeroCardType {
        label: string,
        description: string,

    }

    const HeroCard: HeroCardType[] = [
        {
            label: "What is the purpose of Probinsyano Vlogs website?",
            description: "The probinsyano Vlogs website aims to entertain and inspire its audience with good vibes, while sharing my daily life experiences and expertise on topics I'm passionate about. "
        },
        {
            label: "What is the Probinsyano Vlogs website?",
            description: "The Probinsyano vlog website is a platform that shares recipes, entertaining content, informative posts, and spreads good vibes to its audience.  ",
        },
        {
            label: "Regarding About Me",
            description: "I am Marlon Sipocot a content creator and aims to be a influencer or popular someday. Started on 2020 and still not popular after all. But, I never loss hope till I suceed. If you could, could you become my supporter?",
        },
        {
            label: "Sponsorship & Collaboration.",
            description: "For Sponsorship/Collaboration: I'm excited to explore opportunities to work together! I appreciate your consideration and look forward to the possibility of collaborating or partnering with you. Let's connect and create something amazing together!",
        }
    ]

    return (
        <main className="w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {HeroCard.map((item, index) => {
                    return (

                            <section className=" w-full p-2 " key={index}>
                                <h2 className={`text-black/90 capitalize text-base md:text-lg `}>{item.label}</h2>
                                <div className="my-1"></div>
                                <p className={`${smallfontFace.className} text-black/70 text-sm`}>{item.description}</p>
                            </section>



                    )
                })}
            </div>



        </main>
    );
}