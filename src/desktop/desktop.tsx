import { getAddressObject, getConfig, numberExchange } from '../modules'
import { checkZipcodeField } from './checkZipcodeField'
import { getZipcode } from './getZipcode'
import { isZipcode } from './isZipcode'

const config: ConfigProps = getConfig(kintone.$PLUGIN_ID)
const { zipcode, settings } = config

kintone.events.on('app.record.edit.show', async (event: any) => {
  if (!settings) return event
  const settingLoop = () => {
    for (let setting of settings) {
      const { field, key } = setting
      if (!(key in response)) continue
      nullSet(record[field], response[key])
    }
  }

  if (!zipcode) return event
  const { record } = event
  const field = record[zipcode]

  checkZipcodeField(field)
  const { value } = field

  if (!isZipcode(value)) return event

  const response = (await getAddressObject(value)) as ResultAddress

  settingLoop()
  return event
})

kintone.events.on(['app.record.create.change.' + zipcode, 'app.record.edit.change.' + zipcode], event => {
  const setAddresses = async () => {
    const response = await getAddressObject(validation)
    await Promise.resolve()
    const record = kintone.app.record.get().record
    record[zipcode].value = validation
    if (!response || !settings) {
      kintone.app.record.set({ record: record })
      return
    }

    for (let setting of settings) {
      const { field, key } = setting
      if (!(key in response)) continue
      nullSet(record[field], response[key])
    }
    kintone.app.record.set({ record: record })
  }
  const { changes } = event
  const { field } = changes
  const { value } = field
  if (!value) return event
  const copy = numberExchange(field.value.replace(/[ーｰ－-]/g, ''))

  const frontcode = copy.slice(0, 3)
  const endcode = copy.slice(3)
  const validation = frontcode + '-' + endcode

  const reg = new RegExp(/^[0-9]{3}-[0-9]{4}$/)
  const isZipcode = reg.test(validation)
  field.error = isZipcode ? null : '正しい郵便番号を入力してください'
  field.value = isZipcode ? validation : value

  if (isZipcode) setAddresses()
})

const settingLoop = (record: Record<string, any>, response: ResultAddress) => {
  if (!settings) return
  for (let setting of settings) {
    const { field, key } = setting
    if (!(key in response)) continue
    nullSet(record[field], response[key])
  }
}

const nullSet = (field: any, value: string = '') => {
  // console.log(field)
  // console.log(!field, !!field.value)
  // console.log(value)
  if (!field || !!field.value) return
  field.value = value
}
