import React, {useEffect, useState} from 'react';
import Checkbox from "@mui/material/Checkbox";
import {CloseOutlined, DoneOutline} from "@mui/icons-material";
import "./style.scss"
import Lottie from "lottie-react";
import clientAnimation from '../../../animations/maintenance-web.json'
import {Link} from "react-router-dom";
import axios from "axios";
import {ApiUrl} from "../../../config";
import {toast, ToastContainer} from "react-toastify";
import logo from "../../../assets/images/URPLAZA.jpg";

function SignUp(props) {
    const [person,setPerson]=useState<any>({
        name:"",
        email:"",
        phone:null,
        description:"",
        service:"",
        city:"",
        address:""
    })
    const [validation,setValidation]=useState<any>({
        nameValidation:"notValid",
        emailValidation:"notValid",
        passwordValidation:"notValid",
        phoneValidation:"checked",
        descriptionValidation:"checked",
        jobValidation:"checked",
        cityValidation:"checked",
        addressValidation:"checked"
    })
    const [nationalCode, setNationalCode] = useState<any[]>([]);
    const [message, setMessage] = useState<string>("");
    const [agree, isagree] = useState<boolean>(false);
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const saveUser = async () => {


        try {
                if (Object.values(validation).every(value=>value === "checked") && agree) {

                    console.log(Object.values(validation).every(value=>value === "checked"))
                    const res = await axios.post(ApiUrl + "/auth/register", {name:person.name, email:person.email,password:person.password})
                    localStorage.setItem("token",res.data.tokens.access.token)
                    localStorage.setItem("user",JSON.stringify(res.data.user))
                    toast.success("ثبت نام با موفقیت انجام شد")
                    location.replace("/management/profile/settings")
                }else {

                }

        }catch (e) {
            console.log(e)
            toast.error(e.response.data.message)
        }
    }
    const checkName = (e)=>{
        setPerson({...person,name:e.target.value})
        if (e.target.value.length >= 3){
            setValidation(prev=>({...prev,nameValidation:"checked"}))
        }else setValidation(prev=>({...prev,nameValidation:"checkFailed"}))
    }
    const checkEmail =(e)=>{
        setPerson({...person,email:e.target.value})
        if (e.target.value.match(/\S+@\S+\.\S+/)){
            setValidation(prev=>({...prev,emailValidation:"checked"}))
        }else setValidation(prev=>({...prev,emailValidation:"checkFailed"}))
    }
    const checkPassword = (e)=>{
        setPerson({...person,password:e.target.value})
        if(e.target.value.match(/\d/) && e.target.value.match(/[a-zA-Z]/)){
            setValidation(prev=>({...prev,passwordValidation:"checked"}))
        }else setValidation(prev=>({...prev,passwordValidation:"checkFailed"}))
    }
    const formValidation = ()=>{

        if (person.name.length >= 3){
            setValidation(prev=>({...prev,nameValidation:"checked"}))
        }else setValidation(prev=>({...prev,nameValidation:"checkFailed"}))
        if (person.email.match(/\S+@\S+\.\S+/)){
            setValidation(prev=>({...prev,emailValidation:"checked"}))
        }else setValidation(prev=>({...prev,emailValidation:"checkFailed"}))
        if(person.password.match(/\d/) && person.password.match(/[a-zA-Z]/)){
            setValidation(prev=>({...prev,passwordValidation:"checked"}))
        }else setValidation(prev=>({...prev,passwordValidation:"checkFailed"}))
    }

    // useEffect(()=>{
    //     formValidation()
    // },[Object.values(person)])
    async function verify() {
        if (agree) {

            saveUser()

        } else setMessage("شرایط و مقررات را نپذیرفته اید.");
    }

    const renderEnter = () => {
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
                        value={person.name}
                        name={"name"}
                        onChange={checkName}
                        type={"text"}
                        placeholder={"نام خود را وارد کنید"}
                        className={"national-code-input"}
                        autoComplete="on"
                    />
                    {
                        validation.nameValidation === "checkFailed" ? <CloseOutlined
                                style={{marginLeft: "5px", fill: "red", animation: "validate-animate .5s"}}/> :
                            <DoneOutline style={{
                                marginLeft: "5px",
                                display: validation.nameValidation === "valid" ? "inline-block" : validation.nameValidation === "checked" ? "inline-block" : "none",
                                animation: "validate-animate .4s",
                                fill: validation.nameValidation === "valid" ? "green" : validation.nameValidation === "checked" && "green"
                            }}/>
                    }
                </div>
                <div className={"input-container-client"}>
                    <input
                        value={person.email}
                        name={"email"}
                        onChange={checkEmail}
                        type={"email"}
                        placeholder={"ایمیل خود را وارد کنید"}
                        className={"national-code-input"}
                        autoComplete="on"
                    />
                    {
                        validation.emailValidation === "checkFailed" ? <CloseOutlined
                                style={{marginLeft: "5px", fill: "red", animation: "validate-animate .5s"}}/> :
                            <DoneOutline style={{
                                marginLeft: "5px",
                                display: validation.emailValidation === "valid" ? "inline-block" : validation.emailValidation === "checked" ? "inline-block" : "none",
                                animation: "validate-animate .4s",
                                fill: validation.emailValidation === "valid" ? "green" : validation.emailValidation === "checked" && "green"
                            }}/>
                    }
                </div>
                <div className={"input-container-client"}>
                    <input
                        value={person.password}
                        name={"password"}
                        onChange={checkPassword}
                        type={"password"}
                        placeholder={"رمز عبور خود را وارد کنید"}
                        className={"national-code-input"}
                        autoComplete="on"
                    />
                    {
                        validation.passwordValidation === "checkFailed" ? <CloseOutlined
                                style={{marginLeft: "5px", fill: "red", animation: "validate-animate .5s"}}/> :
                            <DoneOutline style={{
                                marginLeft: "5px",
                                display: validation.passwordValidation === "valid" ? "inline-block" : validation.passwordValidation === "checked" ? "inline-block" : "none",
                                animation: "validate-animate .4s",
                                fill: validation.passwordValidation === "valid" ? "green" : validation.passwordValidation === "checked" && "green"
                            }}/>
                    }
                </div>


                <div style={{alignSelf: "flex-start"}}>
                    <label className={"label-condition"}>
                        {/*<input type={"checkbox"} value={agree} onChange={(e) => isagree(e.target.value)}/>*/}
                        <Checkbox style={{color: "var(--purple)"}} checked={agree}
                                  onChange={(e) => isagree(e.target.checked)}/>
                        <a target={"_blank"} href={"#"} rel="noreferrer">
                            {" "}
                            قوانین و مقررات{" "}
                        </a>
                        را میپذیرم
                    </label>

                    <label className={"error"}>{message}</label>

                </div>

                <button onClick={(e) => verify()} className={"submit-client"}>ثبت نام</button>
                <div style={{margin: "10px"}}>
                    <Link to={"/signin"}>ورود</Link>
                </div>
                <ToastContainer />
            </div>
        )
    };
    return (
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

            {renderEnter()}

        </div>
    )
}

export default SignUp;