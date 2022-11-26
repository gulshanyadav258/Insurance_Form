import React from 'react';
import BackArrow from '../images/BackArrow.svg';
import Profile from '../images/Profile.svg';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';

function Screen2(props) {
    const { formData, setFormData, count, setCount } = props;
    const div533Styles = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "40px",
    }
    const AmountInfo = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
        gap: "24px",
    }
    const div532Styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "8px",
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
    const AmountDetail = {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "140%",
        /* or 25px */


        /* Gray/600 */

        color: "#2D3D54",
    }
    const SumDetailWithTerm = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",

    }

    const selfTitleLabel = {
        // paddingLeft: "16px",
        // paddingTop: "16px",
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "130%",
        /* or 23px */


        /* Gray/800 */

        color: "#182639"
    }

    const johnDoe = {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "130%",
        marginLeft: "5px",
        /* or 18px */


        /* Gray/900 */

        color: "#000A26"

    }

    const selfDescribe = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // padding: "16px",
        // gap: "16px"
    }
    const divider = {
        width: "100%",
        height: "0.25rem",
        backgroundColor: "#fafafa"
    }

    const card1 = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "16px",
        gap: "16px",

        /* White */

        background: "#FFFFFF",
        borderRadius: "10px 10px 0px 0px",
    }
    const card2 = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: '24px 16px',
        gap: "16px",
        background: "#FFFFFF",
        borderRadius: "0px 0px 10px 10px"

    }

    const sumInsuredText = { "fontFamily": "'Inter'", "fontStyle": "normal", "fontWeight": "400", "fontSize": "16px", "lineHeight": "132%", "color": "#2D3D54" }

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
        "color": "#2D3D54"
    }
  const Bar = {
    "width": "100%",
    "display" : "flex",
    "justifyContent": "space-between",
  }
  const [isButtonDisabled, setisButtonDisabled] = useState(true);
    const [alert, setAlert] = useState("");
   
     useEffect(() => {
       if(formData.secondPageTick === false ){
         setAlert("Please select check mark");
           setisButtonDisabled(true);
           return;
       }
       setAlert("");
       setisButtonDisabled(false);
     }, [
       formData.secondPageTick, 
     ])
    return (
        <>
        <div style={div533Styles}>
            <div style={AmountInfo}>
                <img src={BackArrow} alt="BackArrow" onClick={() => { props.setCount(props.count > 1 ? props.count - 1 : 0)}} />
                <div style={div532Styles}>
                    <div style={AmountTitle}>
                        Select your deductible amount
                    </div>
                    <div style={AmountDetail}>
                        Select the deductible amount for the policy (or policies) below.
                    </div>
                    <div style={AmountDetail}>
                        <a href="https://www.healthcare.gov/glossary/deductible/" target={"_blank"}> what is a deductible? </a>
                    </div>
                </div>
            </div>

            <div style={SumDetailWithTerm}>
                <div style={card1}>
                <div style={{width: "100%"}}>{ alert.length > 0 &&
                <Alert key={"danger"} variant={"danger"} >
                   {alert}
              </Alert>}
              </div>
                    <div style={selfTitleLabel}>{formData.planType}</div>
                    <div style={selfDescribe}>
                        <img src={Profile} alt="Profile" />
                        
                        <div style={johnDoe}>John Doe</div>
                    </div>
                </div>
                <div style={divider}/>
                <div style={card2}>
                    <div style={sumInsuredText}>Sum insured of ₹20,00,000 with a deductible of <b> ₹{formData.slider * 100000}</b></div>
                    <Form.Range min={1} max={5} step={1} value={formData.slider} onChange={(e) =>
                          setFormData({ ...formData, slider: e.target.value })
                        }/>
                <div style={Bar}>
                    <span>
                    ₹1L
                    </span>
                    <span>
                    ₹2L   
                    </span>
                    <span>
                    ₹3L  
                    </span>
                    <span>
                    ₹4L  
                    </span>
                    <span>
                    ₹5L  
                    </span>
                </div>
                </div>
               
            </div>
             
            <div style={checkBoxRoot}>
                <Form.Check aria-label="option 1" checked={formData.secondPageTick}
                        onChange={(e) =>
                          setFormData({ ...formData, secondPageTick: !formData.secondPageTick })
                        }/>
                <div style={checkBoxLabel}>I understand that this insurance will not be utilized until  ₹{formData.slider * 100000} (deductible) is exhausted.</div>
            </div>
        </div>
            <Footer count={count} setCount={setCount} disabled={isButtonDisabled}/>
            </>
    );
}

export default Screen2;