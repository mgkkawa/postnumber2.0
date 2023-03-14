declare type PluginConfig = {
  zipcode: string
  settings: SettingProps[]
}

type SettingProps = {
  field: string
  key:
    | 'address'
    | 'address1'
    | 'address2'
    | 'address3'
    | 'hira'
    | 'hira1'
    | 'hira2'
    | 'hira3'
    | 'zenkana'
    | 'zenkana1'
    | 'zenkana2'
    | 'zenkana3'
    | 'kana1'
    | 'kana2'
    | 'kana3'
    | ''
}

declare type PluginKey = 'zipcode' | `settings.${number}.field` | `settings.${number}.key`

declare type SetConfig = {
  zipcode: string
  settings: string
}
