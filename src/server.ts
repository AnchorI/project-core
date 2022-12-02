import "./aliases"
import app from "@root/app"

import { printLine } from "@helpers/print"

import config from "@config/index"

app.listen(config.port, () => {
    printLine(`Backend server port: ${config.port}`)
})
