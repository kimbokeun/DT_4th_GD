/*
  fetch()
    JS 내장 API
    최신 브라우저에서 지원, 비동기 HTTP 요청 처리
    Promise 기반으로 동작, 비동기 방식으로 데이터 요청/ 결과를 반환
    직관적, 사용 쉬움 / 매우 간단, 직관적인 코드로 비동기 요청을 보낼 수 있음

    구문 > fetch( 'URL', { ... } )

    - URL : 요청할 URL
    - { ... } : 옵션 객체
              > 요청의 설정을 정의
              > method(HTTP 요청 메서드 지정) / headers / body .. etc

*/

// Open API 사용

// 1. Get 요청
//    - fetch()는 URL을 인자로 받아 데이터를 가져옴
//    - fetch()에서 GET 요청은 기본 동작 > 명시적으로 설정하지 않아도 됨
//    -

// response 객체 Info
// status > HTTP 응답 상태 코드
// statusText > HTTP 상태 메세지 문자열
// ok > 요청이 성공적으로 수행되었는지를 나타내는 boolean 값 / 2nn true
// headers > 응답 헤더를 나타내는 Headers 객체
// url > 응답이 반환된 URL 문자열

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not okay.");
    }
    console.log("Get response >>> ", response);
    return response.json();
  })
  .then((data) => {
    console.log("Get Posts: ", data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation.", error);
  });

// 2. fetch
// 새로운 게시글 데이터 전송
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Contents-Type": "application/json",
    // 서버에 전달할 데이터 형식 지정
  },
  body: JSON.stringify({
    // JS 객체를 JSON 문자열로 변환 / 서버가 올바르게 해석할 수 있도록
    title: "My New POST", // 제목
    body: "This is the content of my post.", // 본문 내용
    userId: 1, // 작성자 ID
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not okay.");
    }
    return response.json(); // JSON 객체 변환
  })
  .then((data) => {
    console.log("Created Post: ", data);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Contents-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated POST Title",
    body: "This is the updated content.",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Updated Post : ", data);
  })
  .catch((err) => console.error(err));

// 4. Delete 요청
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
// .then((res) {
//   if (res.ok) {
//     console.log("삭제 성공");
//   } else {
//     console.log()
//   }
// })
// .catch((err) => console.error(err));

// 5. Fetch와 Async/Await
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    if (!response.ok) {
      throw new Error("Network response was not okay.");
    }
    const data = await response.json();
    console.log("Async Posts: ", data);
  } catch (error) {
    console.error(err);
  }
}

getPosts();

// 6. 쿼리스트링 Query String
fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not okay.");
    }
    return response.json();
  })
  .then((data) => {
    console.log("QueryString posts: ", data);
  })
  .catch((err) => {
    console.error(err);
  });

// 7. 게시글 데이터를 가져와 화면에 표시
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    const postLists = document.getElementById("post-lists");
    data.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${post.title}`;
      postLists.appendChild(listItem);
    });
  })
  .catch((err) => console.error(err));
