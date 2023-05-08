<script lang="ts">
	import IconBlock from "../components/IconBlock.svelte";

  export let data: {
    title: string
  }
</script>

<section id="more" class="bg-light-green">
  <IconBlock isGreen={false} icon="Star" text={data.title}/>
</section>