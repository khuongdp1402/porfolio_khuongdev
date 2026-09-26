import type { L } from '../context/Preferences';

export const UI = {
  nav: {
    about: { en: 'About', vi: 'Giới thiệu' },
    skills: { en: 'Skills', vi: 'Kỹ năng' },
    timeline: { en: 'Experience', vi: 'Kinh nghiệm' },
    projects: { en: 'Projects', vi: 'Dự án' },
    contact: { en: 'Contact', vi: 'Liên hệ' },
  },
  hero: {
    badge: { en: 'Open to new projects', vi: 'Đang nhận dự án mới' },
    hello: { en: "Hi, I'm", vi: 'Chào, mình là' },
    name: { en: 'Khương', vi: 'Khương' },
    role: { en: 'Full-stack .NET developer', vi: 'Lập trình viên Full-stack .NET' },
    tagline: {
      en: 'I build e-commerce, booking and ERP systems on a solid technical foundation — SEO, AIO and GEO ready, so customers find you on Google and in AI answers.',
      vi: 'Mình xây hệ thống thương mại điện tử, đặt chỗ và ERP trên nền tảng kỹ thuật vững chắc — chuẩn SEO, AIO, GEO để khách hàng tìm thấy bạn trên Google lẫn trong câu trả lời của AI.',
    },
    ctaWork: { en: 'See my work', vi: 'Xem dự án' },
    ctaContact: { en: 'Contact me', vi: 'Liên hệ' },
    stats: [
      { value: '6+', label: { en: 'years shipping', vi: 'năm kinh nghiệm' } },
      { value: '15+', label: { en: 'systems delivered', vi: 'hệ thống đã triển khai' } },
      { value: '4', label: { en: 'countries served', vi: 'quốc gia' } },
    ],
  },
  marquee: {
    tech: { en: 'Tools I build with', vi: 'Công nghệ mình dùng' },
    partners: { en: 'Companies & clients I have worked with', vi: 'Doanh nghiệp & khách hàng đã đồng hành' },
  },
  about: {
    eyebrow: { en: 'About me', vi: 'Về mình' },
    heading: {
      en: 'Backend at heart, product-minded by habit.',
      vi: 'Trái tim backend, tư duy sản phẩm.',
    },
    p1: {
      en: 'Over 6 years I have built ERP, microservice and social-commerce platforms with ASP.NET Core, Clean Architecture and CQRS — from database design and APIs to the Blazor or React screens on top.',
      vi: 'Hơn 6 năm qua mình xây ERP, microservices và nền tảng social-commerce bằng ASP.NET Core, Clean Architecture và CQRS — từ thiết kế cơ sở dữ liệu, API cho tới giao diện Blazor hay React phía trên.',
    },
    p2: {
      en: 'Lately I also automate the boring parts of business with AI workflows (n8n, MCP, Claude Code). I like problems that make people say “that can’t be done” — and then quietly shipping the fix.',
      vi: 'Gần đây mình còn tự động hóa phần việc nhàm chán của doanh nghiệp bằng AI (n8n, MCP, Claude Code). Mình thích những bài toán mà ai cũng bảo “không làm được đâu” — rồi lặng lẽ làm xong.',
    },
    goal: {
      en: 'Next stop: technical leadership, without ever leaving the code.',
      vi: 'Chặng tiếp theo: technical leadership — nhưng vẫn không rời xa code.',
    },
    facts: [
      { value: '14', label: { en: 'microservices on one platform', vi: 'microservices trong một nền tảng' } },
      { value: '4', label: { en: 'developers led as PM', vi: 'developer dẫn dắt ở vai trò PM' } },
      { value: '2', label: { en: 'Microsoft certifications', vi: 'chứng chỉ Microsoft' } },
      { value: '∞', label: { en: 'cups of coffee', vi: 'ly cà phê' } },
    ],
    certs: { en: 'Certifications', vi: 'Chứng chỉ' },
    edu: { en: 'Education', vi: 'Học vấn' },
    eduValue: {
      en: 'Open University — Computer Science (2017 – 2021)',
      vi: 'Đại học Mở — Khoa học Máy tính (2017 – 2021)',
    },
  },
  skills: {
    eyebrow: { en: 'Tech stack', vi: 'Công nghệ' },
    heading: { en: 'Skills', vi: 'Kỹ năng' },
    core: { en: 'Core (proficient)', vi: 'Kỹ năng chính (thành thạo)' },
    working: { en: 'Working knowledge', vi: 'Kiến thức làm việc' },
    exploring: { en: 'Currently exploring', vi: 'Đang tìm hiểu' },
    tools: { en: 'Other tools', vi: 'Công cụ khác' },
  },
  timeline: {
    eyebrow: { en: 'Experience', vi: 'Kinh nghiệm' },
    heading: { en: 'Where I have worked', vi: 'Hành trình làm việc' },
    role: { en: 'Role', vi: 'Vai trò' },
    team: { en: 'Team', vi: 'Nhóm' },
  },
  commerce: {
    eyebrow: { en: 'E-commerce for the AI era', vi: 'Thương mại điện tử thời AI' },
    heading: {
      en: 'Stores that rank on Google — and get recommended by AI.',
      vi: 'Website bán hàng lên top Google — và được AI gợi ý.',
    },
    intro: {
      en: 'A storefront is only as good as the traffic it earns. Customers now search on Google and ask ChatGPT, Gemini or Perplexity. I build e-commerce on a solid foundation, then make sure search engines and AI assistants understand, trust and cite it.',
      vi: 'Một cửa hàng online chỉ tốt khi có người tìm tới. Giờ khách hàng vừa tìm trên Google, vừa hỏi ChatGPT, Gemini hay Perplexity. Mình xây thương mại điện tử trên nền tảng vững chắc, rồi đảm bảo công cụ tìm kiếm lẫn trợ lý AI hiểu đúng, tin tưởng và trích dẫn nó.',
    },
    proof: {
      en: 'Already running in production: OKDIMALL (booking & online payment), Kinetic3D (3D-print store), Winglove (SaaS with pay-to-publish).',
      vi: 'Đã chạy thực tế: OKDIMALL (đặt chỗ & thanh toán online), Kinetic3D (cửa hàng in 3D), Winglove (SaaS trả phí khi xuất bản).',
    },
    cta: { en: 'Discuss your store', vi: 'Trao đổi về dự án' },
  },
  services: {
    eyebrow: { en: 'Services', vi: 'Dịch vụ' },
    heading: { en: 'What I can do for you', vi: 'Mình có thể giúp gì' },
  },
  projects: {
    eyebrow: { en: 'Selected work', vi: 'Dự án tiêu biểu' },
    heading: { en: 'Featured projects', vi: 'Dự án nổi bật' },
    intro: {
      en: 'Three products I run and ship end to end, with real screenshots from the live sites and their back offices.',
      vi: 'Ba sản phẩm mình quản lý và triển khai trọn vẹn, ảnh chụp thật từ website và trang quản trị.',
    },
    role: { en: 'Role', vi: 'Vai trò' },
    period: { en: 'Period', vi: 'Thời gian' },
    team: { en: 'Team', vi: 'Nhóm' },
    stack: { en: 'Tech stack', vi: 'Công nghệ' },
    built: { en: 'What I built', vi: 'Những gì mình làm' },
    scope: { en: 'Scope', vi: 'Phạm vi' },
    type: { en: 'Type', vi: 'Loại dự án' },
    admin: { en: 'Admin system included', vi: 'Đi kèm hệ thống quản trị' },
    tabBuilt: { en: 'Features', vi: 'Tính năng' },
    tabAdmin: { en: 'Admin system', vi: 'Hệ thống quản trị' },
    tabStack: { en: 'Tech stack', vi: 'Công nghệ' },
    swipe: { en: 'Swipe to switch project', vi: 'Vuốt để chuyển dự án' },
    prev: { en: 'Previous project', vi: 'Dự án trước' },
    next: { en: 'Next project', vi: 'Dự án tiếp theo' },
    adminIntro: {
      en: 'Every product ships with its own back office, so the business can run itself:',
      vi: 'Mỗi sản phẩm đều có hệ thống quản trị riêng để doanh nghiệp tự vận hành:',
    },
    moreHeading: { en: 'And there is more.', vi: 'Và còn nhiều hơn thế.' },
    moreText: {
      en: 'Beyond what is shown here, I have delivered many other freelance booking and ERP projects for small and mid-sized businesses — most of them under NDA. Happy to walk you through the relevant ones.',
      vi: 'Ngoài những dự án trên, mình còn thực hiện nhiều dự án freelance về booking và ERP khác cho doanh nghiệp vừa và nhỏ — phần lớn được bảo mật theo thỏa thuận. Mình sẵn sàng chia sẻ chi tiết những dự án phù hợp với bạn.',
    },
    visit: { en: 'Visit live site', vi: 'Xem website' },
    private: { en: 'Private admin — screenshots only', vi: 'Trang quản trị riêng — chỉ xem ảnh' },
    personal: { en: 'Personal project', vi: 'Dự án cá nhân' },
    othersHeading: { en: 'Projects I have contributed to', vi: 'Dự án đã tham gia' },
    othersIntro: {
      en: 'ERP, WMS and client systems I built as part of larger teams. Internal projects are confidential, so they are described without screenshots or public links.',
      vi: 'Các hệ thống ERP, WMS và dự án khách hàng mình tham gia cùng các team. Dự án nội bộ được bảo mật nên chỉ mô tả, không kèm ảnh chụp hay link công khai.',
    },
    internal: { en: 'Internal · Confidential', vi: 'Nội bộ · Bảo mật' },
  },
  footer: {
    heading: { en: "Let's talk.", vi: 'Trò chuyện nhé.' },
    text: {
      en: 'Got a system that needs building, fixing, or explaining to your CFO? Send a message — I reply faster than a CI pipeline.',
      vi: 'Có hệ thống cần xây, cần sửa, hay cần giải thích cho sếp? Cứ nhắn — mình phản hồi nhanh hơn cả CI pipeline.',
    },
    email: { en: 'Email', vi: 'Email' },
    phone: { en: 'Phone · Zalo', vi: 'Điện thoại · Zalo' },
    call: { en: 'Call now', vi: 'Gọi ngay' },
    zalo: { en: 'Chat on Zalo', vi: 'Chat Zalo ngay' },
    zaloHint: { en: 'Message on Zalo for the quickest reply', vi: 'Nhắn Zalo để được phản hồi nhanh nhất' },
    address: { en: 'Address', vi: 'Địa chỉ' },
    addressValue: {
      en: '40/40 Le Thi Hong, Go Vap District, Ho Chi Minh City, Vietnam',
      vi: '40/40 Lê Thị Hồng, Quận Gò Vấp, TP. Hồ Chí Minh, Việt Nam',
    },
    rights: { en: 'All rights reserved.', vi: 'Bảo lưu mọi quyền.' },
  },
  controls: {
    lang: { en: 'Switch to Vietnamese', vi: 'Chuyển sang tiếng Anh' },
    theme: { en: 'Toggle light / dark mode', vi: 'Đổi giao diện sáng / tối' },
    menu: { en: 'Open menu', vi: 'Mở menu' },
  },
};

