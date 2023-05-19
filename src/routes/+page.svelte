<script lang="ts">
	import '../globals.css'
  import Entry from '../pages/entry.svelte'
  import Intro from "../pages/intro.svelte"
  import Course from "../pages/course.svelte"

  import data from "../data.json"
	import Site from '../pages/site.svelte'
	import Server from '../pages/server.svelte'
	import Art from '../pages/art.svelte'
	import Cert from '../pages/cert.svelte'
	import Footer from '../pages/footer.svelte'
	import Contact from '../pages/contact.svelte'
	// import More from '../pages/more.svelte'
	import NavButton from '../components/NavButton.svelte'

  type LangType = 'pt' | 'en' 
  
  let lang: LangType = 'pt'
  let content = data[lang]

  $: content = data[lang]
</script>

<main id="app" class="overflow-hidden">
  <!-- Language Translation Bar -->
  <div class="text-center px-[10px] border-solid border-dark-green border-2 rounded-[10px] w-[100px] mx-auto my-[10px]">
    <button on:click={() => lang = 'pt'}><h3 class="link-normal pr-[5px]">pt</h3></button>
    <button on:click={() => lang = 'en'}><h3 class="link-normal">en</h3></button>
  </div>

  <Entry alias={content.alias} sections={content.sections}/>
  <Intro data={content.intro}/>
  <Course data={content.course}/>
  <Site data={content.site}/>
  <!-- <More data={content.more}/> -->
  <Server data={content.server}/>
  <Art data={content.art}/>
  <Cert data={content.cert}/>
  <Contact data={content.contact}/>
  <Footer infos={content.footer.infos}/>
  <NavButton sections={content.sections}/>
</main>