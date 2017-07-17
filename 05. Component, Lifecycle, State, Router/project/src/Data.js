let Data = {
  books: () => {
    return new Promise((resolve, reject) => {
      resolve({
        books: [
          {
            id: 1,
            title: 'The Dread Bible',
            author: 'Dread',
            details: '/books/' + 1,
            date: new Date(2000, 1, 23),
            image: 'http://www.startupremarkable.com/wp-content/uploads/2015/02/a-book-a-week-image.jpg',
            description: 'Good read about Flying Spaghetti Monster.',
            price: 12,
            comments: ['the best', 'more please']
          },
          {
            id: 2,
            title: 'The Dread Returns',
            author: 'Dread',
            details: '/books/',
            date: new Date(2001, 1, 23),
            image: 'https://static.pexels.com/photos/46274/pexels-photo-46274.jpeg',
            description: 'Comprehensive Guide.',
            price: 12,
            comments: ['lame', 'boring', 'dind\'t like it']
          },
          {
            id: 3,
            title: 'Pino and the commies',
            author: 'Helitron',
            details: '/books/' + 3,
            date: new Date(2010, 5, 23),
            image: 'http://homekeyorganization.com/wp-content/uploads/2013/01/Colorful-books.jpg',
            description: 'The best bible book in the series so far.',
            price: 12,
            comments: ['my precious', 'the best in the series']
          },
          {
            id: 4,
            title: 'The HeliBible',
            author: 'Helitron',
            details: '/books/' + 4,
            date: new Date(2013, 2, 23),
            image: 'https://static.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg',
            description: 'The next edition of the series is bigger and better then ever.',
            price: 12,
            comments: ['TLDR', 'LOL', 'piece of garbage', 'garbagio']
          },
          {
            id: 5,
            title: 'Return of the Choper',
            author: 'Helitron',
            details: '/books/' + 5,
            date: new Date(2014, 11, 25),
            image: 'https://www.psychologicalscience.org/redesign/wp-content/uploads/2011/12/Books.jpg',
            description: 'Fifth book is here. You won\' be dissapointed',
            price: 12,
            comments: ['shockingly lame', 'boring']
          },
          {
            id: 6,
            title: 'The Troletariat',
            author: 'Troll Petrov',
            details: '/books/' + 6,
            date: new Date(2014, 12, 23),
            image: 'http://www.bradleysbookoutlet.com/wp-content/uploads/2013/06/bradleys-book-outlet-books-only-logo.png',
            description: 'Gods and devils figth over petty humans. Thrilling read!',
            price: 12,
            comments: ['LOL', 'OMG ROFL', 'word']
          },
          {
            id: 7,
            title: 'Trollie the Troll',
            author: 'Troll Petrov',
            details: '/books/' + 7,
            date: new Date(2003, 6, 12),
            image: 'http://www.startupist.com/wp-content/uploads/2015/03/books.jpg',
            description: 'It changes the way you look at fairies.',
            price: 12,
            comments: ['lame', 'good', 'how would anyone like that? Geez people...']
          }
        ]
      })
    })
  },
  authors: () => {
    return new Promise((resolve, reject) => {
      resolve({
        authors: [
          {
            id: 1,
            name: 'Dread',
            image: 'http://images6.fanpop.com/image/polls/1133000/1133723_1350956019779_full.jpg',
            books: ['The Dread Bible', 'The Dread Returns']
          },
          {
            id: 2,
            name: 'Helitron',
            image: 'https://vignette4.wikia.nocookie.net/villains/images/c/c8/Syndrome.jpg',
            books: ['Pino and the commies', 'The HeliBible', 'Return of the Choper']
          },
          {
            id: 3,
            name: 'Troll Petrov',
            image: 'https://1.bp.blogspot.com/-n8Sgt9wHBfc/Vz4RPwJ6tlI/AAAAAAAABZ0/_D3OIu3Ye3ks31iLNOFvchsEmkYpKeZ2ACLcB/s1600/hqdefault1.jpg',
            books: ['The Troletariat', 'Trollie the Troll']
          }
        ]
      })
    })
  }
}

export default Data
