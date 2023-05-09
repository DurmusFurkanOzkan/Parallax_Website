import React from "react";

function Section(props){

    return <article className="container">
        <header className="container-header">
            
             <div className="top-container"  style={{ backgroundImage: `url(${props.pBackImage})` }}>
            { props.pTitle ? <h1>{props.pTitle}</h1> : <img src={props.pTitleImage} alt="" />}
            
            </div> 
            
        </header>
        {props.pSubtitle&&<footer className="container-footer"  style={(props.pBackColor=="black" ? {backgroundColor:props.pBackColor ,color:"white"} : {backgroundColor:props.pBackColor ,color:"black"} )  }  >
            <div className="footer-content">
                <h3>{props.pSubtitle}</h3>
                <p>{props.pSubtitleContent}</p>
            </div>
        </footer>
        }
        
        
    </article>

}

export default Section;