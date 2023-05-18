<script lang="ts">
  import { onMount } from "svelte"
	import { add, remove } from "../utils/utils"
	import type { TextHrefType } from "../utils/types"
  import Icon from "./Icon.svelte"
  
  let isMobile = false
  let isToggle = false
  let time: NodeJS.Timeout
  
  let buttonRef: HTMLElement
  
  onMount(() => {isMobile = window.innerWidth <= 600})

  function onToggle(isToggle: boolean) {
    if(time) clearTimeout(time)

    if(isToggle && buttonRef){
      remove(buttonRef, "--none")
      time = setTimeout(() => add(buttonRef, "--show"), 10)
    }
    else if(!isToggle && buttonRef ){
      remove(buttonRef, "--show")
      time = setTimeout(() => add(buttonRef, "--none"), 300)
    }
  }
  
  $: onToggle(isToggle)
  
  export let sections: TextHrefType[] 
</script>

{#if isMobile}
  <button 
    bind:this={buttonRef}
    class="button-index" 
    aria-label="Menu" 
    on:click={() => isToggle = true} 
    on:mouseleave={() => isToggle = false}
  >
    <Icon name="Menu" isBig={false}/>
    <div class="dropdown">
      {#each sections as section}
        <a class="link-normal px-2.5" href={section.href}>
          {section.text}
        </a>
      {/each}
    </div>
  </button>
{:else}
  <button 
    bind:this={buttonRef}
    class="button-index" 
    aria-label="Menu" 
    on:mouseenter={() => isToggle = true} 
    on:mouseleave={() => isToggle = false}
  >
    <Icon name="Menu" style="mr-0" isBig={false}/>
    <div class="dropdown">
      {#each sections as section}
        <a class="link-normal px-2.5" href={section.href}>
          {section.text}
        </a>
      {/each}
    </div>
  </button>
{/if}

<style>
  .button-index{
    position: fixed;
    z-index: 2;
    bottom: 0;
    padding: 15px;
    margin: 20px;
    background-color: var(--light-blue);
    border: 2px solid var(--dark-green);
    fill: var(--grey);
    border-radius: 15px;
    width: 50px;
    height: 50px;
  }
  
  :global(.button-index){    
    transition: transform 300ms;
    transform: rotate(0);
  }
  :global(.button-index .dropdown){
    opacity: 0;
    position: absolute;
    bottom: 70px;
    left: 0;
    text-align: left;
    background-color: var(--light-blue);
    border: 2px solid var(--dark-green);
    border-radius: 20px;
    overflow: hidden;
    padding: 20px;
    transform: rotate(0deg) scale(0.9);
    transition: all 300ms ease-in-out;
  }
  :global(.button-index--none .dropdown){
    display: none;
  }
  :global(.button-index--show .dropdown){
    opacity: 1;
    transform: rotate(24deg) scale(1);
    transform-origin: bottom left;
    transition: all 300ms ease-in-out;
  }

  :global(.button-index .middle) {
    opacity: 1;
    transition: opacity 300ms;
  }
  :global(.button-index .top) {
    transform: rotate(0deg) translateX(0px);
    transform-origin: top left;
    transition: transform 300ms;
  }
  :global(.button-index .bottom) {
    transform: rotate(0deg)  translateX(0px);
    transform-origin: bottom left;
    transition: transform 300ms;
  }

  :global(.button-index--show) {
    transform: rotate(-12deg);
    transition: transform 300ms;
  }
  :global(.button-index--show .middle) {
    opacity: 0;
    transition: opacity 300ms;
  }
  :global(.button-index--show .top) {
    transform: translateX(30px) rotate(55deg); 
    transform-origin: top left;
    transition: transform 300ms;
  }
  :global(.button-index--show .bottom) {
    transform: translateX(30px) rotate(-55deg);
    transform-origin: bottom left;
    transition: transform 300ms;
  }
</style>