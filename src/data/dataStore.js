export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  header: {
    icon: 'bug',
  },

  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const faqData = {
  title: 'Questions <sup>?</sup>',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',

};

export const infoData = {
  title: 'Info',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const search = {
  title: 'Search results:',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Books',
    description: 'Interesting Books I want to check out!',
    image: 'https://i.postimg.cc/0QBsH38W/Background-18.png',
  },
  {
    id: 'list-2',
    title: 'Movies',
    description: 'Interesting Movies I want to check out!',
    image: 'https://i.postimg.cc/0QBsH38W/Background-18.png',
  },
  {
    id: 'list-3',
    title: 'Games',
    description: 'Interesting Games I want to check out!',
    image: 'https://i.postimg.cc/0QBsH38W/Background-18.png',
  },
  {
    id: 'list-4',
    title: 'Traveling',
    description: 'An interesting Destinations to check out!',
    image: 'https://i.postimg.cc/0QBsH38W/Background-18.png',
  },

];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Daires',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-2',
    title: 'Action',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-3',
    title: 'Rpg',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-4',
    title: 'Europe',
    icon: 'map',
  },
];

const cards = [
  {
    id: 'card-1',
    ListId: 'list-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    listId: 'list-2',
    columnId: 'column-2',
    title: '101 Dalaty',
  },
  {
    id: 'card-4',
    listId: 'list-2',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    listId: 'list-3',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    listId: 'list-3',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
