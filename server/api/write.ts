
export default defineEventHandler(async (event) => {
    const kvHandler : any = process.env.KV;
    const key = event?.context?.params?.key;
    const value = await readBody(event);

    kvHandler.put(key, value);

    return {
        key: value
    }
})
