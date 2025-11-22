const gameCompaniesData = {
    "companies": [
        {"name": "任天堂", "city": "京都", "country": "日本"},
        {"name": "ポケモン", "city": "东京", "country": "日本"},
        {"name": "カプコン", "city": "大阪", "country": "日本"},
        {"name": "バンダイナムコ エンターテインメント", "city": "东京", "country": "日本"},
        {"name": "スクウェア・エニックス", "city": "东京", "country": "日本"},
        {"name": "KONAMI", "city": "东京", "country": "日本"},
        {"name": "コーエーテクモゲームス", "city": "横滨", "country": "日本"},
        {"name": "ソニー・インタラクティブ エンタテインメント", "city": "东京", "country": "日本"},
        {"name": "日本マイクロソフト", "city": "东京", "country": "日本"},
        {"name": "セガ", "city": "东京", "country": "日本"},
        {"name": "マーベラス", "city": "东京", "country": "日本"},
        {"name": "アニプレックス", "city": "东京", "country": "日本"},
        {"name": "レベルファイブ", "city": "福冈", "country": "日本"},
        {"name": "エレクトロニック・アーツ", "city": "东京", "country": "日本"},
        {"name": "フロム・ソフトウェア", "city": "东京", "country": "日本"},
        {"name": "アトラス", "city": "东京", "country": "日本"},
        {"name": "日本ファルコム", "city": "东京", "country": "日本"},
        {"name": "SUPERDELUXE GAMES", "city": "东京", "country": "日本"},
        {"name": "ブシロード", "city": "东京", "country": "日本"},
        {"name": "PLAYISM", "city": "东京", "country": "日本"},
        {"name": "ポノス", "city": "东京", "country": "日本"},
        {"name": "ユービーアイソフト", "city": "东京", "country": "日本"},
        {"name": "アイディアファクトリー", "city": "东京", "country": "日本"},
        {"name": "2K", "city": "东京", "country": "日本"},
        {"name": "アクアプラス", "city": "东京", "country": "日本"},
        {"name": "505 Games", "city": "东京", "country": "日本"},
        {"name": "Game Science", "city": "广州", "country": "中国"},
        {"name": "Binary Haze Interactive", "city": "东京", "country": "日本"},
        {"name": "ジェムドロップ", "city": "东京", "country": "日本"},
        {"name": "SNK", "city": "大阪", "country": "日本"},
        {"name": "タカラトミー", "city": "东京", "country": "日本"},
        {"name": "アークシステムワークス", "city": "横滨", "country": "日本"},
        {"name": "Game*Spark Publishing", "city": "东京", "country": "日本"},
        {"name": "MAGES.", "city": "东京", "country": "日本"},
        {"name": "アクティビジョン", "city": "东京", "country": "日本"},
        {"name": "スパイク・チュンソフト", "city": "东京", "country": "日本"},
        {"name": "エンターグラム", "city": "东京", "country": "日本"},
        {"name": "インティ・クリエイツ", "city": "大阪", "country": "日本"},
        {"name": "PLAION", "city": "东京", "country": "日本"},
        {"name": "Aladdin X", "city": "东京", "country": "日本"},
        {"name": "ブロッコリー", "city": "东京", "country": "日本"},
        {"name": "集英社ゲームズ", "city": "东京", "country": "日本"},
        {"name": "日本一ソフトウェア", "city": "东京", "country": "日本"},
        {"name": "イマジニア", "city": "东京", "country": "日本"},
        {"name": "シティコネクション", "city": "东京", "country": "日本"},
        {"name": "フリュー", "city": "东京", "country": "日本"},
        {"name": "DMM GAMES", "city": "东京", "country": "日本"},
        {"name": "コンパイルハート", "city": "东京", "country": "日本"},
        {"name": "ディースリー・パブリッシャー", "city": "东京", "country": "日本"},
        {"name": "ネクソン", "city": "东京", "country": "日本"},
        {"name": "サイバーコネクトツー", "city": "福冈", "country": "日本"},
        {"name": "エディア", "city": "东京", "country": "日本"},
        {"name": "ハピネット", "city": "东京", "country": "日本"},
        {"name": "H2 INTERACTIVE", "city": "东京", "country": "日本"},
        {"name": "Game Source Entertainment", "city": "东京", "country": "日本"},
        {"name": "エクスペリエンス", "city": "东京", "country": "日本"},
        {"name": "Sunblink Entertainment", "city": "东京", "country": "日本"},
        {"name": "日本コロムビア", "city": "东京", "country": "日本"},
        {"name": "テヨンジャパン", "city": "东京", "country": "日本"},
        {"name": "コスモマキアー", "city": "东京", "country": "日本"},
        {"name": "dramatic create", "city": "东京", "country": "日本"},
        {"name": "CE-Asia", "city": "东京", "country": "日本"},
        {"name": "HoYoverse", "city": "上海", "country": "中国"},
        {"name": "フロンティアワークス", "city": "东京", "country": "日本"},
        {"name": "タイトー", "city": "东京", "country": "日本"},
        {"name": "ソニックパワード", "city": "东京", "country": "日本"},
        {"name": "Tozai Games", "city": "东京", "country": "日本"},
        {"name": "文化放送エクステンド", "city": "东京", "country": "日本"},
        {"name": "U＆Iエンターテイメントジャパン", "city": "东京", "country": "日本"},
        {"name": "Alliance Arts", "city": "东京", "country": "日本"},
        {"name": "Odencat", "city": "东京", "country": "日本"},
        {"name": "サクセス", "city": "东京", "country": "日本"},
        {"name": "KAMITSUBAKI STUDIO", "city": "东京", "country": "日本"},
        {"name": "ベセスダ・ソフトワークス", "city": "东京", "country": "日本"},
        {"name": "グラビティゲームアライズ", "city": "东京", "country": "日本"},
        {"name": "NetEase Games", "city": "广州", "country": "中国"},
          {
            "name": "Activision Blizzard",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Activision Publishing",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "First Contact Entertainment",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Giant Sparrow",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Grab Games",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Green Man Gaming",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Naughty Dog",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Santa Monica Studio",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Seriously Digital Entertainment",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Super Bit Machine",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "TapBlaze",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "The Initiative",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Treyarch",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "thatgamecompany",
            "city": "圣莫尼卡",
            "country": "美国"
          },
          {
            "name": "Amazon Games",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Darkpaw Games",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Daybreak Game Company",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Empty Clip Studios",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Epic Games",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Interabang Entertainment",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Intrepid Studios",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Juggernaut Games",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "MACHINE",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "NimbleBit",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Pocketwatch Games",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Psyonix",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Rogue Planet Games",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "San Diego Studio",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "The Behemoth",
            "city": "圣迭戈",
            "country": "美国"
          },
          {
            "name": "Capcom",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Firecraft Studios",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Frismos",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Glu Mobile",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Monomi Park",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "NCSoft",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Pixelopus",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "PlayStation Studios",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Roblox",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Rumble Entertainment",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "SecretBuilders",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Spiritwalk Games",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Storm8",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Super Evil Megacorp",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Temple Gates",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "TikGames",
            "city": "圣马特奥",
            "country": "美国"
          },
          {
            "name": "Armor Games",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Armor Games Studios",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Atlus West",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Black Isle Studios",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Blind Squirrel Games",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Blizzard Entertainment",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Bonfire Studios",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Digital Extremes",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "JOYCITY Annex",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "KOG Games",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Kakao Games",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "MobilityWare",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Obsidian Entertainment",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Playwith Interactive",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Ready At Dawn Studios",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Sega",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Sega of America",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Stark Gaming",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "SuperVillain Studios",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Twitch",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "Zepetto",
            "city": "尔湾",
            "country": "美国"
          },
          {
            "name": "6waves",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Action Button Entertainment",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Aeria Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Alcuria Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Astro Gaming",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Ayopa Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Big Blue Bubble",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Bolt Creative",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Campo Santo",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Capcom",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Capcom U.S.A.",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Cloudcade",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "CodeCombat",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Discord",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Double Coconut",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Double Fine Productions",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Double Loop Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Downpour Interactive",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Dynamighty",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Echtra Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Epic Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "FableLabs",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Flatter Than Earth",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Flying Wisdom Studios",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "FunPlus",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Funomena",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Game Developers Conference",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Gameloft",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Glu Mobile",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Havok",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Humble Bundle",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Impulse Gear",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Iron Realms Entertainment",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Jam City",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Kabam",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Kongregate",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Linden Lab",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Magic Tavern",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Massive Black",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Mastiff",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Mindstorm",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "MunkyFun",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "N3TWORK",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Nanovation Labs",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "NextGen Pants",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Niantic",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "O2D Studios",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Orthogonal Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "OutAct",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "PennyPop",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Pixowl",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "PlayFirst",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Playmatics",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Pocket Gems",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "PolyKid",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Present Creative",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Red Panda Studios",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Red Point Labs",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Rogue Rocket Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Shiny Shoe",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Skunk Studios",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Spread Shot Studios",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Supercell",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Supergiant Games",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Thekla",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "ToMorning Productions",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Tomorrow Corporation",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Twitch",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Ubisoft San Francisco",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Unity Technologies",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Unknown Worlds",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "WB Games San Francisco",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Wildlife Studios",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Worm Animation",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "Zynga",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "iWin",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "nWay",
            "city": "旧金山",
            "country": "美国"
          },
          {
            "name": "2Frogs Software",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Act 3 Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Arcade Distillery",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Bkom Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Capcom U.S.A.",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Cloud Imperium Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Collision Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "D3 Go!",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Digital Domain",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "E-Line Media",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Epic Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Evolved",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Exploding Tuba Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "F84 Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "FLARB",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Firefly Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Floor 84 Studio",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Flying Mollusk",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Game Design Skills",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Gameloft",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Genba Digital",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Ghost Story Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "High Horse Entertainment",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "High Impact Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "HitPoint Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Hyperkinetic Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Hypersonic Laboratories",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Imagination Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Iron Horse Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Isopod Labs",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Kung Fu Factory",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Lab Zero Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Legacy Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Mobius Digital",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Mountaintop Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Mythical Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Netmarble Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Niantic",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Night Light Interactive",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Nuttery Entertainment",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "PM Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Perilous Orbit",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Pixel Titans",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Playsaurus",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Playtika",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Polyphony Digital",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Pound Sand",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Reforged Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Respawn Entertainment",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Riot Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Royal Electronics",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Run Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Singularity 6",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Skybound Entertainment",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Snapshot Games",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Stress Level Zero",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Survios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Team Liquid",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "That's No Moon",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Tiny Castle Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Turbo Button",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "VC Mobile Entertainment",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Wefiends",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "White Elk Studios",
            "city": "洛杉矶",
            "country": "美国"
          },
          {
            "name": "Yacht Club Games",
            "city": "洛杉矶",
            "country": "美国"
          }
        ]
};
