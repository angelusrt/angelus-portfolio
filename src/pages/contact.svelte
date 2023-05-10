<script lang="ts">
	import Icon from '../components/Icon.svelte'
	import IconBlock from '../components/IconBlock.svelte'

	export let data: {
		title: string
		info: {
			title: string
			subtitle: string
			button: {
				title: string
			}
			input: {
				text: string
				placeholder: string
			}[]
		}
	}
</script>

<section id="contact" class="bg-light-blue">
	<IconBlock icon="Work" text={data.title} />
	<div
		class="block-shadow p-10 border-dashed border-2 border-dark-green rounded-[20px] mb-10 max-w-[900px] flex flex-col lg:flex-row justify-between"
	>
		<form class="flex flex-col lg:flex-row">
			<div class="wrapper flex-1 lg:mr-10">
				<button type="submit" class="link hidden mt-5 lg:flex lg:mt-0 px-2.5 mb-10 rounded-[10px] w-fit h-fit mr-2.5">
					<Icon name="Arrow" isBig={false} />
					<h3 class="link-grand">{data.info.button.title}</h3>
				</button>
				<h1 class="title-grand">{data.info.title}</h1>
				<h2 class="paragraph-normal">{data.info.subtitle}</h2>
			</div>
			<div class="wrapper flex-1 mt-10 lg:mt-0">
				<label for="subject" aria-label={data.info.input[0].text}>
					<h2 class="link-grand">{data.info.input[0].text}</h2>
				</label>
				<input
					placeholder={data.info.input[0].placeholder}
					id="subject"
					class="input paragraph-small text-white mb-5 w-full"
					type="text"
					name={data.info.input[0].text}
				/>
				<label for="comment" aria-label={data.info.input[1].text}>
					<h2 class="link-grand">{data.info.input[1].text}</h2>
				</label>
				<textarea 
          placeholder={data.info.input[1].placeholder} 
          id="comment" 
          class="input paragraph-small text-white w-full"
        />
        <button type="submit" class="link lg:hidden mt-5 px-2.5 rounded-[10px] w-fit h-fit flex mr-2.5">
					<Icon name="Arrow" isBig={false} />
					<h3 class="link-grand">{data.info.button.title}</h3>
				</button>
			</div>
		</form>
	</div>
</section>

<style>
  button {
    background-color: var(--dark-green);
    fill: var(--light-green);
    transition: all 150ms;
  }
  button .link-grand {
    color: var(--light-green);
    transition: color 150ms;
  }
  button:hover {
    z-index: 2;
    background-color: var(--green);
    fill: var(--dark-green);
    transform: scale(1.5) rotate(-12deg);
    transition: all 150ms;
  }
  button:hover .link-grand {
    color: var(--dark-green);
    transition: colot 150ms;
  }

  .input{
    background-color: var(--light-blue);
    border: 2px solid var(--dark-green);
    border-radius: 10px;
    padding: 5px 10px;
    resize: none;
    transition: all 150ms;
  }
  .input:focus{
    outline: var(--dark-green);
    outline-style: dotted;
    border-color: var(--green);
    transition: all 150ms;
  }
</style>
