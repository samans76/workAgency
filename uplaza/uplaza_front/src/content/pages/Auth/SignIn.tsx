import React, {useState} from 'react';
import Checkbox from "@mui/material/Checkbox";
import {CloseOutlined, DoneOutline} from "@mui/icons-material";
import "./style.scss"
import Lottie from "lottie-react";
import clientAnimation from '../../../animations/maintenance-web.json'
import {Link} from "react-router-dom";
import axios from "axios";
import {ApiUrl} from "../../../config";
import {toast} from "react-toastify";
import logo from '../../../assets/images/URPLAZA.jpg'

function SignIn(props) {

    const [emailValidation, setEmailValidation] = useState<string>("notValid");
    const [passValidation, setPassValidation] = useState<string>("notValid");
    const [message, setMessage] = useState<string>("");
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>()


    const checkValidateNation = value => {
        setEmail(value);
       if (value.length > 5 ) setEmailValidation("checked")
        else  setEmailValidation("notValid")
    }
    const checkValidateMobile = value => {
        setPassword(value);
        if (value.length > 8 ) setPassValidation("checked")
        else setPassValidation("notValid")
    }
    async function verify() {

            try {
                const res = await axios.post(ApiUrl+"/auth/login",{email,password})
                localStorage.setItem("token",res.data.tokens.access.token)
                localStorage.setItem("user",JSON.stringify(res.data.user))
                toast.success("با موفقیت وارد شدید")
                if (res.data.user.role ==="user")location.replace("/management/profile/settings")
                else location.replace("/management/profile/settings")

            }catch (e) {
                toast.error(e.response.data.message)
            }
            // if (checkNationalId(email)) setEmailValidation("checked");
            // else {
            //     setMessage("لطفا یک کد ملی معتبر وارد کنید")
            //     setEmailValidation("checkFailed");
            // }
            //
            // if (checkMobile(password)) setPassValidation("checked");
            // else {
            //     setMessage("لطفا یک شماره همراه معتبر وارد کنید")
            //     setPassValidation("checkFailed");
            // }


    }

    const renderEnter=()=>{
    return (
        <div className={"form-container-client"}>

            {/*<div>*/}
            {/*    <h5 className="text">*/}
            {/*        شما می‌توانید*/}
            {/*        <span> 7روز هفته و 24 ساعته </span>*/}
            {/*        به صورت چت تصویری و متن با کارشناسان ما در ارتباط باشید.*/}
            {/*    </h5>*/}
            {/*</div>*/}
            <div >
                <img src={logo} alt="لوگو" style={{width:"50px",height:"50px"}}/>
            </div>

            <div className={"input-container-client"}>
                <input
                    value={email}
                    onChange={(e) => checkValidateNation(e.target.value)}
                    type={"email"}
                    placeholder={"ایمیل خود را وارد کنید"}
                    className={"national-code-input"}
                    autoComplete="on"
                    name={"email"}
                />
                {
                    emailValidation === "checkFailed" ? <CloseOutlined
                            style={{marginLeft: "5px", fill: "red", animation: "validate-animate .5s"}}/>:
                        <DoneOutline style={{
                            marginLeft: "5px",
                            display: emailValidation === "valid" ? "inline-block" : emailValidation === "checked" ? "inline-block":"none",
                            animation: "validate-animate .4s",
                            fill: emailValidation === "valid" ? "green" : emailValidation === "checked" && "green"
                        }}/>
                }
            </div>
            <div className={"input-container-client"}>
                <input
                    value={password}
                    onChange={(e) => checkValidateMobile(e.target.value)}
                    type={"password"}
                    placeholder={"رمز عبور خود را وارد کنید"}
                    className={"national-code-input"}
                    autoComplete="on"
                    name={"password"}
                />
                {
                    passValidation === "checkFailed" ? <CloseOutlined
                            style={{marginLeft: "5px", fill: "red", animation: "validate-animate .5s"}}/>:
                        <DoneOutline style={{
                            marginLeft: "5px",
                            display: passValidation === "valid" ? "inline-block" : passValidation === "checked" ? "inline-block":"none",
                            animation: "validate-animate .4s",
                            fill: passValidation === "valid" ? "green" : passValidation === "checked" && "green"
                        }}/>
                }
            </div>

            <div style={{margin:"10px"}}>
                <Link to={"/signup"}>ثبت نام</Link>
            </div>

            <div style={{alignSelf: "flex-start"}}>
                {/*<label className={"label-condition"}>*/}
                {/*    /!*<input type={"checkbox"} value={agree} onChange={(e) => isagree(e.target.value)}/>*!/*/}
                {/*    <Checkbox style={{color:"var(--purple)"}} checked={agree} onChange={(e) => isagree(e.target.checked)}/>*/}
                {/*    <a target={"_blank"} href={"/client/terms"} rel="noreferrer">*/}
                {/*        {" "}*/}
                {/*        قوانین و مقررات{" "}*/}
                {/*    </a>*/}
                {/*    را میپذیرم*/}
                {/*</label>*/}


                <label className={"error"}>{message}</label>
            </div>

            <button onClick={(e) => verify()} className={"submit-client"}>ورود</button>
        </div>
    )};
    return(
        <div dir="rtl" className={"firstpage"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" viewBox="0 0 1924.099 1083.9"
                 preserveAspectRatio={"none"}>
                <path className={"svg-path-background"} id="Path_1" data-name="Path 1"
                      d="M0,1080S113.112,748.278,591.662,794.683s234.924-174.018,600.362-449.547S1484.955-2.9,1484.955-2.9H1922.9V1080Z"
                      transform="translate(0.699 3.4)" fill="var(--orange)"/>
            </svg>
            <div className={"logo-client"}/>

            <div className={"animation-client-background"}>
                <Lottie animationData={clientAnimation}/>
            </div>

            { renderEnter() }
        </div>
    )
}

export default SignIn;