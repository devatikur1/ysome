import React, { useEffect, useRef, useState } from "react";
import { UiContext } from "./UiContext";

export default function UiContextProvider({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const searchBtnRef = useRef(null);
  const [isNotificationShow, setNotificationShow] = useState(false);
  const notificationBtnRef = useRef(null);
  const [isReSideBarShow, setIsReSideBarShow] = useState(false);
  const [isFxSideBarShow, setIsFxSideBarShow] = useState(false);
  

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          kind: "youtube#searchListResponse",
          etag: "2W2xZLePfOzqxqYHI2TiA4rnorM",
          nextPageToken: "CBkQAA",
          regionCode: "BD",
          pageInfo: {
            totalResults: 1000000,
            resultsPerPage: 25,
          },
          items: [
            {
              kind: "youtube#searchResult",
              etag: "iCsdQCDLfy7L_-DQinspibxc8FM",
              id: {
                kind: "youtube#video",
                videoId: "lBvbNxiVmZA",
              },
              snippet: {
                publishedAt: "2024-11-20T11:12:51Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "Full Video: Raanjhan | Do Patti | Kriti Sanon, Shaheer Sheikh | Parampara Tandon | Sachet-Parampara",
                description:
                  'Presenting the Full Video Song "Raanjhan" from the Film "Do Patti". Starring Kajol, Kriti Sanon, Shaheer Sheikh and Tanvi Azmi.',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/lBvbNxiVmZA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/lBvbNxiVmZA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/lBvbNxiVmZA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2024-11-20T11:12:51Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "hDHLLPKCpZHpA0ShqZQCXvg3fgs",
              id: {
                kind: "youtube#video",
                videoId: "hxMNYkLN7tI",
              },
              snippet: {
                publishedAt: "2024-10-24T11:30:37Z",
                channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
                title:
                  "Aaj Ki Raat -Full Song |Stree 2|Tamannaah Bhatia|Rajkummar Rao|Sachin-Jigar|Madhubanti|Divya|Amitabh",
                description:
                  "Get ready to groove with the full song of Aaj Ki Raat from Stree 2! Starring Tamannaah Bhatia and her electrifying dance moves, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/hxMNYkLN7tI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/hxMNYkLN7tI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/hxMNYkLN7tI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Saregama Music",
                liveBroadcastContent: "none",
                publishTime: "2024-10-24T11:30:37Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "BvHtd_awUhZ52f-uOUcmn4ozUZM",
              id: {
                kind: "youtube#video",
                videoId: "MQoColHyGzQ",
              },
              snippet: {
                publishedAt: "2025-09-05T07:00:06Z",
                channelId: "UCbTLwN10NoCU4WDzLf1JMOA",
                title:
                  "Saiyaara Full Song | Ahaan Panday, Aneet Padda | Tanishk Bagchi, Faheem A, Arslan N | Irshad Kamil",
                description:
                  "All the love, all the feels Here's the Saiyaara Full Song to touch your hearts, all over again ❤️ ▻ Subscribe Now: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/MQoColHyGzQ/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/MQoColHyGzQ/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/MQoColHyGzQ/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "YRF",
                liveBroadcastContent: "none",
                publishTime: "2025-09-05T07:00:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "bsMizDBR9Q0caKmCvyJo6RqAnLg",
              id: {
                kind: "youtube#video",
                videoId: "YALvuUpY_b0",
              },
              snippet: {
                publishedAt: "2022-11-05T04:04:28Z",
                channelId: "UCDxKh1gFWeYsqePvgVzmPoQ",
                title: "Apna Bana Le (From &quot;Bhediya&quot;)",
                description:
                  'Provided to YouTube by Zee Entertainment Enterprises Limited Apna Bana Le (From "Bhediya") · Arijit Singh · Sachin-Jigar Apna ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/YALvuUpY_b0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/YALvuUpY_b0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/YALvuUpY_b0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Arijit Singh - Topic",
                liveBroadcastContent: "none",
                publishTime: "2022-11-05T04:04:28Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "4t8XYpETsNixpCEQGYFlbHP7G_A",
              id: {
                kind: "youtube#video",
                videoId: "Ib_L3vuUX5k",
              },
              snippet: {
                publishedAt: "2025-05-17T17:02:31Z",
                channelId: "UCUtau6mD_nDxjqtNM-WyAJA",
                title:
                  "Gulbahar | গুলবাহার | Ishaan এর Gaan | Shuvendu Das Shuvo | Official Music Video",
                description:
                  "The song “Gulbahar” is an enchanting symphony originated from the timeless alleys of Puran Dhaka. It's a journey of an ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Ib_L3vuUX5k/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Ib_L3vuUX5k/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Ib_L3vuUX5k/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Ishaan এর Gaan ",
                liveBroadcastContent: "none",
                publishTime: "2025-05-17T17:02:31Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "w04rXUxh0F4A0n8PuFAfgsgHJMI",
              id: {
                kind: "youtube#video",
                videoId: "QcQpqWhTBCE",
              },
              snippet: {
                publishedAt: "2024-09-27T10:30:17Z",
                channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
                title:
                  "Chikni Chameli - 8K/4k Music Video | Katrina Kaif, Hrithik | Agneepath | Shreya Ghoshal | Ajay-Atul",
                description:
                  'Experience the electrifying dance song "Chikni Chameli" like never before in breathtaking 8K resolution! From the blockbuster film ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/QcQpqWhTBCE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/QcQpqWhTBCE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/QcQpqWhTBCE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sony Music India",
                liveBroadcastContent: "none",
                publishTime: "2024-09-27T10:30:17Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "jyA7z07bnUdA6u-ZYQW_jWkf-cc",
              id: {
                kind: "youtube#video",
                videoId: "qoq8B8ThgEM",
              },
              snippet: {
                publishedAt: "2012-01-19T07:34:47Z",
                channelId: "UCbTLwN10NoCU4WDzLf1JMOA",
                title:
                  "Tujh Mein Rab Dikhta Hai Song | Rab Ne Bana Di Jodi | Shah Rukh Khan, Anushka Sharma | Roop Kumar",
                description:
                  "Trending Moments: 00:18 - Tu Hi Toh Jannat Meri 00:42 - Tujh Mein Rab Dikhta Hai, Yaara Main Kya Karoon 01:33 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/qoq8B8ThgEM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/qoq8B8ThgEM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/qoq8B8ThgEM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "YRF",
                liveBroadcastContent: "none",
                publishTime: "2012-01-19T07:34:47Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "j4TpAoM6q7PMkvovHDIfK8CyfRE",
              id: {
                kind: "youtube#video",
                videoId: "tL_QRUWW3rM",
              },
              snippet: {
                publishedAt: "2025-06-25T04:34:07Z",
                channelId: "UCtaYP_e7qCzE19ZEFJmtvqQ",
                title:
                  "Shreya Ghoshal best romantic superhit songs | Top 4 hindi song | soulful vocals",
                description:
                  "Shreya Ghoshal old song , Shreya Ghoshal new song 2025 , Shreya Ghoshal new song 2024 , Shreya Ghoshal new song 2023 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/tL_QRUWW3rM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/tL_QRUWW3rM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/tL_QRUWW3rM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Soulful vocals ",
                liveBroadcastContent: "none",
                publishTime: "2025-06-25T04:34:07Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "LHnBIMAJNEdtlJNuXILysjC-4Cs",
              id: {
                kind: "youtube#video",
                videoId: "IRb-iyKMzg8",
              },
              snippet: {
                publishedAt: "2025-10-21T15:44:49Z",
                channelId: "UCmzN4K2Vla4-3XiNopDWqVg",
                title:
                  "Ice cream khaungi | trending dance reel tutorial | easy dance step | Nilesh rock | how to dance easy",
                description:
                  "Ice cream khaungi | trending dance reel tutorial | easy dance step | Nilesh rock | how to dance easy About - hi everyone now you ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/IRb-iyKMzg8/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/IRb-iyKMzg8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/IRb-iyKMzg8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "UDS NILESH ROCK",
                liveBroadcastContent: "none",
                publishTime: "2025-10-21T15:44:49Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "kzFwrFdWi-KweuxQnimyG_QX8YY",
              id: {
                kind: "youtube#video",
                videoId: "PVDPkS4v8FQ",
              },
              snippet: {
                publishedAt: "2019-05-24T06:30:02Z",
                channelId: "UCwVaZvqWinr1NWZopxGjRQQ",
                title: "Bekhayali (From &quot;Kabir Singh&quot;)",
                description:
                  'Provided to YouTube by Super Cassettes Industries Private Limited Bekhayali (From "Kabir Singh") · Sachet Tandon ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/PVDPkS4v8FQ/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/PVDPkS4v8FQ/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/PVDPkS4v8FQ/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sachet Tandon - Topic",
                liveBroadcastContent: "none",
                publishTime: "2019-05-24T06:30:02Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "l_wiBE3kBTJlmGw--am5B6YO0xs",
              id: {
                kind: "youtube#video",
                videoId: "8erle22S6x0",
              },
              snippet: {
                publishedAt: "2024-11-21T15:00:07Z",
                channelId: "UCNO9-eKME4eiYEqy5rVPDoQ",
                title:
                  "Best of Anuv Jain 2024 | Top 5 Songs of Anuv Jain | Husn | Jo Tum Mere Ho | Gul | Alag Aasmaan",
                description:
                  "anuvjain #guitar #guitarcover #independentartist This video is intended for entertainment purposes only. I do not own the rights to ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/8erle22S6x0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/8erle22S6x0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/8erle22S6x0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "PulseVibes",
                liveBroadcastContent: "none",
                publishTime: "2024-11-21T15:00:07Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "4Q2kznPQvPyhxn01GmyH_J-fJgc",
              id: {
                kind: "youtube#video",
                videoId: "WxtJqyIyThU",
              },
              snippet: {
                publishedAt: "2021-09-15T11:30:05Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "Kashmir Main Tu Kanyakumari(Lyrical)|Chennai Express |Shahrukh K, Deepika P,Sunidhi C,Arijit S,Neeti",
                description:
                  'Presenting the lyrical video of the song "Kashmir Main Tu Kanyakumari" from movie "Chennai Express" starring Shahrukh Khan, ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/WxtJqyIyThU/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/WxtJqyIyThU/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/WxtJqyIyThU/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2021-09-15T11:30:05Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "uunYL3o9o100ls0tUvtbuVqzp_o",
              id: {
                kind: "youtube#video",
                videoId: "5Eqb_-j3FDA",
              },
              snippet: {
                publishedAt: "2022-02-07T12:00:05Z",
                channelId: "UCM1VesJtJ9vTXcMLLr_FfdQ",
                title:
                  "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill",
                description:
                  "Let's transcend boundaries and bridge distances through compassion, love and identity. #Pasoori #RealMagic ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/5Eqb_-j3FDA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/5Eqb_-j3FDA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/5Eqb_-j3FDA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Coke Studio Pakistan",
                liveBroadcastContent: "none",
                publishTime: "2022-02-07T12:00:05Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "dk29OzPMjRvzQXrDFixdDMvN1TI",
              id: {
                kind: "youtube#video",
                videoId: "OO1gfG_O5Z0",
              },
              snippet: {
                publishedAt: "2024-05-03T02:39:52Z",
                channelId: "UC5aTZ2LSFcXeYuJYzxdmgww",
                title:
                  "Vaaste Song: Dhvani Bhanushali, TanishkBagchi Nikhil D | Bhushan Kumar |RadhikaRao, Vinay Sapru",
                description:
                  'Gulshan Kumar Presents latest Hindi Video Song of 2019 Bhushan Kumar\'s " Vaaste" In the voice of " Dhvani Bhanushali & Nikhil ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/OO1gfG_O5Z0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/OO1gfG_O5Z0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/OO1gfG_O5Z0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Primrosestudioz",
                liveBroadcastContent: "none",
                publishTime: "2024-05-03T02:39:52Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "v8yT5I-evThsUElfT94UuhdACM8",
              id: {
                kind: "youtube#video",
                videoId: "NW6Dgax2d6I",
              },
              snippet: {
                publishedAt: "2024-11-15T06:30:58Z",
                channelId: "UCmkWj7Sft1lt1VHX43BbAfA",
                title:
                  "Sahiba (Music Video) Jasleen Royal |Vijay Deverakonda Radhikka Madan|Stebin| Priya|Aditya| Sudhanshu",
                description:
                  "Sahiba #JasleenRoyal #VijayDeverakonda #RadhikkaMadan #SudhanshuSaria #StebinBen SAHIBA - A Journey of ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/NW6Dgax2d6I/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/NW6Dgax2d6I/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/NW6Dgax2d6I/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Jasleen Royal",
                liveBroadcastContent: "none",
                publishTime: "2024-11-15T06:30:58Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "OCEVQtvCJVHHpxrObEByuSzjJL0",
              id: {
                kind: "youtube#video",
                videoId: "NsUqPzdkFTY",
              },
              snippet: {
                publishedAt: "2025-07-04T12:06:03Z",
                channelId: "UCNApqoVYJbYSrni4YsbXzyQ",
                title:
                  "Viral Vayyari (Telugu) Lyrical Video | Junior Movie | Kireeti, Sreeleela | Radha Krishna | DSP",
                description:
                  "Watch & Enjoy Viral Vayyari Lyrical Video Song from the Movie Junior. Song Details: Song Name: Viral Vayyari Lyrics: Kalyan ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/NsUqPzdkFTY/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/NsUqPzdkFTY/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/NsUqPzdkFTY/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Aditya Music",
                liveBroadcastContent: "none",
                publishTime: "2025-07-04T12:06:03Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "x0IR_WAWP1-fbOsTB0Pa9XawlEA",
              id: {
                kind: "youtube#video",
                videoId: "bPk9bSvQQoc",
              },
              snippet: {
                publishedAt: "2015-12-01T12:42:52Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "&#39;PREM RATAN DHAN PAYO&#39; Title Song (Full VIDEO) | Salman Khan, Sonam Kapoor | Palak Muchhal T-Series",
                description:
                  "Watch Tamma Tamma Again - http://Bit.ly/TammaTammaAgain Presenting 'PREM RATAN DHAN PAYO' title track song from Hindi ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/bPk9bSvQQoc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/bPk9bSvQQoc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/bPk9bSvQQoc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2015-12-01T12:42:52Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "CprRa4ZJq-dd4ttVxRFkhtXF9B4",
              id: {
                kind: "youtube#video",
                videoId: "W4ePFqCM9_I",
              },
              snippet: {
                publishedAt: "2025-07-02T05:21:36Z",
                channelId: "UC8Y3votUz8aBhod7TIuSxLw",
                title:
                  "Viral Chill Songs Playlist 2025 💿 | Non-Stop Trending Lofi + Bollywood Mix | Part 1",
                description:
                  "Non-Stop Chill & Trending Songs Playlist (Part 1) Featuring Lofi, Pop, Bollywood, and Soulful Hits – perfect for studying, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/W4ePFqCM9_I/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/W4ePFqCM9_I/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/W4ePFqCM9_I/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "𝐿𝒾𝓍 ",
                liveBroadcastContent: "none",
                publishTime: "2025-07-02T05:21:36Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "e_Ra0paV2ntNuSfypedU1--nDUM",
              id: {
                kind: "youtube#video",
                videoId: "ZLU4rx24024",
              },
              snippet: {
                publishedAt: "2025-06-27T05:30:02Z",
                channelId: "UCSM54qcBP60U61HOMm_SUqA",
                title:
                  "JHIM JHIM - Neha Kakkar &amp; Ekdev Limbu | Ritvik Sahore &amp; Priya P Varrier | Rajat Nagpal | Anshul Garg",
                description:
                  "Anshul Garg presents Jhim Jhim featuring Ritvik Sahore & Priya Prakash Varrier. Streaming Link ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/ZLU4rx24024/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/ZLU4rx24024/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/ZLU4rx24024/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Play DMF",
                liveBroadcastContent: "none",
                publishTime: "2025-06-27T05:30:02Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "hzj_f4118Z3CunnGmBwU38AEfdg",
              id: {
                kind: "youtube#video",
                videoId: "qfdShSZZxlg",
              },
              snippet: {
                publishedAt: "2018-07-17T11:04:57Z",
                channelId: "UCJrDMFOdv1I2k8n9oK_V21w",
                title:
                  "Tera Fitoor Lyrical - Genius | Utkarsh Sharma, Ishita Chauhan | Arijit Singh | Himesh Reshammiya",
                description:
                  "\"Unveiling the Mesmerizing Magic of 'Tera Fitoor' - A Musical Masterpiece That Will Steal Your Heart!\" Sung By Arijit Singh, Music ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/qfdShSZZxlg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/qfdShSZZxlg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/qfdShSZZxlg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Tips Official",
                liveBroadcastContent: "none",
                publishTime: "2018-07-17T11:04:57Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "V18l5nOAklj-yd0rJ5KGhGNQb2k",
              id: {
                kind: "youtube#video",
                videoId: "3u7fqWeMpCI",
              },
              snippet: {
                publishedAt: "2024-11-12T16:32:26Z",
                channelId: "UCxJk-_zAPTqpNkkAWCn3xCQ",
                title:
                  "MIND OFF MASHUP NIGHT 🌃🌃 SONG #jenekeliyehamjitetha #voiceeffects #trending #tshirt #song",
                description:
                  "MIND OFF MASHUP NIGHT SONG #jenekeliyehamjitetha #voiceeffects #trending #tshirt #song.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/3u7fqWeMpCI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/3u7fqWeMpCI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/3u7fqWeMpCI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: " vlogs channel ",
                liveBroadcastContent: "none",
                publishTime: "2024-11-12T16:32:26Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "LpkqVYe8tpGmXu2mc-hJgako6a0",
              id: {
                kind: "youtube#video",
                videoId: "pbgQc_6HCNE",
              },
              snippet: {
                publishedAt: "2025-08-01T05:30:06Z",
                channelId: "UC8Y3votUz8aBhod7TIuSxLw",
                title:
                  "Viral Chill Songs Playlist 2025 💿 | Non-Stop Trending Lofi + Bollywood Mix | Part 3",
                description:
                  "Non-Stop Chill & Trending Songs Playlist (Part 3) Featuring Lofi, Pop, Bollywood, and Soulful Hits – perfect for studying, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/pbgQc_6HCNE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/pbgQc_6HCNE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/pbgQc_6HCNE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "𝐿𝒾𝓍 ",
                liveBroadcastContent: "none",
                publishTime: "2025-08-01T05:30:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "UkcJ5G1Wt_sWdiLiISEyLXfACcU",
              id: {
                kind: "youtube#video",
                videoId: "bzLVGjWdLEE",
              },
              snippet: {
                publishedAt: "2025-10-22T02:15:01Z",
                channelId: "UCxnL0FZf5SSVLm37yHZS-kQ",
                title:
                  "Dj Remix Hindi | #Song 💕Haad Bass vibration | #DJ Drk Night King💕 | #JBL dj Sound New Tranding Song",
                description:
                  "DJ Remix Hindi Song#Hard Bass DJ Song#Bass Boosted Hindi Remix#DJ Drk Night King Remix#JBL Bass Test Song#Trending ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/bzLVGjWdLEE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/bzLVGjWdLEE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/bzLVGjWdLEE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Dj Sarvam Music",
                liveBroadcastContent: "none",
                publishTime: "2025-10-22T02:15:01Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "Ht2_3kD3QI8vRCoHC-Tfs8SkgNI",
              id: {
                kind: "youtube#video",
                videoId: "kcQC0VuxtDg",
              },
              snippet: {
                publishedAt: "2025-05-04T12:01:12Z",
                channelId: "UC40WmHQL-Gp4nr44sA0gJDw",
                title:
                  "Just feel the songs 🙌🏻🎀 | Non stop treanding songs Playlist ( part - 1 ) | @Khushbu_1723",
                description:
                  "Please.... LIKE || SUBSCRIBE || Share ✌  . Just feel the songs | Non stop treanding songs ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/kcQC0VuxtDg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/kcQC0VuxtDg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/kcQC0VuxtDg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Khushbu",
                liveBroadcastContent: "none",
                publishTime: "2025-05-04T12:01:12Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "4naE4xJs_NtjesrURoWlrDnF0tw",
              id: {
                kind: "youtube#video",
                videoId: "UrU_xl8F7H8",
              },
              snippet: {
                publishedAt: "2023-07-21T02:00:09Z",
                channelId: "UCuJjY3jc8desV2QxI5H-rDg",
                title:
                  "AFGHAN JALEBI - (SLOWED+REVERB) || INSTAGRAM VIRAL SONG 2023",
                description:
                  "fellmusicvibes #slowed #slowed #instagramviralsong #instagramviralsong #sadsonglofi #sadsonglofi #reverb #reverb #lofimusic ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/UrU_xl8F7H8/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/UrU_xl8F7H8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/UrU_xl8F7H8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "FELL MUSIC VIBES",
                liveBroadcastContent: "none",
                publishTime: "2023-07-21T02:00:09Z",
              },
            },
          ],
        },
        {
          kind: "youtube#searchListResponse",
          etag: "jWP-sLvXd7585CvXldG3LMWX7IA",
          nextPageToken: "CBkQAA",
          regionCode: "BD",
          pageInfo: {
            totalResults: 1000000,
            resultsPerPage: 25,
          },
          items: [
            {
              kind: "youtube#searchResult",
              etag: "hDHLLPKCpZHpA0ShqZQCXvg3fgs",
              id: {
                kind: "youtube#video",
                videoId: "hxMNYkLN7tI",
              },
              snippet: {
                publishedAt: "2024-10-24T11:30:37Z",
                channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
                title:
                  "Aaj Ki Raat -Full Song |Stree 2|Tamannaah Bhatia|Rajkummar Rao|Sachin-Jigar|Madhubanti|Divya|Amitabh",
                description:
                  "Get ready to groove with the full song of Aaj Ki Raat from Stree 2! Starring Tamannaah Bhatia and her electrifying dance moves, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/hxMNYkLN7tI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/hxMNYkLN7tI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/hxMNYkLN7tI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Saregama Music",
                liveBroadcastContent: "none",
                publishTime: "2024-10-24T11:30:37Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "BvHtd_awUhZ52f-uOUcmn4ozUZM",
              id: {
                kind: "youtube#video",
                videoId: "MQoColHyGzQ",
              },
              snippet: {
                publishedAt: "2025-09-05T07:00:06Z",
                channelId: "UCbTLwN10NoCU4WDzLf1JMOA",
                title:
                  "Saiyaara Full Song | Ahaan Panday, Aneet Padda | Tanishk Bagchi, Faheem A, Arslan N | Irshad Kamil",
                description:
                  "All the love, all the feels Here's the Saiyaara Full Song to touch your hearts, all over again ❤️ ▻ Subscribe Now: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/MQoColHyGzQ/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/MQoColHyGzQ/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/MQoColHyGzQ/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "YRF",
                liveBroadcastContent: "none",
                publishTime: "2025-09-05T07:00:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "3Y2-2vkv-dhacM2EKXWOy0tvD9c",
              id: {
                kind: "youtube#video",
                videoId: "bKZTnnFU9HA",
              },
              snippet: {
                publishedAt: "2023-10-03T06:00:20Z",
                channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
                title:
                  "Kuch Kuch Hota Hai: Title Track | 4K Video | Shah Rukh Khan| Kajol| Rani| Alka Yagnik |Udit Narayan",
                description:
                  "Kuch Kuch Hota Hai: Title Track - A classic Bollywood love song that continues to touch hearts with its memorable tune and ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/bKZTnnFU9HA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/bKZTnnFU9HA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/bKZTnnFU9HA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sony Music India",
                liveBroadcastContent: "none",
                publishTime: "2023-10-03T06:00:20Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "jyA7z07bnUdA6u-ZYQW_jWkf-cc",
              id: {
                kind: "youtube#video",
                videoId: "qoq8B8ThgEM",
              },
              snippet: {
                publishedAt: "2012-01-19T07:34:47Z",
                channelId: "UCbTLwN10NoCU4WDzLf1JMOA",
                title:
                  "Tujh Mein Rab Dikhta Hai Song | Rab Ne Bana Di Jodi | Shah Rukh Khan, Anushka Sharma | Roop Kumar",
                description:
                  "Trending Moments: 00:18 - Tu Hi Toh Jannat Meri 00:42 - Tujh Mein Rab Dikhta Hai, Yaara Main Kya Karoon 01:33 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/qoq8B8ThgEM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/qoq8B8ThgEM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/qoq8B8ThgEM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "YRF",
                liveBroadcastContent: "none",
                publishTime: "2012-01-19T07:34:47Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "FCeU7P0JW2tBS02h79VxdHIf3yE",
              id: {
                kind: "youtube#video",
                videoId: "Fson_YzOo20",
              },
              snippet: {
                publishedAt: "2020-03-11T07:33:46Z",
                channelId: "UCwfGF_65vo5qo92aoi01o6g",
                title:
                  "Lagu India viral Terbaru 2020 bikin baper VAASTE MANTAP ABIS360p",
                description:
                  "perdanaofficial#bikinbaper Busines:Hasalvin548@gmail.com Fb :teukuhas Ig :teuku_has9333 Wasp:+601128174498 Hubungi ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Fson_YzOo20/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Fson_YzOo20/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Fson_YzOo20/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Perdana Official",
                liveBroadcastContent: "none",
                publishTime: "2020-03-11T07:33:46Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "_GvPC12h3NanOkkDJCXvJB6C3Yo",
              id: {
                kind: "youtube#video",
                videoId: "wXbkIKUsKII",
              },
              snippet: {
                publishedAt: "2023-02-06T12:30:20Z",
                channelId: "UChu0g9l7H1D7sjJHcjskfbw",
                title:
                  "Deewana Hai Ye Mann | Chori Chori Chupke Chupke(2001) Song | Salman Khan | Rani Mukherjee #4kvideo",
                description:
                  "Deewana Hai Ye Mann | Chori Chori Chupke Chupke(2001) Song | Salman Khan | Rani Mukherjee #4kvideo Preity Zinta Movie: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/wXbkIKUsKII/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/wXbkIKUsKII/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/wXbkIKUsKII/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "NH Bollywood Songs ",
                liveBroadcastContent: "none",
                publishTime: "2023-02-06T12:30:20Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "6LOfj4cNVEuAGVNxDP66IMpEY9w",
              id: {
                kind: "youtube#video",
                videoId: "OdL3O67C-Bc",
              },
              snippet: {
                publishedAt: "2018-07-06T05:50:37Z",
                channelId: "UCycGbf-uml8tlq7I4P8jX1Q",
                title: "Krrish   Bluray Video Song   1080p HD",
                description:
                  "most favorite song movie:krish singer: sonu nigam original video credit goes to : song: pyaar ki ek kahani movie: Krish Singer: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/OdL3O67C-Bc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/OdL3O67C-Bc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/OdL3O67C-Bc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Ks Nayon Official",
                liveBroadcastContent: "none",
                publishTime: "2018-07-06T05:50:37Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "o5oxK05-hUl0I9S1nA_85ITLRvE",
              id: {
                kind: "youtube#video",
                videoId: "fsiPzT50ZiM",
              },
              snippet: {
                publishedAt: "2015-06-23T16:19:30Z",
                channelId: "UCDxKh1gFWeYsqePvgVzmPoQ",
                title: "Tum Hi Ho",
                description:
                  "Provided to YouTube by Super Cassettes Industries Private Limited Tum Hi Ho · Arijit Singh · Mithoon · Mithoon Aashiqui 2 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/fsiPzT50ZiM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/fsiPzT50ZiM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/fsiPzT50ZiM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Arijit Singh - Topic",
                liveBroadcastContent: "none",
                publishTime: "2015-06-23T16:19:30Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "CMYdo0rPPy60at55GfPtMtgLI94",
              id: {
                kind: "youtube#video",
                videoId: "1FZDZnBz7n0",
              },
              snippet: {
                publishedAt: "2025-10-21T14:15:06Z",
                channelId: "UCJrV0QP8z_uEXElePqRLTrQ",
                title:
                  "Kobe Tumi Asibe Kache | Official Music Video 2025 | Bangla Romantic Song | Ghumonto",
                description:
                  "Presenting the official romantic music video “Kobe Tumi Asibe Kache” — a soulful Bangla love song that will touch your heart.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/1FZDZnBz7n0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/1FZDZnBz7n0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/1FZDZnBz7n0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Ghumonto Officials ",
                liveBroadcastContent: "none",
                publishTime: "2025-10-21T14:15:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "4qmeI5Kqj5X1NoO3F9mwRjM819s",
              id: {
                kind: "youtube#video",
                videoId: "b54oABKKV7E",
              },
              snippet: {
                publishedAt: "2022-05-25T05:40:51Z",
                channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
                title:
                  "Bole Chudiyan | K3G | Amitabh, Shah Rukh, Kajol, Kareena, Hrithik | Udit Narayan | Karan Johar | 4K",
                description:
                  "Listen & Download 'Bole Chudiyan': https://SMI.lnk.to/BoleChudiyan Bole Chudiyan - One of the most iconic tracks and people's ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/b54oABKKV7E/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/b54oABKKV7E/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/b54oABKKV7E/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sony Music India",
                liveBroadcastContent: "none",
                publishTime: "2022-05-25T05:40:51Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "AEi-p__kI4_zJTwSVdklsGXF9GY",
              id: {
                kind: "youtube#video",
                videoId: "exAZLbjBGsk",
              },
              snippet: {
                publishedAt: "2023-06-12T05:16:02Z",
                channelId: "UCZxyiTTb8XIuiay_opwTKfg",
                title:
                  "Akshar Iss Duniya Mein ((Jhankar)) Dhadkan | Akshay Kumar, Shilpa Shetty | Sunil Shetty, Mahima C",
                description: "",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/exAZLbjBGsk/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/exAZLbjBGsk/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/exAZLbjBGsk/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Nikki",
                liveBroadcastContent: "none",
                publishTime: "2023-06-12T05:16:02Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "nzGWxf_LX_RMaYbxv03DI03OtkA",
              id: {
                kind: "youtube#video",
                videoId: "RIofkrOFFSw",
              },
              snippet: {
                publishedAt: "2021-05-07T06:30:06Z",
                channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
                title:
                  "Deewani Mastani - Video Song | Bajirao Mastani | Ranveer Singh, Deepika Padukone &amp; Priyanka Chopra",
                description:
                  "Experience the beautiful music, the grand setting, Deepika Padukone's graceful moves and the National Award winning ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/RIofkrOFFSw/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/RIofkrOFFSw/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/RIofkrOFFSw/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sony Music India",
                liveBroadcastContent: "none",
                publishTime: "2021-05-07T06:30:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "uunYL3o9o100ls0tUvtbuVqzp_o",
              id: {
                kind: "youtube#video",
                videoId: "5Eqb_-j3FDA",
              },
              snippet: {
                publishedAt: "2022-02-07T12:00:05Z",
                channelId: "UCM1VesJtJ9vTXcMLLr_FfdQ",
                title:
                  "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill",
                description:
                  "Let's transcend boundaries and bridge distances through compassion, love and identity. #Pasoori #RealMagic ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/5Eqb_-j3FDA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/5Eqb_-j3FDA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/5Eqb_-j3FDA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Coke Studio Pakistan",
                liveBroadcastContent: "none",
                publishTime: "2022-02-07T12:00:05Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "WmTuEGKGnI4MMaBwyu2ss6TU4BA",
              id: {
                kind: "youtube#video",
                videoId: "TmRgK-pXH9c",
              },
              snippet: {
                publishedAt: "2018-05-23T05:31:53Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "Official Video: Humnava Mere Song | Jubin Nautiyal | Manoj Muntashir | Rocky - Shiv | Bhushan Kumar",
                description:
                  'Gulshan Kumar and T-Series present Bhushan Kumar\'s official music video of the song "Humnava Mere". Featuring Jubin ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/TmRgK-pXH9c/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/TmRgK-pXH9c/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/TmRgK-pXH9c/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2018-05-23T05:31:53Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "6BHKcjpYgK8hY701eE_mEYXMxoo",
              id: {
                kind: "youtube#video",
                videoId: "BBAyRBTfsOU",
              },
              snippet: {
                publishedAt: "2019-04-06T11:56:37Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "Vaaste Song: Dhvani Bhanushali, Tanishk Bagchi | Nikhil D&#39;Souza | Bhushan Kumar | Radhika R, Vinay S",
                description:
                  'Gulshan Kumar Presents latest Hindi Video Song of 2019 Bhushan Kumar\'s " Vaaste" In the voice of " Dhvani Bhanushali & Nikhil ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/BBAyRBTfsOU/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/BBAyRBTfsOU/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/BBAyRBTfsOU/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2019-04-06T11:56:37Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "chiqbuF6Z9ON1cjFjzPBHZA0gmM",
              id: {
                kind: "youtube#video",
                videoId: "3fpP2dM02tM",
              },
              snippet: {
                publishedAt: "2022-03-10T05:30:11Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "Kuch Baatein Song | Payal Dev, Jubin Nautiyal | Kunaal Vermaa | Ashish Panda | Gurmeet C, Bhushan K",
                description:
                  'Presenting #KuchBaatein song. Gulshan Kumar & T-Series presents Bhushan Kumar\'s "Kuch Baatein" featuring Gurmeet ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/3fpP2dM02tM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/3fpP2dM02tM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/3fpP2dM02tM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2022-03-10T05:30:11Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "k3Y-9fp-7dpfnRXj5qIJ-VMI71c",
              id: {
                kind: "youtube#video",
                videoId: "D4N3KIlEYpk",
              },
              snippet: {
                publishedAt: "2023-05-11T10:18:56Z",
                channelId: "UCbKOgklgfsaI2FDaJ4S_WDw",
                title:
                  "Aaye Ho Meri Zindagi Mein Tum Bahar Banke | Udit Narayan | Hindi Love Song",
                description:
                  "Song Credits: Song: Aaye Ho Meri Zindagi Mein Tum Bahar Banke Movie: Raja Hindustani Singer(s):Udit Narayan Music Director: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/D4N3KIlEYpk/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/D4N3KIlEYpk/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/D4N3KIlEYpk/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Hot Hits Hindi",
                liveBroadcastContent: "none",
                publishTime: "2023-05-11T10:18:56Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "K0aC59xlm-C0fDUk9Mic2vi07ic",
              id: {
                kind: "youtube#video",
                videoId: "ZgqlTakrWUo",
              },
              snippet: {
                publishedAt: "2025-01-07T11:45:03Z",
                channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
                title:
                  "Deewana Hai Dekho - Lyrical Video | K3G | Kareena Kapoor, Hrithik Roshan | Alka Yagnik, Sonu Nigam",
                description:
                  'Enjoy the soulful lyrical video of "Deewana Hai Dekho" from the iconic Bollywood film Kabhi Khushi Kabhie Gham (K3G).',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/ZgqlTakrWUo/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/ZgqlTakrWUo/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/ZgqlTakrWUo/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sony Music India",
                liveBroadcastContent: "none",
                publishTime: "2025-01-07T11:45:03Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "rmyzYHsGFbxtVm6HNjxyLBgG5uA",
              id: {
                kind: "youtube#video",
                videoId: "iTIJMy5Bc7o",
              },
              snippet: {
                publishedAt: "2024-07-11T02:30:30Z",
                channelId: "UCBs6vHPbfJnNBDrgqswRxug",
                title:
                  "Barsaat Ke Mausam Mein | Naajayaz | Naseeruddin Shah | Kumar Sanu | Roop Kumar Rathod | Hindi Song",
                description:
                  "Barsaat Ke Mausam Mein | Naajayaz | Naseeruddin Shah | Kumar Sanu | Roop Kumar Rathod | Hindi Song Song Credits: Song: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/iTIJMy5Bc7o/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/iTIJMy5Bc7o/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/iTIJMy5Bc7o/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Bollywood Gaane",
                liveBroadcastContent: "none",
                publishTime: "2024-07-11T02:30:30Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "8Q7ma-pByGaHD5Gaqy2TF0QnWXQ",
              id: {
                kind: "youtube#video",
                videoId: "oAVhUAaVCVQ",
              },
              snippet: {
                publishedAt: "2018-10-14T10:30:00Z",
                channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
                title:
                  "Lyrical: Chammak Challo | Ra One | ShahRukh Khan | Kareena Kapoor",
                description:
                  "Presenting the lyrical video of the song Chammak Chhalo from the Bollywood movie Ra.One.The movie features Shahrukh Khan, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/oAVhUAaVCVQ/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/oAVhUAaVCVQ/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/oAVhUAaVCVQ/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "T-Series",
                liveBroadcastContent: "none",
                publishTime: "2018-10-14T10:30:00Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "KnnjqJ65JVqpelkEMuJfR6YehAE",
              id: {
                kind: "youtube#video",
                videoId: "iKumRuF6JiI",
              },
              snippet: {
                publishedAt: "2024-05-16T04:34:11Z",
                channelId: "UCfoTEWfb0e4RBDJskb8zezA",
                title:
                  "Dil Ne Ye Kaha Hai Dil Se (Love Song) Alka Y, Kumar Sanu | Dhadkan | Akshay Kumar, Shilpa Shetty",
                description:
                  "Dil Ne Yeh Kaha (Love Song) Alka Y, Kumar S, Udit N | Dhadkan | Akshay Kumar, Sunil Shetty, Shilpa SMovie/album: Dhadkan ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/iKumRuF6JiI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/iKumRuF6JiI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/iKumRuF6JiI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Aman Sikka",
                liveBroadcastContent: "none",
                publishTime: "2024-05-16T04:34:11Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "nt1qePImSGucamlRo_ZpUVU-MU0",
              id: {
                kind: "youtube#video",
                videoId: "wzBcx-UKUxo",
              },
              snippet: {
                publishedAt: "2021-11-01T07:53:51Z",
                channelId: "UCmZBGzdvOBa1jpPOwBFcsAA",
                title:
                  "Dil Ko Karaar Aaya( Lirik dan Terjemahan Indonesia) - Neha Kakkar",
                description:
                  "Dil Ko Karaar Aaya reprise by Queen Neha Kakkar. Song : Dil Ko Karaar Aaya Singer : Neha Kakkar.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/wzBcx-UKUxo/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/wzBcx-UKUxo/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/wzBcx-UKUxo/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Sastiya 77",
                liveBroadcastContent: "none",
                publishTime: "2021-11-01T07:53:51Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "cs8Yn7hQ9GhykVuPyM5i0WRYtl8",
              id: {
                kind: "youtube#video",
                videoId: "4vSIwdj6MEU",
              },
              snippet: {
                publishedAt: "2021-08-23T07:06:43Z",
                channelId: "UCouTmUT0C2mc6mbx9SF9KEQ",
                title:
                  "Agar Tum Saath Ho | Tamasha | Lirik - Terjemahan Indonesia",
                description: "Tamasha #AgarTumSaathHo.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/4vSIwdj6MEU/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/4vSIwdj6MEU/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/4vSIwdj6MEU/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "bllydxt",
                liveBroadcastContent: "none",
                publishTime: "2021-08-23T07:06:43Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "mZyJiA4GyHzNC5TN91wBdPszR_8",
              id: {
                kind: "youtube#video",
                videoId: "WxMTI4qHR94",
              },
              snippet: {
                publishedAt: "2025-08-14T05:13:21Z",
                channelId: "UCjmCQPYnACi4Tj93EmaHdsA",
                title:
                  "Hum Tumhare Hain Sanam | Shahrukh Khan , Madhuri Dixit , Udit Narayan , Anuradha Paudwal , 90&#39;s Song",
                description:
                  "Hum Tumhare Hain Tumhare Sanam - Shahrukh Khan, Madhuri Dixit | Udit Narayan | 90s Hits Hindi Songs Credit - Song - Hum ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/WxMTI4qHR94/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/WxMTI4qHR94/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/WxMTI4qHR94/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Rooh Productions Private Limited ",
                liveBroadcastContent: "none",
                publishTime: "2025-08-14T05:13:21Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "bkyRg9Q2kjv0BSHkwVZhouiJ2DU",
              id: {
                kind: "youtube#video",
                videoId: "aEy65CdN8y8",
              },
              snippet: {
                publishedAt: "2023-07-19T08:25:41Z",
                channelId: "UCGeaxe1OUUOa8pB3P4n1TwA",
                title:
                  "Tum Chhupa Na Sakogi Main Woh Raaz Hoon | Veer-Zaara | Shah Rukh Khan, Preity Zinta | Udit Narayan",
                description:
                  "Tum Chhupa Na Sakogi Main Woh Raaz Hoon | Veer-Zaara | Shah Rukh Khan, Preity Zinta | Udit Narayan Tum Chhupa Na ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/aEy65CdN8y8/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/aEy65CdN8y8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/aEy65CdN8y8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Itz Sayani",
                liveBroadcastContent: "none",
                publishTime: "2023-07-19T08:25:41Z",
              },
            },
          ],
        },
        {
          kind: "youtube#searchListResponse",
          etag: "d8O5nKGv_WYfTbCnDE7p0IGlvXc",
          nextPageToken: "CBkQAA",
          regionCode: "BD",
          pageInfo: {
            totalResults: 1000000,
            resultsPerPage: 25,
          },
          items: [
            {
              kind: "youtube#searchResult",
              etag: "1-NaWWryrCjL75v-P46RWZ0iio8",
              id: {
                kind: "youtube#video",
                videoId: "S3CLtYgmrsA",
              },
              snippet: {
                publishedAt: "2023-12-21T21:00:11Z",
                channelId: "UC9MAhZQQd9egwWCxrwSIsJQ",
                title:
                  "Ancient Aliens: Da Vinci&#39;s MIND-BLOWING Secrets Revealed",
                description:
                  "Learn the secrets and ideas of Da Vinci in this compilation from Ancient Aliens. Watch your favorite episodes of Ancient Aliens on ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/S3CLtYgmrsA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/S3CLtYgmrsA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/S3CLtYgmrsA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "HISTORY",
                liveBroadcastContent: "none",
                publishTime: "2023-12-21T21:00:11Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "QzNj8g5FlNCx4-qehznq2NRA7z0",
              id: {
                kind: "youtube#video",
                videoId: "HlSkwgSNDfE",
              },
              snippet: {
                publishedAt: "2024-11-29T16:00:15Z",
                channelId: "UCnwY6fAhE3ePu0F2nMP-DLg",
                title:
                  "Carl Jung and the Journey of Self-Discovery | Historical Documentary | Lucasfilm",
                description:
                  "Dr. Carl Jung helped change the way we view individual personalities. Made by JAK Documentary for The Adventures of Young ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/HlSkwgSNDfE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/HlSkwgSNDfE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/HlSkwgSNDfE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Lucasfilm",
                liveBroadcastContent: "none",
                publishTime: "2024-11-29T16:00:15Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "IdO6rog1BnWGY9_r9PQxMzehelk",
              id: {
                kind: "youtube#video",
                videoId: "gsZiUjPd-LI",
              },
              snippet: {
                publishedAt: "2025-10-16T18:00:46Z",
                channelId: "UC9MAhZQQd9egwWCxrwSIsJQ",
                title: "Alien Gateways to Other Worlds | Ancient Aliens",
                description:
                  "From mysterious gateways carved into mountains to glowing doorways in the sky, explore the evidence that ancient portals may ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/gsZiUjPd-LI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/gsZiUjPd-LI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/gsZiUjPd-LI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "HISTORY",
                liveBroadcastContent: "none",
                publishTime: "2025-10-16T18:00:46Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "Q_JYdb2QOqwFuOeM-MdVrwbfgM8",
              id: {
                kind: "youtube#video",
                videoId: "gcM9TaPkn_c",
              },
              snippet: {
                publishedAt: "2023-11-01T20:45:06Z",
                channelId: "UCcJyQ5dihoKAKwk2aRi-CQw",
                title: "The Entire History of Russia",
                description:
                  "russia #history #documentary WATCH THIS AND ALL OUR VIDEOS OVER ON SPOTIFY: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/gcM9TaPkn_c/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/gcM9TaPkn_c/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/gcM9TaPkn_c/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "This Is History",
                liveBroadcastContent: "none",
                publishTime: "2023-11-01T20:45:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "QvgMxI2Kk7S5JRhbn0fXBwdxCDI",
              id: {
                kind: "youtube#video",
                videoId: "01liHYxX23Y",
              },
              snippet: {
                publishedAt: "2025-10-16T12:59:57Z",
                channelId: "UCMmaBzfCCwZ2KqaBJjkj0fw",
                title:
                  "Rise and Fall of the Medici Dynasty - Renaissance History DOCUMENTARY",
                description:
                  "Relive the Renaissance yourself in Europa Universalis V: https://play.europauniversalis.com/KingsandGenerals Kings and ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/01liHYxX23Y/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/01liHYxX23Y/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/01liHYxX23Y/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Kings and Generals",
                liveBroadcastContent: "none",
                publishTime: "2025-10-16T12:59:57Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "UXfKMtAvAUL0ACLOtKEnYzdXpGo",
              id: {
                kind: "youtube#video",
                videoId: "yqc9zX04DXs",
              },
              snippet: {
                publishedAt: "2011-04-11T14:42:40Z",
                channelId: "UCAuUUnT6oDeKwE6v1NGQxug",
                title:
                  "The history of our world in 18 minutes | David Christian | TED",
                description:
                  "Visit http://TED.com to get our entire library of TED Talks, transcripts, translations, personalized talk recommendations and more.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/yqc9zX04DXs/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/yqc9zX04DXs/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/yqc9zX04DXs/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "TED",
                liveBroadcastContent: "none",
                publishTime: "2011-04-11T14:42:40Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "rS69s70FnX4iczIsWnwrK3UvjIo",
              id: {
                kind: "youtube#video",
                videoId: "JjkTkMT_mMg",
              },
              snippet: {
                publishedAt: "2025-10-20T16:00:24Z",
                channelId: "UCW39zufHfsuGgpLviKh297Q",
                title:
                  "Wolf children in Lithuania - The forgotten orphans of World War Two | DW Documentary",
                description:
                  "Luise was four when she fled Königsberg for Lithuania. She was given a Lithuanian name and forbidden from speaking German.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/JjkTkMT_mMg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/JjkTkMT_mMg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/JjkTkMT_mMg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "DW Documentary",
                liveBroadcastContent: "none",
                publishTime: "2025-10-20T16:00:24Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "9cr3Ydj6gWIKITiSXxcb9PQ47Wk",
              id: {
                kind: "youtube#video",
                videoId: "DKktvBfgarc",
              },
              snippet: {
                publishedAt: "2025-02-13T19:00:08Z",
                channelId: "UC9MAhZQQd9egwWCxrwSIsJQ",
                title:
                  "Mystery Behind the Lost Continent Of Mu | Ancient Aliens",
                description:
                  "Check out these shocking secrets regarding the lost continent of Mu, see more in this Ancient Aliens compilation. Watch all new ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/DKktvBfgarc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/DKktvBfgarc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/DKktvBfgarc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "HISTORY",
                liveBroadcastContent: "none",
                publishTime: "2025-02-13T19:00:08Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "Q7x1-gCmllZdDerb1r6pasCBvpU",
              id: {
                kind: "youtube#video",
                videoId: "TGkEG4weg0I",
              },
              snippet: {
                publishedAt: "2025-10-22T10:15:06Z",
                channelId: "UC1Az2P7rzZM9KWKlcDepqgw",
                title:
                  "𝐁𝐞𝐟𝐨𝐫𝐞 𝐌𝐨𝐝𝐞𝐫𝐧 𝐒𝐢𝐧𝐠𝐚𝐩𝐨𝐫𝐞: 𝐃𝐢𝐬𝐜𝐨𝐯𝐞𝐫𝐢𝐧𝐠 𝐭𝐡𝐞 𝐋𝐨𝐬𝐭 𝐂𝐢𝐯𝐢𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐓𝐞𝐦𝐚𝐬𝐞𝐤",
                description:
                  "Discover the fascinating story of Ancient Singapore, once known as Temasek, a thriving maritime hub in Southeast Asia.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/TGkEG4weg0I/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/TGkEG4weg0I/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/TGkEG4weg0I/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Troy Allan Magpantay",
                liveBroadcastContent: "none",
                publishTime: "2025-10-22T10:15:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "U2YcSWPxPvr66ZLOgBXoJ2Aw53k",
              id: {
                kind: "youtube#video",
                videoId: "X1w0BkSQcRw",
              },
              snippet: {
                publishedAt: "2023-11-12T10:45:09Z",
                channelId: "UCzw4txvaybJcntH1FgX5eDA",
                title: "How did Palestine get its Name? (Documentary)",
                description:
                  "If you enjoy my work, please consider supporting me with a cup of coffee! Every contribution helps me bring you more content, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/X1w0BkSQcRw/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/X1w0BkSQcRw/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/X1w0BkSQcRw/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "History Leaks",
                liveBroadcastContent: "none",
                publishTime: "2023-11-12T10:45:09Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "dCtlqX8ogWucRVi9-T_NzsORmvk",
              id: {
                kind: "youtube#video",
                videoId: "__BaaMfiD0Q",
              },
              snippet: {
                publishedAt: "2020-05-08T16:00:19Z",
                channelId: "UC7o-UFkoAPCoKxpKOfrs4zQ",
                title:
                  "Timeline of World History | Major Time Periods &amp; Ages",
                description:
                  "Buy the poster: https://usefulcharts.com/products/timeline-of-world-history CREDITS: Chart: Matt Baker Script/Narration: Matt Baker ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/__BaaMfiD0Q/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/__BaaMfiD0Q/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/__BaaMfiD0Q/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "UsefulCharts",
                liveBroadcastContent: "none",
                publishTime: "2020-05-08T16:00:19Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "sKHrQ2N_3VC4ROBboqXfKvd-Svk",
              id: {
                kind: "youtube#video",
                videoId: "7qype7X0zJ8",
              },
              snippet: {
                publishedAt: "2024-09-07T14:00:07Z",
                channelId: "UCzgWZmqmKpmsr4oPWITusKA",
                title: "The Brutal History of the Roman Colosseum",
                description:
                  "Explore the brutal history of the Roman Colosseum in this documentary that takes you through the world of gladiators and warriors ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/7qype7X0zJ8/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/7qype7X0zJ8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/7qype7X0zJ8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Beyond Facts",
                liveBroadcastContent: "none",
                publishTime: "2024-09-07T14:00:07Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "GfNm29YnXzCxhuDbW_xP4demcMQ",
              id: {
                kind: "youtube#video",
                videoId: "m19F4IHTVGc",
              },
              snippet: {
                publishedAt: "2021-07-30T07:44:45Z",
                channelId: "UC7JrMLRDJLUh5BPBYykMcrQ",
                title: "History of Israel-Palestine Conflict",
                description:
                  "This video presents the History of Israel-Palestine conflict that rooted a few thousand years ago. Chapter: 00:00 Introduction 00:42 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/m19F4IHTVGc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/m19F4IHTVGc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/m19F4IHTVGc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "History on Maps",
                liveBroadcastContent: "none",
                publishTime: "2021-07-30T07:44:45Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "KC7_ZCuYHjX0quGf-oSQ-uuGdQU",
              id: {
                kind: "youtube#video",
                videoId: "1wEenXmeRHg",
              },
              snippet: {
                publishedAt: "2024-07-30T18:00:00Z",
                channelId: "UC9MAhZQQd9egwWCxrwSIsJQ",
                title:
                  "History&#39;s Greatest Mysteries: The Salem Witch Trials Cause Darkness and Death (Season 5)",
                description:
                  'In 1692, fear rips through the small town of Salem, Massachusetts. See more in this clip from Season 5, Episode 15, "The Salem ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/1wEenXmeRHg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/1wEenXmeRHg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/1wEenXmeRHg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "HISTORY",
                liveBroadcastContent: "none",
                publishTime: "2024-07-30T18:00:00Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "-_PJ0YbeLfL72ucp_IPzraW5Q44",
              id: {
                kind: "youtube#video",
                videoId: "-YGzHxsqIec",
              },
              snippet: {
                publishedAt: "2024-11-12T13:30:00Z",
                channelId: "UCgGXG4BEI3SVHrJJAIascjg",
                title:
                  "The Dark Side of Dubai - The Dubai They Don&#39;t Want You to See or Know | Full Documentary",
                description:
                  "Many see DUBAI as the “capital of the future”, but there is a side that few know about. A HIDDEN side, where gold crumbles into ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/-YGzHxsqIec/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/-YGzHxsqIec/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/-YGzHxsqIec/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Bello Mundo - EN",
                liveBroadcastContent: "none",
                publishTime: "2024-11-12T13:30:00Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "14ltsRzQVksyR2e4cEBb2uWBLjY",
              id: {
                kind: "youtube#video",
                videoId: "iNni60n2qIE",
              },
              snippet: {
                publishedAt: "2023-12-24T19:51:56Z",
                channelId: "UCuCuEKq1xuRA0dFQj1qg9-Q",
                title: "THE HISTORY OF CALIFORNIA - in 13 Minutes",
                description:
                  "THE HISTORY OF CALIFORNIA - in 13 Minutes The first known European to reach the gorgeous coasts of California was Juan ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/iNni60n2qIE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/iNni60n2qIE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/iNni60n2qIE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Knowledgia",
                liveBroadcastContent: "none",
                publishTime: "2023-12-24T19:51:56Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "AcKLmhJIZmqGjfjac-nzPUXzVlg",
              id: {
                kind: "youtube#video",
                videoId: "fhNXF2rsoFM",
              },
              snippet: {
                publishedAt: "2024-10-27T15:00:49Z",
                channelId: "UCxAt0KkZZUxgG3yxl-WDM2A",
                title:
                  "The True Origin Of The Jews | Jewish History Documentary",
                description:
                  "The True Origin Of The Jews | Jewish History Documentary Where did the Jewish people come from, and how did a small, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/fhNXF2rsoFM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/fhNXF2rsoFM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/fhNXF2rsoFM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Secret Origins",
                liveBroadcastContent: "none",
                publishTime: "2024-10-27T15:00:49Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "YiWcpnfPk1R7KDN7i2cErLDFkhI",
              id: {
                kind: "youtube#video",
                videoId: "SGgJL-5Y74k",
              },
              snippet: {
                publishedAt: "2025-04-25T15:00:46Z",
                channelId: "UCzgWZmqmKpmsr4oPWITusKA",
                title: "The Brutal History of Venice",
                description:
                  "Discover the remarkable story of Venice, a city unlike any other. Built on a lagoon, Venice rose from humble beginnings to ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/SGgJL-5Y74k/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/SGgJL-5Y74k/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/SGgJL-5Y74k/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Beyond Facts",
                liveBroadcastContent: "none",
                publishTime: "2025-04-25T15:00:46Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "HEi9r38fFNi0Ij9xdRcsztNzqwQ",
              id: {
                kind: "youtube#video",
                videoId: "Yw-OxbtF1iY",
              },
              snippet: {
                publishedAt: "2018-07-28T15:15:14Z",
                channelId: "UC22BdTgxefuvUivrjesETjg",
                title:
                  "Ten Minute History - The Spanish Civil War and Francisco Franco (Short Documentary)",
                description:
                  "Twitter: https://twitter.com/Tenminhistory Patreon: https://www.patreon.com/user?u=4973164 This episode of Ten Minute History ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Yw-OxbtF1iY/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Yw-OxbtF1iY/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Yw-OxbtF1iY/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "History Matters",
                liveBroadcastContent: "none",
                publishTime: "2018-07-28T15:15:14Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "_7ibwBTRxiXWk04MvwGliufBvwA",
              id: {
                kind: "youtube#video",
                videoId: "Xx69bfEALeU",
              },
              snippet: {
                publishedAt: "2025-10-13T13:00:06Z",
                channelId: "UC6kgsQlGa88jaNxdtc4rp4w",
                title:
                  "The Battle That Stopped an Empire — and Saved Europe | History Documentary",
                description:
                  "The Battle That Stopped an Empire — and Saved Europe | History Documentary The Hammer's Gamble: The Battle That Saved ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Xx69bfEALeU/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Xx69bfEALeU/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Xx69bfEALeU/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Epic Battles History",
                liveBroadcastContent: "none",
                publishTime: "2025-10-13T13:00:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "-A2UHQEHSY5xPVDOBSqgIWd2DqQ",
              id: {
                kind: "youtube#video",
                videoId: "Mh5LY4Mz15o",
              },
              snippet: {
                publishedAt: "2016-02-02T22:23:45Z",
                channelId: "UCq6aw03lNILzV96UvEAASfQ",
                title: "history of japan",
                description:
                  "http://billwurtz.com patreon: http://patreon.com/billwurtz spotify: https://play.spotify.com/artist/78cT0dM5Ivm722EP2sgfDh itunes: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Mh5LY4Mz15o/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Mh5LY4Mz15o/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Mh5LY4Mz15o/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "bill wurtz",
                liveBroadcastContent: "none",
                publishTime: "2016-02-02T22:23:45Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "pGtgon00zQ9z7mpXs3Vs2K-w244",
              id: {
                kind: "youtube#video",
                videoId: "zAmwrI7-8kc",
              },
              snippet: {
                publishedAt: "2025-07-11T13:02:04Z",
                channelId: "UCUcyEsEjhPEDf69RRVhRh4A",
                title: "Why did the US Enter WW1? (Documentary)",
                description:
                  "Support us and get 40% off Nebula: https://go.nebula.tv/the-great-war What Rhineland 45: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/zAmwrI7-8kc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/zAmwrI7-8kc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/zAmwrI7-8kc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "The Great War",
                liveBroadcastContent: "none",
                publishTime: "2025-07-11T13:02:04Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "RUalYCAM8NIqYNR3KviV9Ngge8w",
              id: {
                kind: "youtube#video",
                videoId: "Vo_gOkDJK7w",
              },
              snippet: {
                publishedAt: "2025-05-08T09:10:06Z",
                channelId: "UCnUXk-zV5St8aA4GWbeK-EQ",
                title:
                  "The Rise and Fall of Nazism: A Comprehensive Historical Documentary / Bangla Documentary",
                description:
                  "The Rise and Fall of Nazism: A Comprehensive Historical Documentary ** **   About This Video:** This documentary presents ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Vo_gOkDJK7w/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Vo_gOkDJK7w/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Vo_gOkDJK7w/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "The history And Documentary",
                liveBroadcastContent: "none",
                publishTime: "2025-05-08T09:10:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "XE5XXC888Tv7HQJosbcpqicTdm4",
              id: {
                kind: "youtube#video",
                videoId: "VD-5DAbP0Sg",
              },
              snippet: {
                publishedAt: "2025-09-22T14:05:06Z",
                channelId: "UCxAxjBk804tIVuKuJzS9UZQ",
                title:
                  "The UNBELIEVABLE Size of Ancient Persian Empire!:#historydocumentary #history #documentary #persian",
                description:
                  "Subscribe for more⤵️ https://www.youtube.com/channel/UCxAxjBk804tIVuKuJzS9UZQ?sub_confirmation=1 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/VD-5DAbP0Sg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/VD-5DAbP0Sg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/VD-5DAbP0Sg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Voices from History",
                liveBroadcastContent: "none",
                publishTime: "2025-09-22T14:05:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "-LNlcL-Ka5yqbdEzUAHb8tivw5I",
              id: {
                kind: "youtube#video",
                videoId: "MDN-DtJMs4Y",
              },
              snippet: {
                publishedAt: "2022-03-21T18:00:17Z",
                channelId: "UCZwU2G-KVl-P-O-B35chZOQ",
                title:
                  "A Brief History Of Ukraine (And Why Russia Wants To Control It)",
                description:
                  "A Brief History Of Ukraine (And Why Russia Wants To Control It) In this animated video, historian Matt Lewis tells the story of ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/MDN-DtJMs4Y/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/MDN-DtJMs4Y/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/MDN-DtJMs4Y/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "History Hit",
                liveBroadcastContent: "none",
                publishTime: "2022-03-21T18:00:17Z",
              },
            },
          ],
        },
        {
          kind: "youtube#searchListResponse",
          etag: "RsFwBJQ1t8owdfHie96_YYLH2n0",
          nextPageToken: "CBkQAA",
          regionCode: "BD",
          pageInfo: {
            totalResults: 1000000,
            resultsPerPage: 25,
          },
          items: [
            {
              kind: "youtube#searchResult",
              etag: "bOvkFob11w98rO0afYjAfkKv574",
              id: {
                kind: "youtube#video",
                videoId: "Vqwnsm8ZVsE",
              },
              snippet: {
                publishedAt: "2024-01-28T02:15:01Z",
                channelId: "UCv3y_7vIjp_vcRF7DwVEHyA",
                title:
                  "MUSLIM ECONOMIES EXPLAINED: Complete Guide to Economic Growth &amp; Key Sectors 2025",
                description:
                  "MUSLIM ECONOMIES EXPLAINED: Complete Guide to Economic Growth & Key Sectors 2025 Discover the fascinating world of ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Vqwnsm8ZVsE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Vqwnsm8ZVsE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Vqwnsm8ZVsE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "New Era Nexus",
                liveBroadcastContent: "none",
                publishTime: "2024-01-28T02:15:01Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "RpcgMqjoD4kb_9fDO_AXbio1Ah4",
              id: {
                kind: "youtube#video",
                videoId: "kGNOsktCky0",
              },
              snippet: {
                publishedAt: "2024-09-24T21:36:56Z",
                channelId: "UCk9pkhny3bi9Te9bWWTxyUg",
                title: "Why are Muslim Countries Doomed to Poverty?",
                description:
                  "Why are Muslim Countries Doomed to Poverty? In this video, we explore the complex relationship between Islam and economics, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/kGNOsktCky0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/kGNOsktCky0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/kGNOsktCky0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Simple Economics",
                liveBroadcastContent: "none",
                publishTime: "2024-09-24T21:36:56Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "psVb4CIfWdXKVaZ44OMgy8dOi9A",
              id: {
                kind: "youtube#video",
                videoId: "9-ZxW_j1hGE",
              },
              snippet: {
                publishedAt: "2024-02-05T14:45:01Z",
                channelId: "UCbEEaSVO9dqhnG_SzMGj_yQ",
                title: "Why Aren’t Muslim Countries Wealthy?",
                description:
                  'Explore the fascinating world of the Muslim economy in our latest video on "Why Aren\'t Muslim Countries Wealthy?". Unravel the ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/9-ZxW_j1hGE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/9-ZxW_j1hGE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/9-ZxW_j1hGE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "TruGeo",
                liveBroadcastContent: "none",
                publishTime: "2024-02-05T14:45:01Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "Le_RKu6PGmbpwwvoslNNF-IrJ6E",
              id: {
                kind: "youtube#video",
                videoId: "CCb6uFBjkYY",
              },
              snippet: {
                publishedAt: "2017-11-27T03:46:13Z",
                channelId: "UCSuOWKAIvix-w6cPu0bUdKw",
                title:
                  "Wisdom behind Prohibition of Riba (interest) -  Case study GFC | Almir Colan",
                description:
                  "One of the miracles of Islam are the rules of riba (interest, usury). Many students who for the first-time study these rules think they ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/CCb6uFBjkYY/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/CCb6uFBjkYY/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/CCb6uFBjkYY/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Almir Colan",
                liveBroadcastContent: "none",
                publishTime: "2017-11-27T03:46:13Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "X4bj7Ugs6gdjKgd0km-vMbzOPLk",
              id: {
                kind: "youtube#video",
                videoId: "obHtl0Wozb0",
              },
              snippet: {
                publishedAt: "2025-05-22T10:43:08Z",
                channelId: "UC49ZwyBY68wjTXwjfJgh7Fg",
                title:
                  "Why Are Many Muslim Countries Persistently Poor? The Hidden Economic Truth",
                description:
                  "Why are some Muslim countries thriving while others remain trapped in poverty? In this video, ECO pocket explores the vast ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/obHtl0Wozb0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/obHtl0Wozb0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/obHtl0Wozb0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "World in your pocket",
                liveBroadcastContent: "none",
                publishTime: "2025-05-22T10:43:08Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "zZt7adKvy0vZJ704_HtsIfwtsRo",
              id: {
                kind: "youtube#video",
                videoId: "h4qpuGNtiNI",
              },
              snippet: {
                publishedAt: "2025-07-08T20:46:30Z",
                channelId: "UCOoVPNRaO8CJMCewfTp6jVQ",
                title: "Why So Many Muslim Countries Are Poor Today?",
                description:
                  "islamiccountries #economiccollapse #islamicfinance #theblackbookeconomist Why are Muslim countries becoming poor today, ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/h4qpuGNtiNI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/h4qpuGNtiNI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/h4qpuGNtiNI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "The Blackbook Economist",
                liveBroadcastContent: "none",
                publishTime: "2025-07-08T20:46:30Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "Np6t5IcL865sNFGIsZpUVjh5soA",
              id: {
                kind: "youtube#video",
                videoId: "3j9BvzVhiz0",
              },
              snippet: {
                publishedAt: "2025-08-25T04:00:04Z",
                channelId: "UCUBBbp25iNrpbWEl2desYMg",
                title:
                  "The Economic Power of Muslim Countries vs Israel | Resources vs Innovation",
                description:
                  "Description: In this video, we explore the economic power of Muslim countries compared to Israel. On one side, over 50 ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/3j9BvzVhiz0/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/3j9BvzVhiz0/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/3j9BvzVhiz0/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Breaking News Alerts",
                liveBroadcastContent: "none",
                publishTime: "2025-08-25T04:00:04Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "plTVsx1GlJz3sa0XiYs8urCLlA8",
              id: {
                kind: "youtube#video",
                videoId: "7fYNhX2Z1fE",
              },
              snippet: {
                publishedAt: "2024-07-22T12:00:06Z",
                channelId: "UCnQRMRUJvEt5D0DRB9f53EA",
                title:
                  "Secrets of Prosperity: What Happened to Muslim Economies?",
                description:
                  "Uncover the *Secrets of Prosperity: What Happened to Muslim Economies?* What turned the once-thriving economic hubs of ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/7fYNhX2Z1fE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/7fYNhX2Z1fE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/7fYNhX2Z1fE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "DeCenomy secret",
                liveBroadcastContent: "none",
                publishTime: "2024-07-22T12:00:06Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "ogybKXnWHln4vkwIOPmylAZXWK8",
              id: {
                kind: "youtube#video",
                videoId: "JdTAdvppd5g",
              },
              snippet: {
                publishedAt: "2025-10-20T02:50:00Z",
                channelId: "UCZwAP6cwRaC_KUiQd_DKXQg",
                title:
                  "EP #8 | China’s 4th Plenum &amp; “Sinicization of Religions” | Policy Explained | Islam | Christianity",
                description:
                  "Description This video presents and analyzes a Chinese-language essay and related arguments about the “Sinicization of Islam,” ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/JdTAdvppd5g/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/JdTAdvppd5g/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/JdTAdvppd5g/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle:
                  'How China Thinks | A Real-life Lens on China "Now"',
                liveBroadcastContent: "none",
                publishTime: "2025-10-20T02:50:00Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "2aVKhhjPCZXW35bqusN1jShJ7tQ",
              id: {
                kind: "youtube#video",
                videoId: "gfxgb-oMdI8",
              },
              snippet: {
                publishedAt: "2024-09-20T21:00:34Z",
                channelId: "UCW5nKgse1zY7Y2xw79pI7bQ",
                title: "Why Are Muslim Majority Countries Poor?",
                description:
                  "Explore the Complex Economic Challenges in Muslim-Majority Countries In this in-depth video, we delve into the economic ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/gfxgb-oMdI8/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/gfxgb-oMdI8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/gfxgb-oMdI8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Dollalux",
                liveBroadcastContent: "none",
                publishTime: "2024-09-20T21:00:34Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "Yn4KUYqThJvrvvcVuqXDC8zhhCw",
              id: {
                kind: "youtube#video",
                videoId: "aPsJfbv2duQ",
              },
              snippet: {
                publishedAt: "2025-10-02T18:00:01Z",
                channelId: "UCM9Go2S5AFxbWvCULsjhi3Q",
                title:
                  "What If Muslim Countries Stop Oil Supply to the West? | Global Economy Explained ",
                description:
                  "What If Muslim Countries Stop Oil Supply to the West? | Global Economy Explained What would happen if Muslim-majority ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/aPsJfbv2duQ/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/aPsJfbv2duQ/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/aPsJfbv2duQ/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "The future lens ",
                liveBroadcastContent: "none",
                publishTime: "2025-10-02T18:00:01Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "FPw7ne1URX4RISt_0FWI529T0Lk",
              id: {
                kind: "youtube#video",
                videoId: "hL3xX4-dPJ8",
              },
              snippet: {
                publishedAt: "2025-09-22T09:51:20Z",
                channelId: "UCzmwgxfSB0miF4VKWzIozFQ",
                title:
                  "3 Muslim Countries That Will Dominate the Future - Dr. Israr Ahmed Explains",
                description:
                  "Description: In this powerful lecture, Dr. Israr Ahmed explains which 3 Muslim countries will dominate the future and play a ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/hL3xX4-dPJ8/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/hL3xX4-dPJ8/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/hL3xX4-dPJ8/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Al-Israr Media",
                liveBroadcastContent: "none",
                publishTime: "2025-09-22T09:51:20Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "KWXjgvNK6wQ61zkui98q_Y_vKCI",
              id: {
                kind: "youtube#video",
                videoId: "veMFCFyOwFI",
              },
              snippet: {
                publishedAt: "2017-07-17T11:55:32Z",
                channelId: "UCLXo7UDZvByw2ixzpQCufnA",
                title: "The Middle East&#39;s cold war, explained",
                description:
                  "How two feuding countries are tearing apart the Middle East. Help us make more ambitious videos by joining the Vox Video Lab: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/veMFCFyOwFI/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/veMFCFyOwFI/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/veMFCFyOwFI/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Vox",
                liveBroadcastContent: "none",
                publishTime: "2017-07-17T11:55:32Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "GFM0vxZ8CxzzYFWEND-XZzEIjDA",
              id: {
                kind: "youtube#video",
                videoId: "Vt9eDVD63IM",
              },
              snippet: {
                publishedAt: "2020-08-22T14:30:13Z",
                channelId: "UC_gUM8rL-Lrg6O3adPW9K1g",
                title:
                  "Gravitas Plus: Uighur genocide: Speak up, Islamic world",
                description:
                  "A genocide of Uighur Muslims is underway in Xinjiang, but the Islamic world has chosen China's money over China's Muslims.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/Vt9eDVD63IM/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/Vt9eDVD63IM/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/Vt9eDVD63IM/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "WION",
                liveBroadcastContent: "none",
                publishTime: "2020-08-22T14:30:13Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "LgjMXAoIGMXNiTx7oFBx2GvaYKY",
              id: {
                kind: "youtube#video",
                videoId: "IWGmTMpm34o",
              },
              snippet: {
                publishedAt: "2025-09-21T16:30:15Z",
                channelId: "UCEgVmRZ_4LAw7V1OK7cScXA",
                title:
                  "কতটা শক্তিশালী এই 57 টি মুসলিম দেশ ? 57 Muslim Countries vs America &amp; Israel - Arif Knowledge",
                description:
                  "কতটা শক্তিশালী এই 57 টি মুসলিম দেশ ? 57 Muslim Countries vs America & Israel - Arif Knowledge ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/IWGmTMpm34o/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/IWGmTMpm34o/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/IWGmTMpm34o/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Arif Knowledge",
                liveBroadcastContent: "none",
                publishTime: "2025-09-21T16:30:15Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "vjtB-CBa4CJsA-lhhBuCu7JY9GA",
              id: {
                kind: "youtube#video",
                videoId: "JxYbGkOT1WE",
              },
              snippet: {
                publishedAt: "2025-10-15T14:43:59Z",
                channelId: "UCoYdOZ--OymLfyU1RdYbB4Q",
                title:
                  "The Global Influence of the Muslim World: Power, Population, and the Future”",
                description:
                  "Concept: A data-driven, documentary-style analysis of how Muslim-majority nations are shaping the 21st century — focusing on ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/JxYbGkOT1WE/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/JxYbGkOT1WE/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/JxYbGkOT1WE/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Narail TV News",
                liveBroadcastContent: "none",
                publishTime: "2025-10-15T14:43:59Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "rUCnDSZRsR_nnAl3fJo9JTYNs3A",
              id: {
                kind: "youtube#video",
                videoId: "BpTDDKsdMcY",
              },
              snippet: {
                publishedAt: "2020-03-24T14:00:07Z",
                channelId: "UCnS0yS5dq_x0bXkXhGjEo3g",
                title:
                  "Middle East geopolitics explained simply || The Middle East explained in a nutshell",
                description:
                  "This video gives the average person looking to understand more about what is going on in the Middle East a high level overview ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/BpTDDKsdMcY/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/BpTDDKsdMcY/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/BpTDDKsdMcY/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "LondonCityGirl",
                liveBroadcastContent: "none",
                publishTime: "2020-03-24T14:00:07Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "GJah6bY9JP7Klm6VW938A9Rrdz4",
              id: {
                kind: "youtube#video",
                videoId: "7gMg4a7pxfU",
              },
              snippet: {
                publishedAt: "2024-03-24T00:26:52Z",
                channelId: "UCFaNGynjWOUR-H-9WpmxBog",
                title:
                  "The Ripple Effect: How Muslim Boycotts Shape Israel&#39;s Economy",
                description:
                  "The Ripple Effect: How Muslim Boycotts Shape Israel's Economy #MuslimBoycott #IsraelProducts #EconomicImpact ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/7gMg4a7pxfU/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/7gMg4a7pxfU/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/7gMg4a7pxfU/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "PLANET PRODIGIES ",
                liveBroadcastContent: "none",
                publishTime: "2024-03-24T00:26:52Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "R9sS7Isn3xea-PzO8-nI1t-WN_M",
              id: {
                kind: "youtube#video",
                videoId: "re09I6jfXFc",
              },
              snippet: {
                publishedAt: "2023-12-17T04:00:23Z",
                channelId: "UC0biuDIW_kugBU47lKnDMig",
                title: "Top 10 Muslim Economies Globally",
                description:
                  "Want more interesting news and trends about Halal Products? Subscribe our newsletter from here!",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/re09I6jfXFc/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/re09I6jfXFc/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/re09I6jfXFc/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "The Halal Times",
                liveBroadcastContent: "none",
                publishTime: "2023-12-17T04:00:23Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "d354II-4SwSeGBmjH5OeIYjc2so",
              id: {
                kind: "youtube#video",
                videoId: "BEqvXsO0XdA",
              },
              snippet: {
                publishedAt: "2019-06-19T14:22:11Z",
                channelId: "UCEEmkXnsaQHmLAq_v2XouPQ",
                title:
                  "What is Islamic Economic System? Key Principles, Features &amp; Benefits | AIMS Education",
                description:
                  "The Islamic economic system provides a unique framework for wealth, trade, and fairness, balancing material needs with spiritual ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/BEqvXsO0XdA/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/BEqvXsO0XdA/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/BEqvXsO0XdA/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "AIMS Education",
                liveBroadcastContent: "none",
                publishTime: "2019-06-19T14:22:11Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "_HQFx2iffdZQ9X4ujLOnCZtCx6A",
              id: {
                kind: "youtube#video",
                videoId: "2opH09byu1A",
              },
              snippet: {
                publishedAt: "2025-08-22T12:35:52Z",
                channelId: "UCSFwNykNrDARlL7oHhFmdGA",
                title:
                  "3 Muslim Countries That Will Dominate the Future - Dr. Israr Ahmed Explains",
                description:
                  "In this eye-opening lecture, Dr. Israr Ahmed (RA) explains which 3 Muslim countries will play a dominant role in shaping the future ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/2opH09byu1A/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/2opH09byu1A/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/2opH09byu1A/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Dr Israr Ahmed bayan",
                liveBroadcastContent: "none",
                publishTime: "2025-08-22T12:35:52Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "B54aTKRIngYQwlVEbmhhjSq-qI8",
              id: {
                kind: "youtube#video",
                videoId: "q_52zbi3B80",
              },
              snippet: {
                publishedAt: "2025-07-15T04:01:03Z",
                channelId: "UCRL7F5ymSGyFwmScX1ZTVXw",
                title:
                  "3 Muslim Countries That Will Dominate the Future – Dr. IsrarAhmed Explain",
                description:
                  '"3 Muslim Countries That Will Dominate the Future – Dr. Israr Ahmed Explains" In this thought-provoking discourse, the esteemed ...',
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/q_52zbi3B80/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/q_52zbi3B80/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/q_52zbi3B80/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Ar Rahman [ الرحمن ]",
                liveBroadcastContent: "none",
                publishTime: "2025-07-15T04:01:03Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "36zxeGjeRfLJEl3RFY1ZcGQA62M",
              id: {
                kind: "youtube#video",
                videoId: "widINZoXDKg",
              },
              snippet: {
                publishedAt: "2025-10-08T09:01:26Z",
                channelId: "UCwcH94eG9YYAn1G2nfw3j-w",
                title:
                  "Muslim Countries Economy: 70% तेल होते हुए भी मुस्लिम देश गरीब क्यों? | OIC Countries GDP Analysis",
                description:
                  "Muslim Countries Economy: 70% तेल होते हुए भी मुस्लिम देश गरीब क्यों? | OIC Countries GDP ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/widINZoXDKg/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/widINZoXDKg/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/widINZoXDKg/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "KADAK",
                liveBroadcastContent: "none",
                publishTime: "2025-10-08T09:01:26Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "u4lVN0TgqT3MsZYMOfE4BHf5C2g",
              id: {
                kind: "youtube#video",
                videoId: "qliJBNBbuws",
              },
              snippet: {
                publishedAt: "2025-10-03T13:00:34Z",
                channelId: "UCUqnjdbydCMQrYhaM54PwaA",
                title:
                  "3 Muslim Countries That Will Dominate the Future - Dr. Israr Ahmed Explains",
                description:
                  "In this powerful lecture, Dr. Israr Ahmed (RA) shares his insightful analysis on the three Muslim countries that hold the potential to ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/qliJBNBbuws/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/qliJBNBbuws/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/qliJBNBbuws/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Voice Of Islam",
                liveBroadcastContent: "none",
                publishTime: "2025-10-03T13:00:34Z",
              },
            },
            {
              kind: "youtube#searchResult",
              etag: "KBqlniczqbA1NKPZaeE8dabvFwU",
              id: {
                kind: "youtube#video",
                videoId: "apjuERb9fjk",
              },
              snippet: {
                publishedAt: "2019-03-27T18:57:19Z",
                channelId: "UCE1UcCcus1fSTotzXQLC49A",
                title:
                  "Pakistani&#39;s Reaction On Top 10 Muslim Countries Economy 2019",
                description:
                  "Pakistani's Reaction On Top 10 Muslim Countries Economy 2019 Original Video: ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/apjuERb9fjk/default.jpg",
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/apjuERb9fjk/mqdefault.jpg",
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/apjuERb9fjk/hqdefault.jpg",
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: "Expert Reaction",
                liveBroadcastContent: "none",
                publishTime: "2019-03-27T18:57:19Z",
              },
            },
          ],
        },
      ])
    );
  });

  // context value
  const value = {
    // Search
    isSearchShow,
    setIsSearchShow,
    searchBtnRef,

    // Notifications
    isNotificationShow,
    setNotificationShow,
    notificationBtnRef,

    // relative sidebar
    isReSideBarShow,
    setIsReSideBarShow,

    // fixed sidebar
    isFxSideBarShow,
    setIsFxSideBarShow,
    // future values like theme, modalOpen, etc. will go here
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
