(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{13:function(t,e,n){"use strict";var a=n(0),o=n.n(a),r=n(4),i=n.n(r);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f=function(t){function e(t){var n,a,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,o=l(e).call(this,t),(n=!o||"object"!==u(o)&&"function"!=typeof o?h(a):o).changeTitle=function(t){n.setState({title:t.target.value})},n.changeAuthor=function(t){n.setState({author:t.target.value})},n.changeIsbn=function(t){n.setState({isbn:t.target.value})},n.changeLanguage=function(t){n.setState({language:t.target.value})},n.changeFormat=function(t){n.setState({format:t.target.format})},n.state={title:t.title,author:t.author,isbn:t.isbn,language:t.language,format:t.format,uri:t.uri,showEdit:!1,id:t.id},n.changeAuthor=n.changeAuthor.bind(h(h(n))),n.changeTitle=n.changeTitle.bind(h(h(n))),n.changeIsbn=n.changeIsbn.bind(h(h(n))),n.changeLanguage=n.changeLanguage.bind(h(h(n))),n.changeFormat=n.changeFormat.bind(h(h(n))),n.onSubmit=n.onSubmit.bind(h(h(n))),n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,o.a.Component),n=e,(a=[{key:"render",value:function(){return o.a.createElement("div",{style:{display:this.props.showEdit?"block":"none"}},o.a.createElement("h1",null,"Edit Books"),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{value:this.state.title,name:"title",required:!0,placeholder:"title",onChange:this.changeTitle}),o.a.createElement("input",{value:this.state.author,required:!0,name:"author",placeholder:"E-mail",onChange:this.changeAuthor}),o.a.createElement("input",{value:this.state.isbn,name:"isbn",required:!0,placeholder:"isbn",onChange:this.changeIsbn}),o.a.createElement("input",{value:this.state.language,name:"language",onChange:this.changeLanguage,defaultlanguage:this.state.language}),o.a.createElement("input",{value:this.state.format,name:"format",onChange:this.changeFormat,defaultformat:ŧhis.state.format}),o.a.createElement("input",{type:"submit",value:"Send"})))}},{key:"onSubmit",value:function(t){t.preventDefault();var e={title:this.state.title,author:this.state.author,isbn:this.state.isbn,language:this.state.language,format:this.state.format},n=this.state.uri,a=this.state.id;i.a.put("".concat(n,"/books/").concat(a),e,{crossdomaine:!0}).then(function(t){return console.log(t.data)}),this.setState({title:props.title,author:props.author,isbn:props.isbn,language:props.isCoach,format:props.format})}}])&&s(n.prototype,a),r&&s(n,r),e}(),p=n(29);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return v});var v=function(t){function e(t){var n,a,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,(n=!(o=g(e).call(this,t))||"object"!==b(o)&&"function"!=typeof o?d(a):o).state={show:!1,showReviews:!1,uri:t.uri,showEdit:!1,id:t.id,title:t.title,author:t.author,isbn:t.isbn,language:t.language,format:t.format},n.handleClickEdit=n.handleClickEdit.bind(d(d(n))),n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,o.a.Component),n=e,(a=[{key:"handleClickEdit",value:function(){!1===this.state.showEdit?this.setState({showEdit:!0}):this.setState({showEdit:!1})}},{key:"handleClickReviews",value:function(){!1===this.state.showReviews?this.setState({showReviews:!0}):this.setState({showReviews:!1})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:this.props.show?"block":"none"}},o.a.createElement("input",{type:"button",value:"Edit",onClick:this.handleClickEdit}),o.a.createElement(f,{uri:this.state.uri,id:this.state.id,title:this.state.title,author:this.state.author,isbn:this.state.isbn,language:this.state.language,format:this.state.format,showEdit:this.state.showEdit}),o.a.createElement("input",{type:"button",value:"Reviews",onClick:this.handleClickReviews}),o.a.createElement(p.a,{uri:this.state.uri,id:this.state.id,showReviews:this.state.showReviews}),o.a.createElement("div",null,this.props.children,"Numéro ISBN: ",this.props.isbn,",",o.a.createElement("br",null),"Langue:",this.props.language,",",o.a.createElement("br",null),"Format: ",this.props.format,",",o.a.createElement("br",null))))}}])&&m(n.prototype,a),r&&m(n,r),e}()},17:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var a=n(0),o=n.n(a),r=n(4),i=n.n(r);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f=function(t){function e(t){var n,a,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,(n=!(o=l(e).call(this,t))||"object"!==u(o)&&"function"!=typeof o?h(a):o).state={Titre:"",Auteur:"",ISBN:"",Langue:"",Format:""},n.handleChange=n.handleChange.bind(h(h(n))),n.handleSubmit=n.handleSubmit.bind(h(h(n))),n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,o.a.Component),n=e,(a=[{key:"handleChange",value:function(t){var e,n,a,o=t.target;this.setState((e={},n=o.name,a=o.value,n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e={Titre:this.state.Titre,Auteur:this.state.Auteur,ISBN:this.state.ISBN,Langue:this.state.Langue,Format:this.state.Format};i.a.post("",{NewBook:e}).then(function(t){console.log(t),console.log(t.data)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Ajoute un livre"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"Titre",type:"text",value:this.state.Titre,onChange:this.handleChange}),o.a.createElement("input",{name:"Auteur",type:"text",value:this.state.Auteur,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("input",{name:"ISBN",type:"text",value:this.state.ISBN,onChange:this.handleChange}),o.a.createElement("input",{name:"Langue",type:"text",value:this.state.Langue,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("input",{name:"Format",type:"text",value:this.state.Format,onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Ajouter"})))}}])&&s(n.prototype,a),r&&s(n,r),e}()}}]);