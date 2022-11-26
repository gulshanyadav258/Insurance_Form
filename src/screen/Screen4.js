import React from 'react';
import BackArrow from '../images/BackArrow.svg';
import Footer from '../components/Footer';

function Screen4(props) {
    const { count, setCount, formData } = props;
    const div535Styles= {
      width: "100%",
        display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
       gap: "24px",
    }
    const div531Styles= {
       width:"100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
       gap: "32px",
    }
    const ConfirmPayment = {
      width: "100%",
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "flex-start",
      "padding": "0px",
    background: "#FFFFFF",
    borderRadius: "10px",
      }

  const screenTitle = {
    "fontFamily": "'Inter'",
    "fontStyle": "normal",
    "fontWeight": "700",
    "fontSize": "32px",
    "lineHeight": "195%",
    "color": "#182639"
  }

  const paymentItems = {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "padding": "16px 32px",
    "gap": "60px"
  }

  const paymentItemLabel = {
    "fontFamily": "'Inter'",
    "fontStyle": "normal",
    "fontWeight": "400",
    "fontSize": "16px",
    "lineHeight": "132%",
    "display": "flex",
    "alignItems": "center",
    "color": "#55657D"
  }

  const paymentItemDetail = {
    "fontFamily": "'Inter'",
    "fontStyle": "normal",
    "fontWeight": "600",
    "fontSize": "16px",
    "lineHeight": "140%",
    "display": "flex",
    "alignItems": "center",
    "color": "#182639"
  }

  const paymentCol = {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "padding": "0px",
    gap:"25px"
  }


    return (
        <>
           <div style={div535Styles}>
           <div style={div531Styles}> 
          <img src={BackArrow} alt="BackArrow" onClick={() => { props.setCount(props.count > 1 ? props.count - 1 : 0) }} />
           {/* it will be removed on submission */}
          <div style={screenTitle}>Review and confirm payment</div> 
           {/* dynamicly changed to "Congratulations!" */}
           </div>
           <div style={ConfirmPayment}> 
          <div style={paymentItems}>
           <div style={paymentCol}>
              <div style={paymentItemLabel}>Plan selected</div>
              <div style={paymentItemLabel}>Mobile number</div>
              <div style={paymentItemLabel}>Address</div>
              <div style={paymentItemLabel}>Pincode</div>
              <div style={paymentItemLabel}>State</div>
              <div style={paymentItemLabel}>Amount deductible</div>
           </div>
            <div style={paymentCol}>
              <div style={paymentItemDetail}>{formData.planType}</div>
              <div style={paymentItemDetail}>{formData.mobile}</div>
              <div style={paymentItemDetail}>{formData.address},{" "}{formData.address2}</div>
              <div style={paymentItemDetail}>{formData.pincode}</div>
              <div style={paymentItemDetail}>{formData.state}</div>
              <div style={paymentItemDetail}>₹{formData.slider}L</div>
            </div>
           </div>
           </div>
           </div>
            <Footer count={count} setCount={setCount} text={"Submit"}/>
            </>
    );
}

export default Screen4;