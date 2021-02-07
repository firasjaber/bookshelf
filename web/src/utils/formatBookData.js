export default function formatBookData (bookData,bookId) {
const {
      title,
      subtitle,
      authors,
      publisher,
      publishedDate,
      pageCount,
      categories,
    } = bookData;
    const book = {
      googleId: bookId,
      title,
      authors,
      publisher,
      publishedDate,
      pageCount,
      categories,
    };
    book.subtitle = subtitle ? subtitle : title;
    book.categories = categories ? categories : [''];
    return book
}