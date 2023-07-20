import { Navbar, Hero, FindOut, HowItWorks, PlayToEarn, Roadmap, Team, Partners, Tokenomics, Faq, JoinCommunity,  } from "./Components";

const App = () => {
  return (
    <div className="font-sf-display">
    <div className="bg-hero-pattern  bg-no-repeat bg-cover w-full h-full md:bg-cover">
    <Navbar/>
      <Hero/>
      </div>
      <div className="bg-[#101932] bg-cover">
      <FindOut/>
      <HowItWorks/>
      <PlayToEarn/>
      <Roadmap/>
      <Team/>
      <Partners/>
      <Tokenomics/>
      <Faq/>
      <JoinCommunity/>
      </div>
      </div>
  )
}

export default App
