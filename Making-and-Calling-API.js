// Making Endpoint In Index.js
app.get("/api/productCount", async (req, res) => {
    const session = res.locals.shopify.session
    try {

        const resp = await shopify.api.rest.Product.count({ session })
        console.log(resp)
        res.status(200).send({ message: "Success" })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Some Error" })
    }
})


// Calling Api in JSX

const productCount = async () => {
    const resp = await fetch('/api/productCount');
    const data = await resp.json();
    console.log(data)
}

useEffect(() => {
    productCount()
}, [])