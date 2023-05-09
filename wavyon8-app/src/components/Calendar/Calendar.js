import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Calendar.css";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const events = {}

  return (
    <div className="accordionContainer">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Next Event</Accordion.Header>
          <Accordion.Body>
            <span>IMAGE</span>
            <span>DATE</span>
            <span>DESCRIPTION</span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Upcoming Events</Accordion.Header>
          <Accordion.Body>
              <span>Jan</span>
              <span>Feb</span>
              <span>March</span>
              <span>April</span>
              <span>June</span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Gallery</Accordion.Header>
          <Accordion.Body>LINK</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Calendar;
