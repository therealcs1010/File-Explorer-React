// import Button from './Button'
import {Checkbox, Button} from '@material-ui/core/';
import { useState } from 'react'

const Signature = ({ signature, onDelete, onView }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className={'signature'}>
            <h3>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                {signature.namespace}
                <div>
                    <Button className='signature-button' color='primary' onClick={onView}>View</Button>
                    <Button color='#556F7A' onClick={() => onDelete(signature.id)}>Delete</Button>
                </div>

            </h3>

        </div>
    )
}

export default Signature
