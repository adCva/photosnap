import React from 'react';
import Nav from '../Components/Nav';
import HeroStory from '../Components/HeroStory';
import Story from '../Components/Story';
import Footer from '../Components/Footer';


function Stories() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <HeroStory />
        <div className="stories-grid">
          <Story bgImage="mountains" storyTitle="The Mountains" author="John Appleseed" showDate={true} storyDate="April 16th 2020" />
          <Story bgImage="cityscapes" storyTitle="Sunset Cityscapes" author="Benjamin Cruz" showDate={true} storyDate="April 14th 2020" />
          <Story bgImage="18-days-voyage" storyTitle="18 Days Voyage" author="Alexei Borodin" showDate={true} storyDate="April 11th 2020" />
          <Story bgImage="architecturals" storyTitle="Architecturals" author="Samantha Brooke" showDate={true} storyDate="April 9th 2020" />
          <Story bgImage="world-tour" storyTitle="World Tour 2019" author="Timothy Wagner" showDate={true} storyDate="April 7th 2020" />
          <Story bgImage="unforeseen-corners" storyTitle="Unforeseen Corners" author="William Malcolm" showDate={true} storyDate="April 3rd 2020" />
          <Story bgImage="king-on-africa" storyTitle="King on Africa: Part II" author="Tim Hillenburg" showDate={true} storyDate="March 29th 2020" />
          <Story bgImage="trip-to-nowhere" storyTitle="The Trip to Nowhere" author="Felicia Rourke" showDate={true} storyDate="March 21st 2020" />
          <Story bgImage="rage-of-the-sea" storyTitle="Rage of The Sea" author="Mohammed Abdul" showDate={true} storyDate="March 19th 2020" />
          <Story bgImage="running-free" storyTitle="Running Free" author="Michelle" showDate={true} storyDate="March 16th 2020" />
          <Story bgImage="behind-the-waves" storyTitle="Behind the Waves" author="Lamarr Wilson" showDate={true} storyDate="March 11th 2020" />
          <Story bgImage="calm-waters" storyTitle="Calm Waters" author="Samantha Brooke" showDate={true} storyDate="March 9th 2020" />
          <Story bgImage="milky-way" storyTitle="The Milky Way" author="Benjamin Cruz" showDate={true} storyDate="March 5th 2020" />
          <Story bgImage="dark-forest" storyTitle="Night at The Dark Forest" author="Mohammed Abdul" showDate={true} storyDate="March 4th 2020" />
          <Story bgImage="somwarpet" storyTitle="Somwarpet's Beauty" author="Michelle" showDate={true} storyDate="March 1st 2020" />
          <Story bgImage="land-of-dreams" storyTitle="Land of Dreams" author="William Malcolm" showDate={true} storyDate="February 25th 2020" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Stories;