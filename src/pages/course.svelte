<script lang="ts">
	import IconBlock from "../components/IconBlock.svelte"


  export let data: {
    title: string,
    infos: {
      title: string,
      subtitle: string,
      body: string
    }[]
  }
</script>

<section id="course" class="bg-dark-blue">
  <IconBlock icon="Work" text={data.title}/>
  <div class="section-wrapper mx-10 lg:mx-0">
    {#each data.infos as info}
      <div class="pt-10 lg:inline-block lg:pr-20">
        <h2 class="paragraph-normal">{info.subtitle}</h2>
        <h1 class="title-grand">{info.title}</h1>
        <h2 class="paragraph-normal mt-5">{info.body}</h2>
      </div> 
    {/each}
  </div>
</section>