
document.addEventListener('DOMContentLoaded', function() {

	let posts = [
	{
		image: './photos/1.png',
		title: 'Chúng Tôi Đang Du Học Thế Nào ?',
		infor: 'September 8, 2019',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo',
	},
	{
		image: './photos/2.png',
		title: 'Chúng Tôi Đang Du Học Thế Nào ?',
		infor: 'September 8, 2019',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo'
	},
	{
		image: './photos/3.png',
		title: 'Chúng Tôi Đang Du Học Thế Nào ?',
		infor: 'September 8, 2019',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmot'
	},
	{
		image: './photos/4.png',
		title: 'Chúng Tôi Đang Du Học Thế Nào ?',
		infor: 'September 8, 2019',
		summary: 'teLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoxt'
	},
];


	let dever = {
		name: "Vo Thanh Quan",
		age: "24",
		status: 'Single Dad',
	}
	let contentWrapper = document.getElementById('content-wrapper');

	function eachPost(posts){
		
		let postHTML = posts.map( (item) => {
			return '<div class="container containers"> <div class="content"> <img class="post-img" src="'+ item.image +'"/>'
					+ '<div class="post">'
					+ '<h2 class="post-title">' + item.title + '</h2>'
					+ '<div class="post-infor">' + item.infor + '</div>' 
					+ '<div class="post-summary-wrapper"> <p class="post-summary">' + item.summary + '</p>'
					+ '<a href="#">Read more...</a>' + '</div></div></div></div>'   
		})

		contentWrapper.innerHTML = postHTML.join("")
	}

	let devInfor = document.getElementById('dever-infor');
	function devRender(dever){
		let devHTML = '';
		 	devHTML += '<li>Name: '+ dever.name + '</li>';
			devHTML += '<li>Age: '+ dever.age + '</li>';
			devHTML += '<li>Status: '+ dever.status + '</li>';

			devInfor.innerHTML = devHTML;
			
		}
		
	let btnMenu = document.getElementById('btn');

	btnMenu.addEventListener('click', function(){
		let nav = document.getElementById('navigation');
		let menubtn = document.getElementById('btn'); 
		let navStatus = nav.style.opacity;
	
		if( navStatus === '1'){
			btn.style.backgroundColor = 'transparent';
			nav.style.opacity = '0';
			nav.style.transform = 'translateY(-50px)';
		}
		else{
			btn.style.backgroundColor = '#f0f0f0';
			nav.style.opacity = '1';
			nav.style.transform = 'translateY(0px)';
		}
		
		
	})



	
	

	
	/*function render(idget, idset){
		let items = document.getElementById(idget).innerHTML;
		let idContent = document.getElementById(idset)
		return idContent.innerHTML = items;
		
	}

	if(devContent && HTML){
		render(HTML, devContent)
	}*/

	
	devRender(dever);
	eachPost(posts);




});
