import { useRef } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";


function MainPage({loginMainBtnHandlerInRef, fetchHandlerInRef}) {

    const startBtnHandlerInRef = useRef(() => { });

    return (

        <main className="main">

            <HeroSection startBtnHandlerInRef={startBtnHandlerInRef} />
            <ServicesSection startBtnHandlerInRef={startBtnHandlerInRef} loginMainBtnHandlerInRef={loginMainBtnHandlerInRef} fetchHandlerInRef={fetchHandlerInRef} />
            <AboutSection />
            <StatsSection />

        </main>

    )
}

export default MainPage;