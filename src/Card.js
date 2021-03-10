import './Card.css';

function Card (props) {
    return <div className="card Card-Buffer">
        <div className="card-header">
            {props.title}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
}
 export default Card