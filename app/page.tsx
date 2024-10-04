import { Aboutus } from '@/Components/AboutUs/Aboutus';
import { BusinessGrows } from '@/Components/BusinessGrows/BusinessGrows';
import { ContactTeam } from '@/Components/ContactTeam/ContactTeam';
import { MainBg } from '@/Components/MainBg/MainBg';
import { OurService } from '@/Components/OurService/OurService';
import { Rates } from '@/Components/Rates/Rates';
import Wrapper from '@/Components/Wrapper/Wrapper';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MainBg
        ImgUrl="/assets/new.jpg"
        ImgAlt="Home Image"
        h4Text="Project Tea"
        h5Text="The Key To Life"
        h6Text="Be awsome and save nature!."
        h2Text="Contact Us"

      />

      <Wrapper>
        <Aboutus />

        <BusinessGrows 
          ImgUrl="/assets/The Natural Garden.jpg"
          ImgAlt="BusinessGrows Image"
          h4Text="The More Customers, The More Business Grows"
        />

        {/* <Rates /> */}

        <OurService />

        <ContactTeam 
        ImgUrl={'/assets/mainslider11-1@2x 1.jpg'} 
        h4Text={'We Have Awesome Members To Help , Contact Them'} 
        />

      </Wrapper>

      </>
  );
}
