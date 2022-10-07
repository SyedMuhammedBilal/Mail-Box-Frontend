import { Box, TextField } from '@material-ui/core'
import React from 'react'
import useStyles from './stylesheet'

const MultiTextfields = ({
    placeholder,
    value,
    onChange,
    type,
    name,
}: {
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    name: string
}) => {
    const classes = useStyles()
  return (
    <Box>
      <TextField
        className={classes.textFieldContainer}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id="filled-basic"
        autoComplete="off"
        placeholder={placeholder}
        variant="filled"
        InputLabelProps={{
          style: { color: "#7B7B7B" },
        }}
        inputProps={{ form: { autoComplete: "off" } }}
      />
    </Box>
  )
}

export default MultiTextfields