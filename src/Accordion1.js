import React from "react";
import styled from "styled-components";

const Accordion1 = ({ label, content, level, weight, size }) => {
  const [active, setActive] = React.useState(false);
  return (
    <div
      style={{ border: "2px solid grey", margin: "5px", borderRadius: "4px" }}
    >
      <LabelWrapper level={level} weight={weight} size={size} content={content}>
        <div>{label}</div>
        <div style={{ cursor: "pointer" }} onClick={() => setActive(!active)}>
          {active ? "-" : "+"}
        </div>
      </LabelWrapper>
      {active && (
        <>
          {Array.isArray(content) && content.length > 0 ? (
            content.map(({ label, content }) => (
              <Accordion1
                label={label}
                content={content}
                level={parseInt(level) + 8}
                weight={parseInt(weight) - 200}
                size={parseInt(size) - 3}
              />
            ))
          ) : (
            <ContentWrapper level={level} weight={weight} size={size}>
              {content}
            </ContentWrapper>
          )}
        </>
      )}
    </div>
  );
};

export default Accordion1;

const LabelWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
  margin-left: ${(props) => props.level}px;
  justify-content: space-between;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  border-radius: 4px;
  padding: 5px;
  //border: ${(props) =>
    Array.isArray(props.content) && props.content.length > 0
      ? "2px solid grey"
      : ""};
`;

const ContentWrapper = styled.div`
  //border-radius: 4px;
  //border: 2px solid grey;
  margin-left: ${(props) => props.level}px;
  margin-bottom: 5px;
  padding: 5px;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
`;
