import app from "./app"
import connectDB from "./config/ddbb"

const PORT = process.env.PORT || 6001
connectDB(() => {
    app.listen(PORT, () => {
        console.log("https://localhost:" + PORT)
    })
})