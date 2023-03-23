
export default defineEventHandler(async ({ context }) => {
    const kvHandler : any = context.cloudflare.env.KV;

    const key = context?.params?.key;
    const value = await kvHandler.get(key);
  
    return {
      key: value
    }
})
