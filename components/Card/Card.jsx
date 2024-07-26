import './Card.scss'

const Card = ({src}) => {
    return(
        <div className="card-wrapper">
            <div className="input-mock">
                <p className="input">
                    White
                    <hr />
                </p>
                <p className="input">
                    Blazer
                    <hr />
                </p>
                <p className="input">
                    Rengoku
                    <hr />
                </p>
            </div>
            <div className="output-mock">
                <img src={src} />
            </div>
        </div>
    )
}

export default Card;