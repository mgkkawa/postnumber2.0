import { Add, DeleteOutline } from '@mui/icons-material'
import { Button, FormLabel, IconButton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { setConfig } from '../common'
import { getSingleLineFields } from '../modules'
import ControleSelecter from './ControlSelecter'
import PropertySelecter from './PropertiesSelecter'

const App = (props: PluginConfig) => {
  const [appFields, setAppFields] = useState<any[]>([])
  const [isReady, setIsReady] = useState<boolean>(false)
  const { register, reset, control, handleSubmit } = useForm({
    defaultValues: props,
  })
  const { fields, append, remove } = useFieldArray({
    name: 'settings',
    control,
  })

  const onSubmit = (data: PluginConfig) => {
    setConfig(data)
  }

  useEffect(() => {
    const getAsyncFields = async () => {
      const fields = await getSingleLineFields()
      const items = fields.map(field => {
        return { value: field.code, label: field.label }
      })
      setAppFields(items)
      setIsReady(true)
    }
    getAsyncFields()
  }, [])

  return isReady ? (
    <React.Fragment>
      <Stack component='form' noValidate onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{ m: 4 }}>
        <FormLabel>郵便番号チェックフィールド</FormLabel>
        <ControleSelecter items={appFields} name='zipcode' control={control} register={register} />
        <Stack direction='row' spacing={4}>
          <div style={{ width: 180 }}>フィールド選択</div>
          <div style={{ width: 180 }}>値選択</div>
        </Stack>
        {fields.map((field, index) => (
          <Stack direction='row' spacing={4} key={field.id}>
            <ControleSelecter
              items={appFields}
              name={`settings.${index}.field`}
              control={control}
              register={register}
            />
            <PropertySelecter name={`settings.${index}.key`} control={control} register={register} />
            <IconButton aria-label='delete' onClick={() => remove(index)}>
              <DeleteOutline />
            </IconButton>
          </Stack>
        ))}
      </Stack>
      <Button startIcon={<Add />} onClick={() => append({ field: '', key: '' })} sx={{ m: 4 }}>
        行を追加する
      </Button>
      <Stack direction='row' spacing={4} sx={{ m: 4 }}>
        <Button color='primary' variant='outlined' size='large' onClick={() => window.history.back()}>
          キャンセル
        </Button>
        <Button color='primary' variant='contained' size='large' onClick={handleSubmit(onSubmit)}>
          保存
        </Button>
      </Stack>
    </React.Fragment>
  ) : (
    <></>
  )
}

export default App
