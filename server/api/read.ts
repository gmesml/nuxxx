
export default defineEventHandler(async (event) => {
    const kvHandler : any = process.env.KV;

    const key = event?.context?.params?.key;
    const value = await kvHandler.get(key);
  
    return {
      key: value
    }
})
