<script lang="ts">
	import type { IconType } from "../utils/types"
	import Icon from "./Icon.svelte"
  
  const bgColor = ['bg-ice-blue', 'bg-dark-green']
  const iconColor = ['fill-dark-green', 'fill-light-green']
  const textColor = ['text-dark-green', 'text-light-green'] 

  export let icon: IconType
  export let text: string
  export let isGreen: boolean = true
</script>

<div class={`${bgColor[+isGreen]} icon-block p-5 flex w-min rounded-[10px] mx-auto lg:mx-0`}>
  <Icon isBig={true} name={icon} style={iconColor[+isGreen]}/>
  <h1 class={`${textColor[+isGreen]} title-small`}>{text}</h1>
</div>