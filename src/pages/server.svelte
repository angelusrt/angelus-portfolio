<script lang="ts">
	import Card from "../components/Card.svelte"
  import IconBlock from "../components/IconBlock.svelte"
	import type { CardType } from "../utils/types"

  export let data: {
    title: string,
    infos: CardType[]
  }
</script>

<section id="server" class="bg-dark-blue">
  <IconBlock icon="Work" text={data.title}/>
  {#each data.infos as info}
    {#if info.type === "card"}
      <Card
        isDark={false}
        title={info.title} 
        subtitle={info.subtitle} 
        image={info.image}
        buttons={info.buttons} 
        tags={info.tags}
      />
    {:else}
      <Card 
        isDark={false}
        subtitle={info.subtitle} 
        tags={info.tags}
      />
    {/if }
  {/each}
</section>