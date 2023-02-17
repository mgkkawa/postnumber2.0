// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { UnpackNestedValue } from 'react-hook-form/dist/types'

// type Setting = {
//   key: string
//   field: string
// }
// export type FormInput = {
//   zipcode: string
//   settings: Setting[]
// }

// export const FormTest = () => {
//   const { control, handleSubmit, getValues } = useForm<FormInput>()
//   const [first, setfirst] = useState(second)
//   useEffect(() => {
//     first

//   }, [third])

//   const printWithData = data => {
//     console.log('data確認')

//     const { zipcode, settings } = data
//     console.log(`zipcode:${zipcode}`)
//     console.log(`settings:${settings}`)
//   }

//   const printByGetValues = () => {
//     console.log('getValues()確認')

//     const { zipcode, settings } = getValues()
//     console.log(`zipcode:${zipcode}`)
//     console.log(`settings:${settings}`)
//   }

//   const onSubmit = data=> {
//     // dataオブジェクトを確認
//     printWithData(data)

//     // getValuesで確認
//     printByGetValues()
//   }

//   const Fields =
//   return <div>FormTest</div>
// }
