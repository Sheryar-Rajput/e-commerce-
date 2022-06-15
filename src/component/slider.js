import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import shoes1 from '../assets/shoes1.webp'
import shoes2 from '../assets/shoes2.webp'
import shoes3 from '../assets/shoes3.webp'
function Slider() {
const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={2000}
    media={[
      {
        source: "https://cdn.shopify.com/s/files/1/0143/1552/0054/files/WhatsApp_Image_2022-06-12_at_10.08.28_PM_1296x.jpg?v=1655058914",
      },
      {
        source : "https://cdn.shopify.com/s/files/1/0143/1552/0054/files/upto-70_1296x.jpg?v=1653050975"
      },
      {
        source: shoes2,
      },
      {
        source: shoes1,
      },
      {
        source: shoes3,
      },
    ]}
  /> 
    </div>
  )
}

export default Slider
