<script>
  export let id = "";
</script>

<div {id}>
  <slot>Content goes here.</slot>
</div>

<style>
  div {
    max-width: 64em;
    margin: 0 auto;
  }
 </style>