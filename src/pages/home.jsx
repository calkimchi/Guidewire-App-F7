import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardContent,
} from 'framework7-react';

import Notifications from "./notifications.jsx"



export default () => (
  <Page name="home" ptr infiniteTop='true' ptrBottom='true'>
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavTitle sliding>Legacy</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Legacy</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block strong>
      <p><a>Demo text: </a>Welcome to the Legacy Insurance Prototype! Your insurance purchasing process as a millenial begins with exploring the various types of insurance that apply to you!</p>
		
    </Block>
    
	<div >
		<Notifications />
	</div>    	
	

    <BlockTitle>Register and Login</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Register</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>
	
	<BlockTitle>Explore Insurance</BlockTitle>
	
	<Block>
      <p>Explore the different types of insurance that we believe are the most valuable to you!</p>
	  <p><a>Demo text: </a>Our prototype experience is based around the purchasing and claims processing of <a href="/cards/">Car Insurance.</a> When you're done exploring insurance types, please continue with the purchasing process for Car Insurance.</p>
    </Block>

    <div className="demo-expandable-cards">
	  <Card expandable>
        <CardContent padding={false}>
          <div style={{background: 'url(https://www.usnews.com/dims4/USNEWS/bf2adb4/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F81%2F7529eb0d5425603d837f3b6ba000ce%2F48518WideModern_roommates1_101613.jpg) no-repeat center bottom', backgroundSize: 'cover', height: '240px'}}></div>
          <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <CardHeader style={{height: '60px'}}>
			Renters Insurance
			</CardHeader>
          <div className="card-content-padding">
            <p>Renters' insurance, often called tenants' insurance, is an insurance policy that provides some of the benefits of homeowners' insurance, but does not include coverage for the dwelling, or structure, with the exception of small alterations that a tenant makes to the structure.</p>
            <p> It provides liability insurance and the tenant's personal property is covered against named perils such as fire, theft, and vandalism. It also pays expenses when the dwelling becomes uninhabitable. Due to renters' insurance existing mainly to protect against losses to the tenant's personal property and provide them with liability coverage but not to insure the actual dwelling, it is significantly less expensive than a homeowners' policy.</p>
			<p>
              <Button fill round large cardClose>Close</Button>
            </p>
          </div>
        </CardContent>
      </Card>

	  <Card expandable>
        <CardContent padding={false}>
          <div style={{background: 'url(https://cottagelife.com/wp-content/uploads/2019/08/By-EpicStockMedia-1200x811.jpg) no-repeat center bottom', backgroundSize: 'cover', height: '240px'}}></div>
          <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <CardHeader style={{height: '60px'}}>
			Travel Insurance
			</CardHeader>
          <div className="card-content-padding">
            <p>You have a big trip coming up, and you’ve heard that travel insurance can help protect that trip. It can – but there’s still one big question you need answered: What does travel insurance (or trip insurance or travel protection) cover?</p>
            <p>Most travel insurance plans cover medical emergencies, trip cancellation, trip interruption, delays, medical evacuation, and lost, damaged, or stolen luggage. Depending on what plan you buy and when you buy it, travel insurance can also cover rental-car damage, pre-existing conditions, and trip cancellation for any reason.</p>
			<p>
              <Button fill round large cardClose>Close</Button>
            </p>
          </div>
        </CardContent>
      </Card>
	  
	  <Card expandable>
        <CardContent padding={false}>
          <div style={{background: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-honda-accord-mmp-1-1568824260.jpg?crop=1xw:0.84375xh;center,top&resize=480:*) no-repeat center bottom', backgroundSize: 'cover', height: '240px'}}></div>
          <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <CardHeader style={{height: '60px'}}>
			Car Insurance
			</CardHeader>
          <div className="card-content-padding">
            <p>Vehicle insurance (also known as car insurance, motor insurance, or auto insurance) is insurance for cars, trucks, motorcycles, and other road vehicles. Its primary use is to provide financial protection against physical damage or bodily injury resulting from traffic collisions and against liability that could also arise from incidents in a vehicle. Vehicle insurance may additionally offer financial protection against theft of the vehicle, and against damage to the vehicle sustained from events other than traffic collisions, such as keying, weather or natural disasters, and damage sustained by colliding with stationary objects. The specific terms of vehicle insurance vary with legal regulations in each region.</p>
            <p>
              <Button fill round large cardClose>Close</Button>
			  <p></p>
			  <Button fill round large href="/purchase/" color="green" cardClose>Purchase</Button>
            </p>
          </div> 
        </CardContent>
      </Card>
	  
	  <Card expandable>
        <CardContent padding={false}>
          <div style={{background: 'url(https://static1.squarespace.com/static/57a1404a9f7456c32e8e48a6/59c53f752994ca9ad2cd8ec9/5a723c96e2c483b6b633dd1b/1517436673570/Image_1.jpeg) no-repeat center bottom', backgroundSize: 'cover', height: '240px'}}></div>
          <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <CardHeader style={{height: '60px'}}>
			Casualty Insurance
			</CardHeader>
          <div className="card-content-padding">
            <p>Casualty insurance is a problematically defined term which broadly encompasses insurance not directly concerned with life insurance, health insurance, or property insurance. Casualty insurance is mainly liability coverage of an individual or organization for negligent acts or omissions.</p>
            <p>For homeowners or car owners, it's important to have casualty insurance as damage can end up being a large expense.</p>
			<p>
              <Button fill round large cardClose>Close</Button>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card expandable>
        <CardContent padding={false}>
          <div style={{background: 'url(https://lh3.googleusercontent.com/proxy/bqjCCGOZ4LKtGpocNnkQKExZ7Nah28nF5j0HSR2-ExCGG1hyZ5nd1HsA-ZDO0FvrzdUUWTXISB_D-F84A1EXIWTwTRoaWOX128YxJVGlT_s8fke3wt80tFonlOm561VVE4AFHd4j) no-repeat center bottom', backgroundSize: 'cover', height: '240px'}}></div>
          <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="xmark_circle_fill" />
          <CardHeader style={{height: '60px'}}>
			Property Insurance
			</CardHeader>
          <div className="card-content-padding">
            <p>Property insurance provides protection against most risks to property, such as fire, theft and some weather damage. This includes specialized forms of insurance such as fire insurance, flood insurance, earthquake insurance, home insurance, or boiler insurance.</p>
            <p>
              <Button fill round large cardClose>Close</Button>
            </p>
          </div>
        </CardContent>
      </Card>
	  
    </div>

  </Page>
  
);

