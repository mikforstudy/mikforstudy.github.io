<script>
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  export let isOpen = false;
  export let onClose;
  
  console.log('Modal component loaded');
  
  // 监听 isOpen 变化
  $: console.log('=== MODAL: isOpen ===', isOpen);
  
  function handleBackdropClick(event) {
    console.log('Backdrop clicked');
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      onClose();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    role="dialog"
    aria-modal="true"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    transition:fade={{ duration: 200 }}
  >
    <div 
      class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
      transition:scale={{ duration: 300, easing: quintOut, start: 0.9 }}
    >
      <button
        on:click={onClose}
        class="sticky top-4 float-right mr-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
        aria-label="关闭"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <slot />
    </div>
  </div>
{/if}
