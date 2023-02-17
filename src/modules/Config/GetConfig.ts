export const getConfig = (PLUGIN_ID: string) => {
  const config = kintone.plugin.app.getConfig(PLUGIN_ID)
  for (let key in config) {
    config[key] = JSON.parse(config[key])
  }
  return config
}
