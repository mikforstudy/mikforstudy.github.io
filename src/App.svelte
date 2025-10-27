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
  let flipped = false;

  function handleSiteClick(site) {
    selectedSite = site;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    setTimeout(() => {
      selectedSite = null;
    }, 300);
  }

  function toggleFlip() {
    flipped = !flipped;
  }
</script>

<div class="perspective">
  <div class="flip-container {flipped ? 'flipped' : ''}">
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 backface-hidden">
      <Header onToggleFlip={toggleFlip} />
      
      <main class="container mx-auto px-4 py-8">
        {#each navData as section}
          <NavSection {section} onSiteClick={handleSiteClick} />
        {/each}
      </main>
      
      <Footer />
    </div>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {#if selectedSite}
        <SiteDetail site={selectedSite} />
      {/if}
    </Modal>
  </div>
</div>
