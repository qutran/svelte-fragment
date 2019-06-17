<script>
  let name = 'Dmitry';
</script>

<input bind:value={name} />

<slot name="content" data={name} />
