import "./InitialPage.css";
import GlitchyText from "./Helper Components/GlitchyText";

export default function InitialPage() { 

    const welcomeCodeStyling = { 
        fontSize: "1.7rem",
        color: "#F2ECD5",
        fontFamily: "Big Shoulders Display",
        fontWeight: "700",
        letterSpacing: "0.3rem" 
    }

    return (
        <div className="Main-Container">
            <div className="frontPage">
                <img className="frontPage-image" src="./FrontPageWithCorners.png" />
            </div>

            <GlitchyText styling={
                {
                    position: "absolute",
                    fontSize: "10rem",
                    color: "#F2ECD5",
                    top: "35vh",
                    left: "10rem",
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "900"
                }
            } text="DIVYANSHU" />

            <GlitchyText styling={
                {
                    position: "absolute",
                    fontSize: "10rem",
                    color: "#F2ECD5",
                    top: "50vh",
                    left: "10rem",
                    fontFamily: "Big Shoulders Display",
                    fontWeight: "900"
                }
            } text="DAVE KHADKA" />

            <div className="WelcomeCode">
                <GlitchyText styling={welcomeCodeStyling} text=" //Welcome" />
                <GlitchyText styling={welcomeCodeStyling} text= "IF READYTOCONTINUE {" />
                <GlitchyText styling={welcomeCodeStyling} text= "&nbsp;&nbsp;&nbsp; SCROLLDOWN()" />
                <GlitchyText styling={welcomeCodeStyling} text= "} else {" />
                <GlitchyText styling={welcomeCodeStyling} text= "&nbsp;&nbsp;&nbsp; KEEPLOOKING()" />
                <GlitchyText styling={welcomeCodeStyling} text= "}" />
            </div>

        </div>
    )


}