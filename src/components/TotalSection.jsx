import React from "react";
import Section from "./Section";
import contents from "../contents";


function Allign(cont){
    return <>
        <Section 
        
            pBackImage={cont.back_image}
            pTitle={cont.title}
            pTitleImage={cont.title_image}
            pSubtitle={cont.subtitle}
            pSubtitleContent={cont.subtitle_content}
           pBackColor={cont.back_color}
        />
    </>
}



function TotalSection(){
    

    return <>
    {contents.map(Allign)}
    </>
}

export default TotalSection;