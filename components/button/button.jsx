const Button = ({buttonColor, buttonBehavior}) => {
    return <div className="button" 
    style={{backgroundColor:buttonColor}}
    onClick={buttonBehavior}>
        {buttonColor}
    </div>
}

export default Button