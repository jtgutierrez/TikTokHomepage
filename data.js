import { Asset } from "expo-asset";

const cat = Asset.fromModule(require("./videos/cat.mp4")).uri;
const hockey = Asset.fromModule(require("./videos/hockey.mp4")).uri;
const shark = Asset.fromModule(require("./videos/shark.mp4")).uri;
const cop = Asset.fromModule(require("./videos/cop.mp4")).uri;
const kindergarten = Asset.fromModule(require("./videos/kindergarten.mp4")).uri;
const puddles = Asset.fromModule(require("./videos/puddles.mp4")).uri;
const skateboard = Asset.fromModule(require("./videos/skateboard.mp4")).uri;

export let videos = [
  {
    uri: cat,
    likes: 356,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [
          "I agree. This brought a smile to my face.",
          "Totally a great video!",
        ],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
  {
    uri: hockey,
    likes: 500,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
  {
    uri: shark,
    likes: 1000,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
  {
    uri: cop,
    likes: 5123,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
  {
    uri: kindergarten,
    likes: 1321,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
  {
    uri: puddles,
    likes: 841,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
  {
    uri: skateboard,
    likes: 100,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "What a great video!",
        author: "TokTikk",
        likes: 15,
        replies: [],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 5,
        replies: [],
      },
      { comment: "Horrible video.", author: "Jim", likes: 2, replies: [] },
    ],
    playing: false,
  },
];
