## Vue Styler

Why a Vue styler? Vuejs already has an exellent system for handling CSS classes and styling. But there are edge cases where you need to do more that just define a component's style or class.

This plugin comes in handle when you want to:

* write CSS3
* use CSS3 Selectors
* write dynamic style to a dynamic <style></style> tag
* write CSS to override or supplement dynamically generated components

206 bytes size and no dependencies.

## Installation

### NPM 

```javascript
//inside main.js
import vStyler from 'vstyler'

Vue.use(vStyler)

```

### Usage

Now you can use vStyler anywhere in your vue components. Simple do:

`<v-styler>...</v-styler>` where `...` is your styling.

Example:
```html
<template>
    <v-styler>{{updateClass}}</v-styler>
</template>

<script>
    data () {
        return {
            updateClass: 
            `.myDynamicClass: {
                backgroundColor: 'red';
            }`
        }
    }
</script>

<style>
    .myDynamicClass {
        font-size: 1rem;
    }
</style>

```

Would produce two style tags at run time:

```html

<style>
    .myDynamicClass {
        font-size: 1rem;
    }
</style>

<style>
    .myDynamicClass {
        backgroundColor: 'red';
    }
</style>

```

You can do more, the Vue way:

```html
<template>
    <v-styler>
        .myDynamicClass {
            backgroundColor: {{dynamicColor}};
            {{heightORWidth}}: '100%';
        }
        {{CSS3Selector}} { /* card > * */
            color: white;
        }
    </v-styler>
</template>
```

### Credits:

This plugin was inpsired by thus answer on Stackoverflow: https://stackoverflow.com/a/49517585
