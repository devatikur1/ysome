import React, { useEffect, useState } from "react";
import CommoentPart from "./part/CommoentPart";

export default function CommentInterface({ videoId }) {
  let comments = [
    {
      kind: "youtube#commentThread",
      etag: "hfAFhL_MUQZn-qvmeoliVjndm3A",
      id: "UgzJ-6JmQoJeMgy89UR4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "w_8Ta_GkCHSC11U-fEQqoPLg4H0",
          id: "UgzJ-6JmQoJeMgy89UR4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "Best Wishes so underrated. The fun new characters and serious Team Rocket really carried.",
            textOriginal:
              "Best Wishes so underrated. The fun new characters and serious Team Rocket really carried.",
            authorDisplayName: "@husseinova16",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ev798sxeuR143jiybvc5dNSZbjSEZOpvX0SnrpYags0XkSWaIwaBHbIobTBYk2IoIsDVVllKbnY=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@husseinova16",
            authorChannelId: {
              value: "UCzJ4psQSWPMPBgD05MwvvMw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2025-10-24T01:29:31Z",
            updatedAt: "2025-10-24T01:29:31Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "1-inBQUTjNRzTuZMV33ql2SICw0",
      id: "Ugwc92ewfyYYgnrx1MB4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "ToPzE4IJ6-4gKXK4Pa1_UbTE6aQ",
          id: "Ugwc92ewfyYYgnrx1MB4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "In this series we saw best villain arc like first the team rocket arcs such as nimabasa Subway arc, second the milos island arc, the tirtuga arc, the meleotta arc and then other best villain arcs like team plasma arc, N arc",
            textOriginal:
              "In this series we saw best villain arc like first the team rocket arcs such as nimabasa Subway arc, second the milos island arc, the tirtuga arc, the meleotta arc and then other best villain arcs like team plasma arc, N arc",
            authorDisplayName: "@PizzaGuy-nh5pk",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_nd-vlBKVo5vb_gAzEJPPrEUmKAXLoruOBOoJd_R_KvGKjJu7amWAiwOcKi9RlsoFVuaw=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@PizzaGuy-nh5pk",
            authorChannelId: {
              value: "UC7vk7V2PqPMq38uFz6wSRig",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2025-09-08T17:15:25Z",
            updatedAt: "2025-09-08T17:15:45Z",
          },
        },
        canReply: true,
        totalReplyCount: 1,
        isPublic: true,
      },
      replies: {
        comments: [
          {
            kind: "youtube#comment",
            etag: "sMYPCgDtk0L-fsIBqCWaNA3_WSM",
            id: "Ugwc92ewfyYYgnrx1MB4AaABAg.AMorWYSl_YRAOfYOtyxIYv",
            snippet: {
              channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
              videoId: "GJNcPhZYwyQ",
              textDisplay:
                "I kind of hate Team Plasma arc, but N (and Colress kind of) carried.",
              textOriginal:
                "I kind of hate Team Plasma arc, but N (and Colress kind of) carried.",
              parentId: "Ugwc92ewfyYYgnrx1MB4AaABAg",
              authorDisplayName: "@husseinova16",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ev798sxeuR143jiybvc5dNSZbjSEZOpvX0SnrpYags0XkSWaIwaBHbIobTBYk2IoIsDVVllKbnY=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@husseinova16",
              authorChannelId: {
                value: "UCzJ4psQSWPMPBgD05MwvvMw",
              },
              canRate: true,
              viewerRating: "none",
              likeCount: 0,
              publishedAt: "2025-10-24T19:29:14Z",
              updatedAt: "2025-10-24T19:29:14Z",
            },
          },
        ],
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "WulcALnAywibJW_-eDjxF9Seuh8",
      id: "UgwW-WUTMdlNbccJdPx4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "_PQn8bIi14s-Ig5C7E0TTin_Fj4",
          id: "UgwW-WUTMdlNbccJdPx4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "Pokemon&#39;s Empire State of Mind theme song. 🗽",
            textOriginal: "Pokemon's Empire State of Mind theme song. 🗽",
            authorDisplayName: "@firefoxwizard86",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/I6AvpQIr_Y-RoQAtpTaYh3TypVI4sdIwpBlp2Uk1tKXcqojMgZsebOTiKUwc9PbJ2H6fHLLdlHU=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@firefoxwizard86",
            authorChannelId: {
              value: "UCopefsb2bzmm-SBZO7vlx7A",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2025-06-21T20:18:15Z",
            updatedAt: "2025-06-21T20:18:15Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "zph1V41xoAsjG98D0zReidoeuJ4",
      id: "UgwE7KiqiZnMJ4IPrrZ4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "9-VlK6axjD4kxTzMgIXuKa3dzB0",
          id: "UgwE7KiqiZnMJ4IPrrZ4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "If I remember correctly, this is the opening song from the genesect movie",
            textOriginal:
              "If I remember correctly, this is the opening song from the genesect movie",
            authorDisplayName: "@michaelkowal3230",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_muQiczGOCl-m4IsdHDCymqxuppptuANcbPAUj52x8=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@michaelkowal3230",
            authorChannelId: {
              value: "UCHDTWT1r44Ip663UHZrxJuA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2025-04-06T11:36:56Z",
            updatedAt: "2025-04-06T11:36:56Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "zCrfIqdeRWgbWaGjAqxw_JRlbwY",
      id: "UgwZFtxyd0tNAoVIUml4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "KJStFHeScGJJpqjOyof1q2f-noo",
          id: "UgwZFtxyd0tNAoVIUml4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "this feels weird, is this sped up?",
            textOriginal: "this feels weird, is this sped up?",
            authorDisplayName: "@thingsnhfiujng",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/yxvgOf9U39txTHamKZrx_Qs8mqDDsYCmixxZFW0uzWC6DHXLVcEnc8C9Sb6Cp4z9Nnf77agX4A=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@thingsnhfiujng",
            authorChannelId: {
              value: "UCR1NTfeOKwwLHfmmKHvwWkw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2025-03-04T21:40:15Z",
            updatedAt: "2025-03-04T21:40:15Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "SK7SfWbY8h59Q4gqvqHXdpVBjDo",
      id: "UgyuDUNrOgF42tjhgqh4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "8dYIGh5Sru2aJjH55E9Qmqq8PJY",
          id: "UgyuDUNrOgF42tjhgqh4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "Yes",
            textOriginal: "Yes",
            authorDisplayName: "@levitaylor4390",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_md5VUxzH5yjyJv_IEGemehUPXnmQvty_gdK0OWc6XAOS-XVJ0B1M0OaXt1Bsp6kPB0PA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@levitaylor4390",
            authorChannelId: {
              value: "UC1lyZKApIz8s1V7PuNYbqng",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2024-11-08T12:05:55Z",
            updatedAt: "2024-11-08T12:05:55Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "P_qd9q5UNSCJ8oSpyE2Zj2ollhQ",
      id: "UgwegmQ8_SIJdusWG_V4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "r6tlXSUgr0htHAWTWwto1HgIiso",
          id: "UgwegmQ8_SIJdusWG_V4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "I want this song on my graduation",
            textOriginal: "I want this song on my graduation",
            authorDisplayName: "@janetmuzeza8604",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_nRSzE8dSWA5QK22IMpeUaCo7VPu5YO2iur9ArZWtE=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@janetmuzeza8604",
            authorChannelId: {
              value: "UCocgTlylJhvcO5WRJF-eD8Q",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2024-09-09T15:59:38Z",
            updatedAt: "2024-09-09T15:59:38Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "dexquBqRLMccAOr4G_casQ1s1oQ",
      id: "UgwOUHHHp8slMle4etR4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "QTHS3KKbCU1vhnE3huTdejU2uFw",
          id: "UgwOUHHHp8slMle4etR4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "I grew up too fast",
            textOriginal: "I grew up too fast",
            authorDisplayName: "@BroganLF",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/tmNHlTvetDvmzVJBb3nHXsFyPA0r6QrzklNXUJz0s7XoP0MG2_XUN4WT-4GlBLybhoc3YCLwZA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@BroganLF",
            authorChannelId: {
              value: "UCHLarwHnZwaBBfWdL_ixoCA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2024-01-25T21:50:42Z",
            updatedAt: "2024-01-25T21:50:42Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "B81NgfR1uWFUuC6mGgAju2WoMpo",
      id: "UgzX46AWiAp88UeeOjl4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "3dlu4CK2Lzy_1ZAXSDwJyNqkA2c",
          id: "UgzX46AWiAp88UeeOjl4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "if u ended ur 12th boards + waving ur frends for goodbye + this song = MEMORABLE 🥺🥺",
            textOriginal:
              "if u ended ur 12th boards + waving ur frends for goodbye + this song = MEMORABLE 🥺🥺",
            authorDisplayName: "@grimshady35",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/vnCGWW0StZv5FBclYdFPS-1iJjhaMBMVcFRbOIXUYC5OCfhoobfIJ1bvwM7-iMfjhlgBqoSC=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@grimshady35",
            authorChannelId: {
              value: "UCWCgIgmoqmYkBNV31t-OnhQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-12-25T16:24:35Z",
            updatedAt: "2023-12-25T16:24:35Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "sBBg2KH-8ek1bdrrE_yJgMA5Lcw",
      id: "Ugyqerv3yDVOcc1JQs94AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "JzeS1EcvHk1MTJNT_luD0euy-IQ",
          id: "Ugyqerv3yDVOcc1JQs94AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "Top 3 themes \u003cbr\u003eIndigo \u003cbr\u003eBW\u003cbr\u003eXY",
            textOriginal: "Top 3 themes \nIndigo \nBW\nXY",
            authorDisplayName: "@C1xpz1",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/fNkpnQ9AfWl8x19eWRHufp--OX0Ik3EdlclZyQlaGQhD05nmDNQ0HiWWsrCd422MiXyDhMo9FQ=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@C1xpz1",
            authorChannelId: {
              value: "UCQwaxncFSy9sUNujoweY8Gg",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-11-29T16:47:16Z",
            updatedAt: "2023-11-29T16:47:16Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "nXh76_Bg7cDqRwsJ6xbPKWgj3hk",
      id: "UgyzDcBP5F10KyM6c5V4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "aodg8laAgX4W1bpurwY5DOv6KYo",
          id: "UgyzDcBP5F10KyM6c5V4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "this is the best seasons 🤧❤️",
            textOriginal: "this is the best seasons 🤧❤️",
            authorDisplayName: "@hakimrosli._",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/4aUOv8D2I6nN4LQJ5XSH-SXY0Enj_VQoejsv6eJGuESaugeicIqLaS6b_Njyb43SRIDBfYZU=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@hakimrosli._",
            authorChannelId: {
              value: "UCIIuzO_GDNVMPvNHGogdM4g",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-11-18T16:57:10Z",
            updatedAt: "2023-11-18T16:57:10Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "vOBoSSItKyTWMBeOh9IZcgaVM_k",
      id: "Ugx5gq4ggeXch3VRPwt4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "C-acCa3UJe150-CzRjDUvF8KAhE",
          id: "Ugx5gq4ggeXch3VRPwt4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "Ash is a best journey ❤❤song ❤",
            textOriginal: "Ash is a best journey ❤❤song ❤",
            authorDisplayName: "@janhavipatil4235",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_nbdc5AzjivOkOVFs1t3A1g2QWi7OLsMZHV2ihZTqZmqltNd7G5En2x7TJbw2Ac3mb2Bw=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@janhavipatil4235",
            authorChannelId: {
              value: "UClCPlIB_6blWCVQN4tGxPnQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 1,
            publishedAt: "2023-10-05T09:15:43Z",
            updatedAt: "2023-10-05T09:15:43Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "Ye7Lxj6LG4yBFihXIuOvar6oEQo",
      id: "UgyGQDcfzfPkPr7LFuZ4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "0BsUSlvCUq0F_bK_lSo4pJZfh6I",
          id: "UgyGQDcfzfPkPr7LFuZ4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "Listening to this song made me cry yet also excited for the Kalos saga at the same time! I also like how Reshiram and Zekrom are in this video!\u003cbr\u003e\u003cbr\u003eThis song is also perfect for a graduation, whether it is elementary, middle, or high school, or even college!",
            textOriginal:
              "Listening to this song made me cry yet also excited for the Kalos saga at the same time! I also like how Reshiram and Zekrom are in this video!\n\nThis song is also perfect for a graduation, whether it is elementary, middle, or high school, or even college!",
            authorDisplayName: "@ericlang7987",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/QeH2_ueS5onDILMEVXXz_yPnUoCglate8rnm2p0lGyGfcKJ6C-sI0BZPbw-U1Tm7JC613fB9IGc=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@ericlang7987",
            authorChannelId: {
              value: "UCxKAf_VHKUyj64urNVsaeIg",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 4,
            publishedAt: "2023-06-17T09:55:32Z",
            updatedAt: "2023-12-27T23:57:02Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "obKlPTTysepr99XJaUMuh_CeODU",
      id: "UgwwlqUIpCU5XhHBPT94AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "A4AwuuXMfiyMeibZedJJmbAhzgI",
          id: "UgwwlqUIpCU5XhHBPT94AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "I didn’t much care for b&amp;w nor sun and moon but b&amp;w definitely had the best music",
            textOriginal:
              "I didn’t much care for b&w nor sun and moon but b&w definitely had the best music",
            authorDisplayName: "@bbarken95",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_nY_fnkAAbNNNrzn_GGEyFvI3RdxOd2T2kiFviw0nQ=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@bbarken95",
            authorChannelId: {
              value: "UCJalyYeMFmwVr3iIv3PxL0A",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-01-30T04:17:07Z",
            updatedAt: "2023-01-30T04:17:07Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "IHcXBaIA3YCiCLRLtFxrSi3S4Uo",
      id: "UgzMFi-Ift3J1CnicKh4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "A4zqeGIoJ7Bck6j_H1BntGUoeoM",
          id: "UgzMFi-Ift3J1CnicKh4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "I know BW wasn&#39;t the best series but I grew up with it it&#39;s bring back some many memories 🥺😭",
            textOriginal:
              "I know BW wasn't the best series but I grew up with it it's bring back some many memories 🥺😭",
            authorDisplayName: "@spooky_spedy",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/5m1LKfDw0gwhC7cXzOPdK92bEGf0D1Az1ntfwQ04gMjjPTDawys4NQcek_rd5cXZ3jnBkU0L=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@spooky_spedy",
            authorChannelId: {
              value: "UCcP-UHuDnIrIqDeATZrypjA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 5,
            publishedAt: "2022-11-21T18:54:09Z",
            updatedAt: "2022-11-21T18:54:09Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "j4BZEGIX3fur8R77ZNWgQ4s82xQ",
      id: "UgzrD6Zj5LMEbZz-sht4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "D0yzx8FolKQ4MUUW--HC-tr1Zec",
          id: "UgzrD6Zj5LMEbZz-sht4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "Who is n",
            textOriginal: "Who is n",
            authorDisplayName: "@jamalrashad7259",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_l7y8LFTBj4miSbSBbUB7pjX7QqpYcIVnLLArN75zrAn42r=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@jamalrashad7259",
            authorChannelId: {
              value: "UCiE7rGUebnqr9VTajTx8slQ",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2022-07-10T11:30:12Z",
            updatedAt: "2022-07-10T11:30:12Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "TfmDCwARjunCTAz1JXSoAqZM5lg",
      id: "Ugxi4TbPJqTuGbPG47l4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "TO2vHNLjy0M5MYh3iWWw0Rdaxo0",
          id: "Ugxi4TbPJqTuGbPG47l4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "♥️",
            textOriginal: "♥️",
            authorDisplayName: "@danielcopeland1345",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/cf8HYKLvMA8zyVgbXuBG1enKIrMozH5pkLGu3_sbdy-PI23MjeMwqCR_pL9kAdKpuWfpFgWcCcA=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@danielcopeland1345",
            authorChannelId: {
              value: "UCe5La0VmkU9ah-TiM72jtYw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2022-07-03T18:23:15Z",
            updatedAt: "2022-07-03T18:23:15Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "NJsN8QCb3DZmBL0d8qwQf7luOYQ",
      id: "Ugy9zVitBPx1KHT5_n94AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "ZWtpfkX1q-5QqrRr4_iKWXAIqnE",
          id: "Ugy9zVitBPx1KHT5_n94AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "It’s the next chapter the ultimate goal, ready for battle brave and bold I know we’re ganna make it we will save the day. One story ends and another begins, we can never do it without our friends when we stand United we will find a way. You give me the courage that sets me free, I count on you you’re always there for me, no matter where this road takes us by your side is where I wanna be. Au Oh we come so far we fought so hard to get where we are, Au Oh we found our destiny Au we be long together we are best friends forever, it’s always you and me Pokémon",
            textOriginal:
              "It’s the next chapter the ultimate goal, ready for battle brave and bold I know we’re ganna make it we will save the day. One story ends and another begins, we can never do it without our friends when we stand United we will find a way. You give me the courage that sets me free, I count on you you’re always there for me, no matter where this road takes us by your side is where I wanna be. Au Oh we come so far we fought so hard to get where we are, Au Oh we found our destiny Au we be long together we are best friends forever, it’s always you and me Pokémon",
            authorDisplayName: "@Megadave4life",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_nMn9sdi84EMDG5BIzC4QPy4WujeyFFxaqL_884CWE=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@Megadave4life",
            authorChannelId: {
              value: "UCqrWshzT1wSrljAmBKZ04aw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2022-07-02T15:03:16Z",
            updatedAt: "2022-07-02T15:03:16Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "KDzd24UiKi3D8FAqpgrhr-Ylmvs",
      id: "UgyR66KkbD5Ybt4CnJ94AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "IM-IbkN3-ZWKRJBbGUPRx7KzfmE",
          id: "UgyR66KkbD5Ybt4CnJ94AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay:
              "Only thing I don&#39;t like about the Unova anime is how in the first season of the three seasons we got revolving around Ash and his friends from Unova James, Jessie, and Meowth were more serious than they had any right to be and actually competent villains",
            textOriginal:
              "Only thing I don't like about the Unova anime is how in the first season of the three seasons we got revolving around Ash and his friends from Unova James, Jessie, and Meowth were more serious than they had any right to be and actually competent villains",
            authorDisplayName: "@superultimatexlrfire462",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AIdro_mYscZGpaLinoCAs8vnzs2lU-MJSQYW7JM9ewaWjBYyBUs=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@superultimatexlrfire462",
            authorChannelId: {
              value: "UCcu5hzVn0vpkF6kP2rCWlkA",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2022-03-07T01:23:39Z",
            updatedAt: "2022-03-07T01:23:39Z",
          },
        },
        canReply: true,
        totalReplyCount: 0,
        isPublic: true,
      },
    },
    {
      kind: "youtube#commentThread",
      etag: "uscwvn_GN4rgHgbPhX0qgbr1-0s",
      id: "UgxrqfS46uR2Z6Q5LXZ4AaABAg",
      snippet: {
        channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
        videoId: "GJNcPhZYwyQ",
        topLevelComment: {
          kind: "youtube#comment",
          etag: "PhIA-xvpv2pnc2FW-ldxGevwqH8",
          id: "UgxrqfS46uR2Z6Q5LXZ4AaABAg",
          snippet: {
            channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
            videoId: "GJNcPhZYwyQ",
            textDisplay: "All Pokemon songs are so damn inspirational.",
            textOriginal: "All Pokemon songs are so damn inspirational.",
            authorDisplayName: "@92Beyo",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/4GUlq-YSKxp0NGR6L29tfv84V-jRiFGZqVzNpEb-w4cx0LWaKAkzAviuemgo8cl_3roXlSxCamE=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl: "http://www.youtube.com/@92Beyo",
            authorChannelId: {
              value: "UCANYui7_BGphspAqcfrmZaw",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 29,
            publishedAt: "2022-02-10T22:33:31Z",
            updatedAt: "2022-02-10T22:33:31Z",
          },
        },
        canReply: true,
        totalReplyCount: 1,
        isPublic: true,
      },
      replies: {
        comments: [
          {
            kind: "youtube#comment",
            etag: "r7eO40P9LlAiuKY0i37qNFbSTsc",
            id: "UgxrqfS46uR2Z6Q5LXZ4AaABAg.9YH_kg5bhnr9s6UBqujr07",
            snippet: {
              channelId: "UCFeKszkjV-Jz5-VdlLfIZMA",
              videoId: "GJNcPhZYwyQ",
              textDisplay: "preach!!!!",
              textOriginal: "preach!!!!",
              parentId: "UgxrqfS46uR2Z6Q5LXZ4AaABAg",
              authorDisplayName: "@TheIncrediblePanda",
              authorProfileImageUrl:
                "https://yt3.ggpht.com/ytc/AIdro_lsIO0KH93OMfL3PN3kkxTUk7TsNceOYa6t219yVP8ios1EvW8tDuW7p3U0VVLxkXJlUA=s48-c-k-c0x00ffffff-no-rj",
              authorChannelUrl: "http://www.youtube.com/@TheIncrediblePanda",
              authorChannelId: {
                value: "UCN0Ku9PR5F270Xgu1V8aFsg",
              },
              canRate: true,
              viewerRating: "none",
              likeCount: 5,
              publishedAt: "2023-07-13T14:03:50Z",
              updatedAt: "2023-07-13T14:03:50Z",
            },
          },
        ],
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-2">
      {comments.length > 0 ? (
        comments.map((item) => (
          <CommoentPart
            key={item.id}
            comment={item.snippet.topLevelComment.snippet}
            replies={item.replies?.comments || []}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">No comments found...</p>
      )}
    </div>
  );
}

// {
//     "kind": "youtube#commentThread",
//     "etag": "uscwvn_GN4rgHgbPhX0qgbr1-0s",
//     "id": "UgxrqfS46uR2Z6Q5LXZ4AaABAg",
//     "snippet": {
//         "channelId": "UCFeKszkjV-Jz5-VdlLfIZMA",
//         "videoId": "GJNcPhZYwyQ",
//         "topLevelComment": {
//             "kind": "youtube#comment",
//             "etag": "PhIA-xvpv2pnc2FW-ldxGevwqH8",
//             "id": "UgxrqfS46uR2Z6Q5LXZ4AaABAg",
//             "snippet": {
//                 "channelId": "UCFeKszkjV-Jz5-VdlLfIZMA",
//                 "videoId": "GJNcPhZYwyQ",
//                 "textDisplay": "All Pokemon songs are so damn inspirational.",
//                 "textOriginal": "All Pokemon songs are so damn inspirational.",
//                 "authorDisplayName": "@92Beyo",
//                 "authorProfileImageUrl": "https://yt3.ggpht.com/4GUlq-YSKxp0NGR6L29tfv84V-jRiFGZqVzNpEb-w4cx0LWaKAkzAviuemgo8cl_3roXlSxCamE=s48-c-k-c0x00ffffff-no-rj",
//                 "authorChannelUrl": "http://www.youtube.com/@92Beyo",
//                 "authorChannelId": {
//                     "value": "UCANYui7_BGphspAqcfrmZaw"
//                 },
//                 "canRate": true,
//                 "viewerRating": "none",
//                 "likeCount": 29,
//                 "publishedAt": "2022-02-10T22:33:31Z",
//                 "updatedAt": "2022-02-10T22:33:31Z"
//             }
//         },
//         "canReply": true,
//         "totalReplyCount": 1,
//         "isPublic": true
//     },
//     "replies": {
//         "comments": [
//             {
//                 "kind": "youtube#comment",
//                 "etag": "r7eO40P9LlAiuKY0i37qNFbSTsc",
//                 "id": "UgxrqfS46uR2Z6Q5LXZ4AaABAg.9YH_kg5bhnr9s6UBqujr07",
//                 "snippet": {
//                     "channelId": "UCFeKszkjV-Jz5-VdlLfIZMA",
//                     "videoId": "GJNcPhZYwyQ",
//                     "textDisplay": "preach!!!!",
//                     "textOriginal": "preach!!!!",
//                     "parentId": "UgxrqfS46uR2Z6Q5LXZ4AaABAg",
//                     "authorDisplayName": "@TheIncrediblePanda",
//                     "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lsIO0KH93OMfL3PN3kkxTUk7TsNceOYa6t219yVP8ios1EvW8tDuW7p3U0VVLxkXJlUA=s48-c-k-c0x00ffffff-no-rj",
//                     "authorChannelUrl": "http://www.youtube.com/@TheIncrediblePanda",
//                     "authorChannelId": {
//                         "value": "UCN0Ku9PR5F270Xgu1V8aFsg"
//                     },
//                     "canRate": true,
//                     "viewerRating": "none",
//                     "likeCount": 5,
//                     "publishedAt": "2023-07-13T14:03:50Z",
//                     "updatedAt": "2023-07-13T14:03:50Z"
//                 }
//             }
//         ]
//     }
// }