export const CERTS = [
  'MB-800: Microsoft Dynamics 365 Business Central Functional Consultant',
  'AI-900: Microsoft Azure AI Fundamentals',
];

export const PILLARS: { key: string; title: L; tagline: L; points: L[] }[] = [
  {
    key: 'foundation',
    title: { en: 'Solid foundation', vi: 'Nền tảng vững chắc' },
    tagline: { en: 'Fast, secure, built to scale', vi: 'Nhanh, bảo mật, sẵn sàng mở rộng' },
    points: [
      { en: '.NET backend with Clean Architecture & CQRS', vi: 'Backend .NET với Clean Architecture & CQRS' },
      { en: 'Payment gateways, carts, orders, promotions', vi: 'Cổng thanh toán, giỏ hàng, đơn hàng, khuyến mãi' },
      { en: 'Redis cache, Meilisearch, mobile-first UI', vi: 'Cache Redis, tìm kiếm Meilisearch, giao diện ưu tiên mobile' },
    ],
  },
  {
    key: 'seo',
    title: { en: 'SEO', vi: 'SEO' },
    tagline: { en: 'Found on Google', vi: 'Lên top Google' },
    points: [
      { en: 'Core Web Vitals, clean URLs, sitemap & robots', vi: 'Core Web Vitals, URL sạch, sitemap & robots' },
      { en: 'Canonical & hreflang for multilingual stores', vi: 'Canonical & hreflang cho website đa ngôn ngữ' },
      { en: 'schema.org Product, Offer, Review rich results', vi: 'Rich results với schema.org Product, Offer, Review' },
    ],
  },
  {
    key: 'aio',
    title: { en: 'AIO', vi: 'AIO' },
    tagline: { en: 'AI Optimization', vi: 'Tối ưu cho AI' },
    points: [
      { en: 'JSON-LD structured data AI can read reliably', vi: 'Dữ liệu cấu trúc JSON-LD để AI đọc chính xác' },
      { en: 'llms.txt and machine-readable product feeds', vi: 'llms.txt và feed sản phẩm máy đọc được' },
      { en: 'Clear entities: brand, products, prices, policies', vi: 'Thực thể rõ ràng: thương hiệu, sản phẩm, giá, chính sách' },
    ],
  },
  {
    key: 'geo',
    title: { en: 'GEO', vi: 'GEO' },
    tagline: { en: 'Generative Engine Optimization', vi: 'Tối ưu cho công cụ AI tạo sinh' },
    points: [
      {
        en: 'Answer-first content, FAQs and comparison tables',
        vi: 'Nội dung trả lời thẳng câu hỏi, FAQ và bảng so sánh',
      },
      {
        en: 'Consistent brand facts so AI cites you, not a competitor',
        vi: 'Thông tin thương hiệu nhất quán để AI trích dẫn bạn, không phải đối thủ',
      },
      { en: 'Built for ChatGPT, Gemini, Perplexity & AI Overviews', vi: 'Hướng tới ChatGPT, Gemini, Perplexity & AI Overviews' },
    ],
  },
];

