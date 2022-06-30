async function requestBooks(name, category, orderby, startindex, resolve) {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      name +
      category +
      "&orderBy=" +
      orderby +
      "&startIndex=" +
      startindex +
      "&maxResults=30" +
      "&key=AIzaSyCNgDbG368jT9bHVc6nNvj3V0npUy0Vi-8"
  );
  const data = await response.json();
  let array = [];
  for (let i = 0; i < data.items.length; i++) {
    const book = {
      id: data.items[i].id,
      img: data.items[i].volumeInfo.imageLinks?.thumbnail,
      title: data.items[i].volumeInfo?.title,
      categories: data.items[i].volumeInfo?.categories,
      authors: data.items[i].volumeInfo?.authors,
    };
    array.push(book);
    // array.push(data.totalItems);
  }
  resolve({
    array,
    totalItems: data.totalItems,
  });
}
export { requestBooks };
