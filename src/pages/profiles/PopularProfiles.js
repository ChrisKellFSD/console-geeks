import React from "react";
import { Container } from "react-bootstrap";
import {Accordion} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

// Learned Accodion from the following page https://react-bootstrap-v4.netlify.app/components/accordion/

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
<Container className={`${appStyles.Content} ${mobile ? 'd-lg-none text-center mb-3' : ''}`}>
  {popularProfiles.results.length ? (
    <Accordion defaultActiveKey={!mobile ? '0' : null} alwaysOpen={!mobile && true}>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{}}>
            Popular Profiles
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className={mobile ? 'd-flex justify-content-around' : ''}>
            {popularProfiles.results
              .slice(0, mobile ? 4 : undefined)
              .map((profile) => (
                <Profile key={profile.id} profile={profile} mobile={mobile} />
              ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  ) : (
    <Asset spinner />
  )}
</Container>
  );
} 

export default PopularProfiles;