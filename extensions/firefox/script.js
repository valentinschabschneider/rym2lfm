var parentNode = Array.prototype.slice
	.call(document.querySelectorAll("a[href='buy/']:not(.buy_button)"))
	.filter(function (e, i) {
		return e.offsetParent !== null;
	})[0].parentNode;

var linksNode = parentNode.querySelector("div.ui_media_links");

if (linksNode === null) {
	//media links do not exist
	var clearNode = document.createElement("div");
	clearNode.setAttribute("style", "clear:both;");

	linksNode = document.createElement("div");
	linksNode.setAttribute("class", "ui_media_links promoted");
	linksNode.setAttribute(
		"style",
		"width:500px; margin:0 auto; margin-top:1em; max-width:350px;"
	);
	linksNode.appendChild(clearNode);

	parentNode.insertBefore(linksNode, parentNode.getElementsByTagName("div")[2]);
}

var lastfmlink = document.createElement("a");
lastfmlink.setAttribute("target", "_blank");
lastfmlink.setAttribute("rel", "noopener nofollow");
lastfmlink.setAttribute("title", "last.fm");
lastfmlink.setAttribute("class", "ui_media_link_btn");
lastfmlink.setAttribute(
	"style",
	"background-color:#d51007; background-image: url('https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png'); background-size: 1.4em; background-position: center;background-repeat: no-repeat;"
);

var artistbytitlenode = document.querySelector("div.album_title"); //title
var artistbytitle =
	artistbytitlenode.textContent || artistbytitlenode.innerText;
var title = artistbytitle.substr(0, artistbytitle.indexOf("By")).trim();
var artist = artistbytitle.substr(artistbytitle.indexOf("By") + 2).trim();
var link =
	"https://www.last.fm/music/" +
	(
		artist +
		"/" +
		(window.location.href.includes("/single/") ? "_/" : "") +
		title +
		"/"
	).replace(/ /g, "+");
lastfmlink.setAttribute("href", link);

linksNode.prepend(lastfmlink);
