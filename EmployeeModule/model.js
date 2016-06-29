app.factory("empfactory",function(){
    var empOperations={
        commentList:[],
        addNewComment:function(name,desc,rating){
            var newComment  = new Comment(name,desc,rating);
            this.commentList.push(newComment);
            
        }
    }
    return empOperations;
});


// This is Function constructor
function Comment(name,desc,rating){
this.name = name;
this.desc = desc;
this.rating = rating;    
}



