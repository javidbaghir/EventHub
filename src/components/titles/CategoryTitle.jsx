import { Typography } from '@mui/material'
import React from 'react'

function CategoryTitle({name}) {


  return (
    <div>
        <div>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
            {name}
        </Typography>
        </div>
    </div>
  )
}

export default CategoryTitle