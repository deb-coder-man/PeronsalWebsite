import "./InitialPage.css";
import GlitchyText from "./Helper Components/GlitchyText";

export default function InitialPage() { 

    const welcomeCodeStyling = { 
        fontSize: "1rem",
        color: "#F2ECD5",
        fontFamily: "Big Shoulders Display",
        fontWeight: "700",
        letterSpacing: "0.3rem" 
    }

    const firstNameStyling = { 
        fontSize: "8rem",
        color: "#F2ECD5",
        fontFamily: "Big Shoulders Display",
        fontWeight: "900"
    }

    const lastNameStyling = {
        fontSize: "8rem",
        color: "#F2ECD5",
        fontFamily: "Big Shoulders Display",
        fontWeight: "900"
    }

    return (
        <div className="Main-Container">

            <div className="filler">
                HELLO 
            </div>
            <div className="frontPage">
                <div className="frontPage-fullname">
                    <GlitchyText styling={firstNameStyling}text="DIVYANSHU" />
                    <GlitchyText styling={lastNameStyling} text="DAVE KHADKA" />
                </div>
                <div className="WelcomeCode">
                    <GlitchyText styling={welcomeCodeStyling} text=" //Welcome" />
                    <GlitchyText styling={welcomeCodeStyling} text= "IF READYTOCONTINUE {" />
                    <GlitchyText styling={welcomeCodeStyling} text= "&nbsp;&nbsp;&nbsp; SCROLLDOWN()" />
                    <GlitchyText styling={welcomeCodeStyling} text= "} else {" />
                    <GlitchyText styling={welcomeCodeStyling} text= "&nbsp;&nbsp;&nbsp; KEEPLOOKING()" />
                    <GlitchyText styling={welcomeCodeStyling} text= "}" />
                </div>
            </div>
            
           

        </div>
    )


}