(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{29:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(0),r=n.n(o),a=n(4),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,s(t).call(this,e))).state={uri:e.uri,showReviews:!1,reviews:[],id:e.id,rate:"",comment:""},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.state.uri,n=this.state.id;i.a.get("".concat(t,"/reviews/book_").concat(n),{crossdomaine:!0}).then(function(t){e.setState({reviews:t.data})})}},{key:"render",value:function(){return 0===this.state.reviews.length?r.a.createElement(r.a.Fragment,null,"Pending..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Reviews"),r.a.createElement("ul",null,this.state.reviews.map(function(e){return r.a.createElement("li",{key:e._id},e.stars," ",e.commentary)})))}}])&&u(n.prototype,o),a&&u(n,a),t}()},42:function(e,t,n){"use strict";var o=n(0),r=n(18);t.a=function(){return o.createElement("div",null,o.createElement("nav",null,o.createElement(r.a,{to:"/home",activeClassName:"selected"},"Home"),o.createElement(r.a,{to:"/yourborrowings",activeClassName:"selected"},"Your Borrowings"),o.createElement(r.a,{to:"/admin",activeClassName:"selected"},"Admin")))}},44:function(e,t,n){"use strict";var o=n(0),r=n(13),a=n(16),i=n(4),c=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=s(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?p(o):r).state={books:[],show:"",uri:"http://localhost/api"},n.handleclick=n.handleclick.bind(p(p(n))),n}var n,i,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(i=[{key:"handleclick",value:function(){!1===this.state.show?this.setState({show:!0}):this.setState({show:!1})}},{key:"componentDidMount",value:function(){var e=this,t=this.state.uri;c.a.get("".concat(t,"/books"),{crossdomain:!0}).then(function(t){console.log(t.data),e.setState({books:t.data}),console.log(e.state.books),console.log("hello")})}},{key:"render",value:function(){var e=this;return 0===this.state.books.length?o.createElement(o.Fragment,null,"Pending..."):o.createElement(o.Fragment,null,o.createElement("h2",null,"Book's List"),o.createElement(a.a,{to:"/home/add"},o.createElement("button",null,"Add a book to database")),o.createElement("ul",null,this.state.books.map(function(t){return o.createElement("li",{key:t._id},t.title," ",t.author,o.createElement("input",{type:"button",onClick:e.handleclick,value:"Details"}),o.createElement(r.a,{id:t._id,show:e.state.show,title:t.title,author:t.author,isbn:t.isbn,language:t.language,format:t.format,uri:e.state.uri}))})))}}])&&l(n.prototype,i),m&&l(n,m),t}(),y=n(75),b=n(40);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,w(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){return o.createElement("div",null,"Hi i'm LOGIN component")}}])&&d(n.prototype,r),a&&d(n,a),t}(),O=n(32),k=n(35),_=n(36),S=n(17),j=n(37);t.a=function(){return o.createElement("div",null,o.createElement(y.a,null,o.createElement(b.a,{exact:!0,path:"/login",component:g}),o.createElement(b.a,{exact:!0,path:"/home",component:m}),o.createElement(b.a,{exact:!0,path:"/home/books/:id",component:r.a}),o.createElement(b.a,{exact:!0,path:"/home/add",component:S.a}),o.createElement(b.a,{exact:!0,path:"/home/edit",component:S.a}),o.createElement(b.a,{path:"/wishlist",component:k.a}),o.createElement(b.a,{path:"/yourborrowings",component:_.a}),o.createElement(b.a,{path:"/admin",component:O.a}),o.createElement(b.a,{path:"/home/book/history",component:j.a})))}}}]);