export default function Home() {
  return (
      <main>
        <section
            className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-4xl">
              {/*<h1 className="text-base font-bold uppercase tracking-widest text-blue-600">Features</h1>*/}
              <p className="font-display text-4xl font-bold tracking-tight text-gray-900 mt-5 sm:text-5xl lg:text-6xl">Find <span
                  className="text-blue-600">verified</span> emails </p>
              <p className="max-w-3xl text-base font-normal text-gray-700 mx-auto mt-5 sm:text-lg lg:text-xl">Find valid emails of your ideal customers for sales, business development, recruiting, marketing, and more.</p>
            </div>
            {/*<ul className="flex max-w-2xl flex-col justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-900 mx-auto mt-6 sm:flex-row sm:flex-wrap sm:mt-8">*/}
            {/*  <li className="flex items-center justify-center gap-2">*/}
            {/*    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"*/}
            {/*         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
            {/*      <path*/}
            {/*          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
            {/*    </svg>*/}
            {/*    Personalized onboarding help*/}
            {/*  </li>*/}
            {/*  <li className="flex items-center justify-center gap-2">*/}
            {/*    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"*/}
            {/*         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
            {/*      <path*/}
            {/*          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
            {/*    </svg>*/}
            {/*    Friendly pricing as you scale*/}
            {/*  </li>*/}
            {/*  <li className="flex items-center justify-center gap-2">*/}
            {/*    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"*/}
            {/*         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
            {/*      <path*/}
            {/*          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
            {/*    </svg>*/}
            {/*    95+ languages supported*/}
            {/*  </li>*/}
            {/*  <li className="flex items-center justify-center gap-2">*/}
            {/*    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"*/}
            {/*         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
            {/*      <path*/}
            {/*          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
            {/*    </svg>*/}
            {/*    Cancel anytime*/}
            {/*  </li>*/}
            {/*</ul>*/}
            <div
                className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:mt-8">


              <a href="/login"><button className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get Started</button></a>

              {/*<a target="_blank" rel="noopener noreferrer"*/}
              {/*                                        href="https://cal.com/sitegpt/30min"*/}
              {/*                                        className="isomorphic-link isomorphic-link--external inline-flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 rounded-xl px-8 py-4 hover:bg-gray-50">Book*/}
              {/*a Demo</a>*/}

            </div>
            <div className="max-w-6xl mx-auto mt-16 lg:mt-20"><img
                className="h-full w-full object-cover shadow-lg ring-1 ring-blue-200 rounded-2xl"
                src="https://sitegpt.ai/images/features-mockup.png" alt=""/></div>
            {/*<div className="max-w-5xl mx-auto mt-16 text-center lg:mt-20">*/}
            {/*  <p className="text-base font-semibold text-gray-900">Trusted by these leading*/}
            {/*    companies</p>*/}
            {/*  <div*/}
            {/*      className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 mt-4 sm:mt-6 lg:gap-x-8">*/}
            {/*    <img className="h-12 w-auto object-contain mix-blend-multiply sm:h-14"*/}
            {/*         src="https://sitegpt.ai/images/customer-logos/alignable.png" alt=""/><img*/}
            {/*        className="h-12 w-auto object-contain sm:h-14"*/}
            {/*        src="https://sitegpt.ai/images/customer-logos/screen-binge.png" alt=""/><img*/}
            {/*        className="h-12 w-auto object-contain sm:h-14"*/}
            {/*        src="https://sitegpt.ai/images/customer-logos/sheets-giggles.png" alt=""/><img*/}
            {/*        className="h-12 w-auto object-contain sm:h-14"*/}
            {/*        src="https://sitegpt.ai/images/customer-logos/cbs-bahamas.png" alt=""/><img*/}
            {/*        className="h-12 w-auto object-contain sm:h-14"*/}
            {/*        src="https://sitegpt.ai/images/customer-logos/link-research-tools.png" alt=""/></div>*/}
            {/*</div>*/}
          </div>
        </section>
        {/*<section className="bg-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="max-w-2xl mx-auto text-center">*/}
        {/*      <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything*/}
        {/*        you need to roll out your own Al chatbot</h2>*/}
        {/*      <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg">SiteGPT is a*/}
        {/*        production-ready support solution that does the work of a full support staff but at*/}
        {/*        a fraction of the cost.</p>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className="flex max-w-5xl flex-wrap items-center justify-center gap-5 text-lg font-semibold text-gray-900 mx-auto mt-12 sm:mt-16">*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#import-training-content">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-56,67.32a8,8,0,0,1-11.32,0L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0l24,24A8,8,0,0,1,157.66,149.66ZM152,88V44l44,44Z"></path>*/}
        {/*          </svg>*/}
        {/*          Import Training Content*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#qanda-training">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path>*/}
        {/*          </svg>*/}
        {/*          Q&amp;A Training*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#gpt-3.5-and-gpt-4">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>*/}
        {/*          </svg>*/}
        {/*          GPT-3.5 &amp; GPT-4*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#embed-on-sites">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128.57,189.66l-5.46,5.45a44,44,0,0,1-62.22-62.22l24-24a44.08,44.08,0,0,1,55.56-5.48,8,8,0,0,1-8.9,13.3A28,28,0,0,0,96.2,120.2l-24,24a28,28,0,0,0,39.6,39.6l5.45-5.46a8,8,0,0,1,11.32,11.32Zm66.54-66.55-24,24a44.08,44.08,0,0,1-55.56,5.48,8,8,0,0,1,8.9-13.3,28.06,28.06,0,0,0,35.35-3.49l24-24a28,28,0,0,0-39.6-39.6l-5.45,5.46a8,8,0,0,1-11.32-11.32l5.46-5.45a44,44,0,0,1,62.22,62.22Z"></path>*/}
        {/*          </svg>*/}
        {/*          Embed on Sites*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#customize-appearance">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,84,112Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,112Z"></path>*/}
        {/*          </svg>*/}
        {/*          Customize Appearance*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#quick-prompts">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"></path>*/}
        {/*          </svg>*/}
        {/*          Quick Prompts*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#chat-history">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z"></path>*/}
        {/*          </svg>*/}
        {/*          Chat History*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#escalate-to-a-human">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z"></path>*/}
        {/*          </svg>*/}
        {/*          Escalate to a Human*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#language-support">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z"></path>*/}
        {/*          </svg>*/}
        {/*          Language Support*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#lead-generation">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z"></path>*/}
        {/*          </svg>*/}
        {/*          Lead Generation*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#functions">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z"></path>*/}
        {/*            <path*/}
        {/*                d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z"></path>*/}
        {/*            <path*/}
        {/*                d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z"></path>*/}
        {/*          </svg>*/}
        {/*          Functions*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#email-summaries">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>*/}
        {/*          </svg>*/}
        {/*          Email Summaries*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#api">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M152,96V80h-8a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h8V160a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V192h-8a32,32,0,0,1-32-32V136H80v8a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V112A16,16,0,0,1,32,96H64a16,16,0,0,1,16,16v8h32V96a32,32,0,0,1,32-32h8V48a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V96a16,16,0,0,1-16,16H168A16,16,0,0,1,152,96Z"></path>*/}
        {/*          </svg>*/}
        {/*          API*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*      <a aria-current="page"*/}
        {/*         className="isomorphic-link isomorphic-link--internal bg-white shadow-xl ring-1 ring-inset ring-gray-100 transition-all duration-200 rounded-xl px-5 py-3.5 hover:-translate-y-1 hover:shadow-2xl hover:ring-blue-600"*/}
        {/*         href="/features#integrations">*/}
        {/*        <div className="flex items-center justify-center gap-2">*/}
        {/*          <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">*/}
        {/*            <path*/}
        {/*                d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>*/}
        {/*          </svg>*/}
        {/*          Integrations*/}
        {/*        </div>*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section id="training-and-customization"*/}
        {/*         className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="gap-16 text-center lg:flex lg:items-start lg:text-left">*/}
        {/*      <div*/}
        {/*          className="w-full max-w-xl shrink-0 mx-auto lg:sticky lg:max-w-sm lg:top-24 lg:mx-0">*/}
        {/*        <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-5xl lg:text-5xl">Training &amp; Customization</h3>*/}
        {/*        <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg">Unlock the full*/}
        {/*          potential of your chatbot by customizing its knowledge and appearance.</p>*/}
        {/*      </div>*/}
        {/*      <div className="grid flex-1 grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:mt-0">*/}
        {/*        <div id="import-training-content">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-56,67.32a8,8,0,0,1-11.32,0L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0l24,24A8,8,0,0,1,157.66,149.66ZM152,88V44l44,44Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Import*/}
        {/*            Training Content</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Enter a URL for*/}
        {/*            SiteGPT to scan, or upload files, or drop raw text content directly, making it*/}
        {/*            easier than ever to keep your chatbot informed and effective.</p>*/}
        {/*        </div>*/}
        {/*        <div id="qanda-training">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Q&amp;A*/}
        {/*            Training</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Use real chat*/}
        {/*            history to refine and improve your chatbot by providing feedback that allows it*/}
        {/*            to improve with every interaction.</p>*/}
        {/*        </div>*/}
        {/*        <div id="gpt-3.5-and-gpt-4">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">GPT-3.5 &amp; GPT-4</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Choose between*/}
        {/*            two powerful AI models and switch anytime depending on how you want your chatbot*/}
        {/*            to behave. GPT-3.5 prioritizes speed while GPT-4 prioritizes depth and*/}
        {/*            accuracy.</p>*/}
        {/*        </div>*/}
        {/*        <div id="embed-on-sites">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128.57,189.66l-5.46,5.45a44,44,0,0,1-62.22-62.22l24-24a44.08,44.08,0,0,1,55.56-5.48,8,8,0,0,1-8.9,13.3A28,28,0,0,0,96.2,120.2l-24,24a28,28,0,0,0,39.6,39.6l5.45-5.46a8,8,0,0,1,11.32,11.32Zm66.54-66.55-24,24a44.08,44.08,0,0,1-55.56,5.48,8,8,0,0,1,8.9-13.3,28.06,28.06,0,0,0,35.35-3.49l24-24a28,28,0,0,0-39.6-39.6l-5.45,5.46a8,8,0,0,1-11.32-11.32l5.46-5.45a44,44,0,0,1,62.22,62.22Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Embed on*/}
        {/*            Sites</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Embed a chatbot*/}
        {/*            on as many sites as you want — your marketing site, in-app, help center…*/}
        {/*            wherever.</p>*/}
        {/*        </div>*/}
        {/*        <div id="customize-appearance">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,84,112Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,112Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Customize*/}
        {/*            Appearance</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Personalize*/}
        {/*            your chatbot to match your brand, using custom logos and colors to provide a*/}
        {/*            cohesive user experience.</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section id="chat-interactions" className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="gap-16 text-center lg:flex lg:items-start lg:text-left">*/}
        {/*      <div*/}
        {/*          className="w-full max-w-xl shrink-0 mx-auto lg:sticky lg:max-w-sm lg:top-24 lg:mx-0">*/}
        {/*        <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-5xl lg:text-5xl">Chat*/}
        {/*          Interactions</h3>*/}
        {/*        <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg">Enhance user*/}
        {/*          interactions with powerful features such as advanced AI engines, multi-language*/}
        {/*          support, and seamless human escalation.</p>*/}
        {/*      </div>*/}
        {/*      <div className="grid flex-1 grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:mt-0">*/}
        {/*        <div id="quick-prompts">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Quick*/}
        {/*            Prompts</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Provide users*/}
        {/*            with digital icebreakers to kick things off. Include frequently asked questions*/}
        {/*            or questions you wish more users would ask to get value out of your product or*/}
        {/*            service.</p>*/}
        {/*        </div>*/}
        {/*        <div id="chat-history">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Chat*/}
        {/*            History</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Review each*/}
        {/*            conversation, assess the chatbot's performance, and determine whether visitors'*/}
        {/*            questions were effectively addressed. You're never in the dark about what your*/}
        {/*            chatbot is responding with.</p>*/}
        {/*        </div>*/}
        {/*        <div id="escalate-to-a-human">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Escalate to a*/}
        {/*            Human</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">While AI can*/}
        {/*            handle a vast majority of inquiries, some conversations require a human touch.*/}
        {/*            Users can seamlessly transition the conversation to a live agent at the push of*/}
        {/*            a button. This hybrid approach ensures that users always receive the best*/}
        {/*            possible assistance.</p>*/}
        {/*        </div>*/}
        {/*        <div id="language-support">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Language*/}
        {/*            Support</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Your chatbot is*/}
        {/*            ready to chat in 95 languages. Let visitors ask questions and respond in any*/}
        {/*            language.</p>*/}
        {/*        </div>*/}
        {/*        <div id="lead-generation">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M200,40H160a16,16,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16,16,0,0,0,96,40H56A16,16,0,0,0,40,56v88a88,88,0,0,0,88,88h.67c48.15-.36,87.33-40.29,87.33-89V56A16,16,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Lead*/}
        {/*            Generation</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Don't just*/}
        {/*            answer questions, seize opportunities. Your chatbot captures interested*/}
        {/*            visitors' details, allowing you to build a list of potential leads.</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section id="extensions" className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="gap-16 text-center lg:flex lg:items-start lg:text-left">*/}
        {/*      <div*/}
        {/*          className="w-full max-w-xl shrink-0 mx-auto lg:sticky lg:max-w-sm lg:top-24 lg:mx-0">*/}
        {/*        <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-5xl lg:text-5xl">Extensions</h3>*/}
        {/*        <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg">Extend your*/}
        {/*          chatbot's capabilities with automation, insightful summaries, and powerful*/}
        {/*          integrations.</p>*/}
        {/*      </div>*/}
        {/*      <div className="grid flex-1 grid-cols-1 gap-12 mt-12 sm:grid-cols-2 lg:mt-0">*/}
        {/*        <div id="functions">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z"></path>*/}
        {/*              <path*/}
        {/*                  d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z"></path>*/}
        {/*              <path*/}
        {/*                  d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Functions</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Allows users to*/}
        {/*            automate tasks just by interacting with your chatbot. Your chatbot can listen,*/}
        {/*            understand, and interact with other systems based on chat interactions.</p>*/}
        {/*        </div>*/}
        {/*        <div id="email-summaries">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Email*/}
        {/*            Summaries</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Keep a pulse on*/}
        {/*            chatbot interactions with daily summaries delivered to your inbox. Upload more*/}
        {/*            training data where needed, track the chatbot's performance, and gain insights*/}
        {/*            into user behavior.</p>*/}
        {/*        </div>*/}
        {/*        <div id="api">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M152,96V80h-8a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h8V160a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V192h-8a32,32,0,0,1-32-32V136H80v8a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V112A16,16,0,0,1,32,96H64a16,16,0,0,1,16,16v8h32V96a32,32,0,0,1,32-32h8V48a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V96a16,16,0,0,1-16,16H168A16,16,0,0,1,152,96Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">API</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">Connect SiteGPT*/}
        {/*            to any other app you want to sync data to, automatically retrain with new*/}
        {/*            content, and update settings programmatically.</p>*/}
        {/*          <div className="mt-3">*/}
        {/*            <a className="group inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-all duration-150 hover:text-blue-500 hover:underline"*/}
        {/*               href="https://sitegpt.ai/docs/api-reference/getting-started">*/}
        {/*              Learn More*/}
        {/*              <svg aria-hidden="true"*/}
        {/*                   className="h-4 w-4 text-blue-600 transition-all duration-200 group-hover:translate-x-1"*/}
        {/*                   xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                   viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </a>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div id="integrations">*/}
        {/*          <div*/}
        {/*              className="inline-flex h-12 w-12 items-center justify-center bg-blue-50 shadow-lg ring-1 ring-inset ring-blue-600 rounded-xl">*/}
        {/*            <svg aria-hidden="true" className="h-6 w-6 text-blue-600"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"></path>*/}
        {/*            </svg>*/}
        {/*          </div>*/}
        {/*          <h4 className="text-xl font-semibold text-gray-900 mt-5 sm:text-2xl">Integrations</h4>*/}
        {/*          <p className="text-sm font-normal text-gray-700 mt-3 sm:text-base">With native*/}
        {/*            integrations into platforms like Crisp, Intercom, and Zendesk, your chatbot*/}
        {/*            becomes an extended arm of your existing toolkit.</p>*/}
        {/*          <div className="mt-3">*/}
        {/*            <a className="isomorphic-link isomorphic-link--internal group inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-all duration-150 hover:text-blue-500 hover:underline"*/}
        {/*               href="/integrations">*/}
        {/*              Learn More*/}
        {/*              <svg aria-hidden="true"*/}
        {/*                   className="h-4 w-4 text-blue-600 transition-all duration-200 group-hover:translate-x-1"*/}
        {/*                   xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                   viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </a>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section id="demo" className="bg-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">*/}
        {/*      <div className="max-w-xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">*/}
        {/*        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Live demo</p>*/}
        {/*        <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">See*/}
        {/*          for yourself. <br className="lg:block"/></h2>*/}
        {/*        <p className="text-base text-gray-700 mt-4 sm:text-lg">Ask the SiteGPT chatbot a*/}
        {/*          question about itself.</p>*/}
        {/*      </div>*/}
        {/*      <div className="xl:px-16">*/}
        {/*        <div*/}
        {/*            className="aspect-[1/2] overflow-hidden ring-1 ring-blue-600 rounded-2xl sm:aspect-[3/4]">*/}
        {/*          <iframe className="h-full w-full object-cover"*/}
        {/*                  src="https://widget.sitegpt.ai/c/360485494599975514"*/}
        {/*                  title="SiteGPT Demo"></iframe>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="max-w-xl mx-auto text-center lg:max-w-3xl">*/}
        {/*      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Customer*/}
        {/*        testimonials</p>*/}
        {/*      <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">Don't*/}
        {/*        just take our word for it</h2>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-12 mx-auto mt-12 text-center sm:mt-16 sm:text-left lg:max-w-none lg:grid-cols-2 lg:mx-0">*/}
        {/*      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">*/}
        {/*        <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"*/}
        {/*             src="https://sitegpt.ai/images/testimonials/christoph.jpeg" alt=""/>*/}
        {/*          <div>*/}
        {/*            <blockquote>*/}
        {/*              <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“SiteGPT*/}
        {/*                appears to be first really production ready support solution that allows*/}
        {/*                custom training, while so many others break or simply lack functionality.*/}
        {/*                (we have tested and trialed MANY in the past 3 months)”</p>*/}
        {/*            </blockquote>*/}
        {/*            <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Christoph*/}
        {/*              C. Cemper</p>*/}
        {/*            <p className="text-sm font-normal text-gray-700 mt-0.5">Founder &amp; CEO of*/}
        {/*              AIPRM.com</p>*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">*/}
        {/*        <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"*/}
        {/*             src="https://sitegpt.ai/images/testimonials/akhil.jpeg" alt=""/>*/}
        {/*          <div>*/}
        {/*            <blockquote>*/}
        {/*              <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“Other*/}
        {/*                than the obvious benefits of using SiteGPT, we are getting user*/}
        {/*                feedback/feature requests - it's only day 1 of using the SiteGPT bot.”</p>*/}
        {/*            </blockquote>*/}
        {/*            <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Akhil*/}
        {/*              Kundh</p>*/}
        {/*            <p className="text-sm font-normal text-gray-700 mt-0.5">Growth at CheqUptime</p>*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">*/}
        {/*        <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"*/}
        {/*             src="https://sitegpt.ai/images/testimonials/brent.jpeg" alt=""/>*/}
        {/*          <div>*/}
        {/*            <blockquote>*/}
        {/*              <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“We've*/}
        {/*                got the bot dialled in - we're using GPT-4, have an avenue for escalations*/}
        {/*                to Zendesk, and so far I have no complaints.”</p>*/}
        {/*            </blockquote>*/}
        {/*            <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Brent*/}
        {/*              Burrows II</p>*/}
        {/*            <p className="text-sm font-normal text-gray-700 mt-0.5">Vice President –*/}
        {/*              Retail &amp; Sales at CBS Bahamas</p>*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">*/}
        {/*        <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"*/}
        {/*             src="https://sitegpt.ai/images/testimonials/frank.jpeg" alt=""/>*/}
        {/*          <div>*/}
        {/*            <blockquote>*/}
        {/*              <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“Every*/}
        {/*                now and then, you stumble on a great solution. SiteGPT is like I imagined a*/}
        {/*                chatbot solution could be a few years back.”</p>*/}
        {/*            </blockquote>*/}
        {/*            <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Frank*/}
        {/*              Smit</p>*/}
        {/*            <p className="text-sm font-normal text-gray-700 mt-0.5">Chief Innovation Officer*/}
        {/*              at OBI4wan</p>*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<section className="bg-white py-12 sm:py-16 lg:py-20">*/}
        {/*  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="max-w-xl mx-auto text-center lg:max-w-3xl">*/}
        {/*      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">FAQs</h2>*/}
        {/*      <p className="text-base font-normal text-gray-600 mt-4 sm:text-lg">Have a different*/}
        {/*        question and can't find the answer you're looking for? Reach out to our support team*/}
        {/*        by <a target="_blank" rel="noopener noreferrer" href="mailto:bhanu@sitegpt.ai"*/}
        {/*              className="isomorphic-link isomorphic-link--external text-blue-600 hover:text-blue-500 hover:underline">sending*/}
        {/*          us an email</a> and we'll get back to you as soon as we can.</p>*/}
        {/*    </div>*/}
        {/*    <form method="get" action="/features"*/}
        {/*          className="mt-12 border-b border-gray-200 sm:mt-16">*/}
        {/*      <nav className="flex w-full flex-nowrap gap-6 overflow-x-auto -mb-px sm:gap-8">*/}
        {/*        <button type="submit" name="category" value="chatbot-training-and-support"*/}
        {/*                className="whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 text-blue-600 border-blue-600">Chatbot*/}
        {/*          Training and Support*/}
        {/*        </button>*/}
        {/*        <button type="submit" name="category" value="pricing"*/}
        {/*                className="whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300">Pricing*/}
        {/*        </button>*/}
        {/*        <button type="submit" name="category" value="technology-and-integrations"*/}
        {/*                className="whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300">Technology*/}
        {/*          and Integrations*/}
        {/*        </button>*/}
        {/*      </nav>*/}
        {/*    </form>*/}
        {/*    <div className="grid grid-cols-1 gap-x-16 gap-y-5 mt-8 lg:grid-cols-2">*/}
        {/*      <div className="flow-root">*/}
        {/*        <div className="divide-gray-200 -my-6 divide-y">*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Can*/}
        {/*                I add text content to train the chatbot if I don't have web pages to scrape*/}
        {/*                or files to upload?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Yes, you're able to enter raw text content as training data.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Do*/}
        {/*                you have a plan for agencies to offer chatbots to their clients?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Yes, please contact us by sending us an email for more information.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Is*/}
        {/*                there a demo that I can try?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Yes, you can go to <a*/}
        {/*                    href="https://sitegpt.ai/demo" target="_blank"*/}
        {/*                    rel="noreferrer noopener">sitegpt.ai/demo</a> and try out the demo. The demo bot you see on <a*/}
        {/*                    href="https://sitegpt.ai/demo" target="_blank"*/}
        {/*                    rel="noreferrer noopener">sitegpt.ai/demo</a> is trained on the <strong>sitegpt.ai</strong> website content itself. So you can ask any questions related to SiteGPT website in that demo bot and it will answer it.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">What*/}
        {/*                type of content can we use to train the chatbot?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">You can use any type of content to train the chatbot. The more content you provide, the better the chatbot will be able to answer the questions.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Do*/}
        {/*                you retrain the chatbot automatically when the website content changes?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Right now, for retraining, you have to go to the dashboard and click on <strong>Retrain</strong> button to retrain the chatbot. We are working on automating this process and do it periodically.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="flow-root">*/}
        {/*        <div className="divide-gray-200 -my-6 divide-y">*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Can*/}
        {/*                I upload files to train the chatbot?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Yes. You can upload <code>CSV/TXT/PDF/DOCX/PPTX/MD</code> files to train the chatbot. The limits vary based on what plan you are on.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Some*/}
        {/*                of my files are larger than 10 MB. What do I do?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Please contact us on <code>bhanu@sitegpt.ai</code>. We can figure out a way for you to upload those files.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How*/}
        {/*                do I add the chatbot to my website?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">Each chatbot gets its own unique url, you can embed the chatbot on your own site via the embed code we provide. You can even directly link to the chatbot from your site.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How*/}
        {/*                do I train the chatbot?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">You can train the chatbot by adding a <code>website link</code>, <code>a sitemap link</code>, a <code>Zendesk Help Center Link</code>, a <code>Gitbook link</code>. You can just enter a URL and the chatbot will be trained on all the content present on that URL. You can also upload <code>CSV/TXT/PDF/DOCX/PPTX/MD</code> files to train the chatbots.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How*/}
        {/*                long does the training take?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">It depends on the number of pages you are training. But usually, it should be done within a few minutes.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <div className="relative py-6">*/}
        {/*            <details*/}
        {/*                className="menu-details peer cursor-pointer transition-all duration-150">*/}
        {/*              <summary*/}
        {/*                  className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How*/}
        {/*                can we contact you?*/}
        {/*              </summary>*/}
        {/*              <div className="mt-4">*/}
        {/*                <p className="text-base text-gray-600"><span className="prose prose-blue">You can reach out to us at <code>bhanu@sitegpt.ai</code>.</span>*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            </details>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*            <div*/}
        {/*                className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">*/}
        {/*              <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"*/}
        {/*                   fill="#currentColor" viewBox="0 0 256 256">*/}
        {/*                <path*/}
        {/*                    d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>*/}
        {/*              </svg>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        {/*<div className="relative">*/}
        {/*  <div className="absolute grid inset-0" aria-hidden="true">*/}
        {/*    <div className="bg-white"></div>*/}
        {/*    <div className="bg-blue-50"></div>*/}
        {/*  </div>*/}
        {/*  <div className="relative">*/}
        {/*    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*      <div*/}
        {/*          className="bg-blue-600 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">*/}
        {/*        <div className="max-w-2xl mx-auto">*/}
        {/*          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Ready*/}
        {/*            to take SiteGPT for a spin?</h2>*/}
        {/*          <p className="max-w-lg text-base text-blue-100 mx-auto mt-4 sm:text-lg">Find out*/}
        {/*            if a personalized AI support chatbot is a good fit for you in just a few*/}
        {/*            hours.</p>*/}
        {/*        </div>*/}
        {/*        <div*/}
        {/*            className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">*/}
        {/*          <a className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center bg-white text-lg font-semibold text-blue-600 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"*/}
        {/*             href="/pricing">Create Chatbot</a><a target="_blank" rel="noopener noreferrer"*/}
        {/*                                                  href="https://cal.com/sitegpt/30min"*/}
        {/*                                                  className="isomorphic-link isomorphic-link--external inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-700">Book*/}
        {/*          a Demo</a></div>*/}
        {/*        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">*/}
        {/*          <li className="inline-flex items-center gap-2">*/}
        {/*            <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
        {/*            </svg>*/}
        {/*            Personalized onboarding help*/}
        {/*          </li>*/}
        {/*          <li className="inline-flex items-center gap-2">*/}
        {/*            <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
        {/*            </svg>*/}
        {/*            Friendly pricing as you scale*/}
        {/*          </li>*/}
        {/*          <li className="inline-flex items-center gap-2">*/}
        {/*            <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"*/}
        {/*                 viewBox="0 0 256 256">*/}
        {/*              <path*/}
        {/*                  d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>*/}
        {/*            </svg>*/}
        {/*            95+ languages supported*/}
        {/*          </li>*/}
        {/*        </ul>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </main>
  )
}