// section.container
const container = document.querySelector(".container");

// CSS
container.style.height = "100%";
container.style.position = "relative";
container.style.backgroundImage =
  "linear-gradient(var(--color-primary), var(--color-secondary))";

// players
const players = [
  "OH <b>김연경</b>",
  "S <b>이고은</b>",
  "MB <b>양효진</b>",
  "MB <b>이다현</b>",
  "MB <b>김수지</b>",
  "MB <b>이주아</b>",
  "MB <b>김희진</b>",
  "OH <b>박정아</b>",
  "R <b>최효서</b>",
  "R <b>김해란</b>",
  "OH <b>강소휘</b>",
  "OH <b>박은서</b>",
  "OH <b>김세인</b>",
  "S <b>김다인</b>",
];

// h1.title
let title = document.createElement("h1");
title.classList.add("title");
container.append(title);
title.innerText = "2022 - 23 여자배구 올스타전 팬투표 순위";
title.style.fontSize = "40px";
title.style.fontWeight = "bold";

// CSS
title.style.paddingTop = "72px";
title.style.paddingBottom = "48px";
title.style.color = "var(--color-white)";
title.style.textAlign = "center";

// div.list
let list = document.createElement("ul");
list.classList.add("list");
container.append(list);

// CSS
list.style.width = "100%";
list.style.paddingLeft = "100px";
list.style.paddingRight = "100px";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.justifyContent = "center";

// <a> 반복
for (let i = 0; i < players.length; i++) {
  // div.item
  let item = document.createElement("li");
  item.classList.add("item");

  // CSS
  item.style.position = "relative";
  item.style.minWidth = "160px";
  item.style.minHeight = "200px";
  item.style.margin = "20px";
  item.style.borderRadius = "16px";
  item.style.backgroundColor = "rgba(255, 255, 255, .16)";
  item.style.boxShadow = "var(--shadow-1)";

  // p.player_score
  let playerScore = document.createElement("p");
  playerScore.classList.add("player_score");
  playerScore.innerHTML = `<b>${i + 1}</b>위`;

  // CSS
  playerScore.style.position = "absolute";
  playerScore.style.top = "-16px";
  playerScore.style.left = "-16px";
  playerScore.style.zIndex = "1";
  playerScore.style.width = "48px";
  playerScore.style.height = "48px";
  playerScore.style.lineHeight = "48px";
  playerScore.style.color = "var(--color-white)";
  playerScore.style.textAlign = "center";
  playerScore.style.letterSpacing = ".06em";
  playerScore.style.borderRadius = "50%";
  playerScore.style.backgroundColor = "var(--color-secondary)";
  playerScore.style.boxShadow = "var(--shadow-1)";

  // h3.player_name
  let playerName = document.createElement("h3");
  playerName.classList.add("player_name");
  playerName.innerHTML = players[i];

  // CSS
  playerName.style.position = "absolute";
  playerName.style.right = "-16px";
  playerName.style.bottom = "-12px";
  playerName.style.zIndex = "1";
  playerName.style.padding = "10px 12px 10px 48px";
  playerName.style.fontSize = "16px";
  playerName.style.color = "var(--color-white)";
  playerName.style.letterSpacing = ".06em";
  playerName.style.backgroundColor = "var(--color-primary)";
  playerName.style.borderRadius = "8px";
  playerName.style.boxShadow = "var(--shadow-1)";

  // a.wrapper
  let wrapper = document.createElement("a");
  wrapper.classList.add("wrapper");

  // CSS
  wrapper.href = "#";
  wrapper.style.display = "block";
  wrapper.style.position = "relative";
  wrapper.style.height = "100%";
  wrapper.style.border = "2px solid rgba(255, 255, 255, .16)";
  wrapper.style.borderRadius = "16px";
  
  // div.img-wrap
  let imageWrap = document.createElement("div");
  imageWrap.classList.add("image-wrap");
  imageWrap.style.position = "relative";
  imageWrap.style.overflow = "hidden";
  imageWrap.style.height = "100%";
  imageWrap.style.borderRadius = "14px";

  // img
  let image = document.createElement("img");
  image.classList.add("image");
  image.src = `./images/allstar_${i + 1}.png`;

  // CSS
  image.style.position = "absolute";
  image.style.left = "50%";
  image.style.bottom = "0";
  image.style.height = "100%";
  image.style.transform = "translateX(-50%)";

  // append
  item.append(playerScore);
  item.append(wrapper);
  wrapper.append(playerName);
  wrapper.append(imageWrap);
  imageWrap.append(image);
  list.append(item);
}

console.log(list);
console.log(players[0]);
