import React from "react";

function Links(props) {
  // return (
  //   <>
  //     <h3>Links</h3>
  //     <a href={props.github}>Github</a>
  //     <a href={props.linkedin}>LinkedIn</a>
  //   </>
  // );
  const { github, linkedin } = props;

  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;
