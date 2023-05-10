<script lang="ts">
  import { onMount } from "svelte"
	import { add, remove } from "../utils/utils"
	import type { TextHrefType } from "../utils/types"
  import Icon from "./Icon.svelte"
  
  let isMobile = false
  let isToggle = false
  let time: NodeJS.Timeout
  
  let dropdownRef: HTMLElement
  
  onMount(() => {isMobile = window.innerWidth <= 600})

  function onToggle(isToggle: boolean) {
    if(time) clearTimeout(time)

    if(isToggle && dropdownRef){
      remove(dropdownRef, "--none")
      time = setTimeout(() => add(dropdownRef, "--show"), 10)
    }
    else if(!isToggle && dropdownRef ){
      remove(dropdownRef, "--show")
      time = setTimeout(() => add(dropdownRef, "--none"), 300)
    }
  }
  
  $: onToggle(isToggle)
  
  export let sections: TextHrefType[] 
</script>

{#if isMobile}
  <button 
    class="button-index" 
    aria-label="Menu" 
    on:click={() => isToggle = true} 
    on:mouseleave={() => isToggle = false}
  >
    <Icon name="Menu" isBig={false}/>
    <div bind:this={dropdownRef} class="dropdown dropdown--none">
      {#each sections as section}
        <a class="link-normal px-2.5" href={section.href}>
          {section.text}
        </a>
      {/each}
    </div>
  </button>
{:else}
  <button 
    class="button-index" 
    aria-label="Menu" 
    on:mouseenter={() => isToggle = true} 
    on:mouseleave={() => isToggle = false}
  >
    <Icon name="Menu" style="mr-0" isBig={false}/>
    <div bind:this={dropdownRef} class="dropdown dropdown--none">
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
    border-radius: 10px;
    width: 50px;
    height: 50px;
  }

  :global(.dropdown){
    opacity: 0;
    max-height: 0px;
    position: absolute;
    bottom: 70px;
    left: 0;
    background-color: var(--light-blue);
    border: 2px solid var(--dark-green);
    border-radius: 20px;
    overflow: hidden;
    padding: 20px;
    transition: all 300ms ease-in-out;
  }
  :global(.dropdown--none){
    display: none;
  }
  :global(.dropdown--show){
    opacity: 1;
    max-height: 300px;
    transition: all 300ms ease-in-out;
  }
</style>