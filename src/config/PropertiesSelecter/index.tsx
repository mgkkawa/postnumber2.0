import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useMemo } from 'react'
import { Control, Controller, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { PropertyItems } from './Properties'

export type Item = {
  value: string
  label: string
}

type ControleSelecterProps = {
  control: Control<PluginConfig, any>
  register: UseFormRegister<PluginConfig>
  name: PluginKey
  id?: string
  label?: string
  rules?: RegisterOptions<FieldValues, string>
  desc?: string
}

export default function PropertySelecter({ control, register, name, rules, desc = '' }: ControleSelecterProps) {
  const items = useMemo(() => PropertyItems(), [])
  return (
    <Controller
      name={name}
      control={control}
      rules={rules ? rules : undefined}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid}>
          <Select style={{ width: 180 }} {...register(name)} {...field}>
            {items.map((item, index) => (
              <MenuItem key={item.value + index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{desc}</FormHelperText>
        </FormControl>
      )}
    />
  )
}
