// API

// 1

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => data.map((item) => console.log(item , item.id , item.title)))
//   .catch((e) => log.error(e));

// 2

async function data() {
  const x = await fetch("https://jsonplaceholder.typicode.com/todos");
  const y = await x.json();
  console.log(y);
  
}

data()
  .then((x) => console.log("ok"))
  .catch((e) => console.log(e));

// 3

// axios.get("https://jsonplaceholder.typicode.com/todos")
//   .then((result) => {
//     result.data.map((ele) => console.log(ele));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