export const SERVICES: { num: string; name: L; desc: L }[] = [
  {
    num: '01',
    name: { en: 'E-commerce Websites', vi: 'Website thương mại điện tử' },
    desc: {
      en: 'Online stores and booking sites with carts, payments and admin — SEO, AIO and GEO ready from day one, not bolted on later.',
      vi: 'Cửa hàng online và website đặt chỗ có giỏ hàng, thanh toán, trang quản trị — chuẩn SEO, AIO, GEO ngay từ đầu, không phải vá sau.',
    },
  },
  {
    num: '02',
    name: { en: 'Backend Development', vi: 'Phát triển Backend' },
    desc: {
      en: 'APIs and business logic in ASP.NET Core with Clean Architecture and CQRS. Boring in production, exciting on the roadmap.',
      vi: 'API và nghiệp vụ trên ASP.NET Core với Clean Architecture và CQRS. Chạy production thì nhàm chán — nhưng đó chính là điều ta muốn.',
    },
  },
  {
    num: '03',
    name: { en: 'System Architecture', vi: 'Kiến trúc hệ thống' },
    desc: {
      en: 'Microservices, event-driven flows and database design that scale from one ERP module to a 14-service platform — without the 3 a.m. pages.',
      vi: 'Microservices, luồng sự kiện và thiết kế CSDL mở rộng từ một module ERP lên nền tảng 14 dịch vụ — không còn cuộc gọi lúc 3 giờ sáng.',
    },
  },
  {
    num: '04',
    name: { en: 'Frontend Development', vi: 'Phát triển Frontend' },
    desc: {
      en: 'React and Blazor interfaces — dashboards, booking flows and storefronts that users understand without a manual.',
      vi: 'Giao diện React và Blazor — dashboard, luồng đặt chỗ, cửa hàng mà người dùng hiểu ngay không cần đọc hướng dẫn.',
    },
  },
  {
    num: '05',
    name: { en: 'AI Automation', vi: 'Tự động hóa AI' },
    desc: {
      en: 'n8n, MCP and LLM tooling that reads the emails nobody wants to read and does the boring parts for you.',
      vi: 'n8n, MCP và công cụ LLM đọc giúp những email không ai muốn đọc và xử lý nốt phần việc nhàm chán.',
    },
  },
  {
    num: '06',
    name: { en: 'Enterprise ERP', vi: 'ERP doanh nghiệp' },
    desc: {
      en: 'Warehouse, real estate and booking systems delivered for clients in Vietnam, Singapore, Cambodia and Japan.',
      vi: 'Hệ thống kho, bất động sản và đặt chỗ đã triển khai cho khách hàng tại Việt Nam, Singapore, Campuchia và Nhật Bản.',
    },
  },
];

