import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                web Development
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SMP at IIT Dharwad
              </h4>
              <p>
                Worked for Student Mentorship(SMP) website at our institute.
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023-2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h4 className="vertical-timeline-element-title">
                Sub Head(Assistant Student Mentor coordinator) of Student Mentorship Programme
              </h4>
              <h6 className="vertical-timeline-element-subtitle">
                SMP(IIT Dharwad)
              </h6>
              <p>
                Worked as Sub Head of Student Mentorship(SMP) at our institute.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
