import { numberExchange } from '../modules'

/**
 * 受け取った文字列に対して、[000-0000]の郵便番号形式にして文字列を返す。
 * 7桁の数字以外は元の文字列を返す。
 * @param str
 * @returns
 */
export const getZipcode = (str: string): string => {
  const value = numberExchange(str).replace(/[^0-9]/g, '')
  if (value.length != 7) return str
  const front = value.slice(0, 3)
  const end = value.slice(3)
  return front + '-' + end
}
