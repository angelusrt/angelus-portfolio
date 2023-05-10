<script lang="ts">
import Icon from "./Icon.svelte"

  export let href: string
  export let text: string | null = null
  export let label: string | null = null
</script>

<!-- "link-grand flex justify-center rounded-[10px] px-2.5 mr-2.5" -->
<a 
  target="_blank"
  aria-label={label || text} 
  href={href} 
  class={`link ${text ? 'px-2.5' : 'p-2.5'} rounded-[10px] w-fit h-fit flex mr-2.5`}
>
  <Icon isBig={false} name="Arrow"/>
  {#if text}
    <h3 class="link-grand">
      {text}
    </h3>
  {/if}
</a>

<style>
  .link{
    background-color: var(--dark-green);
    fill: var(--light-green);
    transition: all 150ms;
  }
  .link .link-grand{
    color: var(--light-green);
    transition: color 150ms;
  }
  .link:hover{
    z-index: 2;
    background-color: var(--green);
    fill: var(--dark-green);
    transform: scale(1.5) rotate(-12deg);
    transition: all 150ms;
  }
  .link:hover .link-grand{
    color: var(--dark-green);
    transition: colot 150ms;
  }
</style>