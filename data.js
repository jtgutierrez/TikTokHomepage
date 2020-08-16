import { Asset } from "expo-asset";

export const replayButton = Asset.fromModule(
  require("./images/replayButton.png")
);
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
          {
            comment: "My Mom loved it also.",
            author: "TikTokker",
            likes: 49,
            replies: [],
          },
          {
            comment: "Your mom has a great sense of humor!",
            author: "Chewyhawk",
            likes: 15,
            replies: [],
          },
          {
            comment:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            author: "User3",
            likes: 9,
            replies: [],
          },
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
      {
        comment: "Soccer is way better than hockey.",
        author: "TikTok001",
        likes: 4,
        replies: [],
      },
      {
        comment: "What a jump!",
        author: "theTikToMyTok",
        likes: 16,
        replies: [],
      },
      {
        comment: "I like football better.",
        author: "asd23afas",
        likes: 99,
        replies: [],
      },
      {
        comment: "Horrible Video!",
        author: "Alexandra123",
        likes: 50,
        replies: [{ comment: "I agree", author: "Jim", likes: 2, replies: [] }],
      },
    ],
    playing: false,
  },
  {
    uri: shark,
    likes: 1000,
    comments: [
      { comment: "Great Video!", author: "TikTokker", likes: 4, replies: [] },
      {
        comment: "We should go fishing there.",
        author: "Fisherman231",
        likes: 1,
        replies: [
          { comment: "I would go.", author: "Jim", likes: 1, replies: [] },
        ],
      },
      {
        comment: "I wouldnt swim in there!",
        author: "iCantSwim",
        likes: 23,
        replies: [
          {
            comment: "Me neither! I hate sharks",
            author: "Jim",
            likes: 100,
            replies: [],
          },
        ],
      },
    ],
    playing: false,
  },
  {
    uri: cop,
    likes: 5123,
    comments: [
      {
        comment: "Great Voice",
        author: "CatLover",
        likes: 12,
        replies: [
          { comment: "Truly.", author: "DogLover", likes: 2, replies: [] },
        ],
      },
      { comment: "Amazing Video!", author: "asd23afas", likes: 9, replies: [] },
      {
        comment: "My dad found this funny.",
        author: "Elaine231",
        likes: 1,
        replies: [],
      },
    ],
    playing: false,
  },
  {
    uri: kindergarten,
    likes: 1321,
    comments: [
      { comment: "HAHAHAHAHAAHAHA!", author: "Tikkki", likes: 4, replies: [] },
      {
        comment: "I didn't find this funny.",
        author: "TokTikk",
        likes: 100,
        replies: [],
      },
      {
        comment: "Coronavirus is not a joke!",
        author: "Johnny",
        likes: 9,
        replies: [
          {
            comment: "I agree. I had it 2 weeks ago.",
            author: "Tim",
            likes: 2,
            replies: [],
          },
        ],
      },
      {
        comment:
          "This is the best video I have ever seen! It truly is the best video. I showed my Mom and she loved it!",
        author: "Elaine231",
        likes: 22,
        replies: [],
      },
      {
        comment: "Horrible video.",
        author: "Jim",
        likes: 8,
        replies: [
          { comment: "I know right", author: "Tom", likes: 9, replies: [] },
          {
            comment: "Ik. This was totally uncalled for.",
            author: "Jill",
            likes: 6,
            replies: [],
          },
        ],
      },
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
