const express = require("express")
const cors = require("cors")
const rotaAnimais = require("./rotas/animais")

const port = 8000

const app = express()

app.use(cors({ origin: "*" }))

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})


app.use('/animais', rotaAnimais)