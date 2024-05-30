import Button from '../button/button'
import './buttonWrapper.scss'
import '../button/button.scss'

const ButtonWrapper = ({buttonColors, buttonBehavior}) => {
    return <div className="buttonWrapper">
        {buttonColors.map((buttonColor) => 
        (<Button buttonColor={buttonColor} buttonBehavior={buttonBehavior} />))}
    </div>
}

export default ButtonWrapper