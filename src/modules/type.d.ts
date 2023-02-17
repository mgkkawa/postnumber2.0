declare type ConfigProps = {
  zipcode: string
  settings?: FieldSetting[]
}

type FieldSetting = {
  field: string
  key: 'address' | 'address1' | 'address2' | 'address3' | 'hira'
}
