export function getConfig(pluginId: string): PluginConfig {
  const config: SetConfig = kintone.plugin.app.getConfig(pluginId)
  const result: PluginConfig = {
    zipcode: config.zipcode || '',
    settings: config.settings ? JSON.parse(config.settings) : [{ field: '', key: '' }],
  }
  return result
}

export function setConfig(config: PluginConfig) {
  const result: SetConfig = {
    zipcode: config.zipcode,
    settings: JSON.stringify(config.settings),
  }
  kintone.plugin.app.setConfig(result)
}
