<script>
  export let section;
  export let onSiteClick;
  
  // 强制刷新标记 - 2025-10-27 20:10
  function handleClick(link, event) {
    event?.preventDefault();
    event?.stopPropagation();
    console.log('=== CLICK EVENT TRIGGERED ===');
    console.log('Link title:', link.title);
    console.log('onSiteClick exists:', !!onSiteClick);
    
    if (onSiteClick) {
      onSiteClick(link);
    } else {
      console.error('onSiteClick is not defined!');
      alert('错误：onSiteClick 函数未定义');
    }
  }
  
  // 获取网站的 favicon
  function getFaviconUrl(url) {
    try {
      const domain = new URL(url).hostname;
      // 使用 Google Favicon API
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch (e) {
      return null;
    }
  }
  
  // favicon 加载失败时的备用方案
  function handleFaviconError(event, link) {
    // 如果有 icon 字段，显示 emoji
    if (link.icon) {
      event.target.style.display = 'none';
      event.target.nextElementSibling.style.display = 'block';
    }
  }
  
  // 组件加载时输出
  console.log('NavSection loaded at', new Date().toLocaleTimeString());
  console.log('onSiteClick prop:', onSiteClick);
</script>

<section class="mb-12">
  <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-400">
    {section.title}
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each section.links as link}
      <div 
        class="group relative p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
      >
        <div class="flex items-start space-x-3">
          <!-- 真实网站图标 -->
          <div class="flex-shrink-0 w-8 h-8 relative">
            <img 
              src={getFaviconUrl(link.url)} 
              alt={link.title}
              class="w-8 h-8 rounded"
              on:error={(e) => handleFaviconError(e, link)}
            />
            {#if link.icon}
              <div class="text-3xl absolute top-0 left-0 hidden">{link.icon}</div>
            {/if}
          </div>
          
          <div class="flex-1 min-w-0">
            <h3 class="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors truncate">
              {link.title}
            </h3>
            {#if link.description}
              <p class="text-sm text-gray-600 mt-1 line-clamp-2">{link.description}</p>
            {/if}
            
            {#if link.tags && link.tags.length > 0}
              <div class="flex flex-wrap gap-1 mt-2">
                {#each link.tags.slice(0, 3) as tag}
                  <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">
                    {tag}
                  </span>
                {/each}
              </div>
            {/if}
          </div>
        </div>
        
        <div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <button
            type="button"
            on:click={(e) => handleClick(link, e)}
            class="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center cursor-pointer hover:underline z-10 relative bg-transparent border-0 p-0"
            style="pointer-events: all !important;"
          >
            查看详情
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            on:click|stopPropagation
            class="text-sm text-gray-500 hover:text-gray-700 flex items-center hover:underline"
          >
            访问
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>
