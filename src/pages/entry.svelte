<script lang="ts">
	import { onMount } from 'svelte'
	import type { TextHrefType } from '../utils/types'
  
  let isSurname = false
  
  onMount(() => {isSurname = window.innerWidth > 600})

  export let alias: string
  export let sections: TextHrefType[]
</script>

<header id="entry" class="text-white text-center overflow-hidden">
	<div class="wrapper lg:mx-60 pt-20">
		<!-- <div class="top-bar">
      <i>E</i>
    </div> -->
		<div class="image-placeholder w-[360px] h-[360px] mx-auto bg-light-blue rounded-[85px]" />
		<h2 class="text-normal mt-[-120px]">{alias}</h2>
		<h1 class="text-grand">
			Angelus {#if isSurname }Trindade{/if}
		</h1>
		<rl class="w-40 h-px mt-10 bg-white block mx-auto rounded-sm" />
		<nav class="py-5 pl-5 overflow-auto flex flex-nowrap lg:justify-center">
      {#each sections as section}   
			  <a class="link-normal px-2.5" href={section.href}>
          {section.text}
        </a>
      {/each}
		</nav>
	</div>
</header>

<!-- <style>
  nav::-webkit-scrollbar {
    display: none;
  }
</style> -->