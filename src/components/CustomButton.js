import Button from '@material-ui/core/Button';

const CustomButton = ({backgroundColor, textColor, text, onClick}) => {
    const addStyle = {
            display: "inline-block",
            background: `${backgroundColor}`,
            color: `${textColor}`,
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "20px",
            padding: "5px 30px",
            textAlign: 'center'
    }
    return (
        <Button style={addStyle} onClick={onClick}>{text}</Button>
    )
}

export default CustomButton
