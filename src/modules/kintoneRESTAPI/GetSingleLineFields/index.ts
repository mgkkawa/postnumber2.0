import { Layout } from '@kintone/rest-api-client/lib/client/types'
import { getKintoneRestAPIClient } from '../'

export const getSingleLineFields = async () => {
  const appId = kintone.app.getId() as number
  const client = await getKintoneRestAPIClient()
  const params = { app: appId }
  const layout = await client.app.getFormLayout(params)
  const fields = await client.app.getFormFields(params)

  const singleLineFieldCodes = []
  const singleLineFields = []

  for (let row of layout.layout) {
    for (let field of row.fields) {
      const type = field.type
      const isSingleLineTextField = type === 'SINGLE_LINE_TEXT'
      if (isSingleLineTextField) singleLineFieldCodes.push(field.code as string)
    }
  }

  for (let fieldCd of singleLineFieldCodes) {
    singleLineFields.push(fields.properties[fieldCd])
  }

  return singleLineFields
}
