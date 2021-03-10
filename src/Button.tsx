import Article from "./Article";


export interface ButtonProps{
    onClick: () => void;
    buttonContent: string;
}

function Button(props:ButtonProps) {
    return <button type="button" className="btn btn-info" onClick={props.onClick}>{props.buttonContent}</button>
}

export default Button


