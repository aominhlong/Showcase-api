let animeData = [
    {   "id": 1,
        "title":"SPY x FAMILY",
        "image":"https://cdn.anime-planet.com/anime/primary/spy-x-family-1-285x403.webp?t=1646636920",
        "rating": 9.04
    },
    {   "id": 2,
        "title":"Demon Slayer: Kimetsu no Yaiba - Entertainment District Arc",
        "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-1-285x399.webp?t=1632583530",
        "rating": 8.55
    },
    {   "id": 3,
        "title":"Fruits Basket the Final Season",
        "image":"https://cdn.anime-planet.com/anime/primary/fruits-basket-the-final-season-1-285x399.jpg?t=1628016647",
        "rating": 9.04
    },
    {   "id": 4,
        "title":"Fullmetal Alchemist: Brotherhood",
        "image":"https://cdn.anime-planet.com/anime/primary/fullmetal-alchemist-brotherhood-1-190x285.jpg?t=1625886288",
        "rating": 9.14
    },
    {   "id": 5,
        "title":"Mo Dao Zu Shi 3",
        "image":"https://cdn.anime-planet.com/anime/primary/mo-dao-zu-shi-3-1-285x399.jpg?t=1628016525",
        "rating": 8.47
    },
    {   "id": 6,
        "title":"Attack on Titan 3rd Season: Part II",
        "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-3rd-season-part-ii-1-190x285.jpg?t=1625898798",
        "rating": 8.62
    },
    {   "id": 7,
        "title":"Jujutsu Kaisen",
        "image":"https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-1-190x286.jpg?t=1625907951",
        "rating": 8.68
    },
    {   "id": 8,
        "title":"Haikyuu!! Karasuno High School vs Shiratorizawa Academy",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-karasuno-high-school-vs-shiratorizawa-academy-1.jpg?t=1625779759",
        "rating": 8.79
    },
    {   "id": 9,
        "title":"Demon Slayer: Kimetsu no Yaiba Movie - Mugen Train",
        "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-movie-mugen-train-1.jpg?t=1625788462",
        "rating": 8.66
    },
    {   "id": 10,
        "title":"Attack on Titan The Final Season",
        "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-the-final-season-1.jpg?t=1630355436",
        "rating": 8.84
    },
    {   "id": 11,
        "title":"Your Name",
        "image":"https://cdn.anime-planet.com/anime/primary/your-name-1.jpg?t=1625779598",
        "rating": 8.40
    },
    {   "id": 12,
        "title":"Haikyuu!! Second Season",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-second-season-1.jpg?t=1625778467",
        "rating": 8.65
    },
    {   "id": 13,
        "title":"Attack on Titan The Final Season: Part II",
        "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-the-final-season-part-ii-1.webp?t=1640076824",
        "rating": 8.85
    },
    {   "id": 14,
        "title":"Violet Evergarden Movie",
        "image":"https://cdn.anime-planet.com/anime/primary/violet-evergarden-movie-1.webp?t=1634333039",
        "rating": 8.95
    },
    {   "id": 15,
        "title":"A Silent Voice",
        "image":"https://cdn.anime-planet.com/anime/primary/a-silent-voice-1.jpg?t=1625778389",
        "rating": 8.95
    },
    {   "id": 16,
        "title":"Heaven Official's Blessing Special",
        "image":"https://cdn.anime-planet.com/anime/primary/heaven-officials-blessing-special-1.jpg?t=1625791153",
        "rating": 8.39
    },
    {   "id": 17,
        "title":"Demon Slayer: Kimetsu no Yaiba",
        "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-1.jpg?t=1625783509",
        "rating": 8.55
    },
    {   "id": 18,
        "title":"Kaguya-sama: Love is War - Ultra Romantic",
        "image":"https://cdn.anime-planet.com/anime/primary/kaguya-sama-love-is-war-ultra-romantic-1.webp?t=1648364924",
        "rating": 8.40
    },
    {   "id": 19,
        "title":"Hunter x Hunter (2011)",
        "image":"https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-2011-1.jpg?t=1625774966",
        "rating": 9.05
    },
    {   "id": 20,
        "title":"Haikyuu!! To the Top: Part II",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-to-the-top-part-ii-1.jpg?t=1625788721",
        "rating": 8.54
    },
    {   "id": 21,
        "title":"Jujutsu Kaisen 0",
        "image":"https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-0-1.jpg?t=1635299238",
        "rating": 8.53
    },
    {   "id": 22,
        "title":"Code Geass: Lelouch of the Rebellion R2",
        "image":"https://cdn.anime-planet.com/anime/primary/code-geass-lelouch-of-the-rebellion-r2-1.jpg?t=1625767733",
        "rating": 8.91
    },
    {   "id": 23,
        "title":"Link Click",
        "image":"https://cdn.anime-planet.com/anime/primary/link-click-1.webp?t=1628016711",
        "rating": 8.80
    },
    {   "id": 24,
        "title":"That Time I Got Reincarnated as a Slime Season 2",
        "image":"https://cdn.anime-planet.com/anime/primary/that-time-i-got-reincarnated-as-a-slime-season-2-1.jpg?t=1625764401",
        "rating": 8.40
    },
    {   "id": 25,
        "title":"Gintama: The Very Final",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-the-very-final-1.jpg?t=1635597167",
        "rating": 9.04
    },
    {   "id": 26,
        "title":"Mo Dao Zu Shi 2",
        "image":"https://cdn.anime-planet.com/anime/primary/mo-dao-zu-shi-2-1.jpg?t=1625785538",
        "rating": 8.47
    },
    {   "id": 27,
        "title":"Mob Psycho 100 II",
        "image":"https://cdn.anime-planet.com/anime/primary/mob-psycho-100-ii-1.jpg?t=1625782687",
        "rating": 8.81
    },
    {   "id": 28,
        "title":"Given",
        "image":"https://cdn.anime-planet.com/anime/primary/given-1.jpg?t=1625762417",
        "rating": 8.35
    },
    {   "id": 29,
        "title":"Gintama: Shirogane no Tamashii-hen 2",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-shirogane-no-tamashii-hen-2-1.jpg?t=1625783072",
        "rating": 8.81
    },
    {   "id": 30,
        "title":"Gintama Kanketsu-hen: Yorozuya yo Eien Nare",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-kanketsu-hen-yorozuya-yo-eien-nare-1.jpg?t=1625776143",
        "rating": 8.93
    },
    {   "id": 31,
        "title":"Gintama': Enchousen",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-enchousen-1.jpg?t=1625776198",
        "rating": 9.04
    },
    {   "id": 32,
        "title":"Fruits Basket 2nd Season",
        "image":"https://cdn.anime-planet.com/anime/primary/fruits-basket-2nd-season-1.jpg?t=1625787936",
        "rating": 8.57
    },
    {   "id": 33,
        "title":"Gintama°",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-2015-1.jpg?t=1625778481",
        "rating": 9.08
    },
    {   "id": 34,
        "title":"Haikyuu!! To the Top",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-to-the-top-part-ii-1.jpg?t=1625788721",
        "rating": 8.36
    },
    {   "id": 35,
        "title":"The Promised Neverland",
        "image":"https://cdn.anime-planet.com/anime/primary/the-promised-neverland-1.jpg?t=1625783162",
        "rating": 8.54
    }
]

module.exports = animeData;