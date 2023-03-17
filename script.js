// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const output_all = document.getElementById("output-all");
const output_any = document.getElementById("output-any");

const fetchAllData = async () => {
  const startTime = performance.now();
  const allData = await Promise.all(apiUrls.map(fetchData));
  const endTime = performance.now();
  const timeTaken = endTime - startTime;
  output_all.innerText = timeTaken;
  console.log(`Time taken using Promise.all: ${timeTaken} milliseconds`);
  return allData;
};

// Promise.all(apiUrls).then((res) => (output_all.innerText = new Date().toLocaleTimeString()))
// Promise.any(apiUrls).then((res) => (output_any.innerText = new Date().toLocaleTimeString()))










	
