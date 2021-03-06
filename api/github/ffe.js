var gh = require('./authe.js'),
	router = require('express').Router(),
	marked = require('marked');

var pageSize = 20;

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

router.get('/ask/:id', function (req, res, next) {    
    var pageNum = parseInt(req.params.id);

    if (pageNum < 0) {
        res.sendStatus(404)
    } else {
        getIssueList((err, arr)=>{
        	res.json(arr);
        })
    }
})

router.get('/comments/:id', function (req, res, next) {    
    var issueNum = parseInt(req.params.id);

    if (issueNum < 0) {
        res.sendStatus(404)
    } else {
        getIssueComments(issueNum, (err, arr)=>{
        	res.json(arr);
        })
    }
})



/**
 * return issue list
 */
function getIssueList (cb=()=>{}) {
	return gh.IssueObj.listIssues({
		//labels: 'post'
	}, (err, issues)=>{
		let arr = [];
        issues = issues || [];
		issues.forEach((issue)=>{
			arr.push({
				title: issue.title,
				url: issue.url,
				commentUrl: issue.comments_url,
				body: marked(issue.body),
				user: issue.user,
				id: issue.id,
                number: issue.number
			});
		})

		cb(err, arr);
	})
}

/**
 * get issue comment
 */
function getIssueComments (id, cb=()=>{}) {
	gh.IssueObj.listIssueComments(id, (err, comments)=>{
        if (err) {
            cb(err, []);
        } else {
            let arr = [];
            comments.forEach((comment)=>{
                arr.push({
                    user: comment.user,
                    body: marked(comment.body),
                    createdAt: comment.created_at,
                    updatedAt: comment.updated_at
                })
            })
            cb(err, arr);
        }
	})
}

exports.router = router
exports.getIssueList = getIssueList