import PropTypes from 'prop-types'
// import Button from '@material-ui/core/Button';
import CustomButton from './CustomButton'
const Header = ({title, onAddClick, showAdd}) => {
    
    const buttonStyle = {

    }

    return (
        <header className='header'>
            <h1>{title}</h1> 
            {showAdd ? 
            <CustomButton backgroundColor="#556F7A" textColor="white" text="Back" onClick={onAddClick}/> : 
            <CustomButton backgroundColor="#798086" textColor="white" text="Add" onClick={onAddClick}/> } 
        </header>
    )
}

Header.defaultProps = { 
    title : 'Container Signature Server'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header
