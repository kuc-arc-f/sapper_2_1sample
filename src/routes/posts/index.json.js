import posts from '../../lib/LibData.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
//console.log(contents)
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}