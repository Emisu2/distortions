(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),s=a.n(o),l=(a(16),a(1)),r=a(2),c=a(6),h=a(4),p=a(5),m=a(3),d=a(9),u=a.n(d),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).state={isFlipped:!1},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState(function(e){return{isFlipped:!e.isFlipped}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"dib"},i.a.createElement(u.a,{isFlipped:this.state.isFlipped,flipDirection:"horizontal"},i.a.createElement("div",{key:"front",onClick:this.handleClick,className:"tc bg-white  br3 pa3 ma2 grow bw2 shadow-5 mw5 w5 h5"},i.a.createElement("div",null,i.a.createElement("img",{src:this.props.username,alt:"distortion"}),i.a.createElement("p",{style:{fontWeight:"bold"}},this.props.name))),i.a.createElement("div",{key:"back",onClick:this.handleClick,className:"tc bg-white  br3 pa3 ma2 grow bw2 shadow-5 mw5 w5 h5"},i.a.createElement("div",null,i.a.createElement("h1",null,this.props.name),i.a.createElement("p",null,this.props.email)))))}}]),t}(n.Component),b=function(e){var t=e.distortions;return i.a.createElement("div",null,t.map(function(e,a){return i.a.createElement(g,{key:a,username:t[a].username,name:t[a].name,email:t[a].email})}))},f=function(e){e.searchfield;var t=e.searchChange;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"pa3 ba b--purple bg-lightest-purple",type:"search",placeholder:"search distortions",onChange:t}))},w=function(e){return i.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},y=(a(17),[{id:1,name:"Filter",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/filtering-150x150.jpg",email:'A person engaging in filter (or "mental filtering") takes the negative details and magnifies those details while filtering out all positive aspects of a situation.'},{id:2,name:"Polarize",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/polarizedthinking-150x150.jpg",email:"In polarized thinking, things are either \u201cblack-or-white\u201d \u2014 all or nothing. We have to be perfect or we\u2019re a complete and abject failure \u2014 there is no middle ground."},{id:3,name:"Generalize",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/overgeneralization-150x150.jpg",email:"In this cognitive distortion, a person comes to a general conclusion based on a single incident or a single piece of evidence. Known as overgeneralization."},{id:4,name:"Mind Read",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/jumpingconclusions-150x150.jpg",email:"Without individuals saying so, a person who jumps to conclusions knows what another person is feeling and thinking \u2014 and exactly why they act the way they do."},{id:5,name:"Catastrophize",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/catastrophizing-150x150.jpg",email:"When a person engages in catastrophizing, they expect disaster to strike, no matter what. This is also referred to as magnifying, or imagining the worst."},{id:6,name:"Personalize",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/personalization-150x150.jpg",email:"Personalization is a distortion where a person believes that everything others do or say is some kind of direct, personal reaction to them. They also compare themselves to others."},{id:7,name:"Control",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/controlfallacy-150x150.jpg",email:"This distortion involves two different but related beliefs about being in complete control of every situation in a person\u2019s life: Externally (helpless), and Internally (blaming ourselves)."},{id:8,name:"Fairness",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/fallacyfairness-150x150.jpg",email:"In the fallacy of fairness, a person feels resentful because they think that they know what is fair, but other people won\u2019t agree with them.  \u201cLife isn\u2019t always fair.\u201d "},{id:9,name:"Blame",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/blaming-150x150.jpg",email:"When a person engages in blaming, they hold other people responsible for their emotional pain. They may also take the opposite track and instead blame themselves."},{id:10,name:"Shoulds",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/shoulds-150x150.jpg",email:"Should statements appear as a rules about how every person should behave. For example, \u201cI really should exercise. I shouldn\u2019t be so lazy.\u201d The emotional consequence is guilt."},{id:11,name:"Reason",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/emotionalreasoning-150x150.jpg",email:"The distortion of emotional reasoning can be summed up by the statement, \u201cIf I feel that way, it must be true.\u201d Whatever a person is feeling is believed to be true automatically."},{id:12,name:"Change",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/fallacychange-150x150.jpg",email:"In the fallacy of change, a person expects that other people will change to suit them if they just pressure or cajole them enough. A person needs to change people."},{id:13,name:"Mislabel",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/globallabeling-150x150.jpg",email:"When In global labeling (also referred to as mislabeling), a person generalizes one or two qualities into a negative global judgment about themselves or another person."},{id:14,name:"Be Right",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/alwaysright-150x150.jpg",email:"When a person engages in this distortion, they are continually putting other people on trial to prove that their own opinions and actions are the absolute correct ones."},{id:15,name:"Reward",username:"https://g6.psychcentral.com/lib/wp-content/uploads/2016/05/heavensfallacy-150x150.jpg",email:"This is the false belief that a person\u2019s sacrifice and self-denial will eventually pay off, as if some global force is keeping score.  You will feel bitter when the reward doesn\u2019t come."}]),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={distortions:[],searchfield:""},e}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({distortions:y})}},{key:"render",value:function(){var e=this.state,t=e.distortions,a=e.searchfield,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?i.a.createElement("div",{className:"tc"},i.a.createElement("h1",{className:"f2"},"COGNITIVE DISTORTIONS"),i.a.createElement("h2",null,"Made with love by Emily as a supplement to ",i.a.createElement("a",{href:"https://psychcentral.com/lib/15-common-cognitive-distortions/"},"PsychCentral article by John M. Grohol, Psy.D.")),i.a.createElement(f,{searchChange:this.onSearchChange}),i.a.createElement(w,null,i.a.createElement(b,{distortions:n}))):i.a.createElement("h2",{class:"tc"},"LOADING")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4081418b.chunk.js.map