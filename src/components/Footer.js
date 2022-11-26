import React from "react";
import Button from "react-bootstrap/Button";
function Footer({ count, setCount, disabled, text }) {
  const footerRoot = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "24px",
    gap: "24px",
  };

  const handleNext = () => {
    if (disabled) return;
    setCount(count < 4 ? count + 1 : 4);
  };

  return (
    <div className="Footer">
      <div style={footerRoot}>
        <Button
          variant="danger"
          className="NextButton"
          onClick={handleNext}
          disabled={disabled}
        >
          {text ? text : "Next"}
        </Button>{" "}
      </div>
    </div>
  );
}

export default Footer;
