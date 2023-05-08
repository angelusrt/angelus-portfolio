<script lang="ts">
	import IconBlock from "../components/IconBlock.svelte"
	import Link from "../components/Link.svelte"

  export let data: {
    title: string,
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
      <div class="cert min-w-[220px] m-5 p-10 border-dashed border-2 border-dark-green rounded-[20px] mb-10 max-w-[900px] inline-flex flex-col justify-start">
        <h2 class="paragraph-normal">{info.hours}</h2>
        <h1 class="title-grand mb-5">{info.title}</h1>
        <Link href={info.href}/>
      </div> 
    {/each}
  </div>
</section>


<style>
  .cert {
    transition: box-shadow 150ms;
  }
  .cert:hover {
    --tw-shadow-color: #151E2A; 
    --tw-shadow: var(--tw-shadow-colored);
    
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  
    transition: box-shadow 150ms;
  }
</style>