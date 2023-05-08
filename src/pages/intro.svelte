<script lang="ts">
  import IconBlock from "../components/IconBlock.svelte"

  export let data: {
    title: string,
    paragraph: string,
    infos: {title: string, subtitle: string}[]
  }
</script>

<section id="intro" class="bg-light-blue">
  <IconBlock icon="Speaker" text={data.title}/>
  <div class="section-wrapper mx-10 lg:mx-0">
    <p class="paragraph-normal">{data.paragraph}</p>
    {#each data.infos as info}
      <div class="pt-10 lg:inline-block lg:pr-20">
        <h1 class="title-small">{info.title}</h1>
        <h2 class="paragraph-normal">{info.subtitle}</h2>
      </div>
    {/each}
  </div>
</section>