import { toHira, toWideKata } from '..'

export const getAddressObject = async (zipcode: string): Promise<ResultAddress | null> => {
  zipcode = zipcode.replace(/[^0-9]/g, '')
  const response = await fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode)

  const json = await response.json()
  const result = json.results[0]
  if (!result) return null
  const { address1, address2, address3 } = result
  const { kana1, kana2, kana3 } = result
  result.address = address1 + address2 + address3
  result.hira1 = toHira(kana1)
  result.hira2 = toHira(kana2)
  result.hira3 = toHira(kana3)
  result.hira = result.hira1 + result.hira2 + result.hira3
  result.zenkana1 = toWideKata(kana1)
  result.zenkana2 = toWideKata(kana2)
  result.zenkana3 = toWideKata(kana3)
  result.zenkana = result.zenkana1 + result.zenkana2 + result.zenkana3
  return result
}
