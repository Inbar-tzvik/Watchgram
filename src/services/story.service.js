import { storageService } from './async-storage.service.js'

import { utilService } from './util.service.js'

const STORAGE_KEY = 'storyDb'

const BASE_URL = 'http://localhost:3000/todo'

var gStorys = null
const story = [
  {
    _id: 's101',
    txt: 'Best trip ever',
    imgUrl: '../img/download.jpg', //Can be an array if decide to support multiple imgs
    createdAt: 123543452,

    by: {
      _id: 'u101',
      fullname: 'Ulash Ulashi',
      imgUrl: 'http://some-img',
    },
    loc: {
      lat: 11.11,
      lng: 22.22,
      name: 'Tel Aviv',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          // Optional
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'c1002',
        by: {
          _id: 'u106',
          fullname: 'Dob',
          imgUrl: 'http://some-img',
        },
        txt: 'not good!',
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
  {
    _id: 's102',
    txt: 'Best trip ever',
    imgUrl: '../img/download.jpg', //Can be an array if decide to support multiple imgs
    createdAt: 123543452,

    by: {
      _id: 'u101',
      fullname: 'Ulash Ulashi',
      imgUrl: 'http://some-img',
    },
    loc: {
      lat: 11.11,
      lng: 22.22,
      name: 'Tel Aviv',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          // Optional
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'c1002',
        by: {
          _id: 'u106',
          fullname: 'Dob',
          imgUrl: 'http://some-img',
        },
        txt: 'not good!',
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
  {
    _id: 's103',
    txt: 'Best trip ever',
    imgUrl: '../img/download.jpg', //Can be an array if decide to support multiple imgs
    createdAt: 123543452,

    by: {
      _id: 'u101',
      fullname: 'Ulash Ulashi',
      imgUrl: 'http://some-img',
    },
    loc: {
      lat: 11.11,
      lng: 22.22,
      name: 'Tel Aviv',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          // Optional
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'c1002',
        by: {
          _id: 'u106',
          fullname: 'Dob',
          imgUrl: 'http://some-img',
        },
        txt: 'not good!',
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
]

const user = {
  _id: 'u101',
  username: 'Muko',
  password: 'mukmuk',
  fullname: 'Muki Muka',
  imgUrl: 'http://some-img',
  createdAt: 123543452,
  following: [
    {
      _id: 'u106',
      fullname: 'Dob',
      imgUrl: 'http://some-img',
    },
  ],
  followers: [
    {
      _id: 'u105',
      fullname: 'Bob',
      imgUrl: 'http://some-img',
    },
  ],
  savedStoryIds: ['s104', 's111', 's123'],
}

export const storyService = {
  query,
  save,
  remove,
  addComment,
}

///////////////// USING JSON-SERVER ///////////////

// function query(filterBy = { txt: '' }) {
//     return axios.get(`${BASE_URL}`).then(res => res.data)
// }

// function remove(todo) {
//     return axios.delete(`${BASE_URL}/${todo}`)
// }

// function save(todo) {
//     if (todo._id) {
//         return axios.put(`${BASE_URL}/${todo._id}`, todo).then(res => res.data)
//     } else {
//         return axios.post(BASE_URL, todo).then(res => res.data)
//     }
// }

///////////////////////////USING ASYNC LOCAL STORAGE/////////////////////////////////

function query(filterBy) {
  return storageService.query(STORAGE_KEY, filterBy).then((storys) => {
    if (!storys || !storys.length) {
      console.log('No storys - creating new story!')
      storys = _createStorys()
      storageService.postMany(STORAGE_KEY, storys)
    }
    gStorys = storys
    // [gUser] = users;
    console.log(storys)
    return gStorys
  })
}

function save(story) {
  if (story._id) {
    return storageService.put(STORAGE_KEY, story)
  } else {
    return storageService.post(STORAGE_KEY, story)
  }
}

function remove(storyId) {
  return storageService.remove(STORAGE_KEY, storyId)
}
function _createStorys() {
  console.log('story', story)
  return story
  // [
  //     _createStory('Fix computer'),
  //     _createStory('Clean the house'),
  //     _createStory('Call mom'),
  //     _createStory('Call dad'),
  //     _createStory('Walk the dog'),
  //     _createStory('Water plants'),
  //   ]
}

function _createStory(txt) {
  return {
    _id: utilService.makeId(),
    txt,
    isActive: true,
    createdAt: Date.now(),
  }
}
////////////////////////////////////////////////////////////
// function getTodos() {
//     return gState
// }

// function saveTodoChanges(todo) {
//     const idx = gState.todos.findIndex(currTodo => currTodo._id === todo._id)
//     gState.todos[idx] = todo
//     storageService.saveToStorage(STORAGE_KEY, gState)
//     return { ...gState, todos: [...gState.todos] }
// }

// function editTodo(txt) {
//     gState.selectedTodo = txt
//     return { ...gState, selectedTodo: gState.selectedTodo }
// }

// function setSelectedTodo(todo) {
//     gState = {
//         ...gState,
//         selectedTodo: todo
//     }
//     return gState
// }

async function addComment(story, txt) {
  const comment = {
    _id: _makeId(),
    by: {
      _id: user._id,
      fullname: user.fullname,
    },
    txt: txt,
  }
  console.log('story in servie', story)
  story.comments.push(comment)
  // const currStorys = await storageService.query(STORAGE_KEY)
  // const i = currStorys.findIndex((currStory) => currStory._id === story.id)
  // if (i > -1) currStorys[i].comments.push(comment)

  const updatedStory = storageService.put(STORAGE_KEY, story)
  // gStorys = currStorys
  return updatedStory
}

// function onFilter(state) {
//     const filterRex = new RegExp(state.filterBy.txt, 'i')
//     const todos = state.todos.filter(todo => filterRex.test(todo.todo))
//     return { ...state, todos }
// }

// function toggleTodo(todoId) {
//     const idx = gState.todos.findIndex(todo => todo._id === todoId)
//     gState.todos[idx].isComplete = !gState.todos[idx].isComplete
//     gState.todos[idx].editedAt = Date.now()
//     storageService.saveToStorage(STORAGE_KEY, gState)
//     return { ...gState, todos: [...gState.todos] }
// }

// function remove(todoId) {
//     const idx = gState.todos.findIndex(todo => todo._id === todoId)
//     gState = {
//         ...gState,
//         todos: [
//             ...gState.todos.slice(0, idx),
//             ...gState.todos.slice(idx + 1)
//         ],
//         users: {
//             ...gState.users,
//             activities: [
//                 {
//                     txt: 'Removed todo',
//                     at: Date.now()
//                 },
//                 ...gState.users.activities
//             ]
//         }
//     }
//     storageService.saveToStorage(STORAGE_KEY, gState)
//     return gState
// }

// function _createDb() {
//     const db = {
//         todos: [
//             {
//                 _id: 1,
//                 todo: 'take buffy for shopping',
//                 isComplete: false,
//                 createdAt: Date.now(),
//                 editedAt: Date.now()
//             },
//             {
//                 _id: 2,
//                 todo: 'work with noam',
//                 isComplete: false,
//                 createdAt: Date.now(),
//                 editedAt: Date.now()
//             }
//         ],
//         filterBy: { txt: '' },
//         slectedTodo: null,
//     }
//     storageService.saveToStorage(STORAGE_KEY, db)
//     return db
// }

// function _load() {
//     return storageService.loadFromStorage(STORAGE_KEY)
// }

function _makeId(length = 5) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
