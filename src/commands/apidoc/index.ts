#!/usr/bin/env node

import '../../aliases'

import { Command } from 'commander'

import build from '@root/commands/apidoc/build'
import lint from '@root/commands/apidoc/lint'

const commander = new Command()
commander.version('1.0.0')

commander.command('lint').description('Lint Open API files').action(lint)
commander.command('build').description('Build Open API files').action(build)

commander.parse(process.argv)
