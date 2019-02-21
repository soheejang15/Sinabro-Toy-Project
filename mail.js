let mailData = [
    {
        from : "David James",
        date : "Jan 5, 2018",
        text : "asdfsadfadfsdf",
        tag : "sales",
    },{
        from : "David James",
        date : "Jan 5, 2018",
        text : "asdfsadfadfsdf",
        tag : "sales",
    },
]

// 사이드바 클릭 이벤트 리스너 등록
let clickSidebarIndex = document.querySelector(".sidebar-list");
clickSidebarIndex.addEventListener('click',function(e){
    console.log(document.querySelectorAll(".selected-list-index")[0]);
    document.getElementById(e.target.id).className = "selected-list-index";
});

// 메세지 리스트 클릭 이벤트 리스너 등록
let clickMessageList = document.querySelector("#message-list");
clickMessageList.addEventListener('click',function(e){
    console.log(e.target);
    document.getElementById(e.target.id).className = "selected-messeage-content";
});