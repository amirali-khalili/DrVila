import Cta from "@/components/homePage/Cta";
import FinestVillas from "@/components/homePage/FinestVillas";
import Header from "@/components/homePage/Header";
import Soheylie from "@/components/homePage/Soheylie";
import SpecialBuy from "@/components/homePage/SpecialBuy";
import Steps from "@/components/homePage/Steps";
import WhyDrvila from "@/components/homePage/WhyDrvila";

export default function Home() {
  return (
    <div>
      <Header/>
      <WhyDrvila/>
      <FinestVillas/>
      <Soheylie/>
      <SpecialBuy/>
      <Steps/>
      <Cta/>
    </div>
  );
}
