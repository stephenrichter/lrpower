import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import leoProfile from '../assets/images/leo-lakowski.jpg'
import ronProfile from '../assets/images/ron-richter.jpg'
import slider05 from '../assets/images/Slider-5.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = "LR Power Solutions Inc.";

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="about" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit"><img src={slider05} alt="" /></span>
              <header className="major">
                <h2>Helping clients with large and small project delivery</h2>
              </header>
              <h4>LR Power has been delivering consulting services to commercial and industrial clients in the power and energy industry for over 6 years. Acting as an owners-agent, we deliver design, engineering and project management services on time and on budget. We draw on our extensive management experience and our relationships with other long term industry professionals to ensure successful project delivery.</h4>
            </div>
          </div>
        </section>

        <section id="services" className="main style2">
          <div className="grid-wrapper">
            <div className="col-5 align-center">
              <ul className="major-icons">
                <li><span className="icon style1 major fa-bolt"></span></li>
                <li><span className="icon style2 major fa-book"></span></li>
                <li><span className="icon style3 major fa-search"></span></li>
                <li><span className="icon style4 major fa-cog"></span></li>
                <li><span className="icon style5 major fa-calendar"></span></li>
                <li><span className="icon style6 major fa-file"></span></li>
              </ul>
            </div>
            <div className="col-7">
              <header className="major">
                <h2>What we do best</h2>
              </header>
              <ol>
                <li className="mb">Provide management consulting services to the power industry</li>
                <li className="mb">Manage all types of projects, from greenfield to existing plant upgrades/retrofits</li>
                <li className="mb">Develop standard operating procedures (SOP) and training manuals</li>
                <li className="mb">Act as “owner’s agent” to provide developers with unbiased advice on the best delivery model of potential projects</li>
                <li className="mb">Review and evaluate power plant operations for potential efficiency upgrades</li>
                <li className="mb">Lead facility start up, commissioning, and operational activities</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="team" className="main style1">
          <div className="align-center"><h1>Our Team</h1></div>
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h3>Leo Lakowski, P. Eng.</h3>
                <h4>President, LR Power USA Inc.</h4>
              </header>
              <p>Leo is a professional mechanical engineer with over 30 years of experience in power plant design, construction, operation, maintenance and management, including pulp & paper and waste-to-energy (WTE). His working career has been spent in BC, various locations in the USA as well as numerous short-term assignments in the UK and France. Leo maintains his LR Power USA offices in Ferndale, Washington.</p>
              <ul className="actions">
                <li><a href="mailto:leo.lakowski@lrpowersolutions.com" className="button">Contact Leo</a></li>
              </ul>
            </div>
            <div className="col-6">
              <span className="image fit"><img src={leoProfile} alt="Leo Lakowski" /></span>
            </div>
          </div>

          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit"><img src={ronProfile} alt="Ron Richter" /></span>
            </div>
            <div className="col-6">
              <header className="major">
                <h3>Ron Richter, First Class Power Engineer</h3>
                <h4>President, LR Power Solutions Inc.</h4>
              </header>
              <p>Ron has over 35 years of experience in projects relating to power plant technology operation, training and management in diverse locations from the Canadian High Arctic to the deserts of Egypt. Working in Waste-to-Energy (WTE) for 22 years with Montenay Inc. and Covanta at the Metro Vancouver WTE Facility in Burnaby, B.C. Ron moved through the ranks of shift operation to Chief Power Engineer and Plant Manager.</p>
              <ul className="actions">
                <li><a href="mailto:ron.richter@lrpowersolutions.com" className="button">Contact Ron</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="grid-wrapper">
            <div className="col-4">
              <header className="major">
                <h2>Get in touch.</h2>
              </header>
              <p>Sed lacus nascetur ac ante amet sapien.</p>
              <ul className="actions uniform">
                <li><a href="mailto:ron.richter@lrpowersolutions.com" className="button special">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-4">
              <span className="icon style1 major fa-code"></span>
              <h3>LR Power USA Inc.</h3>
              <p>2646 Lochcarron Drive<br />
                Ferndale, WA, 98248<br />
                Office: (360) 778-1091<br />
                Mobile: (360) 473-9560</p>
            </div>
            <div className="col-4">
              <span className="icon style1 major fa-code"></span>
              <h3>LR Power Solutions Inc.</h3>
              <p>324 Dallas Road<br />
                Victoria, BC V8V 1A8<br />
                Mobile: (604) 908-7028</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Homepage;