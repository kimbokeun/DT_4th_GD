// 4 방명록 만들기

// 1. 등록 버튼을 누르면 테이블의 열으로 input의 내용 추가
// 2. 작성일은 현재에 대한 작성 날짜와 시간이 들어가야 함
// writeNote() 함수를 미리 정의해두었습니다.

// 코드 추가 예시
// <tr>
//   <td>홍길동</td>
//   <td>하이</td>
//   <td>2022-10-05 12:34</td>
// </tr>

// [등록] 버튼 클릭시 writeNote() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function writeNote() {
  const writer = document.getElementById("writer");
  const contents = document.getElementById("contents");
  const date = new Date().toLocaleString();
  
  if (writer.value !== "" && contents.value !== "") {
    
    const table = document.querySelector("tbody");
    const tableRow = document.createElement("tr");
    table.append(tableRow);
    
    const tableData_Writer = document.createElement("td");
    const tableData_Contents = document.createElement("td");
    const tableData_Date = document.createElement("td");
    tableRow.append(tableData_Writer, tableData_Contents, tableData_Date);
    
    
    tableData_Writer.textContent = writer.value;
    tableData_Contents.textContent = contents.value;
    tableData_Date.textContent = date;
  }

  writer.value = "";
  contents.value = "";
}
