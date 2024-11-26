import AnotherBox from '@/components/AnotherBox';
import Box from '@/components/Box';
import BusinessComponent from '@/components/Bussiness';
import ClientCarousel from '@/components/Clients';
import ContactUs from '@/components/Contactus';
import CrossShapeComponent from '@/components/CrossShap';
import ExpertOpinion from '@/components/ExpertOpinion';
import FeatureSection from '@/components/FeatureSection';
import GetInTouch from '@/components/GetInTouch';
import GradientSection from '@/components/GradientBox';
import ImageSection from '@/components/ImageSection';
import LastSection from '@/components/LastSection';
import OurExperts from '@/components/OurExperts';
import React from 'react';

const FeaturesSection = () => {


  return (
    <div className='flex flex-col'>
       <FeatureSection/>
       <BusinessComponent/>
       <CrossShapeComponent/>
       <Box isOverLaping={true}/>
       <ExpertOpinion/>
       <ClientCarousel/>
       <AnotherBox/>
       <Box isOverLaping={false}/>
       <ImageSection/>
       <h1 className='text-center my-2 font-semibold text-xl md:text-3xl'>About us</h1>
       <Box isOverLaping={false}/>
       <div className="flex flex-col md:flex-row justify-center w-full gap-6 md:gap-10">
  <img
    src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt=""
    className="w-full md:w-[500px] rounded-md object-cover"
  />
  <img
    src="https://images.pexels.com/photos/371917/pexels-photo-371917.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    className="w-full md:w-[500px] rounded-md object-cover"
  />
</div>

       <OurExperts/>
       <GradientSection/>
       <LastSection/>
    </div>
   
   
  );
};

export default FeaturesSection;
