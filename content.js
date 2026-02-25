// content.js - v15.1 去除前缀版
// 功能：自动去重 + 实时时钟 + 自动识别深色/浅色模式 + 去除 "You said"

// 抓取规则
const USER_MSG_SELECTOR = `
    [data-test-id="user-query"], 
    .user-query, 
    user-query, 
    h2[data-test-id="user-query"],
    div[class*="user-query"]
`;

// 1. 创建 UI
function createContainer() {
    if (document.getElementById('gemini-toc-container')) return;

    const container = document.createElement('div');
    container.id = 'gemini-toc-container';
    
    // 头部结构
    const header = document.createElement('div');
    header.id = 'gemini-toc-header';
    header.innerHTML = `
        <div class="header-left">
            <span class="header-title">导航</span>
        </div>
        <div id="toc-realtime-clock">00:00:00</div>
    `;
    
    const list = document.createElement('div');
    list.id = 'gemini-toc-list';

    container.appendChild(header);
    container.appendChild(list);
    document.body.appendChild(container);
    
    startRealtimeClock();
    checkTheme(); // 启动时先检查一次颜色
}

// 实时时钟
function startRealtimeClock() {
    const clockEl = document.getElementById('toc-realtime-clock');
    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
        if(clockEl) clockEl.innerText = timeString;
    }, 1000);
}

// --- 新功能：自动感应主题颜色 ---
function checkTheme() {
    const container = document.getElementById('gemini-toc-container');
    if (!container) return;

    // 获取网页 body 的背景颜色
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    
    // 解析 RGB (例如 "rgb(255, 255, 255)")
    const rgb = bgColor.match(/\d+/g);
    
    if (rgb) {
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);
        
        // 计算亮度公式 (YIQ)
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        // 如果亮度小于 128，说明是深色背景（黑夜模式）
        if (brightness < 128) {
            container.classList.add('dark-mode');
        } else {
            container.classList.remove('dark-mode');
        }
    }
}

// 2. 扫描页面
let lastContentHash = ""; 

function scanPage() {
    const list = document.getElementById('gemini-toc-list');
    const queries = document.querySelectorAll(USER_MSG_SELECTOR);
    
    // 顺便检查一下主题颜色有没有变（比如你手动切换了模式）
    checkTheme();

    const currentHash = queries.length + "-" + (queries[0]?.innerText?.substring(0,5) || "");
    if (currentHash === lastContentHash) return;
    lastContentHash = currentHash;

    list.innerHTML = ''; 

    if (queries.length === 0) {
        list.innerHTML = '<div style="padding:10px;opacity:0.6;font-size:12px;">扫描中...</div>';
        return;
    }

    let previousText = "";

    queries.forEach((msg) => {
        let text = msg.innerText || msg.textContent;
        text = text.replace(/[\r\n\s]+/g, ' ').trim();

        // ----------------------------------------------------
        // [修改] 强力去除 "You said" 前缀 (不区分大小写)
        // ----------------------------------------------------
        text = text.replace(/^You said\s*/i, ''); 

        if (text.length < 1) return;
        if (text === previousText) return;
        previousText = text;

        const shortText = text.substring(0, 18) + (text.length > 18 ? '...' : '');

        const item = document.createElement('div');
        item.className = 'toc-item';
        item.innerText = shortText; 
        item.title = text;
        
        item.onclick = () => {
            msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            msg.style.transition = 'background 0.5s';
            // 高亮颜色稍微调淡一点，避免在黑色背景下太刺眼
            const oldBg = msg.style.backgroundColor;
            msg.style.backgroundColor = 'rgba(255, 235, 59, 0.3)';
            setTimeout(() => { msg.style.backgroundColor = oldBg; }, 800);
        };
        list.appendChild(item);
    });
}

// 启动
createContainer();
scanPage();
setInterval(scanPage, 2000);