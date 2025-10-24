import { MoveDown, MoveUp } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomShortsPart from "../components/RandomShortsComponent/RandomShortsPart";
import clsx from "clsx";

export default function RandomShortsPage() {
  // uicontext
  const { HomePageHeight, HomePageOutletWidth } = useContext(UiContext);

  const [index, setIndex] = useState(100);
  const { id } = useParams();

  useEffect(() => {
    const handleWheel = (e) => {
      console.log(e.deltaY);
      // deltaY > 0 → scroll down
      // deltaY < 0 → scroll up
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (id !== ":id") return;
    const unsubscribe = () => {
      console.log("ggg");
    };

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let items = [
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
        title: "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill",
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
        title: "AFGHAN JALEBI - (SLOWED+REVERB) || INSTAGRAM VIRAL SONG 2023",
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
  ];

  return (
    <main
      style={{
        maxWidth: `${HomePageOutletWidth}px`,
        maxHeight: `${HomePageHeight}px`,
        minWidth: `${HomePageOutletWidth}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="relative flex flex-col justify-center items-center overflow-y-auto"
    >
      {" "}
      {items.map((i) => (
        <section
          className={clsx(
            `xl:min-h-[${HomePageHeight}px]`,
            `xl:min-w-[${Number(HomePageOutletWidth * 0.8)}px]`,
            `xl:max-w-[${HomePageOutletWidth * 0.8}px]`,
            "h-full flex flex-col gap-3 justify-center items-center overflow-hidden"
          )}
        >
          <RandomShortsPart
            key={i?.id?.videoId}
            style={{
              maxWidth: `${HomePageOutletWidth * (80 / 100)}px`,
              maxHeight: HomePageHeight,
              minHeight: `${HomePageHeight * (95 / 100)}px`,
            }}
            videoId={i?.id?.videoId}
            snippet={i?.snippet}
          />
        </section>
      ))}
      <section className="hidden lg:flex w-auto absolute right-2 h-full gap-3 flex-col items-center justify-center rounded-xl">
        <div className="w-[60px] h-[60px] bg-bg-pecondary hover:bg-bg-Primary hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center">
          <MoveUp size={25} strokeWidth={2} />
        </div>

        <div className="w-[60px] h-[60px] bg-bg-pecondary hover:bg-bg-Primary hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center">
          <MoveDown size={25} strokeWidth={2} />
        </div>
      </section>
    </main>
  );
}
