<script lang="ts">
	import Icon from '../components/Icon.svelte';
	import IconBlock from '../components/IconBlock.svelte';
	import { PUBLIC_HOST } from '$env/static/public';
	import { add, remove } from '../utils/utils';

	let formRef: HTMLFormElement;
	let popRef: HTMLDivElement;

	let isSuccess: boolean = false;

	function onToggle() {
		remove(popRef, '--none');
		setTimeout(() => add(popRef, '--show'), 10);
		setTimeout(() => remove(popRef, '--show'), 2000);
		setTimeout(() => add(popRef, '--none'), 2300);
	}

	async function submit(e: Event) {
		e.preventDefault();

		const postHeader: RequestInit = {
			method: 'POST',
			keepalive: true,
			referrer: '',
			referrerPolicy: 'origin',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(Object.fromEntries(new FormData(formRef)))
		};

		console.log(Object.fromEntries(new FormData(formRef)));

		await fetch(`${PUBLIC_HOST}/api/contact/`, postHeader)
			.then((res) => res.json())
			.then((res) => {
				isSuccess = res === 'success' ? true : false;
				onToggle();
			})
			.catch(() => {
				isSuccess = false;
				onToggle();
			});
	}

	export let data: {
		title: string;
		success: string;
		fail: string;
		info: {
			title: string;
			subtitle: string;
			button: {
				title: string;
			};
			input: {
				text: string;
				placeholder: string;
			}[];
		};
	};
</script>

<section id="contact" class="bg-light-blue">
	<IconBlock icon="Work" text={data.title} />
	<div bind:this={popRef} class="popup-wrapper popup-wrapper--none">
		{#if isSuccess}
			<div class="popup bg-green">
				<h2 class="text-dark-green">{data.success}</h2>
			</div>
		{:else}
			<div class="popup bg-dark-blue border-ice-blue border-dashed border-2">
				<h2 class="text-ice-blue">{data.fail}</h2>
			</div>
		{/if}
	</div>
	<div
		class="block-shadow p-10 border-dashed border-2 border-dark-green rounded-[20px] mb-10 max-w-[900px] flex flex-col lg:flex-row justify-between"
	>
		<form
			id="contact-form"
			class="flex flex-col lg:flex-row lg:items-center lg:w-full"
			bind:this={formRef}
		>
			<div class="wrapper flex-1 lg:mr-10">
				<button
					on:click={submit}
					type="button"
					class="link hidden mt-5 lg:flex lg:mt-0 px-2.5 mb-10 rounded-[10px] w-fit h-fit mr-2.5"
				>
					<Icon name="Arrow" isBig={false} />
					<h3 class="link-grand">{data.info.button.title}</h3>
				</button>
				<h1 class="title-grand">{data.info.title}</h1>
				<h2 class="paragraph-normal">{data.info.subtitle}</h2>
			</div>
			<div class="wrapper flex-1 mt-10 lg:mt-0">
				<label for="email" aria-label={data.info.input[0].text}>
					<h2 class="link-grand">{data.info.input[0].text}</h2>
				</label>
				<input
					placeholder={data.info.input[0].placeholder}
					id="email"
					class="input paragraph-small text-white mb-5 w-full"
					type="text"
					name={data.info.input[0].text}
					form="contact-form"
				/>
				<label for="message" aria-label={data.info.input[1].text}>
					<h2 class="link-grand">{data.info.input[1].text}</h2>
				</label>
				<textarea
					placeholder={data.info.input[1].placeholder}
					id="message"
					name="message"
					class="input paragraph-small text-white w-full"
					form="contact-form"
				/>
				<button
					on:click={submit}
					type="button"
					class="link lg:hidden mt-5 px-2.5 rounded-[10px] w-fit h-fit flex mr-2.5"
				>
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

	.input {
		background-color: var(--light-blue);
		border: 2px solid var(--dark-green);
		border-radius: 10px;
		padding: 5px 10px;
		resize: none;
		transition: all 150ms;
	}
	.input:focus {
		outline: var(--dark-green);
		outline-style: dotted;
		border-color: var(--green);
		transition: all 150ms;
	}

	:global(.popup-wrapper--none) {
		@apply hidden;
	}
	:global(.popup-wrapper) {
		@apply fixed top-[5px] left-0 z-[2] w-full p-10;
		opacity: 0;
		transition: opacity 300ms;
	}
	:global(.popup-wrapper--show) {
		opacity: 1;
		transition: opacity 300ms;
	}
	.popup {
		@apply rounded-[10px] text-center p-5 mx-auto w-fit;
	}
</style>
