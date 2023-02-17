import { FormControl } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getFields } from '../modules'
import { FieldDropDown, PropsDropDown } from './components'

export const FormTest = () => {
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
      <h1 style={{ fontSize: 22, fontWeight: 'bold' }}>郵便番号検索プラグイン 2.0</h1>
      <p style={{ fontSize: 13, color: 'Gray' }}>
        指定した郵便番号フィールドの値から郵便番号を取得・検索
        <br />
        郵便番号フィールドに入力される値に対してのチェックも実施する。
      </p>
      <br />
      <FormControl style={{ marginLeft: 12 }}>
        <label htmlFor=''></label>
        <select name='field-title' id='field-title'>
          {fields.map(field => {
            return <option value={field.code}></option>
          })}
        </select>
      </FormControl>
    </>
  )
}