export const SKILL_GROUPS: { key: 'core' | 'working' | 'exploring' | 'tools'; items: string[] }[] = [
  {
    key: 'core',
    items: [
      'C#',
      'ASP.NET Core (MVC, Web API)',
      'Blazor Server / SSR',
      'Entity Framework Core',
      'LINQ',
      'MS SQL Server',
      'PostgreSQL',
      'Clean Architecture',
      'CQRS',
      'Design Patterns',
      'RESTful API Design',
      'JWT Authentication',
      'Git',
    ],
  },
  {
    key: 'working',
    items: [
      'Microservices',
      'API Gateway (YARP)',
      'gRPC',
      'MongoDB',
      'Redis',
      'Meilisearch',
      'Apache Kafka',
      'Docker',
      'Kubernetes',
      'Jenkins CI/CD',
      'React',
      'n8n',
      'MCP (Model Context Protocol)',
      'Claude Code',
      'xUnit',
    ],
  },
  { key: 'exploring', items: ['Angular', 'Vue.js', 'AWS Cloud Infrastructure'] },
  { key: 'tools', items: ['Bootstrap', 'jQuery', 'Tailwind CSS', 'Hangfire', 'Shopify'] },
];

export interface TimelineProject {
  name: L;
  date: L;
  description: L;
  position: L;
  team: L;
  tech: string[];
}
export interface TimelineEntry {
  company: string;
  date: L;
  projects: TimelineProject[];
}

const PRESENT: L = { en: 'Present', vi: 'Hiện tại' };
const d = (from: string, to?: string | L, note?: L): L => {
  const end = typeof to === 'string' ? { en: to, vi: to } : to ?? PRESENT;
  return {
    en: `${from} — ${end.en}${note ? ` · ${note.en}` : ''}`,
    vi: `${from} — ${end.vi}${note ? ` · ${note.vi}` : ''}`,
  };
};

