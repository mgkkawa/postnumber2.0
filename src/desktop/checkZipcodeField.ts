import { getZipcode } from './getZipcode'
import { isZipcode } from './isZipcode'

export const checkZipcodeField = (field: { value: string; error?: string | null }) => {
  const { value } = field
  field.error = null
  if (!isZipcode(value)) {
    field.error = '正しい郵便番号を入力してください。'
    return
  }

  field.value = getZipcode(field.value)
  return
}
