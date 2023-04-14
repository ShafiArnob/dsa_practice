//* Online Cloud reading App Similar to Kindle ( for short stories )

//* A few things looking for 
//* - Users have library that they can add to or remove from
//* - Users can set a book from their library as active
//* - The app remembers where the user left off in given book 
//* - The reading app only displays a page of text at a time in the active book

/*  
  Classes:
    - Representing Books ( Book )
      - id: int/str
      - Title: str
      - pages/content: array of strings(per page)
      - last page user looked at: int
    - Representing Library
      - collenction of books: {id: Book}
      - active books: id
*/ 

class Book {
  constructor(id, title, content){
    this.id = id
    this.title = title
    this.content = content
    this.last_page = 0
  }
  display_page(){
    return this.content[this.last_page]
  }
  turn_page(){
    this.last_page += 1
    return this.display_page()
  }
}

class Library{
  constructor(){
    this.collection = {}
    this.active_books = null
    this.id_counter = 0
  }

  add_to_collection(title, content){
    new_book = new Book(this.id_counter, title, content)
    this.collection[new_book.id] = new_book
    this.id_counter += 1
  }

  remove_from_collection(id){
    delete this.collection[id]
  }

  set_active_book(id){
    this.active_books = id
  }

  display_page(){
    return this.collection[this.active_books].display_page()
  }

  turn_page(){
    return this.collection[this.active_books].turn_page()
  }
}