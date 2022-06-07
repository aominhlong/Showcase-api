
const animeImages = [
    {
        "title":"SPY x FAMILY",
        "image":"https://cdn.anime-planet.com/anime/primary/spy-x-family-1-285x403.webp?t=1646636920"
    },
    {
        "title":"Demon Slayer: Kimetsu no Yaiba - Entertainment District Arc",
        "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-1-285x399.webp?t=1632583530"
    },
    {
        "title":"Fruits Basket the Final Season",
        "image":"https://cdn.anime-planet.com/anime/primary/fruits-basket-the-final-season-1-285x399.jpg?t=1628016647"
    },
    {
        "title":"Fullmetal Alchemist: Brotherhood",
        "image":"https://cdn.anime-planet.com/anime/primary/fullmetal-alchemist-brotherhood-1-190x285.jpg?t=1625886288"
    },
    {
        "title":"Mo Dao Zu Shi 3",
        "image":"https://cdn.anime-planet.com/anime/primary/mo-dao-zu-shi-3-1-285x399.jpg?t=1628016525"
    },
    {
        "title":"Attack on Titan 3rd Season: Part II",
        "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-3rd-season-part-ii-1-190x285.jpg?t=1625898798"
    },
    {
        "title":"Jujutsu Kaisen",
        "image":"https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-1-190x286.jpg?t=1625907951"
    },
    {
        "title":"Haikyuu!! Karasuno High School vs Shiratorizawa Academy",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-karasuno-high-school-vs-shiratorizawa-academy-1.jpg?t=1625779759"
    },
    {
        "title":"Demon Slayer: Kimetsu no Yaiba Movie - Mugen Train",
        "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-movie-mugen-train-1.jpg?t=1625788462"
    },
    {
        "title":"Attack on Titan The Final Season",
        "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-the-final-season-1.jpg?t=1630355436"
    },
    {
        "title":"your name.",
        "image":"https://cdn.anime-planet.com/anime/primary/your-name-1.jpg?t=1625779598"
    },
    {
        "title":"Haikyuu!! Second Season",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-second-season-1.jpg?t=1625778467"
    },
    {
        "title":"Attack on Titan The Final Season: Part II",
        "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-the-final-season-part-ii-1.webp?t=1640076824"
    },
    {
        "title":"Violet Evergarden Movie",
        "image":"https://cdn.anime-planet.com/anime/primary/violet-evergarden-movie-1.webp?t=1634333039"
    },
    {
        "title":"A Silent Voice",
        "image":"https://cdn.anime-planet.com/anime/primary/a-silent-voice-1.jpg?t=1625778389"
    },
    {
        "title":"Heaven Official's Blessing Special",
        "image":"https://cdn.anime-planet.com/anime/primary/heaven-officials-blessing-special-1.jpg?t=1625791153"
    },
    {
        "title":"Demon Slayer: Kimetsu no Yaiba",
        "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-1.jpg?t=1625783509"
    },
    {
        "title":"Kaguya-sama: Love is War - Ultra Romantic",
        "image":"https://cdn.anime-planet.com/anime/primary/kaguya-sama-love-is-war-ultra-romantic-1.webp?t=1648364924"
    },
    {
        "title":"Hunter x Hunter (2011)",
        "image":"https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-2011-1.jpg?t=1625774966"
    },
    {
        "title":"Haikyuu!! To the Top: Part II",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-to-the-top-part-ii-1.jpg?t=1625788721"
    },
    {
        "title":"Jujutsu Kaisen 0",
        "image":"https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-0-1.jpg?t=1635299238"
    },
    {
        "title":"Code Geass: Lelouch of the Rebellion R2",
        "image":"https://cdn.anime-planet.com/anime/primary/code-geass-lelouch-of-the-rebellion-r2-1.jpg?t=1625767733"
    },
    {
        "title":"Link Click",
        "image":"https://cdn.anime-planet.com/anime/primary/link-click-1.webp?t=1628016711"
    },
    {
        "title":"That Time I Got Reincarnated as a Slime Season 2",
        "image":"https://cdn.anime-planet.com/anime/primary/that-time-i-got-reincarnated-as-a-slime-season-2-1.jpg?t=1625764401"
    },
    {
        "title":"Gintama: The Very Final",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-the-very-final-1.jpg?t=1635597167"
    },
    {
        "title":"Mo Dao Zu Shi 2",
        "image":"https://cdn.anime-planet.com/anime/primary/mo-dao-zu-shi-2-1.jpg?t=1625785538"
    },
    {
        "title":"Mob Psycho 100 II",
        "image":"https://cdn.anime-planet.com/anime/primary/mob-psycho-100-ii-1.jpg?t=1625782687"
    },
    {
        "title":"Given",
        "image":"https://cdn.anime-planet.com/anime/primary/given-1.jpg?t=1625762417"
    },
    {
        "title":"Gintama: Shirogane no Tamashii-hen 2",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-shirogane-no-tamashii-hen-2-1.jpg?t=1625783072"
    },
    {
        "title":"Gintama Kanketsu-hen: Yorozuya yo Eien Nare",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-kanketsu-hen-yorozuya-yo-eien-nare-1.jpg?t=1625776143"
    },
    {
        "title":"Gintama': Enchousen",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-enchousen-1.jpg?t=1625776198"
    },
    {
        "title":"Fruits Basket 2nd Season",
        "image":"https://cdn.anime-planet.com/anime/primary/fruits-basket-2nd-season-1.jpg?t=1625787936"
    },
    {
        "title":"Gintama°",
        "image":"https://cdn.anime-planet.com/anime/primary/gintama-2015-1.jpg?t=1625778481"
    },
    {
        "title":"Haikyuu!! To the Top",
        "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-to-the-top-part-ii-1.jpg?t=1625788721"
    },
    {
        "title":"The Promised Neverland",
        "image":"https://cdn.anime-planet.com/anime/primary/the-promised-neverland-1.jpg?t=1625783162"
    }
]