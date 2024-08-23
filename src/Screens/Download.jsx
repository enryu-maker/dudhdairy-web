import React from 'react'
import { useLocation } from 'react-router-dom';
import { Image } from '../Images/Images';
export default function Download() {
    const state = useLocation()
    React.useEffect(() => {
        const refer_code = state.pathname.split("/")[2]; // Assuming /chefinfo/9 format
        console.log(refer_code)
        const deepLinkUrl = `dudhdairy://refer/${refer_code}`;
        const store_url = `https://play.google.com/store/apps/details?id=com.dudhdairy&pcampaignid=web_share&refer_code=${refer_code}`
        try {
            window.open(deepLinkUrl, "_self");
        }
        catch (error) {
            console.log(error)
            window.open(store_url)
            }
        // Use _self to open in the same window/tab
    }, []);
  return (
      <div className="md:w-screen md:h-screen w-full h-full bg-blue-500 flex flex-col justify-center items-center p-4 md:p-8 lg:p-20 pt-20">
          <p className="text-3xl mt-5 font-semibold font-Lato text-white">Invite, Earn, Enjoy! </p>
          <div className='flex flex-col sm:flex-row'>
              <img className='sm:w-[50%] h-[80vh] object-cover' src={Image[1]}/>
              <img className='sm:w-[50%] h-[80vh] object-cover' src={Image[2]}/>
          </div>
    </div>
  )
}
