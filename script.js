request = new XMLHttpRequest();
request.open("GET", 'https://picsum.photos/v2/list');
request.onload = function()
{
    let images = JSON.parse(request.responseText);
    for (let imagenumber = 0; imagenumber < 30; imagenumber++)
	{
		images[imagenumber].download_url;
        images[imagenumber].author;
        images[imagenumber].width;
        images[imagenumber].height;
        aside = document.querySelector('aside');
        thumb = document.createElement('div');
        thumb.classList.add('thumb');
        thumbOverlay = document.createElement('div');
        thumbOverlay.classList.add('overlay');
		
        let thumbImg = new Image(); 
        thumbImg.src = images[imagenumber].download_url;
        aside.appendChild(thumb);
        thumb.appendChild(thumbOverlay);
        thumb.appendChild(thumbImg);

        thumb.addEventListener('click', function()
		{
            let bigImg = document.getElementById("big-img");
            bigImg.src = images[imagenumber].download_url;
            document.querySelector(".description").innerHTML =
			'author: ' + images[imagenumber].author 
			+ '<br> width: ' + images[imagenumber].width	+ ' px'
			+ '<br> height:' + images[imagenumber].height	+ ' px';
        });
    }
}
request.send();