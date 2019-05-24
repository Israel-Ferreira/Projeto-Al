const app = require('./app')

const PORT = process.env.PORT || 6590

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`)
})