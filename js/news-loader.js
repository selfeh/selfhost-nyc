/**
 * News Table Loader for selfhost.nyc
 * Fetches and renders news from data/news-table.json
 */

(function() {
  const TABLE_URL = '/data/news-table.json';
  const MAX_DISPLAY = 10;
  
  const tagColors = {
    'ice': '#c41e3a',
    'military': '#8b0000',
    'surveillance': '#4a0080',
    'privacy': '#0066cc',
    'nyc': '#e63617',
    'general': '#666666'
  };
  
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  
  function createTagHtml(tag) {
    const color = tagColors[tag] || '#666666';
    return `<span class="news-tag" style="background: ${color}">${tag}</span>`;
  }
  
  function renderStory(story, isCompact = false) {
    const tagsHtml = story.tags.map(createTagHtml).join('');
    
    if (isCompact) {
      return `
        <article class="news-item news-item--compact">
          <div class="news-item__meta">
            ${tagsHtml}
            <span class="news-item__source">${story.source}</span>
            <time class="news-item__time" datetime="${story.published}">${formatDate(story.published)}</time>
          </div>
          <h3 class="news-item__title">
            <a href="${story.url}" target="_blank" rel="noopener">${story.title}</a>
          </h3>
        </article>
      `;
    }
    
    return `
      <article class="news-item">
        <div class="news-item__meta">
          ${tagsHtml}
          <span class="news-item__source">${story.source}</span>
          <time class="news-item__time" datetime="${story.published}">${formatDate(story.published)}</time>
        </div>
        <h3 class="news-item__title">
          <a href="${story.url}" target="_blank" rel="noopener">${story.title}</a>
        </h3>
        <p class="news-item__desc">${story.description}</p>
      </article>
    `;
  }
  
  async function loadNews(options = {}) {
    const {
      container,
      maxStories = MAX_DISPLAY,
      filter = null,
      featuredOnly = false,
      compact = false
    } = options;
    
    if (!container) {
      console.error('[news-loader] No container specified');
      return;
    }
    
    try {
      const response = await fetch(TABLE_URL + '?t=' + Date.now());
      const data = await response.json();
      
      let stories = data.stories || [];
      
      // Filter
      if (filter) {
        stories = stories.filter(s => s.tags.includes(filter));
      }
      
      if (featuredOnly) {
        stories = stories.filter(s => s.featured);
      }
      
      // Sort and limit
      stories = stories.slice(0, maxStories);
      
      if (stories.length === 0) {
        container.innerHTML = '<p class="news-empty">No stories found. Check back soon.</p>';
        return;
      }
      
      const html = stories.map(s => renderStory(s, compact)).join('');
      container.innerHTML = html;
      
    } catch (err) {
      console.error('[news-loader] Error:', err);
      container.innerHTML = '<p class="news-error">Unable to load news. Please try again later.</p>';
    }
  }
  
  // Expose to global scope
  window.NewsLoader = { load: loadNews, formatDate };
  
  // Auto-initialize containers with data-news attributes
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-news]').forEach(el => {
      const config = el.dataset.news ? JSON.parse(el.dataset.news) : {};
      loadNews({ container: el, ...config });
    });
  });
})();
