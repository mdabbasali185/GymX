import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import trainer1 from '../../../Images/gym_coach_1-150x150.jpg'
import trainer2 from '../../../Images/gym_coach_2-150x150.jpg'
import trainer3 from '../../../Images/gym_coach_3-150x150.jpg'

const Trainer = () => {
  return (
    <div className="container">
      <CardGroup>
        <Card className="bg-secondary text-white m-2">
          <Card.Img variant="top" className="w-50 mx-auto" src={trainer1} />
          <Card.Body>
            <Card.Title className="text-center fw-bold">Aaron</Card.Title>
            <Card.Text>
            The only place where success comes before work is in the dictionary. Every career requires hard work and practice to achieve success, especially in fitness where it can take years of practice to develop effective skills and traits for providing a high quality of service that can help you stand out from other fitness professionals. In an effort to help newer fitness professionals develop the same skills that have helped more experienced veterans to have long term success.
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card className="bg-secondary text-white m-2">
          <Card.Img variant="top" className="w-50 mx-auto" src={trainer2} />
          <Card.Body>
            <Card.Title className="text-center fw-bold"> Adelina</Card.Title>
            <Card.Text>
            Over the course of my career, after many years of careful observation, one of the things that I’ve noticed is that it is not just the amount of education that sets one fitness professional apart from another, but is instead the level of service each one provides and how that makes a client feel during the workout experience. Some of the best personal trainers I’ve seen in action may not have been able to recite the Krebs cycle from memory, but they had something different. 
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card className="bg-secondary text-white m-2">
          <Card.Img variant="top" className="w-50 mx-auto" src={trainer3} />
          <Card.Body>
            <Card.Title className="text-center fw-bold"> Bhavika</Card.Title>
            <Card.Text >
            One thing that many fitness professionals often overlook is that 10 pounds weighs 10 pounds, regardless of whether you are an experienced “celebrity trainer” posting videos on Instagram or a brand-new rookie working with your first client. Basic, job-specific skills like exercise program design are easy to learn, however there are more important skills such as the ability to communicate effectively, have empathy for clients, or a ‘can-do’ attitude to provide excellent service that can take years to develop.
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    </div>
  );
};

export default Trainer;
