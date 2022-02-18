import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Story from '../Components/Story';
import HeroStory from '../Components/HeroStory';

function Stories() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <HeroStory />
        <div className="stories-home-grid">
          {/* ==================================== .stories-home-grid will be in style.css in src  ==================================== */}
          <Story bgImage="mountains" storyTitle="The Mountains" author="John Appleseed" />
          <Story bgImage="cityscapes" storyTitle="Sunset Cityscapes" author="Benjamin Cruz" />
          <Story bgImage="18-days-voyage" storyTitle="18 Days Voyage" author="Alexei Borodin" />
          <Story bgImage="architecturals" storyTitle="Architecturals" author="Samantha Brooke" />
          <Story bgImage="behind-the-waves" storyTitle="Behind the Waves" author="Lamarr Wilson" />
          <Story bgImage="calm-waters" storyTitle="Calm Waters" author="Samantha Brooke" />
          <Story bgImage="dark-forest" storyTitle="Night at The Dark Forest" author="Mohammed Abdul" />
          <Story bgImage="king-on-africa" storyTitle="King on Africa: Part II" author="Tim Hillenburg" />
          <Story bgImage="land-of-dreams" storyTitle="Land of Dreams" author="William Malcolm" />
          <Story bgImage="milky-way" storyTitle="The Milky Way" author="Benjamin Cruz" />
          <Story bgImage="rage-of-the-sea" storyTitle="Rage of The Sea" author="Mohammed Abdul" />
          <Story bgImage="running-free" storyTitle="Running Free" author="Michelle" />
          <Story bgImage="somwarpet" storyTitle="Somwarpet's Beauty" author="Michelle" />
          <Story bgImage="trip-to-nowhere" storyTitle="The Trip to Nowhere" author="Felicia Rourke" />
          <Story bgImage="unforeseen-corners" storyTitle="Unforeseen Corners" author="William Malcolm" />
          <Story bgImage="world-tour" storyTitle="World Tour 2019" author="Timothy Wagner" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Stories;