const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Manoj Devan",
        email: "manoj@example.com",
      },
      {
        name: "Nandita Gupta",
        email: "nandita@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Manoj Devan",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Harpreet Mehta",
        email: "harpreet@example.com",
      },
      {
        name: "Nandita Gupta",
        email: "nandita@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Harpreet Mehta",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Nayan Kar",
        email: "nayan@example.com",
      },
      {
        name: "Nandita Gupta",
        email: "nandita@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Nayan",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Manoj Devan",
        email: "manoj@example.com",
      },
      {
        name: "Nandita Gupta",
        email: "nandita@example.com",
      },
      {
        name: "Harpreet Mehta",
        email: "harpreet@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Nandita Gupta",
      email: "nandita@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Fatima Khalsa",
        email: "fatima@example.com",
      },
      {
        name: "Nandita Gupta",
        email: "nandita@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Fatima Khalsa",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Manoj Devan",
        email: "manoj@example.com",
      },
      {
        name: "Nandita Gupta",
        email: "nandita@example.com",
      },
      {
        name: "Harpreet Mehta",
        email: "harpreet@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Harpreet Mehta",
      email: "harpreet@example.com",
    },
  },
];

module.exports = { chats };
