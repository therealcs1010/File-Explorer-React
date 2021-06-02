import { useLocation } from 'react-router-dom'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: "80%",
        backgroundColor: theme.palette.background.paper,
        alignItems: "center",
        justifyContent: 'center',
        margin: 'auto',
        maxHeight : '500px',
        overflow : 'auto'
    }
}));



const FileBrowser = ({ signatures, onDelete, onView }) => {
    const location = useLocation();
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);


    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <div class="file-browser">
            <h2>{location.pathname}</h2>
            <List className={classes.root}>
                {signatures.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.namespace}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="view" onClick={onView}>
                                    <ViewListIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(value.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </div>

    )
}

export default FileBrowser
