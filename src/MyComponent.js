import React from "react";
import PropTypes from "prop-types";
const MyComponent = ({ name, children }) => {
  return (
    <div>
      내 컴포넌트 이름 : {name}
      <div>{children}</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
