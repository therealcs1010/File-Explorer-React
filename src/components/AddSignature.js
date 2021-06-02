import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        minWidth: 120
    },
    formControlSubmit: {
        margin: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    select: {
        display: "flex",
        minWidth: 120
    },
    selectLabel: {
        display: "flex"
    },
    button: {
        background: '#2E6171',
        borderRadius: 3,
        border: 0,
        color: 'w   hite',
        height: 48,
        padding: '0 30px',
    }
}));

const AddSignature = ({ onAdd }) => {
    const [namespace, setNamespace] = useState('')
    const [name, setName] = useState('')
    const [digesttype, setDigesttype] = useState('')
    const [digest, setDigest] = useState('')
    const classes = useStyles();


    const onSubmit = (e) => {
        e.preventDefault()

        if (!namespace) {
            alert('Please complete the namespace')
            return
        }
        if (!name) {
            alert('Please complete the name')
            return
        }
        if (!digesttype) {
            alert('Please complete the digesttype')
            return
        }
        if (!digest) {
            alert('Please complete the digest')
            return
        }
        // onAdd({ namespace, name, digesttype, digest })
        onAdd({ namespace })
        setNamespace('')
        setName('')
        setDigesttype('')
        setDigest('')
    }



    return (

        <form className={'add-form'} onSubmit={onSubmit}>
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Namespace" variant="outlined" value={namespace} onChange={(e) => setNamespace(e.target.value)} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Digest Type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined" value={digesttype} onChange={(e) => setDigesttype(e.target.value)}>
                    <MenuItem value={"SHA256"}>SHA256</MenuItem>
                    <MenuItem value={"SHA-1"}>SHA-1</MenuItem>
                    <MenuItem value={"SHA-2"}>SHA-2</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Digest" variant="outlined" value={digest} onChange={(e) => setDigest(e.target.value)} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <input type='file' />
            </FormControl>
            <FormControl className={classes.formControlSubmit}>
            <CustomButton onClick={onSubmit} backgroundColor="#2E6171" textColor="white" text="Upload Signature"/>

            </FormControl>
        </form>
    )
}

export default AddSignature
