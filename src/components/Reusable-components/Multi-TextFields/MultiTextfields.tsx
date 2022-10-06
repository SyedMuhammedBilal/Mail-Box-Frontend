import { Box, TextField } from '@material-ui/core'
import React from 'react'
import useStyles from './stylesheet'

const MultiTextfields = ({
    placeholder,
}: {
    placeholder: string
}) => {
    const classes = useStyles()
  return (
    <Box>
      <TextField
        className={classes.textFieldContainer}
        id="filled-basic"
        placeholder={placeholder}
        variant="filled"
        InputLabelProps={{
          style: { color: "#7B7B7B" },
        }}
      />
    </Box>
  )
}

export default MultiTextfields