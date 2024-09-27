import Herocarousel from "../components/UI/Hero-section/HeroCarousel";
import HeroAboutUs from "../components/UI/Hero-section/HeroAboutUs";
import HeroOurServices from "../components/UI/Hero-section/HeroOurServices";
import HeroOurBenefits from "../components/UI/Hero-section/HeroOurBenefits";
import HeroContactUs from "../components/UI/Hero-section/HeroContactUs";

function Home() {
    return (
        <>
            <Herocarousel />
            <HeroAboutUs />
            <HeroOurServices />
            <HeroOurBenefits />
            <HeroContactUs />
        </>
    )
}

export default Home;