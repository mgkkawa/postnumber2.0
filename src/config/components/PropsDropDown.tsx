import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { DROPDOWN_PROPS, PROPS_KEYS } from '../modules'

export const PropsDropDown = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <InputLabel id='drop-down-label'>入力項目</InputLabel>
      <Select
        labelId='drop-down-label'
        id='props-key-dropdown'
        value={value}
        label='入力項目'
        onChange={e => {
          setValue(e.target.value)
        }}>
        {PROPS_KEYS.map((key, index) => {
          return (
            <MenuItem value={DROPDOWN_PROPS[key]} key={index}>
              {key}
            </MenuItem>
          )
        })}
      </Select>
    </>
  )
}
