import React from 'react';
import { useEffect, useState } from "react";
import BackArrow from '../images/BackArrow.svg';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Alert from 'react-bootstrap/Alert';
function Screen2(props) {
    const { formData, setFormData, count, setCount } = props;
    const div533Styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "40px",
    }
    const div530Styles = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "40px",
    }
    const Terms = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px 0px 0px 88px",
        gap: "40px",
    }
    const AmountTitle = {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "120%",
        /* or 38px */


        /* Gray/800 */

        color: "#182639",
    }
    const checkBoxRoot = {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "padding": "0px",
        "gap": "12px"
    }

    const checkBoxLabel = {
        "fontFamily": "'Inter'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": "18px",
        "lineHeight": "140%",
        "flex-wrap":"wrap"
    }
    const [isButtonDisabled, setisButtonDisabled] = useState(true);
    const [alert, setAlert] = useState("");
   
     useEffect(() => {
       if(formData.thridPageCheckBox1 === false || formData.thridPageCheckBox2 === false || formData.thridPageCheckBox3 === false || formData.thridPageCheckBox4 === false ){
         setAlert("Please select all check marks");
           setisButtonDisabled(true);
           return;
       }
       setAlert("");
       setisButtonDisabled(false);
     }, [
       formData.thridPageCheckBox1,
       formData.thridPageCheckBox2,
       formData.thridPageCheckBox3,
       formData.thridPageCheckBox4, 
     ])
    return (
        <>
       <div style={div533Styles}>
       <div style={div530Styles}>
                <img src={BackArrow} alt="BackArrow" onClick={() => { props.setCount(props.count > 1 ? props.count - 1 : 0) }} />
       <div style={AmountTitle}>
       Declaration
        </div>
       </div>
       <div style={Terms}>
      <div style={{width: "100%"}}> { alert.length > 0 &&
                <Alert key={"danger"} variant={"danger"}>
                   {alert}
              </Alert>}
              </div>
       <div style={checkBoxRoot}>
                <Form.Check aria-label="option 1" checked={formData.thridPageCheckBox1}
                        onChange={(e) =>
                          setFormData({ ...formData, thridPageCheckBox1: !formData.thridPageCheckBox1 })
                        }/>
                <div style={checkBoxLabel}>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</div>
            </div>
       
            <div style={checkBoxRoot}>
                <Form.Check aria-label="option 2" checked={formData.thridPageCheckBox2}
                        onChange={(e) =>
                          setFormData({ ...formData, thridPageCheckBox2: !formData.thridPageCheckBox2 })
                        }/>
                <div style={checkBoxLabel}>I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.</div>
            </div>

            <div style={checkBoxRoot}>
                <Form.Check aria-label="option 3" checked={formData.thridPageCheckBox3}
                        onChange={(e) =>
                          setFormData({ ...formData, thridPageCheckBox3: !formData.thridPageCheckBox3 })
                        }/>
                <div style={checkBoxLabel}>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)</div>
            </div>

            <div style={checkBoxRoot}>
                <Form.Check aria-label="option 4" checked={formData.thridPageCheckBox4}
                        onChange={(e) =>
                          setFormData({ ...formData, thridPageCheckBox4: !formData.thridPageCheckBox4 })
                        }/>
                <div style={checkBoxLabel}>I understand that this policy doesn't cover Pre-existing diseases.</div>
            </div>

       </div>
       </div>
         <Footer count={count} setCount={setCount} disabled={isButtonDisabled}/>
         </>
    );
}

export default Screen2;