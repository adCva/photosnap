import React from 'react';
import Nav from '../Components/Nav';
import Descriptive from '../Components/Descriptive';
import Story from '../Components/Story';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Descriptive imageFirst={false} darkBg={true} descriptiveTitle="Create and share your photo Stories" descriptiveParagraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others." descImage="create-and-share" buttonText="get an invite" showButton={true} />
        <Descriptive imageFirst={true} darkBg={false} descriptiveTitle="Beautiful stories every time" descriptiveParagraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone." descImage="beautiful-stories" buttonText="view the stories" showButton={true} />
        <Descriptive imageFirst={false} darkBg={false} descriptiveTitle="Designed for everyone" descriptiveParagraph="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it." descImage="designed-for-everyone" buttonText="view the stories" showButton={true} />

        <div className="stories-grid">
          <Story bgImage="mountains" storyTitle="The Mountains" author="John Appleseed" showDate={false} />
          <Story bgImage="cityscapes" storyTitle="Sunset Cityscapes" author="Benjamin Cruz" showDate={false} />
          <Story bgImage="18-days-voyage" storyTitle="18 Days Voyage" author="Alexei Borodin" showDate={false} />
          <Story bgImage="architecturals" storyTitle="Architecturals" author="Samantha Brooke" showDate={false} />
        </div>

        <div className="features-grid-container">
          <Feature featureImage="responsive.svg" altTitle="Responsiv" featureTitle="100% Responsive" featureDesc="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen." />
          <Feature featureImage="no-limit.svg" altTitle="No limit" featureTitle="No Photo Upload Limit" featureDesc="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go." />
          <Feature featureImage="embed.svg" altTitle="Embed" featureTitle="Available to Embed" featureDesc="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more." />
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home;