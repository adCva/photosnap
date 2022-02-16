import React from 'react';
import Descriptive from '../Components/Descriptive';
import Nav from '../Components/Nav';

function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Descriptive imageFirst={false} darkBg={true} descriptiveTitle="Create and share your photo Stories" descriptiveParagraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others." descImage="create-and-share" />
        <Descriptive imageFirst={true} darkBg={false} descriptiveTitle="Beautiful stories every time" descriptiveParagraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone." descImage="beautiful-stories" />
        <Descriptive imageFirst={false} darkBg={false} descriptiveTitle="Designed for everyone" descriptiveParagraph="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it." descImage="designed-for-everyone" />
      </main>
    </div>
  )
}

export default Home;