import{_ as n,f as s,g as a,o as t,c as e,e as u}from"./app.2571caf4.js";const p=u(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4F7F\u7528\u4F60\u559C\u7231\u7684\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5 <code>animation-vue</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i animation-vue animate.css
<span class="token comment"># \u6216\u8005</span>
<span class="token function">pnpm</span> <span class="token function">add</span> animation-vue animate.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BFC\u5165 <code>animate.css</code> \u5230\u4F60\u7684\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&quot;animate.css&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5728 main.ts \u4E2D\u6DFB\u52A0\u63D2\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;animate.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> vueAnimateCss <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;animation-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">vueAnimateCss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h2><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728\u5143\u7D20\u4E0A\u6DFB\u52A0\u5BF9\u5E94\u7684\u6307\u4EE4\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-bounce</span><span class="token punctuation">&gt;</span></span>bounce<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-flash.click</span><span class="token punctuation">&gt;</span></span>flash! click me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u5237\u65B0\u9875\u9762\u6216\u70B9\u51FB\u5143\u7D20\uFF0C\u4F60\u5E94\u8BE5\u53EF\u4EE5\u770B\u89C1\u52A8\u753B\u6548\u679C\u4E86\u{1F389}</p>`,12),i=[p],c=s({__name:"getting-started.html",setup(o){return a({bounceConfig:{duration:2e3,repeat:3,delay:700,autoPlay:!1}}),(l,d)=>(t(),e("div",null,i))}});var k=n(c,[["__file","getting-started.html.vue"]]);export{k as default};