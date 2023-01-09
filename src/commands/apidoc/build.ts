import { exec } from 'child_process'

import emoji from 'node-emoji'

import { printLine } from '@helpers/print'

const main = () => {
    const command = [
        'redocly bundle src/api/admin/index.yaml --output apidocs/slave.yaml --ext yaml --lint',
    ].join(' && ')

    exec(command, (error) => {
        if (error) {
            printLine(`Can't build Open API docs! Error: ${error.message}\n`)
            process.exit(1)
        }

        printLine(
            `${emoji.get('white_check_mark')} Build Open API docs success!\n`
        )
        process.exit()
    })
}

export default main
