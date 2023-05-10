<script lang="ts">
	import IconBlock from "../components/IconBlock.svelte"
	import Link from "../components/Link.svelte"

  export let data: {
    title: string,
    label: string
    infos: {
      hours: string,
      title: string,
      href: string
    }[]
  }
</script>

<section id="cert" class="bg-dark-blue">
  <IconBlock icon="Plane" text={data.title}/>
  <div class="inline-flex flex-row flex-wrap w-full justify-center lg:justify-start">
    {#each data.infos as info}
      <div class="block-shadow min-w-[220px] m-5 p-10 border-dashed border-2 border-dark-green rounded-[20px] mb-10 max-w-[900px] inline-flex flex-col justify-start">
        <h2 class="paragraph-normal">{info.hours}</h2>
        <h1 class="title-grand mb-5">{info.title}</h1>
        <Link href={info.href} label={data.label}/>
      </div> 
    {/each}
  </div>
</section>