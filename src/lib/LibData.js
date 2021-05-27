const posts = [
	{
		title: 'title-1',
		slug: 'title-1',
		html: `
      <h3>content-1</h3>
      <p>this is posts content data</p>
		`
	},
	{
		title: 'title-2',
		slug: 'title-2',
		html: `
      <h3>content-2</h3>
      <p>this is posts content data</p>
		`    
	},
	{
		title: 'title-3',
		slug: 'title-3',
		html: `
      <h3>content-2</h3>
      <p>this is posts content data</p>
		`    
	},

];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
