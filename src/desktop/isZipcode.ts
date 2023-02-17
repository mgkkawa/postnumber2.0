import { numberExchange } from '../modules'

/**
 * 受け取った文字列型に対して、郵便番号として正しいかどうかを判定。
 * @param zipcode string
 * @returns boolean
 */
export const isZipcode = (zipcode: string) => {
  const value = numberExchange(zipcode).replace(/[^0-9]/g, '')
  return value.length === 7
}
