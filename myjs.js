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
	

devRender(dever);
eachPost(posts);