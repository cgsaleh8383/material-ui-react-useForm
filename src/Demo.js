//* you just Install it(npm)
//*@material-ui/core
//*react-hook-form
//*@date-io/date-fns
//*@material-ui/pickers

import React from "react";
import hero from "./assets/3.svg";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    InputLabel,
    Switch,
    Select,
    MenuItem,
    Button,
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
////import {  } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));

const Demo = () => {
    const classes = useStyles();


    return (
        <div className="box">
            <div className="box-primary">
                <img src={hero} height="300px" alt="" />
            </div>
            <div className="box-secondary">
                <form>
                    {/* 1) TextField */}
                    <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='firstName'
                    />

                    {/* 2) TextField */}
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='lastName'
                    />

                    {/* 3) TextField */}
                    <TextField
                        placeholder="Enter Your E-mail Address"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='email'
                    />

                    {/* 4) TextField */}
                    <TextField
                        placeholder="Enter Your Phone Number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='phone'
                    />

                    {/* 5) TextField */}
                    <TextField
                        placeholder="Enter Your Password"
                        label="password"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='password'
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {/* 5) Date Picker */}

                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            label="Date of Admission"
                            fullWidth

                        />


                        {/* 4) Time Picker */}
                        <KeyboardTimePicker
                            margin="normal"
                            label="Time of Admission"
                            value={null}
                            fullWidth
                        />

                    </MuiPickersUtilsProvider>

                    {/* Radio Buttons */}
                    <FormControl className={classes.inputField}>
                        <FormLabel>Choose Your Gender</FormLabel>
                        <RadioGroup row name="gender">
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel value="male" control={<Radio  />} label="Male" />
                            <FormControlLabel value="other" control={<Radio  />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    {/* Select */}
                    <FormControl fullWidth className={classes.inputField}>
                        <InputLabel id="demo-simple-select-label">
                            Select Your Course
                        </InputLabel>
                                <Select>
                                    <MenuItem value="">Choose your course</MenuItem>
                                    <MenuItem value="Web Development">Web Development</MenuItem>
                                    <MenuItem value="App Development">App Development</MenuItem>
                                    <MenuItem value="UI/UX">UI/UX</MenuItem>
                                </Select>
                    </FormControl>

                    {/*  Switch */}
                    <FormControlLabel
                        className={classes.inputField}

                        control={<Switch name='notification' />}
                        label="Send me regular updates"
                    />

                    {/* Checkbox */}
                    <FormControlLabel
                        style={{ display: "block", marginBottom: 15 }}
                        control={<Checkbox name='terms' />}
                        label="I aggree all terms and conditions"
                    />

                    <Button variant="contained" color="primary" type="submit">
                        create new account
                    </Button>
                </form>
            </div>

        </div>
    );
};

export default Demo;