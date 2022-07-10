import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { StatelessAccordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { useState } from "react";

function ExperienceAccordion(props) {
  const theme = props.theme;
  const [expanded, setExpanded] = useState(["Ervaring"]);

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <StatelessAccordion
          expanded={expanded}
          onChange={({ key, expanded }) => {
            console.log(key, expanded);
            setExpanded(expanded);
          }}
        >
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </StatelessAccordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
