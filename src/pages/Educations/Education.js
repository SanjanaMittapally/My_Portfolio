import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Bachler Of Technology</h3>
            <h5 className="vertical-timeline-element-subtitle">
              Major-MMAE,
              Minor- CSE
            </h5>
            <h4 className="vertical-timeline-element-subtitle">
              IIT Dharwad, Karnataka
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              CPI-8.28
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate(MPC)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sri Chaitanya Junior College(Madhapur), Hyderabad
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              Percentage-98%
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Schooling(8th-10th)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Aryabhatta Concept School, Warangal
            </h4>
            <h6 className="vertical-timeline-element-subtitle">
              SSC CGPA-10
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
