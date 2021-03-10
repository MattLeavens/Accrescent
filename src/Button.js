
function Button(props) {
    return <button type="button" className="btn btn-info" onClick={props.onClick}>{props.buttonContent}</button>
}

export default Button


