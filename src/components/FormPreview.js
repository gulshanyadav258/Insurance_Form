import "../App.css";

function FormPreview(props) {
  const { formData } = props;

  const formPerviewTitle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 32px",
    gap: "10px",
  };

  const divTitleLabel = {
    fontFamily: "'Inter'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#55657D",
  };

  const divider = {
    width: "100%",
    border: "1px solid #E1E5EB",
  };

  const detailsRoot = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "32px",
    gap: "12px",
  };
  const itemDetails = {
    width: "100%",
    fontFamily: "'Inter'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "130%",
    color: "#2D3D54",
  };

  const minusStyle = {
    fontFamily: "'Inter'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "130%",
    textAlign: "right",
    color: "#55657D",
  };

  const itemDetailsRoot = {
    width: "100%",
    display: "flex",
    wordBreak: "break-word",
    justifyContent: "space-between",
  };

  return (
    <div id="FormPreviewRoot">
      <div style={formPerviewTitle}>
        <div style={divTitleLabel}>Form preview</div>
      </div>
      <div style={divider} />
      <div style={detailsRoot}>
        <div style={itemDetailsRoot}>
          <div style={itemDetails}>Personal email address</div>
          <div style={minusStyle}>
            {formData.email !== "" ? formData.email : "-"}{" "}
          </div>
        </div>
        <div style={itemDetailsRoot}>
          <div style={itemDetails}>Mobile number</div>
          <div style={minusStyle}>
            {formData.mobile !== "" ? formData.mobile : "-"}
          </div>
        </div>
        <div style={itemDetailsRoot}>
          <div style={itemDetails}>Address line 01</div>
          <div style={minusStyle}>
            {formData.address !== "" ? formData.address : "-"}
          </div>
        </div>
        <div style={itemDetailsRoot}>
          <div style={itemDetails}>Address line 02</div>
          <div style={minusStyle}>
            {formData.address2 !== "" ? formData.address2 : "-"}
          </div>
        </div>
        <div style={itemDetailsRoot}>
          <div style={itemDetails}>Pincode</div>
          <div style={minusStyle}>
            {formData.pincode !== "" ? formData.pincode : "-"}
          </div>
        </div>
        <div style={itemDetailsRoot}>
          <div style={itemDetails}>State</div>
          <div style={minusStyle}>
            {formData.state !== "" ? formData.state : "-"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPreview;
