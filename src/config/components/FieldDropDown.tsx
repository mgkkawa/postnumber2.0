import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getFields } from '../../modules/kintoneRESTAPI'

export const FieldDropDown = () => {
  const [fields, setFields] = useState<GetField[]>([])
  const [value, setValue] = useState('')

  useEffect(() => {
    const setField = async () => {
      const appId = kintone.app.getId()
      if (!appId) return
      const fields = await getFields(appId)

      const singleLineFields = fields.filter((field: { type: string }) => field.type === 'SINGLE_LINE_TEXT')
      setFields(singleLineFields)
    }
    setField()
  }, [])

  return (
    <>
      <InputLabel id='field-dropdown-label'>出力フィールド</InputLabel>
      <Select
        labelId='field-dropdown-label'
        id='field-key-dropdown'
        value={value}
        label='出力フィールド'
        style={{ minWidth: 145, width: '100%' }}
        onChange={e => {
          setValue(e.target.value)
        }}>
        {fields.map((field, index) => {
          return (
            <MenuItem value={field.code} key={index}>
              {field.code}
            </MenuItem>
          )
        })}
      </Select>
    </>
  )
}
