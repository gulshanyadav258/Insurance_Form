import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import PlanDetails from "../components/PlanDetails";
import Footer from '../components/Footer';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from "react";
function Screen1(props) {
  const { formData, setFormData, count, setCount } = props;

  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const div1Styles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "8px",
    flex: "none",
    order: "0",
    flexGrow: "0",
  };
  const div2Styles = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: "24px",
    flex: "none",
    order: "1",
    alignSelf: "stretch",
    flexGrow: "0",
  };
 const [isButtonDisabled, setisButtonDisabled] = useState(true);
 const [alert, setAlert] = useState("");

  useEffect(() => {
    if(formData.planType === "" || formData.email === "" || formData.mobile === "" || formData.address === "" || formData.address2 === "" || formData.state === "" ){
      setAlert("Please enter required Details");
        setisButtonDisabled(true);
        return;
    }
    if(formData.mobile.length !== 10 || /^[0-9]+$/.test(formData.mobile) === false){
      setAlert("Please enter correct Phone Number");
      setisButtonDisabled(true);
      return;
    }
    if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) === false){
      setAlert("Please enter correct email Address");
      setisButtonDisabled(true);
      return;
    }
    setAlert("");
    setisButtonDisabled(false);
  }, [
    formData.planType,
    formData.email,
    formData.mobile,
    formData.address,
    formData.address2,
    formData.state,
  ])
  return (
   <>
    <div className="BasicDetailsRoot">
      <div style={div1Styles}>
        <div id="PlanTitle">Choose your plan</div>
        <div id="Info">
          Hello Anisha, <br />
          Increase yours and your family's health insurance cover by ₹20 lakhs
          with <br /> Super top-up!
        </div>
      </div>
      <div style={div2Styles}>
        <PlanDetails formData={formData} setFormData={setFormData}/>
        <div style={{ width: "100%" }}>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Basic Details</Accordion.Header>
              <Accordion.Body>
              { alert.length > 0 &&
                <Alert key={"danger"} variant={"danger"}>
                   {alert}
              </Alert>}
                <Form className="BasicDetails">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        type="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group as={Col} controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" value={formData.address2} onChange={e => setFormData({...formData, address2: e.target.value})}/>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose..." value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})}>
                        <option>Choose...</option>
                        {state.map((state) => (
                          <option value={state}>{state}</option>
                        ))}
                      </Form.Select >
                    </Form.Group>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
    <Footer count={count} setCount={setCount} disabled={isButtonDisabled}/>
    </>
  );
}

export default Screen1;
