<script>
  import './app.css';
  import Header from './components/Header.svelte';
  import NavSection from './components/NavSection.svelte';
  import Footer from './components/Footer.svelte';
  import Modal from './components/Modal.svelte';
  import SiteDetail from './components/SiteDetail.svelte';
  import { frontData } from './data/frontData.js';
  import { backData } from './data/backData.js';

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
  <div class="flip-container" class:flipped={flipped}>
    <!-- 正面 -->
    <div class="flip-face flip-front min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 backface-hidden">
      <Header onToggleFlip={toggleFlip} />

      <main class="container mx-auto px-4 py-8">
        {#each frontData as section}
          <NavSection {section} onSiteClick={handleSiteClick} />
        {/each}
      </main>

      <Footer />
    </div>

    <!-- 背面（只显示示例网站） -->
    <div class="flip-face flip-back min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 backface-hidden">
      <Header onToggleFlip={toggleFlip} />

      <main class="container mx-auto px-4 py-8">
        {#each backData as section}
          <NavSection {section} onSiteClick={handleSiteClick} />
        {/each}
      </main>

      <Footer />
    </div>
  </div>
</div>

<!-- 弹窗放在翻转容器外部，避免位置问题 -->
<Modal isOpen={isModalOpen} onClose={closeModal}>
  {#if selectedSite}
    <SiteDetail site={selectedSite} />
  {/if}
</Modal>