export const TIMELINE: TimelineEntry[] = [
  {
    company: 'Shuei Trading Vietnam (Japan)',
    date: d('10/2024'),
    projects: [
      {
        name: { en: 'Vendor Quotation AI System (Hong Kong)', vi: 'Hệ thống AI xử lý báo giá nhà cung cấp (Hong Kong)' },
        date: d('03/2026', undefined, { en: 'UAT / Go-live', vi: 'UAT / Sắp go-live' }),
        description: {
          en: 'AI tool that reads vendor quotation emails, classifies them, maps every quote into one template for side-by-side comparison, and flags stock that needs importing or exporting.',
          vi: 'Công cụ AI đọc email báo giá, phân loại, đưa mọi báo giá về một mẫu chung để so sánh cạnh nhau và cảnh báo hàng cần nhập/xuất kho.',
        },
        position: { en: 'Developer (AI Automation)', vi: 'Developer (Tự động hóa AI)' },
        team: { en: '3 core developers', vi: '3 developer chính' },
        tech: ['n8n', 'Claude Code', 'MCP', 'Ollama LLM', 'Email automation'],
      },
      {
        name: { en: 'Tealife — Warehouse Management ERP', vi: 'Tealife — ERP quản lý kho' },
        date: d('10/2024', '06/2025'),
        description: {
          en: 'End-to-end warehouse management from Inbound to Outbound. Built outbound modules, inventory and bundle screens, reports, and print-template integration in Blazor.',
          vi: 'Quản lý kho trọn vòng đời từ nhập đến xuất. Xây module xuất kho, màn hình tồn kho/bundle, báo cáo và tích hợp mẫu in trên Blazor.',
        },
        position: { en: 'Full Stack Developer', vi: 'Full Stack Developer' },
        team: { en: '1 PM, 8 developers, 1 QC', vi: '1 PM, 8 developer, 1 QC' },
        tech: ['ASP.NET Core 8', 'Blazor', 'MS SQL Server', 'EF Core', 'Clean Architecture'],
      },
    ],
  },
  {
    company: 'Freelance / Personal Projects',
    date: d('10/2023'),
    projects: [
      {
        name: { en: 'SocialApp — Multi-tenant Social Commerce ERP', vi: 'SocialApp — ERP social-commerce đa tenant' },
        date: d('04/2026', undefined, { en: 'Go-live', vi: 'Go-live' }),
        description: {
          en: 'Social network meets business management: 14 microservices and 2 Blazor apps going live in Vietnam. Built the AdminTenant module, REST endpoints, and worked inside a Kafka + YARP ecosystem.',
          vi: 'Mạng xã hội kết hợp quản trị doanh nghiệp: 14 microservices và 2 ứng dụng Blazor sắp ra mắt tại Việt Nam. Phụ trách module AdminTenant, REST API và làm việc trong hệ sinh thái Kafka + YARP.',
        },
        position: { en: 'Developer (freelance, joined mid-project)', vi: 'Developer (freelance, tham gia giữa dự án)' },
        team: { en: '~15 developers', vi: '~15 developer' },
        tech: ['.NET 8', 'Blazor SSR', 'MudBlazor', 'PostgreSQL', 'MongoDB', 'Kafka', 'YARP', 'gRPC', 'Docker', 'Kubernetes'],
      },
      {
        name: { en: 'OKDIMALL — Travel Booking Platform', vi: 'OKDIMALL — Nền tảng đặt tour & khách sạn' },
        date: d('10/2023'),
        description: {
          en: 'Hotels and tours with a client app and an admin/ERP back office. Led 4 developers, designed the database and booking logic, integrated ONEPay, Hotel Link, VMB-Flight and Exely, moved to .NET 9 and rebuilt the admin in React.',
          vi: 'Khách sạn và tour với ứng dụng khách và back office ERP. Dẫn dắt 4 developer, thiết kế CSDL và nghiệp vụ đặt chỗ, tích hợp ONEPay, Hotel Link, VMB-Flight, Exely, nâng lên .NET 9 và làm lại trang admin bằng React.',
        },
        position: { en: 'Project Manager & Full Stack Developer', vi: 'Quản lý dự án & Full Stack Developer' },
        team: { en: '1 PM (me), 4 developers', vi: '1 PM (mình), 4 developer' },
        tech: ['.NET 9', 'React Admin', 'PostgreSQL', 'Redis', 'Meilisearch', 'Hangfire', 'Docker'],
      },
    ],
  },
  {
    company: 'AES Technologies Vietnam',
    date: d('03/2023', '10/2024'),
    projects: [
      {
        name: { en: 'Savills ERP Singapore / MIH ERP Cambodia', vi: 'Savills ERP Singapore / MIH ERP Campuchia' },
        date: d('04/2023', '10/2024'),
        description: {
          en: 'Real estate management for leasing, consignment, sales and commission sharing. Database design, jQuery/Bootstrap UI, e-signatures, email notifications, and report/invoice generation.',
          vi: 'Quản lý bất động sản: cho thuê, ký gửi, bán hàng và chia hoa hồng. Thiết kế CSDL, giao diện jQuery/Bootstrap, chữ ký điện tử, thông báo email và xuất báo cáo/hóa đơn.',
        },
        position: { en: 'Full Stack Developer', vi: 'Full Stack Developer' },
        team: { en: '1 PM, 6 developers, 1 QC', vi: '1 PM, 6 developer, 1 QC' },
        tech: ['ASP.NET Core MVC', 'MS SQL Server', 'EF Core', 'Gembox', 'CQRS', 'Hangfire'],
      },
      {
        name: { en: 'Saleskit Cambodia — Booking System', vi: 'Saleskit Campuchia — Hệ thống đặt căn' },
        date: d('01/2024', '04/2024'),
        description: {
          en: 'Booking system for agencies and agents managing apartments, offices and condominiums.',
          vi: 'Hệ thống đặt chỗ cho đại lý và môi giới quản lý căn hộ, văn phòng và condominium.',
        },
        position: { en: '.NET Developer', vi: '.NET Developer' },
        team: { en: '1 PM, 7 developers', vi: '1 PM, 7 developer' },
        tech: ['ASP.NET Core MVC', 'jQuery', 'Bootstrap', 'React', 'MS SQL Server'],
      },
      {
        name: { en: 'Kiosk Pohang (Korea)', vi: 'Kiosk Pohang (Hàn Quốc)' },
        date: d('11/2024', '01/2025'),
        description: {
          en: 'Interactive kiosk for a Korean client: live weather over MQTT, tourist attractions, interactive map and user reviews.',
          vi: 'Kiosk tương tác cho khách Hàn Quốc: thời tiết thời gian thực qua MQTT, điểm tham quan, bản đồ tương tác và đánh giá người dùng.',
        },
        position: { en: 'Full Stack Developer', vi: 'Full Stack Developer' },
        team: { en: '1 PM, 5 developers, 1 QC', vi: '1 PM, 5 developer, 1 QC' },
        tech: ['WPF', 'RESTful API', 'Clean Architecture', 'CQRS'],
      },
    ],
  },
  {
    company: 'KAS Technology Corporation',
    date: d('09/2020', '01/2023'),
    projects: [
      {
        name: { en: 'SMAC Cloud — In-house ERP', vi: 'SMAC Cloud — ERP nội bộ' },
        date: d('01/2021', '01/2023'),
        description: {
          en: 'ERP covering CRM, HRM, Sales, Inventory and Accounting. Modules: split sales commission (Etico), industrial meal reservation (DussMann), partial accounting and configurable approval workflows.',
          vi: 'ERP gồm CRM, HRM, bán hàng, kho và kế toán. Các module: chia hoa hồng (Etico), đặt suất ăn công nghiệp (DussMann), kế toán một phần và quy trình phê duyệt tùy biến.',
        },
        position: { en: 'Full Stack Developer', vi: 'Full Stack Developer' },
        team: { en: '1 PM, 12 developers, 2 testers', vi: '1 PM, 12 developer, 2 tester' },
        tech: ['ASP.NET MVC / Web API', 'MongoDB', 'PostgreSQL', 'EF', 'jQuery', 'd3.js'],
      },
    ],
  },
];

export interface Shot {
  src: string;
  label: L;
  kind?: 'desktop' | 'mobile';
  locked?: boolean;
}

export interface FeaturedProject {
  id: string;
  name: string;
  kicker: L;
  summary: L;
  role: L;
  type: L;
  scope: L;
  period?: L;
  team?: L;
  admin: L[];
  highlights: L[];
  stack: string[];
  liveUrl: string;
  shots: Shot[];
  personal?: boolean;
  extraLink?: { label: L; url: string };
  accent: string;
}

