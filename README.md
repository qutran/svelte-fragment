# Svelte fragment action

Svelte action to render components and elements in slots without DOM containers.

## Installation:

`npm i svelte-fragment`

## Usage:

```html
<script>
  import Wrapper from './Wrapper.svelte';
  import Component from './Component.svelte';
  import fragment from 'svelte-fragment';
</script>

<Wrapper>
  <!-- Component will be rendered without wrapper `template` -->
  <template use:fragment slot="content" let:data>
    <Component {data} />
  </template>
</Wrapper>
```

## TODO:
1. Unit test
