(window["webpackJsonpquicksearch-locations"]=window["webpackJsonpquicksearch-locations"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(0),o=i.n(a),n=i(2),r=i.n(n),c=(i(13),i(3)),s=i(4),l=i(6),u=i(5),d=i(7),p=function(e){e.id;var t=e.url,i=e.city,a=e.country,n=e.description;return o.a.createElement("div",{className:"cardBody",style:{backgroundImage:"url(".concat(t,")")}},o.a.createElement("div",null,o.a.createElement("h2",null,i,", ",a),o.a.createElement("p",null,n)))},h=function(e){var t=e.places.map(function(e,t){return o.a.createElement(p,{key:e.id,url:e.url,id:e.id,city:e.city,country:e.country,description:e.description})});return o.a.createElement("div",{className:"cardDisplay"},t)},m=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"searchHeader"},o.a.createElement("h1",null,"Search Places to Visit"),o.a.createElement("input",{type:"search",placeholder:"Search",onChange:t}))},y=[{id:1,city:"S\xe3o Paulo",country:"Brazil",description:"For people who enjoy the hustle.",url:"https://creativosbr.com/wp-content/uploads/2018/03/creativosbr-baiana-em-s%C3%A3o-paulo-opini%C3%A3o.jpg"},{id:2,city:"Dublin",country:"Ireland",description:"A great place for a pint and a chat.",url:"http://www.intercambiodireto.com/blog/wp-content/uploads/2018/02/stock-photo-temple-bar-district-in-dublin-at-night-100904953-.jpg"},{id:3,city:"Shaolin",country:"China",description:"To meditate and get fit.",url:"https://upload.wikimedia.org/wikipedia/commons/1/13/Gyachung_Kang_at_dusk.jpg"},{id:4,city:"Napoli",country:"Italy",description:"Come for the pizza, stay for the wine.",url:"http://www.amromacarservice.com/wp-content/uploads/2018/05/tour-napoli1.jpg"},{id:5,city:"Aspen",country:"United States",description:"Hot chocolate and snowy mountains.",url:"https://ogimg.infoglobo.com.br/in/23485925-e26-0fe/FT1086A/652/x81216460_BVAspen.jpg,qposicaoFoto1.pagespeed.ic.zL2Q3G-eLk.jpg"},{id:6,city:"Honolulu",country:"United States",description:"Whatever you want at any time",url:"https://blog.p2pmilhas.com.br/wp-content/uploads/2017/12/p2p-honolulu.jpg"},{id:7,city:"Alaska",country:"United States",description:"It's really cold here. Not bad, though",url:"https://img.travelawaits.com/filter:centercrop/quill/3/f/d/1/b/4/3fd1b4caf5f54c414d6ca883d03cc952f2f00c91.jpg?w=800&h=800"},{id:8,city:"Outback",country:"Australia",description:"Hunt some roos with us, mate.",url:"https://media.gq.com/photos/5b991a2b3ef4233944b15bae/16:9/w_1280%2Cc_limit/gq-travel-guide-australia-outback-northern-territory.jpg"},{id:9,city:"Delhi",country:"India",description:"You never tasted food quite like this.",url:"https://www.bizevdeyokuz.com/wp-content/uploads/things-to-do-in-delhi-and-ideal-itinerary-india.jpg"},{id:10,city:"Moscow",country:"Russia",description:"In soviet Russia we travel to you.",url:"https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg"},{id:11,city:"Paris",country:"France",description:"Bread, wine, cheese... I mean...",url:"https://ondeficaremsuaviagem.com/wp-content/uploads/2017/03/onde-ficar-paris.jpg"},{id:12,city:"Dubai",country:"Emirates",description:"A utopia on the desert.",url:"https://abrilviagemeturismo.files.wordpress.com/2018/06/dubai.jpg?quality=70&strip=info&resize=680,453"}],w=(i(14),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).searchText=function(t){return e.setState({searchfield:t.target.value})},e.state={places:y,searchfield:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.places.filter(function(t){return t.city.toLowerCase().includes(e.state.searchfield.toLowerCase())||t.country.toLowerCase().includes(e.state.searchfield.toLowerCase())});return o.a.createElement("div",null,o.a.createElement(m,{searchChange:this.searchText}),o.a.createElement(h,{places:t}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,i){e.exports=i(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d47ee376.chunk.js.map