<script>
  import Wrapper from './Wrapper.svelte';
  import Component from './Component.svelte';
  import fragment from '../..';
</script>

<Wrapper>
  <template use:fragment slot="content" let:data>
    <Component {data} />
  </template>
</Wrapper>
