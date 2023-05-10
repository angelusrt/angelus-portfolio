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

<div class="block-shadow p-10 border-dashed border-2 border-dark-green rounded-[20px] mb-10 max-w-[900px] flex flex-col lg:flex-row justify-between">
  <div class="wrapper">
    {#if image}
      <div class="image-wrapper-mobile lg:hidden">
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
    <div class="image-wrapper-desktop hidden lg:block">
      {#if image !== "placeholder"}
        <img src={"/" + image} alt={image}/>
      {/if}
    </div>
  {/if}
</div>

<style>
  img{
    @apply absolute inset-0 -top-5  mx-auto w-[240px] rounded-[15px];

    transform: skew(-5deg, 5deg);
    transition: transform 150ms;
  }
  img:hover{
    transform: skew(-5deg, 5deg) rotate(-10deg) scale(1.3);
    transition: transform 150ms;
  }

  .image-wrapper-mobile{
    @apply bg-dark-green w-full rounded-t-[15px];
    @apply -mx-10 -mt-10 h-[180px] mb-2.5;
  
    clip-path: inset(0 0 0 0 round 18px 18px 0px 0px);

    width: calc(100% + 80px);
  }
  .image-wrapper-desktop{
    @apply bg-dark-green w-full rounded-[15px];
    @apply relative h-[260px] max-w-[280px] ml-10;

    clip-path: inset(0 0 0 0 round 20px 20px 20px 20px);
  }
</style>