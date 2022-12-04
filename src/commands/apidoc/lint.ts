import { exec } from 'child_process'

import emoji from 'node-emoji'

import { printLine } from '@helpers/print'

const main = () => {
    const command = ['redocly lint src/api/admin/index.yaml'].join(' && ')

    exec(command, (error) => {
        if (error) {
            printLine(`Can't lint Open API docs! Error: ${error.message}\n`)
            process.exit(1)
        }

        printLine(
            `${emoji.get('white_check_mark')} Lint Open API docs success!\n`
        )
        process.exit()
    })
}

export default main
