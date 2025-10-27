<script>
  export let site;
  
  const features = site.features || [];
  const tags = site.tags || [];
  const rating = site.rating || 0;
  const detailedDescription = site.detailedDescription || site.description || '暂无详细描述';
</script>

<div class="p-8">
  <!-- 头部 -->
  <div class="flex items-start space-x-4 mb-6">
    <div class="text-5xl flex-shrink-0">{site.icon}</div>
    <div class="flex-1">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">{site.title}</h2>
      <a 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-indigo-600 hover:text-indigo-700 hover:underline text-sm break-all"
      >
        {site.url}
      </a>
      
      <!-- 评分 -->
      {#if rating > 0}
        <div class="flex items-center mt-2">
          {#each Array(5) as _, i}
            <svg 
              class="w-5 h-5 {i < rating ? 'text-yellow-400' : 'text-gray-300'}" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          {/each}
          <span class="ml-2 text-sm text-gray-600">{rating}.0</span>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- 描述 -->
  <div class="mb-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-2">简介</h3>
    <p class="text-gray-600 leading-relaxed">{site.description}</p>
    {#if site.detailedDescription && site.detailedDescription !== site.description}
      <p class="text-gray-600 leading-relaxed mt-2">{site.detailedDescription}</p>
    {/if}
  </div>
  
  <!-- 标签 -->
  {#if tags.length > 0}
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">标签</h3>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            {tag}
          </span>
        {/each}
      </div>
    </div>
  {/if}
  
  <!-- 特点 -->
  {#if features.length > 0}
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">主要特点</h3>
      <ul class="space-y-2">
        {#each features as feature}
          <li class="flex items-start">
            <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-600">{feature}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  
  <!-- 统计信息 -->
  {#if site.stats}
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">统计信息</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {#each Object.entries(site.stats) as [key, value]}
          <div class="bg-gray-50 rounded-lg p-3 text-center">
            <div class="text-2xl font-bold text-indigo-600">{value}</div>
            <div class="text-xs text-gray-600 mt-1">{key}</div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
  
  <!-- 访问按钮 -->
  <div class="flex space-x-3 pt-4 border-t border-gray-200">
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      class="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center font-medium"
    >
      访问网站 →
    </a>
    {#if site.alternativeUrl}
      <a
        href={site.alternativeUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
      >
        备用链接
      </a>
    {/if}
  </div>
</div>
