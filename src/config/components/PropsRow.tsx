import { FormControl, InputBase, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getFields } from '../../modules'
import { PROPS_KEYS, DROPDOWN_PROPS } from '../modules'

export const PropsRow = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)
  const [appFields, setAppFields] = useState<GetField[]>([])
  const [outField, setOutField] = useState('')
  const [outValue, setOutValue] = useState('')

  useEffect(() => {
    const setField = async () => {
      const appId = kintone.app.getId()
      if (!appId) return
      const fields = await getFields(appId)

      const singleLineFields = fields.filter((field: { type: string }) => field.type === 'SINGLE_LINE_TEXT')
      console.log(singleLineFields)
      setAppFields(singleLineFields)
    }
    setField()
  }, [])

  return (
    <div className='App'>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' {...register('password')} type='password' />
        </div>
        <button type='submit'>ログイン</button>
      </form>
    </div>
  )
}

{
  /* <FormControl style={{ minWidth: 165, marginTop: 20, marginLeft: 10 }}>
      <InputLabel id='drop-down-label'>出力フィールド</InputLabel>
      <Select
        labelId='drop-down-label'
        id='props-key-dropdown'
        value={outField}
        label='出力フィールド'
        onChange={e => {
          setOutField(e.target.value)
        }}>
        {appFields.map((field, index) => {
          return (
            <MenuItem value={field.code} key={index}>
              {field.code}
            </MenuItem>
          )
        })}
      </Select>
      <InputLabel id='drop-down-label'>入力項目</InputLabel>
      <Select
        labelId='drop-down-label'
        id='props-key-dropdown'
        value={outValue}
        label='入力項目'
        onChange={e => {
          setOutValue(e.target.value)
        }}>
        {PROPS_KEYS.map((key, index) => {
          return (
            <MenuItem value={DROPDOWN_PROPS[key]} key={index}>
              {key}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl> */
}
