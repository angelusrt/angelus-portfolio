<script lang="ts">
	import type { TextHrefType } from "../utils/types"

  export let infos: TextHrefType[]
</script>
<footer>
  {#each infos as info}
    <a class="link-normal px-2.5" href={info.href}>
      {info.text}
    </a>
  {/each}
</footer>