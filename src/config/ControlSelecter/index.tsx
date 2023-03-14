import { FormControl, Select, MenuItem, FormHelperText } from '@mui/material'
import React from 'react'
import { Control, Controller, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

type SelecterItem = {
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
  items: SelecterItem[]
}

export default function ControleSelecter({ control, register, name, rules, desc = '', items }: ControleSelecterProps) {
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
