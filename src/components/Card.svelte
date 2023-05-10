<script lang="ts">
	import type { TextHrefType } from "../utils/types"
	import Link from "./Link.svelte"

  const bgTag = ["bg-light-blue", "bg-dark-blue"]

  export let isDark: boolean = true
  export let title: string | undefined = undefined
  export let subtitle: string  
  export let image: string | undefined = undefined
  export let tags: string[] | undefined = undefined
  export let buttons: TextHrefType[] | undefined = undefined
</script>

<div class="card p-10 border-dashed border-2 border-dark-green rounded-[20px] mb-10 max-w-[900px] flex flex-col lg:flex-row justify-between">
  <div class="wrapper">
    {#if image}
      <div class="image-wrapper h-[180px] lg:hidden mb-2.5">
        {#if image !== "placeholder"}
          <img src={"/" + image} alt={image} class="lg:hidden"/>
        {/if}
      </div>
    {/if}
    {#if buttons}
      <div class="w-full flex flex-nowrap mb-10 mt-5 lg:mt-0">
        {#each buttons as button}
          <Link href={button.href} text={button.text}/>
        {/each}
      </div>
    {/if}
    {#if title}
      <h1 class="title-grand">{title}</h1>
    {/if}
    <p class="paragraph-normal">{subtitle}</p>
    {#if tags && tags.length > 0}
      <div class="inline-flex mt-[15px] flex-wrap">
        {#each tags as tag}
          <h3 class={`link-grand ${bgTag[+isDark]} text-ice-blue rounded-[10px] min-w-fit px-2.5 mr-[5px] mt-[5px]`}>
            {tag}
          </h3>
        {/each}
      </div>
    {/if}
  </div>
  {#if image}
    <div class="image-wrapper h-[260px] max-w-[280px] hidden lg:block ml-10"> 
      {#if image !== "placeholder"}
        <img src={"/" + image} alt={image} class="hidden lg:block"/>
      {/if}
    </div>
  {/if}
</div>

<style>
  img{
    position: absolute;
    inset: -20px 0 0 0;
    margin: 0 auto;
    width: 240px;
    border-radius: 20px;
    transform: skew(-5deg, 5deg);
    transition: transform 150ms;
  }
  img:hover{
    transform: skew(-5deg, 5deg) rotate(-15deg) scale(1.5);
    transition: transform 150ms;
  }

  .image-wrapper{
    position: relative;
    background-color: var(--dark-green);
    width: 100%;
    border-radius: 20px;
    clip-path: inset(0 0 0 0 round 20px 20px 20px 20px);
  }
  .card {
    transition: box-shadow 150ms;
  }
  .card:hover {
    --tw-shadow-color: #151E2A; 
    --tw-shadow: var(--tw-shadow-colored);
    
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  
    transition: box-shadow 150ms;
  }

</style>