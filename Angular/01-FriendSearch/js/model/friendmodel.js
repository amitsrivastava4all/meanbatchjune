/*
Logic
*/
app.factory("friendfactory",function(){
    var object = {
        getFriends:function(){
            //var friendData = ['ram','shyam','mike','tom'];
            var friendData = [
                {name:'Ram',phone:2222,address:'Delhi',pic:'http://127.0.0.1:64334/01-FriendSearch/images/one.jpg'},
                {name:'Shyam',phone:3333,address:'Mumbai',pic:'../images/two.jpg'},
                {name:'Mike',phone:4444,address:'Delhi',pic:'../images/one.jpg'},
                {name:'Tom',phone:5555,address:'Mumbai',pic:'../images/two.jpg'}
            ]
            return friendData;
        }
    }
    return object;
});