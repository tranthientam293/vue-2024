export async function mutation(config) {
  const { options } = config
  try {
    const res = await config.fn()
    if (typeof options.onSuccess === "function") options.onSuccess(res)
  } catch (error) {
    if (typeof options.onError === "function") options.onError(error)
  }
}
