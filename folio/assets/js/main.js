
// resizeImg()
function resizeImg(imgId,width,height)
{
var objStr,obj;
if(document.images) 
	{
	objStr = 'document.' + imgId;
	obj = eval(objStr);
	obj.width = width;
	obj.height = height;
	}
}


// WM_preloadImages()
// Source: Webmonkey Code Library
// (http://www.hotwired.com/webmonkey/javascript/code_library/)
function WM_preloadImages() 
{
if (document.images) 
	{
	if (typeof(document.WM) == 'undefined')
		{
		document.WM = new Object();
    	}
	document.WM.loadedImages = new Array();
	var argLength = WM_preloadImages.arguments.length;
	for(arg=0;arg<argLength;arg++) 
		{
		document.WM.loadedImages[arg] = new Image();
		document.WM.loadedImages[arg].src = WM_preloadImages.arguments[arg];
		}
	}
}

// WM_imageSwap()
// Source: Webmonkey Code Library
// (http://www.hotwired.com/webmonkey/javascript/code_library/)
function WM_imageSwap(daImage, daSrc)
{
var objStr,obj;
if(document.images) 
	{
	if (typeof(daImage) == 'string') 
		{
		objStr = 'document.' + daImage;
		obj = eval(objStr);
		obj.src = daSrc;
		} 
	else if ((typeof(daImage) == 'object') && daImage && daImage.src) 
		{
		daImage.src = daSrc;
		}
	}
}

// blocking()
// Source: www.xs4all.nl/~ppk
var supported = (document.getElementById || document.all);

if (supported)
{
	document.write("<style type='text/css'>");
	document.write(".infor { display:none; }");
	document.write("</style>");

	var max = 6;
	var shown = new Array();
	for (var i=1;i<=max;i++)
	{
		shown[i+1] = false;
	}

}

function blocking(i)
{
	if (!supported)
	{
		alert('This link does not work in your browser.');
		return;
	}
	shown[i] = (shown[i]) ? false : true;
	current = (shown[i]) ? 'block' : 'none';
	if (document.getElementById)
	{
		document.getElementById('nr'+i).style.display = current;
	}
	else if (document.all)
	{
		document.all['number'+i].style.display = current;
	}
}