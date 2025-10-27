<script>
  export let onToggleFlip = () => {};

  let currentTime = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  const timer = setInterval(() => {
    currentTime = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  }, 1000);

  // 可选：组件卸载时清理
  // import { onDestroy } from 'svelte';
  // onDestroy(() => clearInterval(timer));
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="text-3xl">🧭</div>
        <div>
          <h1 class="text-2xl font-bold text-gray-800">我的导航</h1>
          <p class="text-sm text-gray-500">快速访问常用网站</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-3">
        <button
          type="button"
          class="px-3 py-1.5 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition inline-flex items-center shadow"
          on:click={onToggleFlip}
        >
          冰山之下
        </button>
        <div class="hidden md:block text-right">
          <div class="text-2xl font-bold text-indigo-600">{currentTime}</div>
          <div class="text-xs text-gray-500">
            {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
