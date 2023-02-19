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

// Return undefined if any expression is nil.
console.log(sn2u`a${undefined}c`); // undefined
```

# API Documentation

<a name="module_taggedTemplates"></a>

## taggedTemplates

* [taggedTemplates](#module_taggedTemplates)
    * [.def](#module_taggedTemplates.def) ⇒ <code>string</code>
    * [.n2e](#module_taggedTemplates.n2e) ⇒ <code>string</code>
    * [.sn2e](#module_taggedTemplates.sn2e) ⇒ <code>string</code>
    * [.sn2u](#module_taggedTemplates.sn2u) ⇒ <code>string</code>

<a name="module_taggedTemplates.def"></a>

### taggedTemplates.def ⇒ <code>string</code>
Replicates standard string template behavior.

**Kind**: static constant of [<code>taggedTemplates</code>](#module_taggedTemplates)  
**Returns**: <code>string</code> - The output string.  

| Param | Type | Description |
| --- | --- | --- |
| strings | <code>Array.&lt;string&gt;</code> | The string literals. |
| ...exp | <code>any</code> | The expressions. |

<a name="module_taggedTemplates.n2e"></a>

### taggedTemplates.n2e ⇒ <code>string</code>
Nil to Empty: replaces nil expressions with empty strings.

**Kind**: static constant of [<code>taggedTemplates</code>](#module_taggedTemplates)  
**Returns**: <code>string</code> - The output string.  

| Param | Type | Description |
| --- | --- | --- |
| strings | <code>Array.&lt;string&gt;</code> | The string literals. |
| ...exp | <code>any</code> | The expressions. |

<a name="module_taggedTemplates.sn2e"></a>

### taggedTemplates.sn2e ⇒ <code>string</code>
Some Nil to Empty: returns empty string when any expression nil.

**Kind**: static constant of [<code>taggedTemplates</code>](#module_taggedTemplates)  
**Returns**: <code>string</code> - The output string.  

| Param | Type | Description |
| --- | --- | --- |
| strings | <code>Array.&lt;string&gt;</code> | The string literals. |
| ...exp | <code>any</code> | The expressions. |

<a name="module_taggedTemplates.sn2u"></a>

### taggedTemplates.sn2u ⇒ <code>string</code>
Some Nil to Undefined: returns undefined when any expression nil.

**Kind**: static constant of [<code>taggedTemplates</code>](#module_taggedTemplates)  
**Returns**: <code>string</code> - The output string.  

| Param | Type | Description |
| --- | --- | --- |
| strings | <code>Array.&lt;string&gt;</code> | The string literals. |
| ...exp | <code>any</code> | The expressions. |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
