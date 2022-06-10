let animeData = {
    animeList: [
        {   
            "title":"SPY x FAMILY",
            "image":"https://cdn.anime-planet.com/anime/primary/spy-x-family-1-285x403.webp?t=1646636920",
            "rating": 9.04,
            "runtime": "Apr 2022 - present",
            "genre": [ "Action", "Comedy" ],
            "episodes": 10,
            "synopsis": 'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.'
        },
        {   
            "title":"Demon Slayer: Kimetsu no Yaiba - Entertainment District Arc",
            "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-entertainment-district-arc-1-285x399.webp?t=1632583530",
            "rating": 8.55,
            "runtime": "Dec 2021 - Feb 2022",
            "episodes": 11,
            "genre": [ "Action", "Fantasy" ],
            "synopsis": "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Pillar, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank demon."
        },
        {   
            "title":"Fruits Basket the Final Season",
            "image":"https://cdn.anime-planet.com/anime/primary/fruits-basket-the-final-season-1-285x399.jpg?t=1628016647",
            "rating": 9.04,
            "runtime": "Apr 2021 - Jun 2021",
            "episodes": 13,
            "genre": [ "Drama", "Romance", "Supernatural" ],
            "synopsis": "Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment."
        },
        {   
            "title":"Fullmetal Alchemist: Brotherhood",
            "image":"https://cdn.anime-planet.com/anime/primary/fullmetal-alchemist-brotherhood-1-190x285.jpg?t=1625886288",
            "rating": 9.14,
            "runtime": "Apr 2009 - Jul 2010",
            "episodes": 64,
            "genre": [ "Action", "Adventure", "Drama", "Fantasy" ],
            "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor."
        },
        {   
            "title":"Attack on Titan 3rd Season: Part 2",
            "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-3rd-season-part-ii-1-190x285.jpg?t=1625898798",
            "rating": 8.62,
            "runtime": "Apr 2019 - Jul 2019",
            "episodes": 10,
            "genre": [ "Action", "Drama" ],
            "synopsis": `Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless "Titans" takes the stage once again.Returning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them.`
        },
        {   
            "title":"Jujutsu Kaisen",
            "image":"https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-1-190x286.jpg?t=1625907951",
            "rating": 8.68,
            "runtime": "Oct 2020 - Mar 2021",
            "episodes": 24,
            "genre": [ "Action", "Fantasy" ], 
            "synopsis": 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the "King of Curses."'
        },
        {   
            "title":"Haikyuu!! Karasuno High School vs Shiratorizawa Academy",
            "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-karasuno-high-school-vs-shiratorizawa-academy-1.jpg?t=1625779759",
            "rating": 8.79,
            "runtime": "Oct 2020 - Mar 2021",
            "episodes": 24,
            "genre": [ "Sports" ], 
            "synopsis": "After the victory against Aoba Jousai High, Karasuno High School, once called “a fallen powerhouse, a crow that can’t fly,” has finally reached the climax of the heated Spring tournament. Now, to advance to nationals, the Karasuno team has to defeat the powerhouse Shiratorizawa Academy. Karasuno’s greatest hurdle is their adversary’s ace, Wakatoshi Ushijima, the number one player in the Miyagi Prefecture, and one of the country’s top three aces."
        },
        {   
            "title":"Demon Slayer: Kimetsu no Yaiba Movie - Mugen Train",
            "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-movie-mugen-train-1.jpg?t=1625788462",
            "rating": 8.66,
            "runtime": "Oct 2020",
            "episodes": 1,
            "genre": [ "Action", "Fantasy" ], 
            "synopsis": "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand."
        },
        {   
            "title":"Attack on Titan The Final Season Part 1",
            "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-the-final-season-1.jpg?t=1630355436",
            "rating": 8.84,
            "runtime": "Dec 2020 - Mar 2021",
            "episodes": 16,
            "genre": [ "Action", "Drama" ], 
            "synopsis": "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps." 
        },
        {   
            "title":"Your Name",
            "image":"https://cdn.myanimelist.net/images/manga/1/182270l.jpg",
            "rating": 8.40,
            "runtime": "May 2016 - Jan 2017",
            "episodes": 16,
            "genre": [ "Supernatural", "Drama" ], 
            "synopsis": "Mitsuha Miyamizu is a high school girl living in the countryside town of Itomori. She yearns for a life in Tokyo as she is sick of living in the countryside. At the same time, Taki Tachibana, a high school student, lives in Tokyo and has a great interest in architecture, aiming to become an urban planner in the near future. One day, Mitsuha dreams of herself as a boy living a life in the dense capital, while Taki dreams of living as a girl in the rural town of Itomori. As time passes by, the two discover that these are not just dreams, but that they actually swap bodies upon falling asleep! Kimi no Na wa. revolves around Mitsuha and Taki as they experience the supernatural. With both of them working together to deal with the strange phenomenon, how will this impact their everyday life?" 
        },
        {   
            "title":"Haikyuu!! Second Season",
            "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-second-season-1.jpg?t=1625778467",
            "rating": 8.65,
            "runtime": "Oct 2015 - May 2016",
            "episodes": 25,
            "genre": [ "Sport" ], 
            "synopsis": "Following their participation at the Inter-High, the Karasuno High School volleyball team attempts to refocus their efforts, aiming to conquer the Spring tournament instead. When they receive an invitation from long-standing rival Nekoma High, Karasuno agrees to take part in a large training camp alongside many notable volleyball teams in Tokyo and even some national level players. By playing with some of the toughest teams in Japan, they hope not only to sharpen their skills, but also come up with new attacks that would strengthen them. Moreover, Hinata and Kageyama attempt to devise a more powerful weapon, one that could possibly break the sturdiest of blocks."
        },
        {   
            "title":"Attack on Titan The Final Season: Part II",
            "image":"https://cdn.anime-planet.com/anime/primary/attack-on-titan-the-final-season-part-ii-1.webp?t=1640076824",
            "rating": 8.85,
            "runtime": "Jan 2022 - Apr 2022",
            "episodes": 12,
            "genre": [ "Action", "Drama" ],
            "synopsis": "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny. Meanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos."
        },
        {   
            "title":"Violet Evergarden Movie",
            "image":"https://cdn.anime-planet.com/anime/primary/violet-evergarden-movie-1.webp?t=1634333039",
            "rating": 8.95,
            "runtime": "Sep 2020",
            "episodes": 1,
            "genre": [ "Drama", "Fantasy", "Slice of Life" ],
            "synopsis": `Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for "Auto Memory Dolls." Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear. Violet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, "I love you," may still be alive even after the many years that have passed.`
        },
        {   
            "title":"A Silent Voice",
            "image":"https://cdn.anime-planet.com/anime/primary/a-silent-voice-1.jpg?t=1625778389",
            "rating": 8.95,
            "runtime": "Sep 2016",
            "episodes": 1,
            "genre": [ "Drama" ],
            "synopsis": `As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends`
        },
        {   
            "title":"Demon Slayer: Kimetsu no Yaiba",
            "image":"https://cdn.anime-planet.com/anime/primary/demon-slayer-kimetsu-no-yaiba-1.jpg?t=1625783509",
            "rating": 8.55,
            "runtime": "Apr 2019 - Sep 2019",
            "episodes": 26,
            "genre": [ "Action", "Fantasy" ],
            "synopsis": "One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity."
        },
        {   
            "title":"Hunter x Hunter (2011)",
            "image":"https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-2011-1.jpg?t=1625774966",
            "rating": 9.05,
            "runtime": "Oct 2011 - Sep 2014",
            "episodes": 148,
            "genre": [ "Action", "Adventure", "Fantasy" ],
            "synopsis": "Hunters are specialized in a wide variety of fields, ranging from treasure hunting to cooking. They have access to otherwise unavailable funds and information that allow them to pursue their dreams and interests. However, being a hunter is a special privilege, only attained by taking a deadly exam with an extremely low success rate. Gon Freecss, a 12-year-old boy with the hope of finding his missing father, sets out on a quest to take the Hunter Exam. Along the way, he picks up three companions who also aim to take the dangerous test: the revenge-seeking Kurapika, aspiring doctor Leorio Paladiknight, and a mischievous child the same age as Gon, Killua Zoldyck."
        },
        {   
            "title":"Haikyuu!! To the Top: Part II",
            "image":"https://cdn.anime-planet.com/anime/primary/haikyuu-to-the-top-part-ii-1.jpg?t=1625788721",
            "rating": 8.54,
            "runtime": "Oct 2020 - Dec 2020",
            "episodes": 12,
            "genre": [ "Sports" ],
            "synopsis": `Once called a fallen powerhouse and known as "Flightless Crows," Karasuno High School has finally taken flight at nationals. With a comprehensive performance against Tsubakihara Academy in their first match, the team is now facing its toughest opponent yet: the runners-up of the last Spring Tournament, Inarizaki High School. Furthermore, dealing with the formidable twin Miya brothers only makes things more difficult for Karasuno.`
        },
        {   
            "title":"Jujutsu Kaisen 0",
            "image":"https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-0-1.jpg?t=1635299238",
            "rating": 8.53,
            "runtime": "Dec 2021",
            "episodes": 1,
            "genre": [ "Action", "Fantasy" ],
            "synopsis": `Yuuta Okkotsu is haunted. Ever since his childhood friend Rika died in a traffic accident, her ghost has stuck with him. But her spirit does not appear as the sweet girl Yuuta once knew. Instead, she manifests as a monstrous and powerful entity who fiercely protects him. Unable to control Rika's violent behavior, Yuuta is helpless to stop the bloodshed that follows from her brutal vengeance. As a result, when apprehended by "Jujutsu" sorcerers—the secret guardians of the world, trained to combat forces like Rika—Yuuta wishes to be completely isolated so that no one else can get hurt. Yet his apprehender, the master sorcerer Satoru Gojou, has different plans for him: he will join Jujutsu High School and learn to control Rika in order to help people. Now a first-year at this school, Yuuta starts to learn Jujutsu arts and combat malignant beings. Alongside his new classmates Maki Zenin, a Jujutsu weapons expert; Toge Inumaki, a spellcaster who uses his words as weapons; and Panda, a seemingly walking and talking panda bear, Yuuta begins to find his place in the world and, for once, to feel comfortable with his abilities. However, as his training progresses, Yuuta comes to learn that the dangers of the Jujutsu world go far beyond that of wicked spirits`
        },
        {   
            "title":"Code Geass: Lelouch of the Rebellion R2",
            "image":"https://cdn.anime-planet.com/anime/primary/code-geass-lelouch-of-the-rebellion-r2-1.jpg?t=1625767733",
            "rating": 8.91,
            "runtime": "Apr 2008 - Sep 2008",
            "episodes": 25,
            "genre": [ "Action", "Drama", "Sci-Fi" ],
            "synopsis": "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt. Lelouch Lamperouge, having lost all memory of his double life, is living peacefully alongside his friends as a high school student at Ashford Academy. His former partner C.C., unable to accept this turn of events, takes it upon herself to remind him of his past purpose, hoping that the mastermind Zero will rise once again to finish what he started, in this thrilling conclusion to the series."
        },
        {   
            "title":"Link Click",
            "image":"https://cdn.anime-planet.com/anime/primary/link-click-1.webp?t=1628016711",
            "rating": 8.80,
            "runtime": "Apr 2021 - Jul 2021",
            "episodes": 11,
            "genre": [ "Drama", "Supernatural" ],
            "synopsis": `It is said that a picture is worth a thousand words. In this case, it holds an infinite amount of secrets. These are secrets that only Cheng Xiaoshi and Lu Guang are able to find. In a small shop called "Time Photo Studio," the two friends provide a special service: using their extraordinary powers that let them enter photographs, they jump into pictures brought to them by clients in order to grant their wishes. Through the eyes of the photographer, they live through the events surrounding the picture and try to decipher how to solve their client's request. But every time they jump into a picture, they take a great risk. One wrong move and they could alter the future of the person who took the picture... and possibly countless other events too. So when the events they are forced to live through in these pictures start to become personal, it will take the utmost strength to push their feelings aside and focus on accomplishing the task they were paid to do.`
        },
        {   
            "title":"That Time I Got Reincarnated as a Slime Season 2",
            "image":"https://cdn.anime-planet.com/anime/primary/that-time-i-got-reincarnated-as-a-slime-season-2-1.jpg?t=1625764401",
            "rating": 8.40,
            "runtime": "Jul 2021 - Sep 2021",
            "episodes": 12,
            "genre": [ "Action", "Adventure", "Comedy", "Fantasy" ],
            "synopsis": `The nation of Tempest is in a festive mood after successfully overcoming the surprise attack from the Falmuth Army and the Western Holy Church. Beyond the festivities lies a meeting between Tempest and its allies to decide the future of the Nation of Monsters. The aftermath of the Falmuth invasion, Milim Nava's suspicious behavior, and the disappearance of Demon Lord Carrion—the problems seem to keep on piling up. Rimuru Tempest, now awakened as a "True Demon Lord," decides to go on the offensive against Clayman. With the fully revived "Storm Dragon" Veldora, "Ultimate Skill" Raphael, and other powerful comrades, the ruler of the Tempest is confident in taking down his enemies one by one until he can face the man pulling the strings.`
        },
        {   
            "title":"Gintama: The Very Final",
            "image":"https://cdn.anime-planet.com/anime/primary/gintama-the-very-final-1.jpg?t=1635597167",
            "rating": 9.04,
            "runtime": "Jan 2021",
            "episodes": 1,
            "genre": [ "Action", "Comedy", "Drama", "Sci-Fi"],
            "synopsis": "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo. Later, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures."
        },
        {   
            "title":"Mob Psycho 100 II",
            "image":"https://cdn.anime-planet.com/anime/primary/mob-psycho-100-ii-1.jpg?t=1625782687",
            "rating": 8.81,
            "runtime": "Jan 2019 - Apr 2019",
            "episodes": 13,
            "genre": [ "Action", "Comedy", "Supernatural" ],
            "synopsis": `Shigeo "Mob" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens. While the workflow remains the same, Mob isn't just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob's supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before.`
        },
        {   
            "title":"The Promised Neverland",
            "image":"https://cdn.anime-planet.com/anime/primary/the-promised-neverland-1.jpg?t=1625783162",
            "rating": 8.54,
            "runtime": "Jan 2019 - March 2019",
            "episodes": 12,
            "genre": [ "Mystery", "Sci-Fi", "Suspense" ],
            "synopsis": `Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their "Mama," Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage—a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family, never to be heard from again. However, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama.`
        }
    ],
    userWatchList: []
}

module.exports = animeData;