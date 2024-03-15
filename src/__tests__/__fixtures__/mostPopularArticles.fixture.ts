import { MostPopularArticlesRes } from '../../types';

export const mockMostPopularArticlesResFixture: MostPopularArticlesRes  = {
  status: "OK",
  copyright: "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
  num_results: 20,
  results: [
    {
      uri: "nyt://article/3f3e01e8-5347-546a-93f5-c7e2b7c26648",
      url: "https://www.nytimes.com/2024/02/22/us/instagram-child-influencers.html",
      id: 100000009272060,
      asset_id: 100000009272060,
      source: "New York Times",
      published_date: "2024-02-22",
      updated: "2024-02-25 13:35:30",
      section: "U.S.",
      subsection: "",
      nytdsection: "u.s.",
      adx_keywords:
        "Social Media;Child Pornography;Child Abuse and Neglect;Sex Crimes;Photography;Dancing;Fashion and Apparel;Women and Girls;Gymnastics;Models (Professional);vis-design;Instagram Inc;Meta Platforms Inc;Facebook Inc;OnlyFans;TikTok (ByteDance);Telegram LLC;United States",
      column: null,
      byline: "By Jennifer Valentino-DeVries and Michael H. Keller",
      type: "Article",
      title:
        "A Marketplace of Girl Influencers Managed by Moms and Stalked by Men",
      abstract:
        "Seeking social media stardom for their underage daughters, mothers post images of them on Instagram. The accounts draw men sexually attracted to children, and they sometimes pay to see more.",
      des_facet: [
        "Social Media",
        "Child Pornography",
        "Child Abuse and Neglect",
        "Sex Crimes",
        "Photography",
        "Dancing",
        "Fashion and Apparel",
        "Women and Girls",
        "Gymnastics",
        "Models (Professional)",
        "vis-design",
      ],
      org_facet: [
        "Instagram Inc",
        "Meta Platforms Inc",
        "Facebook Inc",
        "OnlyFans",
        "TikTok (ByteDance)",
        "Telegram LLC",
      ],
      per_facet: [],
      geo_facet: ["United States"],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption:
            "This is a curated selection of real comments and emojis associated with an Instagram photo of a 9-year-old girl in a golden bikini lounging on a towel. It was posted by her parents.",
          copyright: "The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url: "https://static01.nyt.com/images/2024/02/22/multimedia/instakids-promo/instakids-promo-thumbStandard.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75,
            },
            {
              url: "https://static01.nyt.com/images/2024/02/22/multimedia/instakids-promo/instakids-promo-mediumThreeByTwo210.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210,
            },
            {
              url: "https://static01.nyt.com/images/2024/02/22/multimedia/instakids-promo/instakids-promo-mediumThreeByTwo440.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
  ]
};

export const mockMostPopularResNoArticlesFixture: MostPopularArticlesRes  = {
  status: "OK",
  copyright: "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
  num_results: 0,
  results: []
}
