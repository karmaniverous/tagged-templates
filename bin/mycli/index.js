#!/usr/bin/env node

// Import package exports.
import { foo } from '@karmaniverous/npm-package-template';

// Create CLI.
import { program } from 'commander';

// CLI description.
program.name('mycli');
program.description('Foos your bar.');

// CLI options.
program.option('-b, --bar <string>', 'foo what?');

// Parse CLI options from command line.
program.parse();
const { bar } = program.opts();

// Execute CLI logic.
console.log(`foo ${foo(bar)}!`);
