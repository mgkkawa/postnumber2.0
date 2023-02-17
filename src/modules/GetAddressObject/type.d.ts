declare type ResultAddress = {
  address: string
  hira: string
  hira1: string
  hira2: string
  hira3: string
  zenkana: string
  zenkana1: string
  zenkana2: string
  zenkana3: string
} & AddressObject

declare type AddressObject = {
  address1: string
  address2: string
  address3: string
  kana1: string
  kana2: string
  kana3: string
  prefcode: string
  zipcode: string
}
