import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Descriptive from '../Components/Descriptive';
import Beta from '../Components/Beta';
import Plan from '../Components/Plan';
import Table from '../Components/Table';

function Pricing() {
  const [ yearPlan, setYearPlan ] = useState(true);


  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Descriptive imageFirst={false} darkBg={true} descriptiveTitle="Pricing" descriptiveParagraph="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos." descImage="pricing" buttonText="get an invite" />

        <div>


          <div className="plans-container">
            <Plan title="Basic"  planDescription="Includes basic usage of our platform. Recommended for new and aspiring photographers." price={yearPlan ? "190.00" : "19.00"} timeline={yearPlan ? "per year" : "per month"} />
            <Plan title="Pro" planDescription="More advanced features available. Recommended for photography veterans and professionals." price={yearPlan ? "390.00" : "39.00"} timeline={yearPlan ? "per year" : "per month"} />
            <Plan  title="Business" planDescription="Additional features available such as more detailed metrics. Recommended for business owners." price={yearPlan ? "990.00" : "99.00"} timeline={yearPlan ? "per year" : "per month"} />
          </div>



          <Table />
        </div>

        <Beta />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Pricing;