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
	import Contact from '../pages/contact.svelte';
	import More from '../pages/more.svelte';
	import NavButton from '../components/NavButton.svelte';

  type LangType = 'pt' | 'en' | 'de'  
  
  const lang: LangType = 'pt'
  const content = data[lang]
</script>

<main id="app" class="overflow-hidden">
  <Entry alias={content.alias} sections={content.sections}/>
  <Intro data={content.intro}/>
  <Course data={content.course}/>
  <Site data={content.site}/>
  <More data={content.more}/>
  <Server data={content.server}/>
  <Art data={content.art}/>
  <Cert data={content.cert}/>
  <Contact data={content.contact}/>
  <Footer infos={content.footer.infos}/>
  <NavButton sections={content.sections}/>
</main>