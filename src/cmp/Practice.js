import React, {useState} from 'react'

export default function Practice(props) {
    const [text, setText]= useState('')
  
    const handleOnChange = (event)=>{
        setText(event.target.value)

        
    }
    const handleUpClick = ()=>
    {
        const newText= text.toUpperCase();
        setText(newText)
        props.showalert("Converted to UpperCase","success")
        
    }
    const handleDownClick = ()=>
    {
        const newText=text.toLowerCase();
    setText(newText) 
    props.showalert("Converted to LowerCase","success")
    }
    const handleClearClick = ()=>
    {
        const newText= '';
        setText(newText)
        props.showalert("Text Cleared","warning")
        
    }
    const [myStyle, setMyStyle] = useState({
        color: 'black'
    })

    const [btnText, setBtnText] = useState("Enable Green Color")

    const toggleStyle = ()=>{
        if(myStyle.color ==='red'){
            setMyStyle({
                color: 'Green'
            })
            setBtnText("Enable Red Color")
        }
        else{
            setMyStyle({
                color:"red"
            })
            setBtnText("Enable Green Color")
        }
    }
    
  return (
    <>
     <div >
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#0e376e'}}>
    <h1>{props.heading}</h1>
    <div className="my-3">
    <textarea className="form-control" value={text}  onChange={handleOnChange} 
    style={{background: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="5">

    </textarea>
    </div>

    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>

    <button className="btn btn-success mx-1" onClick={handleDownClick}>Convert to lowercase</button>

    <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>

    <button className="btn btn-secondary mx-1" onClick={toggleStyle}>{btnText}</button>
        
  </div>
</div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#0e376e'}}>
    <h1>Your text summay here</h1>
    <p>{((text.trim().split(" ")).filter(function(element){return element!=="";})).length}Words {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
   
    

    
    <h2>Preview</h2>
    <p style={myStyle}>{text.length>0?text:<strong>Enter your text to preview</strong>}</p>
    </div>
    </>
  )
}
