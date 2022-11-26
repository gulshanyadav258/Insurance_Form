import Accordion from "react-bootstrap/Accordion";
import "../App.css";
import self from "../images/self.svg";
import parent from "../images/parent.svg";
import self_parent from "../images/self_parent.svg";
import Dropdown from "react-bootstrap/Dropdown";
function PlanDetails(props) {
  const { formData, setFormData } = props;
  const divRoot = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "16px",
    gap: "12px",
    width: "500px",
  };

  const planTypeLabel = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "130%",
    color: "#2D3D54",
  };

  const selectPlanLabel = {
    width: "500px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "132%",
    /* or 21px */
    display: "flex",
    alignItems: "center",

    /* Gray/600 */
    color: "#2D3D54",
    backgroundColor: "white",
  };
  const divider = {
    width: "100%",
    height: "0.25rem",
    backgroundColor: "#E1E5EB",
  };
  function onDropDownChange(value) {
    setFormData({ ...formData, planType: value });
  }
  return (
    <div style={{ width: "100%" }}>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Plan Details</Accordion.Header>
          <Accordion.Body>
            <div style={divRoot}>
              <div style={planTypeLabel}>Your plan type</div>

              <Dropdown>
                <Dropdown.Toggle style={selectPlanLabel}>
                  {formData.planType !== ""
                    ? formData.planType
                    : "Select your plan"}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: "500px" }}>
                  <Dropdown.Item
                    eventKey="self"
                    onClick={() => onDropDownChange("One (Individual)")}
                  >
                    One (Individual)
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <img src={self} alt="Self" /> <b>self</b>
                      </div>
                      <b>₹600</b>
                    </div>
                  </Dropdown.Item>

                  <div style={divider} />

                  <Dropdown.Item
                    eventKey="parent"
                    onClick={() => onDropDownChange("Pro (Individual)")}
                  >
                    Pro (Individual)
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <img src={parent} alt="parent" /> <b>parent</b>
                      </div>
                      <b>₹0</b>
                    </div>
                  </Dropdown.Item>

                  <div style={divider} />

                  <Dropdown.Item
                    eventKey="self+parent"
                    onClick={() =>
                      onDropDownChange("Plus (Individual + Individual)")
                    }
                  >
                    Plus (Individual + Individual)
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <img src={self_parent} alt="Self+parent" />{" "}
                        <b>self+parent</b>
                      </div>
                      <b>₹600</b>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Form.Select
                aria-label="Default select example"
                value={formData.planType}
                onChange={(e) =>
                  setFormData({ ...formData, planType: e.target.value })
                }
              >
                <option value={""}>
                  <div style={selectPlanLabel}>Select your plan</div>
                </option>

           
                <option value="self"> self</option>

                <option value="parent">parent</option>
        
                <option value="self + parent">self + parent</option>
              </Form.Select> */}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default PlanDetails;
