# tagged-templates

Here are some handy [tagged template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) functions to make your ES6 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) work better!

## Installation

```bash
npm install @karmaniverous/tagged-templates
```

## Usage

```js
import { def, n2e, sn2e, sn2u } from '@karmaniverous/tagged-templates';

// Replicate default template literal functionality. Just FYI!
console.log(def`a${'b'}c`); // 'abc'
console.log(def`a${undefined}c`); // 'aundefinedc'

// Replace any nil expression (i.e. null or undefined) with an empty string.
console.log(n2e`a${undefined}c`); // 'ac'

// Return an empty string if any expression is nil.
console.log(sn2e`a${undefined}c`); // ''

// Return null if any expression is nil.
console.log(sn2n`a${undefined}c`); // null

// Return undefined if any expression is nil.
console.log(sn2u`a${undefined}c`); // undefined
```
