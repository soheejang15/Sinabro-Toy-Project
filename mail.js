const mailData = [
  {
    from: "David James",
    date: "2018-01-05",
    title: "qwerqwer",
    text: "asdfsadfadfsdf",
    tag: "sales",
    img: "red",
  }, {
    from: "1452",
    date: "2018-01-08",
    title: "gsdbjdksfk",
    text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
    tag: "",
    img: "blue",
  },
  {
    from: "urjnffjemd",
    date: "2018-02-26",
    title: 'sdjfsdf',
    text: "Dfsfds sdfs sadfadfsdf",
    tag: "",
    img: "green",
  }, {
    from: "David James",
    date: "2018-03-02",
    title: "sjflksjdflk sdfsf",
    text: "asdfsadfadfsdf",
    tag: "marketing",
    img: "red",
  },
  {
    from: "uejdf James",
    date: "2018-04-09",
    title: "qwerqwer",
    text: "asdfsadfadfsdf",
    tag: "sales",
    img: "black",
  }, {
    from: "olkfnjlffkf",
    date: "2018-05-14",
    title: "gsdbjdksfk",
    text: "adkeikdiekdj djfhskjdfskf akdhfdsafls",
    tag: "",
    img: "yellow",
  },
  {
    from: "dikcj",
    date: "2018-06-20",
    title: 'sdjfsdf',
    text: "Dfsfds sdfs sadfadfsdf",
    tag: "frontend",
    img: "green",
  }, {
    from: "David James",
    date: "2018-03-02",
    title: "sjflksjdflk sdfsf",
    text: "asdfsadfadfsdf",
    tag: "design",
    img: "red",
  },
]

// node 추가 및 속성 지정 함수
function domControl(containerName, tag, id, className, parrentNode, text, backgroundColor) {
  containerName = document.createElement(tag);
  if(id) containerName.setAttribute("id", id);
  if(className) containerName.setAttribute("class", className);
  if(text) containerName.textContent = text;
  if(backgroundColor) {
    containerName.style.backgroundColor = backgroundColor;
  }
  parrentNode.appendChild(containerName);
}

let listIndexFlag = {
  'home': true,
  'customers': false,
  'indox': false,
  'settings': false,
};

// 사이드 바 클릭 이벤트 리스너 등록
let sidebarFlag = false;
let currentContent = 'index-inbox';
let theContent = document.getElementById('content');
const listIndex = document.querySelectorAll(".list-index");

for(let i = 0; i<listIndex.length; i++){
  listIndex[i].addEventListener('click', function(e){
    e.stopPropagation();
    if (sidebarFlag) document.querySelector(".selected-list-index").className = "list-index";
    document.getElementById(e.currentTarget.id).className = "selected-list-index";
  
    sidebarFlag = true;

    currentContent = e.currentTarget.id;
    let theContentContainer = document.getElementById('content-container');

    theContentContainer.removeChild(document.getElementById('content'));
    theContentContainer.removeChild(document.getElementById('index-title'));
    switch (currentContent) {
      case 'index-home':
        let homeTitle;
        domControl(homeTitle, "p", "index-title", false, theContentContainer, "Home", false);
        let home;
        domControl(home, "div", "content", false, theContentContainer, "home", false);
        break;
      case 'index-customers':
        let customersTitle;
        domControl(customersTitle, "p", "index-title", false, theContentContainer, "Customers", false);
        let customers;
        domControl(customers, "div", "content", false, theContentContainer, "customers", false);
        break;
      case 'index-inbox':
        let inboxTitle;
        domControl(inboxTitle, "p", "index-title", false, theContentContainer, "Inbox", false);
        theContentContainer.appendChild(theContent);
        break;
      case 'index-settings':
        let settingsTitle;
        domControl(settingsTitle, "p", "index-title", false, theContentContainer, "Settings", false);
        let settings;
        domControl(settings, "div", "content", false, theContentContainer, "settings", false);
        break;
  }
  });
}

// 태그 수 카운트
let numTag = {};
for (let i in mailData) {
  let tag = mailData[i].tag;
  numTag[tag] = numTag[tag] ? numTag[tag] + 1 : 1;
}
document.getElementById('number-sales').textContent = numTag.sales;
document.getElementById('number-marketing').textContent = numTag.marketing;
document.getElementById('number-design').textContent = numTag.design;
document.getElementById('number-frontend').textContent = numTag.frontend;


