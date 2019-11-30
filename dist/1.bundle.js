(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function(n, e, t) {
      'use strict';
      n.exports = t(5);
    },
    function(n, e, t) {
      (n.exports = t(12)(!1)).push([
        n.i,
        '/*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex="-1"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nselect {\n  word-wrap: normal;\n}\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\nbutton:not(:disabled),\n[type="button"]:not(:disabled),\n[type="reset"]:not(:disabled),\n[type="submit"]:not(:disabled) {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type="date"],\ninput[type="time"],\ninput[type="datetime-local"],\ninput[type="month"] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: 2.5rem;\n}\n\nh2, .h2 {\n  font-size: 2rem;\n}\n\nh3, .h3 {\n  font-size: 1.75rem;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer::before {\n  content: "\\2014\\00A0";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}\n\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px;\n  }\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*="col-"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.row-cols-1 > * {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.row-cols-2 > * {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row-cols-3 > * {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.row-cols-4 > * {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row-cols-5 > * {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row-cols-6 > * {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-auto {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.order-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n\n.order-0 {\n  -ms-flex-order: 0;\n  order: 0;\n}\n\n.order-1 {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.order-2 {\n  -ms-flex-order: 2;\n  order: 2;\n}\n\n.order-3 {\n  -ms-flex-order: 3;\n  order: 3;\n}\n\n.order-4 {\n  -ms-flex-order: 4;\n  order: 4;\n}\n\n.order-5 {\n  -ms-flex-order: 5;\n  order: 5;\n}\n\n.order-6 {\n  -ms-flex-order: 6;\n  order: 6;\n}\n\n.order-7 {\n  -ms-flex-order: 7;\n  order: 7;\n}\n\n.order-8 {\n  -ms-flex-order: 8;\n  order: 8;\n}\n\n.order-9 {\n  -ms-flex-order: 9;\n  order: 9;\n}\n\n.order-10 {\n  -ms-flex-order: 10;\n  order: 10;\n}\n\n.order-11 {\n  -ms-flex-order: 11;\n  order: 11;\n}\n\n.order-12 {\n  -ms-flex-order: 12;\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.333333%;\n}\n\n.offset-2 {\n  margin-left: 16.666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.333333%;\n}\n\n.offset-5 {\n  margin-left: 41.666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.333333%;\n}\n\n.offset-8 {\n  margin-left: 66.666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.333333%;\n}\n\n.offset-11 {\n  margin-left: 91.666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-sm-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-sm-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-sm-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-sm-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-md-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-md-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-md-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-md-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-md-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-md-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-md-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-md-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-md-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-md-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-md-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-md-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-md-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-md-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-md-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-md-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-md-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-md-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-md-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-md-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-lg-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-lg-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-lg-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-lg-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-xl-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-xl-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-xl-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-xl-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7abaff;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db;\n}\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #c8cbcf;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e;\n}\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda;\n}\n\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #454d55;\n}\n\n.table-dark.table-bordered {\n  border: 0;\n}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row > .col,\n.form-row > [class*="col-"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[disabled] ~ .form-check-label,\n.form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'5\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2328a745\' d=\'M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z\'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57;\n}\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23dc3545\' viewBox=\'0 0 12 12\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23dc3545\' stroke=\'none\'/%3e%3c/svg%3e");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'5\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23dc3545\' viewBox=\'0 0 12 12\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23dc3545\' stroke=\'none\'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d;\n}\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.form-inline .form-check {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .form-inline label {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: center;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n\n.btn:hover {\n  color: #212529;\n  text-decoration: none;\n}\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning:focus, .btn-warning.focus {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light:focus, .btn-light.focus {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark:focus, .btn-dark.focus {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-outline-primary {\n  color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none;\n}\n\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n  box-shadow: none;\n}\n\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n}\n\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle > .btn input[type="radio"],\n.btn-group-toggle > .btn input[type="checkbox"],\n.btn-group-toggle > .btn-group > .btn input[type="radio"],\n.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  -ms-flex: 1 1 0%;\n  flex: 1 1 0%;\n  min-width: 0;\n  margin-bottom: 0;\n}\n\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n\n.input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .custom-file {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3;\n}\n\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text input[type="radio"],\n.input-group-text input[type="checkbox"] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px);\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n.custom-control-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.25rem;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n}\n\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #80bdff;\n}\n\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #b3d7ff;\n  border-color: #b3d7ff;\n}\n\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: "";\n  background-color: #fff;\n  border: #adb5bd solid 1px;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: "";\n  background: no-repeat 50% / 50% 50%;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z\'/%3e%3c/svg%3e");\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3e%3cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3e%3c/svg%3e");\n}\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e");\n}\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-switch {\n  padding-left: 2.25rem;\n}\n\n.custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n}\n\n.custom-switch .custom-control-label::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch .custom-control-label::after {\n    transition: none;\n  }\n}\n\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  -webkit-transform: translateX(0.75rem);\n  transform: translateX(0.75rem);\n}\n\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'5\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple], .custom-select[size]:not([size="1"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select::-ms-expand {\n  display: none;\n}\n\n.custom-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input[disabled] ~ .custom-file-label,\n.custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: "Browse";\n}\n\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse);\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: "Browse";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-range:focus {\n  outline: none;\n}\n\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-moz-range-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-ms-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-range:disabled::-moz-range-track {\n  cursor: default;\n}\n\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.nav-fill .nav-item {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\n.navbar .container,\n.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: "";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n\n.navbar-expand {\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-expand .navbar-nav {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.navbar-expand .navbar-collapse {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n}\n\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e");\n}\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e");\n}\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.card-body {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-header + .list-group .list-group-item:first-child {\n  border-top: 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion > .card {\n  overflow: hidden;\n}\n\n.accordion > .card:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion > .card:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.accordion > .card > .card-header {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: "/";\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none;\n  }\n}\n\na.badge:hover, a.badge:focus {\n  text-decoration: none;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\n\na.badge-primary:hover, a.badge-primary:focus {\n  color: #fff;\n  background-color: #0062cc;\n}\n\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\n\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #fff;\n  background-color: #545b62;\n}\n\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n\na.badge-success:hover, a.badge-success:focus {\n  color: #fff;\n  background-color: #1e7e34;\n}\n\na.badge-success:focus, a.badge-success.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\na.badge-info:hover, a.badge-info:focus {\n  color: #fff;\n  background-color: #117a8b;\n}\n\na.badge-info:focus, a.badge-info.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\n\na.badge-warning:hover, a.badge-warning:focus {\n  color: #212529;\n  background-color: #d39e00;\n}\n\na.badge-warning:focus, a.badge-warning.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\n\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: #bd2130;\n}\n\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: #dae0e5;\n}\n\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: #1d2124;\n}\n\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary hr {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary .alert-link {\n  color: #002752;\n}\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary hr {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary .alert-link {\n  color: #202326;\n}\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n\n.alert-info .alert-link {\n  color: #062c33;\n}\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning .alert-link {\n  color: #533f03;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger .alert-link {\n  color: #491217;\n}\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n\n.alert-light .alert-link {\n  color: #686868;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark .alert-link {\n  color: #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n.media {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.media-body {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.list-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.list-group-horizontal .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n\n.list-group-horizontal .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n\n.list-group-horizontal .list-group-item.active {\n  margin-top: 0;\n}\n\n.list-group-horizontal .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n\n.list-group-horizontal .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-md .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n.list-group-flush .list-group-item {\n  border-right-width: 0;\n  border-left-width: 0;\n  border-radius: 0;\n}\n\n.list-group-flush .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close:hover {\n  color: #000;\n  text-decoration: none;\n}\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: .75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\na.close.disabled {\n  pointer-events: none;\n}\n\n.toast {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.toast.showing {\n  opacity: 1;\n}\n\n.toast.show {\n  display: block;\n  opacity: 1;\n}\n\n.toast.hide {\n  display: none;\n}\n\n.toast-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.toast-body {\n  padding: 0.75rem;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n\n.modal.fade .modal-dialog {\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -50px);\n  transform: translate(0, -50px);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n\n.modal.show .modal-dialog {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.modal.modal-static .modal-dialog {\n  -webkit-transform: scale(1.02);\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  display: -ms-flexbox;\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  content: "";\n}\n\n.modal-dialog-centered.modal-dialog-scrollable {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n\n.modal-content {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem);\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem);\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n\n.tooltip.show {\n  opacity: 0.9;\n}\n\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n\n.tooltip .arrow::before {\n  position: absolute;\n  content: "";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {\n  bottom: 0;\n}\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {\n  top: 0;\n}\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: "";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^="top"] {\n  margin-bottom: 0.5rem;\n}\n\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^="top"] > .arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^="right"] {\n  margin-left: 0.5rem;\n}\n\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^="right"] > .arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {\n  margin-top: 0.5rem;\n}\n\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^="bottom"] > .arrow {\n  top: calc(-0.5rem - 1px);\n}\n\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: "";\n  border-bottom: 1px solid #f7f7f7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^="left"] {\n  margin-right: 0.5rem;\n}\n\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^="left"] > .arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: "";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  -webkit-transform: none;\n  transform: none;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n  .carousel-control-next {\n    transition: none;\n  }\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50% / 100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z\'/%3e%3c/svg%3e");\n}\n\n.carousel-control-next-icon {\n  background-image: url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3e%3cpath d=\'M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z\'/%3e%3c/svg%3e");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  box-sizing: content-box;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity 0.6s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none;\n  }\n}\n\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border .75s linear infinite;\n  animation: spinner-border .75s linear infinite;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: spinner-grow .75s linear infinite;\n  animation: spinner-grow .75s linear infinite;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #007bff !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important;\n}\n\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n\n.bg-success {\n  background-color: #28a745 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n\n.bg-warning {\n  background-color: #ffc107 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n\n.bg-dark {\n  background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #007bff !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #28a745 !important;\n}\n\n.border-info {\n  border-color: #17a2b8 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #343a40 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: "";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive::before {\n  display: block;\n  content: "";\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  -ms-flex-direction: row !important;\n  flex-direction: row !important;\n}\n\n.flex-column {\n  -ms-flex-direction: column !important;\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  -ms-flex: 1 1 auto !important;\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  -ms-flex-positive: 0 !important;\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  -ms-flex-positive: 1 !important;\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  -ms-flex-align: start !important;\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  -ms-flex-align: end !important;\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important;\n}\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  align-self: auto !important;\n}\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: "";\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-n1 {\n  margin: -0.25rem !important;\n}\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n\n.m-n2 {\n  margin: -0.5rem !important;\n}\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n\n.m-n3 {\n  margin: -1rem !important;\n}\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n\n.m-n4 {\n  margin: -1.5rem !important;\n}\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n\n.m-n5 {\n  margin: -3rem !important;\n}\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-primary {\n  color: #007bff !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important;\n}\n\n.text-secondary {\n  color: #6c757d !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important;\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n\n.text-info {\n  color: #17a2b8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n\n.text-warning {\n  color: #ffc107 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important;\n}\n\n.text-dark {\n  color: #343a40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important;\n}\n\n.text-body {\n  color: #212529 !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-break {\n  word-break: break-word !important;\n  overflow-wrap: break-word !important;\n}\n\n.text-reset {\n  color: inherit !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: " (" attr(title) ")";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n  .container {\n    min-width: 992px !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important;\n  }\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: #dee2e6;\n  }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6;\n  }\n}',
        '',
      ]);
    },
    function(n, e, t) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
          Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function a(n) {
        if (null == n)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined',
          );
        return Object(n);
      }
      n.exports = (function() {
        try {
          if (!Object.assign) return !1;
          var n = new String('abc');
          if (((n[5] = 'de'), '5' === Object.getOwnPropertyNames(n)[0]))
            return !1;
          for (var e = {}, t = 0; t < 10; t++)
            e['_' + String.fromCharCode(t)] = t;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map(function(n) {
                return e[n];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(n) {
              r[n] = n;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (n) {
          return !1;
        }
      })()
        ? Object.assign
        : function(n, e) {
            for (var t, l, s = a(n), c = 1; c < arguments.length; c++) {
              for (var d in (t = Object(arguments[c])))
                o.call(t, d) && (s[d] = t[d]);
              if (r) {
                l = r(t);
                for (var u = 0; u < l.length; u++)
                  i.call(t, l[u]) && (s[l[u]] = t[l[u]]);
              }
            }
            return s;
          };
    },
    function(n, e, t) {
      'use strict';
      !(function n() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        ) {
          0;
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
          } catch (n) {
            console.error(n);
          }
        }
      })(),
        (n.exports = t(6));
    },
    function(n, e, t) {
      n.exports = t(9)();
    },
    function(n, e, t) {
      'use strict';
      /** @license React v16.12.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = t(2),
        o = 'function' == typeof Symbol && Symbol.for,
        i = o ? Symbol.for('react.element') : 60103,
        a = o ? Symbol.for('react.portal') : 60106,
        l = o ? Symbol.for('react.fragment') : 60107,
        s = o ? Symbol.for('react.strict_mode') : 60108,
        c = o ? Symbol.for('react.profiler') : 60114,
        d = o ? Symbol.for('react.provider') : 60109,
        u = o ? Symbol.for('react.context') : 60110,
        f = o ? Symbol.for('react.forward_ref') : 60112,
        m = o ? Symbol.for('react.suspense') : 60113;
      o && Symbol.for('react.suspense_list');
      var p = o ? Symbol.for('react.memo') : 60115,
        g = o ? Symbol.for('react.lazy') : 60116;
      o && Symbol.for('react.fundamental'),
        o && Symbol.for('react.responder'),
        o && Symbol.for('react.scope');
      var h = 'function' == typeof Symbol && Symbol.iterator;
      function b(n) {
        for (
          var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + n,
            t = 1;
          t < arguments.length;
          t++
        )
          e += '&args[]=' + encodeURIComponent(arguments[t]);
        return (
          'Minified React error #' +
          n +
          '; visit ' +
          e +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var v = {
          isMounted: function() {
            return !1;
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {},
        },
        x = {};
      function y(n, e, t) {
        (this.props = n),
          (this.context = e),
          (this.refs = x),
          (this.updater = t || v);
      }
      function w() {}
      function k(n, e, t) {
        (this.props = n),
          (this.context = e),
          (this.refs = x),
          (this.updater = t || v);
      }
      (y.prototype.isReactComponent = {}),
        (y.prototype.setState = function(n, e) {
          if ('object' != typeof n && 'function' != typeof n && null != n)
            throw Error(b(85));
          this.updater.enqueueSetState(this, n, e, 'setState');
        }),
        (y.prototype.forceUpdate = function(n) {
          this.updater.enqueueForceUpdate(this, n, 'forceUpdate');
        }),
        (w.prototype = y.prototype);
      var _ = (k.prototype = new w());
      (_.constructor = k), r(_, y.prototype), (_.isPureReactComponent = !0);
      var E = { current: null },
        T = { current: null },
        C = Object.prototype.hasOwnProperty,
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function N(n, e, t) {
        var r,
          o = {},
          a = null,
          l = null;
        if (null != e)
          for (r in (void 0 !== e.ref && (l = e.ref),
          void 0 !== e.key && (a = '' + e.key),
          e))
            C.call(e, r) && !S.hasOwnProperty(r) && (o[r] = e[r]);
        var s = arguments.length - 2;
        if (1 === s) o.children = t;
        else if (1 < s) {
          for (var c = Array(s), d = 0; d < s; d++) c[d] = arguments[d + 2];
          o.children = c;
        }
        if (n && n.defaultProps)
          for (r in (s = n.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
        return {
          $$typeof: i,
          type: n,
          key: a,
          ref: l,
          props: o,
          _owner: T.current,
        };
      }
      function D(n) {
        return 'object' == typeof n && null !== n && n.$$typeof === i;
      }
      var A = /\/+/g,
        I = [];
      function O(n, e, t, r) {
        if (I.length) {
          var o = I.pop();
          return (
            (o.result = n),
            (o.keyPrefix = e),
            (o.func = t),
            (o.context = r),
            (o.count = 0),
            o
          );
        }
        return { result: n, keyPrefix: e, func: t, context: r, count: 0 };
      }
      function P(n) {
        (n.result = null),
          (n.keyPrefix = null),
          (n.func = null),
          (n.context = null),
          (n.count = 0),
          10 > I.length && I.push(n);
      }
      function j(n, e, t) {
        return null == n
          ? 0
          : (function n(e, t, r, o) {
              var l = typeof e;
              ('undefined' !== l && 'boolean' !== l) || (e = null);
              var s = !1;
              if (null === e) s = !0;
              else
                switch (l) {
                  case 'string':
                  case 'number':
                    s = !0;
                    break;
                  case 'object':
                    switch (e.$$typeof) {
                      case i:
                      case a:
                        s = !0;
                    }
                }
              if (s) return r(o, e, '' === t ? '.' + L(e, 0) : t), 1;
              if (((s = 0), (t = '' === t ? '.' : t + ':'), Array.isArray(e)))
                for (var c = 0; c < e.length; c++) {
                  var d = t + L((l = e[c]), c);
                  s += n(l, d, r, o);
                }
              else if (
                (null === e || 'object' != typeof e
                  ? (d = null)
                  : (d =
                      'function' == typeof (d = (h && e[h]) || e['@@iterator'])
                        ? d
                        : null),
                'function' == typeof d)
              )
                for (e = d.call(e), c = 0; !(l = e.next()).done; )
                  s += n((l = l.value), (d = t + L(l, c++)), r, o);
              else if ('object' === l)
                throw ((r = '' + e),
                Error(
                  b(
                    31,
                    '[object Object]' === r
                      ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                      : r,
                    '',
                  ),
                ));
              return s;
            })(n, '', e, t);
      }
      function L(n, e) {
        return 'object' == typeof n && null !== n && null != n.key
          ? (function(n) {
              var e = { '=': '=0', ':': '=2' };
              return (
                '$' +
                ('' + n).replace(/[=:]/g, function(n) {
                  return e[n];
                })
              );
            })(n.key)
          : e.toString(36);
      }
      function z(n, e) {
        n.func.call(n.context, e, n.count++);
      }
      function M(n, e, t) {
        var r = n.result,
          o = n.keyPrefix;
        (n = n.func.call(n.context, e, n.count++)),
          Array.isArray(n)
            ? R(n, r, t, function(n) {
                return n;
              })
            : null != n &&
              (D(n) &&
                (n = (function(n, e) {
                  return {
                    $$typeof: i,
                    type: n.type,
                    key: e,
                    ref: n.ref,
                    props: n.props,
                    _owner: n._owner,
                  };
                })(
                  n,
                  o +
                    (!n.key || (e && e.key === n.key)
                      ? ''
                      : ('' + n.key).replace(A, '$&/') + '/') +
                    t,
                )),
              r.push(n));
      }
      function R(n, e, t, r, o) {
        var i = '';
        null != t && (i = ('' + t).replace(A, '$&/') + '/'),
          j(n, M, (e = O(e, i, r, o))),
          P(e);
      }
      function F() {
        var n = E.current;
        if (null === n) throw Error(b(321));
        return n;
      }
      var H = {
          Children: {
            map: function(n, e, t) {
              if (null == n) return n;
              var r = [];
              return R(n, r, null, e, t), r;
            },
            forEach: function(n, e, t) {
              if (null == n) return n;
              j(n, z, (e = O(null, null, e, t))), P(e);
            },
            count: function(n) {
              return j(
                n,
                function() {
                  return null;
                },
                null,
              );
            },
            toArray: function(n) {
              var e = [];
              return (
                R(n, e, null, function(n) {
                  return n;
                }),
                e
              );
            },
            only: function(n) {
              if (!D(n)) throw Error(b(143));
              return n;
            },
          },
          createRef: function() {
            return { current: null };
          },
          Component: y,
          PureComponent: k,
          createContext: function(n, e) {
            return (
              void 0 === e && (e = null),
              ((n = {
                $$typeof: u,
                _calculateChangedBits: e,
                _currentValue: n,
                _currentValue2: n,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: d, _context: n }),
              (n.Consumer = n)
            );
          },
          forwardRef: function(n) {
            return { $$typeof: f, render: n };
          },
          lazy: function(n) {
            return { $$typeof: g, _ctor: n, _status: -1, _result: null };
          },
          memo: function(n, e) {
            return { $$typeof: p, type: n, compare: void 0 === e ? null : e };
          },
          useCallback: function(n, e) {
            return F().useCallback(n, e);
          },
          useContext: function(n, e) {
            return F().useContext(n, e);
          },
          useEffect: function(n, e) {
            return F().useEffect(n, e);
          },
          useImperativeHandle: function(n, e, t) {
            return F().useImperativeHandle(n, e, t);
          },
          useDebugValue: function() {},
          useLayoutEffect: function(n, e) {
            return F().useLayoutEffect(n, e);
          },
          useMemo: function(n, e) {
            return F().useMemo(n, e);
          },
          useReducer: function(n, e, t) {
            return F().useReducer(n, e, t);
          },
          useRef: function(n) {
            return F().useRef(n);
          },
          useState: function(n) {
            return F().useState(n);
          },
          Fragment: l,
          Profiler: c,
          StrictMode: s,
          Suspense: m,
          createElement: N,
          cloneElement: function(n, e, t) {
            if (null == n) throw Error(b(267, n));
            var o = r({}, n.props),
              a = n.key,
              l = n.ref,
              s = n._owner;
            if (null != e) {
              if (
                (void 0 !== e.ref && ((l = e.ref), (s = T.current)),
                void 0 !== e.key && (a = '' + e.key),
                n.type && n.type.defaultProps)
              )
                var c = n.type.defaultProps;
              for (d in e)
                C.call(e, d) &&
                  !S.hasOwnProperty(d) &&
                  (o[d] = void 0 === e[d] && void 0 !== c ? c[d] : e[d]);
            }
            var d = arguments.length - 2;
            if (1 === d) o.children = t;
            else if (1 < d) {
              c = Array(d);
              for (var u = 0; u < d; u++) c[u] = arguments[u + 2];
              o.children = c;
            }
            return {
              $$typeof: i,
              type: n.type,
              key: a,
              ref: l,
              props: o,
              _owner: s,
            };
          },
          createFactory: function(n) {
            var e = N.bind(null, n);
            return (e.type = n), e;
          },
          isValidElement: D,
          version: '16.12.0',
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: E,
            ReactCurrentBatchConfig: { suspense: null },
            ReactCurrentOwner: T,
            IsSomeRendererActing: { current: !1 },
            assign: r,
          },
        },
        U = { default: H },
        W = (U && H) || U;
      n.exports = W.default || W;
    },
    function(n, e, t) {
      'use strict';
      /** @license React v16.12.0
       * react-dom.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = t(0),
        o = t(2),
        i = t(7);
      function a(n) {
        for (
          var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + n,
            t = 1;
          t < arguments.length;
          t++
        )
          e += '&args[]=' + encodeURIComponent(arguments[t]);
        return (
          'Minified React error #' +
          n +
          '; visit ' +
          e +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      if (!r) throw Error(a(227));
      var l = null,
        s = {};
      function c() {
        if (l)
          for (var n in s) {
            var e = s[n],
              t = l.indexOf(n);
            if (!(-1 < t)) throw Error(a(96, n));
            if (!u[t]) {
              if (!e.extractEvents) throw Error(a(97, n));
              for (var r in ((u[t] = e), (t = e.eventTypes))) {
                var o = void 0,
                  i = t[r],
                  c = e,
                  m = r;
                if (f.hasOwnProperty(m)) throw Error(a(99, m));
                f[m] = i;
                var p = i.phasedRegistrationNames;
                if (p) {
                  for (o in p) p.hasOwnProperty(o) && d(p[o], c, m);
                  o = !0;
                } else
                  i.registrationName
                    ? (d(i.registrationName, c, m), (o = !0))
                    : (o = !1);
                if (!o) throw Error(a(98, r, n));
              }
            }
          }
      }
      function d(n, e, t) {
        if (m[n]) throw Error(a(100, n));
        (m[n] = e), (p[n] = e.eventTypes[t].dependencies);
      }
      var u = [],
        f = {},
        m = {},
        p = {};
      function g(n, e, t, r, o, i, a, l, s) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          e.apply(t, c);
        } catch (n) {
          this.onError(n);
        }
      }
      var h = !1,
        b = null,
        v = !1,
        x = null,
        y = {
          onError: function(n) {
            (h = !0), (b = n);
          },
        };
      function w(n, e, t, r, o, i, a, l, s) {
        (h = !1), (b = null), g.apply(y, arguments);
      }
      var k = null,
        _ = null,
        E = null;
      function T(n, e, t) {
        var r = n.type || 'unknown-event';
        (n.currentTarget = E(t)),
          (function(n, e, t, r, o, i, l, s, c) {
            if ((w.apply(this, arguments), h)) {
              if (!h) throw Error(a(198));
              var d = b;
              (h = !1), (b = null), v || ((v = !0), (x = d));
            }
          })(r, e, void 0, n),
          (n.currentTarget = null);
      }
      function C(n, e) {
        if (null == e) throw Error(a(30));
        return null == n
          ? e
          : Array.isArray(n)
          ? Array.isArray(e)
            ? (n.push.apply(n, e), n)
            : (n.push(e), n)
          : Array.isArray(e)
          ? [n].concat(e)
          : [n, e];
      }
      function S(n, e, t) {
        Array.isArray(n) ? n.forEach(e, t) : n && e.call(t, n);
      }
      var N = null;
      function D(n) {
        if (n) {
          var e = n._dispatchListeners,
            t = n._dispatchInstances;
          if (Array.isArray(e))
            for (var r = 0; r < e.length && !n.isPropagationStopped(); r++)
              T(n, e[r], t[r]);
          else e && T(n, e, t);
          (n._dispatchListeners = null),
            (n._dispatchInstances = null),
            n.isPersistent() || n.constructor.release(n);
        }
      }
      function A(n) {
        if ((null !== n && (N = C(N, n)), (n = N), (N = null), n)) {
          if ((S(n, D), N)) throw Error(a(95));
          if (v) throw ((n = x), (v = !1), (x = null), n);
        }
      }
      var I = {
        injectEventPluginOrder: function(n) {
          if (l) throw Error(a(101));
          (l = Array.prototype.slice.call(n)), c();
        },
        injectEventPluginsByName: function(n) {
          var e,
            t = !1;
          for (e in n)
            if (n.hasOwnProperty(e)) {
              var r = n[e];
              if (!s.hasOwnProperty(e) || s[e] !== r) {
                if (s[e]) throw Error(a(102, e));
                (s[e] = r), (t = !0);
              }
            }
          t && c();
        },
      };
      function O(n, e) {
        var t = n.stateNode;
        if (!t) return null;
        var r = k(t);
        if (!r) return null;
        t = r[e];
        n: switch (e) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
            (r = !r.disabled) ||
              (r = !(
                'button' === (n = n.type) ||
                'input' === n ||
                'select' === n ||
                'textarea' === n
              )),
              (n = !r);
            break n;
          default:
            n = !1;
        }
        if (n) return null;
        if (t && 'function' != typeof t) throw Error(a(231, e, typeof t));
        return t;
      }
      var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      P.hasOwnProperty('ReactCurrentDispatcher') ||
        (P.ReactCurrentDispatcher = { current: null }),
        P.hasOwnProperty('ReactCurrentBatchConfig') ||
          (P.ReactCurrentBatchConfig = { suspense: null });
      var j = /^(.*)[\\\/]/,
        L = 'function' == typeof Symbol && Symbol.for,
        z = L ? Symbol.for('react.element') : 60103,
        M = L ? Symbol.for('react.portal') : 60106,
        R = L ? Symbol.for('react.fragment') : 60107,
        F = L ? Symbol.for('react.strict_mode') : 60108,
        H = L ? Symbol.for('react.profiler') : 60114,
        U = L ? Symbol.for('react.provider') : 60109,
        W = L ? Symbol.for('react.context') : 60110,
        q = L ? Symbol.for('react.concurrent_mode') : 60111,
        B = L ? Symbol.for('react.forward_ref') : 60112,
        V = L ? Symbol.for('react.suspense') : 60113,
        $ = L ? Symbol.for('react.suspense_list') : 60120,
        K = L ? Symbol.for('react.memo') : 60115,
        Q = L ? Symbol.for('react.lazy') : 60116;
      L && Symbol.for('react.fundamental'),
        L && Symbol.for('react.responder'),
        L && Symbol.for('react.scope');
      var Y = 'function' == typeof Symbol && Symbol.iterator;
      function X(n) {
        return null === n || 'object' != typeof n
          ? null
          : 'function' == typeof (n = (Y && n[Y]) || n['@@iterator'])
          ? n
          : null;
      }
      function G(n) {
        if (null == n) return null;
        if ('function' == typeof n) return n.displayName || n.name || null;
        if ('string' == typeof n) return n;
        switch (n) {
          case R:
            return 'Fragment';
          case M:
            return 'Portal';
          case H:
            return 'Profiler';
          case F:
            return 'StrictMode';
          case V:
            return 'Suspense';
          case $:
            return 'SuspenseList';
        }
        if ('object' == typeof n)
          switch (n.$$typeof) {
            case W:
              return 'Context.Consumer';
            case U:
              return 'Context.Provider';
            case B:
              var e = n.render;
              return (
                (e = e.displayName || e.name || ''),
                n.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case K:
              return G(n.type);
            case Q:
              if ((n = 1 === n._status ? n._result : null)) return G(n);
          }
        return null;
      }
      function J(n) {
        var e = '';
        do {
          n: switch (n.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var t = '';
              break n;
            default:
              var r = n._debugOwner,
                o = n._debugSource,
                i = G(n.type);
              (t = null),
                r && (t = G(r.type)),
                (r = i),
                (i = ''),
                o
                  ? (i =
                      ' (at ' +
                      o.fileName.replace(j, '') +
                      ':' +
                      o.lineNumber +
                      ')')
                  : t && (i = ' (created by ' + t + ')'),
                (t = '\n    in ' + (r || 'Unknown') + i);
          }
          (e += t), (n = n.return);
        } while (n);
        return e;
      }
      var Z = !(
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        nn = null,
        en = null,
        tn = null;
      function rn(n) {
        if ((n = _(n))) {
          if ('function' != typeof nn) throw Error(a(280));
          var e = k(n.stateNode);
          nn(n.stateNode, n.type, e);
        }
      }
      function on(n) {
        en ? (tn ? tn.push(n) : (tn = [n])) : (en = n);
      }
      function an() {
        if (en) {
          var n = en,
            e = tn;
          if (((tn = en = null), rn(n), e))
            for (n = 0; n < e.length; n++) rn(e[n]);
        }
      }
      function ln(n, e) {
        return n(e);
      }
      function sn(n, e, t, r) {
        return n(e, t, r);
      }
      function cn() {}
      var dn = ln,
        un = !1,
        fn = !1;
      function mn() {
        (null === en && null === tn) || (cn(), an());
      }
      new Map();
      var pn = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        gn = Object.prototype.hasOwnProperty,
        hn = {},
        bn = {};
      function vn(n, e, t, r, o, i) {
        (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = t),
          (this.propertyName = n),
          (this.type = e),
          (this.sanitizeURL = i);
      }
      var xn = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function(n) {
          xn[n] = new vn(n, 0, !1, n, null, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function(n) {
          var e = n[0];
          xn[e] = new vn(e, 1, !1, n[1], null, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
          function(n) {
            xn[n] = new vn(n, 2, !1, n.toLowerCase(), null, !1);
          },
        ),
        [
          'autoReverse',
          'externalResourcesRequired',
          'focusable',
          'preserveAlpha',
        ].forEach(function(n) {
          xn[n] = new vn(n, 2, !1, n, null, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function(n) {
            xn[n] = new vn(n, 3, !1, n.toLowerCase(), null, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function(n) {
          xn[n] = new vn(n, 3, !0, n, null, !1);
        }),
        ['capture', 'download'].forEach(function(n) {
          xn[n] = new vn(n, 4, !1, n, null, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function(n) {
          xn[n] = new vn(n, 6, !1, n, null, !1);
        }),
        ['rowSpan', 'start'].forEach(function(n) {
          xn[n] = new vn(n, 5, !1, n.toLowerCase(), null, !1);
        });
      var yn = /[\-:]([a-z])/g;
      function wn(n) {
        return n[1].toUpperCase();
      }
      function kn(n) {
        switch (typeof n) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return n;
          default:
            return '';
        }
      }
      function _n(n, e, t, r) {
        var o = xn.hasOwnProperty(e) ? xn[e] : null;
        (null !== o
          ? 0 === o.type
          : !r &&
            2 < e.length &&
            ('o' === e[0] || 'O' === e[0]) &&
            ('n' === e[1] || 'N' === e[1])) ||
          ((function(n, e, t, r) {
            if (
              null == e ||
              (function(n, e, t, r) {
                if (null !== t && 0 === t.type) return !1;
                switch (typeof e) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !r &&
                      (null !== t
                        ? !t.acceptsBooleans
                        : 'data-' !== (n = n.toLowerCase().slice(0, 5)) &&
                          'aria-' !== n)
                    );
                  default:
                    return !1;
                }
              })(n, e, t, r)
            )
              return !0;
            if (r) return !1;
            if (null !== t)
              switch (t.type) {
                case 3:
                  return !e;
                case 4:
                  return !1 === e;
                case 5:
                  return isNaN(e);
                case 6:
                  return isNaN(e) || 1 > e;
              }
            return !1;
          })(e, t, o, r) && (t = null),
          r || null === o
            ? (function(n) {
                return (
                  !!gn.call(bn, n) ||
                  (!gn.call(hn, n) &&
                    (pn.test(n) ? (bn[n] = !0) : ((hn[n] = !0), !1)))
                );
              })(e) &&
              (null === t ? n.removeAttribute(e) : n.setAttribute(e, '' + t))
            : o.mustUseProperty
            ? (n[o.propertyName] = null === t ? 3 !== o.type && '' : t)
            : ((e = o.attributeName),
              (r = o.attributeNamespace),
              null === t
                ? n.removeAttribute(e)
                : ((t =
                    3 === (o = o.type) || (4 === o && !0 === t) ? '' : '' + t),
                  r ? n.setAttributeNS(r, e, t) : n.setAttribute(e, t))));
      }
      function En(n) {
        var e = n.type;
        return (
          (n = n.nodeName) &&
          'input' === n.toLowerCase() &&
          ('checkbox' === e || 'radio' === e)
        );
      }
      function Tn(n) {
        n._valueTracker ||
          (n._valueTracker = (function(n) {
            var e = En(n) ? 'checked' : 'value',
              t = Object.getOwnPropertyDescriptor(n.constructor.prototype, e),
              r = '' + n[e];
            if (
              !n.hasOwnProperty(e) &&
              void 0 !== t &&
              'function' == typeof t.get &&
              'function' == typeof t.set
            ) {
              var o = t.get,
                i = t.set;
              return (
                Object.defineProperty(n, e, {
                  configurable: !0,
                  get: function() {
                    return o.call(this);
                  },
                  set: function(n) {
                    (r = '' + n), i.call(this, n);
                  },
                }),
                Object.defineProperty(n, e, { enumerable: t.enumerable }),
                {
                  getValue: function() {
                    return r;
                  },
                  setValue: function(n) {
                    r = '' + n;
                  },
                  stopTracking: function() {
                    (n._valueTracker = null), delete n[e];
                  },
                }
              );
            }
          })(n));
      }
      function Cn(n) {
        if (!n) return !1;
        var e = n._valueTracker;
        if (!e) return !0;
        var t = e.getValue(),
          r = '';
        return (
          n && (r = En(n) ? (n.checked ? 'true' : 'false') : n.value),
          (n = r) !== t && (e.setValue(n), !0)
        );
      }
      function Sn(n, e) {
        var t = e.checked;
        return o({}, e, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != t ? t : n._wrapperState.initialChecked,
        });
      }
      function Nn(n, e) {
        var t = null == e.defaultValue ? '' : e.defaultValue,
          r = null != e.checked ? e.checked : e.defaultChecked;
        (t = kn(null != e.value ? e.value : t)),
          (n._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled:
              'checkbox' === e.type || 'radio' === e.type
                ? null != e.checked
                : null != e.value,
          });
      }
      function Dn(n, e) {
        null != (e = e.checked) && _n(n, 'checked', e, !1);
      }
      function An(n, e) {
        Dn(n, e);
        var t = kn(e.value),
          r = e.type;
        if (null != t)
          'number' === r
            ? ((0 === t && '' === n.value) || n.value != t) &&
              (n.value = '' + t)
            : n.value !== '' + t && (n.value = '' + t);
        else if ('submit' === r || 'reset' === r)
          return void n.removeAttribute('value');
        e.hasOwnProperty('value')
          ? On(n, e.type, t)
          : e.hasOwnProperty('defaultValue') &&
            On(n, e.type, kn(e.defaultValue)),
          null == e.checked &&
            null != e.defaultChecked &&
            (n.defaultChecked = !!e.defaultChecked);
      }
      function In(n, e, t) {
        if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
          var r = e.type;
          if (
            !(
              ('submit' !== r && 'reset' !== r) ||
              (void 0 !== e.value && null !== e.value)
            )
          )
            return;
          (e = '' + n._wrapperState.initialValue),
            t || e === n.value || (n.value = e),
            (n.defaultValue = e);
        }
        '' !== (t = n.name) && (n.name = ''),
          (n.defaultChecked = !n.defaultChecked),
          (n.defaultChecked = !!n._wrapperState.initialChecked),
          '' !== t && (n.name = t);
      }
      function On(n, e, t) {
        ('number' === e && n.ownerDocument.activeElement === n) ||
          (null == t
            ? (n.defaultValue = '' + n._wrapperState.initialValue)
            : n.defaultValue !== '' + t && (n.defaultValue = '' + t));
      }
      function Pn(n, e) {
        return (
          (n = o({ children: void 0 }, e)),
          (e = (function(n) {
            var e = '';
            return (
              r.Children.forEach(n, function(n) {
                null != n && (e += n);
              }),
              e
            );
          })(e.children)) && (n.children = e),
          n
        );
      }
      function jn(n, e, t, r) {
        if (((n = n.options), e)) {
          e = {};
          for (var o = 0; o < t.length; o++) e['$' + t[o]] = !0;
          for (t = 0; t < n.length; t++)
            (o = e.hasOwnProperty('$' + n[t].value)),
              n[t].selected !== o && (n[t].selected = o),
              o && r && (n[t].defaultSelected = !0);
        } else {
          for (t = '' + kn(t), e = null, o = 0; o < n.length; o++) {
            if (n[o].value === t)
              return (
                (n[o].selected = !0), void (r && (n[o].defaultSelected = !0))
              );
            null !== e || n[o].disabled || (e = n[o]);
          }
          null !== e && (e.selected = !0);
        }
      }
      function Ln(n, e) {
        if (null != e.dangerouslySetInnerHTML) throw Error(a(91));
        return o({}, e, {
          value: void 0,
          defaultValue: void 0,
          children: '' + n._wrapperState.initialValue,
        });
      }
      function zn(n, e) {
        var t = e.value;
        if (null == t) {
          if (((t = e.defaultValue), null != (e = e.children))) {
            if (null != t) throw Error(a(92));
            if (Array.isArray(e)) {
              if (!(1 >= e.length)) throw Error(a(93));
              e = e[0];
            }
            t = e;
          }
          null == t && (t = '');
        }
        n._wrapperState = { initialValue: kn(t) };
      }
      function Mn(n, e) {
        var t = kn(e.value),
          r = kn(e.defaultValue);
        null != t &&
          ((t = '' + t) !== n.value && (n.value = t),
          null == e.defaultValue &&
            n.defaultValue !== t &&
            (n.defaultValue = t)),
          null != r && (n.defaultValue = '' + r);
      }
      function Rn(n) {
        var e = n.textContent;
        e === n._wrapperState.initialValue &&
          '' !== e &&
          null !== e &&
          (n.value = e);
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function(n) {
          var e = n.replace(yn, wn);
          xn[e] = new vn(e, 1, !1, n, null, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
          .split(' ')
          .forEach(function(n) {
            var e = n.replace(yn, wn);
            xn[e] = new vn(e, 1, !1, n, 'http://www.w3.org/1999/xlink', !1);
          }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function(n) {
          var e = n.replace(yn, wn);
          xn[e] = new vn(
            e,
            1,
            !1,
            n,
            'http://www.w3.org/XML/1998/namespace',
            !1,
          );
        }),
        ['tabIndex', 'crossOrigin'].forEach(function(n) {
          xn[n] = new vn(n, 1, !1, n.toLowerCase(), null, !1);
        }),
        (xn.xlinkHref = new vn(
          'xlinkHref',
          1,
          !1,
          'xlink:href',
          'http://www.w3.org/1999/xlink',
          !0,
        )),
        ['src', 'href', 'action', 'formAction'].forEach(function(n) {
          xn[n] = new vn(n, 1, !1, n.toLowerCase(), null, !0);
        });
      var Fn = {
        html: 'http://www.w3.org/1999/xhtml',
        mathml: 'http://www.w3.org/1998/Math/MathML',
        svg: 'http://www.w3.org/2000/svg',
      };
      function Hn(n) {
        switch (n) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function Un(n, e) {
        return null == n || 'http://www.w3.org/1999/xhtml' === n
          ? Hn(e)
          : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === e
          ? 'http://www.w3.org/1999/xhtml'
          : n;
      }
      var Wn,
        qn = (function(n) {
          return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function(e, t, r, o) {
                MSApp.execUnsafeLocalFunction(function() {
                  return n(e, t);
                });
              }
            : n;
        })(function(n, e) {
          if (n.namespaceURI !== Fn.svg || 'innerHTML' in n) n.innerHTML = e;
          else {
            for (
              (Wn = Wn || document.createElement('div')).innerHTML =
                '<svg>' + e.valueOf().toString() + '</svg>',
                e = Wn.firstChild;
              n.firstChild;

            )
              n.removeChild(n.firstChild);
            for (; e.firstChild; ) n.appendChild(e.firstChild);
          }
        });
      function Bn(n, e) {
        if (e) {
          var t = n.firstChild;
          if (t && t === n.lastChild && 3 === t.nodeType)
            return void (t.nodeValue = e);
        }
        n.textContent = e;
      }
      function Vn(n, e) {
        var t = {};
        return (
          (t[n.toLowerCase()] = e.toLowerCase()),
          (t['Webkit' + n] = 'webkit' + e),
          (t['Moz' + n] = 'moz' + e),
          t
        );
      }
      var $n = {
          animationend: Vn('Animation', 'AnimationEnd'),
          animationiteration: Vn('Animation', 'AnimationIteration'),
          animationstart: Vn('Animation', 'AnimationStart'),
          transitionend: Vn('Transition', 'TransitionEnd'),
        },
        Kn = {},
        Qn = {};
      function Yn(n) {
        if (Kn[n]) return Kn[n];
        if (!$n[n]) return n;
        var e,
          t = $n[n];
        for (e in t) if (t.hasOwnProperty(e) && e in Qn) return (Kn[n] = t[e]);
        return n;
      }
      Z &&
        ((Qn = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete $n.animationend.animation,
          delete $n.animationiteration.animation,
          delete $n.animationstart.animation),
        'TransitionEvent' in window || delete $n.transitionend.transition);
      var Xn = Yn('animationend'),
        Gn = Yn('animationiteration'),
        Jn = Yn('animationstart'),
        Zn = Yn('transitionend'),
        ne = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' ',
        );
      function ee(n) {
        var e = n,
          t = n;
        if (n.alternate) for (; e.return; ) e = e.return;
        else {
          n = e;
          do {
            0 != (1026 & (e = n).effectTag) && (t = e.return), (n = e.return);
          } while (n);
        }
        return 3 === e.tag ? t : null;
      }
      function te(n) {
        if (13 === n.tag) {
          var e = n.memoizedState;
          if (
            (null === e && null !== (n = n.alternate) && (e = n.memoizedState),
            null !== e)
          )
            return e.dehydrated;
        }
        return null;
      }
      function re(n) {
        if (ee(n) !== n) throw Error(a(188));
      }
      function oe(n) {
        if (
          !(n = (function(n) {
            var e = n.alternate;
            if (!e) {
              if (null === (e = ee(n))) throw Error(a(188));
              return e !== n ? null : n;
            }
            for (var t = n, r = e; ; ) {
              var o = t.return;
              if (null === o) break;
              var i = o.alternate;
              if (null === i) {
                if (null !== (r = o.return)) {
                  t = r;
                  continue;
                }
                break;
              }
              if (o.child === i.child) {
                for (i = o.child; i; ) {
                  if (i === t) return re(o), n;
                  if (i === r) return re(o), e;
                  i = i.sibling;
                }
                throw Error(a(188));
              }
              if (t.return !== r.return) (t = o), (r = i);
              else {
                for (var l = !1, s = o.child; s; ) {
                  if (s === t) {
                    (l = !0), (t = o), (r = i);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = o), (t = i);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = i.child; s; ) {
                    if (s === t) {
                      (l = !0), (t = i), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (t = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(a(189));
                }
              }
              if (t.alternate !== r) throw Error(a(190));
            }
            if (3 !== t.tag) throw Error(a(188));
            return t.stateNode.current === t ? n : e;
          })(n))
        )
          return null;
        for (var e = n; ; ) {
          if (5 === e.tag || 6 === e.tag) return e;
          if (e.child) (e.child.return = e), (e = e.child);
          else {
            if (e === n) break;
            for (; !e.sibling; ) {
              if (!e.return || e.return === n) return null;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        }
        return null;
      }
      var ie,
        ae,
        le,
        se = !1,
        ce = [],
        de = null,
        ue = null,
        fe = null,
        me = new Map(),
        pe = new Map(),
        ge = [],
        he = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit'.split(
          ' ',
        ),
        be = 'focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture'.split(
          ' ',
        );
      function ve(n, e, t, r) {
        return {
          blockedOn: n,
          topLevelType: e,
          eventSystemFlags: 32 | t,
          nativeEvent: r,
        };
      }
      function xe(n, e) {
        switch (n) {
          case 'focus':
          case 'blur':
            de = null;
            break;
          case 'dragenter':
          case 'dragleave':
            ue = null;
            break;
          case 'mouseover':
          case 'mouseout':
            fe = null;
            break;
          case 'pointerover':
          case 'pointerout':
            me.delete(e.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            pe.delete(e.pointerId);
        }
      }
      function ye(n, e, t, r, o) {
        return null === n || n.nativeEvent !== o
          ? ((n = ve(e, t, r, o)),
            null !== e && null !== (e = mr(e)) && ae(e),
            n)
          : ((n.eventSystemFlags |= r), n);
      }
      function we(n) {
        var e = fr(n.target);
        if (null !== e) {
          var t = ee(e);
          if (null !== t)
            if (13 === (e = t.tag)) {
              if (null !== (e = te(t)))
                return (
                  (n.blockedOn = e),
                  void i.unstable_runWithPriority(n.priority, function() {
                    le(t);
                  })
                );
            } else if (3 === e && t.stateNode.hydrate)
              return void (n.blockedOn =
                3 === t.tag ? t.stateNode.containerInfo : null);
        }
        n.blockedOn = null;
      }
      function ke(n) {
        if (null !== n.blockedOn) return !1;
        var e = It(n.topLevelType, n.eventSystemFlags, n.nativeEvent);
        if (null !== e) {
          var t = mr(e);
          return null !== t && ae(t), (n.blockedOn = e), !1;
        }
        return !0;
      }
      function _e(n, e, t) {
        ke(n) && t.delete(e);
      }
      function Ee() {
        for (se = !1; 0 < ce.length; ) {
          var n = ce[0];
          if (null !== n.blockedOn) {
            null !== (n = mr(n.blockedOn)) && ie(n);
            break;
          }
          var e = It(n.topLevelType, n.eventSystemFlags, n.nativeEvent);
          null !== e ? (n.blockedOn = e) : ce.shift();
        }
        null !== de && ke(de) && (de = null),
          null !== ue && ke(ue) && (ue = null),
          null !== fe && ke(fe) && (fe = null),
          me.forEach(_e),
          pe.forEach(_e);
      }
      function Te(n, e) {
        n.blockedOn === e &&
          ((n.blockedOn = null),
          se ||
            ((se = !0),
            i.unstable_scheduleCallback(i.unstable_NormalPriority, Ee)));
      }
      function Ce(n) {
        function e(e) {
          return Te(e, n);
        }
        if (0 < ce.length) {
          Te(ce[0], n);
          for (var t = 1; t < ce.length; t++) {
            var r = ce[t];
            r.blockedOn === n && (r.blockedOn = null);
          }
        }
        for (
          null !== de && Te(de, n),
            null !== ue && Te(ue, n),
            null !== fe && Te(fe, n),
            me.forEach(e),
            pe.forEach(e),
            t = 0;
          t < ge.length;
          t++
        )
          (r = ge[t]).blockedOn === n && (r.blockedOn = null);
        for (; 0 < ge.length && null === (t = ge[0]).blockedOn; )
          we(t), null === t.blockedOn && ge.shift();
      }
      function Se(n) {
        return (
          (n = n.target || n.srcElement || window).correspondingUseElement &&
            (n = n.correspondingUseElement),
          3 === n.nodeType ? n.parentNode : n
        );
      }
      function Ne(n) {
        do {
          n = n.return;
        } while (n && 5 !== n.tag);
        return n || null;
      }
      function De(n, e, t) {
        (e = O(n, t.dispatchConfig.phasedRegistrationNames[e])) &&
          ((t._dispatchListeners = C(t._dispatchListeners, e)),
          (t._dispatchInstances = C(t._dispatchInstances, n)));
      }
      function Ae(n) {
        if (n && n.dispatchConfig.phasedRegistrationNames) {
          for (var e = n._targetInst, t = []; e; ) t.push(e), (e = Ne(e));
          for (e = t.length; 0 < e--; ) De(t[e], 'captured', n);
          for (e = 0; e < t.length; e++) De(t[e], 'bubbled', n);
        }
      }
      function Ie(n, e, t) {
        n &&
          t &&
          t.dispatchConfig.registrationName &&
          (e = O(n, t.dispatchConfig.registrationName)) &&
          ((t._dispatchListeners = C(t._dispatchListeners, e)),
          (t._dispatchInstances = C(t._dispatchInstances, n)));
      }
      function Oe(n) {
        n && n.dispatchConfig.registrationName && Ie(n._targetInst, null, n);
      }
      function Pe(n) {
        S(n, Ae);
      }
      function je() {
        return !0;
      }
      function Le() {
        return !1;
      }
      function ze(n, e, t, r) {
        for (var o in ((this.dispatchConfig = n),
        (this._targetInst = e),
        (this.nativeEvent = t),
        (n = this.constructor.Interface)))
          n.hasOwnProperty(o) &&
            ((e = n[o])
              ? (this[o] = e(t))
              : 'target' === o
              ? (this.target = r)
              : (this[o] = t[o]));
        return (
          (this.isDefaultPrevented = (null != t.defaultPrevented
          ? t.defaultPrevented
          : !1 === t.returnValue)
            ? je
            : Le),
          (this.isPropagationStopped = Le),
          this
        );
      }
      function Me(n, e, t, r) {
        if (this.eventPool.length) {
          var o = this.eventPool.pop();
          return this.call(o, n, e, t, r), o;
        }
        return new this(n, e, t, r);
      }
      function Re(n) {
        if (!(n instanceof this)) throw Error(a(279));
        n.destructor(), 10 > this.eventPool.length && this.eventPool.push(n);
      }
      function Fe(n) {
        (n.eventPool = []), (n.getPooled = Me), (n.release = Re);
      }
      o(ze.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : 'unknown' != typeof n.returnValue && (n.returnValue = !1),
            (this.isDefaultPrevented = je));
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : 'unknown' != typeof n.cancelBubble && (n.cancelBubble = !0),
            (this.isPropagationStopped = je));
        },
        persist: function() {
          this.isPersistent = je;
        },
        isPersistent: Le,
        destructor: function() {
          var n,
            e = this.constructor.Interface;
          for (n in e) this[n] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = Le),
            (this._dispatchInstances = this._dispatchListeners = null);
        },
      }),
        (ze.Interface = {
          type: null,
          target: null,
          currentTarget: function() {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function(n) {
            return n.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        }),
        (ze.extend = function(n) {
          function e() {}
          function t() {
            return r.apply(this, arguments);
          }
          var r = this;
          e.prototype = r.prototype;
          var i = new e();
          return (
            o(i, t.prototype),
            (t.prototype = i),
            (t.prototype.constructor = t),
            (t.Interface = o({}, r.Interface, n)),
            (t.extend = r.extend),
            Fe(t),
            t
          );
        }),
        Fe(ze);
      var He = ze.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        Ue = ze.extend({
          clipboardData: function(n) {
            return 'clipboardData' in n
              ? n.clipboardData
              : window.clipboardData;
          },
        }),
        We = ze.extend({ view: null, detail: null }),
        qe = We.extend({ relatedTarget: null });
      function Be(n) {
        var e = n.keyCode;
        return (
          'charCode' in n
            ? 0 === (n = n.charCode) && 13 === e && (n = 13)
            : (n = e),
          10 === n && (n = 13),
          32 <= n || 13 === n ? n : 0
        );
      }
      var Ve = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        $e = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        Ke = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey',
        };
      function Qe(n) {
        var e = this.nativeEvent;
        return e.getModifierState
          ? e.getModifierState(n)
          : !!(n = Ke[n]) && !!e[n];
      }
      function Ye() {
        return Qe;
      }
      for (
        var Xe = We.extend({
            key: function(n) {
              if (n.key) {
                var e = Ve[n.key] || n.key;
                if ('Unidentified' !== e) return e;
              }
              return 'keypress' === n.type
                ? 13 === (n = Be(n))
                  ? 'Enter'
                  : String.fromCharCode(n)
                : 'keydown' === n.type || 'keyup' === n.type
                ? $e[n.keyCode] || 'Unidentified'
                : '';
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Ye,
            charCode: function(n) {
              return 'keypress' === n.type ? Be(n) : 0;
            },
            keyCode: function(n) {
              return 'keydown' === n.type || 'keyup' === n.type ? n.keyCode : 0;
            },
            which: function(n) {
              return 'keypress' === n.type
                ? Be(n)
                : 'keydown' === n.type || 'keyup' === n.type
                ? n.keyCode
                : 0;
            },
          }),
          Ge = 0,
          Je = 0,
          Ze = !1,
          nt = !1,
          et = We.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Ye,
            button: null,
            buttons: null,
            relatedTarget: function(n) {
              return (
                n.relatedTarget ||
                (n.fromElement === n.srcElement ? n.toElement : n.fromElement)
              );
            },
            movementX: function(n) {
              if (('movementX' in n)) return n.movementX;
              var e = Ge;
              return (
                (Ge = n.screenX),
                Ze
                  ? 'mousemove' === n.type
                    ? n.screenX - e
                    : 0
                  : ((Ze = !0), 0)
              );
            },
            movementY: function(n) {
              if (('movementY' in n)) return n.movementY;
              var e = Je;
              return (
                (Je = n.screenY),
                nt
                  ? 'mousemove' === n.type
                    ? n.screenY - e
                    : 0
                  : ((nt = !0), 0)
              );
            },
          }),
          tt = et.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null,
          }),
          rt = et.extend({ dataTransfer: null }),
          ot = We.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Ye,
          }),
          it = ze.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          at = et.extend({
            deltaX: function(n) {
              return ('deltaX' in n)
                ? n.deltaX
                : ('wheelDeltaX' in n)
                ? -n.wheelDeltaX
                : 0;
            },
            deltaY: function(n) {
              return ('deltaY' in n)
                ? n.deltaY
                : ('wheelDeltaY' in n)
                ? -n.wheelDeltaY
                : ('wheelDelta' in n)
                ? -n.wheelDelta
                : 0;
            },
            deltaZ: null,
            deltaMode: null,
          }),
          lt = [
            ['blur', 'blur', 0],
            ['cancel', 'cancel', 0],
            ['click', 'click', 0],
            ['close', 'close', 0],
            ['contextmenu', 'contextMenu', 0],
            ['copy', 'copy', 0],
            ['cut', 'cut', 0],
            ['auxclick', 'auxClick', 0],
            ['dblclick', 'doubleClick', 0],
            ['dragend', 'dragEnd', 0],
            ['dragstart', 'dragStart', 0],
            ['drop', 'drop', 0],
            ['focus', 'focus', 0],
            ['input', 'input', 0],
            ['invalid', 'invalid', 0],
            ['keydown', 'keyDown', 0],
            ['keypress', 'keyPress', 0],
            ['keyup', 'keyUp', 0],
            ['mousedown', 'mouseDown', 0],
            ['mouseup', 'mouseUp', 0],
            ['paste', 'paste', 0],
            ['pause', 'pause', 0],
            ['play', 'play', 0],
            ['pointercancel', 'pointerCancel', 0],
            ['pointerdown', 'pointerDown', 0],
            ['pointerup', 'pointerUp', 0],
            ['ratechange', 'rateChange', 0],
            ['reset', 'reset', 0],
            ['seeked', 'seeked', 0],
            ['submit', 'submit', 0],
            ['touchcancel', 'touchCancel', 0],
            ['touchend', 'touchEnd', 0],
            ['touchstart', 'touchStart', 0],
            ['volumechange', 'volumeChange', 0],
            ['drag', 'drag', 1],
            ['dragenter', 'dragEnter', 1],
            ['dragexit', 'dragExit', 1],
            ['dragleave', 'dragLeave', 1],
            ['dragover', 'dragOver', 1],
            ['mousemove', 'mouseMove', 1],
            ['mouseout', 'mouseOut', 1],
            ['mouseover', 'mouseOver', 1],
            ['pointermove', 'pointerMove', 1],
            ['pointerout', 'pointerOut', 1],
            ['pointerover', 'pointerOver', 1],
            ['scroll', 'scroll', 1],
            ['toggle', 'toggle', 1],
            ['touchmove', 'touchMove', 1],
            ['wheel', 'wheel', 1],
            ['abort', 'abort', 2],
            [Xn, 'animationEnd', 2],
            [Gn, 'animationIteration', 2],
            [Jn, 'animationStart', 2],
            ['canplay', 'canPlay', 2],
            ['canplaythrough', 'canPlayThrough', 2],
            ['durationchange', 'durationChange', 2],
            ['emptied', 'emptied', 2],
            ['encrypted', 'encrypted', 2],
            ['ended', 'ended', 2],
            ['error', 'error', 2],
            ['gotpointercapture', 'gotPointerCapture', 2],
            ['load', 'load', 2],
            ['loadeddata', 'loadedData', 2],
            ['loadedmetadata', 'loadedMetadata', 2],
            ['loadstart', 'loadStart', 2],
            ['lostpointercapture', 'lostPointerCapture', 2],
            ['playing', 'playing', 2],
            ['progress', 'progress', 2],
            ['seeking', 'seeking', 2],
            ['stalled', 'stalled', 2],
            ['suspend', 'suspend', 2],
            ['timeupdate', 'timeUpdate', 2],
            [Zn, 'transitionEnd', 2],
            ['waiting', 'waiting', 2],
          ],
          st = {},
          ct = {},
          dt = 0;
        dt < lt.length;
        dt++
      ) {
        var ut = lt[dt],
          ft = ut[0],
          mt = ut[1],
          pt = ut[2],
          gt = 'on' + (mt[0].toUpperCase() + mt.slice(1)),
          ht = {
            phasedRegistrationNames: { bubbled: gt, captured: gt + 'Capture' },
            dependencies: [ft],
            eventPriority: pt,
          };
        (st[mt] = ht), (ct[ft] = ht);
      }
      var bt = {
          eventTypes: st,
          getEventPriority: function(n) {
            return void 0 !== (n = ct[n]) ? n.eventPriority : 2;
          },
          extractEvents: function(n, e, t, r) {
            var o = ct[n];
            if (!o) return null;
            switch (n) {
              case 'keypress':
                if (0 === Be(t)) return null;
              case 'keydown':
              case 'keyup':
                n = Xe;
                break;
              case 'blur':
              case 'focus':
                n = qe;
                break;
              case 'click':
                if (2 === t.button) return null;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                n = et;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                n = rt;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                n = ot;
                break;
              case Xn:
              case Gn:
              case Jn:
                n = He;
                break;
              case Zn:
                n = it;
                break;
              case 'scroll':
                n = We;
                break;
              case 'wheel':
                n = at;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                n = Ue;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                n = tt;
                break;
              default:
                n = ze;
            }
            return Pe((e = n.getPooled(o, e, t, r))), e;
          },
        },
        vt = i.unstable_UserBlockingPriority,
        xt = i.unstable_runWithPriority,
        yt = bt.getEventPriority,
        wt = 10,
        kt = [];
      function _t(n) {
        var e = n.targetInst,
          t = e;
        do {
          if (!t) {
            n.ancestors.push(t);
            break;
          }
          var r = t;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== (e = t.tag) && 6 !== e) || n.ancestors.push(t), (t = fr(r));
        } while (t);
        for (t = 0; t < n.ancestors.length; t++) {
          e = n.ancestors[t];
          var o = Se(n.nativeEvent);
          r = n.topLevelType;
          for (
            var i = n.nativeEvent, a = n.eventSystemFlags, l = null, s = 0;
            s < u.length;
            s++
          ) {
            var c = u[s];
            c && (c = c.extractEvents(r, e, i, o, a)) && (l = C(l, c));
          }
          A(l);
        }
      }
      var Et = !0;
      function Tt(n, e) {
        Ct(e, n, !1);
      }
      function Ct(n, e, t) {
        switch (yt(e)) {
          case 0:
            var r = St.bind(null, e, 1);
            break;
          case 1:
            r = Nt.bind(null, e, 1);
            break;
          default:
            r = At.bind(null, e, 1);
        }
        t ? n.addEventListener(e, r, !0) : n.addEventListener(e, r, !1);
      }
      function St(n, e, t) {
        un || cn();
        var r = At,
          o = un;
        un = !0;
        try {
          sn(r, n, e, t);
        } finally {
          (un = o) || mn();
        }
      }
      function Nt(n, e, t) {
        xt(vt, At.bind(null, n, e, t));
      }
      function Dt(n, e, t, r) {
        if (kt.length) {
          var o = kt.pop();
          (o.topLevelType = n),
            (o.eventSystemFlags = e),
            (o.nativeEvent = t),
            (o.targetInst = r),
            (n = o);
        } else
          n = {
            topLevelType: n,
            eventSystemFlags: e,
            nativeEvent: t,
            targetInst: r,
            ancestors: [],
          };
        try {
          if (((e = _t), (t = n), fn)) e(t, void 0);
          else {
            fn = !0;
            try {
              dn(e, t, void 0);
            } finally {
              (fn = !1), mn();
            }
          }
        } finally {
          (n.topLevelType = null),
            (n.nativeEvent = null),
            (n.targetInst = null),
            (n.ancestors.length = 0),
            kt.length < wt && kt.push(n);
        }
      }
      function At(n, e, t) {
        if (Et)
          if (0 < ce.length && -1 < he.indexOf(n))
            (n = ve(null, n, e, t)), ce.push(n);
          else {
            var r = It(n, e, t);
            null === r
              ? xe(n, t)
              : -1 < he.indexOf(n)
              ? ((n = ve(r, n, e, t)), ce.push(n))
              : (function(n, e, t, r) {
                  switch (e) {
                    case 'focus':
                      return (de = ye(de, n, e, t, r)), !0;
                    case 'dragenter':
                      return (ue = ye(ue, n, e, t, r)), !0;
                    case 'mouseover':
                      return (fe = ye(fe, n, e, t, r)), !0;
                    case 'pointerover':
                      var o = r.pointerId;
                      return me.set(o, ye(me.get(o) || null, n, e, t, r)), !0;
                    case 'gotpointercapture':
                      return (
                        (o = r.pointerId),
                        pe.set(o, ye(pe.get(o) || null, n, e, t, r)),
                        !0
                      );
                  }
                  return !1;
                })(r, n, e, t) || (xe(n, t), Dt(n, e, t, null));
          }
      }
      function It(n, e, t) {
        var r = Se(t);
        if (null !== (r = fr(r))) {
          var o = ee(r);
          if (null === o) r = null;
          else {
            var i = o.tag;
            if (13 === i) {
              if (null !== (r = te(o))) return r;
              r = null;
            } else if (3 === i) {
              if (o.stateNode.hydrate)
                return 3 === o.tag ? o.stateNode.containerInfo : null;
              r = null;
            } else o !== r && (r = null);
          }
        }
        return Dt(n, e, t, r), null;
      }
      function Ot(n) {
        if (!Z) return !1;
        var e = (n = 'on' + n) in document;
        return (
          e ||
            ((e = document.createElement('div')).setAttribute(n, 'return;'),
            (e = 'function' == typeof e[n])),
          e
        );
      }
      var Pt = new ('function' == typeof WeakMap ? WeakMap : Map)();
      function jt(n) {
        var e = Pt.get(n);
        return void 0 === e && ((e = new Set()), Pt.set(n, e)), e;
      }
      function Lt(n, e, t) {
        if (!t.has(n)) {
          switch (n) {
            case 'scroll':
              Ct(e, 'scroll', !0);
              break;
            case 'focus':
            case 'blur':
              Ct(e, 'focus', !0),
                Ct(e, 'blur', !0),
                t.add('blur'),
                t.add('focus');
              break;
            case 'cancel':
            case 'close':
              Ot(n) && Ct(e, n, !0);
              break;
            case 'invalid':
            case 'submit':
            case 'reset':
              break;
            default:
              -1 === ne.indexOf(n) && Tt(n, e);
          }
          t.add(n);
        }
      }
      var zt = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        Mt = ['Webkit', 'ms', 'Moz', 'O'];
      function Rt(n, e, t) {
        return null == e || 'boolean' == typeof e || '' === e
          ? ''
          : t ||
            'number' != typeof e ||
            0 === e ||
            (zt.hasOwnProperty(n) && zt[n])
          ? ('' + e).trim()
          : e + 'px';
      }
      function Ft(n, e) {
        for (var t in ((n = n.style), e))
          if (e.hasOwnProperty(t)) {
            var r = 0 === t.indexOf('--'),
              o = Rt(t, e[t], r);
            'float' === t && (t = 'cssFloat'),
              r ? n.setProperty(t, o) : (n[t] = o);
          }
      }
      Object.keys(zt).forEach(function(n) {
        Mt.forEach(function(e) {
          (e = e + n.charAt(0).toUpperCase() + n.substring(1)), (zt[e] = zt[n]);
        });
      });
      var Ht = o(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
      );
      function Ut(n, e) {
        if (e) {
          if (
            Ht[n] &&
            (null != e.children || null != e.dangerouslySetInnerHTML)
          )
            throw Error(a(137, n, ''));
          if (null != e.dangerouslySetInnerHTML) {
            if (null != e.children) throw Error(a(60));
            if (
              !(
                'object' == typeof e.dangerouslySetInnerHTML &&
                '__html' in e.dangerouslySetInnerHTML
              )
            )
              throw Error(a(61));
          }
          if (null != e.style && 'object' != typeof e.style)
            throw Error(a(62, ''));
        }
      }
      function Wt(n, e) {
        if (-1 === n.indexOf('-')) return 'string' == typeof e.is;
        switch (n) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      function qt(n, e) {
        var t = jt(
          (n = 9 === n.nodeType || 11 === n.nodeType ? n : n.ownerDocument),
        );
        e = p[e];
        for (var r = 0; r < e.length; r++) Lt(e[r], n, t);
      }
      function Bt() {}
      function Vt(n) {
        if (
          void 0 ===
          (n = n || ('undefined' != typeof document ? document : void 0))
        )
          return null;
        try {
          return n.activeElement || n.body;
        } catch (e) {
          return n.body;
        }
      }
      function $t(n) {
        for (; n && n.firstChild; ) n = n.firstChild;
        return n;
      }
      function Kt(n, e) {
        var t,
          r = $t(n);
        for (n = 0; r; ) {
          if (3 === r.nodeType) {
            if (((t = n + r.textContent.length), n <= e && t >= e))
              return { node: r, offset: e - n };
            n = t;
          }
          n: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break n;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = $t(r);
        }
      }
      function Qt() {
        for (var n = window, e = Vt(); e instanceof n.HTMLIFrameElement; ) {
          try {
            var t = 'string' == typeof e.contentWindow.location.href;
          } catch (n) {
            t = !1;
          }
          if (!t) break;
          e = Vt((n = e.contentWindow).document);
        }
        return e;
      }
      function Yt(n) {
        var e = n && n.nodeName && n.nodeName.toLowerCase();
        return (
          e &&
          (('input' === e &&
            ('text' === n.type ||
              'search' === n.type ||
              'tel' === n.type ||
              'url' === n.type ||
              'password' === n.type)) ||
            'textarea' === e ||
            'true' === n.contentEditable)
        );
      }
      var Xt = '$',
        Gt = '/$',
        Jt = '$?',
        Zt = '$!',
        nr = null,
        er = null;
      function tr(n, e) {
        switch (n) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!e.autoFocus;
        }
        return !1;
      }
      function rr(n, e) {
        return (
          'textarea' === n ||
          'option' === n ||
          'noscript' === n ||
          'string' == typeof e.children ||
          'number' == typeof e.children ||
          ('object' == typeof e.dangerouslySetInnerHTML &&
            null !== e.dangerouslySetInnerHTML &&
            null != e.dangerouslySetInnerHTML.__html)
        );
      }
      var or = 'function' == typeof setTimeout ? setTimeout : void 0,
        ir = 'function' == typeof clearTimeout ? clearTimeout : void 0;
      function ar(n) {
        for (; null != n; n = n.nextSibling) {
          var e = n.nodeType;
          if (1 === e || 3 === e) break;
        }
        return n;
      }
      function lr(n) {
        n = n.previousSibling;
        for (var e = 0; n; ) {
          if (8 === n.nodeType) {
            var t = n.data;
            if (t === Xt || t === Zt || t === Jt) {
              if (0 === e) return n;
              e--;
            } else t === Gt && e++;
          }
          n = n.previousSibling;
        }
        return null;
      }
      var sr = Math.random()
          .toString(36)
          .slice(2),
        cr = '__reactInternalInstance$' + sr,
        dr = '__reactEventHandlers$' + sr,
        ur = '__reactContainere$' + sr;
      function fr(n) {
        var e = n[cr];
        if (e) return e;
        for (var t = n.parentNode; t; ) {
          if ((e = t[ur] || t[cr])) {
            if (
              ((t = e.alternate),
              null !== e.child || (null !== t && null !== t.child))
            )
              for (n = lr(n); null !== n; ) {
                if ((t = n[cr])) return t;
                n = lr(n);
              }
            return e;
          }
          t = (n = t).parentNode;
        }
        return null;
      }
      function mr(n) {
        return !(n = n[cr] || n[ur]) ||
          (5 !== n.tag && 6 !== n.tag && 13 !== n.tag && 3 !== n.tag)
          ? null
          : n;
      }
      function pr(n) {
        if (5 === n.tag || 6 === n.tag) return n.stateNode;
        throw Error(a(33));
      }
      function gr(n) {
        return n[dr] || null;
      }
      var hr = null,
        br = null,
        vr = null;
      function xr() {
        if (vr) return vr;
        var n,
          e,
          t = br,
          r = t.length,
          o = 'value' in hr ? hr.value : hr.textContent,
          i = o.length;
        for (n = 0; n < r && t[n] === o[n]; n++);
        var a = r - n;
        for (e = 1; e <= a && t[r - e] === o[i - e]; e++);
        return (vr = o.slice(n, 1 < e ? 1 - e : void 0));
      }
      var yr = ze.extend({ data: null }),
        wr = ze.extend({ data: null }),
        kr = [9, 13, 27, 32],
        _r = Z && 'CompositionEvent' in window,
        Er = null;
      Z && 'documentMode' in document && (Er = document.documentMode);
      var Tr = Z && 'TextEvent' in window && !Er,
        Cr = Z && (!_r || (Er && 8 < Er && 11 >= Er)),
        Sr = String.fromCharCode(32),
        Nr = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: 'onBeforeInput',
              captured: 'onBeforeInputCapture',
            },
            dependencies: ['compositionend', 'keypress', 'textInput', 'paste'],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionEnd',
              captured: 'onCompositionEndCapture',
            },
            dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(
              ' ',
            ),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionStart',
              captured: 'onCompositionStartCapture',
            },
            dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(
              ' ',
            ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionUpdate',
              captured: 'onCompositionUpdateCapture',
            },
            dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(
              ' ',
            ),
          },
        },
        Dr = !1;
      function Ar(n, e) {
        switch (n) {
          case 'keyup':
            return -1 !== kr.indexOf(e.keyCode);
          case 'keydown':
            return 229 !== e.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'blur':
            return !0;
          default:
            return !1;
        }
      }
      function Ir(n) {
        return 'object' == typeof (n = n.detail) && 'data' in n ? n.data : null;
      }
      var Or = !1;
      var Pr = {
          eventTypes: Nr,
          extractEvents: function(n, e, t, r) {
            var o;
            if (_r)
              n: {
                switch (n) {
                  case 'compositionstart':
                    var i = Nr.compositionStart;
                    break n;
                  case 'compositionend':
                    i = Nr.compositionEnd;
                    break n;
                  case 'compositionupdate':
                    i = Nr.compositionUpdate;
                    break n;
                }
                i = void 0;
              }
            else
              Or
                ? Ar(n, t) && (i = Nr.compositionEnd)
                : 'keydown' === n &&
                  229 === t.keyCode &&
                  (i = Nr.compositionStart);
            return (
              i
                ? (Cr &&
                    'ko' !== t.locale &&
                    (Or || i !== Nr.compositionStart
                      ? i === Nr.compositionEnd && Or && (o = xr())
                      : ((br = 'value' in (hr = r) ? hr.value : hr.textContent),
                        (Or = !0))),
                  (i = yr.getPooled(i, e, t, r)),
                  o ? (i.data = o) : null !== (o = Ir(t)) && (i.data = o),
                  Pe(i),
                  (o = i))
                : (o = null),
              (n = Tr
                ? (function(n, e) {
                    switch (n) {
                      case 'compositionend':
                        return Ir(e);
                      case 'keypress':
                        return 32 !== e.which ? null : ((Dr = !0), Sr);
                      case 'textInput':
                        return (n = e.data) === Sr && Dr ? null : n;
                      default:
                        return null;
                    }
                  })(n, t)
                : (function(n, e) {
                    if (Or)
                      return 'compositionend' === n || (!_r && Ar(n, e))
                        ? ((n = xr()), (vr = br = hr = null), (Or = !1), n)
                        : null;
                    switch (n) {
                      case 'paste':
                        return null;
                      case 'keypress':
                        if (
                          !(e.ctrlKey || e.altKey || e.metaKey) ||
                          (e.ctrlKey && e.altKey)
                        ) {
                          if (e.char && 1 < e.char.length) return e.char;
                          if (e.which) return String.fromCharCode(e.which);
                        }
                        return null;
                      case 'compositionend':
                        return Cr && 'ko' !== e.locale ? null : e.data;
                      default:
                        return null;
                    }
                  })(n, t))
                ? (((e = wr.getPooled(Nr.beforeInput, e, t, r)).data = n),
                  Pe(e))
                : (e = null),
              null === o ? e : null === e ? o : [o, e]
            );
          },
        },
        jr = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      function Lr(n) {
        var e = n && n.nodeName && n.nodeName.toLowerCase();
        return 'input' === e ? !!jr[n.type] : 'textarea' === e;
      }
      var zr = {
        change: {
          phasedRegistrationNames: {
            bubbled: 'onChange',
            captured: 'onChangeCapture',
          },
          dependencies: 'blur change click focus input keydown keyup selectionchange'.split(
            ' ',
          ),
        },
      };
      function Mr(n, e, t) {
        return (
          ((n = ze.getPooled(zr.change, n, e, t)).type = 'change'),
          on(t),
          Pe(n),
          n
        );
      }
      var Rr = null,
        Fr = null;
      function Hr(n) {
        A(n);
      }
      function Ur(n) {
        if (Cn(pr(n))) return n;
      }
      function Wr(n, e) {
        if ('change' === n) return e;
      }
      var qr = !1;
      function Br() {
        Rr && (Rr.detachEvent('onpropertychange', Vr), (Fr = Rr = null));
      }
      function Vr(n) {
        if ('value' === n.propertyName && Ur(Fr))
          if (((n = Mr(Fr, n, Se(n))), un)) A(n);
          else {
            un = !0;
            try {
              ln(Hr, n);
            } finally {
              (un = !1), mn();
            }
          }
      }
      function $r(n, e, t) {
        'focus' === n
          ? (Br(), (Fr = t), (Rr = e).attachEvent('onpropertychange', Vr))
          : 'blur' === n && Br();
      }
      function Kr(n) {
        if ('selectionchange' === n || 'keyup' === n || 'keydown' === n)
          return Ur(Fr);
      }
      function Qr(n, e) {
        if ('click' === n) return Ur(e);
      }
      function Yr(n, e) {
        if ('input' === n || 'change' === n) return Ur(e);
      }
      Z &&
        (qr =
          Ot('input') && (!document.documentMode || 9 < document.documentMode));
      var Xr,
        Gr = {
          eventTypes: zr,
          _isInputEventSupported: qr,
          extractEvents: function(n, e, t, r) {
            var o = e ? pr(e) : window,
              i = o.nodeName && o.nodeName.toLowerCase();
            if ('select' === i || ('input' === i && 'file' === o.type))
              var a = Wr;
            else if (Lr(o))
              if (qr) a = Yr;
              else {
                a = Kr;
                var l = $r;
              }
            else
              (i = o.nodeName) &&
                'input' === i.toLowerCase() &&
                ('checkbox' === o.type || 'radio' === o.type) &&
                (a = Qr);
            if (a && (a = a(n, e))) return Mr(a, t, r);
            l && l(n, o, e),
              'blur' === n &&
                (n = o._wrapperState) &&
                n.controlled &&
                'number' === o.type &&
                On(o, 'number', o.value);
          },
        },
        Jr = {
          mouseEnter: {
            registrationName: 'onMouseEnter',
            dependencies: ['mouseout', 'mouseover'],
          },
          mouseLeave: {
            registrationName: 'onMouseLeave',
            dependencies: ['mouseout', 'mouseover'],
          },
          pointerEnter: {
            registrationName: 'onPointerEnter',
            dependencies: ['pointerout', 'pointerover'],
          },
          pointerLeave: {
            registrationName: 'onPointerLeave',
            dependencies: ['pointerout', 'pointerover'],
          },
        },
        Zr = {
          eventTypes: Jr,
          extractEvents: function(n, e, t, r, o) {
            var i = 'mouseover' === n || 'pointerover' === n,
              a = 'mouseout' === n || 'pointerout' === n;
            if (
              (i && 0 == (32 & o) && (t.relatedTarget || t.fromElement)) ||
              (!a && !i)
            )
              return null;
            if (
              ((o =
                r.window === r
                  ? r
                  : (o = r.ownerDocument)
                  ? o.defaultView || o.parentWindow
                  : window),
              a
                ? ((a = e),
                  null !==
                    (e = (e = t.relatedTarget || t.toElement) ? fr(e) : null) &&
                    (e !== (i = ee(e)) || (5 !== e.tag && 6 !== e.tag)) &&
                    (e = null))
                : (a = null),
              a === e)
            )
              return null;
            if ('mouseout' === n || 'mouseover' === n)
              var l = et,
                s = Jr.mouseLeave,
                c = Jr.mouseEnter,
                d = 'mouse';
            else
              ('pointerout' !== n && 'pointerover' !== n) ||
                ((l = tt),
                (s = Jr.pointerLeave),
                (c = Jr.pointerEnter),
                (d = 'pointer'));
            if (
              ((n = null == a ? o : pr(a)),
              (o = null == e ? o : pr(e)),
              ((s = l.getPooled(s, a, t, r)).type = d + 'leave'),
              (s.target = n),
              (s.relatedTarget = o),
              ((r = l.getPooled(c, e, t, r)).type = d + 'enter'),
              (r.target = o),
              (r.relatedTarget = n),
              (d = e),
              (l = a) && d)
            )
              n: {
                for (n = d, a = 0, e = c = l; e; e = Ne(e)) a++;
                for (e = 0, o = n; o; o = Ne(o)) e++;
                for (; 0 < a - e; ) (c = Ne(c)), a--;
                for (; 0 < e - a; ) (n = Ne(n)), e--;
                for (; a--; ) {
                  if (c === n || c === n.alternate) break n;
                  (c = Ne(c)), (n = Ne(n));
                }
                c = null;
              }
            else c = null;
            for (
              n = c, c = [];
              l && l !== n && (null === (a = l.alternate) || a !== n);

            )
              c.push(l), (l = Ne(l));
            for (
              l = [];
              d && d !== n && (null === (a = d.alternate) || a !== n);

            )
              l.push(d), (d = Ne(d));
            for (d = 0; d < c.length; d++) Ie(c[d], 'bubbled', s);
            for (d = l.length; 0 < d--; ) Ie(l[d], 'captured', r);
            return t === Xr ? ((Xr = null), [s]) : ((Xr = t), [s, r]);
          },
        };
      var no =
          'function' == typeof Object.is
            ? Object.is
            : function(n, e) {
                return (
                  (n === e && (0 !== n || 1 / n == 1 / e)) || (n != n && e != e)
                );
              },
        eo = Object.prototype.hasOwnProperty;
      function to(n, e) {
        if (no(n, e)) return !0;
        if (
          'object' != typeof n ||
          null === n ||
          'object' != typeof e ||
          null === e
        )
          return !1;
        var t = Object.keys(n),
          r = Object.keys(e);
        if (t.length !== r.length) return !1;
        for (r = 0; r < t.length; r++)
          if (!eo.call(e, t[r]) || !no(n[t[r]], e[t[r]])) return !1;
        return !0;
      }
      var ro = Z && 'documentMode' in document && 11 >= document.documentMode,
        oo = {
          select: {
            phasedRegistrationNames: {
              bubbled: 'onSelect',
              captured: 'onSelectCapture',
            },
            dependencies: 'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          },
        },
        io = null,
        ao = null,
        lo = null,
        so = !1;
      function co(n, e) {
        var t =
          e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
        return so || null == io || io !== Vt(t)
          ? null
          : ('selectionStart' in (t = io) && Yt(t)
              ? (t = { start: t.selectionStart, end: t.selectionEnd })
              : (t = {
                  anchorNode: (t = (
                    (t.ownerDocument && t.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: t.anchorOffset,
                  focusNode: t.focusNode,
                  focusOffset: t.focusOffset,
                }),
            lo && to(lo, t)
              ? null
              : ((lo = t),
                ((n = ze.getPooled(oo.select, ao, n, e)).type = 'select'),
                (n.target = io),
                Pe(n),
                n));
      }
      var uo = {
        eventTypes: oo,
        extractEvents: function(n, e, t, r) {
          var o,
            i =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument;
          if (!(o = !i)) {
            n: {
              (i = jt(i)), (o = p.onSelect);
              for (var a = 0; a < o.length; a++)
                if (!i.has(o[a])) {
                  i = !1;
                  break n;
                }
              i = !0;
            }
            o = !i;
          }
          if (o) return null;
          switch (((i = e ? pr(e) : window), n)) {
            case 'focus':
              (Lr(i) || 'true' === i.contentEditable) &&
                ((io = i), (ao = e), (lo = null));
              break;
            case 'blur':
              lo = ao = io = null;
              break;
            case 'mousedown':
              so = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              return (so = !1), co(t, r);
            case 'selectionchange':
              if (ro) break;
            case 'keydown':
            case 'keyup':
              return co(t, r);
          }
          return null;
        },
      };
      I.injectEventPluginOrder(
        'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
          ' ',
        ),
      ),
        (k = gr),
        (_ = mr),
        (E = pr),
        I.injectEventPluginsByName({
          SimpleEventPlugin: bt,
          EnterLeaveEventPlugin: Zr,
          ChangeEventPlugin: Gr,
          SelectEventPlugin: uo,
          BeforeInputEventPlugin: Pr,
        }),
        new Set();
      var fo = [],
        mo = -1;
      function po(n) {
        0 > mo || ((n.current = fo[mo]), (fo[mo] = null), mo--);
      }
      function go(n, e) {
        mo++, (fo[mo] = n.current), (n.current = e);
      }
      var ho = {},
        bo = { current: ho },
        vo = { current: !1 },
        xo = ho;
      function yo(n, e) {
        var t = n.type.contextTypes;
        if (!t) return ho;
        var r = n.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
          return r.__reactInternalMemoizedMaskedChildContext;
        var o,
          i = {};
        for (o in t) i[o] = e[o];
        return (
          r &&
            (((n =
              n.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
            (n.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function wo(n) {
        return null != (n = n.childContextTypes);
      }
      function ko(n) {
        po(vo), po(bo);
      }
      function _o(n) {
        po(vo), po(bo);
      }
      function Eo(n, e, t) {
        if (bo.current !== ho) throw Error(a(168));
        go(bo, e), go(vo, t);
      }
      function To(n, e, t) {
        var r = n.stateNode;
        if (((n = e.childContextTypes), 'function' != typeof r.getChildContext))
          return t;
        for (var i in (r = r.getChildContext()))
          if (!(i in n)) throw Error(a(108, G(e) || 'Unknown', i));
        return o({}, t, {}, r);
      }
      function Co(n) {
        var e = n.stateNode;
        return (
          (e = (e && e.__reactInternalMemoizedMergedChildContext) || ho),
          (xo = bo.current),
          go(bo, e),
          go(vo, vo.current),
          !0
        );
      }
      function So(n, e, t) {
        var r = n.stateNode;
        if (!r) throw Error(a(169));
        t
          ? ((e = To(n, e, xo)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            po(vo),
            po(bo),
            go(bo, e))
          : po(vo),
          go(vo, t);
      }
      var No = i.unstable_runWithPriority,
        Do = i.unstable_scheduleCallback,
        Ao = i.unstable_cancelCallback,
        Io = i.unstable_shouldYield,
        Oo = i.unstable_requestPaint,
        Po = i.unstable_now,
        jo = i.unstable_getCurrentPriorityLevel,
        Lo = i.unstable_ImmediatePriority,
        zo = i.unstable_UserBlockingPriority,
        Mo = i.unstable_NormalPriority,
        Ro = i.unstable_LowPriority,
        Fo = i.unstable_IdlePriority,
        Ho = {},
        Uo = void 0 !== Oo ? Oo : function() {},
        Wo = null,
        qo = null,
        Bo = !1,
        Vo = Po(),
        $o =
          1e4 > Vo
            ? Po
            : function() {
                return Po() - Vo;
              };
      function Ko() {
        switch (jo()) {
          case Lo:
            return 99;
          case zo:
            return 98;
          case Mo:
            return 97;
          case Ro:
            return 96;
          case Fo:
            return 95;
          default:
            throw Error(a(332));
        }
      }
      function Qo(n) {
        switch (n) {
          case 99:
            return Lo;
          case 98:
            return zo;
          case 97:
            return Mo;
          case 96:
            return Ro;
          case 95:
            return Fo;
          default:
            throw Error(a(332));
        }
      }
      function Yo(n, e) {
        return (n = Qo(n)), No(n, e);
      }
      function Xo(n, e, t) {
        return (n = Qo(n)), Do(n, e, t);
      }
      function Go(n) {
        return null === Wo ? ((Wo = [n]), (qo = Do(Lo, Zo))) : Wo.push(n), Ho;
      }
      function Jo() {
        if (null !== qo) {
          var n = qo;
          (qo = null), Ao(n);
        }
        Zo();
      }
      function Zo() {
        if (!Bo && null !== Wo) {
          Bo = !0;
          var n = 0;
          try {
            var e = Wo;
            Yo(99, function() {
              for (; n < e.length; n++) {
                var t = e[n];
                do {
                  t = t(!0);
                } while (null !== t);
              }
            }),
              (Wo = null);
          } catch (e) {
            throw (null !== Wo && (Wo = Wo.slice(n + 1)), Do(Lo, Jo), e);
          } finally {
            Bo = !1;
          }
        }
      }
      var ni = 3;
      function ei(n, e, t) {
        return (
          1073741821 - (1 + (((1073741821 - n + e / 10) / (t /= 10)) | 0)) * t
        );
      }
      function ti(n, e) {
        if (n && n.defaultProps)
          for (var t in ((e = o({}, e)), (n = n.defaultProps)))
            void 0 === e[t] && (e[t] = n[t]);
        return e;
      }
      var ri = { current: null },
        oi = null,
        ii = null,
        ai = null;
      function li() {
        ai = ii = oi = null;
      }
      function si(n, e) {
        var t = n.type._context;
        go(ri, t._currentValue), (t._currentValue = e);
      }
      function ci(n) {
        var e = ri.current;
        po(ri), (n.type._context._currentValue = e);
      }
      function di(n, e) {
        for (; null !== n; ) {
          var t = n.alternate;
          if (n.childExpirationTime < e)
            (n.childExpirationTime = e),
              null !== t &&
                t.childExpirationTime < e &&
                (t.childExpirationTime = e);
          else {
            if (!(null !== t && t.childExpirationTime < e)) break;
            t.childExpirationTime = e;
          }
          n = n.return;
        }
      }
      function ui(n, e) {
        (oi = n),
          (ai = ii = null),
          null !== (n = n.dependencies) &&
            null !== n.firstContext &&
            (n.expirationTime >= e && (Va = !0), (n.firstContext = null));
      }
      function fi(n, e) {
        if (ai !== n && !1 !== e && 0 !== e)
          if (
            (('number' == typeof e && 1073741823 !== e) ||
              ((ai = n), (e = 1073741823)),
            (e = { context: n, observedBits: e, next: null }),
            null === ii)
          ) {
            if (null === oi) throw Error(a(308));
            (ii = e),
              (oi.dependencies = {
                expirationTime: 0,
                firstContext: e,
                responders: null,
              });
          } else ii = ii.next = e;
        return n._currentValue;
      }
      var mi = !1;
      function pi(n) {
        return {
          baseState: n,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function gi(n) {
        return {
          baseState: n.baseState,
          firstUpdate: n.firstUpdate,
          lastUpdate: n.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function hi(n, e) {
        return {
          expirationTime: n,
          suspenseConfig: e,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
          nextEffect: null,
        };
      }
      function bi(n, e) {
        null === n.lastUpdate
          ? (n.firstUpdate = n.lastUpdate = e)
          : ((n.lastUpdate.next = e), (n.lastUpdate = e));
      }
      function vi(n, e) {
        var t = n.alternate;
        if (null === t) {
          var r = n.updateQueue,
            o = null;
          null === r && (r = n.updateQueue = pi(n.memoizedState));
        } else
          (r = n.updateQueue),
            (o = t.updateQueue),
            null === r
              ? null === o
                ? ((r = n.updateQueue = pi(n.memoizedState)),
                  (o = t.updateQueue = pi(t.memoizedState)))
                : (r = n.updateQueue = gi(o))
              : null === o && (o = t.updateQueue = gi(r));
        null === o || r === o
          ? bi(r, e)
          : null === r.lastUpdate || null === o.lastUpdate
          ? (bi(r, e), bi(o, e))
          : (bi(r, e), (o.lastUpdate = e));
      }
      function xi(n, e) {
        var t = n.updateQueue;
        null ===
        (t = null === t ? (n.updateQueue = pi(n.memoizedState)) : yi(n, t))
          .lastCapturedUpdate
          ? (t.firstCapturedUpdate = t.lastCapturedUpdate = e)
          : ((t.lastCapturedUpdate.next = e), (t.lastCapturedUpdate = e));
      }
      function yi(n, e) {
        var t = n.alternate;
        return (
          null !== t && e === t.updateQueue && (e = n.updateQueue = gi(e)), e
        );
      }
      function wi(n, e, t, r, i, a) {
        switch (t.tag) {
          case 1:
            return 'function' == typeof (n = t.payload) ? n.call(a, r, i) : n;
          case 3:
            n.effectTag = (-4097 & n.effectTag) | 64;
          case 0:
            if (
              null ==
              (i = 'function' == typeof (n = t.payload) ? n.call(a, r, i) : n)
            )
              break;
            return o({}, r, i);
          case 2:
            mi = !0;
        }
        return r;
      }
      function ki(n, e, t, r, o) {
        mi = !1;
        for (
          var i = (e = yi(n, e)).baseState,
            a = null,
            l = 0,
            s = e.firstUpdate,
            c = i;
          null !== s;

        ) {
          var d = s.expirationTime;
          d < o
            ? (null === a && ((a = s), (i = c)), l < d && (l = d))
            : (Ss(d, s.suspenseConfig),
              (c = wi(n, 0, s, c, t, r)),
              null !== s.callback &&
                ((n.effectTag |= 32),
                (s.nextEffect = null),
                null === e.lastEffect
                  ? (e.firstEffect = e.lastEffect = s)
                  : ((e.lastEffect.nextEffect = s), (e.lastEffect = s)))),
            (s = s.next);
        }
        for (d = null, s = e.firstCapturedUpdate; null !== s; ) {
          var u = s.expirationTime;
          u < o
            ? (null === d && ((d = s), null === a && (i = c)), l < u && (l = u))
            : ((c = wi(n, 0, s, c, t, r)),
              null !== s.callback &&
                ((n.effectTag |= 32),
                (s.nextEffect = null),
                null === e.lastCapturedEffect
                  ? (e.firstCapturedEffect = e.lastCapturedEffect = s)
                  : ((e.lastCapturedEffect.nextEffect = s),
                    (e.lastCapturedEffect = s)))),
            (s = s.next);
        }
        null === a && (e.lastUpdate = null),
          null === d ? (e.lastCapturedUpdate = null) : (n.effectTag |= 32),
          null === a && null === d && (i = c),
          (e.baseState = i),
          (e.firstUpdate = a),
          (e.firstCapturedUpdate = d),
          Ns(l),
          (n.expirationTime = l),
          (n.memoizedState = c);
      }
      function _i(n, e, t) {
        null !== e.firstCapturedUpdate &&
          (null !== e.lastUpdate &&
            ((e.lastUpdate.next = e.firstCapturedUpdate),
            (e.lastUpdate = e.lastCapturedUpdate)),
          (e.firstCapturedUpdate = e.lastCapturedUpdate = null)),
          Ei(e.firstEffect, t),
          (e.firstEffect = e.lastEffect = null),
          Ei(e.firstCapturedEffect, t),
          (e.firstCapturedEffect = e.lastCapturedEffect = null);
      }
      function Ei(n, e) {
        for (; null !== n; ) {
          var t = n.callback;
          if (null !== t) {
            n.callback = null;
            var r = e;
            if ('function' != typeof t) throw Error(a(191, t));
            t.call(r);
          }
          n = n.nextEffect;
        }
      }
      var Ti = P.ReactCurrentBatchConfig,
        Ci = new r.Component().refs;
      function Si(n, e, t, r) {
        (t = null == (t = t(r, (e = n.memoizedState))) ? e : o({}, e, t)),
          (n.memoizedState = t),
          null !== (r = n.updateQueue) &&
            0 === n.expirationTime &&
            (r.baseState = t);
      }
      var Ni = {
        isMounted: function(n) {
          return !!(n = n._reactInternalFiber) && ee(n) === n;
        },
        enqueueSetState: function(n, e, t) {
          n = n._reactInternalFiber;
          var r = ps(),
            o = Ti.suspense;
          ((o = hi((r = gs(r, n, o)), o)).payload = e),
            null != t && (o.callback = t),
            vi(n, o),
            hs(n, r);
        },
        enqueueReplaceState: function(n, e, t) {
          n = n._reactInternalFiber;
          var r = ps(),
            o = Ti.suspense;
          ((o = hi((r = gs(r, n, o)), o)).tag = 1),
            (o.payload = e),
            null != t && (o.callback = t),
            vi(n, o),
            hs(n, r);
        },
        enqueueForceUpdate: function(n, e) {
          n = n._reactInternalFiber;
          var t = ps(),
            r = Ti.suspense;
          ((r = hi((t = gs(t, n, r)), r)).tag = 2),
            null != e && (r.callback = e),
            vi(n, r),
            hs(n, t);
        },
      };
      function Di(n, e, t, r, o, i, a) {
        return 'function' == typeof (n = n.stateNode).shouldComponentUpdate
          ? n.shouldComponentUpdate(r, i, a)
          : !e.prototype ||
              !e.prototype.isPureReactComponent ||
              !to(t, r) ||
              !to(o, i);
      }
      function Ai(n, e, t) {
        var r = !1,
          o = ho,
          i = e.contextType;
        return (
          'object' == typeof i && null !== i
            ? (i = fi(i))
            : ((o = wo(e) ? xo : bo.current),
              (i = (r = null != (r = e.contextTypes)) ? yo(n, o) : ho)),
          (e = new e(t, i)),
          (n.memoizedState =
            null !== e.state && void 0 !== e.state ? e.state : null),
          (e.updater = Ni),
          (n.stateNode = e),
          (e._reactInternalFiber = n),
          r &&
            (((n =
              n.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
            (n.__reactInternalMemoizedMaskedChildContext = i)),
          e
        );
      }
      function Ii(n, e, t, r) {
        (n = e.state),
          'function' == typeof e.componentWillReceiveProps &&
            e.componentWillReceiveProps(t, r),
          'function' == typeof e.UNSAFE_componentWillReceiveProps &&
            e.UNSAFE_componentWillReceiveProps(t, r),
          e.state !== n && Ni.enqueueReplaceState(e, e.state, null);
      }
      function Oi(n, e, t, r) {
        var o = n.stateNode;
        (o.props = t), (o.state = n.memoizedState), (o.refs = Ci);
        var i = e.contextType;
        'object' == typeof i && null !== i
          ? (o.context = fi(i))
          : ((i = wo(e) ? xo : bo.current), (o.context = yo(n, i))),
          null !== (i = n.updateQueue) &&
            (ki(n, i, t, o, r), (o.state = n.memoizedState)),
          'function' == typeof (i = e.getDerivedStateFromProps) &&
            (Si(n, e, i, t), (o.state = n.memoizedState)),
          'function' == typeof e.getDerivedStateFromProps ||
            'function' == typeof o.getSnapshotBeforeUpdate ||
            ('function' != typeof o.UNSAFE_componentWillMount &&
              'function' != typeof o.componentWillMount) ||
            ((e = o.state),
            'function' == typeof o.componentWillMount && o.componentWillMount(),
            'function' == typeof o.UNSAFE_componentWillMount &&
              o.UNSAFE_componentWillMount(),
            e !== o.state && Ni.enqueueReplaceState(o, o.state, null),
            null !== (i = n.updateQueue) &&
              (ki(n, i, t, o, r), (o.state = n.memoizedState))),
          'function' == typeof o.componentDidMount && (n.effectTag |= 4);
      }
      var Pi = Array.isArray;
      function ji(n, e, t) {
        if (
          null !== (n = t.ref) &&
          'function' != typeof n &&
          'object' != typeof n
        ) {
          if (t._owner) {
            if ((t = t._owner)) {
              if (1 !== t.tag) throw Error(a(309));
              var r = t.stateNode;
            }
            if (!r) throw Error(a(147, n));
            var o = '' + n;
            return null !== e &&
              null !== e.ref &&
              'function' == typeof e.ref &&
              e.ref._stringRef === o
              ? e.ref
              : (((e = function(n) {
                  var e = r.refs;
                  e === Ci && (e = r.refs = {}),
                    null === n ? delete e[o] : (e[o] = n);
                })._stringRef = o),
                e);
          }
          if ('string' != typeof n) throw Error(a(284));
          if (!t._owner) throw Error(a(290, n));
        }
        return n;
      }
      function Li(n, e) {
        if ('textarea' !== n.type)
          throw Error(
            a(
              31,
              '[object Object]' === Object.prototype.toString.call(e)
                ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                : e,
              '',
            ),
          );
      }
      function zi(n) {
        function e(e, t) {
          if (n) {
            var r = e.lastEffect;
            null !== r
              ? ((r.nextEffect = t), (e.lastEffect = t))
              : (e.firstEffect = e.lastEffect = t),
              (t.nextEffect = null),
              (t.effectTag = 8);
          }
        }
        function t(t, r) {
          if (!n) return null;
          for (; null !== r; ) e(t, r), (r = r.sibling);
          return null;
        }
        function r(n, e) {
          for (n = new Map(); null !== e; )
            null !== e.key ? n.set(e.key, e) : n.set(e.index, e),
              (e = e.sibling);
          return n;
        }
        function o(n, e, t) {
          return ((n = Qs(n, e)).index = 0), (n.sibling = null), n;
        }
        function i(e, t, r) {
          return (
            (e.index = r),
            n
              ? null !== (r = e.alternate)
                ? (r = r.index) < t
                  ? ((e.effectTag = 2), t)
                  : r
                : ((e.effectTag = 2), t)
              : t
          );
        }
        function l(e) {
          return n && null === e.alternate && (e.effectTag = 2), e;
        }
        function s(n, e, t, r) {
          return null === e || 6 !== e.tag
            ? (((e = Gs(t, n.mode, r)).return = n), e)
            : (((e = o(e, t)).return = n), e);
        }
        function c(n, e, t, r) {
          return null !== e && e.elementType === t.type
            ? (((r = o(e, t.props)).ref = ji(n, e, t)), (r.return = n), r)
            : (((r = Ys(t.type, t.key, t.props, null, n.mode, r)).ref = ji(
                n,
                e,
                t,
              )),
              (r.return = n),
              r);
        }
        function d(n, e, t, r) {
          return null === e ||
            4 !== e.tag ||
            e.stateNode.containerInfo !== t.containerInfo ||
            e.stateNode.implementation !== t.implementation
            ? (((e = Js(t, n.mode, r)).return = n), e)
            : (((e = o(e, t.children || [])).return = n), e);
        }
        function u(n, e, t, r, i) {
          return null === e || 7 !== e.tag
            ? (((e = Xs(t, n.mode, r, i)).return = n), e)
            : (((e = o(e, t)).return = n), e);
        }
        function f(n, e, t) {
          if ('string' == typeof e || 'number' == typeof e)
            return ((e = Gs('' + e, n.mode, t)).return = n), e;
          if ('object' == typeof e && null !== e) {
            switch (e.$$typeof) {
              case z:
                return (
                  ((t = Ys(e.type, e.key, e.props, null, n.mode, t)).ref = ji(
                    n,
                    null,
                    e,
                  )),
                  (t.return = n),
                  t
                );
              case M:
                return ((e = Js(e, n.mode, t)).return = n), e;
            }
            if (Pi(e) || X(e))
              return ((e = Xs(e, n.mode, t, null)).return = n), e;
            Li(n, e);
          }
          return null;
        }
        function m(n, e, t, r) {
          var o = null !== e ? e.key : null;
          if ('string' == typeof t || 'number' == typeof t)
            return null !== o ? null : s(n, e, '' + t, r);
          if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
              case z:
                return t.key === o
                  ? t.type === R
                    ? u(n, e, t.props.children, r, o)
                    : c(n, e, t, r)
                  : null;
              case M:
                return t.key === o ? d(n, e, t, r) : null;
            }
            if (Pi(t) || X(t)) return null !== o ? null : u(n, e, t, r, null);
            Li(n, t);
          }
          return null;
        }
        function p(n, e, t, r, o) {
          if ('string' == typeof r || 'number' == typeof r)
            return s(e, (n = n.get(t) || null), '' + r, o);
          if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
              case z:
                return (
                  (n = n.get(null === r.key ? t : r.key) || null),
                  r.type === R
                    ? u(e, n, r.props.children, o, r.key)
                    : c(e, n, r, o)
                );
              case M:
                return d(
                  e,
                  (n = n.get(null === r.key ? t : r.key) || null),
                  r,
                  o,
                );
            }
            if (Pi(r) || X(r)) return u(e, (n = n.get(t) || null), r, o, null);
            Li(e, r);
          }
          return null;
        }
        function g(o, a, l, s) {
          for (
            var c = null, d = null, u = a, g = (a = 0), h = null;
            null !== u && g < l.length;
            g++
          ) {
            u.index > g ? ((h = u), (u = null)) : (h = u.sibling);
            var b = m(o, u, l[g], s);
            if (null === b) {
              null === u && (u = h);
              break;
            }
            n && u && null === b.alternate && e(o, u),
              (a = i(b, a, g)),
              null === d ? (c = b) : (d.sibling = b),
              (d = b),
              (u = h);
          }
          if (g === l.length) return t(o, u), c;
          if (null === u) {
            for (; g < l.length; g++)
              null !== (u = f(o, l[g], s)) &&
                ((a = i(u, a, g)),
                null === d ? (c = u) : (d.sibling = u),
                (d = u));
            return c;
          }
          for (u = r(o, u); g < l.length; g++)
            null !== (h = p(u, o, g, l[g], s)) &&
              (n &&
                null !== h.alternate &&
                u.delete(null === h.key ? g : h.key),
              (a = i(h, a, g)),
              null === d ? (c = h) : (d.sibling = h),
              (d = h));
          return (
            n &&
              u.forEach(function(n) {
                return e(o, n);
              }),
            c
          );
        }
        function h(o, l, s, c) {
          var d = X(s);
          if ('function' != typeof d) throw Error(a(150));
          if (null == (s = d.call(s))) throw Error(a(151));
          for (
            var u = (d = null), g = l, h = (l = 0), b = null, v = s.next();
            null !== g && !v.done;
            h++, v = s.next()
          ) {
            g.index > h ? ((b = g), (g = null)) : (b = g.sibling);
            var x = m(o, g, v.value, c);
            if (null === x) {
              null === g && (g = b);
              break;
            }
            n && g && null === x.alternate && e(o, g),
              (l = i(x, l, h)),
              null === u ? (d = x) : (u.sibling = x),
              (u = x),
              (g = b);
          }
          if (v.done) return t(o, g), d;
          if (null === g) {
            for (; !v.done; h++, v = s.next())
              null !== (v = f(o, v.value, c)) &&
                ((l = i(v, l, h)),
                null === u ? (d = v) : (u.sibling = v),
                (u = v));
            return d;
          }
          for (g = r(o, g); !v.done; h++, v = s.next())
            null !== (v = p(g, o, h, v.value, c)) &&
              (n &&
                null !== v.alternate &&
                g.delete(null === v.key ? h : v.key),
              (l = i(v, l, h)),
              null === u ? (d = v) : (u.sibling = v),
              (u = v));
          return (
            n &&
              g.forEach(function(n) {
                return e(o, n);
              }),
            d
          );
        }
        return function(n, r, i, s) {
          var c =
            'object' == typeof i &&
            null !== i &&
            i.type === R &&
            null === i.key;
          c && (i = i.props.children);
          var d = 'object' == typeof i && null !== i;
          if (d)
            switch (i.$$typeof) {
              case z:
                n: {
                  for (d = i.key, c = r; null !== c; ) {
                    if (c.key === d) {
                      if (
                        7 === c.tag ? i.type === R : c.elementType === i.type
                      ) {
                        t(n, c.sibling),
                          ((r = o(
                            c,
                            i.type === R ? i.props.children : i.props,
                          )).ref = ji(n, c, i)),
                          (r.return = n),
                          (n = r);
                        break n;
                      }
                      t(n, c);
                      break;
                    }
                    e(n, c), (c = c.sibling);
                  }
                  i.type === R
                    ? (((r = Xs(
                        i.props.children,
                        n.mode,
                        s,
                        i.key,
                      )).return = n),
                      (n = r))
                    : (((s = Ys(
                        i.type,
                        i.key,
                        i.props,
                        null,
                        n.mode,
                        s,
                      )).ref = ji(n, r, i)),
                      (s.return = n),
                      (n = s));
                }
                return l(n);
              case M:
                n: {
                  for (c = i.key; null !== r; ) {
                    if (r.key === c) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === i.containerInfo &&
                        r.stateNode.implementation === i.implementation
                      ) {
                        t(n, r.sibling),
                          ((r = o(r, i.children || [])).return = n),
                          (n = r);
                        break n;
                      }
                      t(n, r);
                      break;
                    }
                    e(n, r), (r = r.sibling);
                  }
                  ((r = Js(i, n.mode, s)).return = n), (n = r);
                }
                return l(n);
            }
          if ('string' == typeof i || 'number' == typeof i)
            return (
              (i = '' + i),
              null !== r && 6 === r.tag
                ? (t(n, r.sibling), ((r = o(r, i)).return = n), (n = r))
                : (t(n, r), ((r = Gs(i, n.mode, s)).return = n), (n = r)),
              l(n)
            );
          if (Pi(i)) return g(n, r, i, s);
          if (X(i)) return h(n, r, i, s);
          if ((d && Li(n, i), void 0 === i && !c))
            switch (n.tag) {
              case 1:
              case 0:
                throw ((n = n.type),
                Error(a(152, n.displayName || n.name || 'Component')));
            }
          return t(n, r);
        };
      }
      var Mi = zi(!0),
        Ri = zi(!1),
        Fi = {},
        Hi = { current: Fi },
        Ui = { current: Fi },
        Wi = { current: Fi };
      function qi(n) {
        if (n === Fi) throw Error(a(174));
        return n;
      }
      function Bi(n, e) {
        go(Wi, e), go(Ui, n), go(Hi, Fi);
        var t = e.nodeType;
        switch (t) {
          case 9:
          case 11:
            e = (e = e.documentElement) ? e.namespaceURI : Un(null, '');
            break;
          default:
            e = Un(
              (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
              (t = t.tagName),
            );
        }
        po(Hi), go(Hi, e);
      }
      function Vi(n) {
        po(Hi), po(Ui), po(Wi);
      }
      function $i(n) {
        qi(Wi.current);
        var e = qi(Hi.current),
          t = Un(e, n.type);
        e !== t && (go(Ui, n), go(Hi, t));
      }
      function Ki(n) {
        Ui.current === n && (po(Hi), po(Ui));
      }
      var Qi = { current: 0 };
      function Yi(n) {
        for (var e = n; null !== e; ) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              null !== t &&
              (null === (t = t.dehydrated) || t.data === Jt || t.data === Zt)
            )
              return e;
          } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
            if (0 != (64 & e.effectTag)) return e;
          } else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === n) return null;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
        return null;
      }
      function Xi(n, e) {
        return { responder: n, props: e };
      }
      var Gi = P.ReactCurrentDispatcher,
        Ji = P.ReactCurrentBatchConfig,
        Zi = 0,
        na = null,
        ea = null,
        ta = null,
        ra = null,
        oa = null,
        ia = null,
        aa = 0,
        la = null,
        sa = 0,
        ca = !1,
        da = null,
        ua = 0;
      function fa() {
        throw Error(a(321));
      }
      function ma(n, e) {
        if (null === e) return !1;
        for (var t = 0; t < e.length && t < n.length; t++)
          if (!no(n[t], e[t])) return !1;
        return !0;
      }
      function pa(n, e, t, r, o, i) {
        if (
          ((Zi = i),
          (na = e),
          (ta = null !== n ? n.memoizedState : null),
          (Gi.current = null === ta ? Pa : ja),
          (e = t(r, o)),
          ca)
        ) {
          do {
            (ca = !1),
              (ua += 1),
              (ta = null !== n ? n.memoizedState : null),
              (ia = ra),
              (la = oa = ea = null),
              (Gi.current = ja),
              (e = t(r, o));
          } while (ca);
          (da = null), (ua = 0);
        }
        if (
          ((Gi.current = Oa),
          ((n = na).memoizedState = ra),
          (n.expirationTime = aa),
          (n.updateQueue = la),
          (n.effectTag |= sa),
          (n = null !== ea && null !== ea.next),
          (Zi = 0),
          (ia = oa = ra = ta = ea = na = null),
          (aa = 0),
          (la = null),
          (sa = 0),
          n)
        )
          throw Error(a(300));
        return e;
      }
      function ga() {
        (Gi.current = Oa),
          (Zi = 0),
          (ia = oa = ra = ta = ea = na = null),
          (aa = 0),
          (la = null),
          (sa = 0),
          (ca = !1),
          (da = null),
          (ua = 0);
      }
      function ha() {
        var n = {
          memoizedState: null,
          baseState: null,
          queue: null,
          baseUpdate: null,
          next: null,
        };
        return null === oa ? (ra = oa = n) : (oa = oa.next = n), oa;
      }
      function ba() {
        if (null !== ia)
          (ia = (oa = ia).next), (ta = null !== (ea = ta) ? ea.next : null);
        else {
          if (null === ta) throw Error(a(310));
          var n = {
            memoizedState: (ea = ta).memoizedState,
            baseState: ea.baseState,
            queue: ea.queue,
            baseUpdate: ea.baseUpdate,
            next: null,
          };
          (oa = null === oa ? (ra = n) : (oa.next = n)), (ta = ea.next);
        }
        return oa;
      }
      function va(n, e) {
        return 'function' == typeof e ? e(n) : e;
      }
      function xa(n) {
        var e = ba(),
          t = e.queue;
        if (null === t) throw Error(a(311));
        if (((t.lastRenderedReducer = n), 0 < ua)) {
          var r = t.dispatch;
          if (null !== da) {
            var o = da.get(t);
            if (void 0 !== o) {
              da.delete(t);
              var i = e.memoizedState;
              do {
                (i = n(i, o.action)), (o = o.next);
              } while (null !== o);
              return (
                no(i, e.memoizedState) || (Va = !0),
                (e.memoizedState = i),
                e.baseUpdate === t.last && (e.baseState = i),
                (t.lastRenderedState = i),
                [i, r]
              );
            }
          }
          return [e.memoizedState, r];
        }
        r = t.last;
        var l = e.baseUpdate;
        if (
          ((i = e.baseState),
          null !== l
            ? (null !== r && (r.next = null), (r = l.next))
            : (r = null !== r ? r.next : null),
          null !== r)
        ) {
          var s = (o = null),
            c = r,
            d = !1;
          do {
            var u = c.expirationTime;
            u < Zi
              ? (d || ((d = !0), (s = l), (o = i)), u > aa && Ns((aa = u)))
              : (Ss(u, c.suspenseConfig),
                (i = c.eagerReducer === n ? c.eagerState : n(i, c.action))),
              (l = c),
              (c = c.next);
          } while (null !== c && c !== r);
          d || ((s = l), (o = i)),
            no(i, e.memoizedState) || (Va = !0),
            (e.memoizedState = i),
            (e.baseUpdate = s),
            (e.baseState = o),
            (t.lastRenderedState = i);
        }
        return [e.memoizedState, t.dispatch];
      }
      function ya(n) {
        var e = ha();
        return (
          'function' == typeof n && (n = n()),
          (e.memoizedState = e.baseState = n),
          (n = (n = e.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: va,
            lastRenderedState: n,
          }).dispatch = Ia.bind(null, na, n)),
          [e.memoizedState, n]
        );
      }
      function wa(n) {
        return xa(va);
      }
      function ka(n, e, t, r) {
        return (
          (n = { tag: n, create: e, destroy: t, deps: r, next: null }),
          null === la
            ? ((la = { lastEffect: null }).lastEffect = n.next = n)
            : null === (e = la.lastEffect)
            ? (la.lastEffect = n.next = n)
            : ((t = e.next), (e.next = n), (n.next = t), (la.lastEffect = n)),
          n
        );
      }
      function _a(n, e, t, r) {
        var o = ha();
        (sa |= n),
          (o.memoizedState = ka(e, t, void 0, void 0 === r ? null : r));
      }
      function Ea(n, e, t, r) {
        var o = ba();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== ea) {
          var a = ea.memoizedState;
          if (((i = a.destroy), null !== r && ma(r, a.deps)))
            return void ka(0, t, i, r);
        }
        (sa |= n), (o.memoizedState = ka(e, t, i, r));
      }
      function Ta(n, e) {
        return _a(516, 192, n, e);
      }
      function Ca(n, e) {
        return Ea(516, 192, n, e);
      }
      function Sa(n, e) {
        return 'function' == typeof e
          ? ((n = n()),
            e(n),
            function() {
              e(null);
            })
          : null != e
          ? ((n = n()),
            (e.current = n),
            function() {
              e.current = null;
            })
          : void 0;
      }
      function Na() {}
      function Da(n, e) {
        return (ha().memoizedState = [n, void 0 === e ? null : e]), n;
      }
      function Aa(n, e) {
        var t = ba();
        e = void 0 === e ? null : e;
        var r = t.memoizedState;
        return null !== r && null !== e && ma(e, r[1])
          ? r[0]
          : ((t.memoizedState = [n, e]), n);
      }
      function Ia(n, e, t) {
        if (!(25 > ua)) throw Error(a(301));
        var r = n.alternate;
        if (n === na || (null !== r && r === na))
          if (
            ((ca = !0),
            (n = {
              expirationTime: Zi,
              suspenseConfig: null,
              action: t,
              eagerReducer: null,
              eagerState: null,
              next: null,
            }),
            null === da && (da = new Map()),
            void 0 === (t = da.get(e)))
          )
            da.set(e, n);
          else {
            for (e = t; null !== e.next; ) e = e.next;
            e.next = n;
          }
        else {
          var o = ps(),
            i = Ti.suspense;
          i = {
            expirationTime: (o = gs(o, n, i)),
            suspenseConfig: i,
            action: t,
            eagerReducer: null,
            eagerState: null,
            next: null,
          };
          var l = e.last;
          if (null === l) i.next = i;
          else {
            var s = l.next;
            null !== s && (i.next = s), (l.next = i);
          }
          if (
            ((e.last = i),
            0 === n.expirationTime &&
              (null === r || 0 === r.expirationTime) &&
              null !== (r = e.lastRenderedReducer))
          )
            try {
              var c = e.lastRenderedState,
                d = r(c, t);
              if (((i.eagerReducer = r), (i.eagerState = d), no(d, c))) return;
            } catch (n) {}
          hs(n, o);
        }
      }
      var Oa = {
          readContext: fi,
          useCallback: fa,
          useContext: fa,
          useEffect: fa,
          useImperativeHandle: fa,
          useLayoutEffect: fa,
          useMemo: fa,
          useReducer: fa,
          useRef: fa,
          useState: fa,
          useDebugValue: fa,
          useResponder: fa,
          useDeferredValue: fa,
          useTransition: fa,
        },
        Pa = {
          readContext: fi,
          useCallback: Da,
          useContext: fi,
          useEffect: Ta,
          useImperativeHandle: function(n, e, t) {
            return (
              (t = null != t ? t.concat([n]) : null),
              _a(4, 36, Sa.bind(null, e, n), t)
            );
          },
          useLayoutEffect: function(n, e) {
            return _a(4, 36, n, e);
          },
          useMemo: function(n, e) {
            var t = ha();
            return (
              (e = void 0 === e ? null : e),
              (n = n()),
              (t.memoizedState = [n, e]),
              n
            );
          },
          useReducer: function(n, e, t) {
            var r = ha();
            return (
              (e = void 0 !== t ? t(e) : e),
              (r.memoizedState = r.baseState = e),
              (n = (n = r.queue = {
                last: null,
                dispatch: null,
                lastRenderedReducer: n,
                lastRenderedState: e,
              }).dispatch = Ia.bind(null, na, n)),
              [r.memoizedState, n]
            );
          },
          useRef: function(n) {
            return (n = { current: n }), (ha().memoizedState = n);
          },
          useState: ya,
          useDebugValue: Na,
          useResponder: Xi,
          useDeferredValue: function(n, e) {
            var t = ya(n),
              r = t[0],
              o = t[1];
            return (
              Ta(
                function() {
                  i.unstable_next(function() {
                    var t = Ji.suspense;
                    Ji.suspense = void 0 === e ? null : e;
                    try {
                      o(n);
                    } finally {
                      Ji.suspense = t;
                    }
                  });
                },
                [n, e],
              ),
              r
            );
          },
          useTransition: function(n) {
            var e = ya(!1),
              t = e[0],
              r = e[1];
            return [
              Da(
                function(e) {
                  r(!0),
                    i.unstable_next(function() {
                      var t = Ji.suspense;
                      Ji.suspense = void 0 === n ? null : n;
                      try {
                        r(!1), e();
                      } finally {
                        Ji.suspense = t;
                      }
                    });
                },
                [n, t],
              ),
              t,
            ];
          },
        },
        ja = {
          readContext: fi,
          useCallback: Aa,
          useContext: fi,
          useEffect: Ca,
          useImperativeHandle: function(n, e, t) {
            return (
              (t = null != t ? t.concat([n]) : null),
              Ea(4, 36, Sa.bind(null, e, n), t)
            );
          },
          useLayoutEffect: function(n, e) {
            return Ea(4, 36, n, e);
          },
          useMemo: function(n, e) {
            var t = ba();
            e = void 0 === e ? null : e;
            var r = t.memoizedState;
            return null !== r && null !== e && ma(e, r[1])
              ? r[0]
              : ((n = n()), (t.memoizedState = [n, e]), n);
          },
          useReducer: xa,
          useRef: function() {
            return ba().memoizedState;
          },
          useState: wa,
          useDebugValue: Na,
          useResponder: Xi,
          useDeferredValue: function(n, e) {
            var t = wa(),
              r = t[0],
              o = t[1];
            return (
              Ca(
                function() {
                  i.unstable_next(function() {
                    var t = Ji.suspense;
                    Ji.suspense = void 0 === e ? null : e;
                    try {
                      o(n);
                    } finally {
                      Ji.suspense = t;
                    }
                  });
                },
                [n, e],
              ),
              r
            );
          },
          useTransition: function(n) {
            var e = wa(),
              t = e[0],
              r = e[1];
            return [
              Aa(
                function(e) {
                  r(!0),
                    i.unstable_next(function() {
                      var t = Ji.suspense;
                      Ji.suspense = void 0 === n ? null : n;
                      try {
                        r(!1), e();
                      } finally {
                        Ji.suspense = t;
                      }
                    });
                },
                [n, t],
              ),
              t,
            ];
          },
        },
        La = null,
        za = null,
        Ma = !1;
      function Ra(n, e) {
        var t = $s(5, null, null, 0);
        (t.elementType = 'DELETED'),
          (t.type = 'DELETED'),
          (t.stateNode = e),
          (t.return = n),
          (t.effectTag = 8),
          null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = t), (n.lastEffect = t))
            : (n.firstEffect = n.lastEffect = t);
      }
      function Fa(n, e) {
        switch (n.tag) {
          case 5:
            var t = n.type;
            return (
              null !==
                (e =
                  1 !== e.nodeType ||
                  t.toLowerCase() !== e.nodeName.toLowerCase()
                    ? null
                    : e) && ((n.stateNode = e), !0)
            );
          case 6:
            return (
              null !==
                (e = '' === n.pendingProps || 3 !== e.nodeType ? null : e) &&
              ((n.stateNode = e), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Ha(n) {
        if (Ma) {
          var e = za;
          if (e) {
            var t = e;
            if (!Fa(n, e)) {
              if (!(e = ar(t.nextSibling)) || !Fa(n, e))
                return (
                  (n.effectTag = (-1025 & n.effectTag) | 2),
                  (Ma = !1),
                  void (La = n)
                );
              Ra(La, t);
            }
            (La = n), (za = ar(e.firstChild));
          } else (n.effectTag = (-1025 & n.effectTag) | 2), (Ma = !1), (La = n);
        }
      }
      function Ua(n) {
        for (
          n = n.return;
          null !== n && 5 !== n.tag && 3 !== n.tag && 13 !== n.tag;

        )
          n = n.return;
        La = n;
      }
      function Wa(n) {
        if (n !== La) return !1;
        if (!Ma) return Ua(n), (Ma = !0), !1;
        var e = n.type;
        if (
          5 !== n.tag ||
          ('head' !== e && 'body' !== e && !rr(e, n.memoizedProps))
        )
          for (e = za; e; ) Ra(n, e), (e = ar(e.nextSibling));
        if ((Ua(n), 13 === n.tag)) {
          if (!(n = null !== (n = n.memoizedState) ? n.dehydrated : null))
            throw Error(a(317));
          n: {
            for (n = n.nextSibling, e = 0; n; ) {
              if (8 === n.nodeType) {
                var t = n.data;
                if (t === Gt) {
                  if (0 === e) {
                    za = ar(n.nextSibling);
                    break n;
                  }
                  e--;
                } else (t !== Xt && t !== Zt && t !== Jt) || e++;
              }
              n = n.nextSibling;
            }
            za = null;
          }
        } else za = La ? ar(n.stateNode.nextSibling) : null;
        return !0;
      }
      function qa() {
        (za = La = null), (Ma = !1);
      }
      var Ba = P.ReactCurrentOwner,
        Va = !1;
      function $a(n, e, t, r) {
        e.child = null === n ? Ri(e, null, t, r) : Mi(e, n.child, t, r);
      }
      function Ka(n, e, t, r, o) {
        t = t.render;
        var i = e.ref;
        return (
          ui(e, o),
          (r = pa(n, e, t, r, i, o)),
          null === n || Va
            ? ((e.effectTag |= 1), $a(n, e, r, o), e.child)
            : ((e.updateQueue = n.updateQueue),
              (e.effectTag &= -517),
              n.expirationTime <= o && (n.expirationTime = 0),
              dl(n, e, o))
        );
      }
      function Qa(n, e, t, r, o, i) {
        if (null === n) {
          var a = t.type;
          return 'function' != typeof a ||
            Ks(a) ||
            void 0 !== a.defaultProps ||
            null !== t.compare ||
            void 0 !== t.defaultProps
            ? (((n = Ys(t.type, null, r, null, e.mode, i)).ref = e.ref),
              (n.return = e),
              (e.child = n))
            : ((e.tag = 15), (e.type = a), Ya(n, e, a, r, o, i));
        }
        return (
          (a = n.child),
          o < i &&
          ((o = a.memoizedProps),
          (t = null !== (t = t.compare) ? t : to)(o, r) && n.ref === e.ref)
            ? dl(n, e, i)
            : ((e.effectTag |= 1),
              ((n = Qs(a, r)).ref = e.ref),
              (n.return = e),
              (e.child = n))
        );
      }
      function Ya(n, e, t, r, o, i) {
        return null !== n &&
          to(n.memoizedProps, r) &&
          n.ref === e.ref &&
          ((Va = !1), o < i)
          ? dl(n, e, i)
          : Ga(n, e, t, r, i);
      }
      function Xa(n, e) {
        var t = e.ref;
        ((null === n && null !== t) || (null !== n && n.ref !== t)) &&
          (e.effectTag |= 128);
      }
      function Ga(n, e, t, r, o) {
        var i = wo(t) ? xo : bo.current;
        return (
          (i = yo(e, i)),
          ui(e, o),
          (t = pa(n, e, t, r, i, o)),
          null === n || Va
            ? ((e.effectTag |= 1), $a(n, e, t, o), e.child)
            : ((e.updateQueue = n.updateQueue),
              (e.effectTag &= -517),
              n.expirationTime <= o && (n.expirationTime = 0),
              dl(n, e, o))
        );
      }
      function Ja(n, e, t, r, o) {
        if (wo(t)) {
          var i = !0;
          Co(e);
        } else i = !1;
        if ((ui(e, o), null === e.stateNode))
          null !== n &&
            ((n.alternate = null), (e.alternate = null), (e.effectTag |= 2)),
            Ai(e, t, r),
            Oi(e, t, r, o),
            (r = !0);
        else if (null === n) {
          var a = e.stateNode,
            l = e.memoizedProps;
          a.props = l;
          var s = a.context,
            c = t.contextType;
          'object' == typeof c && null !== c
            ? (c = fi(c))
            : (c = yo(e, (c = wo(t) ? xo : bo.current)));
          var d = t.getDerivedStateFromProps,
            u =
              'function' == typeof d ||
              'function' == typeof a.getSnapshotBeforeUpdate;
          u ||
            ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
              'function' != typeof a.componentWillReceiveProps) ||
            ((l !== r || s !== c) && Ii(e, a, r, c)),
            (mi = !1);
          var f = e.memoizedState;
          s = a.state = f;
          var m = e.updateQueue;
          null !== m && (ki(e, m, r, a, o), (s = e.memoizedState)),
            l !== r || f !== s || vo.current || mi
              ? ('function' == typeof d &&
                  (Si(e, t, d, r), (s = e.memoizedState)),
                (l = mi || Di(e, t, l, r, f, s, c))
                  ? (u ||
                      ('function' != typeof a.UNSAFE_componentWillMount &&
                        'function' != typeof a.componentWillMount) ||
                      ('function' == typeof a.componentWillMount &&
                        a.componentWillMount(),
                      'function' == typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount()),
                    'function' == typeof a.componentDidMount &&
                      (e.effectTag |= 4))
                  : ('function' == typeof a.componentDidMount &&
                      (e.effectTag |= 4),
                    (e.memoizedProps = r),
                    (e.memoizedState = s)),
                (a.props = r),
                (a.state = s),
                (a.context = c),
                (r = l))
              : ('function' == typeof a.componentDidMount && (e.effectTag |= 4),
                (r = !1));
        } else
          (a = e.stateNode),
            (l = e.memoizedProps),
            (a.props = e.type === e.elementType ? l : ti(e.type, l)),
            (s = a.context),
            'object' == typeof (c = t.contextType) && null !== c
              ? (c = fi(c))
              : (c = yo(e, (c = wo(t) ? xo : bo.current))),
            (u =
              'function' == typeof (d = t.getDerivedStateFromProps) ||
              'function' == typeof a.getSnapshotBeforeUpdate) ||
              ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                'function' != typeof a.componentWillReceiveProps) ||
              ((l !== r || s !== c) && Ii(e, a, r, c)),
            (mi = !1),
            (s = e.memoizedState),
            (f = a.state = s),
            null !== (m = e.updateQueue) &&
              (ki(e, m, r, a, o), (f = e.memoizedState)),
            l !== r || s !== f || vo.current || mi
              ? ('function' == typeof d &&
                  (Si(e, t, d, r), (f = e.memoizedState)),
                (d = mi || Di(e, t, l, r, s, f, c))
                  ? (u ||
                      ('function' != typeof a.UNSAFE_componentWillUpdate &&
                        'function' != typeof a.componentWillUpdate) ||
                      ('function' == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, f, c),
                      'function' == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, f, c)),
                    'function' == typeof a.componentDidUpdate &&
                      (e.effectTag |= 4),
                    'function' == typeof a.getSnapshotBeforeUpdate &&
                      (e.effectTag |= 256))
                  : ('function' != typeof a.componentDidUpdate ||
                      (l === n.memoizedProps && s === n.memoizedState) ||
                      (e.effectTag |= 4),
                    'function' != typeof a.getSnapshotBeforeUpdate ||
                      (l === n.memoizedProps && s === n.memoizedState) ||
                      (e.effectTag |= 256),
                    (e.memoizedProps = r),
                    (e.memoizedState = f)),
                (a.props = r),
                (a.state = f),
                (a.context = c),
                (r = d))
              : ('function' != typeof a.componentDidUpdate ||
                  (l === n.memoizedProps && s === n.memoizedState) ||
                  (e.effectTag |= 4),
                'function' != typeof a.getSnapshotBeforeUpdate ||
                  (l === n.memoizedProps && s === n.memoizedState) ||
                  (e.effectTag |= 256),
                (r = !1));
        return Za(n, e, t, r, i, o);
      }
      function Za(n, e, t, r, o, i) {
        Xa(n, e);
        var a = 0 != (64 & e.effectTag);
        if (!r && !a) return o && So(e, t, !1), dl(n, e, i);
        (r = e.stateNode), (Ba.current = e);
        var l =
          a && 'function' != typeof t.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (e.effectTag |= 1),
          null !== n && a
            ? ((e.child = Mi(e, n.child, null, i)),
              (e.child = Mi(e, null, l, i)))
            : $a(n, e, l, i),
          (e.memoizedState = r.state),
          o && So(e, t, !0),
          e.child
        );
      }
      function nl(n) {
        var e = n.stateNode;
        e.pendingContext
          ? Eo(0, e.pendingContext, e.pendingContext !== e.context)
          : e.context && Eo(0, e.context, !1),
          Bi(n, e.containerInfo);
      }
      var el,
        tl,
        rl,
        ol,
        il = { dehydrated: null, retryTime: 0 };
      function al(n, e, t) {
        var r,
          o = e.mode,
          i = e.pendingProps,
          a = Qi.current,
          l = !1;
        if (
          ((r = 0 != (64 & e.effectTag)) ||
            (r = 0 != (2 & a) && (null === n || null !== n.memoizedState)),
          r
            ? ((l = !0), (e.effectTag &= -65))
            : (null !== n && null === n.memoizedState) ||
              void 0 === i.fallback ||
              !0 === i.unstable_avoidThisFallback ||
              (a |= 1),
          go(Qi, 1 & a),
          null === n)
        ) {
          if ((void 0 !== i.fallback && Ha(e), l)) {
            if (
              ((l = i.fallback),
              ((i = Xs(null, o, 0, null)).return = e),
              0 == (2 & e.mode))
            )
              for (
                n = null !== e.memoizedState ? e.child.child : e.child,
                  i.child = n;
                null !== n;

              )
                (n.return = i), (n = n.sibling);
            return (
              ((t = Xs(l, o, t, null)).return = e),
              (i.sibling = t),
              (e.memoizedState = il),
              (e.child = i),
              t
            );
          }
          return (
            (o = i.children),
            (e.memoizedState = null),
            (e.child = Ri(e, null, o, t))
          );
        }
        if (null !== n.memoizedState) {
          if (((o = (n = n.child).sibling), l)) {
            if (
              ((i = i.fallback),
              ((t = Qs(n, n.pendingProps)).return = e),
              0 == (2 & e.mode) &&
                (l = null !== e.memoizedState ? e.child.child : e.child) !==
                  n.child)
            )
              for (t.child = l; null !== l; ) (l.return = t), (l = l.sibling);
            return (
              ((o = Qs(o, i, o.expirationTime)).return = e),
              (t.sibling = o),
              (t.childExpirationTime = 0),
              (e.memoizedState = il),
              (e.child = t),
              o
            );
          }
          return (
            (t = Mi(e, n.child, i.children, t)),
            (e.memoizedState = null),
            (e.child = t)
          );
        }
        if (((n = n.child), l)) {
          if (
            ((l = i.fallback),
            ((i = Xs(null, o, 0, null)).return = e),
            (i.child = n),
            null !== n && (n.return = i),
            0 == (2 & e.mode))
          )
            for (
              n = null !== e.memoizedState ? e.child.child : e.child,
                i.child = n;
              null !== n;

            )
              (n.return = i), (n = n.sibling);
          return (
            ((t = Xs(l, o, t, null)).return = e),
            (i.sibling = t),
            (t.effectTag |= 2),
            (i.childExpirationTime = 0),
            (e.memoizedState = il),
            (e.child = i),
            t
          );
        }
        return (e.memoizedState = null), (e.child = Mi(e, n, i.children, t));
      }
      function ll(n, e) {
        n.expirationTime < e && (n.expirationTime = e);
        var t = n.alternate;
        null !== t && t.expirationTime < e && (t.expirationTime = e),
          di(n.return, e);
      }
      function sl(n, e, t, r, o, i) {
        var a = n.memoizedState;
        null === a
          ? (n.memoizedState = {
              isBackwards: e,
              rendering: null,
              last: r,
              tail: t,
              tailExpiration: 0,
              tailMode: o,
              lastEffect: i,
            })
          : ((a.isBackwards = e),
            (a.rendering = null),
            (a.last = r),
            (a.tail = t),
            (a.tailExpiration = 0),
            (a.tailMode = o),
            (a.lastEffect = i));
      }
      function cl(n, e, t) {
        var r = e.pendingProps,
          o = r.revealOrder,
          i = r.tail;
        if (($a(n, e, r.children, t), 0 != (2 & (r = Qi.current))))
          (r = (1 & r) | 2), (e.effectTag |= 64);
        else {
          if (null !== n && 0 != (64 & n.effectTag))
            n: for (n = e.child; null !== n; ) {
              if (13 === n.tag) null !== n.memoizedState && ll(n, t);
              else if (19 === n.tag) ll(n, t);
              else if (null !== n.child) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === e) break n;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === e) break n;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
          r &= 1;
        }
        if ((go(Qi, r), 0 == (2 & e.mode))) e.memoizedState = null;
        else
          switch (o) {
            case 'forwards':
              for (t = e.child, o = null; null !== t; )
                null !== (n = t.alternate) && null === Yi(n) && (o = t),
                  (t = t.sibling);
              null === (t = o)
                ? ((o = e.child), (e.child = null))
                : ((o = t.sibling), (t.sibling = null)),
                sl(e, !1, o, t, i, e.lastEffect);
              break;
            case 'backwards':
              for (t = null, o = e.child, e.child = null; null !== o; ) {
                if (null !== (n = o.alternate) && null === Yi(n)) {
                  e.child = o;
                  break;
                }
                (n = o.sibling), (o.sibling = t), (t = o), (o = n);
              }
              sl(e, !0, t, null, i, e.lastEffect);
              break;
            case 'together':
              sl(e, !1, null, null, void 0, e.lastEffect);
              break;
            default:
              e.memoizedState = null;
          }
        return e.child;
      }
      function dl(n, e, t) {
        null !== n && (e.dependencies = n.dependencies);
        var r = e.expirationTime;
        if ((0 !== r && Ns(r), e.childExpirationTime < t)) return null;
        if (null !== n && e.child !== n.child) throw Error(a(153));
        if (null !== e.child) {
          for (
            t = Qs((n = e.child), n.pendingProps, n.expirationTime),
              e.child = t,
              t.return = e;
            null !== n.sibling;

          )
            (n = n.sibling),
              ((t = t.sibling = Qs(
                n,
                n.pendingProps,
                n.expirationTime,
              )).return = e);
          t.sibling = null;
        }
        return e.child;
      }
      function ul(n) {
        n.effectTag |= 4;
      }
      function fl(n, e) {
        switch (n.tailMode) {
          case 'hidden':
            e = n.tail;
            for (var t = null; null !== e; )
              null !== e.alternate && (t = e), (e = e.sibling);
            null === t ? (n.tail = null) : (t.sibling = null);
            break;
          case 'collapsed':
            t = n.tail;
            for (var r = null; null !== t; )
              null !== t.alternate && (r = t), (t = t.sibling);
            null === r
              ? e || null === n.tail
                ? (n.tail = null)
                : (n.tail.sibling = null)
              : (r.sibling = null);
        }
      }
      function ml(n) {
        switch (n.tag) {
          case 1:
            wo(n.type) && ko();
            var e = n.effectTag;
            return 4096 & e ? ((n.effectTag = (-4097 & e) | 64), n) : null;
          case 3:
            if ((Vi(), _o(), 0 != (64 & (e = n.effectTag))))
              throw Error(a(285));
            return (n.effectTag = (-4097 & e) | 64), n;
          case 5:
            return Ki(n), null;
          case 13:
            return (
              po(Qi),
              4096 & (e = n.effectTag)
                ? ((n.effectTag = (-4097 & e) | 64), n)
                : null
            );
          case 19:
            return po(Qi), null;
          case 4:
            return Vi(), null;
          case 10:
            return ci(n), null;
          default:
            return null;
        }
      }
      function pl(n, e) {
        return { value: n, source: e, stack: J(e) };
      }
      (el = function(n, e) {
        for (var t = e.child; null !== t; ) {
          if (5 === t.tag || 6 === t.tag) n.appendChild(t.stateNode);
          else if (4 !== t.tag && null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }),
        (tl = function() {}),
        (rl = function(n, e, t, r, i) {
          var a = n.memoizedProps;
          if (a !== r) {
            var l,
              s,
              c = e.stateNode;
            switch ((qi(Hi.current), (n = null), t)) {
              case 'input':
                (a = Sn(c, a)), (r = Sn(c, r)), (n = []);
                break;
              case 'option':
                (a = Pn(c, a)), (r = Pn(c, r)), (n = []);
                break;
              case 'select':
                (a = o({}, a, { value: void 0 })),
                  (r = o({}, r, { value: void 0 })),
                  (n = []);
                break;
              case 'textarea':
                (a = Ln(c, a)), (r = Ln(c, r)), (n = []);
                break;
              default:
                'function' != typeof a.onClick &&
                  'function' == typeof r.onClick &&
                  (c.onclick = Bt);
            }
            for (l in (Ut(t, r), (t = null), a))
              if (!r.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                if ('style' === l)
                  for (s in (c = a[l]))
                    c.hasOwnProperty(s) && (t || (t = {}), (t[s] = ''));
                else
                  'dangerouslySetInnerHTML' !== l &&
                    'children' !== l &&
                    'suppressContentEditableWarning' !== l &&
                    'suppressHydrationWarning' !== l &&
                    'autoFocus' !== l &&
                    (m.hasOwnProperty(l)
                      ? n || (n = [])
                      : (n = n || []).push(l, null));
            for (l in r) {
              var d = r[l];
              if (
                ((c = null != a ? a[l] : void 0),
                r.hasOwnProperty(l) && d !== c && (null != d || null != c))
              )
                if ('style' === l)
                  if (c) {
                    for (s in c)
                      !c.hasOwnProperty(s) ||
                        (d && d.hasOwnProperty(s)) ||
                        (t || (t = {}), (t[s] = ''));
                    for (s in d)
                      d.hasOwnProperty(s) &&
                        c[s] !== d[s] &&
                        (t || (t = {}), (t[s] = d[s]));
                  } else t || (n || (n = []), n.push(l, t)), (t = d);
                else
                  'dangerouslySetInnerHTML' === l
                    ? ((d = d ? d.__html : void 0),
                      (c = c ? c.__html : void 0),
                      null != d && c !== d && (n = n || []).push(l, '' + d))
                    : 'children' === l
                    ? c === d ||
                      ('string' != typeof d && 'number' != typeof d) ||
                      (n = n || []).push(l, '' + d)
                    : 'suppressContentEditableWarning' !== l &&
                      'suppressHydrationWarning' !== l &&
                      (m.hasOwnProperty(l)
                        ? (null != d && qt(i, l), n || c === d || (n = []))
                        : (n = n || []).push(l, d));
            }
            t && (n = n || []).push('style', t),
              (i = n),
              (e.updateQueue = i) && ul(e);
          }
        }),
        (ol = function(n, e, t, r) {
          t !== r && ul(e);
        });
      var gl = 'function' == typeof WeakSet ? WeakSet : Set;
      function hl(n, e) {
        var t = e.source,
          r = e.stack;
        null === r && null !== t && (r = J(t)),
          null !== t && G(t.type),
          (e = e.value),
          null !== n && 1 === n.tag && G(n.type);
        try {
          console.error(e);
        } catch (n) {
          setTimeout(function() {
            throw n;
          });
        }
      }
      function bl(n) {
        var e = n.ref;
        if (null !== e)
          if ('function' == typeof e)
            try {
              e(null);
            } catch (e) {
              Hs(n, e);
            }
          else e.current = null;
      }
      function vl(n, e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            xl(2, 0, e);
            break;
          case 1:
            if (256 & e.effectTag && null !== n) {
              var t = n.memoizedProps,
                r = n.memoizedState;
              (e = (n = e.stateNode).getSnapshotBeforeUpdate(
                e.elementType === e.type ? t : ti(e.type, t),
                r,
              )),
                (n.__reactInternalSnapshotBeforeUpdate = e);
            }
            break;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      }
      function xl(n, e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var r = (t = t.next);
          do {
            if (0 != (r.tag & n)) {
              var o = r.destroy;
              (r.destroy = void 0), void 0 !== o && o();
            }
            0 != (r.tag & e) && ((o = r.create), (r.destroy = o())),
              (r = r.next);
          } while (r !== t);
        }
      }
      function yl(n, e, t) {
        switch (('function' == typeof Bs && Bs(e), e.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (null !== (n = e.updateQueue) && null !== (n = n.lastEffect)) {
              var r = n.next;
              Yo(97 < t ? 97 : t, function() {
                var n = r;
                do {
                  var t = n.destroy;
                  if (void 0 !== t) {
                    var o = e;
                    try {
                      t();
                    } catch (n) {
                      Hs(o, n);
                    }
                  }
                  n = n.next;
                } while (n !== r);
              });
            }
            break;
          case 1:
            bl(e),
              'function' == typeof (t = e.stateNode).componentWillUnmount &&
                (function(n, e) {
                  try {
                    (e.props = n.memoizedProps),
                      (e.state = n.memoizedState),
                      e.componentWillUnmount();
                  } catch (e) {
                    Hs(n, e);
                  }
                })(e, t);
            break;
          case 5:
            bl(e);
            break;
          case 4:
            El(n, e, t);
        }
      }
      function wl(n) {
        var e = n.alternate;
        (n.return = null),
          (n.child = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.alternate = null),
          (n.firstEffect = null),
          (n.lastEffect = null),
          (n.pendingProps = null),
          (n.memoizedProps = null),
          null !== e && wl(e);
      }
      function kl(n) {
        return 5 === n.tag || 3 === n.tag || 4 === n.tag;
      }
      function _l(n) {
        n: {
          for (var e = n.return; null !== e; ) {
            if (kl(e)) {
              var t = e;
              break n;
            }
            e = e.return;
          }
          throw Error(a(160));
        }
        switch (((e = t.stateNode), t.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (e = e.containerInfo), (r = !0);
            break;
          default:
            throw Error(a(161));
        }
        16 & t.effectTag && (Bn(e, ''), (t.effectTag &= -17));
        n: e: for (t = n; ; ) {
          for (; null === t.sibling; ) {
            if (null === t.return || kl(t.return)) {
              t = null;
              break n;
            }
            t = t.return;
          }
          for (
            t.sibling.return = t.return, t = t.sibling;
            5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

          ) {
            if (2 & t.effectTag) continue e;
            if (null === t.child || 4 === t.tag) continue e;
            (t.child.return = t), (t = t.child);
          }
          if (!(2 & t.effectTag)) {
            t = t.stateNode;
            break n;
          }
        }
        for (var o = n; ; ) {
          var i = 5 === o.tag || 6 === o.tag;
          if (i) {
            var l = i ? o.stateNode : o.stateNode.instance;
            if (t)
              if (r) {
                var s = l;
                (l = t),
                  8 === (i = e).nodeType
                    ? i.parentNode.insertBefore(s, l)
                    : i.insertBefore(s, l);
              } else e.insertBefore(l, t);
            else
              r
                ? (8 === (s = e).nodeType
                    ? (i = s.parentNode).insertBefore(l, s)
                    : (i = s).appendChild(l),
                  null != (s = s._reactRootContainer) ||
                    null !== i.onclick ||
                    (i.onclick = Bt))
                : e.appendChild(l);
          } else if (4 !== o.tag && null !== o.child) {
            (o.child.return = o), (o = o.child);
            continue;
          }
          if (o === n) break;
          for (; null === o.sibling; ) {
            if (null === o.return || o.return === n) return;
            o = o.return;
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }
      function El(n, e, t) {
        for (var r, o, i = e, l = !1; ; ) {
          if (!l) {
            l = i.return;
            n: for (;;) {
              if (null === l) throw Error(a(160));
              switch (((r = l.stateNode), l.tag)) {
                case 5:
                  o = !1;
                  break n;
                case 3:
                case 4:
                  (r = r.containerInfo), (o = !0);
                  break n;
              }
              l = l.return;
            }
            l = !0;
          }
          if (5 === i.tag || 6 === i.tag) {
            n: for (var s = n, c = i, d = t, u = c; ; )
              if ((yl(s, u, d), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === c) break;
                for (; null === u.sibling; ) {
                  if (null === u.return || u.return === c) break n;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            o
              ? ((s = r),
                (c = i.stateNode),
                8 === s.nodeType
                  ? s.parentNode.removeChild(c)
                  : s.removeChild(c))
              : r.removeChild(i.stateNode);
          } else if (4 === i.tag) {
            if (null !== i.child) {
              (r = i.stateNode.containerInfo),
                (o = !0),
                (i.child.return = i),
                (i = i.child);
              continue;
            }
          } else if ((yl(n, i, t), null !== i.child)) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === e) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === e) return;
            4 === (i = i.return).tag && (l = !1);
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function Tl(n, e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            xl(4, 8, e);
            break;
          case 1:
            break;
          case 5:
            var t = e.stateNode;
            if (null != t) {
              var r = e.memoizedProps,
                o = null !== n ? n.memoizedProps : r;
              n = e.type;
              var i = e.updateQueue;
              if (((e.updateQueue = null), null !== i)) {
                for (
                  t[dr] = r,
                    'input' === n &&
                      'radio' === r.type &&
                      null != r.name &&
                      Dn(t, r),
                    Wt(n, o),
                    e = Wt(n, r),
                    o = 0;
                  o < i.length;
                  o += 2
                ) {
                  var l = i[o],
                    s = i[o + 1];
                  'style' === l
                    ? Ft(t, s)
                    : 'dangerouslySetInnerHTML' === l
                    ? qn(t, s)
                    : 'children' === l
                    ? Bn(t, s)
                    : _n(t, l, s, e);
                }
                switch (n) {
                  case 'input':
                    An(t, r);
                    break;
                  case 'textarea':
                    Mn(t, r);
                    break;
                  case 'select':
                    (e = t._wrapperState.wasMultiple),
                      (t._wrapperState.wasMultiple = !!r.multiple),
                      null != (n = r.value)
                        ? jn(t, !!r.multiple, n, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? jn(t, !!r.multiple, r.defaultValue, !0)
                            : jn(t, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            break;
          case 6:
            if (null === e.stateNode) throw Error(a(162));
            e.stateNode.nodeValue = e.memoizedProps;
            break;
          case 3:
            (e = e.stateNode).hydrate &&
              ((e.hydrate = !1), Ce(e.containerInfo));
            break;
          case 12:
            break;
          case 13:
            if (
              ((t = e),
              null === e.memoizedState
                ? (r = !1)
                : ((r = !0), (t = e.child), (es = $o())),
              null !== t)
            )
              n: for (n = t; ; ) {
                if (5 === n.tag)
                  (i = n.stateNode),
                    r
                      ? 'function' == typeof (i = i.style).setProperty
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none')
                      : ((i = n.stateNode),
                        (o =
                          null != (o = n.memoizedProps.style) &&
                          o.hasOwnProperty('display')
                            ? o.display
                            : null),
                        (i.style.display = Rt('display', o)));
                else if (6 === n.tag)
                  n.stateNode.nodeValue = r ? '' : n.memoizedProps;
                else {
                  if (
                    13 === n.tag &&
                    null !== n.memoizedState &&
                    null === n.memoizedState.dehydrated
                  ) {
                    ((i = n.child.sibling).return = n), (n = i);
                    continue;
                  }
                  if (null !== n.child) {
                    (n.child.return = n), (n = n.child);
                    continue;
                  }
                }
                if (n === t) break n;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === t) break n;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              }
            Cl(e);
            break;
          case 19:
            Cl(e);
            break;
          case 17:
          case 20:
          case 21:
            break;
          default:
            throw Error(a(163));
        }
      }
      function Cl(n) {
        var e = n.updateQueue;
        if (null !== e) {
          n.updateQueue = null;
          var t = n.stateNode;
          null === t && (t = n.stateNode = new gl()),
            e.forEach(function(e) {
              var r = Ws.bind(null, n, e);
              t.has(e) || (t.add(e), e.then(r, r));
            });
        }
      }
      var Sl = 'function' == typeof WeakMap ? WeakMap : Map;
      function Nl(n, e, t) {
        ((t = hi(t, null)).tag = 3), (t.payload = { element: null });
        var r = e.value;
        return (
          (t.callback = function() {
            os || ((os = !0), (is = r)), hl(n, e);
          }),
          t
        );
      }
      function Dl(n, e, t) {
        (t = hi(t, null)).tag = 3;
        var r = n.type.getDerivedStateFromError;
        if ('function' == typeof r) {
          var o = e.value;
          t.payload = function() {
            return hl(n, e), r(o);
          };
        }
        var i = n.stateNode;
        return (
          null !== i &&
            'function' == typeof i.componentDidCatch &&
            (t.callback = function() {
              'function' != typeof r &&
                (null === as ? (as = new Set([this])) : as.add(this), hl(n, e));
              var t = e.stack;
              this.componentDidCatch(e.value, {
                componentStack: null !== t ? t : '',
              });
            }),
          t
        );
      }
      var Al,
        Il = Math.ceil,
        Ol = P.ReactCurrentDispatcher,
        Pl = P.ReactCurrentOwner,
        jl = 0,
        Ll = 8,
        zl = 16,
        Ml = 32,
        Rl = 0,
        Fl = 1,
        Hl = 2,
        Ul = 3,
        Wl = 4,
        ql = 5,
        Bl = jl,
        Vl = null,
        $l = null,
        Kl = 0,
        Ql = Rl,
        Yl = null,
        Xl = 1073741823,
        Gl = 1073741823,
        Jl = null,
        Zl = 0,
        ns = !1,
        es = 0,
        ts = 500,
        rs = null,
        os = !1,
        is = null,
        as = null,
        ls = !1,
        ss = null,
        cs = 90,
        ds = null,
        us = 0,
        fs = null,
        ms = 0;
      function ps() {
        return (Bl & (zl | Ml)) !== jl
          ? 1073741821 - (($o() / 10) | 0)
          : 0 !== ms
          ? ms
          : (ms = 1073741821 - (($o() / 10) | 0));
      }
      function gs(n, e, t) {
        if (0 == (2 & (e = e.mode))) return 1073741823;
        var r = Ko();
        if (0 == (4 & e)) return 99 === r ? 1073741823 : 1073741822;
        if ((Bl & zl) !== jl) return Kl;
        if (null !== t) n = ei(n, 0 | t.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              n = 1073741823;
              break;
            case 98:
              n = ei(n, 150, 100);
              break;
            case 97:
            case 96:
              n = ei(n, 5e3, 250);
              break;
            case 95:
              n = 2;
              break;
            default:
              throw Error(a(326));
          }
        return null !== Vl && n === Kl && --n, n;
      }
      function hs(n, e) {
        if (50 < us) throw ((us = 0), (fs = null), Error(a(185)));
        if (null !== (n = bs(n, e))) {
          var t = Ko();
          1073741823 === e
            ? (Bl & Ll) !== jl && (Bl & (zl | Ml)) === jl
              ? ws(n)
              : (xs(n), Bl === jl && Jo())
            : xs(n),
            (4 & Bl) === jl ||
              (98 !== t && 99 !== t) ||
              (null === ds
                ? (ds = new Map([[n, e]]))
                : (void 0 === (t = ds.get(n)) || t > e) && ds.set(n, e));
        }
      }
      function bs(n, e) {
        n.expirationTime < e && (n.expirationTime = e);
        var t = n.alternate;
        null !== t && t.expirationTime < e && (t.expirationTime = e);
        var r = n.return,
          o = null;
        if (null === r && 3 === n.tag) o = n.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((t = r.alternate),
              r.childExpirationTime < e && (r.childExpirationTime = e),
              null !== t &&
                t.childExpirationTime < e &&
                (t.childExpirationTime = e),
              null === r.return && 3 === r.tag)
            ) {
              o = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== o && (Vl === o && (Ns(e), Ql === Wl && ec(o, Kl)), tc(o, e)),
          o
        );
      }
      function vs(n) {
        var e = n.lastExpiredTime;
        return 0 !== e
          ? e
          : nc(n, (e = n.firstPendingTime))
          ? (e = n.lastPingedTime) > (n = n.nextKnownPendingLevel)
            ? e
            : n
          : e;
      }
      function xs(n) {
        if (0 !== n.lastExpiredTime)
          (n.callbackExpirationTime = 1073741823),
            (n.callbackPriority = 99),
            (n.callbackNode = Go(ws.bind(null, n)));
        else {
          var e = vs(n),
            t = n.callbackNode;
          if (0 === e)
            null !== t &&
              ((n.callbackNode = null),
              (n.callbackExpirationTime = 0),
              (n.callbackPriority = 90));
          else {
            var r = ps();
            if (
              (1073741823 === e
                ? (r = 99)
                : 1 === e || 2 === e
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - e) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== t)
            ) {
              var o = n.callbackPriority;
              if (n.callbackExpirationTime === e && o >= r) return;
              t !== Ho && Ao(t);
            }
            (n.callbackExpirationTime = e),
              (n.callbackPriority = r),
              (e =
                1073741823 === e
                  ? Go(ws.bind(null, n))
                  : Xo(r, ys.bind(null, n), {
                      timeout: 10 * (1073741821 - e) - $o(),
                    })),
              (n.callbackNode = e);
          }
        }
      }
      function ys(n, e) {
        if (((ms = 0), e)) return rc(n, (e = ps())), xs(n), null;
        var t = vs(n);
        if (0 !== t) {
          if (((e = n.callbackNode), (Bl & (zl | Ml)) !== jl))
            throw Error(a(327));
          if ((Ms(), (n === Vl && t === Kl) || Es(n, t), null !== $l)) {
            var r = Bl;
            Bl |= zl;
            for (var o = Cs(); ; )
              try {
                As();
                break;
              } catch (e) {
                Ts(n, e);
              }
            if ((li(), (Bl = r), (Ol.current = o), Ql === Fl))
              throw ((e = Yl), Es(n, t), ec(n, t), xs(n), e);
            if (null === $l)
              switch (
                ((o = n.finishedWork = n.current.alternate),
                (n.finishedExpirationTime = t),
                (r = Ql),
                (Vl = null),
                r)
              ) {
                case Rl:
                case Fl:
                  throw Error(a(345));
                case Hl:
                  rc(n, 2 < t ? 2 : t);
                  break;
                case Ul:
                  if (
                    (ec(n, t),
                    t === (r = n.lastSuspendedTime) &&
                      (n.nextKnownPendingLevel = Ps(o)),
                    1073741823 === Xl && 10 < (o = es + ts - $o()))
                  ) {
                    if (ns) {
                      var i = n.lastPingedTime;
                      if (0 === i || i >= t) {
                        (n.lastPingedTime = t), Es(n, t);
                        break;
                      }
                    }
                    if (0 !== (i = vs(n)) && i !== t) break;
                    if (0 !== r && r !== t) {
                      n.lastPingedTime = r;
                      break;
                    }
                    n.timeoutHandle = or(js.bind(null, n), o);
                    break;
                  }
                  js(n);
                  break;
                case Wl:
                  if (
                    (ec(n, t),
                    t === (r = n.lastSuspendedTime) &&
                      (n.nextKnownPendingLevel = Ps(o)),
                    ns && (0 === (o = n.lastPingedTime) || o >= t))
                  ) {
                    (n.lastPingedTime = t), Es(n, t);
                    break;
                  }
                  if (0 !== (o = vs(n)) && o !== t) break;
                  if (0 !== r && r !== t) {
                    n.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== Gl
                      ? (r = 10 * (1073741821 - Gl) - $o())
                      : 1073741823 === Xl
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - Xl) - 5e3),
                        0 > (r = (o = $o()) - r) && (r = 0),
                        (t = 10 * (1073741821 - t) - o) <
                          (r =
                            (120 > r
                              ? 120
                              : 480 > r
                              ? 480
                              : 1080 > r
                              ? 1080
                              : 1920 > r
                              ? 1920
                              : 3e3 > r
                              ? 3e3
                              : 4320 > r
                              ? 4320
                              : 1960 * Il(r / 1960)) - r) && (r = t)),
                    10 < r)
                  ) {
                    n.timeoutHandle = or(js.bind(null, n), r);
                    break;
                  }
                  js(n);
                  break;
                case ql:
                  if (1073741823 !== Xl && null !== Jl) {
                    i = Xl;
                    var l = Jl;
                    if (
                      (0 >= (r = 0 | l.busyMinDurationMs)
                        ? (r = 0)
                        : ((o = 0 | l.busyDelayMs),
                          (r =
                            (i =
                              $o() -
                              (10 * (1073741821 - i) -
                                (0 | l.timeoutMs || 5e3))) <= o
                              ? 0
                              : o + r - i)),
                      10 < r)
                    ) {
                      ec(n, t), (n.timeoutHandle = or(js.bind(null, n), r));
                      break;
                    }
                  }
                  js(n);
                  break;
                default:
                  throw Error(a(329));
              }
            if ((xs(n), n.callbackNode === e)) return ys.bind(null, n);
          }
        }
        return null;
      }
      function ws(n) {
        var e = n.lastExpiredTime;
        if (((e = 0 !== e ? e : 1073741823), n.finishedExpirationTime === e))
          js(n);
        else {
          if ((Bl & (zl | Ml)) !== jl) throw Error(a(327));
          if ((Ms(), (n === Vl && e === Kl) || Es(n, e), null !== $l)) {
            var t = Bl;
            Bl |= zl;
            for (var r = Cs(); ; )
              try {
                Ds();
                break;
              } catch (e) {
                Ts(n, e);
              }
            if ((li(), (Bl = t), (Ol.current = r), Ql === Fl))
              throw ((t = Yl), Es(n, e), ec(n, e), xs(n), t);
            if (null !== $l) throw Error(a(261));
            (n.finishedWork = n.current.alternate),
              (n.finishedExpirationTime = e),
              (Vl = null),
              js(n),
              xs(n);
          }
        }
        return null;
      }
      function ks(n, e) {
        var t = Bl;
        Bl |= 1;
        try {
          return n(e);
        } finally {
          (Bl = t) === jl && Jo();
        }
      }
      function _s(n, e) {
        var t = Bl;
        (Bl &= -2), (Bl |= Ll);
        try {
          return n(e);
        } finally {
          (Bl = t) === jl && Jo();
        }
      }
      function Es(n, e) {
        (n.finishedWork = null), (n.finishedExpirationTime = 0);
        var t = n.timeoutHandle;
        if ((-1 !== t && ((n.timeoutHandle = -1), ir(t)), null !== $l))
          for (t = $l.return; null !== t; ) {
            var r = t;
            switch (r.tag) {
              case 1:
                var o = r.type.childContextTypes;
                null != o && ko();
                break;
              case 3:
                Vi(), _o();
                break;
              case 5:
                Ki(r);
                break;
              case 4:
                Vi();
                break;
              case 13:
              case 19:
                po(Qi);
                break;
              case 10:
                ci(r);
            }
            t = t.return;
          }
        (Vl = n),
          ($l = Qs(n.current, null)),
          (Kl = e),
          (Ql = Rl),
          (Yl = null),
          (Gl = Xl = 1073741823),
          (Jl = null),
          (Zl = 0),
          (ns = !1);
      }
      function Ts(n, e) {
        for (;;) {
          try {
            if ((li(), ga(), null === $l || null === $l.return))
              return (Ql = Fl), (Yl = e), null;
            n: {
              var t = n,
                r = $l.return,
                o = $l,
                i = e;
              if (
                ((e = Kl),
                (o.effectTag |= 2048),
                (o.firstEffect = o.lastEffect = null),
                null !== i &&
                  'object' == typeof i &&
                  'function' == typeof i.then)
              ) {
                var a = i,
                  l = 0 != (1 & Qi.current),
                  s = r;
                do {
                  var c;
                  if ((c = 13 === s.tag)) {
                    var d = s.memoizedState;
                    if (null !== d) c = null !== d.dehydrated;
                    else {
                      var u = s.memoizedProps;
                      c =
                        void 0 !== u.fallback &&
                        (!0 !== u.unstable_avoidThisFallback || !l);
                    }
                  }
                  if (c) {
                    var f = s.updateQueue;
                    if (null === f) {
                      var m = new Set();
                      m.add(a), (s.updateQueue = m);
                    } else f.add(a);
                    if (0 == (2 & s.mode)) {
                      if (
                        ((s.effectTag |= 64),
                        (o.effectTag &= -2981),
                        1 === o.tag)
                      )
                        if (null === o.alternate) o.tag = 17;
                        else {
                          var p = hi(1073741823, null);
                          (p.tag = 2), vi(o, p);
                        }
                      o.expirationTime = 1073741823;
                      break n;
                    }
                    (i = void 0), (o = e);
                    var g = t.pingCache;
                    if (
                      (null === g
                        ? ((g = t.pingCache = new Sl()),
                          (i = new Set()),
                          g.set(a, i))
                        : void 0 === (i = g.get(a)) &&
                          ((i = new Set()), g.set(a, i)),
                      !i.has(o))
                    ) {
                      i.add(o);
                      var h = Us.bind(null, t, a, o);
                      a.then(h, h);
                    }
                    (s.effectTag |= 4096), (s.expirationTime = e);
                    break n;
                  }
                  s = s.return;
                } while (null !== s);
                i = Error(
                  (G(o.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                    J(o),
                );
              }
              Ql !== ql && (Ql = Hl), (i = pl(i, o)), (s = r);
              do {
                switch (s.tag) {
                  case 3:
                    (a = i),
                      (s.effectTag |= 4096),
                      (s.expirationTime = e),
                      xi(s, Nl(s, a, e));
                    break n;
                  case 1:
                    a = i;
                    var b = s.type,
                      v = s.stateNode;
                    if (
                      0 == (64 & s.effectTag) &&
                      ('function' == typeof b.getDerivedStateFromError ||
                        (null !== v &&
                          'function' == typeof v.componentDidCatch &&
                          (null === as || !as.has(v))))
                    ) {
                      (s.effectTag |= 4096),
                        (s.expirationTime = e),
                        xi(s, Dl(s, a, e));
                      break n;
                    }
                }
                s = s.return;
              } while (null !== s);
            }
            $l = Os($l);
          } catch (n) {
            e = n;
            continue;
          }
          break;
        }
      }
      function Cs() {
        var n = Ol.current;
        return (Ol.current = Oa), null === n ? Oa : n;
      }
      function Ss(n, e) {
        n < Xl && 2 < n && (Xl = n),
          null !== e && n < Gl && 2 < n && ((Gl = n), (Jl = e));
      }
      function Ns(n) {
        n > Zl && (Zl = n);
      }
      function Ds() {
        for (; null !== $l; ) $l = Is($l);
      }
      function As() {
        for (; null !== $l && !Io(); ) $l = Is($l);
      }
      function Is(n) {
        var e = Al(n.alternate, n, Kl);
        return (
          (n.memoizedProps = n.pendingProps),
          null === e && (e = Os(n)),
          (Pl.current = null),
          e
        );
      }
      function Os(n) {
        $l = n;
        do {
          var e = $l.alternate;
          if (((n = $l.return), 0 == (2048 & $l.effectTag))) {
            n: {
              var t = e,
                r = Kl,
                i = (e = $l).pendingProps;
              switch (e.tag) {
                case 2:
                case 16:
                  break;
                case 15:
                case 0:
                  break;
                case 1:
                  wo(e.type) && ko();
                  break;
                case 3:
                  Vi(),
                    _o(),
                    (i = e.stateNode).pendingContext &&
                      ((i.context = i.pendingContext),
                      (i.pendingContext = null)),
                    (null === t || null === t.child) && Wa(e) && ul(e),
                    tl(e);
                  break;
                case 5:
                  Ki(e), (r = qi(Wi.current));
                  var l = e.type;
                  if (null !== t && null != e.stateNode)
                    rl(t, e, l, i, r), t.ref !== e.ref && (e.effectTag |= 128);
                  else if (i) {
                    var s = qi(Hi.current);
                    if (Wa(e)) {
                      var c = (i = e).stateNode;
                      t = i.type;
                      var d = i.memoizedProps,
                        u = r;
                      switch (
                        ((c[cr] = i), (c[dr] = d), (l = void 0), (r = c), t)
                      ) {
                        case 'iframe':
                        case 'object':
                        case 'embed':
                          Tt('load', r);
                          break;
                        case 'video':
                        case 'audio':
                          for (c = 0; c < ne.length; c++) Tt(ne[c], r);
                          break;
                        case 'source':
                          Tt('error', r);
                          break;
                        case 'img':
                        case 'image':
                        case 'link':
                          Tt('error', r), Tt('load', r);
                          break;
                        case 'form':
                          Tt('reset', r), Tt('submit', r);
                          break;
                        case 'details':
                          Tt('toggle', r);
                          break;
                        case 'input':
                          Nn(r, d), Tt('invalid', r), qt(u, 'onChange');
                          break;
                        case 'select':
                          (r._wrapperState = { wasMultiple: !!d.multiple }),
                            Tt('invalid', r),
                            qt(u, 'onChange');
                          break;
                        case 'textarea':
                          zn(r, d), Tt('invalid', r), qt(u, 'onChange');
                      }
                      for (l in (Ut(t, d), (c = null), d))
                        d.hasOwnProperty(l) &&
                          ((s = d[l]),
                          'children' === l
                            ? 'string' == typeof s
                              ? r.textContent !== s && (c = ['children', s])
                              : 'number' == typeof s &&
                                r.textContent !== '' + s &&
                                (c = ['children', '' + s])
                            : m.hasOwnProperty(l) && null != s && qt(u, l));
                      switch (t) {
                        case 'input':
                          Tn(r), In(r, d, !0);
                          break;
                        case 'textarea':
                          Tn(r), Rn(r);
                          break;
                        case 'select':
                        case 'option':
                          break;
                        default:
                          'function' == typeof d.onClick && (r.onclick = Bt);
                      }
                      (l = c), (i.updateQueue = l), (i = null !== l) && ul(e);
                    } else {
                      (t = e),
                        (u = l),
                        (d = i),
                        (c = 9 === r.nodeType ? r : r.ownerDocument),
                        s === Fn.html && (s = Hn(u)),
                        s === Fn.html
                          ? 'script' === u
                            ? (((d = c.createElement('div')).innerHTML =
                                '<script></script>'),
                              (c = d.removeChild(d.firstChild)))
                            : 'string' == typeof d.is
                            ? (c = c.createElement(u, { is: d.is }))
                            : ((c = c.createElement(u)),
                              'select' === u &&
                                ((u = c),
                                d.multiple
                                  ? (u.multiple = !0)
                                  : d.size && (u.size = d.size)))
                          : (c = c.createElementNS(s, u)),
                        ((d = c)[cr] = t),
                        (d[dr] = i),
                        el(d, e, !1, !1),
                        (e.stateNode = d);
                      var f = r,
                        p = Wt((u = l), (t = i));
                      switch (u) {
                        case 'iframe':
                        case 'object':
                        case 'embed':
                          Tt('load', d), (r = t);
                          break;
                        case 'video':
                        case 'audio':
                          for (r = 0; r < ne.length; r++) Tt(ne[r], d);
                          r = t;
                          break;
                        case 'source':
                          Tt('error', d), (r = t);
                          break;
                        case 'img':
                        case 'image':
                        case 'link':
                          Tt('error', d), Tt('load', d), (r = t);
                          break;
                        case 'form':
                          Tt('reset', d), Tt('submit', d), (r = t);
                          break;
                        case 'details':
                          Tt('toggle', d), (r = t);
                          break;
                        case 'input':
                          Nn(d, t),
                            (r = Sn(d, t)),
                            Tt('invalid', d),
                            qt(f, 'onChange');
                          break;
                        case 'option':
                          r = Pn(d, t);
                          break;
                        case 'select':
                          (d._wrapperState = { wasMultiple: !!t.multiple }),
                            (r = o({}, t, { value: void 0 })),
                            Tt('invalid', d),
                            qt(f, 'onChange');
                          break;
                        case 'textarea':
                          zn(d, t),
                            (r = Ln(d, t)),
                            Tt('invalid', d),
                            qt(f, 'onChange');
                          break;
                        default:
                          r = t;
                      }
                      Ut(u, r), (c = void 0), (s = u);
                      var g = d,
                        h = r;
                      for (c in h)
                        if (h.hasOwnProperty(c)) {
                          var b = h[c];
                          'style' === c
                            ? Ft(g, b)
                            : 'dangerouslySetInnerHTML' === c
                            ? null != (b = b ? b.__html : void 0) && qn(g, b)
                            : 'children' === c
                            ? 'string' == typeof b
                              ? ('textarea' !== s || '' !== b) && Bn(g, b)
                              : 'number' == typeof b && Bn(g, '' + b)
                            : 'suppressContentEditableWarning' !== c &&
                              'suppressHydrationWarning' !== c &&
                              'autoFocus' !== c &&
                              (m.hasOwnProperty(c)
                                ? null != b && qt(f, c)
                                : null != b && _n(g, c, b, p));
                        }
                      switch (u) {
                        case 'input':
                          Tn(d), In(d, t, !1);
                          break;
                        case 'textarea':
                          Tn(d), Rn(d);
                          break;
                        case 'option':
                          null != t.value &&
                            d.setAttribute('value', '' + kn(t.value));
                          break;
                        case 'select':
                          ((r = d).multiple = !!t.multiple),
                            null != (d = t.value)
                              ? jn(r, !!t.multiple, d, !1)
                              : null != t.defaultValue &&
                                jn(r, !!t.multiple, t.defaultValue, !0);
                          break;
                        default:
                          'function' == typeof r.onClick && (d.onclick = Bt);
                      }
                      (i = tr(l, i)) && ul(e);
                    }
                    null !== e.ref && (e.effectTag |= 128);
                  } else if (null === e.stateNode) throw Error(a(166));
                  break;
                case 6:
                  if (t && null != e.stateNode) ol(t, e, t.memoizedProps, i);
                  else {
                    if ('string' != typeof i && null === e.stateNode)
                      throw Error(a(166));
                    (r = qi(Wi.current)),
                      qi(Hi.current),
                      Wa(e)
                        ? ((l = (i = e).stateNode),
                          (r = i.memoizedProps),
                          (l[cr] = i),
                          (i = l.nodeValue !== r) && ul(e))
                        : ((l = e),
                          ((i = (9 === r.nodeType
                            ? r
                            : r.ownerDocument
                          ).createTextNode(i))[cr] = l),
                          (e.stateNode = i));
                  }
                  break;
                case 11:
                  break;
                case 13:
                  if (
                    (po(Qi), (i = e.memoizedState), 0 != (64 & e.effectTag))
                  ) {
                    e.expirationTime = r;
                    break n;
                  }
                  (i = null !== i),
                    (l = !1),
                    null === t
                      ? void 0 !== e.memoizedProps.fallback && Wa(e)
                      : ((l = null !== (r = t.memoizedState)),
                        i ||
                          null === r ||
                          (null !== (r = t.child.sibling) &&
                            (null !== (d = e.firstEffect)
                              ? ((e.firstEffect = r), (r.nextEffect = d))
                              : ((e.firstEffect = e.lastEffect = r),
                                (r.nextEffect = null)),
                            (r.effectTag = 8)))),
                    i &&
                      !l &&
                      0 != (2 & e.mode) &&
                      ((null === t &&
                        !0 !== e.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Qi.current)
                        ? Ql === Rl && (Ql = Ul)
                        : ((Ql !== Rl && Ql !== Ul) || (Ql = Wl),
                          0 !== Zl && null !== Vl && (ec(Vl, Kl), tc(Vl, Zl)))),
                    (i || l) && (e.effectTag |= 4);
                  break;
                case 7:
                case 8:
                case 12:
                  break;
                case 4:
                  Vi(), tl(e);
                  break;
                case 10:
                  ci(e);
                  break;
                case 9:
                case 14:
                  break;
                case 17:
                  wo(e.type) && ko();
                  break;
                case 19:
                  if ((po(Qi), null === (i = e.memoizedState))) break;
                  if (
                    ((l = 0 != (64 & e.effectTag)), null === (d = i.rendering))
                  ) {
                    if (l) fl(i, !1);
                    else if (
                      Ql !== Rl ||
                      (null !== t && 0 != (64 & t.effectTag))
                    )
                      for (t = e.child; null !== t; ) {
                        if (null !== (d = Yi(t))) {
                          for (
                            e.effectTag |= 64,
                              fl(i, !1),
                              null !== (l = d.updateQueue) &&
                                ((e.updateQueue = l), (e.effectTag |= 4)),
                              null === i.lastEffect && (e.firstEffect = null),
                              e.lastEffect = i.lastEffect,
                              i = r,
                              l = e.child;
                            null !== l;

                          )
                            (t = i),
                              ((r = l).effectTag &= 2),
                              (r.nextEffect = null),
                              (r.firstEffect = null),
                              (r.lastEffect = null),
                              null === (d = r.alternate)
                                ? ((r.childExpirationTime = 0),
                                  (r.expirationTime = t),
                                  (r.child = null),
                                  (r.memoizedProps = null),
                                  (r.memoizedState = null),
                                  (r.updateQueue = null),
                                  (r.dependencies = null))
                                : ((r.childExpirationTime =
                                    d.childExpirationTime),
                                  (r.expirationTime = d.expirationTime),
                                  (r.child = d.child),
                                  (r.memoizedProps = d.memoizedProps),
                                  (r.memoizedState = d.memoizedState),
                                  (r.updateQueue = d.updateQueue),
                                  (t = d.dependencies),
                                  (r.dependencies =
                                    null === t
                                      ? null
                                      : {
                                          expirationTime: t.expirationTime,
                                          firstContext: t.firstContext,
                                          responders: t.responders,
                                        })),
                              (l = l.sibling);
                          go(Qi, (1 & Qi.current) | 2), (e = e.child);
                          break n;
                        }
                        t = t.sibling;
                      }
                  } else {
                    if (!l)
                      if (null !== (t = Yi(d))) {
                        if (
                          ((e.effectTag |= 64),
                          (l = !0),
                          null !== (r = t.updateQueue) &&
                            ((e.updateQueue = r), (e.effectTag |= 4)),
                          fl(i, !0),
                          null === i.tail &&
                            'hidden' === i.tailMode &&
                            !d.alternate)
                        ) {
                          null !== (e = e.lastEffect = i.lastEffect) &&
                            (e.nextEffect = null);
                          break;
                        }
                      } else
                        $o() > i.tailExpiration &&
                          1 < r &&
                          ((e.effectTag |= 64),
                          (l = !0),
                          fl(i, !1),
                          (e.expirationTime = e.childExpirationTime = r - 1));
                    i.isBackwards
                      ? ((d.sibling = e.child), (e.child = d))
                      : (null !== (r = i.last)
                          ? (r.sibling = d)
                          : (e.child = d),
                        (i.last = d));
                  }
                  if (null !== i.tail) {
                    0 === i.tailExpiration && (i.tailExpiration = $o() + 500),
                      (r = i.tail),
                      (i.rendering = r),
                      (i.tail = r.sibling),
                      (i.lastEffect = e.lastEffect),
                      (r.sibling = null),
                      (i = Qi.current),
                      go(Qi, (i = l ? (1 & i) | 2 : 1 & i)),
                      (e = r);
                    break n;
                  }
                  break;
                case 20:
                case 21:
                  break;
                default:
                  throw Error(a(156, e.tag));
              }
              e = null;
            }
            if (((i = $l), 1 === Kl || 1 !== i.childExpirationTime)) {
              for (l = 0, r = i.child; null !== r; )
                (t = r.expirationTime) > l && (l = t),
                  (d = r.childExpirationTime) > l && (l = d),
                  (r = r.sibling);
              i.childExpirationTime = l;
            }
            if (null !== e) return e;
            null !== n &&
              0 == (2048 & n.effectTag) &&
              (null === n.firstEffect && (n.firstEffect = $l.firstEffect),
              null !== $l.lastEffect &&
                (null !== n.lastEffect &&
                  (n.lastEffect.nextEffect = $l.firstEffect),
                (n.lastEffect = $l.lastEffect)),
              1 < $l.effectTag &&
                (null !== n.lastEffect
                  ? (n.lastEffect.nextEffect = $l)
                  : (n.firstEffect = $l),
                (n.lastEffect = $l)));
          } else {
            if (null !== (e = ml($l))) return (e.effectTag &= 2047), e;
            null !== n &&
              ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 2048));
          }
          if (null !== (e = $l.sibling)) return e;
          $l = n;
        } while (null !== $l);
        return Ql === Rl && (Ql = ql), null;
      }
      function Ps(n) {
        var e = n.expirationTime;
        return e > (n = n.childExpirationTime) ? e : n;
      }
      function js(n) {
        var e = Ko();
        return Yo(99, Ls.bind(null, n, e)), null;
      }
      function Ls(n, e) {
        do {
          Ms();
        } while (null !== ss);
        if ((Bl & (zl | Ml)) !== jl) throw Error(a(327));
        var t = n.finishedWork,
          r = n.finishedExpirationTime;
        if (null === t) return null;
        if (
          ((n.finishedWork = null),
          (n.finishedExpirationTime = 0),
          t === n.current)
        )
          throw Error(a(177));
        (n.callbackNode = null),
          (n.callbackExpirationTime = 0),
          (n.callbackPriority = 90),
          (n.nextKnownPendingLevel = 0);
        var o = Ps(t);
        if (
          ((n.firstPendingTime = o),
          r <= n.lastSuspendedTime
            ? (n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0)
            : r <= n.firstSuspendedTime && (n.firstSuspendedTime = r - 1),
          r <= n.lastPingedTime && (n.lastPingedTime = 0),
          r <= n.lastExpiredTime && (n.lastExpiredTime = 0),
          n === Vl && (($l = Vl = null), (Kl = 0)),
          1 < t.effectTag
            ? null !== t.lastEffect
              ? ((t.lastEffect.nextEffect = t), (o = t.firstEffect))
              : (o = t)
            : (o = t.firstEffect),
          null !== o)
        ) {
          var i = Bl;
          (Bl |= Ml), (Pl.current = null), (nr = Et);
          var l = Qt();
          if (Yt(l)) {
            if ('selectionStart' in l)
              var s = { start: l.selectionStart, end: l.selectionEnd };
            else
              n: {
                var c =
                  (s = ((s = l.ownerDocument) && s.defaultView) || window)
                    .getSelection && s.getSelection();
                if (c && 0 !== c.rangeCount) {
                  s = c.anchorNode;
                  var d = c.anchorOffset,
                    u = c.focusNode;
                  c = c.focusOffset;
                  try {
                    s.nodeType, u.nodeType;
                  } catch (n) {
                    s = null;
                    break n;
                  }
                  var f = 0,
                    m = -1,
                    p = -1,
                    g = 0,
                    h = 0,
                    b = l,
                    v = null;
                  e: for (;;) {
                    for (
                      var x;
                      b !== s || (0 !== d && 3 !== b.nodeType) || (m = f + d),
                        b !== u || (0 !== c && 3 !== b.nodeType) || (p = f + c),
                        3 === b.nodeType && (f += b.nodeValue.length),
                        null !== (x = b.firstChild);

                    )
                      (v = b), (b = x);
                    for (;;) {
                      if (b === l) break e;
                      if (
                        (v === s && ++g === d && (m = f),
                        v === u && ++h === c && (p = f),
                        null !== (x = b.nextSibling))
                      )
                        break;
                      v = (b = v).parentNode;
                    }
                    b = x;
                  }
                  s = -1 === m || -1 === p ? null : { start: m, end: p };
                } else s = null;
              }
            s = s || { start: 0, end: 0 };
          } else s = null;
          (er = { focusedElem: l, selectionRange: s }), (Et = !1), (rs = o);
          do {
            try {
              zs();
            } catch (n) {
              if (null === rs) throw Error(a(330));
              Hs(rs, n), (rs = rs.nextEffect);
            }
          } while (null !== rs);
          rs = o;
          do {
            try {
              for (l = n, s = e; null !== rs; ) {
                var y = rs.effectTag;
                if ((16 & y && Bn(rs.stateNode, ''), 128 & y)) {
                  var w = rs.alternate;
                  if (null !== w) {
                    var k = w.ref;
                    null !== k &&
                      ('function' == typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & y) {
                  case 2:
                    _l(rs), (rs.effectTag &= -3);
                    break;
                  case 6:
                    _l(rs), (rs.effectTag &= -3), Tl(rs.alternate, rs);
                    break;
                  case 1024:
                    rs.effectTag &= -1025;
                    break;
                  case 1028:
                    (rs.effectTag &= -1025), Tl(rs.alternate, rs);
                    break;
                  case 4:
                    Tl(rs.alternate, rs);
                    break;
                  case 8:
                    El(l, (d = rs), s), wl(d);
                }
                rs = rs.nextEffect;
              }
            } catch (n) {
              if (null === rs) throw Error(a(330));
              Hs(rs, n), (rs = rs.nextEffect);
            }
          } while (null !== rs);
          if (
            ((k = er),
            (w = Qt()),
            (y = k.focusedElem),
            (s = k.selectionRange),
            w !== y &&
              y &&
              y.ownerDocument &&
              (function n(e, t) {
                return (
                  !(!e || !t) &&
                  (e === t ||
                    ((!e || 3 !== e.nodeType) &&
                      (t && 3 === t.nodeType
                        ? n(e, t.parentNode)
                        : 'contains' in e
                        ? e.contains(t)
                        : !!e.compareDocumentPosition &&
                          !!(16 & e.compareDocumentPosition(t)))))
                );
              })(y.ownerDocument.documentElement, y))
          ) {
            null !== s &&
              Yt(y) &&
              ((w = s.start),
              void 0 === (k = s.end) && (k = w),
              'selectionStart' in y
                ? ((y.selectionStart = w),
                  (y.selectionEnd = Math.min(k, y.value.length)))
                : (k =
                    ((w = y.ownerDocument || document) && w.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (d = y.textContent.length),
                  (l = Math.min(s.start, d)),
                  (s = void 0 === s.end ? l : Math.min(s.end, d)),
                  !k.extend && l > s && ((d = s), (s = l), (l = d)),
                  (d = Kt(y, l)),
                  (u = Kt(y, s)),
                  d &&
                    u &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== d.node ||
                      k.anchorOffset !== d.offset ||
                      k.focusNode !== u.node ||
                      k.focusOffset !== u.offset) &&
                    ((w = w.createRange()).setStart(d.node, d.offset),
                    k.removeAllRanges(),
                    l > s
                      ? (k.addRange(w), k.extend(u.node, u.offset))
                      : (w.setEnd(u.node, u.offset), k.addRange(w))))),
              (w = []);
            for (k = y; (k = k.parentNode); )
              1 === k.nodeType &&
                w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              'function' == typeof y.focus && y.focus(), y = 0;
              y < w.length;
              y++
            )
              ((k = w[y]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (er = null), (Et = !!nr), (nr = null), (n.current = t), (rs = o);
          do {
            try {
              for (y = r; null !== rs; ) {
                var _ = rs.effectTag;
                if (36 & _) {
                  var E = rs.alternate;
                  switch (((k = y), (w = rs).tag)) {
                    case 0:
                    case 11:
                    case 15:
                      xl(16, 32, w);
                      break;
                    case 1:
                      var T = w.stateNode;
                      if (4 & w.effectTag)
                        if (null === E) T.componentDidMount();
                        else {
                          var C =
                            w.elementType === w.type
                              ? E.memoizedProps
                              : ti(w.type, E.memoizedProps);
                          T.componentDidUpdate(
                            C,
                            E.memoizedState,
                            T.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var S = w.updateQueue;
                      null !== S && _i(0, S, T);
                      break;
                    case 3:
                      var N = w.updateQueue;
                      if (null !== N) {
                        if (((l = null), null !== w.child))
                          switch (w.child.tag) {
                            case 5:
                              l = w.child.stateNode;
                              break;
                            case 1:
                              l = w.child.stateNode;
                          }
                        _i(0, N, l);
                      }
                      break;
                    case 5:
                      var D = w.stateNode;
                      null === E &&
                        4 & w.effectTag &&
                        tr(w.type, w.memoizedProps) &&
                        D.focus();
                      break;
                    case 6:
                    case 4:
                    case 12:
                      break;
                    case 13:
                      if (null === w.memoizedState) {
                        var A = w.alternate;
                        if (null !== A) {
                          var I = A.memoizedState;
                          if (null !== I) {
                            var O = I.dehydrated;
                            null !== O && Ce(O);
                          }
                        }
                      }
                      break;
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                      break;
                    default:
                      throw Error(a(163));
                  }
                }
                if (128 & _) {
                  w = void 0;
                  var P = rs.ref;
                  if (null !== P) {
                    var j = rs.stateNode;
                    switch (rs.tag) {
                      case 5:
                        w = j;
                        break;
                      default:
                        w = j;
                    }
                    'function' == typeof P ? P(w) : (P.current = w);
                  }
                }
                rs = rs.nextEffect;
              }
            } catch (n) {
              if (null === rs) throw Error(a(330));
              Hs(rs, n), (rs = rs.nextEffect);
            }
          } while (null !== rs);
          (rs = null), Uo(), (Bl = i);
        } else n.current = t;
        if (ls) (ls = !1), (ss = n), (cs = e);
        else
          for (rs = o; null !== rs; )
            (e = rs.nextEffect), (rs.nextEffect = null), (rs = e);
        if (
          (0 === (e = n.firstPendingTime) && (as = null),
          1073741823 === e
            ? n === fs
              ? us++
              : ((us = 0), (fs = n))
            : (us = 0),
          'function' == typeof qs && qs(t.stateNode, r),
          xs(n),
          os)
        )
          throw ((os = !1), (n = is), (is = null), n);
        return (Bl & Ll) !== jl ? null : (Jo(), null);
      }
      function zs() {
        for (; null !== rs; ) {
          var n = rs.effectTag;
          0 != (256 & n) && vl(rs.alternate, rs),
            0 == (512 & n) ||
              ls ||
              ((ls = !0),
              Xo(97, function() {
                return Ms(), null;
              })),
            (rs = rs.nextEffect);
        }
      }
      function Ms() {
        if (90 !== cs) {
          var n = 97 < cs ? 97 : cs;
          return (cs = 90), Yo(n, Rs);
        }
      }
      function Rs() {
        if (null === ss) return !1;
        var n = ss;
        if (((ss = null), (Bl & (zl | Ml)) !== jl)) throw Error(a(331));
        var e = Bl;
        for (Bl |= Ml, n = n.current.firstEffect; null !== n; ) {
          try {
            var t = n;
            if (0 != (512 & t.effectTag))
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  xl(128, 0, t), xl(0, 64, t);
              }
          } catch (e) {
            if (null === n) throw Error(a(330));
            Hs(n, e);
          }
          (t = n.nextEffect), (n.nextEffect = null), (n = t);
        }
        return (Bl = e), Jo(), !0;
      }
      function Fs(n, e, t) {
        vi(n, (e = Nl(n, (e = pl(t, e)), 1073741823))),
          null !== (n = bs(n, 1073741823)) && xs(n);
      }
      function Hs(n, e) {
        if (3 === n.tag) Fs(n, n, e);
        else
          for (var t = n.return; null !== t; ) {
            if (3 === t.tag) {
              Fs(t, n, e);
              break;
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if (
                'function' == typeof t.type.getDerivedStateFromError ||
                ('function' == typeof r.componentDidCatch &&
                  (null === as || !as.has(r)))
              ) {
                vi(t, (n = Dl(t, (n = pl(e, n)), 1073741823))),
                  null !== (t = bs(t, 1073741823)) && xs(t);
                break;
              }
            }
            t = t.return;
          }
      }
      function Us(n, e, t) {
        var r = n.pingCache;
        null !== r && r.delete(e),
          Vl === n && Kl === t
            ? Ql === Wl || (Ql === Ul && 1073741823 === Xl && $o() - es < ts)
              ? Es(n, Kl)
              : (ns = !0)
            : nc(n, t) &&
              ((0 !== (e = n.lastPingedTime) && e < t) ||
                ((n.lastPingedTime = t),
                n.finishedExpirationTime === t &&
                  ((n.finishedExpirationTime = 0), (n.finishedWork = null)),
                xs(n)));
      }
      function Ws(n, e) {
        var t = n.stateNode;
        null !== t && t.delete(e),
          0 === (e = 0) && (e = gs((e = ps()), n, null)),
          null !== (n = bs(n, e)) && xs(n);
      }
      Al = function(n, e, t) {
        var r = e.expirationTime;
        if (null !== n) {
          var o = e.pendingProps;
          if (n.memoizedProps !== o || vo.current) Va = !0;
          else {
            if (r < t) {
              switch (((Va = !1), e.tag)) {
                case 3:
                  nl(e), qa();
                  break;
                case 5:
                  if (($i(e), 4 & e.mode && 1 !== t && o.hidden))
                    return (e.expirationTime = e.childExpirationTime = 1), null;
                  break;
                case 1:
                  wo(e.type) && Co(e);
                  break;
                case 4:
                  Bi(e, e.stateNode.containerInfo);
                  break;
                case 10:
                  si(e, e.memoizedProps.value);
                  break;
                case 13:
                  if (null !== e.memoizedState)
                    return 0 !== (r = e.child.childExpirationTime) && r >= t
                      ? al(n, e, t)
                      : (go(Qi, 1 & Qi.current),
                        null !== (e = dl(n, e, t)) ? e.sibling : null);
                  go(Qi, 1 & Qi.current);
                  break;
                case 19:
                  if (
                    ((r = e.childExpirationTime >= t), 0 != (64 & n.effectTag))
                  ) {
                    if (r) return cl(n, e, t);
                    e.effectTag |= 64;
                  }
                  if (
                    (null !== (o = e.memoizedState) &&
                      ((o.rendering = null), (o.tail = null)),
                    go(Qi, Qi.current),
                    !r)
                  )
                    return null;
              }
              return dl(n, e, t);
            }
            Va = !1;
          }
        } else Va = !1;
        switch (((e.expirationTime = 0), e.tag)) {
          case 2:
            if (
              ((r = e.type),
              null !== n &&
                ((n.alternate = null),
                (e.alternate = null),
                (e.effectTag |= 2)),
              (n = e.pendingProps),
              (o = yo(e, bo.current)),
              ui(e, t),
              (o = pa(null, e, r, n, o, t)),
              (e.effectTag |= 1),
              'object' == typeof o &&
                null !== o &&
                'function' == typeof o.render &&
                void 0 === o.$$typeof)
            ) {
              if (((e.tag = 1), ga(), wo(r))) {
                var i = !0;
                Co(e);
              } else i = !1;
              e.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null;
              var l = r.getDerivedStateFromProps;
              'function' == typeof l && Si(e, r, l, n),
                (o.updater = Ni),
                (e.stateNode = o),
                (o._reactInternalFiber = e),
                Oi(e, r, n, t),
                (e = Za(null, e, r, !0, i, t));
            } else (e.tag = 0), $a(null, e, o, t), (e = e.child);
            return e;
          case 16:
            if (
              ((o = e.elementType),
              null !== n &&
                ((n.alternate = null),
                (e.alternate = null),
                (e.effectTag |= 2)),
              (n = e.pendingProps),
              (function(n) {
                if (-1 === n._status) {
                  n._status = 0;
                  var e = n._ctor;
                  (e = e()),
                    (n._result = e),
                    e.then(
                      function(e) {
                        0 === n._status &&
                          ((e = e.default), (n._status = 1), (n._result = e));
                      },
                      function(e) {
                        0 === n._status && ((n._status = 2), (n._result = e));
                      },
                    );
                }
              })(o),
              1 !== o._status)
            )
              throw o._result;
            switch (
              ((o = o._result),
              (e.type = o),
              (i = e.tag = (function(n) {
                if ('function' == typeof n) return Ks(n) ? 1 : 0;
                if (null != n) {
                  if ((n = n.$$typeof) === B) return 11;
                  if (n === K) return 14;
                }
                return 2;
              })(o)),
              (n = ti(o, n)),
              i)
            ) {
              case 0:
                e = Ga(null, e, o, n, t);
                break;
              case 1:
                e = Ja(null, e, o, n, t);
                break;
              case 11:
                e = Ka(null, e, o, n, t);
                break;
              case 14:
                e = Qa(null, e, o, ti(o.type, n), r, t);
                break;
              default:
                throw Error(a(306, o, ''));
            }
            return e;
          case 0:
            return (
              (r = e.type),
              (o = e.pendingProps),
              Ga(n, e, r, (o = e.elementType === r ? o : ti(r, o)), t)
            );
          case 1:
            return (
              (r = e.type),
              (o = e.pendingProps),
              Ja(n, e, r, (o = e.elementType === r ? o : ti(r, o)), t)
            );
          case 3:
            if ((nl(e), null === (r = e.updateQueue))) throw Error(a(282));
            if (
              ((o = null !== (o = e.memoizedState) ? o.element : null),
              ki(e, r, e.pendingProps, null, t),
              (r = e.memoizedState.element) === o)
            )
              qa(), (e = dl(n, e, t));
            else {
              if (
                ((o = e.stateNode.hydrate) &&
                  ((za = ar(e.stateNode.containerInfo.firstChild)),
                  (La = e),
                  (o = Ma = !0)),
                o)
              )
                for (t = Ri(e, null, r, t), e.child = t; t; )
                  (t.effectTag = (-3 & t.effectTag) | 1024), (t = t.sibling);
              else $a(n, e, r, t), qa();
              e = e.child;
            }
            return e;
          case 5:
            return (
              $i(e),
              null === n && Ha(e),
              (r = e.type),
              (o = e.pendingProps),
              (i = null !== n ? n.memoizedProps : null),
              (l = o.children),
              rr(r, o)
                ? (l = null)
                : null !== i && rr(r, i) && (e.effectTag |= 16),
              Xa(n, e),
              4 & e.mode && 1 !== t && o.hidden
                ? ((e.expirationTime = e.childExpirationTime = 1), (e = null))
                : ($a(n, e, l, t), (e = e.child)),
              e
            );
          case 6:
            return null === n && Ha(e), null;
          case 13:
            return al(n, e, t);
          case 4:
            return (
              Bi(e, e.stateNode.containerInfo),
              (r = e.pendingProps),
              null === n ? (e.child = Mi(e, null, r, t)) : $a(n, e, r, t),
              e.child
            );
          case 11:
            return (
              (r = e.type),
              (o = e.pendingProps),
              Ka(n, e, r, (o = e.elementType === r ? o : ti(r, o)), t)
            );
          case 7:
            return $a(n, e, e.pendingProps, t), e.child;
          case 8:
          case 12:
            return $a(n, e, e.pendingProps.children, t), e.child;
          case 10:
            n: {
              if (
                ((r = e.type._context),
                (o = e.pendingProps),
                (l = e.memoizedProps),
                si(e, (i = o.value)),
                null !== l)
              ) {
                var s = l.value;
                if (
                  0 ===
                  (i = no(s, i)
                    ? 0
                    : 0 |
                      ('function' == typeof r._calculateChangedBits
                        ? r._calculateChangedBits(s, i)
                        : 1073741823))
                ) {
                  if (l.children === o.children && !vo.current) {
                    e = dl(n, e, t);
                    break n;
                  }
                } else
                  for (null !== (s = e.child) && (s.return = e); null !== s; ) {
                    var c = s.dependencies;
                    if (null !== c) {
                      l = s.child;
                      for (var d = c.firstContext; null !== d; ) {
                        if (d.context === r && 0 != (d.observedBits & i)) {
                          1 === s.tag &&
                            (((d = hi(t, null)).tag = 2), vi(s, d)),
                            s.expirationTime < t && (s.expirationTime = t),
                            null !== (d = s.alternate) &&
                              d.expirationTime < t &&
                              (d.expirationTime = t),
                            di(s.return, t),
                            c.expirationTime < t && (c.expirationTime = t);
                          break;
                        }
                        d = d.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === e.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === e) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              }
              $a(n, e, o.children, t), (e = e.child);
            }
            return e;
          case 9:
            return (
              (o = e.type),
              (r = (i = e.pendingProps).children),
              ui(e, t),
              (r = r((o = fi(o, i.unstable_observedBits)))),
              (e.effectTag |= 1),
              $a(n, e, r, t),
              e.child
            );
          case 14:
            return (
              (i = ti((o = e.type), e.pendingProps)),
              Qa(n, e, o, (i = ti(o.type, i)), r, t)
            );
          case 15:
            return Ya(n, e, e.type, e.pendingProps, r, t);
          case 17:
            return (
              (r = e.type),
              (o = e.pendingProps),
              (o = e.elementType === r ? o : ti(r, o)),
              null !== n &&
                ((n.alternate = null),
                (e.alternate = null),
                (e.effectTag |= 2)),
              (e.tag = 1),
              wo(r) ? ((n = !0), Co(e)) : (n = !1),
              ui(e, t),
              Ai(e, r, o),
              Oi(e, r, o, t),
              Za(null, e, r, !0, n, t)
            );
          case 19:
            return cl(n, e, t);
        }
        throw Error(a(156, e.tag));
      };
      var qs = null,
        Bs = null;
      function Vs(n, e, t, r) {
        (this.tag = n),
          (this.key = t),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = e),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function $s(n, e, t, r) {
        return new Vs(n, e, t, r);
      }
      function Ks(n) {
        return !(!(n = n.prototype) || !n.isReactComponent);
      }
      function Qs(n, e) {
        var t = n.alternate;
        return (
          null === t
            ? (((t = $s(n.tag, e, n.key, n.mode)).elementType = n.elementType),
              (t.type = n.type),
              (t.stateNode = n.stateNode),
              (t.alternate = n),
              (n.alternate = t))
            : ((t.pendingProps = e),
              (t.effectTag = 0),
              (t.nextEffect = null),
              (t.firstEffect = null),
              (t.lastEffect = null)),
          (t.childExpirationTime = n.childExpirationTime),
          (t.expirationTime = n.expirationTime),
          (t.child = n.child),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (e = n.dependencies),
          (t.dependencies =
            null === e
              ? null
              : {
                  expirationTime: e.expirationTime,
                  firstContext: e.firstContext,
                  responders: e.responders,
                }),
          (t.sibling = n.sibling),
          (t.index = n.index),
          (t.ref = n.ref),
          t
        );
      }
      function Ys(n, e, t, r, o, i) {
        var l = 2;
        if (((r = n), 'function' == typeof n)) Ks(n) && (l = 1);
        else if ('string' == typeof n) l = 5;
        else
          n: switch (n) {
            case R:
              return Xs(t.children, o, i, e);
            case q:
              (l = 8), (o |= 7);
              break;
            case F:
              (l = 8), (o |= 1);
              break;
            case H:
              return (
                ((n = $s(12, t, e, 8 | o)).elementType = H),
                (n.type = H),
                (n.expirationTime = i),
                n
              );
            case V:
              return (
                ((n = $s(13, t, e, o)).type = V),
                (n.elementType = V),
                (n.expirationTime = i),
                n
              );
            case $:
              return (
                ((n = $s(19, t, e, o)).elementType = $),
                (n.expirationTime = i),
                n
              );
            default:
              if ('object' == typeof n && null !== n)
                switch (n.$$typeof) {
                  case U:
                    l = 10;
                    break n;
                  case W:
                    l = 9;
                    break n;
                  case B:
                    l = 11;
                    break n;
                  case K:
                    l = 14;
                    break n;
                  case Q:
                    (l = 16), (r = null);
                    break n;
                }
              throw Error(a(130, null == n ? n : typeof n, ''));
          }
        return (
          ((e = $s(l, t, e, o)).elementType = n),
          (e.type = r),
          (e.expirationTime = i),
          e
        );
      }
      function Xs(n, e, t, r) {
        return ((n = $s(7, n, r, e)).expirationTime = t), n;
      }
      function Gs(n, e, t) {
        return ((n = $s(6, n, null, e)).expirationTime = t), n;
      }
      function Js(n, e, t) {
        return (
          ((e = $s(
            4,
            null !== n.children ? n.children : [],
            n.key,
            e,
          )).expirationTime = t),
          (e.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation,
          }),
          e
        );
      }
      function Zs(n, e, t) {
        (this.tag = e),
          (this.current = null),
          (this.containerInfo = n),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = t),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
      }
      function nc(n, e) {
        var t = n.firstSuspendedTime;
        return (n = n.lastSuspendedTime), 0 !== t && t >= e && n <= e;
      }
      function ec(n, e) {
        var t = n.firstSuspendedTime,
          r = n.lastSuspendedTime;
        t < e && (n.firstSuspendedTime = e),
          (r > e || 0 === t) && (n.lastSuspendedTime = e),
          e <= n.lastPingedTime && (n.lastPingedTime = 0),
          e <= n.lastExpiredTime && (n.lastExpiredTime = 0);
      }
      function tc(n, e) {
        e > n.firstPendingTime && (n.firstPendingTime = e);
        var t = n.firstSuspendedTime;
        0 !== t &&
          (e >= t
            ? (n.firstSuspendedTime = n.lastSuspendedTime = n.nextKnownPendingLevel = 0)
            : e >= n.lastSuspendedTime && (n.lastSuspendedTime = e + 1),
          e > n.nextKnownPendingLevel && (n.nextKnownPendingLevel = e));
      }
      function rc(n, e) {
        var t = n.lastExpiredTime;
        (0 === t || t > e) && (n.lastExpiredTime = e);
      }
      function oc(n, e, t, r) {
        var o = e.current,
          i = ps(),
          l = Ti.suspense;
        i = gs(i, o, l);
        n: if (t) {
          e: {
            if (ee((t = t._reactInternalFiber)) !== t || 1 !== t.tag)
              throw Error(a(170));
            var s = t;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break e;
                case 1:
                  if (wo(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(a(171));
          }
          if (1 === t.tag) {
            var c = t.type;
            if (wo(c)) {
              t = To(t, c, s);
              break n;
            }
          }
          t = s;
        } else t = ho;
        return (
          null === e.context ? (e.context = t) : (e.pendingContext = t),
          ((e = hi(i, l)).payload = { element: n }),
          null !== (r = void 0 === r ? null : r) && (e.callback = r),
          vi(o, e),
          hs(o, i),
          i
        );
      }
      function ic(n) {
        if (!(n = n.current).child) return null;
        switch (n.child.tag) {
          case 5:
          default:
            return n.child.stateNode;
        }
      }
      function ac(n, e) {
        null !== (n = n.memoizedState) &&
          null !== n.dehydrated &&
          n.retryTime < e &&
          (n.retryTime = e);
      }
      function lc(n, e) {
        ac(n, e), (n = n.alternate) && ac(n, e);
      }
      function sc(n, e, t) {
        var r = new Zs(n, e, (t = null != t && !0 === t.hydrate)),
          o = $s(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0);
        (r.current = o),
          (o.stateNode = r),
          (n[ur] = r.current),
          t &&
            0 !== e &&
            (function(n) {
              var e = jt(n);
              he.forEach(function(t) {
                Lt(t, n, e);
              }),
                be.forEach(function(t) {
                  Lt(t, n, e);
                });
            })(9 === n.nodeType ? n : n.ownerDocument),
          (this._internalRoot = r);
      }
      function cc(n) {
        return !(
          !n ||
          (1 !== n.nodeType &&
            9 !== n.nodeType &&
            11 !== n.nodeType &&
            (8 !== n.nodeType ||
              ' react-mount-point-unstable ' !== n.nodeValue))
        );
      }
      function dc(n, e, t, r, o) {
        var i = t._reactRootContainer;
        if (i) {
          var a = i._internalRoot;
          if ('function' == typeof o) {
            var l = o;
            o = function() {
              var n = ic(a);
              l.call(n);
            };
          }
          oc(e, a, n, o);
        } else {
          if (
            ((i = t._reactRootContainer = (function(n, e) {
              if (
                (e ||
                  (e = !(
                    !(e = n
                      ? 9 === n.nodeType
                        ? n.documentElement
                        : n.firstChild
                      : null) ||
                    1 !== e.nodeType ||
                    !e.hasAttribute('data-reactroot')
                  )),
                !e)
              )
                for (var t; (t = n.lastChild); ) n.removeChild(t);
              return new sc(n, 0, e ? { hydrate: !0 } : void 0);
            })(t, r)),
            (a = i._internalRoot),
            'function' == typeof o)
          ) {
            var s = o;
            o = function() {
              var n = ic(a);
              s.call(n);
            };
          }
          _s(function() {
            oc(e, a, n, o);
          });
        }
        return ic(a);
      }
      function uc(n, e) {
        var t =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cc(e)) throw Error(a(200));
        return (function(n, e, t) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: M,
            key: null == r ? null : '' + r,
            children: n,
            containerInfo: e,
            implementation: t,
          };
        })(n, e, null, t);
      }
      (sc.prototype.render = function(n, e) {
        oc(n, this._internalRoot, null, void 0 === e ? null : e);
      }),
        (sc.prototype.unmount = function(n) {
          var e = this._internalRoot,
            t = void 0 === n ? null : n,
            r = e.containerInfo;
          oc(null, e, null, function() {
            (r[ur] = null), null !== t && t();
          });
        }),
        (ie = function(n) {
          if (13 === n.tag) {
            var e = ei(ps(), 150, 100);
            hs(n, e), lc(n, e);
          }
        }),
        (ae = function(n) {
          if (13 === n.tag) {
            ps();
            var e = ni++;
            hs(n, e), lc(n, e);
          }
        }),
        (le = function(n) {
          if (13 === n.tag) {
            var e = ps();
            hs(n, (e = gs(e, n, null))), lc(n, e);
          }
        }),
        (nn = function(n, e, t) {
          switch (e) {
            case 'input':
              if ((An(n, t), (e = t.name), 'radio' === t.type && null != e)) {
                for (t = n; t.parentNode; ) t = t.parentNode;
                for (
                  t = t.querySelectorAll(
                    'input[name=' + JSON.stringify('' + e) + '][type="radio"]',
                  ),
                    e = 0;
                  e < t.length;
                  e++
                ) {
                  var r = t[e];
                  if (r !== n && r.form === n.form) {
                    var o = gr(r);
                    if (!o) throw Error(a(90));
                    Cn(r), An(r, o);
                  }
                }
              }
              break;
            case 'textarea':
              Mn(n, t);
              break;
            case 'select':
              null != (e = t.value) && jn(n, !!t.multiple, e, !1);
          }
        }),
        (ln = ks),
        (sn = function(n, e, t, r) {
          var o = Bl;
          Bl |= 4;
          try {
            return Yo(98, n.bind(null, e, t, r));
          } finally {
            (Bl = o) === jl && Jo();
          }
        }),
        (cn = function() {
          (Bl & (1 | zl | Ml)) === jl &&
            ((function() {
              if (null !== ds) {
                var n = ds;
                (ds = null),
                  n.forEach(function(n, e) {
                    rc(e, n), xs(e);
                  }),
                  Jo();
              }
            })(),
            Ms());
        }),
        (dn = function(n, e) {
          var t = Bl;
          Bl |= 2;
          try {
            return n(e);
          } finally {
            (Bl = t) === jl && Jo();
          }
        });
      var fc,
        mc,
        pc = {
          createPortal: uc,
          findDOMNode: function(n) {
            if (null == n) return null;
            if (1 === n.nodeType) return n;
            var e = n._reactInternalFiber;
            if (void 0 === e) {
              if ('function' == typeof n.render) throw Error(a(188));
              throw Error(a(268, Object.keys(n)));
            }
            return (n = null === (n = oe(e)) ? null : n.stateNode);
          },
          hydrate: function(n, e, t) {
            if (!cc(e)) throw Error(a(200));
            return dc(null, n, e, !0, t);
          },
          render: function(n, e, t) {
            if (!cc(e)) throw Error(a(200));
            return dc(null, n, e, !1, t);
          },
          unstable_renderSubtreeIntoContainer: function(n, e, t, r) {
            if (!cc(t)) throw Error(a(200));
            if (null == n || void 0 === n._reactInternalFiber)
              throw Error(a(38));
            return dc(n, e, t, !1, r);
          },
          unmountComponentAtNode: function(n) {
            if (!cc(n)) throw Error(a(40));
            return (
              !!n._reactRootContainer &&
              (_s(function() {
                dc(null, null, n, !1, function() {
                  (n._reactRootContainer = null), (n[ur] = null);
                });
              }),
              !0)
            );
          },
          unstable_createPortal: function() {
            return uc.apply(void 0, arguments);
          },
          unstable_batchedUpdates: ks,
          flushSync: function(n, e) {
            if ((Bl & (zl | Ml)) !== jl) throw Error(a(187));
            var t = Bl;
            Bl |= 1;
            try {
              return Yo(99, n.bind(null, e));
            } finally {
              (Bl = t), Jo();
            }
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [
              mr,
              pr,
              gr,
              I.injectEventPluginsByName,
              f,
              Pe,
              function(n) {
                S(n, Oe);
              },
              on,
              an,
              At,
              A,
              Ms,
              { current: !1 },
            ],
          },
        };
      (mc = (fc = {
        findFiberByHostInstance: fr,
        bundleType: 0,
        version: '16.12.0',
        rendererPackageName: 'react-dom',
      }).findFiberByHostInstance),
        (function(n) {
          if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (e.isDisabled || !e.supportsFiber) return !0;
          try {
            var t = e.inject(n);
            (qs = function(n) {
              try {
                e.onCommitFiberRoot(
                  t,
                  n,
                  void 0,
                  64 == (64 & n.current.effectTag),
                );
              } catch (n) {}
            }),
              (Bs = function(n) {
                try {
                  e.onCommitFiberUnmount(t, n);
                } catch (n) {}
              });
          } catch (n) {}
        })(
          o({}, fc, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: P.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(n) {
              return null === (n = oe(n)) ? null : n.stateNode;
            },
            findFiberByHostInstance: function(n) {
              return mc ? mc(n) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          }),
        );
      var gc = { default: pc },
        hc = (gc && pc) || gc;
      n.exports = hc.default || hc;
    },
    function(n, e, t) {
      'use strict';
      n.exports = t(8);
    },
    function(n, e, t) {
      'use strict';
      /** @license React v0.18.0
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r, o, i, a, l;
      if (
        (Object.defineProperty(e, '__esModule', { value: !0 }),
        'undefined' == typeof window || 'function' != typeof MessageChannel)
      ) {
        var s = null,
          c = null,
          d = function() {
            if (null !== s)
              try {
                var n = e.unstable_now();
                s(!0, n), (s = null);
              } catch (n) {
                throw (setTimeout(d, 0), n);
              }
          },
          u = Date.now();
        (e.unstable_now = function() {
          return Date.now() - u;
        }),
          (r = function(n) {
            null !== s ? setTimeout(r, 0, n) : ((s = n), setTimeout(d, 0));
          }),
          (o = function(n, e) {
            c = setTimeout(n, e);
          }),
          (i = function() {
            clearTimeout(c);
          }),
          (a = function() {
            return !1;
          }),
          (l = e.unstable_forceFrameRate = function() {});
      } else {
        var f = window.performance,
          m = window.Date,
          p = window.setTimeout,
          g = window.clearTimeout;
        if ('undefined' != typeof console) {
          var h = window.cancelAnimationFrame;
          'function' != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
            ),
            'function' != typeof h &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
              );
        }
        if ('object' == typeof f && 'function' == typeof f.now)
          e.unstable_now = function() {
            return f.now();
          };
        else {
          var b = m.now();
          e.unstable_now = function() {
            return m.now() - b;
          };
        }
        var v = !1,
          x = null,
          y = -1,
          w = 5,
          k = 0;
        (a = function() {
          return e.unstable_now() >= k;
        }),
          (l = function() {}),
          (e.unstable_forceFrameRate = function(n) {
            0 > n || 125 < n
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported',
                )
              : (w = 0 < n ? Math.floor(1e3 / n) : 5);
          });
        var _ = new MessageChannel(),
          E = _.port2;
        (_.port1.onmessage = function() {
          if (null !== x) {
            var n = e.unstable_now();
            k = n + w;
            try {
              x(!0, n) ? E.postMessage(null) : ((v = !1), (x = null));
            } catch (n) {
              throw (E.postMessage(null), n);
            }
          } else v = !1;
        }),
          (r = function(n) {
            (x = n), v || ((v = !0), E.postMessage(null));
          }),
          (o = function(n, t) {
            y = p(function() {
              n(e.unstable_now());
            }, t);
          }),
          (i = function() {
            g(y), (y = -1);
          });
      }
      function T(n, e) {
        var t = n.length;
        n.push(e);
        n: for (;;) {
          var r = Math.floor((t - 1) / 2),
            o = n[r];
          if (!(void 0 !== o && 0 < N(o, e))) break n;
          (n[r] = e), (n[t] = o), (t = r);
        }
      }
      function C(n) {
        return void 0 === (n = n[0]) ? null : n;
      }
      function S(n) {
        var e = n[0];
        if (void 0 !== e) {
          var t = n.pop();
          if (t !== e) {
            n[0] = t;
            n: for (var r = 0, o = n.length; r < o; ) {
              var i = 2 * (r + 1) - 1,
                a = n[i],
                l = i + 1,
                s = n[l];
              if (void 0 !== a && 0 > N(a, t))
                void 0 !== s && 0 > N(s, a)
                  ? ((n[r] = s), (n[l] = t), (r = l))
                  : ((n[r] = a), (n[i] = t), (r = i));
              else {
                if (!(void 0 !== s && 0 > N(s, t))) break n;
                (n[r] = s), (n[l] = t), (r = l);
              }
            }
          }
          return e;
        }
        return null;
      }
      function N(n, e) {
        var t = n.sortIndex - e.sortIndex;
        return 0 !== t ? t : n.id - e.id;
      }
      var D = [],
        A = [],
        I = 1,
        O = null,
        P = 3,
        j = !1,
        L = !1,
        z = !1;
      function M(n) {
        for (var e = C(A); null !== e; ) {
          if (null === e.callback) S(A);
          else {
            if (!(e.startTime <= n)) break;
            S(A), (e.sortIndex = e.expirationTime), T(D, e);
          }
          e = C(A);
        }
      }
      function R(n) {
        if (((z = !1), M(n), !L))
          if (null !== C(D)) (L = !0), r(F);
          else {
            var e = C(A);
            null !== e && o(R, e.startTime - n);
          }
      }
      function F(n, t) {
        (L = !1), z && ((z = !1), i()), (j = !0);
        var r = P;
        try {
          for (
            M(t), O = C(D);
            null !== O && (!(O.expirationTime > t) || (n && !a()));

          ) {
            var l = O.callback;
            if (null !== l) {
              (O.callback = null), (P = O.priorityLevel);
              var s = l(O.expirationTime <= t);
              (t = e.unstable_now()),
                'function' == typeof s ? (O.callback = s) : O === C(D) && S(D),
                M(t);
            } else S(D);
            O = C(D);
          }
          if (null !== O) var c = !0;
          else {
            var d = C(A);
            null !== d && o(R, d.startTime - t), (c = !1);
          }
          return c;
        } finally {
          (O = null), (P = r), (j = !1);
        }
      }
      function H(n) {
        switch (n) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var U = l;
      (e.unstable_ImmediatePriority = 1),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_NormalPriority = 3),
        (e.unstable_IdlePriority = 5),
        (e.unstable_LowPriority = 4),
        (e.unstable_runWithPriority = function(n, e) {
          switch (n) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              n = 3;
          }
          var t = P;
          P = n;
          try {
            return e();
          } finally {
            P = t;
          }
        }),
        (e.unstable_next = function(n) {
          switch (P) {
            case 1:
            case 2:
            case 3:
              var e = 3;
              break;
            default:
              e = P;
          }
          var t = P;
          P = e;
          try {
            return n();
          } finally {
            P = t;
          }
        }),
        (e.unstable_scheduleCallback = function(n, t, a) {
          var l = e.unstable_now();
          if ('object' == typeof a && null !== a) {
            var s = a.delay;
            (s = 'number' == typeof s && 0 < s ? l + s : l),
              (a = 'number' == typeof a.timeout ? a.timeout : H(n));
          } else (a = H(n)), (s = l);
          return (
            (n = {
              id: I++,
              callback: t,
              priorityLevel: n,
              startTime: s,
              expirationTime: (a = s + a),
              sortIndex: -1,
            }),
            s > l
              ? ((n.sortIndex = s),
                T(A, n),
                null === C(D) &&
                  n === C(A) &&
                  (z ? i() : (z = !0), o(R, s - l)))
              : ((n.sortIndex = a), T(D, n), L || j || ((L = !0), r(F))),
            n
          );
        }),
        (e.unstable_cancelCallback = function(n) {
          n.callback = null;
        }),
        (e.unstable_wrapCallback = function(n) {
          var e = P;
          return function() {
            var t = P;
            P = e;
            try {
              return n.apply(this, arguments);
            } finally {
              P = t;
            }
          };
        }),
        (e.unstable_getCurrentPriorityLevel = function() {
          return P;
        }),
        (e.unstable_shouldYield = function() {
          var n = e.unstable_now();
          M(n);
          var t = C(D);
          return (
            (t !== O &&
              null !== O &&
              null !== t &&
              null !== t.callback &&
              t.startTime <= n &&
              t.expirationTime < O.expirationTime) ||
            a()
          );
        }),
        (e.unstable_requestPaint = U),
        (e.unstable_continueExecution = function() {
          L || j || ((L = !0), r(F));
        }),
        (e.unstable_pauseExecution = function() {}),
        (e.unstable_getFirstCallbackNode = function() {
          return C(D);
        }),
        (e.unstable_Profiling = null);
    },
    function(n, e, t) {
      'use strict';
      var r = t(10);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (n.exports = function() {
          function n(n, e, t, o, i, a) {
            if (a !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function e() {
            return n;
          }
          n.isRequired = n;
          var t = {
            array: n,
            bool: n,
            func: n,
            number: n,
            object: n,
            string: n,
            symbol: n,
            any: n,
            arrayOf: e,
            element: n,
            elementType: n,
            instanceOf: e,
            node: n,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (t.PropTypes = t), t;
        });
    },
    function(n, e, t) {
      'use strict';
      n.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(n, e, t) {
      var r = t(1);
      'string' == typeof r && (r = [[n.i, r, '']]);
      var o = { insert: 'head', singleton: !1 },
        i = t(13)(r, o);
      r.locals && (n.exports = r.locals),
        r.locals ||
          n.hot.accept(1, function() {
            var e = t(1);
            'string' == typeof e && (e = [[n.i, e, '']]), i(e);
          }),
        n.hot.dispose(function() {
          i();
        });
    },
    function(n, e, t) {
      'use strict';
      n.exports = function(n) {
        var e = [];
        return (
          (e.toString = function() {
            return this.map(function(e) {
              var t = (function(n, e) {
                var t = n[1] || '',
                  r = n[3];
                if (!r) return t;
                if (e && 'function' == typeof btoa) {
                  var o =
                      ((a = r),
                      (l = btoa(
                        unescape(encodeURIComponent(JSON.stringify(a))),
                      )),
                      (s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        l,
                      )),
                      '/*# '.concat(s, ' */')),
                    i = r.sources.map(function(n) {
                      return '/*# sourceURL='
                        .concat(r.sourceRoot)
                        .concat(n, ' */');
                    });
                  return [t]
                    .concat(i)
                    .concat([o])
                    .join('\n');
                }
                var a, l, s;
                return [t].join('\n');
              })(e, n);
              return e[2] ? '@media '.concat(e[2], '{').concat(t, '}') : t;
            }).join('');
          }),
          (e.i = function(n, t) {
            'string' == typeof n && (n = [[null, n, '']]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var i = this[o][0];
              null != i && (r[i] = !0);
            }
            for (var a = 0; a < n.length; a++) {
              var l = n[a];
              (null != l[0] && r[l[0]]) ||
                (t && !l[2]
                  ? (l[2] = t)
                  : t && (l[2] = '('.concat(l[2], ') and (').concat(t, ')')),
                e.push(l));
            }
          }),
          e
        );
      };
    },
    function(n, e, t) {
      'use strict';
      var r,
        o = {},
        i = function() {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        a = (function() {
          var n = {};
          return function(e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          };
        })();
      function l(n, e) {
        for (var t = [], r = {}, o = 0; o < n.length; o++) {
          var i = n[o],
            a = e.base ? i[0] + e.base : i[0],
            l = { css: i[1], media: i[2], sourceMap: i[3] };
          r[a] ? r[a].parts.push(l) : t.push((r[a] = { id: a, parts: [l] }));
        }
        return t;
      }
      function s(n, e) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t],
            i = o[r.id],
            a = 0;
          if (i) {
            for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
            for (; a < r.parts.length; a++) i.parts.push(h(r.parts[a], e));
          } else {
            for (var l = []; a < r.parts.length; a++) l.push(h(r.parts[a], e));
            o[r.id] = { id: r.id, refs: 1, parts: l };
          }
        }
      }
      function c(n) {
        var e = document.createElement('style');
        if (void 0 === n.attributes.nonce) {
          var r = t.nc;
          r && (n.attributes.nonce = r);
        }
        if (
          (Object.keys(n.attributes).forEach(function(t) {
            e.setAttribute(t, n.attributes[t]);
          }),
          'function' == typeof n.insert)
        )
          n.insert(e);
        else {
          var o = a(n.insert || 'head');
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(e);
        }
        return e;
      }
      var d,
        u =
          ((d = []),
          function(n, e) {
            return (d[n] = e), d.filter(Boolean).join('\n');
          });
      function f(n, e, t, r) {
        var o = t ? '' : r.css;
        if (n.styleSheet) n.styleSheet.cssText = u(e, o);
        else {
          var i = document.createTextNode(o),
            a = n.childNodes;
          a[e] && n.removeChild(a[e]),
            a.length ? n.insertBefore(i, a[e]) : n.appendChild(i);
        }
      }
      function m(n, e, t) {
        var r = t.css,
          o = t.media,
          i = t.sourceMap;
        if (
          (o && n.setAttribute('media', o),
          i &&
            btoa &&
            (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              ' */',
            )),
          n.styleSheet)
        )
          n.styleSheet.cssText = r;
        else {
          for (; n.firstChild; ) n.removeChild(n.firstChild);
          n.appendChild(document.createTextNode(r));
        }
      }
      var p = null,
        g = 0;
      function h(n, e) {
        var t, r, o;
        if (e.singleton) {
          var i = g++;
          (t = p || (p = c(e))),
            (r = f.bind(null, t, i, !1)),
            (o = f.bind(null, t, i, !0));
        } else
          (t = c(e)),
            (r = m.bind(null, t, e)),
            (o = function() {
              !(function(n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            });
        return (
          r(n),
          function(e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap
              )
                return;
              r((n = e));
            } else o();
          }
        );
      }
      n.exports = function(n, e) {
        ((e = e || {}).attributes =
          'object' == typeof e.attributes ? e.attributes : {}),
          e.singleton || 'boolean' == typeof e.singleton || (e.singleton = i());
        var t = l(n, e);
        return (
          s(t, e),
          function(n) {
            for (var r = [], i = 0; i < t.length; i++) {
              var a = t[i],
                c = o[a.id];
              c && (c.refs--, r.push(c));
            }
            n && s(l(n, e), e);
            for (var d = 0; d < r.length; d++) {
              var u = r[d];
              if (0 === u.refs) {
                for (var f = 0; f < u.parts.length; f++) u.parts[f]();
                delete o[u.id];
              }
            }
          }
        );
      };
    },
    function(n, e, t) {
      (function(n) {
        (function(e, t) {
          'use strict';
          function r(n, e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r);
            }
          }
          function o(n, e, t) {
            return e && r(n.prototype, e), t && r(n, t), n;
          }
          function i(n, e, t) {
            return (
              e in n
                ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (n[e] = t),
              n
            );
          }
          function a(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(n);
              e &&
                (r = r.filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })),
                t.push.apply(t, r);
            }
            return t;
          }
          function l(n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? a(Object(t), !0).forEach(function(e) {
                    i(n, e, t[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(t),
                  )
                : a(Object(t)).forEach(function(e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(t, e),
                    );
                  });
            }
            return n;
          }
          t = t && t.hasOwnProperty('default') ? t.default : t;
          var s = 'transitionend';
          function c(n) {
            var e = this,
              r = !1;
            return (
              t(this).one(d.TRANSITION_END, function() {
                r = !0;
              }),
              setTimeout(function() {
                r || d.triggerTransitionEnd(e);
              }, n),
              this
            );
          }
          var d = {
            TRANSITION_END: 'bsTransitionEnd',
            getUID: function(n) {
              do {
                n += ~~(1e6 * Math.random());
              } while (document.getElementById(n));
              return n;
            },
            getSelectorFromElement: function(n) {
              var e = n.getAttribute('data-target');
              if (!e || '#' === e) {
                var t = n.getAttribute('href');
                e = t && '#' !== t ? t.trim() : '';
              }
              try {
                return document.querySelector(e) ? e : null;
              } catch (n) {
                return null;
              }
            },
            getTransitionDurationFromElement: function(n) {
              if (!n) return 0;
              var e = t(n).css('transition-duration'),
                r = t(n).css('transition-delay'),
                o = parseFloat(e),
                i = parseFloat(r);
              return o || i
                ? ((e = e.split(',')[0]),
                  (r = r.split(',')[0]),
                  1e3 * (parseFloat(e) + parseFloat(r)))
                : 0;
            },
            reflow: function(n) {
              return n.offsetHeight;
            },
            triggerTransitionEnd: function(n) {
              t(n).trigger(s);
            },
            supportsTransitionEnd: function() {
              return Boolean(s);
            },
            isElement: function(n) {
              return (n[0] || n).nodeType;
            },
            typeCheckConfig: function(n, e, t) {
              for (var r in t)
                if (Object.prototype.hasOwnProperty.call(t, r)) {
                  var o = t[r],
                    i = e[r],
                    a =
                      i && d.isElement(i)
                        ? 'element'
                        : ((l = i),
                          {}.toString
                            .call(l)
                            .match(/\s([a-z]+)/i)[1]
                            .toLowerCase());
                  if (!new RegExp(o).test(a))
                    throw new Error(
                      n.toUpperCase() +
                        ': Option "' +
                        r +
                        '" provided type "' +
                        a +
                        '" but expected type "' +
                        o +
                        '".',
                    );
                }
              var l;
            },
            findShadowRoot: function(n) {
              if (!document.documentElement.attachShadow) return null;
              if ('function' == typeof n.getRootNode) {
                var e = n.getRootNode();
                return e instanceof ShadowRoot ? e : null;
              }
              return n instanceof ShadowRoot
                ? n
                : n.parentNode
                ? d.findShadowRoot(n.parentNode)
                : null;
            },
            jQueryDetection: function() {
              if (void 0 === t)
                throw new TypeError(
                  "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
                );
              var n = t.fn.jquery.split(' ')[0].split('.');
              if (
                (n[0] < 2 && n[1] < 9) ||
                (1 === n[0] && 9 === n[1] && n[2] < 1) ||
                n[0] >= 4
              )
                throw new Error(
                  "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
                );
            },
          };
          d.jQueryDetection(),
            (t.fn.emulateTransitionEnd = c),
            (t.event.special[d.TRANSITION_END] = {
              bindType: s,
              delegateType: s,
              handle: function(n) {
                if (t(n.target).is(this))
                  return n.handleObj.handler.apply(this, arguments);
              },
            });
          var u = t.fn.alert,
            f = {
              CLOSE: 'close.bs.alert',
              CLOSED: 'closed.bs.alert',
              CLICK_DATA_API: 'click.bs.alert.data-api',
            },
            m = 'alert',
            p = 'fade',
            g = 'show',
            h = (function() {
              function n(n) {
                this._element = n;
              }
              var e = n.prototype;
              return (
                (e.close = function(n) {
                  var e = this._element;
                  n && (e = this._getRootElement(n)),
                    this._triggerCloseEvent(e).isDefaultPrevented() ||
                      this._removeElement(e);
                }),
                (e.dispose = function() {
                  t.removeData(this._element, 'bs.alert'),
                    (this._element = null);
                }),
                (e._getRootElement = function(n) {
                  var e = d.getSelectorFromElement(n),
                    r = !1;
                  return (
                    e && (r = document.querySelector(e)),
                    r || (r = t(n).closest('.' + m)[0]),
                    r
                  );
                }),
                (e._triggerCloseEvent = function(n) {
                  var e = t.Event(f.CLOSE);
                  return t(n).trigger(e), e;
                }),
                (e._removeElement = function(n) {
                  var e = this;
                  if ((t(n).removeClass(g), t(n).hasClass(p))) {
                    var r = d.getTransitionDurationFromElement(n);
                    t(n)
                      .one(d.TRANSITION_END, function(t) {
                        return e._destroyElement(n, t);
                      })
                      .emulateTransitionEnd(r);
                  } else this._destroyElement(n);
                }),
                (e._destroyElement = function(n) {
                  t(n)
                    .detach()
                    .trigger(f.CLOSED)
                    .remove();
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this),
                      o = r.data('bs.alert');
                    o || ((o = new n(this)), r.data('bs.alert', o)),
                      'close' === e && o[e](this);
                  });
                }),
                (n._handleDismiss = function(n) {
                  return function(e) {
                    e && e.preventDefault(), n.close(this);
                  };
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                ]),
                n
              );
            })();
          t(document).on(
            f.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            h._handleDismiss(new h()),
          ),
            (t.fn.alert = h._jQueryInterface),
            (t.fn.alert.Constructor = h),
            (t.fn.alert.noConflict = function() {
              return (t.fn.alert = u), h._jQueryInterface;
            });
          var b = t.fn.button,
            v = 'active',
            x = 'btn',
            y = 'focus',
            w = '[data-toggle^="button"]',
            k = '[data-toggle="buttons"]',
            _ = '[data-toggle="button"]',
            E = '[data-toggle="buttons"] .btn',
            T = 'input:not([type="hidden"])',
            C = '.active',
            S = '.btn',
            N = {
              CLICK_DATA_API: 'click.bs.button.data-api',
              FOCUS_BLUR_DATA_API:
                'focus.bs.button.data-api blur.bs.button.data-api',
              LOAD_DATA_API: 'load.bs.button.data-api',
            },
            D = (function() {
              function n(n) {
                this._element = n;
              }
              var e = n.prototype;
              return (
                (e.toggle = function() {
                  var n = !0,
                    e = !0,
                    r = t(this._element).closest(k)[0];
                  if (r) {
                    var o = this._element.querySelector(T);
                    if (o) {
                      if ('radio' === o.type)
                        if (o.checked && this._element.classList.contains(v))
                          n = !1;
                        else {
                          var i = r.querySelector(C);
                          i && t(i).removeClass(v);
                        }
                      else
                        'checkbox' === o.type
                          ? 'LABEL' === this._element.tagName &&
                            o.checked === this._element.classList.contains(v) &&
                            (n = !1)
                          : (n = !1);
                      n &&
                        ((o.checked = !this._element.classList.contains(v)),
                        t(o).trigger('change')),
                        o.focus(),
                        (e = !1);
                    }
                  }
                  this._element.hasAttribute('disabled') ||
                    this._element.classList.contains('disabled') ||
                    (e &&
                      this._element.setAttribute(
                        'aria-pressed',
                        !this._element.classList.contains(v),
                      ),
                    n && t(this._element).toggleClass(v));
                }),
                (e.dispose = function() {
                  t.removeData(this._element, 'bs.button'),
                    (this._element = null);
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this).data('bs.button');
                    r || ((r = new n(this)), t(this).data('bs.button', r)),
                      'toggle' === e && r[e]();
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                ]),
                n
              );
            })();
          t(document)
            .on(N.CLICK_DATA_API, w, function(n) {
              var e = n.target;
              if (
                (t(e).hasClass(x) || (e = t(e).closest(S)[0]),
                !e ||
                  e.hasAttribute('disabled') ||
                  e.classList.contains('disabled'))
              )
                n.preventDefault();
              else {
                var r = e.querySelector(T);
                if (
                  r &&
                  (r.hasAttribute('disabled') ||
                    r.classList.contains('disabled'))
                )
                  return void n.preventDefault();
                D._jQueryInterface.call(t(e), 'toggle');
              }
            })
            .on(N.FOCUS_BLUR_DATA_API, w, function(n) {
              var e = t(n.target).closest(S)[0];
              t(e).toggleClass(y, /^focus(in)?$/.test(n.type));
            }),
            t(window).on(N.LOAD_DATA_API, function() {
              for (
                var n = [].slice.call(document.querySelectorAll(E)),
                  e = 0,
                  t = n.length;
                e < t;
                e++
              ) {
                var r = n[e],
                  o = r.querySelector(T);
                o.checked || o.hasAttribute('checked')
                  ? r.classList.add(v)
                  : r.classList.remove(v);
              }
              for (
                var i = 0,
                  a = (n = [].slice.call(document.querySelectorAll(_))).length;
                i < a;
                i++
              ) {
                var l = n[i];
                'true' === l.getAttribute('aria-pressed')
                  ? l.classList.add(v)
                  : l.classList.remove(v);
              }
            }),
            (t.fn.button = D._jQueryInterface),
            (t.fn.button.Constructor = D),
            (t.fn.button.noConflict = function() {
              return (t.fn.button = b), D._jQueryInterface;
            });
          var A = 'carousel',
            I = '.bs.carousel',
            O = t.fn[A],
            P = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: 'hover',
              wrap: !0,
              touch: !0,
            },
            j = {
              interval: '(number|boolean)',
              keyboard: 'boolean',
              slide: '(boolean|string)',
              pause: '(string|boolean)',
              wrap: 'boolean',
              touch: 'boolean',
            },
            L = 'next',
            z = 'prev',
            M = 'left',
            R = 'right',
            F = {
              SLIDE: 'slide.bs.carousel',
              SLID: 'slid.bs.carousel',
              KEYDOWN: 'keydown.bs.carousel',
              MOUSEENTER: 'mouseenter.bs.carousel',
              MOUSELEAVE: 'mouseleave.bs.carousel',
              TOUCHSTART: 'touchstart.bs.carousel',
              TOUCHMOVE: 'touchmove.bs.carousel',
              TOUCHEND: 'touchend.bs.carousel',
              POINTERDOWN: 'pointerdown.bs.carousel',
              POINTERUP: 'pointerup.bs.carousel',
              DRAG_START: 'dragstart.bs.carousel',
              LOAD_DATA_API: 'load.bs.carousel.data-api',
              CLICK_DATA_API: 'click.bs.carousel.data-api',
            },
            H = 'carousel',
            U = 'active',
            W = 'slide',
            q = 'carousel-item-right',
            B = 'carousel-item-left',
            V = 'carousel-item-next',
            $ = 'carousel-item-prev',
            K = 'pointer-event',
            Q = {
              ACTIVE: '.active',
              ACTIVE_ITEM: '.active.carousel-item',
              ITEM: '.carousel-item',
              ITEM_IMG: '.carousel-item img',
              NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
              INDICATORS: '.carousel-indicators',
              DATA_SLIDE: '[data-slide], [data-slide-to]',
              DATA_RIDE: '[data-ride="carousel"]',
            },
            Y = { TOUCH: 'touch', PEN: 'pen' },
            X = (function() {
              function n(n, e) {
                (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this.touchStartX = 0),
                  (this.touchDeltaX = 0),
                  (this._config = this._getConfig(e)),
                  (this._element = n),
                  (this._indicatorsElement = this._element.querySelector(
                    Q.INDICATORS,
                  )),
                  (this._touchSupported =
                    'ontouchstart' in document.documentElement ||
                    navigator.maxTouchPoints > 0),
                  (this._pointerEvent = Boolean(
                    window.PointerEvent || window.MSPointerEvent,
                  )),
                  this._addEventListeners();
              }
              var e = n.prototype;
              return (
                (e.next = function() {
                  this._isSliding || this._slide(L);
                }),
                (e.nextWhenVisible = function() {
                  !document.hidden &&
                    t(this._element).is(':visible') &&
                    'hidden' !== t(this._element).css('visibility') &&
                    this.next();
                }),
                (e.prev = function() {
                  this._isSliding || this._slide(z);
                }),
                (e.pause = function(n) {
                  n || (this._isPaused = !0),
                    this._element.querySelector(Q.NEXT_PREV) &&
                      (d.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (e.cycle = function(n) {
                  n || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval,
                      ));
                }),
                (e.to = function(n) {
                  var e = this;
                  this._activeElement = this._element.querySelector(
                    Q.ACTIVE_ITEM,
                  );
                  var r = this._getItemIndex(this._activeElement);
                  if (!(n > this._items.length - 1 || n < 0))
                    if (this._isSliding)
                      t(this._element).one(F.SLID, function() {
                        return e.to(n);
                      });
                    else {
                      if (r === n) return this.pause(), void this.cycle();
                      var o = n > r ? L : z;
                      this._slide(o, this._items[n]);
                    }
                }),
                (e.dispose = function() {
                  t(this._element).off(I),
                    t.removeData(this._element, 'bs.carousel'),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (e._getConfig = function(n) {
                  return (n = l({}, P, {}, n)), d.typeCheckConfig(A, n, j), n;
                }),
                (e._handleSwipe = function() {
                  var n = Math.abs(this.touchDeltaX);
                  if (!(n <= 40)) {
                    var e = n / this.touchDeltaX;
                    (this.touchDeltaX = 0),
                      e > 0 && this.prev(),
                      e < 0 && this.next();
                  }
                }),
                (e._addEventListeners = function() {
                  var n = this;
                  this._config.keyboard &&
                    t(this._element).on(F.KEYDOWN, function(e) {
                      return n._keydown(e);
                    }),
                    'hover' === this._config.pause &&
                      t(this._element)
                        .on(F.MOUSEENTER, function(e) {
                          return n.pause(e);
                        })
                        .on(F.MOUSELEAVE, function(e) {
                          return n.cycle(e);
                        }),
                    this._config.touch && this._addTouchEventListeners();
                }),
                (e._addTouchEventListeners = function() {
                  var n = this;
                  if (this._touchSupported) {
                    var e = function(e) {
                        n._pointerEvent &&
                        Y[e.originalEvent.pointerType.toUpperCase()]
                          ? (n.touchStartX = e.originalEvent.clientX)
                          : n._pointerEvent ||
                            (n.touchStartX =
                              e.originalEvent.touches[0].clientX);
                      },
                      r = function(e) {
                        n._pointerEvent &&
                          Y[e.originalEvent.pointerType.toUpperCase()] &&
                          (n.touchDeltaX =
                            e.originalEvent.clientX - n.touchStartX),
                          n._handleSwipe(),
                          'hover' === n._config.pause &&
                            (n.pause(),
                            n.touchTimeout && clearTimeout(n.touchTimeout),
                            (n.touchTimeout = setTimeout(function(e) {
                              return n.cycle(e);
                            }, 500 + n._config.interval)));
                      };
                    t(this._element.querySelectorAll(Q.ITEM_IMG)).on(
                      F.DRAG_START,
                      function(n) {
                        return n.preventDefault();
                      },
                    ),
                      this._pointerEvent
                        ? (t(this._element).on(F.POINTERDOWN, function(n) {
                            return e(n);
                          }),
                          t(this._element).on(F.POINTERUP, function(n) {
                            return r(n);
                          }),
                          this._element.classList.add(K))
                        : (t(this._element).on(F.TOUCHSTART, function(n) {
                            return e(n);
                          }),
                          t(this._element).on(F.TOUCHMOVE, function(e) {
                            return (function(e) {
                              e.originalEvent.touches &&
                              e.originalEvent.touches.length > 1
                                ? (n.touchDeltaX = 0)
                                : (n.touchDeltaX =
                                    e.originalEvent.touches[0].clientX -
                                    n.touchStartX);
                            })(e);
                          }),
                          t(this._element).on(F.TOUCHEND, function(n) {
                            return r(n);
                          }));
                  }
                }),
                (e._keydown = function(n) {
                  if (!/input|textarea/i.test(n.target.tagName))
                    switch (n.which) {
                      case 37:
                        n.preventDefault(), this.prev();
                        break;
                      case 39:
                        n.preventDefault(), this.next();
                    }
                }),
                (e._getItemIndex = function(n) {
                  return (
                    (this._items =
                      n && n.parentNode
                        ? [].slice.call(n.parentNode.querySelectorAll(Q.ITEM))
                        : []),
                    this._items.indexOf(n)
                  );
                }),
                (e._getItemByDirection = function(n, e) {
                  var t = n === L,
                    r = n === z,
                    o = this._getItemIndex(e),
                    i = this._items.length - 1;
                  if (((r && 0 === o) || (t && o === i)) && !this._config.wrap)
                    return e;
                  var a = (o + (n === z ? -1 : 1)) % this._items.length;
                  return -1 === a
                    ? this._items[this._items.length - 1]
                    : this._items[a];
                }),
                (e._triggerSlideEvent = function(n, e) {
                  var r = this._getItemIndex(n),
                    o = this._getItemIndex(
                      this._element.querySelector(Q.ACTIVE_ITEM),
                    ),
                    i = t.Event(F.SLIDE, {
                      relatedTarget: n,
                      direction: e,
                      from: o,
                      to: r,
                    });
                  return t(this._element).trigger(i), i;
                }),
                (e._setActiveIndicatorElement = function(n) {
                  if (this._indicatorsElement) {
                    var e = [].slice.call(
                      this._indicatorsElement.querySelectorAll(Q.ACTIVE),
                    );
                    t(e).removeClass(U);
                    var r = this._indicatorsElement.children[
                      this._getItemIndex(n)
                    ];
                    r && t(r).addClass(U);
                  }
                }),
                (e._slide = function(n, e) {
                  var r,
                    o,
                    i,
                    a = this,
                    l = this._element.querySelector(Q.ACTIVE_ITEM),
                    s = this._getItemIndex(l),
                    c = e || (l && this._getItemByDirection(n, l)),
                    u = this._getItemIndex(c),
                    f = Boolean(this._interval);
                  if (
                    (n === L
                      ? ((r = B), (o = V), (i = M))
                      : ((r = q), (o = $), (i = R)),
                    c && t(c).hasClass(U))
                  )
                    this._isSliding = !1;
                  else if (
                    !this._triggerSlideEvent(c, i).isDefaultPrevented() &&
                    l &&
                    c
                  ) {
                    (this._isSliding = !0),
                      f && this.pause(),
                      this._setActiveIndicatorElement(c);
                    var m = t.Event(F.SLID, {
                      relatedTarget: c,
                      direction: i,
                      from: s,
                      to: u,
                    });
                    if (t(this._element).hasClass(W)) {
                      t(c).addClass(o),
                        d.reflow(c),
                        t(l).addClass(r),
                        t(c).addClass(r);
                      var p = parseInt(c.getAttribute('data-interval'), 10);
                      p
                        ? ((this._config.defaultInterval =
                            this._config.defaultInterval ||
                            this._config.interval),
                          (this._config.interval = p))
                        : (this._config.interval =
                            this._config.defaultInterval ||
                            this._config.interval);
                      var g = d.getTransitionDurationFromElement(l);
                      t(l)
                        .one(d.TRANSITION_END, function() {
                          t(c)
                            .removeClass(r + ' ' + o)
                            .addClass(U),
                            t(l).removeClass(U + ' ' + o + ' ' + r),
                            (a._isSliding = !1),
                            setTimeout(function() {
                              return t(a._element).trigger(m);
                            }, 0);
                        })
                        .emulateTransitionEnd(g);
                    } else
                      t(l).removeClass(U),
                        t(c).addClass(U),
                        (this._isSliding = !1),
                        t(this._element).trigger(m);
                    f && this.cycle();
                  }
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this).data('bs.carousel'),
                      o = l({}, P, {}, t(this).data());
                    'object' == typeof e && (o = l({}, o, {}, e));
                    var i = 'string' == typeof e ? e : o.slide;
                    if (
                      (r ||
                        ((r = new n(this, o)), t(this).data('bs.carousel', r)),
                      'number' == typeof e)
                    )
                      r.to(e);
                    else if ('string' == typeof i) {
                      if (void 0 === r[i])
                        throw new TypeError('No method named "' + i + '"');
                      r[i]();
                    } else o.interval && o.ride && (r.pause(), r.cycle());
                  });
                }),
                (n._dataApiClickHandler = function(e) {
                  var r = d.getSelectorFromElement(this);
                  if (r) {
                    var o = t(r)[0];
                    if (o && t(o).hasClass(H)) {
                      var i = l({}, t(o).data(), {}, t(this).data()),
                        a = this.getAttribute('data-slide-to');
                      a && (i.interval = !1),
                        n._jQueryInterface.call(t(o), i),
                        a &&
                          t(o)
                            .data('bs.carousel')
                            .to(a),
                        e.preventDefault();
                    }
                  }
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return P;
                    },
                  },
                ]),
                n
              );
            })();
          t(document).on(
            F.CLICK_DATA_API,
            Q.DATA_SLIDE,
            X._dataApiClickHandler,
          ),
            t(window).on(F.LOAD_DATA_API, function() {
              for (
                var n = [].slice.call(document.querySelectorAll(Q.DATA_RIDE)),
                  e = 0,
                  r = n.length;
                e < r;
                e++
              ) {
                var o = t(n[e]);
                X._jQueryInterface.call(o, o.data());
              }
            }),
            (t.fn[A] = X._jQueryInterface),
            (t.fn[A].Constructor = X),
            (t.fn[A].noConflict = function() {
              return (t.fn[A] = O), X._jQueryInterface;
            });
          var G = 'collapse',
            J = t.fn[G],
            Z = { toggle: !0, parent: '' },
            nn = { toggle: 'boolean', parent: '(string|element)' },
            en = {
              SHOW: 'show.bs.collapse',
              SHOWN: 'shown.bs.collapse',
              HIDE: 'hide.bs.collapse',
              HIDDEN: 'hidden.bs.collapse',
              CLICK_DATA_API: 'click.bs.collapse.data-api',
            },
            tn = 'show',
            rn = 'collapse',
            on = 'collapsing',
            an = 'collapsed',
            ln = 'width',
            sn = 'height',
            cn = {
              ACTIVES: '.show, .collapsing',
              DATA_TOGGLE: '[data-toggle="collapse"]',
            },
            dn = (function() {
              function n(n, e) {
                (this._isTransitioning = !1),
                  (this._element = n),
                  (this._config = this._getConfig(e)),
                  (this._triggerArray = [].slice.call(
                    document.querySelectorAll(
                      '[data-toggle="collapse"][href="#' +
                        n.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        n.id +
                        '"]',
                    ),
                  ));
                for (
                  var t = [].slice.call(
                      document.querySelectorAll(cn.DATA_TOGGLE),
                    ),
                    r = 0,
                    o = t.length;
                  r < o;
                  r++
                ) {
                  var i = t[r],
                    a = d.getSelectorFromElement(i),
                    l = [].slice
                      .call(document.querySelectorAll(a))
                      .filter(function(e) {
                        return e === n;
                      });
                  null !== a &&
                    l.length > 0 &&
                    ((this._selector = a), this._triggerArray.push(i));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray,
                    ),
                  this._config.toggle && this.toggle();
              }
              var e = n.prototype;
              return (
                (e.toggle = function() {
                  t(this._element).hasClass(tn) ? this.hide() : this.show();
                }),
                (e.show = function() {
                  var e,
                    r,
                    o = this;
                  if (
                    !(
                      this._isTransitioning ||
                      t(this._element).hasClass(tn) ||
                      (this._parent &&
                        0 ===
                          (e = [].slice
                            .call(this._parent.querySelectorAll(cn.ACTIVES))
                            .filter(function(n) {
                              return 'string' == typeof o._config.parent
                                ? n.getAttribute('data-parent') ===
                                    o._config.parent
                                : n.classList.contains(rn);
                            })).length &&
                        (e = null),
                      e &&
                        (r = t(e)
                          .not(this._selector)
                          .data('bs.collapse')) &&
                        r._isTransitioning)
                    )
                  ) {
                    var i = t.Event(en.SHOW);
                    if (
                      (t(this._element).trigger(i), !i.isDefaultPrevented())
                    ) {
                      e &&
                        (n._jQueryInterface.call(
                          t(e).not(this._selector),
                          'hide',
                        ),
                        r || t(e).data('bs.collapse', null));
                      var a = this._getDimension();
                      t(this._element)
                        .removeClass(rn)
                        .addClass(on),
                        (this._element.style[a] = 0),
                        this._triggerArray.length &&
                          t(this._triggerArray)
                            .removeClass(an)
                            .attr('aria-expanded', !0),
                        this.setTransitioning(!0);
                      var l = 'scroll' + (a[0].toUpperCase() + a.slice(1)),
                        s = d.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(d.TRANSITION_END, function() {
                          t(o._element)
                            .removeClass(on)
                            .addClass(rn)
                            .addClass(tn),
                            (o._element.style[a] = ''),
                            o.setTransitioning(!1),
                            t(o._element).trigger(en.SHOWN);
                        })
                        .emulateTransitionEnd(s),
                        (this._element.style[a] = this._element[l] + 'px');
                    }
                  }
                }),
                (e.hide = function() {
                  var n = this;
                  if (!this._isTransitioning && t(this._element).hasClass(tn)) {
                    var e = t.Event(en.HIDE);
                    if (
                      (t(this._element).trigger(e), !e.isDefaultPrevented())
                    ) {
                      var r = this._getDimension();
                      (this._element.style[r] =
                        this._element.getBoundingClientRect()[r] + 'px'),
                        d.reflow(this._element),
                        t(this._element)
                          .addClass(on)
                          .removeClass(rn)
                          .removeClass(tn);
                      var o = this._triggerArray.length;
                      if (o > 0)
                        for (var i = 0; i < o; i++) {
                          var a = this._triggerArray[i],
                            l = d.getSelectorFromElement(a);
                          null !== l &&
                            (t(
                              [].slice.call(document.querySelectorAll(l)),
                            ).hasClass(tn) ||
                              t(a)
                                .addClass(an)
                                .attr('aria-expanded', !1));
                        }
                      this.setTransitioning(!0), (this._element.style[r] = '');
                      var s = d.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(d.TRANSITION_END, function() {
                          n.setTransitioning(!1),
                            t(n._element)
                              .removeClass(on)
                              .addClass(rn)
                              .trigger(en.HIDDEN);
                        })
                        .emulateTransitionEnd(s);
                    }
                  }
                }),
                (e.setTransitioning = function(n) {
                  this._isTransitioning = n;
                }),
                (e.dispose = function() {
                  t.removeData(this._element, 'bs.collapse'),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (e._getConfig = function(n) {
                  return (
                    ((n = l({}, Z, {}, n)).toggle = Boolean(n.toggle)),
                    d.typeCheckConfig(G, n, nn),
                    n
                  );
                }),
                (e._getDimension = function() {
                  return t(this._element).hasClass(ln) ? ln : sn;
                }),
                (e._getParent = function() {
                  var e,
                    r = this;
                  d.isElement(this._config.parent)
                    ? ((e = this._config.parent),
                      void 0 !== this._config.parent.jquery &&
                        (e = this._config.parent[0]))
                    : (e = document.querySelector(this._config.parent));
                  var o =
                      '[data-toggle="collapse"][data-parent="' +
                      this._config.parent +
                      '"]',
                    i = [].slice.call(e.querySelectorAll(o));
                  return (
                    t(i).each(function(e, t) {
                      r._addAriaAndCollapsedClass(n._getTargetFromElement(t), [
                        t,
                      ]);
                    }),
                    e
                  );
                }),
                (e._addAriaAndCollapsedClass = function(n, e) {
                  var r = t(n).hasClass(tn);
                  e.length &&
                    t(e)
                      .toggleClass(an, !r)
                      .attr('aria-expanded', r);
                }),
                (n._getTargetFromElement = function(n) {
                  var e = d.getSelectorFromElement(n);
                  return e ? document.querySelector(e) : null;
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this),
                      o = r.data('bs.collapse'),
                      i = l(
                        {},
                        Z,
                        {},
                        r.data(),
                        {},
                        'object' == typeof e && e ? e : {},
                      );
                    if (
                      (!o && i.toggle && /show|hide/.test(e) && (i.toggle = !1),
                      o || ((o = new n(this, i)), r.data('bs.collapse', o)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === o[e])
                        throw new TypeError('No method named "' + e + '"');
                      o[e]();
                    }
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return Z;
                    },
                  },
                ]),
                n
              );
            })();
          t(document).on(en.CLICK_DATA_API, cn.DATA_TOGGLE, function(n) {
            'A' === n.currentTarget.tagName && n.preventDefault();
            var e = t(this),
              r = d.getSelectorFromElement(this),
              o = [].slice.call(document.querySelectorAll(r));
            t(o).each(function() {
              var n = t(this),
                r = n.data('bs.collapse') ? 'toggle' : e.data();
              dn._jQueryInterface.call(n, r);
            });
          }),
            (t.fn[G] = dn._jQueryInterface),
            (t.fn[G].Constructor = dn),
            (t.fn[G].noConflict = function() {
              return (t.fn[G] = J), dn._jQueryInterface;
            });
          /**!
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.16.0
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */
          var un =
              'undefined' != typeof window &&
              'undefined' != typeof document &&
              'undefined' != typeof navigator,
            fn = (function() {
              for (
                var n = ['Edge', 'Trident', 'Firefox'], e = 0;
                e < n.length;
                e += 1
              )
                if (un && navigator.userAgent.indexOf(n[e]) >= 0) return 1;
              return 0;
            })(),
            mn =
              un && window.Promise
                ? function(n) {
                    var e = !1;
                    return function() {
                      e ||
                        ((e = !0),
                        window.Promise.resolve().then(function() {
                          (e = !1), n();
                        }));
                    };
                  }
                : function(n) {
                    var e = !1;
                    return function() {
                      e ||
                        ((e = !0),
                        setTimeout(function() {
                          (e = !1), n();
                        }, fn));
                    };
                  };
          function pn(n) {
            return n && '[object Function]' === {}.toString.call(n);
          }
          function gn(n, e) {
            if (1 !== n.nodeType) return [];
            var t = n.ownerDocument.defaultView.getComputedStyle(n, null);
            return e ? t[e] : t;
          }
          function hn(n) {
            return 'HTML' === n.nodeName ? n : n.parentNode || n.host;
          }
          function bn(n) {
            if (!n) return document.body;
            switch (n.nodeName) {
              case 'HTML':
              case 'BODY':
                return n.ownerDocument.body;
              case '#document':
                return n.body;
            }
            var e = gn(n),
              t = e.overflow,
              r = e.overflowX,
              o = e.overflowY;
            return /(auto|scroll|overlay)/.test(t + o + r) ? n : bn(hn(n));
          }
          function vn(n) {
            return n && n.referenceNode ? n.referenceNode : n;
          }
          var xn =
              un && !(!window.MSInputMethodContext || !document.documentMode),
            yn = un && /MSIE 10/.test(navigator.userAgent);
          function wn(n) {
            return 11 === n ? xn : 10 === n ? yn : xn || yn;
          }
          function kn(n) {
            if (!n) return document.documentElement;
            for (
              var e = wn(10) ? document.body : null, t = n.offsetParent || null;
              t === e && n.nextElementSibling;

            )
              t = (n = n.nextElementSibling).offsetParent;
            var r = t && t.nodeName;
            return r && 'BODY' !== r && 'HTML' !== r
              ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(t.nodeName) &&
                'static' === gn(t, 'position')
                ? kn(t)
                : t
              : n
              ? n.ownerDocument.documentElement
              : document.documentElement;
          }
          function _n(n) {
            return null !== n.parentNode ? _n(n.parentNode) : n;
          }
          function En(n, e) {
            if (!(n && n.nodeType && e && e.nodeType))
              return document.documentElement;
            var t =
                n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
              r = t ? n : e,
              o = t ? e : n,
              i = document.createRange();
            i.setStart(r, 0), i.setEnd(o, 0);
            var a,
              l,
              s = i.commonAncestorContainer;
            if ((n !== s && e !== s) || r.contains(o))
              return 'BODY' === (l = (a = s).nodeName) ||
                ('HTML' !== l && kn(a.firstElementChild) !== a)
                ? kn(s)
                : s;
            var c = _n(n);
            return c.host ? En(c.host, e) : En(n, _n(e).host);
          }
          function Tn(n) {
            var e =
                'top' ===
                (arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'top')
                  ? 'scrollTop'
                  : 'scrollLeft',
              t = n.nodeName;
            if ('BODY' === t || 'HTML' === t) {
              var r = n.ownerDocument.documentElement;
              return (n.ownerDocument.scrollingElement || r)[e];
            }
            return n[e];
          }
          function Cn(n, e) {
            var t = 'x' === e ? 'Left' : 'Top',
              r = 'Left' === t ? 'Right' : 'Bottom';
            return (
              parseFloat(n['border' + t + 'Width'], 10) +
              parseFloat(n['border' + r + 'Width'], 10)
            );
          }
          function Sn(n, e, t, r) {
            return Math.max(
              e['offset' + n],
              e['scroll' + n],
              t['client' + n],
              t['offset' + n],
              t['scroll' + n],
              wn(10)
                ? parseInt(t['offset' + n]) +
                    parseInt(r['margin' + ('Height' === n ? 'Top' : 'Left')]) +
                    parseInt(
                      r['margin' + ('Height' === n ? 'Bottom' : 'Right')],
                    )
                : 0,
            );
          }
          function Nn(n) {
            var e = n.body,
              t = n.documentElement,
              r = wn(10) && getComputedStyle(t);
            return {
              height: Sn('Height', e, t, r),
              width: Sn('Width', e, t, r),
            };
          }
          var Dn = function(n, e) {
              if (!(n instanceof e))
                throw new TypeError('Cannot call a class as a function');
            },
            An = (function() {
              function n(n, e) {
                for (var t = 0; t < e.length; t++) {
                  var r = e[t];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(n, r.key, r);
                }
              }
              return function(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
              };
            })(),
            In = function(n, e, t) {
              return (
                e in n
                  ? Object.defineProperty(n, e, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[e] = t),
                n
              );
            },
            On =
              Object.assign ||
              function(n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              };
          function Pn(n) {
            return On({}, n, {
              right: n.left + n.width,
              bottom: n.top + n.height,
            });
          }
          function jn(n) {
            var e = {};
            try {
              if (wn(10)) {
                e = n.getBoundingClientRect();
                var t = Tn(n, 'top'),
                  r = Tn(n, 'left');
                (e.top += t), (e.left += r), (e.bottom += t), (e.right += r);
              } else e = n.getBoundingClientRect();
            } catch (n) {}
            var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top,
              },
              i = 'HTML' === n.nodeName ? Nn(n.ownerDocument) : {},
              a = i.width || n.clientWidth || o.width,
              l = i.height || n.clientHeight || o.height,
              s = n.offsetWidth - a,
              c = n.offsetHeight - l;
            if (s || c) {
              var d = gn(n);
              (s -= Cn(d, 'x')),
                (c -= Cn(d, 'y')),
                (o.width -= s),
                (o.height -= c);
            }
            return Pn(o);
          }
          function Ln(n, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = wn(10),
              o = 'HTML' === e.nodeName,
              i = jn(n),
              a = jn(e),
              l = bn(n),
              s = gn(e),
              c = parseFloat(s.borderTopWidth, 10),
              d = parseFloat(s.borderLeftWidth, 10);
            t &&
              o &&
              ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
            var u = Pn({
              top: i.top - a.top - c,
              left: i.left - a.left - d,
              width: i.width,
              height: i.height,
            });
            if (((u.marginTop = 0), (u.marginLeft = 0), !r && o)) {
              var f = parseFloat(s.marginTop, 10),
                m = parseFloat(s.marginLeft, 10);
              (u.top -= c - f),
                (u.bottom -= c - f),
                (u.left -= d - m),
                (u.right -= d - m),
                (u.marginTop = f),
                (u.marginLeft = m);
            }
            return (
              (r && !t ? e.contains(l) : e === l && 'BODY' !== l.nodeName) &&
                (u = (function(n, e) {
                  var t =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    r = Tn(e, 'top'),
                    o = Tn(e, 'left'),
                    i = t ? -1 : 1;
                  return (
                    (n.top += r * i),
                    (n.bottom += r * i),
                    (n.left += o * i),
                    (n.right += o * i),
                    n
                  );
                })(u, e)),
              u
            );
          }
          function zn(n) {
            if (!n || !n.parentElement || wn()) return document.documentElement;
            for (var e = n.parentElement; e && 'none' === gn(e, 'transform'); )
              e = e.parentElement;
            return e || document.documentElement;
          }
          function Mn(n, e, t, r) {
            var o =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              i = { top: 0, left: 0 },
              a = o ? zn(n) : En(n, vn(e));
            if ('viewport' === r)
              i = (function(n) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  t = n.ownerDocument.documentElement,
                  r = Ln(n, t),
                  o = Math.max(t.clientWidth, window.innerWidth || 0),
                  i = Math.max(t.clientHeight, window.innerHeight || 0),
                  a = e ? 0 : Tn(t),
                  l = e ? 0 : Tn(t, 'left');
                return Pn({
                  top: a - r.top + r.marginTop,
                  left: l - r.left + r.marginLeft,
                  width: o,
                  height: i,
                });
              })(a, o);
            else {
              var l = void 0;
              'scrollParent' === r
                ? 'BODY' === (l = bn(hn(e))).nodeName &&
                  (l = n.ownerDocument.documentElement)
                : (l = 'window' === r ? n.ownerDocument.documentElement : r);
              var s = Ln(l, a, o);
              if (
                'HTML' !== l.nodeName ||
                (function n(e) {
                  var t = e.nodeName;
                  if ('BODY' === t || 'HTML' === t) return !1;
                  if ('fixed' === gn(e, 'position')) return !0;
                  var r = hn(e);
                  return !!r && n(r);
                })(a)
              )
                i = s;
              else {
                var c = Nn(n.ownerDocument),
                  d = c.height,
                  u = c.width;
                (i.top += s.top - s.marginTop),
                  (i.bottom = d + s.top),
                  (i.left += s.left - s.marginLeft),
                  (i.right = u + s.left);
              }
            }
            var f = 'number' == typeof (t = t || 0);
            return (
              (i.left += f ? t : t.left || 0),
              (i.top += f ? t : t.top || 0),
              (i.right -= f ? t : t.right || 0),
              (i.bottom -= f ? t : t.bottom || 0),
              i
            );
          }
          function Rn(n, e, t, r, o) {
            var i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0;
            if (-1 === n.indexOf('auto')) return n;
            var a = Mn(t, r, i, o),
              l = {
                top: { width: a.width, height: e.top - a.top },
                right: { width: a.right - e.right, height: a.height },
                bottom: { width: a.width, height: a.bottom - e.bottom },
                left: { width: e.left - a.left, height: a.height },
              },
              s = Object.keys(l)
                .map(function(n) {
                  return On({ key: n }, l[n], {
                    area: ((e = l[n]), e.width * e.height),
                  });
                  var e;
                })
                .sort(function(n, e) {
                  return e.area - n.area;
                }),
              c = s.filter(function(n) {
                var e = n.width,
                  r = n.height;
                return e >= t.clientWidth && r >= t.clientHeight;
              }),
              d = c.length > 0 ? c[0].key : s[0].key,
              u = n.split('-')[1];
            return d + (u ? '-' + u : '');
          }
          function Fn(n, e, t) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return Ln(t, r ? zn(e) : En(e, vn(t)), r);
          }
          function Hn(n) {
            var e = n.ownerDocument.defaultView.getComputedStyle(n),
              t =
                parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
              r =
                parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return { width: n.offsetWidth + r, height: n.offsetHeight + t };
          }
          function Un(n) {
            var e = {
              left: 'right',
              right: 'left',
              bottom: 'top',
              top: 'bottom',
            };
            return n.replace(/left|right|bottom|top/g, function(n) {
              return e[n];
            });
          }
          function Wn(n, e, t) {
            t = t.split('-')[0];
            var r = Hn(n),
              o = { width: r.width, height: r.height },
              i = -1 !== ['right', 'left'].indexOf(t),
              a = i ? 'top' : 'left',
              l = i ? 'left' : 'top',
              s = i ? 'height' : 'width',
              c = i ? 'width' : 'height';
            return (
              (o[a] = e[a] + e[s] / 2 - r[s] / 2),
              (o[l] = t === l ? e[l] - r[c] : e[Un(l)]),
              o
            );
          }
          function qn(n, e) {
            return Array.prototype.find ? n.find(e) : n.filter(e)[0];
          }
          function Bn(n, e, t) {
            return (
              (void 0 === t
                ? n
                : n.slice(
                    0,
                    (function(n, e, t) {
                      if (Array.prototype.findIndex)
                        return n.findIndex(function(n) {
                          return n[e] === t;
                        });
                      var r = qn(n, function(n) {
                        return n[e] === t;
                      });
                      return n.indexOf(r);
                    })(n, 'name', t),
                  )
              ).forEach(function(n) {
                n.function &&
                  console.warn(
                    '`modifier.function` is deprecated, use `modifier.fn`!',
                  );
                var t = n.function || n.fn;
                n.enabled &&
                  pn(t) &&
                  ((e.offsets.popper = Pn(e.offsets.popper)),
                  (e.offsets.reference = Pn(e.offsets.reference)),
                  (e = t(e, n)));
              }),
              e
            );
          }
          function Vn() {
            if (!this.state.isDestroyed) {
              var n = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {},
              };
              (n.offsets.reference = Fn(
                this.state,
                this.popper,
                this.reference,
                this.options.positionFixed,
              )),
                (n.placement = Rn(
                  this.options.placement,
                  n.offsets.reference,
                  this.popper,
                  this.reference,
                  this.options.modifiers.flip.boundariesElement,
                  this.options.modifiers.flip.padding,
                )),
                (n.originalPlacement = n.placement),
                (n.positionFixed = this.options.positionFixed),
                (n.offsets.popper = Wn(
                  this.popper,
                  n.offsets.reference,
                  n.placement,
                )),
                (n.offsets.popper.position = this.options.positionFixed
                  ? 'fixed'
                  : 'absolute'),
                (n = Bn(this.modifiers, n)),
                this.state.isCreated
                  ? this.options.onUpdate(n)
                  : ((this.state.isCreated = !0), this.options.onCreate(n));
            }
          }
          function $n(n, e) {
            return n.some(function(n) {
              var t = n.name;
              return n.enabled && t === e;
            });
          }
          function Kn(n) {
            for (
              var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
                t = n.charAt(0).toUpperCase() + n.slice(1),
                r = 0;
              r < e.length;
              r++
            ) {
              var o = e[r],
                i = o ? '' + o + t : n;
              if (void 0 !== document.body.style[i]) return i;
            }
            return null;
          }
          function Qn() {
            return (
              (this.state.isDestroyed = !0),
              $n(this.modifiers, 'applyStyle') &&
                (this.popper.removeAttribute('x-placement'),
                (this.popper.style.position = ''),
                (this.popper.style.top = ''),
                (this.popper.style.left = ''),
                (this.popper.style.right = ''),
                (this.popper.style.bottom = ''),
                (this.popper.style.willChange = ''),
                (this.popper.style[Kn('transform')] = '')),
              this.disableEventListeners(),
              this.options.removeOnDestroy &&
                this.popper.parentNode.removeChild(this.popper),
              this
            );
          }
          function Yn(n) {
            var e = n.ownerDocument;
            return e ? e.defaultView : window;
          }
          function Xn(n, e, t, r) {
            (t.updateBound = r),
              Yn(n).addEventListener('resize', t.updateBound, { passive: !0 });
            var o = bn(n);
            return (
              (function n(e, t, r, o) {
                var i = 'BODY' === e.nodeName,
                  a = i ? e.ownerDocument.defaultView : e;
                a.addEventListener(t, r, { passive: !0 }),
                  i || n(bn(a.parentNode), t, r, o),
                  o.push(a);
              })(o, 'scroll', t.updateBound, t.scrollParents),
              (t.scrollElement = o),
              (t.eventsEnabled = !0),
              t
            );
          }
          function Gn() {
            this.state.eventsEnabled ||
              (this.state = Xn(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate,
              ));
          }
          function Jn() {
            var n, e;
            this.state.eventsEnabled &&
              (cancelAnimationFrame(this.scheduleUpdate),
              (this.state =
                ((n = this.reference),
                (e = this.state),
                Yn(n).removeEventListener('resize', e.updateBound),
                e.scrollParents.forEach(function(n) {
                  n.removeEventListener('scroll', e.updateBound);
                }),
                (e.updateBound = null),
                (e.scrollParents = []),
                (e.scrollElement = null),
                (e.eventsEnabled = !1),
                e)));
          }
          function Zn(n) {
            return '' !== n && !isNaN(parseFloat(n)) && isFinite(n);
          }
          function ne(n, e) {
            Object.keys(e).forEach(function(t) {
              var r = '';
              -1 !==
                ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(
                  t,
                ) &&
                Zn(e[t]) &&
                (r = 'px'),
                (n.style[t] = e[t] + r);
            });
          }
          var ee = un && /Firefox/i.test(navigator.userAgent);
          function te(n, e, t) {
            var r = qn(n, function(n) {
                return n.name === e;
              }),
              o =
                !!r &&
                n.some(function(n) {
                  return n.name === t && n.enabled && n.order < r.order;
                });
            if (!o) {
              var i = '`' + e + '`',
                a = '`' + t + '`';
              console.warn(
                a +
                  ' modifier is required by ' +
                  i +
                  ' modifier in order to work, be sure to include it before ' +
                  i +
                  '!',
              );
            }
            return o;
          }
          var re = [
              'auto-start',
              'auto',
              'auto-end',
              'top-start',
              'top',
              'top-end',
              'right-start',
              'right',
              'right-end',
              'bottom-end',
              'bottom',
              'bottom-start',
              'left-end',
              'left',
              'left-start',
            ],
            oe = re.slice(3);
          function ie(n) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = oe.indexOf(n),
              r = oe.slice(t + 1).concat(oe.slice(0, t));
            return e ? r.reverse() : r;
          }
          var ae = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise',
          };
          function le(n, e, t, r) {
            var o = [0, 0],
              i = -1 !== ['right', 'left'].indexOf(r),
              a = n.split(/(\+|\-)/).map(function(n) {
                return n.trim();
              }),
              l = a.indexOf(
                qn(a, function(n) {
                  return -1 !== n.search(/,|\s/);
                }),
              );
            a[l] &&
              -1 === a[l].indexOf(',') &&
              console.warn(
                'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
              );
            var s = /\s*,\s*|\s+/,
              c =
                -1 !== l
                  ? [
                      a.slice(0, l).concat([a[l].split(s)[0]]),
                      [a[l].split(s)[1]].concat(a.slice(l + 1)),
                    ]
                  : [a];
            return (
              (c = c.map(function(n, r) {
                var o = (1 === r ? !i : i) ? 'height' : 'width',
                  a = !1;
                return n
                  .reduce(function(n, e) {
                    return '' === n[n.length - 1] &&
                      -1 !== ['+', '-'].indexOf(e)
                      ? ((n[n.length - 1] = e), (a = !0), n)
                      : a
                      ? ((n[n.length - 1] += e), (a = !1), n)
                      : n.concat(e);
                  }, [])
                  .map(function(n) {
                    return (function(n, e, t, r) {
                      var o = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        i = +o[1],
                        a = o[2];
                      if (!i) return n;
                      if (0 === a.indexOf('%')) {
                        var l = void 0;
                        switch (a) {
                          case '%p':
                            l = t;
                            break;
                          case '%':
                          case '%r':
                          default:
                            l = r;
                        }
                        return (Pn(l)[e] / 100) * i;
                      }
                      return 'vh' === a || 'vw' === a
                        ? (('vh' === a
                            ? Math.max(
                                document.documentElement.clientHeight,
                                window.innerHeight || 0,
                              )
                            : Math.max(
                                document.documentElement.clientWidth,
                                window.innerWidth || 0,
                              )) /
                            100) *
                            i
                        : i;
                    })(n, o, e, t);
                  });
              })).forEach(function(n, e) {
                n.forEach(function(t, r) {
                  Zn(t) && (o[e] += t * ('-' === n[r - 1] ? -1 : 1));
                });
              }),
              o
            );
          }
          var se = {
              placement: 'bottom',
              positionFixed: !1,
              eventsEnabled: !0,
              removeOnDestroy: !1,
              onCreate: function() {},
              onUpdate: function() {},
              modifiers: {
                shift: {
                  order: 100,
                  enabled: !0,
                  fn: function(n) {
                    var e = n.placement,
                      t = e.split('-')[0],
                      r = e.split('-')[1];
                    if (r) {
                      var o = n.offsets,
                        i = o.reference,
                        a = o.popper,
                        l = -1 !== ['bottom', 'top'].indexOf(t),
                        s = l ? 'left' : 'top',
                        c = l ? 'width' : 'height',
                        d = {
                          start: In({}, s, i[s]),
                          end: In({}, s, i[s] + i[c] - a[c]),
                        };
                      n.offsets.popper = On({}, a, d[r]);
                    }
                    return n;
                  },
                },
                offset: {
                  order: 200,
                  enabled: !0,
                  fn: function(n, e) {
                    var t = e.offset,
                      r = n.placement,
                      o = n.offsets,
                      i = o.popper,
                      a = o.reference,
                      l = r.split('-')[0],
                      s = void 0;
                    return (
                      (s = Zn(+t) ? [+t, 0] : le(t, i, a, l)),
                      'left' === l
                        ? ((i.top += s[0]), (i.left -= s[1]))
                        : 'right' === l
                        ? ((i.top += s[0]), (i.left += s[1]))
                        : 'top' === l
                        ? ((i.left += s[0]), (i.top -= s[1]))
                        : 'bottom' === l && ((i.left += s[0]), (i.top += s[1])),
                      (n.popper = i),
                      n
                    );
                  },
                  offset: 0,
                },
                preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function(n, e) {
                    var t = e.boundariesElement || kn(n.instance.popper);
                    n.instance.reference === t && (t = kn(t));
                    var r = Kn('transform'),
                      o = n.instance.popper.style,
                      i = o.top,
                      a = o.left,
                      l = o[r];
                    (o.top = ''), (o.left = ''), (o[r] = '');
                    var s = Mn(
                      n.instance.popper,
                      n.instance.reference,
                      e.padding,
                      t,
                      n.positionFixed,
                    );
                    (o.top = i), (o.left = a), (o[r] = l), (e.boundaries = s);
                    var c = e.priority,
                      d = n.offsets.popper,
                      u = {
                        primary: function(n) {
                          var t = d[n];
                          return (
                            d[n] < s[n] &&
                              !e.escapeWithReference &&
                              (t = Math.max(d[n], s[n])),
                            In({}, n, t)
                          );
                        },
                        secondary: function(n) {
                          var t = 'right' === n ? 'left' : 'top',
                            r = d[t];
                          return (
                            d[n] > s[n] &&
                              !e.escapeWithReference &&
                              (r = Math.min(
                                d[t],
                                s[n] - ('right' === n ? d.width : d.height),
                              )),
                            In({}, t, r)
                          );
                        },
                      };
                    return (
                      c.forEach(function(n) {
                        var e =
                          -1 !== ['left', 'top'].indexOf(n)
                            ? 'primary'
                            : 'secondary';
                        d = On({}, d, u[e](n));
                      }),
                      (n.offsets.popper = d),
                      n
                    );
                  },
                  priority: ['left', 'right', 'top', 'bottom'],
                  padding: 5,
                  boundariesElement: 'scrollParent',
                },
                keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function(n) {
                    var e = n.offsets,
                      t = e.popper,
                      r = e.reference,
                      o = n.placement.split('-')[0],
                      i = Math.floor,
                      a = -1 !== ['top', 'bottom'].indexOf(o),
                      l = a ? 'right' : 'bottom',
                      s = a ? 'left' : 'top',
                      c = a ? 'width' : 'height';
                    return (
                      t[l] < i(r[s]) && (n.offsets.popper[s] = i(r[s]) - t[c]),
                      t[s] > i(r[l]) && (n.offsets.popper[s] = i(r[l])),
                      n
                    );
                  },
                },
                arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function(n, e) {
                    var t;
                    if (!te(n.instance.modifiers, 'arrow', 'keepTogether'))
                      return n;
                    var r = e.element;
                    if ('string' == typeof r) {
                      if (!(r = n.instance.popper.querySelector(r))) return n;
                    } else if (!n.instance.popper.contains(r))
                      return (
                        console.warn(
                          'WARNING: `arrow.element` must be child of its popper element!',
                        ),
                        n
                      );
                    var o = n.placement.split('-')[0],
                      i = n.offsets,
                      a = i.popper,
                      l = i.reference,
                      s = -1 !== ['left', 'right'].indexOf(o),
                      c = s ? 'height' : 'width',
                      d = s ? 'Top' : 'Left',
                      u = d.toLowerCase(),
                      f = s ? 'left' : 'top',
                      m = s ? 'bottom' : 'right',
                      p = Hn(r)[c];
                    l[m] - p < a[u] &&
                      (n.offsets.popper[u] -= a[u] - (l[m] - p)),
                      l[u] + p > a[m] &&
                        (n.offsets.popper[u] += l[u] + p - a[m]),
                      (n.offsets.popper = Pn(n.offsets.popper));
                    var g = l[u] + l[c] / 2 - p / 2,
                      h = gn(n.instance.popper),
                      b = parseFloat(h['margin' + d], 10),
                      v = parseFloat(h['border' + d + 'Width'], 10),
                      x = g - n.offsets.popper[u] - b - v;
                    return (
                      (x = Math.max(Math.min(a[c] - p, x), 0)),
                      (n.arrowElement = r),
                      (n.offsets.arrow =
                        (In((t = {}), u, Math.round(x)), In(t, f, ''), t)),
                      n
                    );
                  },
                  element: '[x-arrow]',
                },
                flip: {
                  order: 600,
                  enabled: !0,
                  fn: function(n, e) {
                    if ($n(n.instance.modifiers, 'inner')) return n;
                    if (n.flipped && n.placement === n.originalPlacement)
                      return n;
                    var t = Mn(
                        n.instance.popper,
                        n.instance.reference,
                        e.padding,
                        e.boundariesElement,
                        n.positionFixed,
                      ),
                      r = n.placement.split('-')[0],
                      o = Un(r),
                      i = n.placement.split('-')[1] || '',
                      a = [];
                    switch (e.behavior) {
                      case ae.FLIP:
                        a = [r, o];
                        break;
                      case ae.CLOCKWISE:
                        a = ie(r);
                        break;
                      case ae.COUNTERCLOCKWISE:
                        a = ie(r, !0);
                        break;
                      default:
                        a = e.behavior;
                    }
                    return (
                      a.forEach(function(l, s) {
                        if (r !== l || a.length === s + 1) return n;
                        (r = n.placement.split('-')[0]), (o = Un(r));
                        var c = n.offsets.popper,
                          d = n.offsets.reference,
                          u = Math.floor,
                          f =
                            ('left' === r && u(c.right) > u(d.left)) ||
                            ('right' === r && u(c.left) < u(d.right)) ||
                            ('top' === r && u(c.bottom) > u(d.top)) ||
                            ('bottom' === r && u(c.top) < u(d.bottom)),
                          m = u(c.left) < u(t.left),
                          p = u(c.right) > u(t.right),
                          g = u(c.top) < u(t.top),
                          h = u(c.bottom) > u(t.bottom),
                          b =
                            ('left' === r && m) ||
                            ('right' === r && p) ||
                            ('top' === r && g) ||
                            ('bottom' === r && h),
                          v = -1 !== ['top', 'bottom'].indexOf(r),
                          x =
                            !!e.flipVariations &&
                            ((v && 'start' === i && m) ||
                              (v && 'end' === i && p) ||
                              (!v && 'start' === i && g) ||
                              (!v && 'end' === i && h)),
                          y =
                            !!e.flipVariationsByContent &&
                            ((v && 'start' === i && p) ||
                              (v && 'end' === i && m) ||
                              (!v && 'start' === i && h) ||
                              (!v && 'end' === i && g)),
                          w = x || y;
                        (f || b || w) &&
                          ((n.flipped = !0),
                          (f || b) && (r = a[s + 1]),
                          w &&
                            (i = (function(n) {
                              return 'end' === n
                                ? 'start'
                                : 'start' === n
                                ? 'end'
                                : n;
                            })(i)),
                          (n.placement = r + (i ? '-' + i : '')),
                          (n.offsets.popper = On(
                            {},
                            n.offsets.popper,
                            Wn(
                              n.instance.popper,
                              n.offsets.reference,
                              n.placement,
                            ),
                          )),
                          (n = Bn(n.instance.modifiers, n, 'flip')));
                      }),
                      n
                    );
                  },
                  behavior: 'flip',
                  padding: 5,
                  boundariesElement: 'viewport',
                  flipVariations: !1,
                  flipVariationsByContent: !1,
                },
                inner: {
                  order: 700,
                  enabled: !1,
                  fn: function(n) {
                    var e = n.placement,
                      t = e.split('-')[0],
                      r = n.offsets,
                      o = r.popper,
                      i = r.reference,
                      a = -1 !== ['left', 'right'].indexOf(t),
                      l = -1 === ['top', 'left'].indexOf(t);
                    return (
                      (o[a ? 'left' : 'top'] =
                        i[t] - (l ? o[a ? 'width' : 'height'] : 0)),
                      (n.placement = Un(e)),
                      (n.offsets.popper = Pn(o)),
                      n
                    );
                  },
                },
                hide: {
                  order: 800,
                  enabled: !0,
                  fn: function(n) {
                    if (!te(n.instance.modifiers, 'hide', 'preventOverflow'))
                      return n;
                    var e = n.offsets.reference,
                      t = qn(n.instance.modifiers, function(n) {
                        return 'preventOverflow' === n.name;
                      }).boundaries;
                    if (
                      e.bottom < t.top ||
                      e.left > t.right ||
                      e.top > t.bottom ||
                      e.right < t.left
                    ) {
                      if (!0 === n.hide) return n;
                      (n.hide = !0), (n.attributes['x-out-of-boundaries'] = '');
                    } else {
                      if (!1 === n.hide) return n;
                      (n.hide = !1), (n.attributes['x-out-of-boundaries'] = !1);
                    }
                    return n;
                  },
                },
                computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function(n, e) {
                    var t = e.x,
                      r = e.y,
                      o = n.offsets.popper,
                      i = qn(n.instance.modifiers, function(n) {
                        return 'applyStyle' === n.name;
                      }).gpuAcceleration;
                    void 0 !== i &&
                      console.warn(
                        'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
                      );
                    var a = void 0 !== i ? i : e.gpuAcceleration,
                      l = kn(n.instance.popper),
                      s = jn(l),
                      c = { position: o.position },
                      d = (function(n, e) {
                        var t = n.offsets,
                          r = t.popper,
                          o = t.reference,
                          i = Math.round,
                          a = Math.floor,
                          l = function(n) {
                            return n;
                          },
                          s = i(o.width),
                          c = i(r.width),
                          d = -1 !== ['left', 'right'].indexOf(n.placement),
                          u = -1 !== n.placement.indexOf('-'),
                          f = e ? (d || u || s % 2 == c % 2 ? i : a) : l,
                          m = e ? i : l;
                        return {
                          left: f(
                            s % 2 == 1 && c % 2 == 1 && !u && e
                              ? r.left - 1
                              : r.left,
                          ),
                          top: m(r.top),
                          bottom: m(r.bottom),
                          right: f(r.right),
                        };
                      })(n, window.devicePixelRatio < 2 || !ee),
                      u = 'bottom' === t ? 'top' : 'bottom',
                      f = 'right' === r ? 'left' : 'right',
                      m = Kn('transform'),
                      p = void 0,
                      g = void 0;
                    if (
                      ((g =
                        'bottom' === u
                          ? 'HTML' === l.nodeName
                            ? -l.clientHeight + d.bottom
                            : -s.height + d.bottom
                          : d.top),
                      (p =
                        'right' === f
                          ? 'HTML' === l.nodeName
                            ? -l.clientWidth + d.right
                            : -s.width + d.right
                          : d.left),
                      a && m)
                    )
                      (c[m] = 'translate3d(' + p + 'px, ' + g + 'px, 0)'),
                        (c[u] = 0),
                        (c[f] = 0),
                        (c.willChange = 'transform');
                    else {
                      var h = 'bottom' === u ? -1 : 1,
                        b = 'right' === f ? -1 : 1;
                      (c[u] = g * h),
                        (c[f] = p * b),
                        (c.willChange = u + ', ' + f);
                    }
                    var v = { 'x-placement': n.placement };
                    return (
                      (n.attributes = On({}, v, n.attributes)),
                      (n.styles = On({}, c, n.styles)),
                      (n.arrowStyles = On({}, n.offsets.arrow, n.arrowStyles)),
                      n
                    );
                  },
                  gpuAcceleration: !0,
                  x: 'bottom',
                  y: 'right',
                },
                applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function(n) {
                    var e, t;
                    return (
                      ne(n.instance.popper, n.styles),
                      (e = n.instance.popper),
                      (t = n.attributes),
                      Object.keys(t).forEach(function(n) {
                        !1 !== t[n]
                          ? e.setAttribute(n, t[n])
                          : e.removeAttribute(n);
                      }),
                      n.arrowElement &&
                        Object.keys(n.arrowStyles).length &&
                        ne(n.arrowElement, n.arrowStyles),
                      n
                    );
                  },
                  onLoad: function(n, e, t, r, o) {
                    var i = Fn(o, e, n, t.positionFixed),
                      a = Rn(
                        t.placement,
                        i,
                        e,
                        n,
                        t.modifiers.flip.boundariesElement,
                        t.modifiers.flip.padding,
                      );
                    return (
                      e.setAttribute('x-placement', a),
                      ne(e, {
                        position: t.positionFixed ? 'fixed' : 'absolute',
                      }),
                      t
                    );
                  },
                  gpuAcceleration: void 0,
                },
              },
            },
            ce = (function() {
              function n(e, t) {
                var r = this,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                Dn(this, n),
                  (this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update);
                  }),
                  (this.update = mn(this.update.bind(this))),
                  (this.options = On({}, n.Defaults, o)),
                  (this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: [],
                  }),
                  (this.reference = e && e.jquery ? e[0] : e),
                  (this.popper = t && t.jquery ? t[0] : t),
                  (this.options.modifiers = {}),
                  Object.keys(
                    On({}, n.Defaults.modifiers, o.modifiers),
                  ).forEach(function(e) {
                    r.options.modifiers[e] = On(
                      {},
                      n.Defaults.modifiers[e] || {},
                      o.modifiers ? o.modifiers[e] : {},
                    );
                  }),
                  (this.modifiers = Object.keys(this.options.modifiers)
                    .map(function(n) {
                      return On({ name: n }, r.options.modifiers[n]);
                    })
                    .sort(function(n, e) {
                      return n.order - e.order;
                    })),
                  this.modifiers.forEach(function(n) {
                    n.enabled &&
                      pn(n.onLoad) &&
                      n.onLoad(r.reference, r.popper, r.options, n, r.state);
                  }),
                  this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(),
                  (this.state.eventsEnabled = i);
              }
              return (
                An(n, [
                  {
                    key: 'update',
                    value: function() {
                      return Vn.call(this);
                    },
                  },
                  {
                    key: 'destroy',
                    value: function() {
                      return Qn.call(this);
                    },
                  },
                  {
                    key: 'enableEventListeners',
                    value: function() {
                      return Gn.call(this);
                    },
                  },
                  {
                    key: 'disableEventListeners',
                    value: function() {
                      return Jn.call(this);
                    },
                  },
                ]),
                n
              );
            })();
          (ce.Utils = ('undefined' != typeof window ? window : n).PopperUtils),
            (ce.placements = re),
            (ce.Defaults = se);
          var de = 'dropdown',
            ue = t.fn[de],
            fe = new RegExp('38|40|27'),
            me = {
              HIDE: 'hide.bs.dropdown',
              HIDDEN: 'hidden.bs.dropdown',
              SHOW: 'show.bs.dropdown',
              SHOWN: 'shown.bs.dropdown',
              CLICK: 'click.bs.dropdown',
              CLICK_DATA_API: 'click.bs.dropdown.data-api',
              KEYDOWN_DATA_API: 'keydown.bs.dropdown.data-api',
              KEYUP_DATA_API: 'keyup.bs.dropdown.data-api',
            },
            pe = 'disabled',
            ge = 'show',
            he = 'dropup',
            be = 'dropright',
            ve = 'dropleft',
            xe = 'dropdown-menu-right',
            ye = 'position-static',
            we = '[data-toggle="dropdown"]',
            ke = '.dropdown form',
            _e = '.dropdown-menu',
            Ee = '.navbar-nav',
            Te = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
            Ce = 'top-start',
            Se = 'top-end',
            Ne = 'bottom-start',
            De = 'bottom-end',
            Ae = 'right-start',
            Ie = 'left-start',
            Oe = {
              offset: 0,
              flip: !0,
              boundary: 'scrollParent',
              reference: 'toggle',
              display: 'dynamic',
              popperConfig: null,
            },
            Pe = {
              offset: '(number|string|function)',
              flip: 'boolean',
              boundary: '(string|element)',
              reference: '(string|element)',
              display: 'string',
              popperConfig: '(null|object)',
            },
            je = (function() {
              function n(n, e) {
                (this._element = n),
                  (this._popper = null),
                  (this._config = this._getConfig(e)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              var e = n.prototype;
              return (
                (e.toggle = function() {
                  if (
                    !this._element.disabled &&
                    !t(this._element).hasClass(pe)
                  ) {
                    var e = t(this._menu).hasClass(ge);
                    n._clearMenus(), e || this.show(!0);
                  }
                }),
                (e.show = function(e) {
                  if (
                    (void 0 === e && (e = !1),
                    !(
                      this._element.disabled ||
                      t(this._element).hasClass(pe) ||
                      t(this._menu).hasClass(ge)
                    ))
                  ) {
                    var r = { relatedTarget: this._element },
                      o = t.Event(me.SHOW, r),
                      i = n._getParentFromElement(this._element);
                    if ((t(i).trigger(o), !o.isDefaultPrevented())) {
                      if (!this._inNavbar && e) {
                        if (void 0 === ce)
                          throw new TypeError(
                            "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
                          );
                        var a = this._element;
                        'parent' === this._config.reference
                          ? (a = i)
                          : d.isElement(this._config.reference) &&
                            ((a = this._config.reference),
                            void 0 !== this._config.reference.jquery &&
                              (a = this._config.reference[0])),
                          'scrollParent' !== this._config.boundary &&
                            t(i).addClass(ye),
                          (this._popper = new ce(
                            a,
                            this._menu,
                            this._getPopperConfig(),
                          ));
                      }
                      'ontouchstart' in document.documentElement &&
                        0 === t(i).closest(Ee).length &&
                        t(document.body)
                          .children()
                          .on('mouseover', null, t.noop),
                        this._element.focus(),
                        this._element.setAttribute('aria-expanded', !0),
                        t(this._menu).toggleClass(ge),
                        t(i)
                          .toggleClass(ge)
                          .trigger(t.Event(me.SHOWN, r));
                    }
                  }
                }),
                (e.hide = function() {
                  if (
                    !this._element.disabled &&
                    !t(this._element).hasClass(pe) &&
                    t(this._menu).hasClass(ge)
                  ) {
                    var e = { relatedTarget: this._element },
                      r = t.Event(me.HIDE, e),
                      o = n._getParentFromElement(this._element);
                    t(o).trigger(r),
                      r.isDefaultPrevented() ||
                        (this._popper && this._popper.destroy(),
                        t(this._menu).toggleClass(ge),
                        t(o)
                          .toggleClass(ge)
                          .trigger(t.Event(me.HIDDEN, e)));
                  }
                }),
                (e.dispose = function() {
                  t.removeData(this._element, 'bs.dropdown'),
                    t(this._element).off('.bs.dropdown'),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper &&
                      (this._popper.destroy(), (this._popper = null));
                }),
                (e.update = function() {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e._addEventListeners = function() {
                  var n = this;
                  t(this._element).on(me.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), n.toggle();
                  });
                }),
                (e._getConfig = function(n) {
                  return (
                    (n = l(
                      {},
                      this.constructor.Default,
                      {},
                      t(this._element).data(),
                      {},
                      n,
                    )),
                    d.typeCheckConfig(de, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (e._getMenuElement = function() {
                  if (!this._menu) {
                    var e = n._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(_e));
                  }
                  return this._menu;
                }),
                (e._getPlacement = function() {
                  var n = t(this._element.parentNode),
                    e = Ne;
                  return (
                    n.hasClass(he)
                      ? ((e = Ce), t(this._menu).hasClass(xe) && (e = Se))
                      : n.hasClass(be)
                      ? (e = Ae)
                      : n.hasClass(ve)
                      ? (e = Ie)
                      : t(this._menu).hasClass(xe) && (e = De),
                    e
                  );
                }),
                (e._detectNavbar = function() {
                  return t(this._element).closest('.navbar').length > 0;
                }),
                (e._getOffset = function() {
                  var n = this,
                    e = {};
                  return (
                    'function' == typeof this._config.offset
                      ? (e.fn = function(e) {
                          return (
                            (e.offsets = l(
                              {},
                              e.offsets,
                              {},
                              n._config.offset(e.offsets, n._element) || {},
                            )),
                            e
                          );
                        })
                      : (e.offset = this._config.offset),
                    e
                  );
                }),
                (e._getPopperConfig = function() {
                  var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: this._getOffset(),
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary,
                      },
                    },
                  };
                  return (
                    'static' === this._config.display &&
                      (n.modifiers.applyStyle = { enabled: !1 }),
                    l({}, n, {}, this._config.popperConfig)
                  );
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this).data('bs.dropdown');
                    if (
                      (r ||
                        ((r = new n(this, 'object' == typeof e ? e : null)),
                        t(this).data('bs.dropdown', r)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === r[e])
                        throw new TypeError('No method named "' + e + '"');
                      r[e]();
                    }
                  });
                }),
                (n._clearMenus = function(e) {
                  if (
                    !e ||
                    (3 !== e.which && ('keyup' !== e.type || 9 === e.which))
                  )
                    for (
                      var r = [].slice.call(document.querySelectorAll(we)),
                        o = 0,
                        i = r.length;
                      o < i;
                      o++
                    ) {
                      var a = n._getParentFromElement(r[o]),
                        l = t(r[o]).data('bs.dropdown'),
                        s = { relatedTarget: r[o] };
                      if ((e && 'click' === e.type && (s.clickEvent = e), l)) {
                        var c = l._menu;
                        if (
                          t(a).hasClass(ge) &&
                          !(
                            e &&
                            (('click' === e.type &&
                              /input|textarea/i.test(e.target.tagName)) ||
                              ('keyup' === e.type && 9 === e.which)) &&
                            t.contains(a, e.target)
                          )
                        ) {
                          var d = t.Event(me.HIDE, s);
                          t(a).trigger(d),
                            d.isDefaultPrevented() ||
                              ('ontouchstart' in document.documentElement &&
                                t(document.body)
                                  .children()
                                  .off('mouseover', null, t.noop),
                              r[o].setAttribute('aria-expanded', 'false'),
                              l._popper && l._popper.destroy(),
                              t(c).removeClass(ge),
                              t(a)
                                .removeClass(ge)
                                .trigger(t.Event(me.HIDDEN, s)));
                        }
                      }
                    }
                }),
                (n._getParentFromElement = function(n) {
                  var e,
                    t = d.getSelectorFromElement(n);
                  return (
                    t && (e = document.querySelector(t)), e || n.parentNode
                  );
                }),
                (n._dataApiKeydownHandler = function(e) {
                  if (
                    (/input|textarea/i.test(e.target.tagName)
                      ? !(
                          32 === e.which ||
                          (27 !== e.which &&
                            ((40 !== e.which && 38 !== e.which) ||
                              t(e.target).closest(_e).length))
                        )
                      : fe.test(e.which)) &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    !this.disabled && !t(this).hasClass(pe))
                  ) {
                    var r = n._getParentFromElement(this),
                      o = t(r).hasClass(ge);
                    if (o || 27 !== e.which)
                      if (o && (!o || (27 !== e.which && 32 !== e.which))) {
                        var i = [].slice
                          .call(r.querySelectorAll(Te))
                          .filter(function(n) {
                            return t(n).is(':visible');
                          });
                        if (0 !== i.length) {
                          var a = i.indexOf(e.target);
                          38 === e.which && a > 0 && a--,
                            40 === e.which && a < i.length - 1 && a++,
                            a < 0 && (a = 0),
                            i[a].focus();
                        }
                      } else {
                        if (27 === e.which) {
                          var l = r.querySelector(we);
                          t(l).trigger('focus');
                        }
                        t(this).trigger('click');
                      }
                  }
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return Oe;
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return Pe;
                    },
                  },
                ]),
                n
              );
            })();
          t(document)
            .on(me.KEYDOWN_DATA_API, we, je._dataApiKeydownHandler)
            .on(me.KEYDOWN_DATA_API, _e, je._dataApiKeydownHandler)
            .on(me.CLICK_DATA_API + ' ' + me.KEYUP_DATA_API, je._clearMenus)
            .on(me.CLICK_DATA_API, we, function(n) {
              n.preventDefault(),
                n.stopPropagation(),
                je._jQueryInterface.call(t(this), 'toggle');
            })
            .on(me.CLICK_DATA_API, ke, function(n) {
              n.stopPropagation();
            }),
            (t.fn[de] = je._jQueryInterface),
            (t.fn[de].Constructor = je),
            (t.fn[de].noConflict = function() {
              return (t.fn[de] = ue), je._jQueryInterface;
            });
          var Le = t.fn.modal,
            ze = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            Me = {
              backdrop: '(boolean|string)',
              keyboard: 'boolean',
              focus: 'boolean',
              show: 'boolean',
            },
            Re = {
              HIDE: 'hide.bs.modal',
              HIDE_PREVENTED: 'hidePrevented.bs.modal',
              HIDDEN: 'hidden.bs.modal',
              SHOW: 'show.bs.modal',
              SHOWN: 'shown.bs.modal',
              FOCUSIN: 'focusin.bs.modal',
              RESIZE: 'resize.bs.modal',
              CLICK_DISMISS: 'click.dismiss.bs.modal',
              KEYDOWN_DISMISS: 'keydown.dismiss.bs.modal',
              MOUSEUP_DISMISS: 'mouseup.dismiss.bs.modal',
              MOUSEDOWN_DISMISS: 'mousedown.dismiss.bs.modal',
              CLICK_DATA_API: 'click.bs.modal.data-api',
            },
            Fe = 'modal-dialog-scrollable',
            He = 'modal-scrollbar-measure',
            Ue = 'modal-backdrop',
            We = 'modal-open',
            qe = 'fade',
            Be = 'show',
            Ve = 'modal-static',
            $e = {
              DIALOG: '.modal-dialog',
              MODAL_BODY: '.modal-body',
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
              STICKY_CONTENT: '.sticky-top',
            },
            Ke = (function() {
              function n(n, e) {
                (this._config = this._getConfig(e)),
                  (this._element = n),
                  (this._dialog = n.querySelector($e.DIALOG)),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._isTransitioning = !1),
                  (this._scrollbarWidth = 0);
              }
              var e = n.prototype;
              return (
                (e.toggle = function(n) {
                  return this._isShown ? this.hide() : this.show(n);
                }),
                (e.show = function(n) {
                  var e = this;
                  if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(qe) &&
                      (this._isTransitioning = !0);
                    var r = t.Event(Re.SHOW, { relatedTarget: n });
                    t(this._element).trigger(r),
                      this._isShown ||
                        r.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        this._adjustDialog(),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(this._element).on(
                          Re.CLICK_DISMISS,
                          $e.DATA_DISMISS,
                          function(n) {
                            return e.hide(n);
                          },
                        ),
                        t(this._dialog).on(Re.MOUSEDOWN_DISMISS, function() {
                          t(e._element).one(Re.MOUSEUP_DISMISS, function(n) {
                            t(n.target).is(e._element) &&
                              (e._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function() {
                          return e._showElement(n);
                        }));
                  }
                }),
                (e.hide = function(n) {
                  var e = this;
                  if (
                    (n && n.preventDefault(),
                    this._isShown && !this._isTransitioning)
                  ) {
                    var r = t.Event(Re.HIDE);
                    if (
                      (t(this._element).trigger(r),
                      this._isShown && !r.isDefaultPrevented())
                    ) {
                      this._isShown = !1;
                      var o = t(this._element).hasClass(qe);
                      if (
                        (o && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(Re.FOCUSIN),
                        t(this._element).removeClass(Be),
                        t(this._element).off(Re.CLICK_DISMISS),
                        t(this._dialog).off(Re.MOUSEDOWN_DISMISS),
                        o)
                      ) {
                        var i = d.getTransitionDurationFromElement(
                          this._element,
                        );
                        t(this._element)
                          .one(d.TRANSITION_END, function(n) {
                            return e._hideModal(n);
                          })
                          .emulateTransitionEnd(i);
                      } else this._hideModal();
                    }
                  }
                }),
                (e.dispose = function() {
                  [window, this._element, this._dialog].forEach(function(n) {
                    return t(n).off('.bs.modal');
                  }),
                    t(document).off(Re.FOCUSIN),
                    t.removeData(this._element, 'bs.modal'),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._isTransitioning = null),
                    (this._scrollbarWidth = null);
                }),
                (e.handleUpdate = function() {
                  this._adjustDialog();
                }),
                (e._getConfig = function(n) {
                  return (
                    (n = l({}, ze, {}, n)), d.typeCheckConfig('modal', n, Me), n
                  );
                }),
                (e._triggerBackdropTransition = function() {
                  var n = this;
                  if ('static' === this._config.backdrop) {
                    var e = t.Event(Re.HIDE_PREVENTED);
                    if ((t(this._element).trigger(e), e.defaultPrevented))
                      return;
                    this._element.classList.add(Ve);
                    var r = d.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(d.TRANSITION_END, function() {
                        n._element.classList.remove(Ve);
                      })
                      .emulateTransitionEnd(r),
                      this._element.focus();
                  } else this.hide();
                }),
                (e._showElement = function(n) {
                  var e = this,
                    r = t(this._element).hasClass(qe),
                    o = this._dialog
                      ? this._dialog.querySelector($e.MODAL_BODY)
                      : null;
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = 'block'),
                    this._element.removeAttribute('aria-hidden'),
                    this._element.setAttribute('aria-modal', !0),
                    t(this._dialog).hasClass(Fe) && o
                      ? (o.scrollTop = 0)
                      : (this._element.scrollTop = 0),
                    r && d.reflow(this._element),
                    t(this._element).addClass(Be),
                    this._config.focus && this._enforceFocus();
                  var i = t.Event(Re.SHOWN, { relatedTarget: n }),
                    a = function() {
                      e._config.focus && e._element.focus(),
                        (e._isTransitioning = !1),
                        t(e._element).trigger(i);
                    };
                  if (r) {
                    var l = d.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog)
                      .one(d.TRANSITION_END, a)
                      .emulateTransitionEnd(l);
                  } else a();
                }),
                (e._enforceFocus = function() {
                  var n = this;
                  t(document)
                    .off(Re.FOCUSIN)
                    .on(Re.FOCUSIN, function(e) {
                      document !== e.target &&
                        n._element !== e.target &&
                        0 === t(n._element).has(e.target).length &&
                        n._element.focus();
                    });
                }),
                (e._setEscapeEvent = function() {
                  var n = this;
                  this._isShown && this._config.keyboard
                    ? t(this._element).on(Re.KEYDOWN_DISMISS, function(e) {
                        27 === e.which && n._triggerBackdropTransition();
                      })
                    : this._isShown || t(this._element).off(Re.KEYDOWN_DISMISS);
                }),
                (e._setResizeEvent = function() {
                  var n = this;
                  this._isShown
                    ? t(window).on(Re.RESIZE, function(e) {
                        return n.handleUpdate(e);
                      })
                    : t(window).off(Re.RESIZE);
                }),
                (e._hideModal = function() {
                  var n = this;
                  (this._element.style.display = 'none'),
                    this._element.setAttribute('aria-hidden', !0),
                    this._element.removeAttribute('aria-modal'),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function() {
                      t(document.body).removeClass(We),
                        n._resetAdjustments(),
                        n._resetScrollbar(),
                        t(n._element).trigger(Re.HIDDEN);
                    });
                }),
                (e._removeBackdrop = function() {
                  this._backdrop &&
                    (t(this._backdrop).remove(), (this._backdrop = null));
                }),
                (e._showBackdrop = function(n) {
                  var e = this,
                    r = t(this._element).hasClass(qe) ? qe : '';
                  if (this._isShown && this._config.backdrop) {
                    if (
                      ((this._backdrop = document.createElement('div')),
                      (this._backdrop.className = Ue),
                      r && this._backdrop.classList.add(r),
                      t(this._backdrop).appendTo(document.body),
                      t(this._element).on(Re.CLICK_DISMISS, function(n) {
                        e._ignoreBackdropClick
                          ? (e._ignoreBackdropClick = !1)
                          : n.target === n.currentTarget &&
                            e._triggerBackdropTransition();
                      }),
                      r && d.reflow(this._backdrop),
                      t(this._backdrop).addClass(Be),
                      !n)
                    )
                      return;
                    if (!r) return void n();
                    var o = d.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop)
                      .one(d.TRANSITION_END, n)
                      .emulateTransitionEnd(o);
                  } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Be);
                    var i = function() {
                      e._removeBackdrop(), n && n();
                    };
                    if (t(this._element).hasClass(qe)) {
                      var a = d.getTransitionDurationFromElement(
                        this._backdrop,
                      );
                      t(this._backdrop)
                        .one(d.TRANSITION_END, i)
                        .emulateTransitionEnd(a);
                    } else i();
                  } else n && n();
                }),
                (e._adjustDialog = function() {
                  var n =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    n &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + 'px'),
                    this._isBodyOverflowing &&
                      !n &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + 'px');
                }),
                (e._resetAdjustments = function() {
                  (this._element.style.paddingLeft = ''),
                    (this._element.style.paddingRight = '');
                }),
                (e._checkScrollbar = function() {
                  var n = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing =
                    n.left + n.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (e._setScrollbar = function() {
                  var n = this;
                  if (this._isBodyOverflowing) {
                    var e = [].slice.call(
                        document.querySelectorAll($e.FIXED_CONTENT),
                      ),
                      r = [].slice.call(
                        document.querySelectorAll($e.STICKY_CONTENT),
                      );
                    t(e).each(function(e, r) {
                      var o = r.style.paddingRight,
                        i = t(r).css('padding-right');
                      t(r)
                        .data('padding-right', o)
                        .css(
                          'padding-right',
                          parseFloat(i) + n._scrollbarWidth + 'px',
                        );
                    }),
                      t(r).each(function(e, r) {
                        var o = r.style.marginRight,
                          i = t(r).css('margin-right');
                        t(r)
                          .data('margin-right', o)
                          .css(
                            'margin-right',
                            parseFloat(i) - n._scrollbarWidth + 'px',
                          );
                      });
                    var o = document.body.style.paddingRight,
                      i = t(document.body).css('padding-right');
                    t(document.body)
                      .data('padding-right', o)
                      .css(
                        'padding-right',
                        parseFloat(i) + this._scrollbarWidth + 'px',
                      );
                  }
                  t(document.body).addClass(We);
                }),
                (e._resetScrollbar = function() {
                  var n = [].slice.call(
                    document.querySelectorAll($e.FIXED_CONTENT),
                  );
                  t(n).each(function(n, e) {
                    var r = t(e).data('padding-right');
                    t(e).removeData('padding-right'),
                      (e.style.paddingRight = r || '');
                  });
                  var e = [].slice.call(
                    document.querySelectorAll('' + $e.STICKY_CONTENT),
                  );
                  t(e).each(function(n, e) {
                    var r = t(e).data('margin-right');
                    void 0 !== r &&
                      t(e)
                        .css('margin-right', r)
                        .removeData('margin-right');
                  });
                  var r = t(document.body).data('padding-right');
                  t(document.body).removeData('padding-right'),
                    (document.body.style.paddingRight = r || '');
                }),
                (e._getScrollbarWidth = function() {
                  var n = document.createElement('div');
                  (n.className = He), document.body.appendChild(n);
                  var e = n.getBoundingClientRect().width - n.clientWidth;
                  return document.body.removeChild(n), e;
                }),
                (n._jQueryInterface = function(e, r) {
                  return this.each(function() {
                    var o = t(this).data('bs.modal'),
                      i = l(
                        {},
                        ze,
                        {},
                        t(this).data(),
                        {},
                        'object' == typeof e && e ? e : {},
                      );
                    if (
                      (o || ((o = new n(this, i)), t(this).data('bs.modal', o)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === o[e])
                        throw new TypeError('No method named "' + e + '"');
                      o[e](r);
                    } else i.show && o.show(r);
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return ze;
                    },
                  },
                ]),
                n
              );
            })();
          t(document).on(Re.CLICK_DATA_API, $e.DATA_TOGGLE, function(n) {
            var e,
              r = this,
              o = d.getSelectorFromElement(this);
            o && (e = document.querySelector(o));
            var i = t(e).data('bs.modal')
              ? 'toggle'
              : l({}, t(e).data(), {}, t(this).data());
            ('A' !== this.tagName && 'AREA' !== this.tagName) ||
              n.preventDefault();
            var a = t(e).one(Re.SHOW, function(n) {
              n.isDefaultPrevented() ||
                a.one(Re.HIDDEN, function() {
                  t(r).is(':visible') && r.focus();
                });
            });
            Ke._jQueryInterface.call(t(e), i, this);
          }),
            (t.fn.modal = Ke._jQueryInterface),
            (t.fn.modal.Constructor = Ke),
            (t.fn.modal.noConflict = function() {
              return (t.fn.modal = Le), Ke._jQueryInterface;
            });
          var Qe = [
              'background',
              'cite',
              'href',
              'itemtype',
              'longdesc',
              'poster',
              'src',
              'xlink:href',
            ],
            Ye = {
              '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
              a: ['target', 'href', 'title', 'rel'],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ['src', 'alt', 'title', 'width', 'height'],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            Xe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            Ge = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
          function Je(n, e, t) {
            if (0 === n.length) return n;
            if (t && 'function' == typeof t) return t(n);
            for (
              var r = new window.DOMParser().parseFromString(n, 'text/html'),
                o = Object.keys(e),
                i = [].slice.call(r.body.querySelectorAll('*')),
                a = function(n, t) {
                  var r = i[n],
                    a = r.nodeName.toLowerCase();
                  if (-1 === o.indexOf(r.nodeName.toLowerCase()))
                    return r.parentNode.removeChild(r), 'continue';
                  var l = [].slice.call(r.attributes),
                    s = [].concat(e['*'] || [], e[a] || []);
                  l.forEach(function(n) {
                    (function(n, e) {
                      var t = n.nodeName.toLowerCase();
                      if (-1 !== e.indexOf(t))
                        return (
                          -1 === Qe.indexOf(t) ||
                          Boolean(
                            n.nodeValue.match(Xe) || n.nodeValue.match(Ge),
                          )
                        );
                      for (
                        var r = e.filter(function(n) {
                            return n instanceof RegExp;
                          }),
                          o = 0,
                          i = r.length;
                        o < i;
                        o++
                      )
                        if (t.match(r[o])) return !0;
                      return !1;
                    })(n, s) || r.removeAttribute(n.nodeName);
                  });
                },
                l = 0,
                s = i.length;
              l < s;
              l++
            )
              a(l);
            return r.body.innerHTML;
          }
          var Ze = 'tooltip',
            nt = t.fn.tooltip,
            et = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
            tt = ['sanitize', 'whiteList', 'sanitizeFn'],
            rt = {
              animation: 'boolean',
              template: 'string',
              title: '(string|element|function)',
              trigger: 'string',
              delay: '(number|object)',
              html: 'boolean',
              selector: '(string|boolean)',
              placement: '(string|function)',
              offset: '(number|string|function)',
              container: '(string|element|boolean)',
              fallbackPlacement: '(string|array)',
              boundary: '(string|element)',
              sanitize: 'boolean',
              sanitizeFn: '(null|function)',
              whiteList: 'object',
              popperConfig: '(null|object)',
            },
            ot = {
              AUTO: 'auto',
              TOP: 'top',
              RIGHT: 'right',
              BOTTOM: 'bottom',
              LEFT: 'left',
            },
            it = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: 'hover focus',
              title: '',
              delay: 0,
              html: !1,
              selector: !1,
              placement: 'top',
              offset: 0,
              container: !1,
              fallbackPlacement: 'flip',
              boundary: 'scrollParent',
              sanitize: !0,
              sanitizeFn: null,
              whiteList: Ye,
              popperConfig: null,
            },
            at = 'show',
            lt = 'out',
            st = {
              HIDE: 'hide.bs.tooltip',
              HIDDEN: 'hidden.bs.tooltip',
              SHOW: 'show.bs.tooltip',
              SHOWN: 'shown.bs.tooltip',
              INSERTED: 'inserted.bs.tooltip',
              CLICK: 'click.bs.tooltip',
              FOCUSIN: 'focusin.bs.tooltip',
              FOCUSOUT: 'focusout.bs.tooltip',
              MOUSEENTER: 'mouseenter.bs.tooltip',
              MOUSELEAVE: 'mouseleave.bs.tooltip',
            },
            ct = 'fade',
            dt = 'show',
            ut = '.tooltip-inner',
            ft = '.arrow',
            mt = 'hover',
            pt = 'focus',
            gt = 'click',
            ht = 'manual',
            bt = (function() {
              function n(n, e) {
                if (void 0 === ce)
                  throw new TypeError(
                    "Bootstrap's tooltips require Popper.js (https://popper.js.org/)",
                  );
                (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ''),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = n),
                  (this.config = this._getConfig(e)),
                  (this.tip = null),
                  this._setListeners();
              }
              var e = n.prototype;
              return (
                (e.enable = function() {
                  this._isEnabled = !0;
                }),
                (e.disable = function() {
                  this._isEnabled = !1;
                }),
                (e.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled;
                }),
                (e.toggle = function(n) {
                  if (this._isEnabled)
                    if (n) {
                      var e = this.constructor.DATA_KEY,
                        r = t(n.currentTarget).data(e);
                      r ||
                        ((r = new this.constructor(
                          n.currentTarget,
                          this._getDelegateConfig(),
                        )),
                        t(n.currentTarget).data(e, r)),
                        (r._activeTrigger.click = !r._activeTrigger.click),
                        r._isWithActiveTrigger()
                          ? r._enter(null, r)
                          : r._leave(null, r);
                    } else {
                      if (t(this.getTipElement()).hasClass(dt))
                        return void this._leave(null, this);
                      this._enter(null, this);
                    }
                }),
                (e.dispose = function() {
                  clearTimeout(this._timeout),
                    t.removeData(this.element, this.constructor.DATA_KEY),
                    t(this.element).off(this.constructor.EVENT_KEY),
                    t(this.element)
                      .closest('.modal')
                      .off('hide.bs.modal', this._hideModalHandler),
                    this.tip && t(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (e.show = function() {
                  var n = this;
                  if ('none' === t(this.element).css('display'))
                    throw new Error('Please use show on visible elements');
                  var e = t.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(e);
                    var r = d.findShadowRoot(this.element),
                      o = t.contains(
                        null !== r
                          ? r
                          : this.element.ownerDocument.documentElement,
                        this.element,
                      );
                    if (e.isDefaultPrevented() || !o) return;
                    var i = this.getTipElement(),
                      a = d.getUID(this.constructor.NAME);
                    i.setAttribute('id', a),
                      this.element.setAttribute('aria-describedby', a),
                      this.setContent(),
                      this.config.animation && t(i).addClass(ct);
                    var l =
                        'function' == typeof this.config.placement
                          ? this.config.placement.call(this, i, this.element)
                          : this.config.placement,
                      s = this._getAttachment(l);
                    this.addAttachmentClass(s);
                    var c = this._getContainer();
                    t(i).data(this.constructor.DATA_KEY, this),
                      t.contains(
                        this.element.ownerDocument.documentElement,
                        this.tip,
                      ) || t(i).appendTo(c),
                      t(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new ce(
                        this.element,
                        i,
                        this._getPopperConfig(s),
                      )),
                      t(i).addClass(dt),
                      'ontouchstart' in document.documentElement &&
                        t(document.body)
                          .children()
                          .on('mouseover', null, t.noop);
                    var u = function() {
                      n.config.animation && n._fixTransition();
                      var e = n._hoverState;
                      (n._hoverState = null),
                        t(n.element).trigger(n.constructor.Event.SHOWN),
                        e === lt && n._leave(null, n);
                    };
                    if (t(this.tip).hasClass(ct)) {
                      var f = d.getTransitionDurationFromElement(this.tip);
                      t(this.tip)
                        .one(d.TRANSITION_END, u)
                        .emulateTransitionEnd(f);
                    } else u();
                  }
                }),
                (e.hide = function(n) {
                  var e = this,
                    r = this.getTipElement(),
                    o = t.Event(this.constructor.Event.HIDE),
                    i = function() {
                      e._hoverState !== at &&
                        r.parentNode &&
                        r.parentNode.removeChild(r),
                        e._cleanTipClass(),
                        e.element.removeAttribute('aria-describedby'),
                        t(e.element).trigger(e.constructor.Event.HIDDEN),
                        null !== e._popper && e._popper.destroy(),
                        n && n();
                    };
                  if ((t(this.element).trigger(o), !o.isDefaultPrevented())) {
                    if (
                      (t(r).removeClass(dt),
                      'ontouchstart' in document.documentElement &&
                        t(document.body)
                          .children()
                          .off('mouseover', null, t.noop),
                      (this._activeTrigger[gt] = !1),
                      (this._activeTrigger[pt] = !1),
                      (this._activeTrigger[mt] = !1),
                      t(this.tip).hasClass(ct))
                    ) {
                      var a = d.getTransitionDurationFromElement(r);
                      t(r)
                        .one(d.TRANSITION_END, i)
                        .emulateTransitionEnd(a);
                    } else i();
                    this._hoverState = '';
                  }
                }),
                (e.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e.isWithContent = function() {
                  return Boolean(this.getTitle());
                }),
                (e.addAttachmentClass = function(n) {
                  t(this.getTipElement()).addClass('bs-tooltip-' + n);
                }),
                (e.getTipElement = function() {
                  return (
                    (this.tip = this.tip || t(this.config.template)[0]),
                    this.tip
                  );
                }),
                (e.setContent = function() {
                  var n = this.getTipElement();
                  this.setElementContent(
                    t(n.querySelectorAll(ut)),
                    this.getTitle(),
                  ),
                    t(n).removeClass(ct + ' ' + dt);
                }),
                (e.setElementContent = function(n, e) {
                  'object' != typeof e || (!e.nodeType && !e.jquery)
                    ? this.config.html
                      ? (this.config.sanitize &&
                          (e = Je(
                            e,
                            this.config.whiteList,
                            this.config.sanitizeFn,
                          )),
                        n.html(e))
                      : n.text(e)
                    : this.config.html
                    ? t(e)
                        .parent()
                        .is(n) || n.empty().append(e)
                    : n.text(t(e).text());
                }),
                (e.getTitle = function() {
                  var n = this.element.getAttribute('data-original-title');
                  return (
                    n ||
                      (n =
                        'function' == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    n
                  );
                }),
                (e._getPopperConfig = function(n) {
                  var e = this;
                  return l(
                    {},
                    {
                      placement: n,
                      modifiers: {
                        offset: this._getOffset(),
                        flip: { behavior: this.config.fallbackPlacement },
                        arrow: { element: ft },
                        preventOverflow: {
                          boundariesElement: this.config.boundary,
                        },
                      },
                      onCreate: function(n) {
                        n.originalPlacement !== n.placement &&
                          e._handlePopperPlacementChange(n);
                      },
                      onUpdate: function(n) {
                        return e._handlePopperPlacementChange(n);
                      },
                    },
                    {},
                    this.config.popperConfig,
                  );
                }),
                (e._getOffset = function() {
                  var n = this,
                    e = {};
                  return (
                    'function' == typeof this.config.offset
                      ? (e.fn = function(e) {
                          return (
                            (e.offsets = l(
                              {},
                              e.offsets,
                              {},
                              n.config.offset(e.offsets, n.element) || {},
                            )),
                            e
                          );
                        })
                      : (e.offset = this.config.offset),
                    e
                  );
                }),
                (e._getContainer = function() {
                  return !1 === this.config.container
                    ? document.body
                    : d.isElement(this.config.container)
                    ? t(this.config.container)
                    : t(document).find(this.config.container);
                }),
                (e._getAttachment = function(n) {
                  return ot[n.toUpperCase()];
                }),
                (e._setListeners = function() {
                  var n = this;
                  this.config.trigger.split(' ').forEach(function(e) {
                    if ('click' === e)
                      t(n.element).on(
                        n.constructor.Event.CLICK,
                        n.config.selector,
                        function(e) {
                          return n.toggle(e);
                        },
                      );
                    else if (e !== ht) {
                      var r =
                          e === mt
                            ? n.constructor.Event.MOUSEENTER
                            : n.constructor.Event.FOCUSIN,
                        o =
                          e === mt
                            ? n.constructor.Event.MOUSELEAVE
                            : n.constructor.Event.FOCUSOUT;
                      t(n.element)
                        .on(r, n.config.selector, function(e) {
                          return n._enter(e);
                        })
                        .on(o, n.config.selector, function(e) {
                          return n._leave(e);
                        });
                    }
                  }),
                    (this._hideModalHandler = function() {
                      n.element && n.hide();
                    }),
                    t(this.element)
                      .closest('.modal')
                      .on('hide.bs.modal', this._hideModalHandler),
                    this.config.selector
                      ? (this.config = l({}, this.config, {
                          trigger: 'manual',
                          selector: '',
                        }))
                      : this._fixTitle();
                }),
                (e._fixTitle = function() {
                  var n = typeof this.element.getAttribute(
                    'data-original-title',
                  );
                  (this.element.getAttribute('title') || 'string' !== n) &&
                    (this.element.setAttribute(
                      'data-original-title',
                      this.element.getAttribute('title') || '',
                    ),
                    this.element.setAttribute('title', ''));
                }),
                (e._enter = function(n, e) {
                  var r = this.constructor.DATA_KEY;
                  (e = e || t(n.currentTarget).data(r)) ||
                    ((e = new this.constructor(
                      n.currentTarget,
                      this._getDelegateConfig(),
                    )),
                    t(n.currentTarget).data(r, e)),
                    n &&
                      (e._activeTrigger['focusin' === n.type ? pt : mt] = !0),
                    t(e.getTipElement()).hasClass(dt) || e._hoverState === at
                      ? (e._hoverState = at)
                      : (clearTimeout(e._timeout),
                        (e._hoverState = at),
                        e.config.delay && e.config.delay.show
                          ? (e._timeout = setTimeout(function() {
                              e._hoverState === at && e.show();
                            }, e.config.delay.show))
                          : e.show());
                }),
                (e._leave = function(n, e) {
                  var r = this.constructor.DATA_KEY;
                  (e = e || t(n.currentTarget).data(r)) ||
                    ((e = new this.constructor(
                      n.currentTarget,
                      this._getDelegateConfig(),
                    )),
                    t(n.currentTarget).data(r, e)),
                    n &&
                      (e._activeTrigger['focusout' === n.type ? pt : mt] = !1),
                    e._isWithActiveTrigger() ||
                      (clearTimeout(e._timeout),
                      (e._hoverState = lt),
                      e.config.delay && e.config.delay.hide
                        ? (e._timeout = setTimeout(function() {
                            e._hoverState === lt && e.hide();
                          }, e.config.delay.hide))
                        : e.hide());
                }),
                (e._isWithActiveTrigger = function() {
                  for (var n in this._activeTrigger)
                    if (this._activeTrigger[n]) return !0;
                  return !1;
                }),
                (e._getConfig = function(n) {
                  var e = t(this.element).data();
                  return (
                    Object.keys(e).forEach(function(n) {
                      -1 !== tt.indexOf(n) && delete e[n];
                    }),
                    'number' ==
                      typeof (n = l(
                        {},
                        this.constructor.Default,
                        {},
                        e,
                        {},
                        'object' == typeof n && n ? n : {},
                      )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                    'number' == typeof n.title &&
                      (n.title = n.title.toString()),
                    'number' == typeof n.content &&
                      (n.content = n.content.toString()),
                    d.typeCheckConfig(Ze, n, this.constructor.DefaultType),
                    n.sanitize &&
                      (n.template = Je(n.template, n.whiteList, n.sanitizeFn)),
                    n
                  );
                }),
                (e._getDelegateConfig = function() {
                  var n = {};
                  if (this.config)
                    for (var e in this.config)
                      this.constructor.Default[e] !== this.config[e] &&
                        (n[e] = this.config[e]);
                  return n;
                }),
                (e._cleanTipClass = function() {
                  var n = t(this.getTipElement()),
                    e = n.attr('class').match(et);
                  null !== e && e.length && n.removeClass(e.join(''));
                }),
                (e._handlePopperPlacementChange = function(n) {
                  var e = n.instance;
                  (this.tip = e.popper),
                    this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(n.placement));
                }),
                (e._fixTransition = function() {
                  var n = this.getTipElement(),
                    e = this.config.animation;
                  null === n.getAttribute('x-placement') &&
                    (t(n).removeClass(ct),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = e));
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this).data('bs.tooltip'),
                      o = 'object' == typeof e && e;
                    if (
                      (r || !/dispose|hide/.test(e)) &&
                      (r ||
                        ((r = new n(this, o)), t(this).data('bs.tooltip', r)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === r[e])
                        throw new TypeError('No method named "' + e + '"');
                      r[e]();
                    }
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return it;
                    },
                  },
                  {
                    key: 'NAME',
                    get: function() {
                      return Ze;
                    },
                  },
                  {
                    key: 'DATA_KEY',
                    get: function() {
                      return 'bs.tooltip';
                    },
                  },
                  {
                    key: 'Event',
                    get: function() {
                      return st;
                    },
                  },
                  {
                    key: 'EVENT_KEY',
                    get: function() {
                      return '.bs.tooltip';
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return rt;
                    },
                  },
                ]),
                n
              );
            })();
          (t.fn.tooltip = bt._jQueryInterface),
            (t.fn.tooltip.Constructor = bt),
            (t.fn.tooltip.noConflict = function() {
              return (t.fn.tooltip = nt), bt._jQueryInterface;
            });
          var vt = 'popover',
            xt = t.fn.popover,
            yt = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
            wt = l({}, bt.Default, {
              placement: 'right',
              trigger: 'click',
              content: '',
              template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            }),
            kt = l({}, bt.DefaultType, {
              content: '(string|element|function)',
            }),
            _t = 'fade',
            Et = 'show',
            Tt = '.popover-header',
            Ct = '.popover-body',
            St = {
              HIDE: 'hide.bs.popover',
              HIDDEN: 'hidden.bs.popover',
              SHOW: 'show.bs.popover',
              SHOWN: 'shown.bs.popover',
              INSERTED: 'inserted.bs.popover',
              CLICK: 'click.bs.popover',
              FOCUSIN: 'focusin.bs.popover',
              FOCUSOUT: 'focusout.bs.popover',
              MOUSEENTER: 'mouseenter.bs.popover',
              MOUSELEAVE: 'mouseleave.bs.popover',
            },
            Nt = (function(n) {
              var e, r;
              function i() {
                return n.apply(this, arguments) || this;
              }
              (r = n),
                ((e = i).prototype = Object.create(r.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = r);
              var a = i.prototype;
              return (
                (a.isWithContent = function() {
                  return this.getTitle() || this._getContent();
                }),
                (a.addAttachmentClass = function(n) {
                  t(this.getTipElement()).addClass('bs-popover-' + n);
                }),
                (a.getTipElement = function() {
                  return (
                    (this.tip = this.tip || t(this.config.template)[0]),
                    this.tip
                  );
                }),
                (a.setContent = function() {
                  var n = t(this.getTipElement());
                  this.setElementContent(n.find(Tt), this.getTitle());
                  var e = this._getContent();
                  'function' == typeof e && (e = e.call(this.element)),
                    this.setElementContent(n.find(Ct), e),
                    n.removeClass(_t + ' ' + Et);
                }),
                (a._getContent = function() {
                  return (
                    this.element.getAttribute('data-content') ||
                    this.config.content
                  );
                }),
                (a._cleanTipClass = function() {
                  var n = t(this.getTipElement()),
                    e = n.attr('class').match(yt);
                  null !== e && e.length > 0 && n.removeClass(e.join(''));
                }),
                (i._jQueryInterface = function(n) {
                  return this.each(function() {
                    var e = t(this).data('bs.popover'),
                      r = 'object' == typeof n ? n : null;
                    if (
                      (e || !/dispose|hide/.test(n)) &&
                      (e ||
                        ((e = new i(this, r)), t(this).data('bs.popover', e)),
                      'string' == typeof n)
                    ) {
                      if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                      e[n]();
                    }
                  });
                }),
                o(i, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return wt;
                    },
                  },
                  {
                    key: 'NAME',
                    get: function() {
                      return vt;
                    },
                  },
                  {
                    key: 'DATA_KEY',
                    get: function() {
                      return 'bs.popover';
                    },
                  },
                  {
                    key: 'Event',
                    get: function() {
                      return St;
                    },
                  },
                  {
                    key: 'EVENT_KEY',
                    get: function() {
                      return '.bs.popover';
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return kt;
                    },
                  },
                ]),
                i
              );
            })(bt);
          (t.fn.popover = Nt._jQueryInterface),
            (t.fn.popover.Constructor = Nt),
            (t.fn.popover.noConflict = function() {
              return (t.fn.popover = xt), Nt._jQueryInterface;
            });
          var Dt = 'scrollspy',
            At = t.fn[Dt],
            It = { offset: 10, method: 'auto', target: '' },
            Ot = {
              offset: 'number',
              method: 'string',
              target: '(string|element)',
            },
            Pt = {
              ACTIVATE: 'activate.bs.scrollspy',
              SCROLL: 'scroll.bs.scrollspy',
              LOAD_DATA_API: 'load.bs.scrollspy.data-api',
            },
            jt = 'dropdown-item',
            Lt = 'active',
            zt = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: '.active',
              NAV_LIST_GROUP: '.nav, .list-group',
              NAV_LINKS: '.nav-link',
              NAV_ITEMS: '.nav-item',
              LIST_ITEMS: '.list-group-item',
              DROPDOWN: '.dropdown',
              DROPDOWN_ITEMS: '.dropdown-item',
              DROPDOWN_TOGGLE: '.dropdown-toggle',
            },
            Mt = 'offset',
            Rt = 'position',
            Ft = (function() {
              function n(n, e) {
                var r = this;
                (this._element = n),
                  (this._scrollElement = 'BODY' === n.tagName ? window : n),
                  (this._config = this._getConfig(e)),
                  (this._selector =
                    this._config.target +
                    ' ' +
                    zt.NAV_LINKS +
                    ',' +
                    this._config.target +
                    ' ' +
                    zt.LIST_ITEMS +
                    ',' +
                    this._config.target +
                    ' ' +
                    zt.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  t(this._scrollElement).on(Pt.SCROLL, function(n) {
                    return r._process(n);
                  }),
                  this.refresh(),
                  this._process();
              }
              var e = n.prototype;
              return (
                (e.refresh = function() {
                  var n = this,
                    e =
                      this._scrollElement === this._scrollElement.window
                        ? Mt
                        : Rt,
                    r =
                      'auto' === this._config.method ? e : this._config.method,
                    o = r === Rt ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    [].slice
                      .call(document.querySelectorAll(this._selector))
                      .map(function(n) {
                        var e,
                          i = d.getSelectorFromElement(n);
                        if ((i && (e = document.querySelector(i)), e)) {
                          var a = e.getBoundingClientRect();
                          if (a.width || a.height)
                            return [t(e)[r]().top + o, i];
                        }
                        return null;
                      })
                      .filter(function(n) {
                        return n;
                      })
                      .sort(function(n, e) {
                        return n[0] - e[0];
                      })
                      .forEach(function(e) {
                        n._offsets.push(e[0]), n._targets.push(e[1]);
                      });
                }),
                (e.dispose = function() {
                  t.removeData(this._element, 'bs.scrollspy'),
                    t(this._scrollElement).off('.bs.scrollspy'),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (e._getConfig = function(n) {
                  if (
                    'string' !=
                    typeof (n = l(
                      {},
                      It,
                      {},
                      'object' == typeof n && n ? n : {},
                    )).target
                  ) {
                    var e = t(n.target).attr('id');
                    e || ((e = d.getUID(Dt)), t(n.target).attr('id', e)),
                      (n.target = '#' + e);
                  }
                  return d.typeCheckConfig(Dt, n, Ot), n;
                }),
                (e._getScrollTop = function() {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (e._getScrollHeight = function() {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight,
                    )
                  );
                }),
                (e._getOffsetHeight = function() {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (e._process = function() {
                  var n = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    t = this._config.offset + e - this._getOffsetHeight();
                  if ((this._scrollHeight !== e && this.refresh(), n >= t)) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r);
                  } else {
                    if (
                      this._activeTarget &&
                      n < this._offsets[0] &&
                      this._offsets[0] > 0
                    )
                      return (this._activeTarget = null), void this._clear();
                    for (var o = this._offsets.length; o--; )
                      this._activeTarget !== this._targets[o] &&
                        n >= this._offsets[o] &&
                        (void 0 === this._offsets[o + 1] ||
                          n < this._offsets[o + 1]) &&
                        this._activate(this._targets[o]);
                  }
                }),
                (e._activate = function(n) {
                  (this._activeTarget = n), this._clear();
                  var e = this._selector.split(',').map(function(e) {
                      return (
                        e +
                        '[data-target="' +
                        n +
                        '"],' +
                        e +
                        '[href="' +
                        n +
                        '"]'
                      );
                    }),
                    r = t(
                      [].slice.call(document.querySelectorAll(e.join(','))),
                    );
                  r.hasClass(jt)
                    ? (r
                        .closest(zt.DROPDOWN)
                        .find(zt.DROPDOWN_TOGGLE)
                        .addClass(Lt),
                      r.addClass(Lt))
                    : (r.addClass(Lt),
                      r
                        .parents(zt.NAV_LIST_GROUP)
                        .prev(zt.NAV_LINKS + ', ' + zt.LIST_ITEMS)
                        .addClass(Lt),
                      r
                        .parents(zt.NAV_LIST_GROUP)
                        .prev(zt.NAV_ITEMS)
                        .children(zt.NAV_LINKS)
                        .addClass(Lt)),
                    t(this._scrollElement).trigger(Pt.ACTIVATE, {
                      relatedTarget: n,
                    });
                }),
                (e._clear = function() {
                  [].slice
                    .call(document.querySelectorAll(this._selector))
                    .filter(function(n) {
                      return n.classList.contains(Lt);
                    })
                    .forEach(function(n) {
                      return n.classList.remove(Lt);
                    });
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this).data('bs.scrollspy');
                    if (
                      (r ||
                        ((r = new n(this, 'object' == typeof e && e)),
                        t(this).data('bs.scrollspy', r)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === r[e])
                        throw new TypeError('No method named "' + e + '"');
                      r[e]();
                    }
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return It;
                    },
                  },
                ]),
                n
              );
            })();
          t(window).on(Pt.LOAD_DATA_API, function() {
            for (
              var n = [].slice.call(document.querySelectorAll(zt.DATA_SPY)),
                e = n.length;
              e--;

            ) {
              var r = t(n[e]);
              Ft._jQueryInterface.call(r, r.data());
            }
          }),
            (t.fn[Dt] = Ft._jQueryInterface),
            (t.fn[Dt].Constructor = Ft),
            (t.fn[Dt].noConflict = function() {
              return (t.fn[Dt] = At), Ft._jQueryInterface;
            });
          var Ht = t.fn.tab,
            Ut = {
              HIDE: 'hide.bs.tab',
              HIDDEN: 'hidden.bs.tab',
              SHOW: 'show.bs.tab',
              SHOWN: 'shown.bs.tab',
              CLICK_DATA_API: 'click.bs.tab.data-api',
            },
            Wt = 'dropdown-menu',
            qt = 'active',
            Bt = 'disabled',
            Vt = 'fade',
            $t = 'show',
            Kt = '.dropdown',
            Qt = '.nav, .list-group',
            Yt = '.active',
            Xt = '> li > .active',
            Gt =
              '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            Jt = '.dropdown-toggle',
            Zt = '> .dropdown-menu .active',
            nr = (function() {
              function n(n) {
                this._element = n;
              }
              var e = n.prototype;
              return (
                (e.show = function() {
                  var n = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE &&
                        t(this._element).hasClass(qt)) ||
                      t(this._element).hasClass(Bt)
                    )
                  ) {
                    var e,
                      r,
                      o = t(this._element).closest(Qt)[0],
                      i = d.getSelectorFromElement(this._element);
                    if (o) {
                      var a =
                        'UL' === o.nodeName || 'OL' === o.nodeName ? Xt : Yt;
                      r = (r = t.makeArray(t(o).find(a)))[r.length - 1];
                    }
                    var l = t.Event(Ut.HIDE, { relatedTarget: this._element }),
                      s = t.Event(Ut.SHOW, { relatedTarget: r });
                    if (
                      (r && t(r).trigger(l),
                      t(this._element).trigger(s),
                      !s.isDefaultPrevented() && !l.isDefaultPrevented())
                    ) {
                      i && (e = document.querySelector(i)),
                        this._activate(this._element, o);
                      var c = function() {
                        var e = t.Event(Ut.HIDDEN, {
                            relatedTarget: n._element,
                          }),
                          o = t.Event(Ut.SHOWN, { relatedTarget: r });
                        t(r).trigger(e), t(n._element).trigger(o);
                      };
                      e ? this._activate(e, e.parentNode, c) : c();
                    }
                  }
                }),
                (e.dispose = function() {
                  t.removeData(this._element, 'bs.tab'), (this._element = null);
                }),
                (e._activate = function(n, e, r) {
                  var o = this,
                    i = (!e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
                      ? t(e).children(Yt)
                      : t(e).find(Xt))[0],
                    a = r && i && t(i).hasClass(Vt),
                    l = function() {
                      return o._transitionComplete(n, i, r);
                    };
                  if (i && a) {
                    var s = d.getTransitionDurationFromElement(i);
                    t(i)
                      .removeClass($t)
                      .one(d.TRANSITION_END, l)
                      .emulateTransitionEnd(s);
                  } else l();
                }),
                (e._transitionComplete = function(n, e, r) {
                  if (e) {
                    t(e).removeClass(qt);
                    var o = t(e.parentNode).find(Zt)[0];
                    o && t(o).removeClass(qt),
                      'tab' === e.getAttribute('role') &&
                        e.setAttribute('aria-selected', !1);
                  }
                  if (
                    (t(n).addClass(qt),
                    'tab' === n.getAttribute('role') &&
                      n.setAttribute('aria-selected', !0),
                    d.reflow(n),
                    n.classList.contains(Vt) && n.classList.add($t),
                    n.parentNode && t(n.parentNode).hasClass(Wt))
                  ) {
                    var i = t(n).closest(Kt)[0];
                    if (i) {
                      var a = [].slice.call(i.querySelectorAll(Jt));
                      t(a).addClass(qt);
                    }
                    n.setAttribute('aria-expanded', !0);
                  }
                  r && r();
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this),
                      o = r.data('bs.tab');
                    if (
                      (o || ((o = new n(this)), r.data('bs.tab', o)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === o[e])
                        throw new TypeError('No method named "' + e + '"');
                      o[e]();
                    }
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                ]),
                n
              );
            })();
          t(document).on(Ut.CLICK_DATA_API, Gt, function(n) {
            n.preventDefault(), nr._jQueryInterface.call(t(this), 'show');
          }),
            (t.fn.tab = nr._jQueryInterface),
            (t.fn.tab.Constructor = nr),
            (t.fn.tab.noConflict = function() {
              return (t.fn.tab = Ht), nr._jQueryInterface;
            });
          var er = t.fn.toast,
            tr = {
              CLICK_DISMISS: 'click.dismiss.bs.toast',
              HIDE: 'hide.bs.toast',
              HIDDEN: 'hidden.bs.toast',
              SHOW: 'show.bs.toast',
              SHOWN: 'shown.bs.toast',
            },
            rr = 'fade',
            or = 'hide',
            ir = 'show',
            ar = 'showing',
            lr = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
            sr = { animation: !0, autohide: !0, delay: 500 },
            cr = '[data-dismiss="toast"]',
            dr = (function() {
              function n(n, e) {
                (this._element = n),
                  (this._config = this._getConfig(e)),
                  (this._timeout = null),
                  this._setListeners();
              }
              var e = n.prototype;
              return (
                (e.show = function() {
                  var n = this,
                    e = t.Event(tr.SHOW);
                  if ((t(this._element).trigger(e), !e.isDefaultPrevented())) {
                    this._config.animation && this._element.classList.add(rr);
                    var r = function() {
                      n._element.classList.remove(ar),
                        n._element.classList.add(ir),
                        t(n._element).trigger(tr.SHOWN),
                        n._config.autohide &&
                          (n._timeout = setTimeout(function() {
                            n.hide();
                          }, n._config.delay));
                    };
                    if (
                      (this._element.classList.remove(or),
                      d.reflow(this._element),
                      this._element.classList.add(ar),
                      this._config.animation)
                    ) {
                      var o = d.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(d.TRANSITION_END, r)
                        .emulateTransitionEnd(o);
                    } else r();
                  }
                }),
                (e.hide = function() {
                  if (this._element.classList.contains(ir)) {
                    var n = t.Event(tr.HIDE);
                    t(this._element).trigger(n),
                      n.isDefaultPrevented() || this._close();
                  }
                }),
                (e.dispose = function() {
                  clearTimeout(this._timeout),
                    (this._timeout = null),
                    this._element.classList.contains(ir) &&
                      this._element.classList.remove(ir),
                    t(this._element).off(tr.CLICK_DISMISS),
                    t.removeData(this._element, 'bs.toast'),
                    (this._element = null),
                    (this._config = null);
                }),
                (e._getConfig = function(n) {
                  return (
                    (n = l(
                      {},
                      sr,
                      {},
                      t(this._element).data(),
                      {},
                      'object' == typeof n && n ? n : {},
                    )),
                    d.typeCheckConfig('toast', n, this.constructor.DefaultType),
                    n
                  );
                }),
                (e._setListeners = function() {
                  var n = this;
                  t(this._element).on(tr.CLICK_DISMISS, cr, function() {
                    return n.hide();
                  });
                }),
                (e._close = function() {
                  var n = this,
                    e = function() {
                      n._element.classList.add(or),
                        t(n._element).trigger(tr.HIDDEN);
                    };
                  if (
                    (this._element.classList.remove(ir), this._config.animation)
                  ) {
                    var r = d.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(d.TRANSITION_END, e)
                      .emulateTransitionEnd(r);
                  } else e();
                }),
                (n._jQueryInterface = function(e) {
                  return this.each(function() {
                    var r = t(this),
                      o = r.data('bs.toast');
                    if (
                      (o ||
                        ((o = new n(this, 'object' == typeof e && e)),
                        r.data('bs.toast', o)),
                      'string' == typeof e)
                    ) {
                      if (void 0 === o[e])
                        throw new TypeError('No method named "' + e + '"');
                      o[e](this);
                    }
                  });
                }),
                o(n, null, [
                  {
                    key: 'VERSION',
                    get: function() {
                      return '4.4.1';
                    },
                  },
                  {
                    key: 'DefaultType',
                    get: function() {
                      return lr;
                    },
                  },
                  {
                    key: 'Default',
                    get: function() {
                      return sr;
                    },
                  },
                ]),
                n
              );
            })();
          (t.fn.toast = dr._jQueryInterface),
            (t.fn.toast.Constructor = dr),
            (t.fn.toast.noConflict = function() {
              return (t.fn.toast = er), dr._jQueryInterface;
            }),
            (e.Alert = h),
            (e.Button = D),
            (e.Carousel = X),
            (e.Collapse = dn),
            (e.Dropdown = je),
            (e.Modal = Ke),
            (e.Popover = Nt),
            (e.Scrollspy = Ft),
            (e.Tab = nr),
            (e.Toast = dr),
            (e.Tooltip = bt),
            (e.Util = d),
            Object.defineProperty(e, '__esModule', { value: !0 });
        })(e, t(16));
      }.call(this, t(15)));
    },
    function(n, e) {
      var t;
      t = (function() {
        return this;
      })();
      try {
        t = t || new Function('return this')();
      } catch (n) {
        'object' == typeof window && (t = window);
      }
      n.exports = t;
    },
    function(n, e, t) {
      var r;
      /*!
       * jQuery JavaScript Library v3.4.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2019-05-01T21:04Z
       */ !(function(e, t) {
        'use strict';
        'object' == typeof n.exports
          ? (n.exports = e.document
              ? t(e, !0)
              : function(n) {
                  if (!n.document)
                    throw new Error('jQuery requires a window with a document');
                  return t(n);
                })
          : t(e);
      })('undefined' != typeof window ? window : this, function(t, o) {
        'use strict';
        var i = [],
          a = t.document,
          l = Object.getPrototypeOf,
          s = i.slice,
          c = i.concat,
          d = i.push,
          u = i.indexOf,
          f = {},
          m = f.toString,
          p = f.hasOwnProperty,
          g = p.toString,
          h = g.call(Object),
          b = {},
          v = function(n) {
            return 'function' == typeof n && 'number' != typeof n.nodeType;
          },
          x = function(n) {
            return null != n && n === n.window;
          },
          y = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(n, e, t) {
          var r,
            o,
            i = (t = t || a).createElement('script');
          if (((i.text = n), e))
            for (r in y)
              (o = e[r] || (e.getAttribute && e.getAttribute(r))) &&
                i.setAttribute(r, o);
          t.head.appendChild(i).parentNode.removeChild(i);
        }
        function k(n) {
          return null == n
            ? n + ''
            : 'object' == typeof n || 'function' == typeof n
            ? f[m.call(n)] || 'object'
            : typeof n;
        }
        var _ = function(n, e) {
            return new _.fn.init(n, e);
          },
          E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function T(n) {
          var e = !!n && 'length' in n && n.length,
            t = k(n);
          return (
            !v(n) &&
            !x(n) &&
            ('array' === t ||
              0 === e ||
              ('number' == typeof e && e > 0 && e - 1 in n))
          );
        }
        (_.fn = _.prototype = {
          jquery: '3.4.1',
          constructor: _,
          length: 0,
          toArray: function() {
            return s.call(this);
          },
          get: function(n) {
            return null == n
              ? s.call(this)
              : n < 0
              ? this[n + this.length]
              : this[n];
          },
          pushStack: function(n) {
            var e = _.merge(this.constructor(), n);
            return (e.prevObject = this), e;
          },
          each: function(n) {
            return _.each(this, n);
          },
          map: function(n) {
            return this.pushStack(
              _.map(this, function(e, t) {
                return n.call(e, t, e);
              }),
            );
          },
          slice: function() {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          eq: function(n) {
            var e = this.length,
              t = +n + (n < 0 ? e : 0);
            return this.pushStack(t >= 0 && t < e ? [this[t]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push: d,
          sort: i.sort,
          splice: i.splice,
        }),
          (_.extend = _.fn.extend = function() {
            var n,
              e,
              t,
              r,
              o,
              i,
              a = arguments[0] || {},
              l = 1,
              s = arguments.length,
              c = !1;
            for (
              'boolean' == typeof a && ((c = a), (a = arguments[l] || {}), l++),
                'object' == typeof a || v(a) || (a = {}),
                l === s && ((a = this), l--);
              l < s;
              l++
            )
              if (null != (n = arguments[l]))
                for (e in n)
                  (r = n[e]),
                    '__proto__' !== e &&
                      a !== r &&
                      (c && r && (_.isPlainObject(r) || (o = Array.isArray(r)))
                        ? ((t = a[e]),
                          (i =
                            o && !Array.isArray(t)
                              ? []
                              : o || _.isPlainObject(t)
                              ? t
                              : {}),
                          (o = !1),
                          (a[e] = _.extend(c, i, r)))
                        : void 0 !== r && (a[e] = r));
            return a;
          }),
          _.extend({
            expando: 'jQuery' + ('3.4.1' + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(n) {
              throw new Error(n);
            },
            noop: function() {},
            isPlainObject: function(n) {
              var e, t;
              return (
                !(!n || '[object Object]' !== m.call(n)) &&
                (!(e = l(n)) ||
                  ('function' ==
                    typeof (t = p.call(e, 'constructor') && e.constructor) &&
                    g.call(t) === h))
              );
            },
            isEmptyObject: function(n) {
              var e;
              for (e in n) return !1;
              return !0;
            },
            globalEval: function(n, e) {
              w(n, { nonce: e && e.nonce });
            },
            each: function(n, e) {
              var t,
                r = 0;
              if (T(n))
                for (t = n.length; r < t && !1 !== e.call(n[r], r, n[r]); r++);
              else for (r in n) if (!1 === e.call(n[r], r, n[r])) break;
              return n;
            },
            trim: function(n) {
              return null == n ? '' : (n + '').replace(E, '');
            },
            makeArray: function(n, e) {
              var t = e || [];
              return (
                null != n &&
                  (T(Object(n))
                    ? _.merge(t, 'string' == typeof n ? [n] : n)
                    : d.call(t, n)),
                t
              );
            },
            inArray: function(n, e, t) {
              return null == e ? -1 : u.call(e, n, t);
            },
            merge: function(n, e) {
              for (var t = +e.length, r = 0, o = n.length; r < t; r++)
                n[o++] = e[r];
              return (n.length = o), n;
            },
            grep: function(n, e, t) {
              for (var r = [], o = 0, i = n.length, a = !t; o < i; o++)
                !e(n[o], o) !== a && r.push(n[o]);
              return r;
            },
            map: function(n, e, t) {
              var r,
                o,
                i = 0,
                a = [];
              if (T(n))
                for (r = n.length; i < r; i++)
                  null != (o = e(n[i], i, t)) && a.push(o);
              else for (i in n) null != (o = e(n[i], i, t)) && a.push(o);
              return c.apply([], a);
            },
            guid: 1,
            support: b,
          }),
          'function' == typeof Symbol &&
            (_.fn[Symbol.iterator] = i[Symbol.iterator]),
          _.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
              ' ',
            ),
            function(n, e) {
              f['[object ' + e + ']'] = e.toLowerCase();
            },
          );
        var C =
          /*!
           * Sizzle CSS Selector Engine v2.3.4
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2019-04-08
           */
          (function(n) {
            var e,
              t,
              r,
              o,
              i,
              a,
              l,
              s,
              c,
              d,
              u,
              f,
              m,
              p,
              g,
              h,
              b,
              v,
              x,
              y = 'sizzle' + 1 * new Date(),
              w = n.document,
              k = 0,
              _ = 0,
              E = cn(),
              T = cn(),
              C = cn(),
              S = cn(),
              N = function(n, e) {
                return n === e && (u = !0), 0;
              },
              D = {}.hasOwnProperty,
              A = [],
              I = A.pop,
              O = A.push,
              P = A.push,
              j = A.slice,
              L = function(n, e) {
                for (var t = 0, r = n.length; t < r; t++)
                  if (n[t] === e) return t;
                return -1;
              },
              z =
                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
              M = '[\\x20\\t\\r\\n\\f]',
              R = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
              F =
                '\\[' +
                M +
                '*(' +
                R +
                ')(?:' +
                M +
                '*([*^$|!~]?=)' +
                M +
                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                R +
                '))|)' +
                M +
                '*\\]',
              H =
                ':(' +
                R +
                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                F +
                ')*)|.*)\\)|)',
              U = new RegExp(M + '+', 'g'),
              W = new RegExp(
                '^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$',
                'g',
              ),
              q = new RegExp('^' + M + '*,' + M + '*'),
              B = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
              V = new RegExp(M + '|>'),
              $ = new RegExp(H),
              K = new RegExp('^' + R + '$'),
              Q = {
                ID: new RegExp('^#(' + R + ')'),
                CLASS: new RegExp('^\\.(' + R + ')'),
                TAG: new RegExp('^(' + R + '|[*])'),
                ATTR: new RegExp('^' + F),
                PSEUDO: new RegExp('^' + H),
                CHILD: new RegExp(
                  '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                    M +
                    '*(even|odd|(([+-]|)(\\d*)n|)' +
                    M +
                    '*(?:([+-]|)' +
                    M +
                    '*(\\d+)|))' +
                    M +
                    '*\\)|)',
                  'i',
                ),
                bool: new RegExp('^(?:' + z + ')$', 'i'),
                needsContext: new RegExp(
                  '^' +
                    M +
                    '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                    M +
                    '*((?:-\\d)?\\d*)' +
                    M +
                    '*\\)|)(?=[^-]|$)',
                  'i',
                ),
              },
              Y = /HTML$/i,
              X = /^(?:input|select|textarea|button)$/i,
              G = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              nn = /[+~]/,
              en = new RegExp(
                '\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)',
                'ig',
              ),
              tn = function(n, e, t) {
                var r = '0x' + e - 65536;
                return r != r || t
                  ? e
                  : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
              },
              rn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              on = function(n, e) {
                return e
                  ? '\0' === n
                    ? '�'
                    : n.slice(0, -1) +
                      '\\' +
                      n.charCodeAt(n.length - 1).toString(16) +
                      ' '
                  : '\\' + n;
              },
              an = function() {
                f();
              },
              ln = wn(
                function(n) {
                  return (
                    !0 === n.disabled && 'fieldset' === n.nodeName.toLowerCase()
                  );
                },
                { dir: 'parentNode', next: 'legend' },
              );
            try {
              P.apply((A = j.call(w.childNodes)), w.childNodes),
                A[w.childNodes.length].nodeType;
            } catch (n) {
              P = {
                apply: A.length
                  ? function(n, e) {
                      O.apply(n, j.call(e));
                    }
                  : function(n, e) {
                      for (var t = n.length, r = 0; (n[t++] = e[r++]); );
                      n.length = t - 1;
                    },
              };
            }
            function sn(n, e, r, o) {
              var i,
                l,
                c,
                d,
                u,
                p,
                b,
                v = e && e.ownerDocument,
                k = e ? e.nodeType : 9;
              if (
                ((r = r || []),
                'string' != typeof n || !n || (1 !== k && 9 !== k && 11 !== k))
              )
                return r;
              if (
                !o &&
                ((e ? e.ownerDocument || e : w) !== m && f(e), (e = e || m), g)
              ) {
                if (11 !== k && (u = Z.exec(n)))
                  if ((i = u[1])) {
                    if (9 === k) {
                      if (!(c = e.getElementById(i))) return r;
                      if (c.id === i) return r.push(c), r;
                    } else if (
                      v &&
                      (c = v.getElementById(i)) &&
                      x(e, c) &&
                      c.id === i
                    )
                      return r.push(c), r;
                  } else {
                    if (u[2]) return P.apply(r, e.getElementsByTagName(n)), r;
                    if (
                      (i = u[3]) &&
                      t.getElementsByClassName &&
                      e.getElementsByClassName
                    )
                      return P.apply(r, e.getElementsByClassName(i)), r;
                  }
                if (
                  t.qsa &&
                  !S[n + ' '] &&
                  (!h || !h.test(n)) &&
                  (1 !== k || 'object' !== e.nodeName.toLowerCase())
                ) {
                  if (((b = n), (v = e), 1 === k && V.test(n))) {
                    for (
                      (d = e.getAttribute('id'))
                        ? (d = d.replace(rn, on))
                        : e.setAttribute('id', (d = y)),
                        l = (p = a(n)).length;
                      l--;

                    )
                      p[l] = '#' + d + ' ' + yn(p[l]);
                    (b = p.join(',')),
                      (v = (nn.test(n) && vn(e.parentNode)) || e);
                  }
                  try {
                    return P.apply(r, v.querySelectorAll(b)), r;
                  } catch (e) {
                    S(n, !0);
                  } finally {
                    d === y && e.removeAttribute('id');
                  }
                }
              }
              return s(n.replace(W, '$1'), e, r, o);
            }
            function cn() {
              var n = [];
              return function e(t, o) {
                return (
                  n.push(t + ' ') > r.cacheLength && delete e[n.shift()],
                  (e[t + ' '] = o)
                );
              };
            }
            function dn(n) {
              return (n[y] = !0), n;
            }
            function un(n) {
              var e = m.createElement('fieldset');
              try {
                return !!n(e);
              } catch (n) {
                return !1;
              } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
              }
            }
            function fn(n, e) {
              for (var t = n.split('|'), o = t.length; o--; )
                r.attrHandle[t[o]] = e;
            }
            function mn(n, e) {
              var t = e && n,
                r =
                  t &&
                  1 === n.nodeType &&
                  1 === e.nodeType &&
                  n.sourceIndex - e.sourceIndex;
              if (r) return r;
              if (t) for (; (t = t.nextSibling); ) if (t === e) return -1;
              return n ? 1 : -1;
            }
            function pn(n) {
              return function(e) {
                return 'input' === e.nodeName.toLowerCase() && e.type === n;
              };
            }
            function gn(n) {
              return function(e) {
                var t = e.nodeName.toLowerCase();
                return ('input' === t || 'button' === t) && e.type === n;
              };
            }
            function hn(n) {
              return function(e) {
                return 'form' in e
                  ? e.parentNode && !1 === e.disabled
                    ? 'label' in e
                      ? 'label' in e.parentNode
                        ? e.parentNode.disabled === n
                        : e.disabled === n
                      : e.isDisabled === n ||
                        (e.isDisabled !== !n && ln(e) === n)
                    : e.disabled === n
                  : 'label' in e && e.disabled === n;
              };
            }
            function bn(n) {
              return dn(function(e) {
                return (
                  (e = +e),
                  dn(function(t, r) {
                    for (var o, i = n([], t.length, e), a = i.length; a--; )
                      t[(o = i[a])] && (t[o] = !(r[o] = t[o]));
                  })
                );
              });
            }
            function vn(n) {
              return n && void 0 !== n.getElementsByTagName && n;
            }
            for (e in ((t = sn.support = {}),
            (i = sn.isXML = function(n) {
              var e = n.namespaceURI,
                t = (n.ownerDocument || n).documentElement;
              return !Y.test(e || (t && t.nodeName) || 'HTML');
            }),
            (f = sn.setDocument = function(n) {
              var e,
                o,
                a = n ? n.ownerDocument || n : w;
              return a !== m && 9 === a.nodeType && a.documentElement
                ? ((p = (m = a).documentElement),
                  (g = !i(m)),
                  w !== m &&
                    (o = m.defaultView) &&
                    o.top !== o &&
                    (o.addEventListener
                      ? o.addEventListener('unload', an, !1)
                      : o.attachEvent && o.attachEvent('onunload', an)),
                  (t.attributes = un(function(n) {
                    return (n.className = 'i'), !n.getAttribute('className');
                  })),
                  (t.getElementsByTagName = un(function(n) {
                    return (
                      n.appendChild(m.createComment('')),
                      !n.getElementsByTagName('*').length
                    );
                  })),
                  (t.getElementsByClassName = J.test(m.getElementsByClassName)),
                  (t.getById = un(function(n) {
                    return (
                      (p.appendChild(n).id = y),
                      !m.getElementsByName || !m.getElementsByName(y).length
                    );
                  })),
                  t.getById
                    ? ((r.filter.ID = function(n) {
                        var e = n.replace(en, tn);
                        return function(n) {
                          return n.getAttribute('id') === e;
                        };
                      }),
                      (r.find.ID = function(n, e) {
                        if (void 0 !== e.getElementById && g) {
                          var t = e.getElementById(n);
                          return t ? [t] : [];
                        }
                      }))
                    : ((r.filter.ID = function(n) {
                        var e = n.replace(en, tn);
                        return function(n) {
                          var t =
                            void 0 !== n.getAttributeNode &&
                            n.getAttributeNode('id');
                          return t && t.value === e;
                        };
                      }),
                      (r.find.ID = function(n, e) {
                        if (void 0 !== e.getElementById && g) {
                          var t,
                            r,
                            o,
                            i = e.getElementById(n);
                          if (i) {
                            if ((t = i.getAttributeNode('id')) && t.value === n)
                              return [i];
                            for (
                              o = e.getElementsByName(n), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (t = i.getAttributeNode('id')) &&
                                t.value === n
                              )
                                return [i];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = t.getElementsByTagName
                    ? function(n, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(n)
                          : t.qsa
                          ? e.querySelectorAll(n)
                          : void 0;
                      }
                    : function(n, e) {
                        var t,
                          r = [],
                          o = 0,
                          i = e.getElementsByTagName(n);
                        if ('*' === n) {
                          for (; (t = i[o++]); ) 1 === t.nodeType && r.push(t);
                          return r;
                        }
                        return i;
                      }),
                  (r.find.CLASS =
                    t.getElementsByClassName &&
                    function(n, e) {
                      if (void 0 !== e.getElementsByClassName && g)
                        return e.getElementsByClassName(n);
                    }),
                  (b = []),
                  (h = []),
                  (t.qsa = J.test(m.querySelectorAll)) &&
                    (un(function(n) {
                      (p.appendChild(n).innerHTML =
                        "<a id='" +
                        y +
                        "'></a><select id='" +
                        y +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        n.querySelectorAll("[msallowcapture^='']").length &&
                          h.push('[*^$]=' + M + '*(?:\'\'|"")'),
                        n.querySelectorAll('[selected]').length ||
                          h.push('\\[' + M + '*(?:value|' + z + ')'),
                        n.querySelectorAll('[id~=' + y + '-]').length ||
                          h.push('~='),
                        n.querySelectorAll(':checked').length ||
                          h.push(':checked'),
                        n.querySelectorAll('a#' + y + '+*').length ||
                          h.push('.#.+[+~]');
                    }),
                    un(function(n) {
                      n.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = m.createElement('input');
                      e.setAttribute('type', 'hidden'),
                        n.appendChild(e).setAttribute('name', 'D'),
                        n.querySelectorAll('[name=d]').length &&
                          h.push('name' + M + '*[*^$|!~]?='),
                        2 !== n.querySelectorAll(':enabled').length &&
                          h.push(':enabled', ':disabled'),
                        (p.appendChild(n).disabled = !0),
                        2 !== n.querySelectorAll(':disabled').length &&
                          h.push(':enabled', ':disabled'),
                        n.querySelectorAll('*,:x'),
                        h.push(',.*:');
                    })),
                  (t.matchesSelector = J.test(
                    (v =
                      p.matches ||
                      p.webkitMatchesSelector ||
                      p.mozMatchesSelector ||
                      p.oMatchesSelector ||
                      p.msMatchesSelector),
                  )) &&
                    un(function(n) {
                      (t.disconnectedMatch = v.call(n, '*')),
                        v.call(n, "[s!='']:x"),
                        b.push('!=', H);
                    }),
                  (h = h.length && new RegExp(h.join('|'))),
                  (b = b.length && new RegExp(b.join('|'))),
                  (e = J.test(p.compareDocumentPosition)),
                  (x =
                    e || J.test(p.contains)
                      ? function(n, e) {
                          var t = 9 === n.nodeType ? n.documentElement : n,
                            r = e && e.parentNode;
                          return (
                            n === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(t.contains
                                ? t.contains(r)
                                : n.compareDocumentPosition &&
                                  16 & n.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function(n, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === n) return !0;
                          return !1;
                        }),
                  (N = e
                    ? function(n, e) {
                        if (n === e) return (u = !0), 0;
                        var r =
                          !n.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (n.ownerDocument || n) === (e.ownerDocument || e)
                                ? n.compareDocumentPosition(e)
                                : 1) ||
                          (!t.sortDetached &&
                            e.compareDocumentPosition(n) === r)
                            ? n === m || (n.ownerDocument === w && x(w, n))
                              ? -1
                              : e === m || (e.ownerDocument === w && x(w, e))
                              ? 1
                              : d
                              ? L(d, n) - L(d, e)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function(n, e) {
                        if (n === e) return (u = !0), 0;
                        var t,
                          r = 0,
                          o = n.parentNode,
                          i = e.parentNode,
                          a = [n],
                          l = [e];
                        if (!o || !i)
                          return n === m
                            ? -1
                            : e === m
                            ? 1
                            : o
                            ? -1
                            : i
                            ? 1
                            : d
                            ? L(d, n) - L(d, e)
                            : 0;
                        if (o === i) return mn(n, e);
                        for (t = n; (t = t.parentNode); ) a.unshift(t);
                        for (t = e; (t = t.parentNode); ) l.unshift(t);
                        for (; a[r] === l[r]; ) r++;
                        return r
                          ? mn(a[r], l[r])
                          : a[r] === w
                          ? -1
                          : l[r] === w
                          ? 1
                          : 0;
                      }),
                  m)
                : m;
            }),
            (sn.matches = function(n, e) {
              return sn(n, null, null, e);
            }),
            (sn.matchesSelector = function(n, e) {
              if (
                ((n.ownerDocument || n) !== m && f(n),
                t.matchesSelector &&
                  g &&
                  !S[e + ' '] &&
                  (!b || !b.test(e)) &&
                  (!h || !h.test(e)))
              )
                try {
                  var r = v.call(n, e);
                  if (
                    r ||
                    t.disconnectedMatch ||
                    (n.document && 11 !== n.document.nodeType)
                  )
                    return r;
                } catch (n) {
                  S(e, !0);
                }
              return sn(e, m, null, [n]).length > 0;
            }),
            (sn.contains = function(n, e) {
              return (n.ownerDocument || n) !== m && f(n), x(n, e);
            }),
            (sn.attr = function(n, e) {
              (n.ownerDocument || n) !== m && f(n);
              var o = r.attrHandle[e.toLowerCase()],
                i =
                  o && D.call(r.attrHandle, e.toLowerCase())
                    ? o(n, e, !g)
                    : void 0;
              return void 0 !== i
                ? i
                : t.attributes || !g
                ? n.getAttribute(e)
                : (i = n.getAttributeNode(e)) && i.specified
                ? i.value
                : null;
            }),
            (sn.escape = function(n) {
              return (n + '').replace(rn, on);
            }),
            (sn.error = function(n) {
              throw new Error('Syntax error, unrecognized expression: ' + n);
            }),
            (sn.uniqueSort = function(n) {
              var e,
                r = [],
                o = 0,
                i = 0;
              if (
                ((u = !t.detectDuplicates),
                (d = !t.sortStable && n.slice(0)),
                n.sort(N),
                u)
              ) {
                for (; (e = n[i++]); ) e === n[i] && (o = r.push(i));
                for (; o--; ) n.splice(r[o], 1);
              }
              return (d = null), n;
            }),
            (o = sn.getText = function(n) {
              var e,
                t = '',
                r = 0,
                i = n.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ('string' == typeof n.textContent) return n.textContent;
                  for (n = n.firstChild; n; n = n.nextSibling) t += o(n);
                } else if (3 === i || 4 === i) return n.nodeValue;
              } else for (; (e = n[r++]); ) t += o(e);
              return t;
            }),
            ((r = sn.selectors = {
              cacheLength: 50,
              createPseudo: dn,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function(n) {
                  return (
                    (n[1] = n[1].replace(en, tn)),
                    (n[3] = (n[3] || n[4] || n[5] || '').replace(en, tn)),
                    '~=' === n[2] && (n[3] = ' ' + n[3] + ' '),
                    n.slice(0, 4)
                  );
                },
                CHILD: function(n) {
                  return (
                    (n[1] = n[1].toLowerCase()),
                    'nth' === n[1].slice(0, 3)
                      ? (n[3] || sn.error(n[0]),
                        (n[4] = +(n[4]
                          ? n[5] + (n[6] || 1)
                          : 2 * ('even' === n[3] || 'odd' === n[3]))),
                        (n[5] = +(n[7] + n[8] || 'odd' === n[3])))
                      : n[3] && sn.error(n[0]),
                    n
                  );
                },
                PSEUDO: function(n) {
                  var e,
                    t = !n[6] && n[2];
                  return Q.CHILD.test(n[0])
                    ? null
                    : (n[3]
                        ? (n[2] = n[4] || n[5] || '')
                        : t &&
                          $.test(t) &&
                          (e = a(t, !0)) &&
                          (e = t.indexOf(')', t.length - e) - t.length) &&
                          ((n[0] = n[0].slice(0, e)), (n[2] = t.slice(0, e))),
                      n.slice(0, 3));
                },
              },
              filter: {
                TAG: function(n) {
                  var e = n.replace(en, tn).toLowerCase();
                  return '*' === n
                    ? function() {
                        return !0;
                      }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function(n) {
                  var e = E[n + ' '];
                  return (
                    e ||
                    ((e = new RegExp('(^|' + M + ')' + n + '(' + M + '|$)')) &&
                      E(n, function(n) {
                        return e.test(
                          ('string' == typeof n.className && n.className) ||
                            (void 0 !== n.getAttribute &&
                              n.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function(n, e, t) {
                  return function(r) {
                    var o = sn.attr(r, n);
                    return null == o
                      ? '!=' === e
                      : !e ||
                          ((o += ''),
                          '=' === e
                            ? o === t
                            : '!=' === e
                            ? o !== t
                            : '^=' === e
                            ? t && 0 === o.indexOf(t)
                            : '*=' === e
                            ? t && o.indexOf(t) > -1
                            : '$=' === e
                            ? t && o.slice(-t.length) === t
                            : '~=' === e
                            ? (' ' + o.replace(U, ' ') + ' ').indexOf(t) > -1
                            : '|=' === e &&
                              (o === t ||
                                o.slice(0, t.length + 1) === t + '-'));
                  };
                },
                CHILD: function(n, e, t, r, o) {
                  var i = 'nth' !== n.slice(0, 3),
                    a = 'last' !== n.slice(-4),
                    l = 'of-type' === e;
                  return 1 === r && 0 === o
                    ? function(n) {
                        return !!n.parentNode;
                      }
                    : function(e, t, s) {
                        var c,
                          d,
                          u,
                          f,
                          m,
                          p,
                          g = i !== a ? 'nextSibling' : 'previousSibling',
                          h = e.parentNode,
                          b = l && e.nodeName.toLowerCase(),
                          v = !s && !l,
                          x = !1;
                        if (h) {
                          if (i) {
                            for (; g; ) {
                              for (f = e; (f = f[g]); )
                                if (
                                  l
                                    ? f.nodeName.toLowerCase() === b
                                    : 1 === f.nodeType
                                )
                                  return !1;
                              p = g = 'only' === n && !p && 'nextSibling';
                            }
                            return !0;
                          }
                          if (
                            ((p = [a ? h.firstChild : h.lastChild]), a && v)
                          ) {
                            for (
                              x =
                                (m =
                                  (c =
                                    (d =
                                      (u = (f = h)[y] || (f[y] = {}))[
                                        f.uniqueID
                                      ] || (u[f.uniqueID] = {}))[n] ||
                                    [])[0] === k && c[1]) && c[2],
                                f = m && h.childNodes[m];
                              (f =
                                (++m && f && f[g]) || (x = m = 0) || p.pop());

                            )
                              if (1 === f.nodeType && ++x && f === e) {
                                d[n] = [k, m, x];
                                break;
                              }
                          } else if (
                            (v &&
                              (x = m =
                                (c =
                                  (d =
                                    (u = (f = e)[y] || (f[y] = {}))[
                                      f.uniqueID
                                    ] || (u[f.uniqueID] = {}))[n] || [])[0] ===
                                  k && c[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (f =
                                (++m && f && f[g]) || (x = m = 0) || p.pop()) &&
                              ((l
                                ? f.nodeName.toLowerCase() !== b
                                : 1 !== f.nodeType) ||
                                !++x ||
                                (v &&
                                  ((d =
                                    (u = f[y] || (f[y] = {}))[f.uniqueID] ||
                                    (u[f.uniqueID] = {}))[n] = [k, x]),
                                f !== e));

                            );
                          return (x -= o) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function(n, e) {
                  var t,
                    o =
                      r.pseudos[n] ||
                      r.setFilters[n.toLowerCase()] ||
                      sn.error('unsupported pseudo: ' + n);
                  return o[y]
                    ? o(e)
                    : o.length > 1
                    ? ((t = [n, n, '', e]),
                      r.setFilters.hasOwnProperty(n.toLowerCase())
                        ? dn(function(n, t) {
                            for (var r, i = o(n, e), a = i.length; a--; )
                              n[(r = L(n, i[a]))] = !(t[r] = i[a]);
                          })
                        : function(n) {
                            return o(n, 0, t);
                          })
                    : o;
                },
              },
              pseudos: {
                not: dn(function(n) {
                  var e = [],
                    t = [],
                    r = l(n.replace(W, '$1'));
                  return r[y]
                    ? dn(function(n, e, t, o) {
                        for (var i, a = r(n, null, o, []), l = n.length; l--; )
                          (i = a[l]) && (n[l] = !(e[l] = i));
                      })
                    : function(n, o, i) {
                        return (
                          (e[0] = n), r(e, null, i, t), (e[0] = null), !t.pop()
                        );
                      };
                }),
                has: dn(function(n) {
                  return function(e) {
                    return sn(n, e).length > 0;
                  };
                }),
                contains: dn(function(n) {
                  return (
                    (n = n.replace(en, tn)),
                    function(e) {
                      return (e.textContent || o(e)).indexOf(n) > -1;
                    }
                  );
                }),
                lang: dn(function(n) {
                  return (
                    K.test(n || '') || sn.error('unsupported lang: ' + n),
                    (n = n.replace(en, tn).toLowerCase()),
                    function(e) {
                      var t;
                      do {
                        if (
                          (t = g
                            ? e.lang
                            : e.getAttribute('xml:lang') ||
                              e.getAttribute('lang'))
                        )
                          return (
                            (t = t.toLowerCase()) === n ||
                            0 === t.indexOf(n + '-')
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function(e) {
                  var t = n.location && n.location.hash;
                  return t && t.slice(1) === e.id;
                },
                root: function(n) {
                  return n === p;
                },
                focus: function(n) {
                  return (
                    n === m.activeElement &&
                    (!m.hasFocus || m.hasFocus()) &&
                    !!(n.type || n.href || ~n.tabIndex)
                  );
                },
                enabled: hn(!1),
                disabled: hn(!0),
                checked: function(n) {
                  var e = n.nodeName.toLowerCase();
                  return (
                    ('input' === e && !!n.checked) ||
                    ('option' === e && !!n.selected)
                  );
                },
                selected: function(n) {
                  return (
                    n.parentNode && n.parentNode.selectedIndex,
                    !0 === n.selected
                  );
                },
                empty: function(n) {
                  for (n = n.firstChild; n; n = n.nextSibling)
                    if (n.nodeType < 6) return !1;
                  return !0;
                },
                parent: function(n) {
                  return !r.pseudos.empty(n);
                },
                header: function(n) {
                  return G.test(n.nodeName);
                },
                input: function(n) {
                  return X.test(n.nodeName);
                },
                button: function(n) {
                  var e = n.nodeName.toLowerCase();
                  return (
                    ('input' === e && 'button' === n.type) || 'button' === e
                  );
                },
                text: function(n) {
                  var e;
                  return (
                    'input' === n.nodeName.toLowerCase() &&
                    'text' === n.type &&
                    (null == (e = n.getAttribute('type')) ||
                      'text' === e.toLowerCase())
                  );
                },
                first: bn(function() {
                  return [0];
                }),
                last: bn(function(n, e) {
                  return [e - 1];
                }),
                eq: bn(function(n, e, t) {
                  return [t < 0 ? t + e : t];
                }),
                even: bn(function(n, e) {
                  for (var t = 0; t < e; t += 2) n.push(t);
                  return n;
                }),
                odd: bn(function(n, e) {
                  for (var t = 1; t < e; t += 2) n.push(t);
                  return n;
                }),
                lt: bn(function(n, e, t) {
                  for (var r = t < 0 ? t + e : t > e ? e : t; --r >= 0; )
                    n.push(r);
                  return n;
                }),
                gt: bn(function(n, e, t) {
                  for (var r = t < 0 ? t + e : t; ++r < e; ) n.push(r);
                  return n;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[e] = pn(e);
            for (e in { submit: !0, reset: !0 }) r.pseudos[e] = gn(e);
            function xn() {}
            function yn(n) {
              for (var e = 0, t = n.length, r = ''; e < t; e++) r += n[e].value;
              return r;
            }
            function wn(n, e, t) {
              var r = e.dir,
                o = e.next,
                i = o || r,
                a = t && 'parentNode' === i,
                l = _++;
              return e.first
                ? function(e, t, o) {
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || a) return n(e, t, o);
                    return !1;
                  }
                : function(e, t, s) {
                    var c,
                      d,
                      u,
                      f = [k, l];
                    if (s) {
                      for (; (e = e[r]); )
                        if ((1 === e.nodeType || a) && n(e, t, s)) return !0;
                    } else
                      for (; (e = e[r]); )
                        if (1 === e.nodeType || a)
                          if (
                            ((d =
                              (u = e[y] || (e[y] = {}))[e.uniqueID] ||
                              (u[e.uniqueID] = {})),
                            o && o === e.nodeName.toLowerCase())
                          )
                            e = e[r] || e;
                          else {
                            if ((c = d[i]) && c[0] === k && c[1] === l)
                              return (f[2] = c[2]);
                            if (((d[i] = f), (f[2] = n(e, t, s)))) return !0;
                          }
                    return !1;
                  };
            }
            function kn(n) {
              return n.length > 1
                ? function(e, t, r) {
                    for (var o = n.length; o--; ) if (!n[o](e, t, r)) return !1;
                    return !0;
                  }
                : n[0];
            }
            function _n(n, e, t, r, o) {
              for (
                var i, a = [], l = 0, s = n.length, c = null != e;
                l < s;
                l++
              )
                (i = n[l]) &&
                  ((t && !t(i, r, o)) || (a.push(i), c && e.push(l)));
              return a;
            }
            function En(n, e, t, r, o, i) {
              return (
                r && !r[y] && (r = En(r)),
                o && !o[y] && (o = En(o, i)),
                dn(function(i, a, l, s) {
                  var c,
                    d,
                    u,
                    f = [],
                    m = [],
                    p = a.length,
                    g =
                      i ||
                      (function(n, e, t) {
                        for (var r = 0, o = e.length; r < o; r++)
                          sn(n, e[r], t);
                        return t;
                      })(e || '*', l.nodeType ? [l] : l, []),
                    h = !n || (!i && e) ? g : _n(g, f, n, l, s),
                    b = t ? (o || (i ? n : p || r) ? [] : a) : h;
                  if ((t && t(h, b, l, s), r))
                    for (c = _n(b, m), r(c, [], l, s), d = c.length; d--; )
                      (u = c[d]) && (b[m[d]] = !(h[m[d]] = u));
                  if (i) {
                    if (o || n) {
                      if (o) {
                        for (c = [], d = b.length; d--; )
                          (u = b[d]) && c.push((h[d] = u));
                        o(null, (b = []), c, s);
                      }
                      for (d = b.length; d--; )
                        (u = b[d]) &&
                          (c = o ? L(i, u) : f[d]) > -1 &&
                          (i[c] = !(a[c] = u));
                    }
                  } else (b = _n(b === a ? b.splice(p, b.length) : b)), o ? o(null, a, b, s) : P.apply(a, b);
                })
              );
            }
            function Tn(n) {
              for (
                var e,
                  t,
                  o,
                  i = n.length,
                  a = r.relative[n[0].type],
                  l = a || r.relative[' '],
                  s = a ? 1 : 0,
                  d = wn(
                    function(n) {
                      return n === e;
                    },
                    l,
                    !0,
                  ),
                  u = wn(
                    function(n) {
                      return L(e, n) > -1;
                    },
                    l,
                    !0,
                  ),
                  f = [
                    function(n, t, r) {
                      var o =
                        (!a && (r || t !== c)) ||
                        ((e = t).nodeType ? d(n, t, r) : u(n, t, r));
                      return (e = null), o;
                    },
                  ];
                s < i;
                s++
              )
                if ((t = r.relative[n[s].type])) f = [wn(kn(f), t)];
                else {
                  if ((t = r.filter[n[s].type].apply(null, n[s].matches))[y]) {
                    for (o = ++s; o < i && !r.relative[n[o].type]; o++);
                    return En(
                      s > 1 && kn(f),
                      s > 1 &&
                        yn(
                          n.slice(0, s - 1).concat({
                            value: ' ' === n[s - 2].type ? '*' : '',
                          }),
                        ).replace(W, '$1'),
                      t,
                      s < o && Tn(n.slice(s, o)),
                      o < i && Tn((n = n.slice(o))),
                      o < i && yn(n),
                    );
                  }
                  f.push(t);
                }
              return kn(f);
            }
            return (
              (xn.prototype = r.filters = r.pseudos),
              (r.setFilters = new xn()),
              (a = sn.tokenize = function(n, e) {
                var t,
                  o,
                  i,
                  a,
                  l,
                  s,
                  c,
                  d = T[n + ' '];
                if (d) return e ? 0 : d.slice(0);
                for (l = n, s = [], c = r.preFilter; l; ) {
                  for (a in ((t && !(o = q.exec(l))) ||
                    (o && (l = l.slice(o[0].length) || l), s.push((i = []))),
                  (t = !1),
                  (o = B.exec(l)) &&
                    ((t = o.shift()),
                    i.push({ value: t, type: o[0].replace(W, ' ') }),
                    (l = l.slice(t.length))),
                  r.filter))
                    !(o = Q[a].exec(l)) ||
                      (c[a] && !(o = c[a](o))) ||
                      ((t = o.shift()),
                      i.push({ value: t, type: a, matches: o }),
                      (l = l.slice(t.length)));
                  if (!t) break;
                }
                return e ? l.length : l ? sn.error(n) : T(n, s).slice(0);
              }),
              (l = sn.compile = function(n, e) {
                var t,
                  o = [],
                  i = [],
                  l = C[n + ' '];
                if (!l) {
                  for (e || (e = a(n)), t = e.length; t--; )
                    (l = Tn(e[t]))[y] ? o.push(l) : i.push(l);
                  (l = C(
                    n,
                    (function(n, e) {
                      var t = e.length > 0,
                        o = n.length > 0,
                        i = function(i, a, l, s, d) {
                          var u,
                            p,
                            h,
                            b = 0,
                            v = '0',
                            x = i && [],
                            y = [],
                            w = c,
                            _ = i || (o && r.find.TAG('*', d)),
                            E = (k += null == w ? 1 : Math.random() || 0.1),
                            T = _.length;
                          for (
                            d && (c = a === m || a || d);
                            v !== T && null != (u = _[v]);
                            v++
                          ) {
                            if (o && u) {
                              for (
                                p = 0,
                                  a ||
                                    u.ownerDocument === m ||
                                    (f(u), (l = !g));
                                (h = n[p++]);

                              )
                                if (h(u, a || m, l)) {
                                  s.push(u);
                                  break;
                                }
                              d && (k = E);
                            }
                            t && ((u = !h && u) && b--, i && x.push(u));
                          }
                          if (((b += v), t && v !== b)) {
                            for (p = 0; (h = e[p++]); ) h(x, y, a, l);
                            if (i) {
                              if (b > 0)
                                for (; v--; )
                                  x[v] || y[v] || (y[v] = I.call(s));
                              y = _n(y);
                            }
                            P.apply(s, y),
                              d &&
                                !i &&
                                y.length > 0 &&
                                b + e.length > 1 &&
                                sn.uniqueSort(s);
                          }
                          return d && ((k = E), (c = w)), x;
                        };
                      return t ? dn(i) : i;
                    })(i, o),
                  )).selector = n;
                }
                return l;
              }),
              (s = sn.select = function(n, e, t, o) {
                var i,
                  s,
                  c,
                  d,
                  u,
                  f = 'function' == typeof n && n,
                  m = !o && a((n = f.selector || n));
                if (((t = t || []), 1 === m.length)) {
                  if (
                    (s = m[0] = m[0].slice(0)).length > 2 &&
                    'ID' === (c = s[0]).type &&
                    9 === e.nodeType &&
                    g &&
                    r.relative[s[1].type]
                  ) {
                    if (
                      !(e = (r.find.ID(c.matches[0].replace(en, tn), e) ||
                        [])[0])
                    )
                      return t;
                    f && (e = e.parentNode),
                      (n = n.slice(s.shift().value.length));
                  }
                  for (
                    i = Q.needsContext.test(n) ? 0 : s.length;
                    i-- && ((c = s[i]), !r.relative[(d = c.type)]);

                  )
                    if (
                      (u = r.find[d]) &&
                      (o = u(
                        c.matches[0].replace(en, tn),
                        (nn.test(s[0].type) && vn(e.parentNode)) || e,
                      ))
                    ) {
                      if ((s.splice(i, 1), !(n = o.length && yn(s))))
                        return P.apply(t, o), t;
                      break;
                    }
                }
                return (
                  (f || l(n, m))(
                    o,
                    e,
                    !g,
                    t,
                    !e || (nn.test(n) && vn(e.parentNode)) || e,
                  ),
                  t
                );
              }),
              (t.sortStable =
                y
                  .split('')
                  .sort(N)
                  .join('') === y),
              (t.detectDuplicates = !!u),
              f(),
              (t.sortDetached = un(function(n) {
                return (
                  1 & n.compareDocumentPosition(m.createElement('fieldset'))
                );
              })),
              un(function(n) {
                return (
                  (n.innerHTML = "<a href='#'></a>"),
                  '#' === n.firstChild.getAttribute('href')
                );
              }) ||
                fn('type|href|height|width', function(n, e, t) {
                  if (!t)
                    return n.getAttribute(
                      e,
                      'type' === e.toLowerCase() ? 1 : 2,
                    );
                }),
              (t.attributes &&
                un(function(n) {
                  return (
                    (n.innerHTML = '<input/>'),
                    n.firstChild.setAttribute('value', ''),
                    '' === n.firstChild.getAttribute('value')
                  );
                })) ||
                fn('value', function(n, e, t) {
                  if (!t && 'input' === n.nodeName.toLowerCase())
                    return n.defaultValue;
                }),
              un(function(n) {
                return null == n.getAttribute('disabled');
              }) ||
                fn(z, function(n, e, t) {
                  var r;
                  if (!t)
                    return !0 === n[e]
                      ? e.toLowerCase()
                      : (r = n.getAttributeNode(e)) && r.specified
                      ? r.value
                      : null;
                }),
              sn
            );
          })(t);
        (_.find = C),
          (_.expr = C.selectors),
          (_.expr[':'] = _.expr.pseudos),
          (_.uniqueSort = _.unique = C.uniqueSort),
          (_.text = C.getText),
          (_.isXMLDoc = C.isXML),
          (_.contains = C.contains),
          (_.escapeSelector = C.escape);
        var S = function(n, e, t) {
            for (var r = [], o = void 0 !== t; (n = n[e]) && 9 !== n.nodeType; )
              if (1 === n.nodeType) {
                if (o && _(n).is(t)) break;
                r.push(n);
              }
            return r;
          },
          N = function(n, e) {
            for (var t = []; n; n = n.nextSibling)
              1 === n.nodeType && n !== e && t.push(n);
            return t;
          },
          D = _.expr.match.needsContext;
        function A(n, e) {
          return n.nodeName && n.nodeName.toLowerCase() === e.toLowerCase();
        }
        var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function O(n, e, t) {
          return v(e)
            ? _.grep(n, function(n, r) {
                return !!e.call(n, r, n) !== t;
              })
            : e.nodeType
            ? _.grep(n, function(n) {
                return (n === e) !== t;
              })
            : 'string' != typeof e
            ? _.grep(n, function(n) {
                return u.call(e, n) > -1 !== t;
              })
            : _.filter(e, n, t);
        }
        (_.filter = function(n, e, t) {
          var r = e[0];
          return (
            t && (n = ':not(' + n + ')'),
            1 === e.length && 1 === r.nodeType
              ? _.find.matchesSelector(r, n)
                ? [r]
                : []
              : _.find.matches(
                  n,
                  _.grep(e, function(n) {
                    return 1 === n.nodeType;
                  }),
                )
          );
        }),
          _.fn.extend({
            find: function(n) {
              var e,
                t,
                r = this.length,
                o = this;
              if ('string' != typeof n)
                return this.pushStack(
                  _(n).filter(function() {
                    for (e = 0; e < r; e++)
                      if (_.contains(o[e], this)) return !0;
                  }),
                );
              for (t = this.pushStack([]), e = 0; e < r; e++)
                _.find(n, o[e], t);
              return r > 1 ? _.uniqueSort(t) : t;
            },
            filter: function(n) {
              return this.pushStack(O(this, n || [], !1));
            },
            not: function(n) {
              return this.pushStack(O(this, n || [], !0));
            },
            is: function(n) {
              return !!O(
                this,
                'string' == typeof n && D.test(n) ? _(n) : n || [],
                !1,
              ).length;
            },
          });
        var P,
          j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((_.fn.init = function(n, e, t) {
          var r, o;
          if (!n) return this;
          if (((t = t || P), 'string' == typeof n)) {
            if (
              !(r =
                '<' === n[0] && '>' === n[n.length - 1] && n.length >= 3
                  ? [null, n, null]
                  : j.exec(n)) ||
              (!r[1] && e)
            )
              return !e || e.jquery
                ? (e || t).find(n)
                : this.constructor(e).find(n);
            if (r[1]) {
              if (
                ((e = e instanceof _ ? e[0] : e),
                _.merge(
                  this,
                  _.parseHTML(
                    r[1],
                    e && e.nodeType ? e.ownerDocument || e : a,
                    !0,
                  ),
                ),
                I.test(r[1]) && _.isPlainObject(e))
              )
                for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
              return this;
            }
            return (
              (o = a.getElementById(r[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            );
          }
          return n.nodeType
            ? ((this[0] = n), (this.length = 1), this)
            : v(n)
            ? void 0 !== t.ready
              ? t.ready(n)
              : n(_)
            : _.makeArray(n, this);
        }).prototype = _.fn),
          (P = _(a));
        var L = /^(?:parents|prev(?:Until|All))/,
          z = { children: !0, contents: !0, next: !0, prev: !0 };
        function M(n, e) {
          for (; (n = n[e]) && 1 !== n.nodeType; );
          return n;
        }
        _.fn.extend({
          has: function(n) {
            var e = _(n, this),
              t = e.length;
            return this.filter(function() {
              for (var n = 0; n < t; n++) if (_.contains(this, e[n])) return !0;
            });
          },
          closest: function(n, e) {
            var t,
              r = 0,
              o = this.length,
              i = [],
              a = 'string' != typeof n && _(n);
            if (!D.test(n))
              for (; r < o; r++)
                for (t = this[r]; t && t !== e; t = t.parentNode)
                  if (
                    t.nodeType < 11 &&
                    (a
                      ? a.index(t) > -1
                      : 1 === t.nodeType && _.find.matchesSelector(t, n))
                  ) {
                    i.push(t);
                    break;
                  }
            return this.pushStack(i.length > 1 ? _.uniqueSort(i) : i);
          },
          index: function(n) {
            return n
              ? 'string' == typeof n
                ? u.call(_(n), this[0])
                : u.call(this, n.jquery ? n[0] : n)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function(n, e) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(n, e))));
          },
          addBack: function(n) {
            return this.add(
              null == n ? this.prevObject : this.prevObject.filter(n),
            );
          },
        }),
          _.each(
            {
              parent: function(n) {
                var e = n.parentNode;
                return e && 11 !== e.nodeType ? e : null;
              },
              parents: function(n) {
                return S(n, 'parentNode');
              },
              parentsUntil: function(n, e, t) {
                return S(n, 'parentNode', t);
              },
              next: function(n) {
                return M(n, 'nextSibling');
              },
              prev: function(n) {
                return M(n, 'previousSibling');
              },
              nextAll: function(n) {
                return S(n, 'nextSibling');
              },
              prevAll: function(n) {
                return S(n, 'previousSibling');
              },
              nextUntil: function(n, e, t) {
                return S(n, 'nextSibling', t);
              },
              prevUntil: function(n, e, t) {
                return S(n, 'previousSibling', t);
              },
              siblings: function(n) {
                return N((n.parentNode || {}).firstChild, n);
              },
              children: function(n) {
                return N(n.firstChild);
              },
              contents: function(n) {
                return void 0 !== n.contentDocument
                  ? n.contentDocument
                  : (A(n, 'template') && (n = n.content || n),
                    _.merge([], n.childNodes));
              },
            },
            function(n, e) {
              _.fn[n] = function(t, r) {
                var o = _.map(this, e, t);
                return (
                  'Until' !== n.slice(-5) && (r = t),
                  r && 'string' == typeof r && (o = _.filter(r, o)),
                  this.length > 1 &&
                    (z[n] || _.uniqueSort(o), L.test(n) && o.reverse()),
                  this.pushStack(o)
                );
              };
            },
          );
        var R = /[^\x20\t\r\n\f]+/g;
        function F(n) {
          return n;
        }
        function H(n) {
          throw n;
        }
        function U(n, e, t, r) {
          var o;
          try {
            n && v((o = n.promise))
              ? o
                  .call(n)
                  .done(e)
                  .fail(t)
              : n && v((o = n.then))
              ? o.call(n, e, t)
              : e.apply(void 0, [n].slice(r));
          } catch (n) {
            t.apply(void 0, [n]);
          }
        }
        (_.Callbacks = function(n) {
          n =
            'string' == typeof n
              ? (function(n) {
                  var e = {};
                  return (
                    _.each(n.match(R) || [], function(n, t) {
                      e[t] = !0;
                    }),
                    e
                  );
                })(n)
              : _.extend({}, n);
          var e,
            t,
            r,
            o,
            i = [],
            a = [],
            l = -1,
            s = function() {
              for (o = o || n.once, r = e = !0; a.length; l = -1)
                for (t = a.shift(); ++l < i.length; )
                  !1 === i[l].apply(t[0], t[1]) &&
                    n.stopOnFalse &&
                    ((l = i.length), (t = !1));
              n.memory || (t = !1), (e = !1), o && (i = t ? [] : '');
            },
            c = {
              add: function() {
                return (
                  i &&
                    (t && !e && ((l = i.length - 1), a.push(t)),
                    (function e(t) {
                      _.each(t, function(t, r) {
                        v(r)
                          ? (n.unique && c.has(r)) || i.push(r)
                          : r && r.length && 'string' !== k(r) && e(r);
                      });
                    })(arguments),
                    t && !e && s()),
                  this
                );
              },
              remove: function() {
                return (
                  _.each(arguments, function(n, e) {
                    for (var t; (t = _.inArray(e, i, t)) > -1; )
                      i.splice(t, 1), t <= l && l--;
                  }),
                  this
                );
              },
              has: function(n) {
                return n ? _.inArray(n, i) > -1 : i.length > 0;
              },
              empty: function() {
                return i && (i = []), this;
              },
              disable: function() {
                return (o = a = []), (i = t = ''), this;
              },
              disabled: function() {
                return !i;
              },
              lock: function() {
                return (o = a = []), t || e || (i = t = ''), this;
              },
              locked: function() {
                return !!o;
              },
              fireWith: function(n, t) {
                return (
                  o ||
                    ((t = [n, (t = t || []).slice ? t.slice() : t]),
                    a.push(t),
                    e || s()),
                  this
                );
              },
              fire: function() {
                return c.fireWith(this, arguments), this;
              },
              fired: function() {
                return !!r;
              },
            };
          return c;
        }),
          _.extend({
            Deferred: function(n) {
              var e = [
                  [
                    'notify',
                    'progress',
                    _.Callbacks('memory'),
                    _.Callbacks('memory'),
                    2,
                  ],
                  [
                    'resolve',
                    'done',
                    _.Callbacks('once memory'),
                    _.Callbacks('once memory'),
                    0,
                    'resolved',
                  ],
                  [
                    'reject',
                    'fail',
                    _.Callbacks('once memory'),
                    _.Callbacks('once memory'),
                    1,
                    'rejected',
                  ],
                ],
                r = 'pending',
                o = {
                  state: function() {
                    return r;
                  },
                  always: function() {
                    return i.done(arguments).fail(arguments), this;
                  },
                  catch: function(n) {
                    return o.then(null, n);
                  },
                  pipe: function() {
                    var n = arguments;
                    return _.Deferred(function(t) {
                      _.each(e, function(e, r) {
                        var o = v(n[r[4]]) && n[r[4]];
                        i[r[1]](function() {
                          var n = o && o.apply(this, arguments);
                          n && v(n.promise)
                            ? n
                                .promise()
                                .progress(t.notify)
                                .done(t.resolve)
                                .fail(t.reject)
                            : t[r[0] + 'With'](this, o ? [n] : arguments);
                        });
                      }),
                        (n = null);
                    }).promise();
                  },
                  then: function(n, r, o) {
                    var i = 0;
                    function a(n, e, r, o) {
                      return function() {
                        var l = this,
                          s = arguments,
                          c = function() {
                            var t, c;
                            if (!(n < i)) {
                              if ((t = r.apply(l, s)) === e.promise())
                                throw new TypeError('Thenable self-resolution');
                              (c =
                                t &&
                                ('object' == typeof t ||
                                  'function' == typeof t) &&
                                t.then),
                                v(c)
                                  ? o
                                    ? c.call(t, a(i, e, F, o), a(i, e, H, o))
                                    : (i++,
                                      c.call(
                                        t,
                                        a(i, e, F, o),
                                        a(i, e, H, o),
                                        a(i, e, F, e.notifyWith),
                                      ))
                                  : (r !== F && ((l = void 0), (s = [t])),
                                    (o || e.resolveWith)(l, s));
                            }
                          },
                          d = o
                            ? c
                            : function() {
                                try {
                                  c();
                                } catch (t) {
                                  _.Deferred.exceptionHook &&
                                    _.Deferred.exceptionHook(t, d.stackTrace),
                                    n + 1 >= i &&
                                      (r !== H && ((l = void 0), (s = [t])),
                                      e.rejectWith(l, s));
                                }
                              };
                        n
                          ? d()
                          : (_.Deferred.getStackHook &&
                              (d.stackTrace = _.Deferred.getStackHook()),
                            t.setTimeout(d));
                      };
                    }
                    return _.Deferred(function(t) {
                      e[0][3].add(a(0, t, v(o) ? o : F, t.notifyWith)),
                        e[1][3].add(a(0, t, v(n) ? n : F)),
                        e[2][3].add(a(0, t, v(r) ? r : H));
                    }).promise();
                  },
                  promise: function(n) {
                    return null != n ? _.extend(n, o) : o;
                  },
                },
                i = {};
              return (
                _.each(e, function(n, t) {
                  var a = t[2],
                    l = t[5];
                  (o[t[1]] = a.add),
                    l &&
                      a.add(
                        function() {
                          r = l;
                        },
                        e[3 - n][2].disable,
                        e[3 - n][3].disable,
                        e[0][2].lock,
                        e[0][3].lock,
                      ),
                    a.add(t[3].fire),
                    (i[t[0]] = function() {
                      return (
                        i[t[0] + 'With'](this === i ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (i[t[0] + 'With'] = a.fireWith);
                }),
                o.promise(i),
                n && n.call(i, i),
                i
              );
            },
            when: function(n) {
              var e = arguments.length,
                t = e,
                r = Array(t),
                o = s.call(arguments),
                i = _.Deferred(),
                a = function(n) {
                  return function(t) {
                    (r[n] = this),
                      (o[n] = arguments.length > 1 ? s.call(arguments) : t),
                      --e || i.resolveWith(r, o);
                  };
                };
              if (
                e <= 1 &&
                (U(n, i.done(a(t)).resolve, i.reject, !e),
                'pending' === i.state() || v(o[t] && o[t].then))
              )
                return i.then();
              for (; t--; ) U(o[t], a(t), i.reject);
              return i.promise();
            },
          });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (_.Deferred.exceptionHook = function(n, e) {
          t.console &&
            t.console.warn &&
            n &&
            W.test(n.name) &&
            t.console.warn(
              'jQuery.Deferred exception: ' + n.message,
              n.stack,
              e,
            );
        }),
          (_.readyException = function(n) {
            t.setTimeout(function() {
              throw n;
            });
          });
        var q = _.Deferred();
        function B() {
          a.removeEventListener('DOMContentLoaded', B),
            t.removeEventListener('load', B),
            _.ready();
        }
        (_.fn.ready = function(n) {
          return (
            q.then(n).catch(function(n) {
              _.readyException(n);
            }),
            this
          );
        }),
          _.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(n) {
              (!0 === n ? --_.readyWait : _.isReady) ||
                ((_.isReady = !0),
                (!0 !== n && --_.readyWait > 0) || q.resolveWith(a, [_]));
            },
          }),
          (_.ready.then = q.then),
          'complete' === a.readyState ||
          ('loading' !== a.readyState && !a.documentElement.doScroll)
            ? t.setTimeout(_.ready)
            : (a.addEventListener('DOMContentLoaded', B),
              t.addEventListener('load', B));
        var V = function(n, e, t, r, o, i, a) {
            var l = 0,
              s = n.length,
              c = null == t;
            if ('object' === k(t))
              for (l in ((o = !0), t)) V(n, e, l, t[l], !0, i, a);
            else if (
              void 0 !== r &&
              ((o = !0),
              v(r) || (a = !0),
              c &&
                (a
                  ? (e.call(n, r), (e = null))
                  : ((c = e),
                    (e = function(n, e, t) {
                      return c.call(_(n), t);
                    }))),
              e)
            )
              for (; l < s; l++)
                e(n[l], t, a ? r : r.call(n[l], l, e(n[l], t)));
            return o ? n : c ? e.call(n) : s ? e(n[0], t) : i;
          },
          $ = /^-ms-/,
          K = /-([a-z])/g;
        function Q(n, e) {
          return e.toUpperCase();
        }
        function Y(n) {
          return n.replace($, 'ms-').replace(K, Q);
        }
        var X = function(n) {
          return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType;
        };
        function G() {
          this.expando = _.expando + G.uid++;
        }
        (G.uid = 1),
          (G.prototype = {
            cache: function(n) {
              var e = n[this.expando];
              return (
                e ||
                  ((e = {}),
                  X(n) &&
                    (n.nodeType
                      ? (n[this.expando] = e)
                      : Object.defineProperty(n, this.expando, {
                          value: e,
                          configurable: !0,
                        }))),
                e
              );
            },
            set: function(n, e, t) {
              var r,
                o = this.cache(n);
              if ('string' == typeof e) o[Y(e)] = t;
              else for (r in e) o[Y(r)] = e[r];
              return o;
            },
            get: function(n, e) {
              return void 0 === e
                ? this.cache(n)
                : n[this.expando] && n[this.expando][Y(e)];
            },
            access: function(n, e, t) {
              return void 0 === e || (e && 'string' == typeof e && void 0 === t)
                ? this.get(n, e)
                : (this.set(n, e, t), void 0 !== t ? t : e);
            },
            remove: function(n, e) {
              var t,
                r = n[this.expando];
              if (void 0 !== r) {
                if (void 0 !== e) {
                  t = (e = Array.isArray(e)
                    ? e.map(Y)
                    : (e = Y(e)) in r
                    ? [e]
                    : e.match(R) || []).length;
                  for (; t--; ) delete r[e[t]];
                }
                (void 0 === e || _.isEmptyObject(r)) &&
                  (n.nodeType
                    ? (n[this.expando] = void 0)
                    : delete n[this.expando]);
              }
            },
            hasData: function(n) {
              var e = n[this.expando];
              return void 0 !== e && !_.isEmptyObject(e);
            },
          });
        var J = new G(),
          Z = new G(),
          nn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          en = /[A-Z]/g;
        function tn(n, e, t) {
          var r;
          if (void 0 === t && 1 === n.nodeType)
            if (
              ((r = 'data-' + e.replace(en, '-$&').toLowerCase()),
              'string' == typeof (t = n.getAttribute(r)))
            ) {
              try {
                t = (function(n) {
                  return (
                    'true' === n ||
                    ('false' !== n &&
                      ('null' === n
                        ? null
                        : n === +n + ''
                        ? +n
                        : nn.test(n)
                        ? JSON.parse(n)
                        : n))
                  );
                })(t);
              } catch (n) {}
              Z.set(n, e, t);
            } else t = void 0;
          return t;
        }
        _.extend({
          hasData: function(n) {
            return Z.hasData(n) || J.hasData(n);
          },
          data: function(n, e, t) {
            return Z.access(n, e, t);
          },
          removeData: function(n, e) {
            Z.remove(n, e);
          },
          _data: function(n, e, t) {
            return J.access(n, e, t);
          },
          _removeData: function(n, e) {
            J.remove(n, e);
          },
        }),
          _.fn.extend({
            data: function(n, e) {
              var t,
                r,
                o,
                i = this[0],
                a = i && i.attributes;
              if (void 0 === n) {
                if (
                  this.length &&
                  ((o = Z.get(i)),
                  1 === i.nodeType && !J.get(i, 'hasDataAttrs'))
                ) {
                  for (t = a.length; t--; )
                    a[t] &&
                      0 === (r = a[t].name).indexOf('data-') &&
                      ((r = Y(r.slice(5))), tn(i, r, o[r]));
                  J.set(i, 'hasDataAttrs', !0);
                }
                return o;
              }
              return 'object' == typeof n
                ? this.each(function() {
                    Z.set(this, n);
                  })
                : V(
                    this,
                    function(e) {
                      var t;
                      if (i && void 0 === e)
                        return void 0 !== (t = Z.get(i, n))
                          ? t
                          : void 0 !== (t = tn(i, n))
                          ? t
                          : void 0;
                      this.each(function() {
                        Z.set(this, n, e);
                      });
                    },
                    null,
                    e,
                    arguments.length > 1,
                    null,
                    !0,
                  );
            },
            removeData: function(n) {
              return this.each(function() {
                Z.remove(this, n);
              });
            },
          }),
          _.extend({
            queue: function(n, e, t) {
              var r;
              if (n)
                return (
                  (e = (e || 'fx') + 'queue'),
                  (r = J.get(n, e)),
                  t &&
                    (!r || Array.isArray(t)
                      ? (r = J.access(n, e, _.makeArray(t)))
                      : r.push(t)),
                  r || []
                );
            },
            dequeue: function(n, e) {
              e = e || 'fx';
              var t = _.queue(n, e),
                r = t.length,
                o = t.shift(),
                i = _._queueHooks(n, e);
              'inprogress' === o && ((o = t.shift()), r--),
                o &&
                  ('fx' === e && t.unshift('inprogress'),
                  delete i.stop,
                  o.call(
                    n,
                    function() {
                      _.dequeue(n, e);
                    },
                    i,
                  )),
                !r && i && i.empty.fire();
            },
            _queueHooks: function(n, e) {
              var t = e + 'queueHooks';
              return (
                J.get(n, t) ||
                J.access(n, t, {
                  empty: _.Callbacks('once memory').add(function() {
                    J.remove(n, [e + 'queue', t]);
                  }),
                })
              );
            },
          }),
          _.fn.extend({
            queue: function(n, e) {
              var t = 2;
              return (
                'string' != typeof n && ((e = n), (n = 'fx'), t--),
                arguments.length < t
                  ? _.queue(this[0], n)
                  : void 0 === e
                  ? this
                  : this.each(function() {
                      var t = _.queue(this, n, e);
                      _._queueHooks(this, n),
                        'fx' === n &&
                          'inprogress' !== t[0] &&
                          _.dequeue(this, n);
                    })
              );
            },
            dequeue: function(n) {
              return this.each(function() {
                _.dequeue(this, n);
              });
            },
            clearQueue: function(n) {
              return this.queue(n || 'fx', []);
            },
            promise: function(n, e) {
              var t,
                r = 1,
                o = _.Deferred(),
                i = this,
                a = this.length,
                l = function() {
                  --r || o.resolveWith(i, [i]);
                };
              for (
                'string' != typeof n && ((e = n), (n = void 0)), n = n || 'fx';
                a--;

              )
                (t = J.get(i[a], n + 'queueHooks')) &&
                  t.empty &&
                  (r++, t.empty.add(l));
              return l(), o.promise(e);
            },
          });
        var rn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          on = new RegExp('^(?:([+-])=|)(' + rn + ')([a-z%]*)$', 'i'),
          an = ['Top', 'Right', 'Bottom', 'Left'],
          ln = a.documentElement,
          sn = function(n) {
            return _.contains(n.ownerDocument, n);
          },
          cn = { composed: !0 };
        ln.getRootNode &&
          (sn = function(n) {
            return (
              _.contains(n.ownerDocument, n) ||
              n.getRootNode(cn) === n.ownerDocument
            );
          });
        var dn = function(n, e) {
            return (
              'none' === (n = e || n).style.display ||
              ('' === n.style.display &&
                sn(n) &&
                'none' === _.css(n, 'display'))
            );
          },
          un = function(n, e, t, r) {
            var o,
              i,
              a = {};
            for (i in e) (a[i] = n.style[i]), (n.style[i] = e[i]);
            for (i in ((o = t.apply(n, r || [])), e)) n.style[i] = a[i];
            return o;
          };
        function fn(n, e, t, r) {
          var o,
            i,
            a = 20,
            l = r
              ? function() {
                  return r.cur();
                }
              : function() {
                  return _.css(n, e, '');
                },
            s = l(),
            c = (t && t[3]) || (_.cssNumber[e] ? '' : 'px'),
            d =
              n.nodeType &&
              (_.cssNumber[e] || ('px' !== c && +s)) &&
              on.exec(_.css(n, e));
          if (d && d[3] !== c) {
            for (s /= 2, c = c || d[3], d = +s || 1; a--; )
              _.style(n, e, d + c),
                (1 - i) * (1 - (i = l() / s || 0.5)) <= 0 && (a = 0),
                (d /= i);
            (d *= 2), _.style(n, e, d + c), (t = t || []);
          }
          return (
            t &&
              ((d = +d || +s || 0),
              (o = t[1] ? d + (t[1] + 1) * t[2] : +t[2]),
              r && ((r.unit = c), (r.start = d), (r.end = o))),
            o
          );
        }
        var mn = {};
        function pn(n) {
          var e,
            t = n.ownerDocument,
            r = n.nodeName,
            o = mn[r];
          return (
            o ||
            ((e = t.body.appendChild(t.createElement(r))),
            (o = _.css(e, 'display')),
            e.parentNode.removeChild(e),
            'none' === o && (o = 'block'),
            (mn[r] = o),
            o)
          );
        }
        function gn(n, e) {
          for (var t, r, o = [], i = 0, a = n.length; i < a; i++)
            (r = n[i]).style &&
              ((t = r.style.display),
              e
                ? ('none' === t &&
                    ((o[i] = J.get(r, 'display') || null),
                    o[i] || (r.style.display = '')),
                  '' === r.style.display && dn(r) && (o[i] = pn(r)))
                : 'none' !== t && ((o[i] = 'none'), J.set(r, 'display', t)));
          for (i = 0; i < a; i++) null != o[i] && (n[i].style.display = o[i]);
          return n;
        }
        _.fn.extend({
          show: function() {
            return gn(this, !0);
          },
          hide: function() {
            return gn(this);
          },
          toggle: function(n) {
            return 'boolean' == typeof n
              ? n
                ? this.show()
                : this.hide()
              : this.each(function() {
                  dn(this) ? _(this).show() : _(this).hide();
                });
          },
        });
        var hn = /^(?:checkbox|radio)$/i,
          bn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          vn = /^$|^module$|\/(?:java|ecma)script/i,
          xn = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', ''],
          };
        function yn(n, e) {
          var t;
          return (
            (t =
              void 0 !== n.getElementsByTagName
                ? n.getElementsByTagName(e || '*')
                : void 0 !== n.querySelectorAll
                ? n.querySelectorAll(e || '*')
                : []),
            void 0 === e || (e && A(n, e)) ? _.merge([n], t) : t
          );
        }
        function wn(n, e) {
          for (var t = 0, r = n.length; t < r; t++)
            J.set(n[t], 'globalEval', !e || J.get(e[t], 'globalEval'));
        }
        (xn.optgroup = xn.option),
          (xn.tbody = xn.tfoot = xn.colgroup = xn.caption = xn.thead),
          (xn.th = xn.td);
        var kn,
          _n,
          En = /<|&#?\w+;/;
        function Tn(n, e, t, r, o) {
          for (
            var i,
              a,
              l,
              s,
              c,
              d,
              u = e.createDocumentFragment(),
              f = [],
              m = 0,
              p = n.length;
            m < p;
            m++
          )
            if ((i = n[m]) || 0 === i)
              if ('object' === k(i)) _.merge(f, i.nodeType ? [i] : i);
              else if (En.test(i)) {
                for (
                  a = a || u.appendChild(e.createElement('div')),
                    l = (bn.exec(i) || ['', ''])[1].toLowerCase(),
                    s = xn[l] || xn._default,
                    a.innerHTML = s[1] + _.htmlPrefilter(i) + s[2],
                    d = s[0];
                  d--;

                )
                  a = a.lastChild;
                _.merge(f, a.childNodes), ((a = u.firstChild).textContent = '');
              } else f.push(e.createTextNode(i));
          for (u.textContent = '', m = 0; (i = f[m++]); )
            if (r && _.inArray(i, r) > -1) o && o.push(i);
            else if (
              ((c = sn(i)), (a = yn(u.appendChild(i), 'script')), c && wn(a), t)
            )
              for (d = 0; (i = a[d++]); ) vn.test(i.type || '') && t.push(i);
          return u;
        }
        (kn = a.createDocumentFragment().appendChild(a.createElement('div'))),
          (_n = a.createElement('input')).setAttribute('type', 'radio'),
          _n.setAttribute('checked', 'checked'),
          _n.setAttribute('name', 't'),
          kn.appendChild(_n),
          (b.checkClone = kn.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (kn.innerHTML = '<textarea>x</textarea>'),
          (b.noCloneChecked = !!kn.cloneNode(!0).lastChild.defaultValue);
        var Cn = /^key/,
          Sn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Nn = /^([^.]*)(?:\.(.+)|)/;
        function Dn() {
          return !0;
        }
        function An() {
          return !1;
        }
        function In(n, e) {
          return (
            (n ===
              (function() {
                try {
                  return a.activeElement;
                } catch (n) {}
              })()) ==
            ('focus' === e)
          );
        }
        function On(n, e, t, r, o, i) {
          var a, l;
          if ('object' == typeof e) {
            for (l in ('string' != typeof t && ((r = r || t), (t = void 0)), e))
              On(n, l, t, r, e[l], i);
            return n;
          }
          if (
            (null == r && null == o
              ? ((o = t), (r = t = void 0))
              : null == o &&
                ('string' == typeof t
                  ? ((o = r), (r = void 0))
                  : ((o = r), (r = t), (t = void 0))),
            !1 === o)
          )
            o = An;
          else if (!o) return n;
          return (
            1 === i &&
              ((a = o),
              ((o = function(n) {
                return _().off(n), a.apply(this, arguments);
              }).guid = a.guid || (a.guid = _.guid++))),
            n.each(function() {
              _.event.add(this, e, o, r, t);
            })
          );
        }
        function Pn(n, e, t) {
          t
            ? (J.set(n, e, !1),
              _.event.add(n, e, {
                namespace: !1,
                handler: function(n) {
                  var r,
                    o,
                    i = J.get(this, e);
                  if (1 & n.isTrigger && this[e]) {
                    if (i.length)
                      (_.event.special[e] || {}).delegateType &&
                        n.stopPropagation();
                    else if (
                      ((i = s.call(arguments)),
                      J.set(this, e, i),
                      (r = t(this, e)),
                      this[e](),
                      i !== (o = J.get(this, e)) || r
                        ? J.set(this, e, !1)
                        : (o = {}),
                      i !== o)
                    )
                      return (
                        n.stopImmediatePropagation(),
                        n.preventDefault(),
                        o.value
                      );
                  } else
                    i.length &&
                      (J.set(this, e, {
                        value: _.event.trigger(
                          _.extend(i[0], _.Event.prototype),
                          i.slice(1),
                          this,
                        ),
                      }),
                      n.stopImmediatePropagation());
                },
              }))
            : void 0 === J.get(n, e) && _.event.add(n, e, Dn);
        }
        (_.event = {
          global: {},
          add: function(n, e, t, r, o) {
            var i,
              a,
              l,
              s,
              c,
              d,
              u,
              f,
              m,
              p,
              g,
              h = J.get(n);
            if (h)
              for (
                t.handler && ((t = (i = t).handler), (o = i.selector)),
                  o && _.find.matchesSelector(ln, o),
                  t.guid || (t.guid = _.guid++),
                  (s = h.events) || (s = h.events = {}),
                  (a = h.handle) ||
                    (a = h.handle = function(e) {
                      return void 0 !== _ && _.event.triggered !== e.type
                        ? _.event.dispatch.apply(n, arguments)
                        : void 0;
                    }),
                  c = (e = (e || '').match(R) || ['']).length;
                c--;

              )
                (m = g = (l = Nn.exec(e[c]) || [])[1]),
                  (p = (l[2] || '').split('.').sort()),
                  m &&
                    ((u = _.event.special[m] || {}),
                    (m = (o ? u.delegateType : u.bindType) || m),
                    (u = _.event.special[m] || {}),
                    (d = _.extend(
                      {
                        type: m,
                        origType: g,
                        data: r,
                        handler: t,
                        guid: t.guid,
                        selector: o,
                        needsContext: o && _.expr.match.needsContext.test(o),
                        namespace: p.join('.'),
                      },
                      i,
                    )),
                    (f = s[m]) ||
                      (((f = s[m] = []).delegateCount = 0),
                      (u.setup && !1 !== u.setup.call(n, r, p, a)) ||
                        (n.addEventListener && n.addEventListener(m, a))),
                    u.add &&
                      (u.add.call(n, d),
                      d.handler.guid || (d.handler.guid = t.guid)),
                    o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    (_.event.global[m] = !0));
          },
          remove: function(n, e, t, r, o) {
            var i,
              a,
              l,
              s,
              c,
              d,
              u,
              f,
              m,
              p,
              g,
              h = J.hasData(n) && J.get(n);
            if (h && (s = h.events)) {
              for (c = (e = (e || '').match(R) || ['']).length; c--; )
                if (
                  ((m = g = (l = Nn.exec(e[c]) || [])[1]),
                  (p = (l[2] || '').split('.').sort()),
                  m)
                ) {
                  for (
                    u = _.event.special[m] || {},
                      f = s[(m = (r ? u.delegateType : u.bindType) || m)] || [],
                      l =
                        l[2] &&
                        new RegExp(
                          '(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)',
                        ),
                      a = i = f.length;
                    i--;

                  )
                    (d = f[i]),
                      (!o && g !== d.origType) ||
                        (t && t.guid !== d.guid) ||
                        (l && !l.test(d.namespace)) ||
                        (r &&
                          r !== d.selector &&
                          ('**' !== r || !d.selector)) ||
                        (f.splice(i, 1),
                        d.selector && f.delegateCount--,
                        u.remove && u.remove.call(n, d));
                  a &&
                    !f.length &&
                    ((u.teardown && !1 !== u.teardown.call(n, p, h.handle)) ||
                      _.removeEvent(n, m, h.handle),
                    delete s[m]);
                } else for (m in s) _.event.remove(n, m + e[c], t, r, !0);
              _.isEmptyObject(s) && J.remove(n, 'handle events');
            }
          },
          dispatch: function(n) {
            var e,
              t,
              r,
              o,
              i,
              a,
              l = _.event.fix(n),
              s = new Array(arguments.length),
              c = (J.get(this, 'events') || {})[l.type] || [],
              d = _.event.special[l.type] || {};
            for (s[0] = l, e = 1; e < arguments.length; e++)
              s[e] = arguments[e];
            if (
              ((l.delegateTarget = this),
              !d.preDispatch || !1 !== d.preDispatch.call(this, l))
            ) {
              for (
                a = _.event.handlers.call(this, l, c), e = 0;
                (o = a[e++]) && !l.isPropagationStopped();

              )
                for (
                  l.currentTarget = o.elem, t = 0;
                  (i = o.handlers[t++]) && !l.isImmediatePropagationStopped();

                )
                  (l.rnamespace &&
                    !1 !== i.namespace &&
                    !l.rnamespace.test(i.namespace)) ||
                    ((l.handleObj = i),
                    (l.data = i.data),
                    void 0 !==
                      (r = (
                        (_.event.special[i.origType] || {}).handle || i.handler
                      ).apply(o.elem, s)) &&
                      !1 === (l.result = r) &&
                      (l.preventDefault(), l.stopPropagation()));
              return d.postDispatch && d.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function(n, e) {
            var t,
              r,
              o,
              i,
              a,
              l = [],
              s = e.delegateCount,
              c = n.target;
            if (s && c.nodeType && !('click' === n.type && n.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  ('click' !== n.type || !0 !== c.disabled)
                ) {
                  for (i = [], a = {}, t = 0; t < s; t++)
                    void 0 === a[(o = (r = e[t]).selector + ' ')] &&
                      (a[o] = r.needsContext
                        ? _(o, this).index(c) > -1
                        : _.find(o, this, null, [c]).length),
                      a[o] && i.push(r);
                  i.length && l.push({ elem: c, handlers: i });
                }
            return (
              (c = this),
              s < e.length && l.push({ elem: c, handlers: e.slice(s) }),
              l
            );
          },
          addProp: function(n, e) {
            Object.defineProperty(_.Event.prototype, n, {
              enumerable: !0,
              configurable: !0,
              get: v(e)
                ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                  }
                : function() {
                    if (this.originalEvent) return this.originalEvent[n];
                  },
              set: function(e) {
                Object.defineProperty(this, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function(n) {
            return n[_.expando] ? n : new _.Event(n);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function(n) {
                var e = this || n;
                return (
                  hn.test(e.type) &&
                    e.click &&
                    A(e, 'input') &&
                    Pn(e, 'click', Dn),
                  !1
                );
              },
              trigger: function(n) {
                var e = this || n;
                return (
                  hn.test(e.type) && e.click && A(e, 'input') && Pn(e, 'click'),
                  !0
                );
              },
              _default: function(n) {
                var e = n.target;
                return (
                  (hn.test(e.type) &&
                    e.click &&
                    A(e, 'input') &&
                    J.get(e, 'click')) ||
                  A(e, 'a')
                );
              },
            },
            beforeunload: {
              postDispatch: function(n) {
                void 0 !== n.result &&
                  n.originalEvent &&
                  (n.originalEvent.returnValue = n.result);
              },
            },
          },
        }),
          (_.removeEvent = function(n, e, t) {
            n.removeEventListener && n.removeEventListener(e, t);
          }),
          (_.Event = function(n, e) {
            if (!(this instanceof _.Event)) return new _.Event(n, e);
            n && n.type
              ? ((this.originalEvent = n),
                (this.type = n.type),
                (this.isDefaultPrevented =
                  n.defaultPrevented ||
                  (void 0 === n.defaultPrevented && !1 === n.returnValue)
                    ? Dn
                    : An),
                (this.target =
                  n.target && 3 === n.target.nodeType
                    ? n.target.parentNode
                    : n.target),
                (this.currentTarget = n.currentTarget),
                (this.relatedTarget = n.relatedTarget))
              : (this.type = n),
              e && _.extend(this, e),
              (this.timeStamp = (n && n.timeStamp) || Date.now()),
              (this[_.expando] = !0);
          }),
          (_.Event.prototype = {
            constructor: _.Event,
            isDefaultPrevented: An,
            isPropagationStopped: An,
            isImmediatePropagationStopped: An,
            isSimulated: !1,
            preventDefault: function() {
              var n = this.originalEvent;
              (this.isDefaultPrevented = Dn),
                n && !this.isSimulated && n.preventDefault();
            },
            stopPropagation: function() {
              var n = this.originalEvent;
              (this.isPropagationStopped = Dn),
                n && !this.isSimulated && n.stopPropagation();
            },
            stopImmediatePropagation: function() {
              var n = this.originalEvent;
              (this.isImmediatePropagationStopped = Dn),
                n && !this.isSimulated && n.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          _.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function(n) {
                var e = n.button;
                return null == n.which && Cn.test(n.type)
                  ? null != n.charCode
                    ? n.charCode
                    : n.keyCode
                  : !n.which && void 0 !== e && Sn.test(n.type)
                  ? 1 & e
                    ? 1
                    : 2 & e
                    ? 3
                    : 4 & e
                    ? 2
                    : 0
                  : n.which;
              },
            },
            _.event.addProp,
          ),
          _.each({ focus: 'focusin', blur: 'focusout' }, function(n, e) {
            _.event.special[n] = {
              setup: function() {
                return Pn(this, n, In), !1;
              },
              trigger: function() {
                return Pn(this, n), !0;
              },
              delegateType: e,
            };
          }),
          _.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout',
            },
            function(n, e) {
              _.event.special[n] = {
                delegateType: e,
                bindType: e,
                handle: function(n) {
                  var t,
                    r = this,
                    o = n.relatedTarget,
                    i = n.handleObj;
                  return (
                    (o && (o === r || _.contains(r, o))) ||
                      ((n.type = i.origType),
                      (t = i.handler.apply(this, arguments)),
                      (n.type = e)),
                    t
                  );
                },
              };
            },
          ),
          _.fn.extend({
            on: function(n, e, t, r) {
              return On(this, n, e, t, r);
            },
            one: function(n, e, t, r) {
              return On(this, n, e, t, r, 1);
            },
            off: function(n, e, t) {
              var r, o;
              if (n && n.preventDefault && n.handleObj)
                return (
                  (r = n.handleObj),
                  _(n.delegateTarget).off(
                    r.namespace ? r.origType + '.' + r.namespace : r.origType,
                    r.selector,
                    r.handler,
                  ),
                  this
                );
              if ('object' == typeof n) {
                for (o in n) this.off(o, e, n[o]);
                return this;
              }
              return (
                (!1 !== e && 'function' != typeof e) || ((t = e), (e = void 0)),
                !1 === t && (t = An),
                this.each(function() {
                  _.event.remove(this, n, t, e);
                })
              );
            },
          });
        var jn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Ln = /<script|<style|<link/i,
          zn = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Mn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Rn(n, e) {
          return (
            (A(n, 'table') &&
              A(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
              _(n).children('tbody')[0]) ||
            n
          );
        }
        function Fn(n) {
          return (n.type = (null !== n.getAttribute('type')) + '/' + n.type), n;
        }
        function Hn(n) {
          return (
            'true/' === (n.type || '').slice(0, 5)
              ? (n.type = n.type.slice(5))
              : n.removeAttribute('type'),
            n
          );
        }
        function Un(n, e) {
          var t, r, o, i, a, l, s, c;
          if (1 === e.nodeType) {
            if (
              J.hasData(n) &&
              ((i = J.access(n)), (a = J.set(e, i)), (c = i.events))
            )
              for (o in (delete a.handle, (a.events = {}), c))
                for (t = 0, r = c[o].length; t < r; t++)
                  _.event.add(e, o, c[o][t]);
            Z.hasData(n) &&
              ((l = Z.access(n)), (s = _.extend({}, l)), Z.set(e, s));
          }
        }
        function Wn(n, e) {
          var t = e.nodeName.toLowerCase();
          'input' === t && hn.test(n.type)
            ? (e.checked = n.checked)
            : ('input' !== t && 'textarea' !== t) ||
              (e.defaultValue = n.defaultValue);
        }
        function qn(n, e, t, r) {
          e = c.apply([], e);
          var o,
            i,
            a,
            l,
            s,
            d,
            u = 0,
            f = n.length,
            m = f - 1,
            p = e[0],
            g = v(p);
          if (
            g ||
            (f > 1 && 'string' == typeof p && !b.checkClone && zn.test(p))
          )
            return n.each(function(o) {
              var i = n.eq(o);
              g && (e[0] = p.call(this, o, i.html())), qn(i, e, t, r);
            });
          if (
            f &&
            ((i = (o = Tn(e, n[0].ownerDocument, !1, n, r)).firstChild),
            1 === o.childNodes.length && (o = i),
            i || r)
          ) {
            for (l = (a = _.map(yn(o, 'script'), Fn)).length; u < f; u++)
              (s = o),
                u !== m &&
                  ((s = _.clone(s, !0, !0)), l && _.merge(a, yn(s, 'script'))),
                t.call(n[u], s, u);
            if (l)
              for (
                d = a[a.length - 1].ownerDocument, _.map(a, Hn), u = 0;
                u < l;
                u++
              )
                (s = a[u]),
                  vn.test(s.type || '') &&
                    !J.access(s, 'globalEval') &&
                    _.contains(d, s) &&
                    (s.src && 'module' !== (s.type || '').toLowerCase()
                      ? _._evalUrl &&
                        !s.noModule &&
                        _._evalUrl(s.src, {
                          nonce: s.nonce || s.getAttribute('nonce'),
                        })
                      : w(s.textContent.replace(Mn, ''), s, d));
          }
          return n;
        }
        function Bn(n, e, t) {
          for (
            var r, o = e ? _.filter(e, n) : n, i = 0;
            null != (r = o[i]);
            i++
          )
            t || 1 !== r.nodeType || _.cleanData(yn(r)),
              r.parentNode &&
                (t && sn(r) && wn(yn(r, 'script')),
                r.parentNode.removeChild(r));
          return n;
        }
        _.extend({
          htmlPrefilter: function(n) {
            return n.replace(jn, '<$1></$2>');
          },
          clone: function(n, e, t) {
            var r,
              o,
              i,
              a,
              l = n.cloneNode(!0),
              s = sn(n);
            if (
              !(
                b.noCloneChecked ||
                (1 !== n.nodeType && 11 !== n.nodeType) ||
                _.isXMLDoc(n)
              )
            )
              for (a = yn(l), r = 0, o = (i = yn(n)).length; r < o; r++)
                Wn(i[r], a[r]);
            if (e)
              if (t)
                for (
                  i = i || yn(n), a = a || yn(l), r = 0, o = i.length;
                  r < o;
                  r++
                )
                  Un(i[r], a[r]);
              else Un(n, l);
            return (
              (a = yn(l, 'script')).length > 0 && wn(a, !s && yn(n, 'script')),
              l
            );
          },
          cleanData: function(n) {
            for (
              var e, t, r, o = _.event.special, i = 0;
              void 0 !== (t = n[i]);
              i++
            )
              if (X(t)) {
                if ((e = t[J.expando])) {
                  if (e.events)
                    for (r in e.events)
                      o[r]
                        ? _.event.remove(t, r)
                        : _.removeEvent(t, r, e.handle);
                  t[J.expando] = void 0;
                }
                t[Z.expando] && (t[Z.expando] = void 0);
              }
          },
        }),
          _.fn.extend({
            detach: function(n) {
              return Bn(this, n, !0);
            },
            remove: function(n) {
              return Bn(this, n);
            },
            text: function(n) {
              return V(
                this,
                function(n) {
                  return void 0 === n
                    ? _.text(this)
                    : this.empty().each(function() {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = n);
                      });
                },
                null,
                n,
                arguments.length,
              );
            },
            append: function() {
              return qn(this, arguments, function(n) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Rn(this, n).appendChild(n);
              });
            },
            prepend: function() {
              return qn(this, arguments, function(n) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var e = Rn(this, n);
                  e.insertBefore(n, e.firstChild);
                }
              });
            },
            before: function() {
              return qn(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this);
              });
            },
            after: function() {
              return qn(this, arguments, function(n) {
                this.parentNode &&
                  this.parentNode.insertBefore(n, this.nextSibling);
              });
            },
            empty: function() {
              for (var n, e = 0; null != (n = this[e]); e++)
                1 === n.nodeType &&
                  (_.cleanData(yn(n, !1)), (n.textContent = ''));
              return this;
            },
            clone: function(n, e) {
              return (
                (n = null != n && n),
                (e = null == e ? n : e),
                this.map(function() {
                  return _.clone(this, n, e);
                })
              );
            },
            html: function(n) {
              return V(
                this,
                function(n) {
                  var e = this[0] || {},
                    t = 0,
                    r = this.length;
                  if (void 0 === n && 1 === e.nodeType) return e.innerHTML;
                  if (
                    'string' == typeof n &&
                    !Ln.test(n) &&
                    !xn[(bn.exec(n) || ['', ''])[1].toLowerCase()]
                  ) {
                    n = _.htmlPrefilter(n);
                    try {
                      for (; t < r; t++)
                        1 === (e = this[t] || {}).nodeType &&
                          (_.cleanData(yn(e, !1)), (e.innerHTML = n));
                      e = 0;
                    } catch (n) {}
                  }
                  e && this.empty().append(n);
                },
                null,
                n,
                arguments.length,
              );
            },
            replaceWith: function() {
              var n = [];
              return qn(
                this,
                arguments,
                function(e) {
                  var t = this.parentNode;
                  _.inArray(this, n) < 0 &&
                    (_.cleanData(yn(this)), t && t.replaceChild(e, this));
                },
                n,
              );
            },
          }),
          _.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith',
            },
            function(n, e) {
              _.fn[n] = function(n) {
                for (
                  var t, r = [], o = _(n), i = o.length - 1, a = 0;
                  a <= i;
                  a++
                )
                  (t = a === i ? this : this.clone(!0)),
                    _(o[a])[e](t),
                    d.apply(r, t.get());
                return this.pushStack(r);
              };
            },
          );
        var Vn = new RegExp('^(' + rn + ')(?!px)[a-z%]+$', 'i'),
          $n = function(n) {
            var e = n.ownerDocument.defaultView;
            return (e && e.opener) || (e = t), e.getComputedStyle(n);
          },
          Kn = new RegExp(an.join('|'), 'i');
        function Qn(n, e, t) {
          var r,
            o,
            i,
            a,
            l = n.style;
          return (
            (t = t || $n(n)) &&
              ('' !== (a = t.getPropertyValue(e) || t[e]) ||
                sn(n) ||
                (a = _.style(n, e)),
              !b.pixelBoxStyles() &&
                Vn.test(a) &&
                Kn.test(e) &&
                ((r = l.width),
                (o = l.minWidth),
                (i = l.maxWidth),
                (l.minWidth = l.maxWidth = l.width = a),
                (a = t.width),
                (l.width = r),
                (l.minWidth = o),
                (l.maxWidth = i))),
            void 0 !== a ? a + '' : a
          );
        }
        function Yn(n, e) {
          return {
            get: function() {
              if (!n()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function() {
          function n() {
            if (d) {
              (c.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                (d.style.cssText =
                  'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                ln.appendChild(c).appendChild(d);
              var n = t.getComputedStyle(d);
              (r = '1%' !== n.top),
                (s = 12 === e(n.marginLeft)),
                (d.style.right = '60%'),
                (l = 36 === e(n.right)),
                (o = 36 === e(n.width)),
                (d.style.position = 'absolute'),
                (i = 12 === e(d.offsetWidth / 3)),
                ln.removeChild(c),
                (d = null);
            }
          }
          function e(n) {
            return Math.round(parseFloat(n));
          }
          var r,
            o,
            i,
            l,
            s,
            c = a.createElement('div'),
            d = a.createElement('div');
          d.style &&
            ((d.style.backgroundClip = 'content-box'),
            (d.cloneNode(!0).style.backgroundClip = ''),
            (b.clearCloneStyle = 'content-box' === d.style.backgroundClip),
            _.extend(b, {
              boxSizingReliable: function() {
                return n(), o;
              },
              pixelBoxStyles: function() {
                return n(), l;
              },
              pixelPosition: function() {
                return n(), r;
              },
              reliableMarginLeft: function() {
                return n(), s;
              },
              scrollboxSize: function() {
                return n(), i;
              },
            }));
        })();
        var Xn = ['Webkit', 'Moz', 'ms'],
          Gn = a.createElement('div').style,
          Jn = {};
        function Zn(n) {
          var e = _.cssProps[n] || Jn[n];
          return (
            e ||
            (n in Gn
              ? n
              : (Jn[n] =
                  (function(n) {
                    for (
                      var e = n[0].toUpperCase() + n.slice(1), t = Xn.length;
                      t--;

                    )
                      if ((n = Xn[t] + e) in Gn) return n;
                  })(n) || n))
          );
        }
        var ne = /^(none|table(?!-c[ea]).+)/,
          ee = /^--/,
          te = { position: 'absolute', visibility: 'hidden', display: 'block' },
          re = { letterSpacing: '0', fontWeight: '400' };
        function oe(n, e, t) {
          var r = on.exec(e);
          return r ? Math.max(0, r[2] - (t || 0)) + (r[3] || 'px') : e;
        }
        function ie(n, e, t, r, o, i) {
          var a = 'width' === e ? 1 : 0,
            l = 0,
            s = 0;
          if (t === (r ? 'border' : 'content')) return 0;
          for (; a < 4; a += 2)
            'margin' === t && (s += _.css(n, t + an[a], !0, o)),
              r
                ? ('content' === t && (s -= _.css(n, 'padding' + an[a], !0, o)),
                  'margin' !== t &&
                    (s -= _.css(n, 'border' + an[a] + 'Width', !0, o)))
                : ((s += _.css(n, 'padding' + an[a], !0, o)),
                  'padding' !== t
                    ? (s += _.css(n, 'border' + an[a] + 'Width', !0, o))
                    : (l += _.css(n, 'border' + an[a] + 'Width', !0, o)));
          return (
            !r &&
              i >= 0 &&
              (s +=
                Math.max(
                  0,
                  Math.ceil(
                    n['offset' + e[0].toUpperCase() + e.slice(1)] -
                      i -
                      s -
                      l -
                      0.5,
                  ),
                ) || 0),
            s
          );
        }
        function ae(n, e, t) {
          var r = $n(n),
            o =
              (!b.boxSizingReliable() || t) &&
              'border-box' === _.css(n, 'boxSizing', !1, r),
            i = o,
            a = Qn(n, e, r),
            l = 'offset' + e[0].toUpperCase() + e.slice(1);
          if (Vn.test(a)) {
            if (!t) return a;
            a = 'auto';
          }
          return (
            ((!b.boxSizingReliable() && o) ||
              'auto' === a ||
              (!parseFloat(a) && 'inline' === _.css(n, 'display', !1, r))) &&
              n.getClientRects().length &&
              ((o = 'border-box' === _.css(n, 'boxSizing', !1, r)),
              (i = l in n) && (a = n[l])),
            (a = parseFloat(a) || 0) +
              ie(n, e, t || (o ? 'border' : 'content'), i, r, a) +
              'px'
          );
        }
        function le(n, e, t, r, o) {
          return new le.prototype.init(n, e, t, r, o);
        }
        _.extend({
          cssHooks: {
            opacity: {
              get: function(n, e) {
                if (e) {
                  var t = Qn(n, 'opacity');
                  return '' === t ? '1' : t;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function(n, e, t, r) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
              var o,
                i,
                a,
                l = Y(e),
                s = ee.test(e),
                c = n.style;
              if (
                (s || (e = Zn(l)),
                (a = _.cssHooks[e] || _.cssHooks[l]),
                void 0 === t)
              )
                return a && 'get' in a && void 0 !== (o = a.get(n, !1, r))
                  ? o
                  : c[e];
              'string' === (i = typeof t) &&
                (o = on.exec(t)) &&
                o[1] &&
                ((t = fn(n, e, o)), (i = 'number')),
                null != t &&
                  t == t &&
                  ('number' !== i ||
                    s ||
                    (t += (o && o[3]) || (_.cssNumber[l] ? '' : 'px')),
                  b.clearCloneStyle ||
                    '' !== t ||
                    0 !== e.indexOf('background') ||
                    (c[e] = 'inherit'),
                  (a && 'set' in a && void 0 === (t = a.set(n, t, r))) ||
                    (s ? c.setProperty(e, t) : (c[e] = t)));
            }
          },
          css: function(n, e, t, r) {
            var o,
              i,
              a,
              l = Y(e);
            return (
              ee.test(e) || (e = Zn(l)),
              (a = _.cssHooks[e] || _.cssHooks[l]) &&
                'get' in a &&
                (o = a.get(n, !0, t)),
              void 0 === o && (o = Qn(n, e, r)),
              'normal' === o && e in re && (o = re[e]),
              '' === t || t
                ? ((i = parseFloat(o)), !0 === t || isFinite(i) ? i || 0 : o)
                : o
            );
          },
        }),
          _.each(['height', 'width'], function(n, e) {
            _.cssHooks[e] = {
              get: function(n, t, r) {
                if (t)
                  return !ne.test(_.css(n, 'display')) ||
                    (n.getClientRects().length &&
                      n.getBoundingClientRect().width)
                    ? ae(n, e, r)
                    : un(n, te, function() {
                        return ae(n, e, r);
                      });
              },
              set: function(n, t, r) {
                var o,
                  i = $n(n),
                  a = !b.scrollboxSize() && 'absolute' === i.position,
                  l = (a || r) && 'border-box' === _.css(n, 'boxSizing', !1, i),
                  s = r ? ie(n, e, r, l, i) : 0;
                return (
                  l &&
                    a &&
                    (s -= Math.ceil(
                      n['offset' + e[0].toUpperCase() + e.slice(1)] -
                        parseFloat(i[e]) -
                        ie(n, e, 'border', !1, i) -
                        0.5,
                    )),
                  s &&
                    (o = on.exec(t)) &&
                    'px' !== (o[3] || 'px') &&
                    ((n.style[e] = t), (t = _.css(n, e))),
                  oe(0, t, s)
                );
              },
            };
          }),
          (_.cssHooks.marginLeft = Yn(b.reliableMarginLeft, function(n, e) {
            if (e)
              return (
                (parseFloat(Qn(n, 'marginLeft')) ||
                  n.getBoundingClientRect().left -
                    un(n, { marginLeft: 0 }, function() {
                      return n.getBoundingClientRect().left;
                    })) + 'px'
              );
          })),
          _.each({ margin: '', padding: '', border: 'Width' }, function(n, e) {
            (_.cssHooks[n + e] = {
              expand: function(t) {
                for (
                  var r = 0,
                    o = {},
                    i = 'string' == typeof t ? t.split(' ') : [t];
                  r < 4;
                  r++
                )
                  o[n + an[r] + e] = i[r] || i[r - 2] || i[0];
                return o;
              },
            }),
              'margin' !== n && (_.cssHooks[n + e].set = oe);
          }),
          _.fn.extend({
            css: function(n, e) {
              return V(
                this,
                function(n, e, t) {
                  var r,
                    o,
                    i = {},
                    a = 0;
                  if (Array.isArray(e)) {
                    for (r = $n(n), o = e.length; a < o; a++)
                      i[e[a]] = _.css(n, e[a], !1, r);
                    return i;
                  }
                  return void 0 !== t ? _.style(n, e, t) : _.css(n, e);
                },
                n,
                e,
                arguments.length > 1,
              );
            },
          }),
          (_.Tween = le),
          (le.prototype = {
            constructor: le,
            init: function(n, e, t, r, o, i) {
              (this.elem = n),
                (this.prop = t),
                (this.easing = o || _.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = i || (_.cssNumber[t] ? '' : 'px'));
            },
            cur: function() {
              var n = le.propHooks[this.prop];
              return n && n.get ? n.get(this) : le.propHooks._default.get(this);
            },
            run: function(n) {
              var e,
                t = le.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e = _.easing[this.easing](
                      n,
                      this.options.duration * n,
                      0,
                      1,
                      this.options.duration,
                    ))
                  : (this.pos = e = n),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                t && t.set ? t.set(this) : le.propHooks._default.set(this),
                this
              );
            },
          }),
          (le.prototype.init.prototype = le.prototype),
          (le.propHooks = {
            _default: {
              get: function(n) {
                var e;
                return 1 !== n.elem.nodeType ||
                  (null != n.elem[n.prop] && null == n.elem.style[n.prop])
                  ? n.elem[n.prop]
                  : (e = _.css(n.elem, n.prop, '')) && 'auto' !== e
                  ? e
                  : 0;
              },
              set: function(n) {
                _.fx.step[n.prop]
                  ? _.fx.step[n.prop](n)
                  : 1 !== n.elem.nodeType ||
                    (!_.cssHooks[n.prop] && null == n.elem.style[Zn(n.prop)])
                  ? (n.elem[n.prop] = n.now)
                  : _.style(n.elem, n.prop, n.now + n.unit);
              },
            },
          }),
          (le.propHooks.scrollTop = le.propHooks.scrollLeft = {
            set: function(n) {
              n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
            },
          }),
          (_.easing = {
            linear: function(n) {
              return n;
            },
            swing: function(n) {
              return 0.5 - Math.cos(n * Math.PI) / 2;
            },
            _default: 'swing',
          }),
          (_.fx = le.prototype.init),
          (_.fx.step = {});
        var se,
          ce,
          de = /^(?:toggle|show|hide)$/,
          ue = /queueHooks$/;
        function fe() {
          ce &&
            (!1 === a.hidden && t.requestAnimationFrame
              ? t.requestAnimationFrame(fe)
              : t.setTimeout(fe, _.fx.interval),
            _.fx.tick());
        }
        function me() {
          return (
            t.setTimeout(function() {
              se = void 0;
            }),
            (se = Date.now())
          );
        }
        function pe(n, e) {
          var t,
            r = 0,
            o = { height: n };
          for (e = e ? 1 : 0; r < 4; r += 2 - e)
            o['margin' + (t = an[r])] = o['padding' + t] = n;
          return e && (o.opacity = o.width = n), o;
        }
        function ge(n, e, t) {
          for (
            var r,
              o = (he.tweeners[e] || []).concat(he.tweeners['*']),
              i = 0,
              a = o.length;
            i < a;
            i++
          )
            if ((r = o[i].call(t, e, n))) return r;
        }
        function he(n, e, t) {
          var r,
            o,
            i = 0,
            a = he.prefilters.length,
            l = _.Deferred().always(function() {
              delete s.elem;
            }),
            s = function() {
              if (o) return !1;
              for (
                var e = se || me(),
                  t = Math.max(0, c.startTime + c.duration - e),
                  r = 1 - (t / c.duration || 0),
                  i = 0,
                  a = c.tweens.length;
                i < a;
                i++
              )
                c.tweens[i].run(r);
              return (
                l.notifyWith(n, [c, r, t]),
                r < 1 && a
                  ? t
                  : (a || l.notifyWith(n, [c, 1, 0]), l.resolveWith(n, [c]), !1)
              );
            },
            c = l.promise({
              elem: n,
              props: _.extend({}, e),
              opts: _.extend(
                !0,
                { specialEasing: {}, easing: _.easing._default },
                t,
              ),
              originalProperties: e,
              originalOptions: t,
              startTime: se || me(),
              duration: t.duration,
              tweens: [],
              createTween: function(e, t) {
                var r = _.Tween(
                  n,
                  c.opts,
                  e,
                  t,
                  c.opts.specialEasing[e] || c.opts.easing,
                );
                return c.tweens.push(r), r;
              },
              stop: function(e) {
                var t = 0,
                  r = e ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; t < r; t++) c.tweens[t].run(1);
                return (
                  e
                    ? (l.notifyWith(n, [c, 1, 0]), l.resolveWith(n, [c, e]))
                    : l.rejectWith(n, [c, e]),
                  this
                );
              },
            }),
            d = c.props;
          for (
            !(function(n, e) {
              var t, r, o, i, a;
              for (t in n)
                if (
                  ((o = e[(r = Y(t))]),
                  (i = n[t]),
                  Array.isArray(i) && ((o = i[1]), (i = n[t] = i[0])),
                  t !== r && ((n[r] = i), delete n[t]),
                  (a = _.cssHooks[r]) && ('expand' in a))
                )
                  for (t in ((i = a.expand(i)), delete n[r], i))
                    (t in n) || ((n[t] = i[t]), (e[t] = o));
                else e[r] = o;
            })(d, c.opts.specialEasing);
            i < a;
            i++
          )
            if ((r = he.prefilters[i].call(c, n, d, c.opts)))
              return (
                v(r.stop) &&
                  (_._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            _.map(d, ge, c),
            v(c.opts.start) && c.opts.start.call(n, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            _.fx.timer(_.extend(s, { elem: n, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (_.Animation = _.extend(he, {
          tweeners: {
            '*': [
              function(n, e) {
                var t = this.createTween(n, e);
                return fn(t.elem, n, on.exec(e), t), t;
              },
            ],
          },
          tweener: function(n, e) {
            v(n) ? ((e = n), (n = ['*'])) : (n = n.match(R));
            for (var t, r = 0, o = n.length; r < o; r++)
              (t = n[r]),
                (he.tweeners[t] = he.tweeners[t] || []),
                he.tweeners[t].unshift(e);
          },
          prefilters: [
            function(n, e, t) {
              var r,
                o,
                i,
                a,
                l,
                s,
                c,
                d,
                u = 'width' in e || 'height' in e,
                f = this,
                m = {},
                p = n.style,
                g = n.nodeType && dn(n),
                h = J.get(n, 'fxshow');
              for (r in (t.queue ||
                (null == (a = _._queueHooks(n, 'fx')).unqueued &&
                  ((a.unqueued = 0),
                  (l = a.empty.fire),
                  (a.empty.fire = function() {
                    a.unqueued || l();
                  })),
                a.unqueued++,
                f.always(function() {
                  f.always(function() {
                    a.unqueued--, _.queue(n, 'fx').length || a.empty.fire();
                  });
                })),
              e))
                if (((o = e[r]), de.test(o))) {
                  if (
                    (delete e[r],
                    (i = i || 'toggle' === o),
                    o === (g ? 'hide' : 'show'))
                  ) {
                    if ('show' !== o || !h || void 0 === h[r]) continue;
                    g = !0;
                  }
                  m[r] = (h && h[r]) || _.style(n, r);
                }
              if ((s = !_.isEmptyObject(e)) || !_.isEmptyObject(m))
                for (r in (u &&
                  1 === n.nodeType &&
                  ((t.overflow = [p.overflow, p.overflowX, p.overflowY]),
                  null == (c = h && h.display) && (c = J.get(n, 'display')),
                  'none' === (d = _.css(n, 'display')) &&
                    (c
                      ? (d = c)
                      : (gn([n], !0),
                        (c = n.style.display || c),
                        (d = _.css(n, 'display')),
                        gn([n]))),
                  ('inline' === d || ('inline-block' === d && null != c)) &&
                    'none' === _.css(n, 'float') &&
                    (s ||
                      (f.done(function() {
                        p.display = c;
                      }),
                      null == c &&
                        ((d = p.display), (c = 'none' === d ? '' : d))),
                    (p.display = 'inline-block'))),
                t.overflow &&
                  ((p.overflow = 'hidden'),
                  f.always(function() {
                    (p.overflow = t.overflow[0]),
                      (p.overflowX = t.overflow[1]),
                      (p.overflowY = t.overflow[2]);
                  })),
                (s = !1),
                m))
                  s ||
                    (h
                      ? 'hidden' in h && (g = h.hidden)
                      : (h = J.access(n, 'fxshow', { display: c })),
                    i && (h.hidden = !g),
                    g && gn([n], !0),
                    f.done(function() {
                      for (r in (g || gn([n]), J.remove(n, 'fxshow'), m))
                        _.style(n, r, m[r]);
                    })),
                    (s = ge(g ? h[r] : 0, r, f)),
                    r in h ||
                      ((h[r] = s.start),
                      g && ((s.end = s.start), (s.start = 0)));
            },
          ],
          prefilter: function(n, e) {
            e ? he.prefilters.unshift(n) : he.prefilters.push(n);
          },
        })),
          (_.speed = function(n, e, t) {
            var r =
              n && 'object' == typeof n
                ? _.extend({}, n)
                : {
                    complete: t || (!t && e) || (v(n) && n),
                    duration: n,
                    easing: (t && e) || (e && !v(e) && e),
                  };
            return (
              _.fx.off
                ? (r.duration = 0)
                : 'number' != typeof r.duration &&
                  (r.duration in _.fx.speeds
                    ? (r.duration = _.fx.speeds[r.duration])
                    : (r.duration = _.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function() {
                v(r.old) && r.old.call(this),
                  r.queue && _.dequeue(this, r.queue);
              }),
              r
            );
          }),
          _.fn.extend({
            fadeTo: function(n, e, t, r) {
              return this.filter(dn)
                .css('opacity', 0)
                .show()
                .end()
                .animate({ opacity: e }, n, t, r);
            },
            animate: function(n, e, t, r) {
              var o = _.isEmptyObject(n),
                i = _.speed(e, t, r),
                a = function() {
                  var e = he(this, _.extend({}, n), i);
                  (o || J.get(this, 'finish')) && e.stop(!0);
                };
              return (
                (a.finish = a),
                o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
              );
            },
            stop: function(n, e, t) {
              var r = function(n) {
                var e = n.stop;
                delete n.stop, e(t);
              };
              return (
                'string' != typeof n && ((t = e), (e = n), (n = void 0)),
                e && !1 !== n && this.queue(n || 'fx', []),
                this.each(function() {
                  var e = !0,
                    o = null != n && n + 'queueHooks',
                    i = _.timers,
                    a = J.get(this);
                  if (o) a[o] && a[o].stop && r(a[o]);
                  else for (o in a) a[o] && a[o].stop && ue.test(o) && r(a[o]);
                  for (o = i.length; o--; )
                    i[o].elem !== this ||
                      (null != n && i[o].queue !== n) ||
                      (i[o].anim.stop(t), (e = !1), i.splice(o, 1));
                  (!e && t) || _.dequeue(this, n);
                })
              );
            },
            finish: function(n) {
              return (
                !1 !== n && (n = n || 'fx'),
                this.each(function() {
                  var e,
                    t = J.get(this),
                    r = t[n + 'queue'],
                    o = t[n + 'queueHooks'],
                    i = _.timers,
                    a = r ? r.length : 0;
                  for (
                    t.finish = !0,
                      _.queue(this, n, []),
                      o && o.stop && o.stop.call(this, !0),
                      e = i.length;
                    e--;

                  )
                    i[e].elem === this &&
                      i[e].queue === n &&
                      (i[e].anim.stop(!0), i.splice(e, 1));
                  for (e = 0; e < a; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                  delete t.finish;
                })
              );
            },
          }),
          _.each(['toggle', 'show', 'hide'], function(n, e) {
            var t = _.fn[e];
            _.fn[e] = function(n, r, o) {
              return null == n || 'boolean' == typeof n
                ? t.apply(this, arguments)
                : this.animate(pe(e, !0), n, r, o);
            };
          }),
          _.each(
            {
              slideDown: pe('show'),
              slideUp: pe('hide'),
              slideToggle: pe('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' },
            },
            function(n, e) {
              _.fn[n] = function(n, t, r) {
                return this.animate(e, n, t, r);
              };
            },
          ),
          (_.timers = []),
          (_.fx.tick = function() {
            var n,
              e = 0,
              t = _.timers;
            for (se = Date.now(); e < t.length; e++)
              (n = t[e])() || t[e] !== n || t.splice(e--, 1);
            t.length || _.fx.stop(), (se = void 0);
          }),
          (_.fx.timer = function(n) {
            _.timers.push(n), _.fx.start();
          }),
          (_.fx.interval = 13),
          (_.fx.start = function() {
            ce || ((ce = !0), fe());
          }),
          (_.fx.stop = function() {
            ce = null;
          }),
          (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (_.fn.delay = function(n, e) {
            return (
              (n = (_.fx && _.fx.speeds[n]) || n),
              (e = e || 'fx'),
              this.queue(e, function(e, r) {
                var o = t.setTimeout(e, n);
                r.stop = function() {
                  t.clearTimeout(o);
                };
              })
            );
          }),
          (function() {
            var n = a.createElement('input'),
              e = a
                .createElement('select')
                .appendChild(a.createElement('option'));
            (n.type = 'checkbox'),
              (b.checkOn = '' !== n.value),
              (b.optSelected = e.selected),
              ((n = a.createElement('input')).value = 't'),
              (n.type = 'radio'),
              (b.radioValue = 't' === n.value);
          })();
        var be,
          ve = _.expr.attrHandle;
        _.fn.extend({
          attr: function(n, e) {
            return V(this, _.attr, n, e, arguments.length > 1);
          },
          removeAttr: function(n) {
            return this.each(function() {
              _.removeAttr(this, n);
            });
          },
        }),
          _.extend({
            attr: function(n, e, t) {
              var r,
                o,
                i = n.nodeType;
              if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === n.getAttribute
                  ? _.prop(n, e, t)
                  : ((1 === i && _.isXMLDoc(n)) ||
                      (o =
                        _.attrHooks[e.toLowerCase()] ||
                        (_.expr.match.bool.test(e) ? be : void 0)),
                    void 0 !== t
                      ? null === t
                        ? void _.removeAttr(n, e)
                        : o && 'set' in o && void 0 !== (r = o.set(n, t, e))
                        ? r
                        : (n.setAttribute(e, t + ''), t)
                      : o && 'get' in o && null !== (r = o.get(n, e))
                      ? r
                      : null == (r = _.find.attr(n, e))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function(n, e) {
                  if (!b.radioValue && 'radio' === e && A(n, 'input')) {
                    var t = n.value;
                    return n.setAttribute('type', e), t && (n.value = t), e;
                  }
                },
              },
            },
            removeAttr: function(n, e) {
              var t,
                r = 0,
                o = e && e.match(R);
              if (o && 1 === n.nodeType)
                for (; (t = o[r++]); ) n.removeAttribute(t);
            },
          }),
          (be = {
            set: function(n, e, t) {
              return !1 === e ? _.removeAttr(n, t) : n.setAttribute(t, t), t;
            },
          }),
          _.each(_.expr.match.bool.source.match(/\w+/g), function(n, e) {
            var t = ve[e] || _.find.attr;
            ve[e] = function(n, e, r) {
              var o,
                i,
                a = e.toLowerCase();
              return (
                r ||
                  ((i = ve[a]),
                  (ve[a] = o),
                  (o = null != t(n, e, r) ? a : null),
                  (ve[a] = i)),
                o
              );
            };
          });
        var xe = /^(?:input|select|textarea|button)$/i,
          ye = /^(?:a|area)$/i;
        function we(n) {
          return (n.match(R) || []).join(' ');
        }
        function ke(n) {
          return (n.getAttribute && n.getAttribute('class')) || '';
        }
        function _e(n) {
          return Array.isArray(n)
            ? n
            : ('string' == typeof n && n.match(R)) || [];
        }
        _.fn.extend({
          prop: function(n, e) {
            return V(this, _.prop, n, e, arguments.length > 1);
          },
          removeProp: function(n) {
            return this.each(function() {
              delete this[_.propFix[n] || n];
            });
          },
        }),
          _.extend({
            prop: function(n, e, t) {
              var r,
                o,
                i = n.nodeType;
              if (3 !== i && 8 !== i && 2 !== i)
                return (
                  (1 === i && _.isXMLDoc(n)) ||
                    ((e = _.propFix[e] || e), (o = _.propHooks[e])),
                  void 0 !== t
                    ? o && 'set' in o && void 0 !== (r = o.set(n, t, e))
                      ? r
                      : (n[e] = t)
                    : o && 'get' in o && null !== (r = o.get(n, e))
                    ? r
                    : n[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function(n) {
                  var e = _.find.attr(n, 'tabindex');
                  return e
                    ? parseInt(e, 10)
                    : xe.test(n.nodeName) || (ye.test(n.nodeName) && n.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: 'htmlFor', class: 'className' },
          }),
          b.optSelected ||
            (_.propHooks.selected = {
              get: function(n) {
                var e = n.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
              },
              set: function(n) {
                var e = n.parentNode;
                e &&
                  (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
              },
            }),
          _.each(
            [
              'tabIndex',
              'readOnly',
              'maxLength',
              'cellSpacing',
              'cellPadding',
              'rowSpan',
              'colSpan',
              'useMap',
              'frameBorder',
              'contentEditable',
            ],
            function() {
              _.propFix[this.toLowerCase()] = this;
            },
          ),
          _.fn.extend({
            addClass: function(n) {
              var e,
                t,
                r,
                o,
                i,
                a,
                l,
                s = 0;
              if (v(n))
                return this.each(function(e) {
                  _(this).addClass(n.call(this, e, ke(this)));
                });
              if ((e = _e(n)).length)
                for (; (t = this[s++]); )
                  if (
                    ((o = ke(t)), (r = 1 === t.nodeType && ' ' + we(o) + ' '))
                  ) {
                    for (a = 0; (i = e[a++]); )
                      r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
                    o !== (l = we(r)) && t.setAttribute('class', l);
                  }
              return this;
            },
            removeClass: function(n) {
              var e,
                t,
                r,
                o,
                i,
                a,
                l,
                s = 0;
              if (v(n))
                return this.each(function(e) {
                  _(this).removeClass(n.call(this, e, ke(this)));
                });
              if (!arguments.length) return this.attr('class', '');
              if ((e = _e(n)).length)
                for (; (t = this[s++]); )
                  if (
                    ((o = ke(t)), (r = 1 === t.nodeType && ' ' + we(o) + ' '))
                  ) {
                    for (a = 0; (i = e[a++]); )
                      for (; r.indexOf(' ' + i + ' ') > -1; )
                        r = r.replace(' ' + i + ' ', ' ');
                    o !== (l = we(r)) && t.setAttribute('class', l);
                  }
              return this;
            },
            toggleClass: function(n, e) {
              var t = typeof n,
                r = 'string' === t || Array.isArray(n);
              return 'boolean' == typeof e && r
                ? e
                  ? this.addClass(n)
                  : this.removeClass(n)
                : v(n)
                ? this.each(function(t) {
                    _(this).toggleClass(n.call(this, t, ke(this), e), e);
                  })
                : this.each(function() {
                    var e, o, i, a;
                    if (r)
                      for (o = 0, i = _(this), a = _e(n); (e = a[o++]); )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else
                      (void 0 !== n && 'boolean' !== t) ||
                        ((e = ke(this)) && J.set(this, '__className__', e),
                        this.setAttribute &&
                          this.setAttribute(
                            'class',
                            e || !1 === n
                              ? ''
                              : J.get(this, '__className__') || '',
                          ));
                  });
            },
            hasClass: function(n) {
              var e,
                t,
                r = 0;
              for (e = ' ' + n + ' '; (t = this[r++]); )
                if (1 === t.nodeType && (' ' + we(ke(t)) + ' ').indexOf(e) > -1)
                  return !0;
              return !1;
            },
          });
        var Ee = /\r/g;
        _.fn.extend({
          val: function(n) {
            var e,
              t,
              r,
              o = this[0];
            return arguments.length
              ? ((r = v(n)),
                this.each(function(t) {
                  var o;
                  1 === this.nodeType &&
                    (null == (o = r ? n.call(this, t, _(this).val()) : n)
                      ? (o = '')
                      : 'number' == typeof o
                      ? (o += '')
                      : Array.isArray(o) &&
                        (o = _.map(o, function(n) {
                          return null == n ? '' : n + '';
                        })),
                    ((e =
                      _.valHooks[this.type] ||
                      _.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in e &&
                      void 0 !== e.set(this, o, 'value')) ||
                      (this.value = o));
                }))
              : o
              ? (e =
                  _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) &&
                'get' in e &&
                void 0 !== (t = e.get(o, 'value'))
                ? t
                : 'string' == typeof (t = o.value)
                ? t.replace(Ee, '')
                : null == t
                ? ''
                : t
              : void 0;
          },
        }),
          _.extend({
            valHooks: {
              option: {
                get: function(n) {
                  var e = _.find.attr(n, 'value');
                  return null != e ? e : we(_.text(n));
                },
              },
              select: {
                get: function(n) {
                  var e,
                    t,
                    r,
                    o = n.options,
                    i = n.selectedIndex,
                    a = 'select-one' === n.type,
                    l = a ? null : [],
                    s = a ? i + 1 : o.length;
                  for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                    if (
                      ((t = o[r]).selected || r === i) &&
                      !t.disabled &&
                      (!t.parentNode.disabled || !A(t.parentNode, 'optgroup'))
                    ) {
                      if (((e = _(t).val()), a)) return e;
                      l.push(e);
                    }
                  return l;
                },
                set: function(n, e) {
                  for (
                    var t, r, o = n.options, i = _.makeArray(e), a = o.length;
                    a--;

                  )
                    ((r = o[a]).selected =
                      _.inArray(_.valHooks.option.get(r), i) > -1) && (t = !0);
                  return t || (n.selectedIndex = -1), i;
                },
              },
            },
          }),
          _.each(['radio', 'checkbox'], function() {
            (_.valHooks[this] = {
              set: function(n, e) {
                if (Array.isArray(e))
                  return (n.checked = _.inArray(_(n).val(), e) > -1);
              },
            }),
              b.checkOn ||
                (_.valHooks[this].get = function(n) {
                  return null === n.getAttribute('value') ? 'on' : n.value;
                });
          }),
          (b.focusin = 'onfocusin' in t);
        var Te = /^(?:focusinfocus|focusoutblur)$/,
          Ce = function(n) {
            n.stopPropagation();
          };
        _.extend(_.event, {
          trigger: function(n, e, r, o) {
            var i,
              l,
              s,
              c,
              d,
              u,
              f,
              m,
              g = [r || a],
              h = p.call(n, 'type') ? n.type : n,
              b = p.call(n, 'namespace') ? n.namespace.split('.') : [];
            if (
              ((l = m = s = r = r || a),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !Te.test(h + _.event.triggered) &&
                (h.indexOf('.') > -1 &&
                  ((b = h.split('.')), (h = b.shift()), b.sort()),
                (d = h.indexOf(':') < 0 && 'on' + h),
                ((n = n[_.expando]
                  ? n
                  : new _.Event(h, 'object' == typeof n && n)).isTrigger = o
                  ? 2
                  : 3),
                (n.namespace = b.join('.')),
                (n.rnamespace = n.namespace
                  ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (n.result = void 0),
                n.target || (n.target = r),
                (e = null == e ? [n] : _.makeArray(e, [n])),
                (f = _.event.special[h] || {}),
                o || !f.trigger || !1 !== f.trigger.apply(r, e)))
            ) {
              if (!o && !f.noBubble && !x(r)) {
                for (
                  c = f.delegateType || h, Te.test(c + h) || (l = l.parentNode);
                  l;
                  l = l.parentNode
                )
                  g.push(l), (s = l);
                s === (r.ownerDocument || a) &&
                  g.push(s.defaultView || s.parentWindow || t);
              }
              for (i = 0; (l = g[i++]) && !n.isPropagationStopped(); )
                (m = l),
                  (n.type = i > 1 ? c : f.bindType || h),
                  (u =
                    (J.get(l, 'events') || {})[n.type] && J.get(l, 'handle')) &&
                    u.apply(l, e),
                  (u = d && l[d]) &&
                    u.apply &&
                    X(l) &&
                    ((n.result = u.apply(l, e)),
                    !1 === n.result && n.preventDefault());
              return (
                (n.type = h),
                o ||
                  n.isDefaultPrevented() ||
                  (f._default && !1 !== f._default.apply(g.pop(), e)) ||
                  !X(r) ||
                  (d &&
                    v(r[h]) &&
                    !x(r) &&
                    ((s = r[d]) && (r[d] = null),
                    (_.event.triggered = h),
                    n.isPropagationStopped() && m.addEventListener(h, Ce),
                    r[h](),
                    n.isPropagationStopped() && m.removeEventListener(h, Ce),
                    (_.event.triggered = void 0),
                    s && (r[d] = s))),
                n.result
              );
            }
          },
          simulate: function(n, e, t) {
            var r = _.extend(new _.Event(), t, { type: n, isSimulated: !0 });
            _.event.trigger(r, null, e);
          },
        }),
          _.fn.extend({
            trigger: function(n, e) {
              return this.each(function() {
                _.event.trigger(n, e, this);
              });
            },
            triggerHandler: function(n, e) {
              var t = this[0];
              if (t) return _.event.trigger(n, e, t, !0);
            },
          }),
          b.focusin ||
            _.each({ focus: 'focusin', blur: 'focusout' }, function(n, e) {
              var t = function(n) {
                _.event.simulate(e, n.target, _.event.fix(n));
              };
              _.event.special[e] = {
                setup: function() {
                  var r = this.ownerDocument || this,
                    o = J.access(r, e);
                  o || r.addEventListener(n, t, !0),
                    J.access(r, e, (o || 0) + 1);
                },
                teardown: function() {
                  var r = this.ownerDocument || this,
                    o = J.access(r, e) - 1;
                  o
                    ? J.access(r, e, o)
                    : (r.removeEventListener(n, t, !0), J.remove(r, e));
                },
              };
            });
        var Se = t.location,
          Ne = Date.now(),
          De = /\?/;
        _.parseXML = function(n) {
          var e;
          if (!n || 'string' != typeof n) return null;
          try {
            e = new t.DOMParser().parseFromString(n, 'text/xml');
          } catch (n) {
            e = void 0;
          }
          return (
            (e && !e.getElementsByTagName('parsererror').length) ||
              _.error('Invalid XML: ' + n),
            e
          );
        };
        var Ae = /\[\]$/,
          Ie = /\r?\n/g,
          Oe = /^(?:submit|button|image|reset|file)$/i,
          Pe = /^(?:input|select|textarea|keygen)/i;
        function je(n, e, t, r) {
          var o;
          if (Array.isArray(e))
            _.each(e, function(e, o) {
              t || Ae.test(n)
                ? r(n, o)
                : je(
                    n +
                      '[' +
                      ('object' == typeof o && null != o ? e : '') +
                      ']',
                    o,
                    t,
                    r,
                  );
            });
          else if (t || 'object' !== k(e)) r(n, e);
          else for (o in e) je(n + '[' + o + ']', e[o], t, r);
        }
        (_.param = function(n, e) {
          var t,
            r = [],
            o = function(n, e) {
              var t = v(e) ? e() : e;
              r[r.length] =
                encodeURIComponent(n) +
                '=' +
                encodeURIComponent(null == t ? '' : t);
            };
          if (null == n) return '';
          if (Array.isArray(n) || (n.jquery && !_.isPlainObject(n)))
            _.each(n, function() {
              o(this.name, this.value);
            });
          else for (t in n) je(t, n[t], e, o);
          return r.join('&');
        }),
          _.fn.extend({
            serialize: function() {
              return _.param(this.serializeArray());
            },
            serializeArray: function() {
              return this.map(function() {
                var n = _.prop(this, 'elements');
                return n ? _.makeArray(n) : this;
              })
                .filter(function() {
                  var n = this.type;
                  return (
                    this.name &&
                    !_(this).is(':disabled') &&
                    Pe.test(this.nodeName) &&
                    !Oe.test(n) &&
                    (this.checked || !hn.test(n))
                  );
                })
                .map(function(n, e) {
                  var t = _(this).val();
                  return null == t
                    ? null
                    : Array.isArray(t)
                    ? _.map(t, function(n) {
                        return { name: e.name, value: n.replace(Ie, '\r\n') };
                      })
                    : { name: e.name, value: t.replace(Ie, '\r\n') };
                })
                .get();
            },
          });
        var Le = /%20/g,
          ze = /#.*$/,
          Me = /([?&])_=[^&]*/,
          Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Fe = /^(?:GET|HEAD)$/,
          He = /^\/\//,
          Ue = {},
          We = {},
          qe = '*/'.concat('*'),
          Be = a.createElement('a');
        function Ve(n) {
          return function(e, t) {
            'string' != typeof e && ((t = e), (e = '*'));
            var r,
              o = 0,
              i = e.toLowerCase().match(R) || [];
            if (v(t))
              for (; (r = i[o++]); )
                '+' === r[0]
                  ? ((r = r.slice(1) || '*'), (n[r] = n[r] || []).unshift(t))
                  : (n[r] = n[r] || []).push(t);
          };
        }
        function $e(n, e, t, r) {
          var o = {},
            i = n === We;
          function a(l) {
            var s;
            return (
              (o[l] = !0),
              _.each(n[l] || [], function(n, l) {
                var c = l(e, t, r);
                return 'string' != typeof c || i || o[c]
                  ? i
                    ? !(s = c)
                    : void 0
                  : (e.dataTypes.unshift(c), a(c), !1);
              }),
              s
            );
          }
          return a(e.dataTypes[0]) || (!o['*'] && a('*'));
        }
        function Ke(n, e) {
          var t,
            r,
            o = _.ajaxSettings.flatOptions || {};
          for (t in e)
            void 0 !== e[t] && ((o[t] ? n : r || (r = {}))[t] = e[t]);
          return r && _.extend(!0, n, r), n;
        }
        (Be.href = Se.href),
          _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Se.href,
              type: 'GET',
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Se.protocol,
              ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': qe,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript',
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON',
              },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': _.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(n, e) {
              return e ? Ke(Ke(n, _.ajaxSettings), e) : Ke(_.ajaxSettings, n);
            },
            ajaxPrefilter: Ve(Ue),
            ajaxTransport: Ve(We),
            ajax: function(n, e) {
              'object' == typeof n && ((e = n), (n = void 0)), (e = e || {});
              var r,
                o,
                i,
                l,
                s,
                c,
                d,
                u,
                f,
                m,
                p = _.ajaxSetup({}, e),
                g = p.context || p,
                h = p.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                b = _.Deferred(),
                v = _.Callbacks('once memory'),
                x = p.statusCode || {},
                y = {},
                w = {},
                k = 'canceled',
                E = {
                  readyState: 0,
                  getResponseHeader: function(n) {
                    var e;
                    if (d) {
                      if (!l)
                        for (l = {}; (e = Re.exec(i)); )
                          l[e[1].toLowerCase() + ' '] = (
                            l[e[1].toLowerCase() + ' '] || []
                          ).concat(e[2]);
                      e = l[n.toLowerCase() + ' '];
                    }
                    return null == e ? null : e.join(', ');
                  },
                  getAllResponseHeaders: function() {
                    return d ? i : null;
                  },
                  setRequestHeader: function(n, e) {
                    return (
                      null == d &&
                        ((n = w[n.toLowerCase()] = w[n.toLowerCase()] || n),
                        (y[n] = e)),
                      this
                    );
                  },
                  overrideMimeType: function(n) {
                    return null == d && (p.mimeType = n), this;
                  },
                  statusCode: function(n) {
                    var e;
                    if (n)
                      if (d) E.always(n[E.status]);
                      else for (e in n) x[e] = [x[e], n[e]];
                    return this;
                  },
                  abort: function(n) {
                    var e = n || k;
                    return r && r.abort(e), T(0, e), this;
                  },
                };
              if (
                (b.promise(E),
                (p.url = ((n || p.url || Se.href) + '').replace(
                  He,
                  Se.protocol + '//',
                )),
                (p.type = e.method || e.type || p.method || p.type),
                (p.dataTypes = (p.dataType || '*').toLowerCase().match(R) || [
                  '',
                ]),
                null == p.crossDomain)
              ) {
                c = a.createElement('a');
                try {
                  (c.href = p.url),
                    (c.href = c.href),
                    (p.crossDomain =
                      Be.protocol + '//' + Be.host !=
                      c.protocol + '//' + c.host);
                } catch (n) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  'string' != typeof p.data &&
                  (p.data = _.param(p.data, p.traditional)),
                $e(Ue, p, e, E),
                d)
              )
                return E;
              for (f in ((u = _.event && p.global) &&
                0 == _.active++ &&
                _.event.trigger('ajaxStart'),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Fe.test(p.type)),
              (o = p.url.replace(ze, '')),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || '').indexOf(
                      'application/x-www-form-urlencoded',
                    ) &&
                  (p.data = p.data.replace(Le, '+'))
                : ((m = p.url.slice(o.length)),
                  p.data &&
                    (p.processData || 'string' == typeof p.data) &&
                    ((o += (De.test(o) ? '&' : '?') + p.data), delete p.data),
                  !1 === p.cache &&
                    ((o = o.replace(Me, '$1')),
                    (m = (De.test(o) ? '&' : '?') + '_=' + Ne++ + m)),
                  (p.url = o + m)),
              p.ifModified &&
                (_.lastModified[o] &&
                  E.setRequestHeader('If-Modified-Since', _.lastModified[o]),
                _.etag[o] && E.setRequestHeader('If-None-Match', _.etag[o])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                e.contentType) &&
                E.setRequestHeader('Content-Type', p.contentType),
              E.setRequestHeader(
                'Accept',
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ('*' !== p.dataTypes[0] ? ', ' + qe + '; q=0.01' : '')
                  : p.accepts['*'],
              ),
              p.headers))
                E.setRequestHeader(f, p.headers[f]);
              if (p.beforeSend && (!1 === p.beforeSend.call(g, E, p) || d))
                return E.abort();
              if (
                ((k = 'abort'),
                v.add(p.complete),
                E.done(p.success),
                E.fail(p.error),
                (r = $e(We, p, e, E)))
              ) {
                if (((E.readyState = 1), u && h.trigger('ajaxSend', [E, p]), d))
                  return E;
                p.async &&
                  p.timeout > 0 &&
                  (s = t.setTimeout(function() {
                    E.abort('timeout');
                  }, p.timeout));
                try {
                  (d = !1), r.send(y, T);
                } catch (n) {
                  if (d) throw n;
                  T(-1, n);
                }
              } else T(-1, 'No Transport');
              function T(n, e, a, l) {
                var c,
                  f,
                  m,
                  y,
                  w,
                  k = e;
                d ||
                  ((d = !0),
                  s && t.clearTimeout(s),
                  (r = void 0),
                  (i = l || ''),
                  (E.readyState = n > 0 ? 4 : 0),
                  (c = (n >= 200 && n < 300) || 304 === n),
                  a &&
                    (y = (function(n, e, t) {
                      for (
                        var r, o, i, a, l = n.contents, s = n.dataTypes;
                        '*' === s[0];

                      )
                        s.shift(),
                          void 0 === r &&
                            (r =
                              n.mimeType ||
                              e.getResponseHeader('Content-Type'));
                      if (r)
                        for (o in l)
                          if (l[o] && l[o].test(r)) {
                            s.unshift(o);
                            break;
                          }
                      if (s[0] in t) i = s[0];
                      else {
                        for (o in t) {
                          if (!s[0] || n.converters[o + ' ' + s[0]]) {
                            i = o;
                            break;
                          }
                          a || (a = o);
                        }
                        i = i || a;
                      }
                      if (i) return i !== s[0] && s.unshift(i), t[i];
                    })(p, E, a)),
                  (y = (function(n, e, t, r) {
                    var o,
                      i,
                      a,
                      l,
                      s,
                      c = {},
                      d = n.dataTypes.slice();
                    if (d[1])
                      for (a in n.converters)
                        c[a.toLowerCase()] = n.converters[a];
                    for (i = d.shift(); i; )
                      if (
                        (n.responseFields[i] && (t[n.responseFields[i]] = e),
                        !s &&
                          r &&
                          n.dataFilter &&
                          (e = n.dataFilter(e, n.dataType)),
                        (s = i),
                        (i = d.shift()))
                      )
                        if ('*' === i) i = s;
                        else if ('*' !== s && s !== i) {
                          if (!(a = c[s + ' ' + i] || c['* ' + i]))
                            for (o in c)
                              if (
                                (l = o.split(' '))[1] === i &&
                                (a = c[s + ' ' + l[0]] || c['* ' + l[0]])
                              ) {
                                !0 === a
                                  ? (a = c[o])
                                  : !0 !== c[o] &&
                                    ((i = l[0]), d.unshift(l[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && n.throws) e = a(e);
                            else
                              try {
                                e = a(e);
                              } catch (n) {
                                return {
                                  state: 'parsererror',
                                  error: a
                                    ? n
                                    : 'No conversion from ' + s + ' to ' + i,
                                };
                              }
                        }
                    return { state: 'success', data: e };
                  })(p, y, E, c)),
                  c
                    ? (p.ifModified &&
                        ((w = E.getResponseHeader('Last-Modified')) &&
                          (_.lastModified[o] = w),
                        (w = E.getResponseHeader('etag')) && (_.etag[o] = w)),
                      204 === n || 'HEAD' === p.type
                        ? (k = 'nocontent')
                        : 304 === n
                        ? (k = 'notmodified')
                        : ((k = y.state), (f = y.data), (c = !(m = y.error))))
                    : ((m = k), (!n && k) || ((k = 'error'), n < 0 && (n = 0))),
                  (E.status = n),
                  (E.statusText = (e || k) + ''),
                  c ? b.resolveWith(g, [f, k, E]) : b.rejectWith(g, [E, k, m]),
                  E.statusCode(x),
                  (x = void 0),
                  u &&
                    h.trigger(c ? 'ajaxSuccess' : 'ajaxError', [
                      E,
                      p,
                      c ? f : m,
                    ]),
                  v.fireWith(g, [E, k]),
                  u &&
                    (h.trigger('ajaxComplete', [E, p]),
                    --_.active || _.event.trigger('ajaxStop')));
              }
              return E;
            },
            getJSON: function(n, e, t) {
              return _.get(n, e, t, 'json');
            },
            getScript: function(n, e) {
              return _.get(n, void 0, e, 'script');
            },
          }),
          _.each(['get', 'post'], function(n, e) {
            _[e] = function(n, t, r, o) {
              return (
                v(t) && ((o = o || r), (r = t), (t = void 0)),
                _.ajax(
                  _.extend(
                    { url: n, type: e, dataType: o, data: t, success: r },
                    _.isPlainObject(n) && n,
                  ),
                )
              );
            };
          }),
          (_._evalUrl = function(n, e) {
            return _.ajax({
              url: n,
              type: 'GET',
              dataType: 'script',
              cache: !0,
              async: !1,
              global: !1,
              converters: { 'text script': function() {} },
              dataFilter: function(n) {
                _.globalEval(n, e);
              },
            });
          }),
          _.fn.extend({
            wrapAll: function(n) {
              var e;
              return (
                this[0] &&
                  (v(n) && (n = n.call(this[0])),
                  (e = _(n, this[0].ownerDocument)
                    .eq(0)
                    .clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function() {
                      for (var n = this; n.firstElementChild; )
                        n = n.firstElementChild;
                      return n;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function(n) {
              return v(n)
                ? this.each(function(e) {
                    _(this).wrapInner(n.call(this, e));
                  })
                : this.each(function() {
                    var e = _(this),
                      t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n);
                  });
            },
            wrap: function(n) {
              var e = v(n);
              return this.each(function(t) {
                _(this).wrapAll(e ? n.call(this, t) : n);
              });
            },
            unwrap: function(n) {
              return (
                this.parent(n)
                  .not('body')
                  .each(function() {
                    _(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (_.expr.pseudos.hidden = function(n) {
            return !_.expr.pseudos.visible(n);
          }),
          (_.expr.pseudos.visible = function(n) {
            return !!(
              n.offsetWidth ||
              n.offsetHeight ||
              n.getClientRects().length
            );
          }),
          (_.ajaxSettings.xhr = function() {
            try {
              return new t.XMLHttpRequest();
            } catch (n) {}
          });
        var Qe = { 0: 200, 1223: 204 },
          Ye = _.ajaxSettings.xhr();
        (b.cors = !!Ye && 'withCredentials' in Ye),
          (b.ajax = Ye = !!Ye),
          _.ajaxTransport(function(n) {
            var e, r;
            if (b.cors || (Ye && !n.crossDomain))
              return {
                send: function(o, i) {
                  var a,
                    l = n.xhr();
                  if (
                    (l.open(n.type, n.url, n.async, n.username, n.password),
                    n.xhrFields)
                  )
                    for (a in n.xhrFields) l[a] = n.xhrFields[a];
                  for (a in (n.mimeType &&
                    l.overrideMimeType &&
                    l.overrideMimeType(n.mimeType),
                  n.crossDomain ||
                    o['X-Requested-With'] ||
                    (o['X-Requested-With'] = 'XMLHttpRequest'),
                  o))
                    l.setRequestHeader(a, o[a]);
                  (e = function(n) {
                    return function() {
                      e &&
                        ((e = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                        'abort' === n
                          ? l.abort()
                          : 'error' === n
                          ? 'number' != typeof l.status
                            ? i(0, 'error')
                            : i(l.status, l.statusText)
                          : i(
                              Qe[l.status] || l.status,
                              l.statusText,
                              'text' !== (l.responseType || 'text') ||
                                'string' != typeof l.responseText
                                ? { binary: l.response }
                                : { text: l.responseText },
                              l.getAllResponseHeaders(),
                            ));
                    };
                  }),
                    (l.onload = e()),
                    (r = l.onerror = l.ontimeout = e('error')),
                    void 0 !== l.onabort
                      ? (l.onabort = r)
                      : (l.onreadystatechange = function() {
                          4 === l.readyState &&
                            t.setTimeout(function() {
                              e && r();
                            });
                        }),
                    (e = e('abort'));
                  try {
                    l.send((n.hasContent && n.data) || null);
                  } catch (n) {
                    if (e) throw n;
                  }
                },
                abort: function() {
                  e && e();
                },
              };
          }),
          _.ajaxPrefilter(function(n) {
            n.crossDomain && (n.contents.script = !1);
          }),
          _.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              'text script': function(n) {
                return _.globalEval(n), n;
              },
            },
          }),
          _.ajaxPrefilter('script', function(n) {
            void 0 === n.cache && (n.cache = !1),
              n.crossDomain && (n.type = 'GET');
          }),
          _.ajaxTransport('script', function(n) {
            var e, t;
            if (n.crossDomain || n.scriptAttrs)
              return {
                send: function(r, o) {
                  (e = _('<script>')
                    .attr(n.scriptAttrs || {})
                    .prop({ charset: n.scriptCharset, src: n.url })
                    .on(
                      'load error',
                      (t = function(n) {
                        e.remove(),
                          (t = null),
                          n && o('error' === n.type ? 404 : 200, n.type);
                      }),
                    )),
                    a.head.appendChild(e[0]);
                },
                abort: function() {
                  t && t();
                },
              };
          });
        var Xe,
          Ge = [],
          Je = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function() {
            var n = Ge.pop() || _.expando + '_' + Ne++;
            return (this[n] = !0), n;
          },
        }),
          _.ajaxPrefilter('json jsonp', function(n, e, r) {
            var o,
              i,
              a,
              l =
                !1 !== n.jsonp &&
                (Je.test(n.url)
                  ? 'url'
                  : 'string' == typeof n.data &&
                    0 ===
                      (n.contentType || '').indexOf(
                        'application/x-www-form-urlencoded',
                      ) &&
                    Je.test(n.data) &&
                    'data');
            if (l || 'jsonp' === n.dataTypes[0])
              return (
                (o = n.jsonpCallback = v(n.jsonpCallback)
                  ? n.jsonpCallback()
                  : n.jsonpCallback),
                l
                  ? (n[l] = n[l].replace(Je, '$1' + o))
                  : !1 !== n.jsonp &&
                    (n.url += (De.test(n.url) ? '&' : '?') + n.jsonp + '=' + o),
                (n.converters['script json'] = function() {
                  return a || _.error(o + ' was not called'), a[0];
                }),
                (n.dataTypes[0] = 'json'),
                (i = t[o]),
                (t[o] = function() {
                  a = arguments;
                }),
                r.always(function() {
                  void 0 === i ? _(t).removeProp(o) : (t[o] = i),
                    n[o] && ((n.jsonpCallback = e.jsonpCallback), Ge.push(o)),
                    a && v(i) && i(a[0]),
                    (a = i = void 0);
                }),
                'script'
              );
          }),
          (b.createHTMLDocument =
            (((Xe = a.implementation.createHTMLDocument('').body).innerHTML =
              '<form></form><form></form>'),
            2 === Xe.childNodes.length)),
          (_.parseHTML = function(n, e, t) {
            return 'string' != typeof n
              ? []
              : ('boolean' == typeof e && ((t = e), (e = !1)),
                e ||
                  (b.createHTMLDocument
                    ? (((r = (e = a.implementation.createHTMLDocument(
                        '',
                      )).createElement('base')).href = a.location.href),
                      e.head.appendChild(r))
                    : (e = a)),
                (i = !t && []),
                (o = I.exec(n))
                  ? [e.createElement(o[1])]
                  : ((o = Tn([n], e, i)),
                    i && i.length && _(i).remove(),
                    _.merge([], o.childNodes)));
            var r, o, i;
          }),
          (_.fn.load = function(n, e, t) {
            var r,
              o,
              i,
              a = this,
              l = n.indexOf(' ');
            return (
              l > -1 && ((r = we(n.slice(l))), (n = n.slice(0, l))),
              v(e)
                ? ((t = e), (e = void 0))
                : e && 'object' == typeof e && (o = 'POST'),
              a.length > 0 &&
                _.ajax({ url: n, type: o || 'GET', dataType: 'html', data: e })
                  .done(function(n) {
                    (i = arguments),
                      a.html(
                        r
                          ? _('<div>')
                              .append(_.parseHTML(n))
                              .find(r)
                          : n,
                      );
                  })
                  .always(
                    t &&
                      function(n, e) {
                        a.each(function() {
                          t.apply(this, i || [n.responseText, e, n]);
                        });
                      },
                  ),
              this
            );
          }),
          _.each(
            [
              'ajaxStart',
              'ajaxStop',
              'ajaxComplete',
              'ajaxError',
              'ajaxSuccess',
              'ajaxSend',
            ],
            function(n, e) {
              _.fn[e] = function(n) {
                return this.on(e, n);
              };
            },
          ),
          (_.expr.pseudos.animated = function(n) {
            return _.grep(_.timers, function(e) {
              return n === e.elem;
            }).length;
          }),
          (_.offset = {
            setOffset: function(n, e, t) {
              var r,
                o,
                i,
                a,
                l,
                s,
                c = _.css(n, 'position'),
                d = _(n),
                u = {};
              'static' === c && (n.style.position = 'relative'),
                (l = d.offset()),
                (i = _.css(n, 'top')),
                (s = _.css(n, 'left')),
                ('absolute' === c || 'fixed' === c) &&
                (i + s).indexOf('auto') > -1
                  ? ((a = (r = d.position()).top), (o = r.left))
                  : ((a = parseFloat(i) || 0), (o = parseFloat(s) || 0)),
                v(e) && (e = e.call(n, t, _.extend({}, l))),
                null != e.top && (u.top = e.top - l.top + a),
                null != e.left && (u.left = e.left - l.left + o),
                'using' in e ? e.using.call(n, u) : d.css(u);
            },
          }),
          _.fn.extend({
            offset: function(n) {
              if (arguments.length)
                return void 0 === n
                  ? this
                  : this.each(function(e) {
                      _.offset.setOffset(this, n, e);
                    });
              var e,
                t,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((e = r.getBoundingClientRect()),
                    (t = r.ownerDocument.defaultView),
                    {
                      top: e.top + t.pageYOffset,
                      left: e.left + t.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function() {
              if (this[0]) {
                var n,
                  e,
                  t,
                  r = this[0],
                  o = { top: 0, left: 0 };
                if ('fixed' === _.css(r, 'position'))
                  e = r.getBoundingClientRect();
                else {
                  for (
                    e = this.offset(),
                      t = r.ownerDocument,
                      n = r.offsetParent || t.documentElement;
                    n &&
                    (n === t.body || n === t.documentElement) &&
                    'static' === _.css(n, 'position');

                  )
                    n = n.parentNode;
                  n &&
                    n !== r &&
                    1 === n.nodeType &&
                    (((o = _(n).offset()).top += _.css(
                      n,
                      'borderTopWidth',
                      !0,
                    )),
                    (o.left += _.css(n, 'borderLeftWidth', !0)));
                }
                return {
                  top: e.top - o.top - _.css(r, 'marginTop', !0),
                  left: e.left - o.left - _.css(r, 'marginLeft', !0),
                };
              }
            },
            offsetParent: function() {
              return this.map(function() {
                for (
                  var n = this.offsetParent;
                  n && 'static' === _.css(n, 'position');

                )
                  n = n.offsetParent;
                return n || ln;
              });
            },
          }),
          _.each(
            { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
            function(n, e) {
              var t = 'pageYOffset' === e;
              _.fn[n] = function(r) {
                return V(
                  this,
                  function(n, r, o) {
                    var i;
                    if (
                      (x(n) ? (i = n) : 9 === n.nodeType && (i = n.defaultView),
                      void 0 === o)
                    )
                      return i ? i[e] : n[r];
                    i
                      ? i.scrollTo(t ? i.pageXOffset : o, t ? o : i.pageYOffset)
                      : (n[r] = o);
                  },
                  n,
                  r,
                  arguments.length,
                );
              };
            },
          ),
          _.each(['top', 'left'], function(n, e) {
            _.cssHooks[e] = Yn(b.pixelPosition, function(n, t) {
              if (t)
                return (
                  (t = Qn(n, e)), Vn.test(t) ? _(n).position()[e] + 'px' : t
                );
            });
          }),
          _.each({ Height: 'height', Width: 'width' }, function(n, e) {
            _.each(
              { padding: 'inner' + n, content: e, '': 'outer' + n },
              function(t, r) {
                _.fn[r] = function(o, i) {
                  var a = arguments.length && (t || 'boolean' != typeof o),
                    l = t || (!0 === o || !0 === i ? 'margin' : 'border');
                  return V(
                    this,
                    function(e, t, o) {
                      var i;
                      return x(e)
                        ? 0 === r.indexOf('outer')
                          ? e['inner' + n]
                          : e.document.documentElement['client' + n]
                        : 9 === e.nodeType
                        ? ((i = e.documentElement),
                          Math.max(
                            e.body['scroll' + n],
                            i['scroll' + n],
                            e.body['offset' + n],
                            i['offset' + n],
                            i['client' + n],
                          ))
                        : void 0 === o
                        ? _.css(e, t, l)
                        : _.style(e, t, o, l);
                    },
                    e,
                    a ? o : void 0,
                    a,
                  );
                };
              },
            );
          }),
          _.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
              ' ',
            ),
            function(n, e) {
              _.fn[e] = function(n, t) {
                return arguments.length > 0
                  ? this.on(e, null, n, t)
                  : this.trigger(e);
              };
            },
          ),
          _.fn.extend({
            hover: function(n, e) {
              return this.mouseenter(n).mouseleave(e || n);
            },
          }),
          _.fn.extend({
            bind: function(n, e, t) {
              return this.on(n, null, e, t);
            },
            unbind: function(n, e) {
              return this.off(n, null, e);
            },
            delegate: function(n, e, t, r) {
              return this.on(e, n, t, r);
            },
            undelegate: function(n, e, t) {
              return 1 === arguments.length
                ? this.off(n, '**')
                : this.off(e, n || '**', t);
            },
          }),
          (_.proxy = function(n, e) {
            var t, r, o;
            if (('string' == typeof e && ((t = n[e]), (e = n), (n = t)), v(n)))
              return (
                (r = s.call(arguments, 2)),
                ((o = function() {
                  return n.apply(e || this, r.concat(s.call(arguments)));
                }).guid = n.guid = n.guid || _.guid++),
                o
              );
          }),
          (_.holdReady = function(n) {
            n ? _.readyWait++ : _.ready(!0);
          }),
          (_.isArray = Array.isArray),
          (_.parseJSON = JSON.parse),
          (_.nodeName = A),
          (_.isFunction = v),
          (_.isWindow = x),
          (_.camelCase = Y),
          (_.type = k),
          (_.now = Date.now),
          (_.isNumeric = function(n) {
            var e = _.type(n);
            return (
              ('number' === e || 'string' === e) && !isNaN(n - parseFloat(n))
            );
          }),
          void 0 ===
            (r = function() {
              return _;
            }.apply(e, [])) || (n.exports = r);
        var Ze = t.jQuery,
          nt = t.$;
        return (
          (_.noConflict = function(n) {
            return (
              t.$ === _ && (t.$ = nt), n && t.jQuery === _ && (t.jQuery = Ze), _
            );
          }),
          o || (t.jQuery = t.$ = _),
          _
        );
      });
    },
  ],
]);
