/* TailTarget Tag Manager TT-9964-3/CT-23 */
var r7Origin =  document.location.origin;
if(r7Origin != 'http://jampawebjornalguiaonline.blogspot.com.br/' && r7Origin != 'http://jampawebjornal.blogspot.com.br/p/politica-de-uso-e-privacidade.html' && r7Origin != 'https://jampawebjornal.blogspot.com.br/p/estatuto-editorial.html' && r7Origin != 'http://jampawebjornal.blogspot.com.br/' && r7Origin != 'http://jampawebjornal.blogspot.com.br/p/colunistas.html' ) {
	(function(i) {
		var ts = document.createElement('script');
		ts.type = 'text/javascript';
		ts.async = true;
		ts.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tags.t.tailtarget.com/t3m.js?i=' + i;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ts, s);
	})('TT-9964-3/CT-23');
}
/* End TailTarget Tag Manager */

(function() {

	this.data = {
		name:'div',
		attr:{
			id:'r7-partner-bar',
			style:'display:block;'
		},
		value:null,
		child:[
			{
				name:'div',
				attr:{id:'r7-partner-bar-workspace'},
				value:null,
				child:[
					{
						name:'div',
						attr:{id:'r7-partner-bar-logo'},
						value:null,
						child:[
							{
								name:'a',
								value:null,
								attr:{href:'http://jampawebjornalguiaonline.blogspot.com.br/', target:'_blank', rel:'nofollow'},
								value:'Guia Comercial'
							}
						]
					},
					{
						name:'ul',
						attr:null,
						value:null,
						child:[
							{
								name:'li',
								attr:{id:'r7-item-uso e privacidade'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/p/politica-de-uso-e-privacidade.html', target:'_blank', rel:'nofollow'},
										value:'Uso e Privacidade'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-estatuto editorial'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'https://jampawebjornal.blogspot.com.br/p/estatuto-editorial.html', target:'_blank', rel:'nofollow'},
										value:'Estatuto Editorial'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-noticias'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/', target:'_blank', rel:'nofollow'},
										value:'Not&iacute;cias'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-contato'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/p/blog-page_6.html', target:'_blank', rel:'nofollow'},
										value:'Contato'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-mapa do site'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/p/mapa-do-site_42.html', target:'_blank', rel:'nofollow'},
										value:'Mapa do Site'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-videos'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/p/expediente.html', target:'_blank', rel:'nofollow'},
										value:'Expediente'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-quem somos'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'https://jampawebjornal.blogspot.com.br/p/quem-somos.html', target:'_blank', rel:'nofollow'},
										value:'Quem Somos?'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-voluntariado'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/p/voluntario.html', target:'_blank', rel:'nofollow'},
										value:'Voluntariado'
									}
								]
							},
							{
								name:'li',
								attr:{id:'r7-item-colunistas'},
								value:null,
								child:[
									{
										name:'a',
										attr:{href:'http://jampawebjornal.blogspot.com.br/p/colunistas.html', target:'_blank', rel:'nofollow'},
										value:'Colunistas'
									}
								]
							}
						]
					}
				]
			},{
				name:'img',
				attr:{src:'https://parceiro.log.r7.com/barra.gif', style:'border:0px; display: none'},
				value:null	
			}
		]
	};

	this.mkHtml = function(data) {
			var object = this.create(data.name, data.attr);
			var child;

			if(data.attr) {
				for(var i in data.attr) {
					if(i != 'className') {
						object.setAttribute(i, data.attr[i]);
					} else {
						object.className = data.attr[i];
					}
				}
			}

			if(data.value) {
				object.innerHTML = data.value;
			}

			if(data.child) {
				for(i = 0; i < data.child.length; i++) {
					object.appendChild(this.mkHtml(data.child[i]));
				}
			}

			return object;
	};

	this.create = function() {
		var name = arguments[0] ? arguments[0] : false;
		var attr = arguments[1] ? arguments[1] : false;
		var enew = false;

		if(name) {
			enew = document.createElement(name);
		}

		if(attr) {
			for(var i in attr) {
				if(i != 'class') {
					enew.setAttribute(i, attr[i]);
				} else {
					enew.className = attr[i];
				}
			}
		}

		return enew;
	};

	this.init = function() {
		var bar = this.mkHtml(this.data);
		var src, loc;
		//var src = document.getElementById('r7-partner-bar');
		src = document.getElementsByTagName('script');
		for(var i = 0, j = src.length; i < j; i++) {
			loc = src[i].src.split('/');
			loc = loc[loc.length - 1];
			if(loc == 'bariso-ssl.js') {
				src = src[i];
				break;
			}
		}
		
		//var css = this.mkHtml(this.cssa);

		document.write('<style>#r7-partner-bar {text-align:left!important;display:block!important;font-family:"Trebuchet MS","Arial",sans-serif;display:block!important;background:transparent url("https://scs.r7.com/js/api/themes/default/media/bkg.bar.2.png") left bottom repeat-x;height:38px;clear:both;overflow:hidden;} #r7-partner-bar * {font-family:"Trebuchet MS","Arial",sans-serif;margin:0px;padding:0px!important;outline:0px!important;text-shadow:0px 0px 0px #000!important;text-decoration:none!important;} #r7-partner-bar-workspace {overflow:hidden;width:980px;height:38px;position:relative; left:50%;margin:0px 0px 0px -490px;} #r7-partner-bar-logo {display:block;float:left;top:0px;background:transparent!important;margin:0px 14px 0px 0px!important;} #r7-partner-bar-logo A {display:block; width:39px;height:38px;background:transparent url("https://scs.r7.com/js/api/themes/default/media/logo_barra.gif") center 1px no-repeat!important;text-indent:-99999px;color:transparent!important;overflow:hidden;} #r7-partner-bar UL {float:left;height:38px;} #r7-partner-bar UL.share {float:right!important;height:38px!important;} #r7-partner-bar LI {display:inline;float:left;background:url("https://scs.r7.com/js/api/themes/default/media/pipe.bar.2.png") left top no-repeat;} #r7-item-noticias {background-image:none!important;} #r7-item-r7home {background-image:none!important;} #r7-partner-bar LI A {font-size:16px;display:block;padding:0px 12px!important;line-height:35px;font-weight:bold;} #r7-partner-bar LI A:hover {text-decoration:underline!important;} #r7-item-noticias A {color:#000;} #r7-item-r7tv A, #r7-item-r7home A {color:#0073C5;} #r7-item-entretenimento A {color:#C9168E;} #r7-item-esportes A {color:#246D26;} #r7-item-rede-record A {color:#2e50cb;} #r7-item-shopping A {color:#FD6B08;} #r7-item-videos A {color:#007DC5;} #r7-item-r7play A {color:#4576BA;} #r7-item-servicos A {color:#6B7982;} #r7-partner-bar FORM {padding:9px 0px 0px 0px!important; margin:0px!important; float:left!impotant;} #r7-partner-bar FIELDSET {border:0px;} #r7-partner-bar BUTTON {background:url("https://scs.r7.com/js/api/themes/default/media/btn.search.1.png") left top no-repeat; display:block; width:76px; height:26px; border:0px;text-indent:-99999px; overflow:hidden;} #r7-partner-bar INPUT {display:block; width:143px; height:27px; float:left; margin:0px 7px 0px 0px; padding:0px!important; line-height:38px!important;} #r7-partner-bar:after {display:block;clear:both;content:".";height:0px;visibility:hidden;}</style>');
		
		
		/*

		var adr = 'https://raw.githubusercontent.com/Jampa-Web-Jornal/Arquivos/master/barra.css';

		var css = this.create('link', {rel:'stylesheet', type:'text/css', media:'screen'});
		if(css.readyState) {
			css.onreadystatechange = function() {
				if(css.readyState == 'loaded' || css.readyState == 'complete') {
					css.onreadystatechange = null;
				}
			}
		}
		css.href = adr;
		
		src.parentNode.insertBefore(cssa, src);

		*/
		
		src.parentNode.insertBefore(bar, src);
		src.parentNode.removeChild(src);
	};

	this.init();
})();