// 메일 리스트 
for (let i in mailData) {
  let currentSmallData = mailData[i];

  let mailContent = document.createElement("li");
  mailContent.setAttribute("class", "message-content");
  mailContent.setAttribute("id", i);

  let mailTag = document.createElement("div");
  mailTag.setAttribute("class", "mail-tag-list");
  mailTag.setAttribute("id", i + "Tag");

  document.getElementById("message-list").appendChild(mailContent);
  mailContent.appendChild(mailTag);

  let tagColor = document.getElementById(i + "Tag");
  switch (mailData[i].tag) {
    case "sales":
      tagColor.className += '-sales';
      break;
    case "marketing":
      tagColor.className += '-marketing';
      break;
    case "design":
      tagColor.className += '-design';
      break;
    case "frontend":
      tagColor.className += '-frontend';
      break;
  }

  let container = document.createElement("div");
  mailContent.appendChild(container);
  container.style.display = 'inline-block';
  container.style.position = 'relative';

  let mailName;
  domControl(mailName, "span",false, "name", container, currentSmallData.from, false);

  let mailDate;
  domControl(mailDate, "span", false, "date", mailContent, currentSmallData.date, false);

  let mailTitle;
  domControl(mailTitle, "div", false, "title", container, currentSmallData.title, false);



}

// 메일 리스트 클릭 이벤트 리스너
let messageFlag = false;
let mailIndex = document.querySelectorAll(".message-content");
mailIndex.forEach(i => {
  i.addEventListener('click',function(e){
    e.stopImmediatePropagation();
    let currentMailData = mailData[e.currentTarget.id];

    if (messageFlag) document.querySelector(".selected-message-content").className = "message-content";
    document.getElementById(e.currentTarget.id).className = "selected-message-content";
    messageFlag = true;

    let theUserBox = document.getElementById("user");
    let theUpperBox = document.querySelector("#user .upper-box");
    let theLowerBox = document.querySelector("#user .lower-box");

    theUserBox.removeChild(theUpperBox);
    theUserBox.removeChild(theLowerBox);

    let upperBox = document.createElement("div");
    upperBox.setAttribute("class", "upper-box");

    // 선택된 메일 태그 표시
    if (currentMailData.tag !== '') {
      let theTag;
      domControl(theTag, "div", currentMailData.tag, false, upperBox, currentMailData.tag, false);
    }

    // 선택된 메일 타이틀 표시
    let theTitle;
    domControl(theTitle, "span", "title", false, upperBox, currentMailData.title, false);

    theUserBox.appendChild(upperBox);

    let lowerBox = document.createElement("div");
    lowerBox.setAttribute("class", "lower-box");

    let theImg;
    domControl(theImg, "div", "img", false, lowerBox, false, currentMailData.img);


    let theName;
    domControl(theName, "span", "name", false, lowerBox, currentMailData.from, false);

    let theDate;
    domControl(theDate, "span", "date", false, lowerBox, currentMailData.date, false);

    let to;
    domControl(to, "div", "to", false, lowerBox, "to me", false);

    theUserBox.appendChild(lowerBox);

    let theTextBox = document.getElementById("text");
    let theTextContent = document.querySelector("#text #mail-content");
    theTextBox.removeChild(theTextContent);

    let theText;
    domControl(theText, "p", "mail-content", false, theTextBox, currentMailData.text,false);
  })
});


// 메일 리스트 검색

const theInput = document.getElementById("message-search");
let theTerm;
theInput.addEventListener('keyup', function(e){
  theTerm = e.target.value.trim();
  console.log(theTerm);
  document.getElementById("message-list").innerHTML = "";
  let theSearchedList = mailData.filter(i => i.title.indexOf(theTerm) >= 0);

  for (let i in theSearchedList) {
    let currentSmallData = theSearchedList[i];
  
    let mailContent = document.createElement("li");
    mailContent.setAttribute("class", "message-content");
    mailContent.setAttribute("id", i);
  
    let mailTag = document.createElement("div");
    mailTag.setAttribute("class", "mail-tag-list");
    mailTag.setAttribute("id", i + "Tag");
  
    document.getElementById("message-list").appendChild(mailContent);
    mailContent.appendChild(mailTag);
  
    let tagColor = document.getElementById(i + "Tag");
    switch (mailData[i].tag) {
      case "sales":
        tagColor.className += '-sales';
        break;
      case "marketing":
        tagColor.className += '-marketing';
        break;
      case "design":
        tagColor.className += '-design';
        break;
      case "frontend":
        tagColor.className += '-frontend';
        break;
    }
  
    let container = document.createElement("div");
    mailContent.appendChild(container);
    container.style.display = 'inline-block';
    container.style.position = 'relative';
  
    let mailName;
    domControl(mailName, "span",false, "name", container, currentSmallData.from, false);
  
    let mailDate;
    domControl(mailDate, "span", false, "date", mailContent, currentSmallData.date, false);
  
    let mailTitle;
    domControl(mailTitle, "div", false, "title", container, currentSmallData.title, false);
  
  
  
  }
});
