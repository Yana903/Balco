import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginBottom: theme.spacing(1),
            width: '25ch',
            display: "flex",
            flexDirection: "column",
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Ваше имя" variant="filled" />
            <TextField id="outlined-basic" label="Ваш email" variant="filled" />
            <TextField style={{ width: "80%", marginBottom: "20px" }}
                id="filled-multiline-static"
                label="Текст отзыва"
                multiline
                rows={4}
                variant="filled"
            />
            <Button variant="contained" color="primary" style={{ marginLeft: "0", width: "250px"}}>
                Оставить отзыв
            </Button>
        </form>
    );
}
