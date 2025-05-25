export const posts = [
  {
    "id": 2,
    "slug": "mastering-css-grid-layout",
    "title": "Mastering CSS Grid Layout: Complete Guide",
    "date": "2025-01-15",
    "author": "Ishant Sharma",
    "tags": [
      "css",
      "layout",
      "web design",
      "frontend"
    ],
    "excerpt": "Learn how to create complex, responsive layouts using the power of CSS Grid Layout.",
    "content": "\n      <p>CSS Grid Layout has revolutionized the way we design web layouts. Gone are the days of complex float-based systems or even flexbox limitations. Grid offers a two-dimensional layout system that gives developers unprecedented control.</p>\n      \n      <h2>Grid Basics: Rows and Columns</h2>\n      \n      <p>At its core, CSS Grid is about defining rows and columns to create a layout structure. Here's a simple example:</p>\n      \n      <pre><code>.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto auto;\n  gap: 20px;\n}</code></pre>\n      \n      <p>This creates a three-column grid with two rows, with a 20px gap between all cells. The <code>1fr</code> unit represents one fraction of the available space.</p>\n      \n      <h2>Placing Items on the Grid</h2>\n      \n      <p>Grid items can be precisely placed using properties like <code>grid-column</code> and <code>grid-row</code>:</p>\n      \n      <pre><code>.item {\n  grid-column: 1 / 3; /* Start at line 1, end at line 3 */\n  grid-row: 1 / 2; /* Start at line 1, end at line 2 */\n}</code></pre>\n      \n      <h2>Advanced Grid Features</h2>\n      \n      <p>CSS Grid offers powerful features like:</p>\n      \n      <ul>\n        <li><strong>Named grid areas</strong> for more readable layouts</li>\n        <li><strong>Auto-placement algorithms</strong> for dynamic content</li>\n        <li><strong>Alignment controls</strong> for precise positioning</li>\n        <li><strong>Responsive design</strong> without media queries using <code>minmax()</code> and <code>auto-fit</code>/<code>auto-fill</code></li>\n      </ul>\n      \n      <h2>The Power of Grid for Responsive Layouts</h2>\n      \n      <p>One of Grid's most powerful features is its ability to create responsive layouts with minimal code:</p>\n      \n      <pre><code>.responsive-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n}</code></pre>\n      \n      <p>This code creates a grid that automatically adjusts the number of columns based on the container width, ensuring each column is at least 250px wide.</p>\n      \n      <p>Mastering CSS Grid will dramatically improve your ability to create complex layouts with clean, maintainable code.</p>\n    ",
    "thumbnail": "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=800",
    "featured": false
  },
  {
    "id": 3,
    "slug": "the-future-of-javascript-frameworks",
    "title": "The Future of JavaScript Frameworks in 2025 and Beyond",
    "date": "2025-01-28",
    "author": "Ishant Sharma",
    "tags": [
      "javascript",
      "frameworks",
      "frontend",
      "web development"
    ],
    "excerpt": "Examining the evolution of JavaScript frameworks and predicting where they're headed next.",
    "content": "\n      <p>JavaScript frameworks have been the backbone of modern web development for over a decade. As we look toward the future, several key trends are shaping how these tools will evolve.</p>\n      \n      <h2>The Rise of Islands Architecture</h2>\n      \n      <p>Perhaps the most significant shift we're seeing is the move away from monolithic, client-rendered applications toward what's been termed \"islands architecture.\" Frameworks like Astro and newer versions of Next.js are pioneering this approach, where:</p>\n      \n      <ul>\n        <li>Most content is static and server-rendered</li>\n        <li>Interactive \"islands\" are hydrated only when needed</li>\n        <li>JavaScript is shipped only for components that require it</li>\n      </ul>\n      \n      <p>This approach significantly improves performance metrics like Largest Contentful Paint (LCP) and Time to Interactive (TTI).</p>\n      \n      <h2>Compiler-Centric Approaches</h2>\n      \n      <p>Following the success of Svelte, more frameworks are adopting compiler-centric approaches that shift work from runtime to build time. This produces smaller bundles and faster execution in the browser.</p>\n      \n      <h2>Zero-Bundle JavaScript</h2>\n      \n      <p>The concept of shipping zero JavaScript by default is gaining traction. Frameworks are becoming smarter about:</p>\n      \n      <ul>\n        <li>Generating purely static HTML where possible</li>\n        <li>Adding JavaScript only when interactions are needed</li>\n        <li>Leveraging modern browser APIs to reduce dependency on frameworks</li>\n      </ul>\n      \n      <h2>Simplified Component Models</h2>\n      \n      <p>Complex component APIs are giving way to simpler, more intuitive patterns. The trend is toward:</p>\n      \n      <ul>\n        <li>Function-based components with clear inputs and outputs</li>\n        <li>Reduced framework-specific abstractions</li>\n        <li>More alignment with web standards</li>\n      </ul>\n      \n      <h2>Web Components Integration</h2>\n      \n      <p>After years of limited adoption, Web Components are finally finding their place in the ecosystem. Modern frameworks are increasingly offering seamless ways to:</p>\n      \n      <ul>\n        <li>Export framework components as Web Components</li>\n        <li>Use Web Components within framework applications</li>\n        <li>Share components across different framework ecosystems</li>\n      </ul>\n      \n      <p>As we move forward, the line between frameworks will continue to blur, with the focus shifting toward performance, developer experience, and alignment with web standards.</p>\n    ",
    "thumbnail": "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=800",
    "featured": true
  },
  {
    "id": 4,
    "slug": "the-power-of-web-development-building-the-digital-world",
    "title": "The Power of Web Development: Building the Digital World",
    "excerpt": "testing\n",
    "content": "🧠 What Is Web Development?\nWeb development refers to the process of creating websites or web applications. It involves everything from designing the look and feel of a site to writing the code that brings it to life and makes it function properly on the internet.\n\nWeb development is usually divided into three categories:\n\nFrontend Development: What users see on their screens (HTML, CSS, JavaScript).\n\nBackend Development: The behind-the-scenes systems and databases that power websites (Node.js, PHP, Python, etc.).\n\nFull Stack Development: A combination of both frontend and backend skills.\n\n💡 Why Web Development Matters\nFirst Impressions Count\nYour website is often the first interaction people have with your business. A clean, fast, and responsive design can make or break that impression.\n\n24/7 Availability\nUnlike a physical store, your website works 24/7—selling, informing, and connecting with people around the clock.\n\nGlobal Reach\nA well-built website allows you to reach customers beyond your local area, expanding your reach worldwide.\n\nCustomization and Control\nWith web development, you’re not tied to templates. You can tailor your site exactly how you want it, making it stand out from the crowd.\n\n🔧 Modern Tools and Technologies\nWeb development is evolving quickly. Today’s developers use tools and frameworks that help speed up development and improve performance. These include:\n\nReact, Vue, Angular (JavaScript frameworks for fast, interactive user interfaces)\n\nTailwind CSS, Bootstrap (modern styling tools)\n\nContent Management Systems like WordPress for easier content updates\n\nNo-Code Tools like Webflow for beginners or businesses on a budget\n\n🌍 The Future of Web Development\nTrends such as progressive web apps (PWAs), voice-enabled websites, AI integration, and serverless architectures are shaping the future of web development. Developers are now focusing more on user experience, performance, and security than ever before.\n\n🧩 Getting Started\nWhether you're a small business owner, a student, or someone looking to learn a new skill, web development is a highly valuable path. Here’s how to begin:\n\nLearn HTML, CSS, and JavaScript.\n\nExperiment with free tools and platforms like CodePen, Replit, or GitHub Pages.\n\nTry building simple projects like portfolios or blogs.\n\nStay curious and keep learning—technology never stops evolving!\n\n✨ Conclusion\nWeb development is more than just code—it’s creativity, problem-solving, and storytelling combined. Whether you're building your own site or hiring a developer, understanding the basics can help you make smarter digital decisions.",
    "tags": [
      "web"
    ],
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    "author": "Ishant Sharma",
    "featured": true,
    "date": "2025-05-25"
  }
];