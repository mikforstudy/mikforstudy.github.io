<script>
  import './app.css';
  import Header from './components/Header.svelte';
  import NavSection from './components/NavSection.svelte';
  import Footer from './components/Footer.svelte';
  import Modal from './components/Modal.svelte';
  import SiteDetail from './components/SiteDetail.svelte';
  import { navData } from './data/navData.js';
  
  let isModalOpen = false;
  let selectedSite = null;
  
  function handleSiteClick(site) {
    console.log('=== APP: handleSiteClick called ===');
    console.log('Site:', site);
    selectedSite = site;
    isModalOpen = true;
    console.log('isModalOpen set to:', isModalOpen);
    console.log('selectedSite set to:', selectedSite);
  }
  
  function closeModal() {
    isModalOpen = false;
    setTimeout(() => {
      selectedSite = null;
    }, 300);
  }
  
  // 监听 isModalOpen 变化
  $: console.log('isModalOpen changed to:', isModalOpen);
  $: console.log('selectedSite changed to:', selectedSite);
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  <Header />
  
  <main class="container mx-auto px-4 py-8">
    {#each navData as section}
      <NavSection {section} onSiteClick={handleSiteClick} />
    {/each}
  </main>
  
  <Footer />
  
  <Modal isOpen={isModalOpen} onClose={closeModal}>
    {#if selectedSite}
      <SiteDetail site={selectedSite} />
    {/if}
  </Modal>
</div>
