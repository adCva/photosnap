import React from 'react';
import Nav from '../Components/Nav';
import Descriptive from '../Components/Descriptive';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';
import Beta from '../Components/Beta';

function Features() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Descriptive imageFirst={false} darkBg={true} descriptiveTitle="Features" descriptiveParagraph="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories." descImage="features-hero" buttonText="get an invite" showButton={false} />

        <div className="features-grid-container">
          <Feature featureImage="responsive.svg" altTitle="Responsiv" featureTitle="100% Responsive" featureDesc="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen." />
          <Feature featureImage="no-limit.svg" altTitle="No limit" featureTitle="No Photo Upload Limit" featureDesc="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go." />
          <Feature featureImage="embed.svg" altTitle="Embed" featureTitle="Available to Embed" featureDesc="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more." />

          <Feature featureImage="custom-domain.svg" altTitle="Custom" featureTitle="Custom Domain" featureDesc="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!" />
          <Feature featureImage="boost-exposure.svg" altTitle="Exposure" featureTitle="Boost Your Exposure" featureDesc="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list." />
          <Feature featureImage="drag-drop.svg" altTitle="DragDrop" featureTitle="Drag & Drop Image" featureDesc="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories." />
        </div>
        <Beta />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Features;