export const FEATURED: FeaturedProject[] = [
  {
    id: 'okdimall',
    name: 'OKDIMALL',
    kicker: { en: 'Travel booking platform · E-commerce', vi: 'Nền tảng đặt phòng & tour · E-commerce' },
    summary: {
      en: 'A travel marketplace for hotels and tours: search, compare, book and pay online — backed by an admin/ERP back office for inventory, partners, members and promotions.',
      vi: 'Sàn du lịch cho khách sạn và tour: tìm kiếm, so sánh, đặt và thanh toán online — phía sau là back office ERP quản lý tồn phòng, đối tác, thành viên và khuyến mãi.',
    },
    role: { en: 'Project Manager & Full-stack Developer', vi: 'Quản lý dự án & Full-stack Developer' },
    period: { en: '10/2023 — Present', vi: '10/2023 — Hiện tại' },
    team: { en: '1 PM (me) + 4 developers', vi: '1 PM (mình) + 4 developer' },
    type: { en: 'Client & personal', vi: 'Khách hàng & cá nhân' },
    scope: {
      en: 'Planning · Database · Backend · Admin · Integrations · Deployment',
      vi: 'Lập kế hoạch · CSDL · Backend · Admin · Tích hợp · Triển khai',
    },
    admin: [
      { en: 'Hotel, tour and ticket inventory with prices and allotments', vi: 'Quản lý tồn phòng, tour, vé kèm giá và số lượng' },
      { en: 'Promotions, reward points and membership tiers', vi: 'Khuyến mãi, điểm thưởng và hạng thành viên' },
      { en: 'Partner commissions, bookings and a YoY revenue dashboard', vi: 'Hoa hồng đối tác, booking và dashboard doanh thu so với cùng kỳ' },
      { en: 'Content, reviews, OTA connections and role-based permissions', vi: 'Nội dung, đánh giá, kết nối OTA và phân quyền theo vai trò' },
    ],
    highlights: [
      {
        en: 'Led a 4-developer team with agile, iterative delivery; designed the database and the booking business logic end to end.',
        vi: 'Dẫn dắt nhóm 4 developer theo agile; thiết kế cơ sở dữ liệu và toàn bộ nghiệp vụ đặt chỗ.',
      },
      {
        en: 'Integrated ONEPay payments plus Hotel Link, VMB-Flight and Exely for reservations and ticketing.',
        vi: 'Tích hợp cổng thanh toán ONEPay cùng Hotel Link, VMB-Flight và Exely cho đặt phòng và vé.',
      },
      {
        en: 'Upgraded to .NET 9 and rebuilt the admin from MVC to React: YoY revenue dashboard, conversion funnel, partner ranking and booking management with filters.',
        vi: 'Nâng cấp lên .NET 9 và làm lại trang quản trị từ MVC sang React: dashboard doanh thu so với cùng kỳ, phễu chuyển đổi, xếp hạng đối tác và quản lý booking có bộ lọc.',
      },
      {
        en: 'Redis caching, Meilisearch full-text search, Hangfire background jobs, multi-language, PDF/Word documents and email/Telegram notifications.',
        vi: 'Cache Redis, tìm kiếm Meilisearch, job nền Hangfire, đa ngôn ngữ, xuất PDF/Word và thông báo email/Telegram.',
      },
    ],
    stack: ['.NET 9', 'ASP.NET Core Web API', 'React', 'PostgreSQL', 'Redis', 'Meilisearch', 'Hangfire', 'Docker', 'CQRS'],
    liveUrl: 'https://okdimall.com',
    shots: [
      {
        src: 'images/shots/okdimall-admin-dashboard.jpg',
        label: { en: 'Admin · Revenue dashboard', vi: 'Admin · Dashboard doanh thu' },
        locked: true,
      },
      {
        src: 'images/shots/okdimall-admin-booking.jpg',
        label: { en: 'Admin · Booking management', vi: 'Admin · Quản lý booking' },
        locked: true,
      },
      { src: 'images/shots/okdimall-why.jpg', label: { en: 'Why OKDIMALL', vi: 'Vì sao chọn OKDIMALL' } },
      { src: 'images/shots/okdimall-desktop.jpg', label: { en: 'Homepage', vi: 'Trang chủ' } },
      { src: 'images/shots/okdimall-desktop-2.jpg', label: { en: 'Trending stays', vi: 'Khách sạn nổi bật' } },
      { src: 'images/shots/okdimall-mobile.jpg', label: { en: 'Mobile', vi: 'Di động' }, kind: 'mobile' },
    ],
    accent: '#ef4444',
  },
  {
    id: 'kinetic',
    name: 'Kinetic3D',
    kicker: { en: '3D printing store · E-commerce', vi: 'Cửa hàng in 3D · E-commerce' },
    summary: {
      en: 'An online 3D-printing workshop: browse printable models in an interactive 3D viewer, order multi-colour AMS prints, or turn a sketch or photo into a print-ready 3D model.',
      vi: 'Xưởng in 3D trực tuyến: xem mô hình trong trình xem 3D tương tác, đặt in nhiều màu AMS, hoặc biến bản vẽ/ảnh chụp thành mô hình 3D sẵn sàng in.',
    },
    role: {
      en: 'Product owner & full-stack developer — managed and delivered end to end',
      vi: 'Chủ sản phẩm & Full-stack developer — quản lý và triển khai toàn bộ',
    },
    type: { en: 'Personal product', vi: 'Sản phẩm cá nhân' },
    scope: {
      en: 'Product · UI/UX · Frontend · 3D viewer · Backend · Admin · Deployment',
      vi: 'Sản phẩm · UI/UX · Frontend · Trình xem 3D · Backend · Admin · Triển khai',
    },
    admin: [
      { en: 'Product and 3D model catalog with prices and print options', vi: 'Danh mục sản phẩm, mô hình 3D, giá và tùy chọn in' },
      { en: 'Orders, print queue and customer management', vi: 'Đơn hàng, hàng đợi in và quản lý khách hàng' },
      { en: 'Pricing plans, promotions and discount codes', vi: 'Gói giá, khuyến mãi và mã giảm giá' },
    ],
    personal: true,
    highlights: [
      {
        en: 'Product pages with an orbiting 3D showcase, price, part count and one-click “order print” with quantity.',
        vi: 'Trang sản phẩm với mô hình 3D xoay quanh quỹ đạo, giá, số chi tiết và nút “đặt in” kèm số lượng.',
      },
      {
        en: '“Custom” flow: upload a 2D image or type a prompt to generate a clean quad-mesh 3D model with PBR textures.',
        vi: 'Luồng “Custom”: tải ảnh 2D hoặc nhập mô tả để tạo mô hình 3D quad-mesh gọn gàng, có PBR texture.',
      },
      {
        en: 'Complete store basics: catalog, wishlist, cart, pricing plans, sign-in and light/dark theme.',
        vi: 'Đủ nền tảng cửa hàng: danh mục, yêu thích, giỏ hàng, gói giá, đăng nhập và giao diện sáng/tối.',
      },
    ],
    stack: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind CSS', 'C# backend'],
    liveUrl: 'https://kinetic.phukhuong.io.vn',
    shots: [
      { src: 'images/shots/kinetic-desktop.jpg', label: { en: 'Product showcase', vi: 'Trưng bày sản phẩm' } },
      { src: 'images/shots/kinetic-desktop-2.jpg', label: { en: 'Image to 3D', vi: 'Ảnh sang 3D' } },
      { src: 'images/shots/kinetic-mobile.jpg', label: { en: 'Mobile', vi: 'Di động' }, kind: 'mobile' },
    ],
    accent: '#f59e0b',
  },
  {
    id: 'winglove',
    name: 'Winglove',
    kicker: { en: 'Wedding invitation SaaS', vi: 'SaaS thiệp cưới online' },
    summary: {
      en: 'Create a polished online wedding invitation in about five minutes — RSVP, photo album, directions and QR gifts in a single link. Preview for free, pay only when you publish.',
      vi: 'Tạo thiệp cưới online chỉn chu trong khoảng 5 phút — RSVP, album ảnh, chỉ đường và mừng cưới QR gói gọn trong một link. Xem trước miễn phí, chỉ trả tiền khi xuất bản.',
    },
    role: {
      en: 'Product owner & full-stack developer — managed and delivered end to end',
      vi: 'Chủ sản phẩm & Full-stack developer — quản lý và triển khai toàn bộ',
    },
    type: { en: 'Personal product · SaaS', vi: 'Sản phẩm cá nhân · SaaS' },
    scope: {
      en: 'Product · UI/UX · Templates · Backend · Payments · Admin · Deployment',
      vi: 'Sản phẩm · UI/UX · Mẫu thiệp · Backend · Thanh toán · Admin · Triển khai',
    },
    admin: [
      { en: 'Template library and style management', vi: 'Quản lý thư viện mẫu và phong cách thiệp' },
      { en: 'Customer invitations, orders and payments', vi: 'Thiệp của khách hàng, đơn hàng và thanh toán' },
      { en: 'Pricing plans and promotions', vi: 'Gói giá và khuyến mãi' },
    ],
    personal: true,
    highlights: [
      {
        en: 'Template gallery with 10 distinct styles, previewed live inside device frames.',
        vi: 'Thư viện 10 phong cách thiệp, xem trước trực tiếp trong khung thiết bị.',
      },
      {
        en: 'Guest flows: RSVP, wedding photos, map directions and QR-code gifting.',
        vi: 'Luồng cho khách mời: RSVP, ảnh cưới, chỉ đường và mừng cưới bằng mã QR.',
      },
      {
        en: 'Free-to-try model: build and preview without a deposit; payment only at publish time.',
        vi: 'Mô hình dùng thử miễn phí: tạo và xem trước không cần đặt cọc, chỉ thanh toán khi xuất bản.',
      },
      {
        en: 'Grew out of a one-off wedding site I built for Thanh Tùng & Hương Giang (RSVP, music, timeline).',
        vi: 'Phát triển từ website cưới riêng mình làm cho Thanh Tùng & Hương Giang (RSVP, nhạc nền, timeline).',
      },
    ],
    extraLink: {
      label: { en: 'The original wedding site', vi: 'Xem thiệp cưới gốc' },
      url: 'https://thanhtung-huonggiang-wedding.vercel.app/',
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    liveUrl: 'https://winglove.phukhuong.io.vn',
    shots: [
      { src: 'images/shots/winglove-desktop.jpg', label: { en: 'Landing page', vi: 'Trang giới thiệu' } },
      { src: 'images/shots/winglove-desktop-2.jpg', label: { en: 'Live templates', vi: 'Mẫu thiệp' } },
      { src: 'images/shots/winglove-mobile.jpg', label: { en: 'Mobile', vi: 'Di động' }, kind: 'mobile' },
    ],
    accent: '#be123c',
  },
];

export interface OtherProject {
  id: string;
  name: string;
  tag: L;
  desc: L;
  stack: string[];
  image?: string;
  logo?: string;
  icon?: 'ai' | 'erp' | 'health';
  liveUrl?: string;
  internal?: boolean;
}

export const OTHERS: OtherProject[] = [
  {
    id: 'griscat',
    name: 'Gris-Cat',
    tag: { en: 'Fashion storefront · UI study', vi: 'Cửa hàng thời trang · Nghiên cứu UI' },
    desc: {
      en: 'Minimal luxury fashion storefront with editorial collections, lookbook and a dynamic cart.',
      vi: 'Cửa hàng thời trang cao cấp tối giản với bộ sưu tập, lookbook và giỏ hàng động.',
    },
    stack: ['React', 'Tailwind CSS', 'Vite'],
    image: 'images/shots/griscat-desktop.jpg',
    liveUrl: 'https://gris-cat.vercel.app/',
  },
  {
    id: 'hocvui',
    name: 'Học Vui',
    tag: { en: 'EdTech', vi: 'Giáo dục' },
    desc: {
      en: 'English learning for grades 1–10: 610+ words with audio, flashcards and quizzes — homework with fewer tears.',
      vi: 'Học tiếng Anh lớp 1–10: 610+ từ có phát âm, flashcard và quiz — bài tập về nhà bớt nước mắt.',
    },
    stack: ['React', 'Web Audio', 'Tailwind CSS'],
    image: 'images/hocvui_preview.png',
  },
  {
    id: 'kimlong',
    name: 'Kim Long Motor',
    tag: { en: 'Automotive dealer portal', vi: 'Cổng thông tin đại lý ô tô' },
    desc: {
      en: 'Dealer website for commercial trucks: model showcase slider, vehicle catalog, quote requests, and one-tap hotline and Zalo contact.',
      vi: 'Website đại lý xe thương mại: slider giới thiệu dòng xe, danh mục xe, yêu cầu báo giá, gọi hotline và Zalo chỉ một chạm.',
    },
    stack: ['React', 'Tailwind CSS', 'Vite'],
    image: 'images/shots/kimlong.jpg',
  },
  {
    id: 'savills',
    internal: true,
    name: 'Savills ERP · MIH ERP',
    tag: { en: 'Real estate ERP · Singapore & Cambodia', vi: 'ERP bất động sản · Singapore & Campuchia' },
    desc: {
      en: 'Leasing, consignment, sales and commission sharing, with e-signatures and generated contracts and invoices.',
      vi: 'Cho thuê, ký gửi, bán hàng và chia hoa hồng, có chữ ký điện tử và tự động xuất hợp đồng, hóa đơn.',
    },
    stack: ['ASP.NET Core MVC', 'SQL Server', 'CQRS', 'Hangfire'],
    logo: 'images/prj_savills.svg',
  },
  {
    id: 'tealife',
    internal: true,
    name: 'Tealife WMS',
    tag: { en: 'Warehouse ERP · Japan', vi: 'ERP kho vận · Nhật Bản' },
    desc: {
      en: 'Inbound-to-outbound warehouse management with bundle inventory, reports and Blazor print templates.',
      vi: 'Quản lý kho từ nhập đến xuất, tồn kho theo bundle, báo cáo và mẫu in trên Blazor.',
    },
    stack: ['ASP.NET Core 8', 'Blazor', 'SQL Server'],
    logo: 'images/prj_tealife.png',
  },
  {
    id: 'pohang',
    internal: true,
    name: 'Kiosk Pohang',
    tag: { en: 'Interactive kiosk · Korea', vi: 'Kiosk tương tác · Hàn Quốc' },
    desc: {
      en: 'Tourist kiosk with live MQTT weather, attractions, an interactive map and reviews.',
      vi: 'Kiosk du lịch có thời tiết MQTT thời gian thực, điểm tham quan, bản đồ và đánh giá.',
    },
    stack: ['WPF', 'REST API', 'CQRS'],
    logo: 'images/prj_pohang.png',
  },
  {
    id: 'socialapp',
    internal: true,
    name: 'SocialApp',
    tag: { en: 'Social-commerce ERP · Vietnam', vi: 'ERP social-commerce · Việt Nam' },
    desc: {
      en: 'Multi-tenant platform with 14 microservices behind a YARP gateway and Kafka events; I built the tenant admin.',
      vi: 'Nền tảng đa tenant với 14 microservices sau YARP gateway và Kafka; mình phụ trách trang admin tenant.',
    },
    stack: ['.NET 8', 'Blazor SSR', 'Kafka', 'Kubernetes'],
    icon: 'erp',
  },
  {
    id: 'quotation',
    internal: true,
    name: 'Vendor Quotation AI',
    tag: { en: 'AI automation · Hong Kong', vi: 'Tự động hóa AI · Hong Kong' },
    desc: {
      en: 'Reads every vendor quotation email, normalises it into one template and flags stock to import or export.',
      vi: 'Đọc mọi email báo giá, chuẩn hóa về một mẫu chung và cảnh báo hàng cần nhập/xuất.',
    },
    stack: ['n8n', 'MCP', 'Claude Code', 'Ollama'],
    icon: 'ai',
  },
  {
    id: 'furina',
    name: 'Furina Pet Wellness Hospital',
    tag: { en: 'Veterinary hospital', vi: 'Bệnh viện thú y' },
    desc: {
      en: 'Online booking by branch, vet and time slot; a digital pet passport with vaccination history and Zalo/SMS reminders; transparent pricing — plus a clinic back office with SOAP records, POS and FEFO pharmacy.',
      vi: 'Đặt lịch online theo chi nhánh, bác sĩ và khung giờ; hộ chiếu số cho thú cưng với lịch sử tiêm và nhắc lịch qua Zalo/SMS; bảng giá minh bạch — kèm back office phòng khám: bệnh án SOAP, thu ngân POS, kho dược FEFO.',
    },
    stack: ['Full-stack', 'Online booking', 'Digital records', 'Zalo / SMS'],
    image: 'images/shots/furina.jpg',
  },
];

export interface Partner {
  name: string;
  logo?: string;
}

export const PARTNERS: Partner[] = [
  { name: 'OKDIMALL', logo: 'images/prj_okdimall.svg' },
  { name: 'Savills', logo: 'images/prj_savills.svg' },
  { name: 'Meridian International Holding', logo: 'images/prj_mih.jpg' },
  { name: 'Tealife', logo: 'images/prj_tealife.png' },
  { name: 'Pohang', logo: 'images/prj_pohang.png' },
  { name: 'Shuei Trading' },
  { name: 'AES Technologies' },
  { name: 'KAS Technology' },
];
