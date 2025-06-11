// src/data/quizData.ts

// Định nghĩa các kiểu dữ liệu
type Answer = 'A' | 'B' | 'C' | 'D';

export interface Question {
    id: number;
    content: string;
    options: { [key in Answer]: string };
    correctAnswer: Answer;
    explanation: string;
    category: 'vocabulary' | 'grammar' | 'reading' | 'kanji';
}

export const quizData: Question[] = [
    {
        id: 1,
        content: "【男女】はおとこのひと　おんなのひとです。",
        options: { A: "だんじょ", B: "おとこおんな", C: "だんしょう", D: "たんじょ" },
        correctAnswer: "A",
        explanation: "Đây là cách đọc On'yomi (âm Hán-Nhật) của hai chữ Hán 男 (dan) và 女 (jo) khi ghép lại, có nghĩa là 'nam nữ'.",
        category: "kanji"
    },
    {
        id: 2,
        content: "次の文章を読んで、後の問いに答えなさい。\nきむらさんのへやはとうきょうにあります。東京は日本ののりだしです。おおきいです。そして、とてもきれいです。東京にきれいなかわとひろいやまがあります。\n\n1) きむらさんのまちはどちらですか。\n2) きむらさんのまちになにがありますか。",
        options: {
            A: "1) 東京です。 | 2) きれいなかわとひろいやまがあります。",
            B: "1) 日本です。 | 2) きれいなみちとたかいやまがあります。",
            C: "1) 東京です。 | 2) たかいやまとふるいかわがあります。",
            D: "1) バンコクです。| 2) きょうかいがあります。"
        },
        correctAnswer: "A",
        explanation: "1) Đoạn văn có câu 'きむらさんのへやはとうきょうにあります' (Phòng của bạn Kimura ở Tokyo). 2) Đoạn văn có đề cập '東京にきれいなかわとひろいやまがあります' (Ở Tokyo có sông đẹp và núi rộng).",
        category: "reading"
    },
    {
        id: 3,
        content: "次の文章を読んで、後の問いに答えなさい。\nわたしはミノです。せんしゅう、わたしのいえでえいがをみました。とてもおもしろかったです。それから、スーパーへ行きました。パンをかいました。\n\nせんしゅう、ミノさんはなにをしましたか。",
        options: { A: "えいがをみました。", B: "ビールをのみました。", C: "パンをたべました。", D: "はがきをかいました。" },
        correctAnswer: "A",
        explanation: "Đoạn văn ghi rõ 'せんしゅう、わたしのいえでえいがをみました' (Tuần trước, tôi đã xem phim ở nhà).",
        category: "reading"
    },
    {
        id: 4,
        content: "A: せんしゅうの 日曜日、どこか ( ) 行きましたか。 B: はい、ハノイへ行きました。",
        options: { A: "で", B: "が", C: "と", D: "へ" },
        correctAnswer: "D",
        explanation: "Trợ từ へ dùng để chỉ phương hướng của hành động 'đi' (行きました).",
        category: "grammar"
    },
    {
        id: 5,
        content: "きのう、ともだちをさそってえいがをみにいきました。( )。",
        options: { A: "やわらかかったです", B: "きもちがよかったです。", C: "たのしかったです", D: "おいしかったです" },
        correctAnswer: "C",
        explanation: "Trong các lựa chọn, 'vui vẻ' (たのしかったです) là tính từ hợp lý nhất để miêu tả cảm xúc sau khi đi xem phim.",
        category: "vocabulary"
    },
    {
        id: 6,
        content: "Q: あした、ランさんは ( ) をもちたいですか。 A: おすしを食べたいです。",
        options: { A: "なに", B: "どこ", C: "どう", D: "どんな" },
        correctAnswer: "A",
        explanation: "Câu trả lời là 'tôi muốn ăn sushi' (một đồ vật), vì vậy câu hỏi phải là 'bạn muốn cái gì', tức là なに. (Lưu ý: câu hỏi có lỗi chính tả, もちたい nên là たべたい).",
        category: "grammar"
    },
    {
        id: 7,
        content: "１２月 ( )、日本へ行きました。とてもさむかったです。",
        options: { A: "に", B: "で", C: "も", D: "と" },
        correctAnswer: "A",
        explanation: "Trợ từ に được dùng để chỉ một thời điểm cụ thể (tháng 12) mà hành động diễn ra.",
        category: "grammar"
    },
    {
        id: 8,
        content: "Hãy lựa chọn đáp án phù hợp nhất điền vào vị trí ( ★ ) trong câu sau đây.\nこの ( ) ( ) ( ★ ) ( ) です。",
        options: { A: "りょうり", B: "とても", C: "おいしい", D: "は" },
        correctAnswer: "B",
        explanation: "Câu hoàn chỉnh là 「この料理(りょうり)はとてもおいしいです。」(Món ăn này rất ngon). Từ đứng ở vị trí ngôi sao (★) là とても.",
        category: "grammar"
    },
    {
        id: 9,
        content: "( ★ ) に入れる最もよいものを、ａｂｃｄから一つ選んでください。\n( ★ ) ( ) ( ) ( )。",
        options: { A: "は", B: "ゆきがふりました", C: "きのうのあさ", D: "とても" },
        correctAnswer: "C",
        explanation: "Câu hoàn chỉnh là 「きのうのあさ、とても雪(ゆき)がふりました。」 (Sáng hôm qua tuyết rơi rất nhiều). Cụm từ đứng đầu câu (★) là きのうのあさ.",
        category: "grammar"
    },
    {
        id: 10,
        content: "A: せんしゅうのどようびは ( )。 B: とてもたのしかったです。",
        options: { A: "どうですか", B: "どこですか", C: "どうしてですか", D: "どうでしたか" },
        correctAnswer: "D",
        explanation: "Câu trả lời 'rất vui' ở thì quá khứ, nên câu hỏi phải là 'đã như thế nào?', tức là どうでしたか.",
        category: "grammar"
    },
    {
        id: 11,
        content: "次の言葉の使い方として最もよいものを、ａｂｃｄから一つ選んでください。\nしずか",
        options: { A: "このたべものはしずかです。", B: "そのカメラはしずかです。", C: "このまちはしずかなところです。", D: "これはしずかなしごとです。" },
        correctAnswer: "C",
        explanation: "しずか (yên tĩnh, yên bình) thường được dùng để miêu tả một địa điểm. Câu 'Thị trấn này là một nơi yên tĩnh' là cách dùng đúng và tự nhiên nhất.",
        category: "vocabulary"
    },
    {
        id: 12,
        content: "あの (女の人) はだれですか。",
        options: { A: "おんなのひと", B: "おんな", C: "おとこのひと", D: "おとこ" },
        correctAnswer: "A",
        explanation: "女 đọc là おんな, 人 đọc là ひと. Ghép lại thành おんなのひと có nghĩa là 'người phụ nữ'.",
        category: "kanji"
    },
    {
        id: 13,
        content: "せんしゅうの にちようび、かぞくと レストランへいきました。それから、レストランでビールを ( )。",
        options: { A: "飲みません", B: "飲みます", C: "飲みませんでした", D: "飲みました" },
        correctAnswer: "D",
        explanation: "Bối cảnh là せんしゅう (tuần trước) nên động từ phải ở thì quá khứ (dạng ました). 'Uống bia' là ビールを飲みます, chia về quá khứ là 飲みました.",
        category: "grammar"
    },
    {
        id: 14,
        content: "A: どうしてジュースを飲みませんか。 B: ( )。",
        options: { A: "おいしいですから", B: "すきじゃありませんから", C: "たかいですから", D: "ひまですから" },
        correctAnswer: "B",
        explanation: "Câu 'Vì tôi không thích' là một lý do hợp lý để trả lời cho câu hỏi 'Tại sao bạn không uống nước trái cây?'.",
        category: "grammar"
    },
    {
        id: 15,
        content: "Hãy lựa chọn đáp án phù hợp nhất điền vào vị trí ( ★ ) trong câu sau đây.\n私は ( ★ ) ( ) かいもの ( ) ( )。",
        options: { A: "行きたいです", B: "へ", C: "スーパー", D: "に" },
        correctAnswer: "C",
        explanation: "Câu hoàn chỉnh là 「私(わたし)はスーパーへかいものに行(い)きたいです。」(Tôi muốn đi siêu thị mua sắm). Từ đứng ở vị trí ngôi sao (★) là スーパー.",
        category: "grammar"
    },
    {
        id: 16,
        content: "やすみのひ、アメリカへ ( ) 行きたいです。",
        options: { A: "りょこうに", B: "りょこうな", C: "りょこうで", D: "りょこうと" },
        correctAnswer: "A",
        explanation: "Mẫu câu [Danh từ] + に + 行く dùng để chỉ mục đích của việc đi. りょこうに行きたいです nghĩa là 'muốn đi du lịch'.",
        category: "grammar"
    },
    {
        id: 17,
        content: "日本の (のむもの) はとてもおいしいです。",
        options: { A: "生み物", B: "飲み物", C: "食べた物", D: "乗物" },
        correctAnswer: "B",
        explanation: "のむ (uống) viết là 飲, もの (vật) viết là 物. のむもの (đồ uống) viết là 飲み物.",
        category: "kanji"
    },
    {
        id: 18,
        content: "にごはんをたべなくても ( ) です。",
        options: { A: "たいへん", B: "ゆうめい", C: "おいしい", D: "ひま" },
        correctAnswer: "A",
        explanation: "Trong các lựa chọn, たいへん (vất vả, mệt mỏi) là hợp lý nhất để miêu tả tình trạng không ăn trong hai ngày.",
        category: "vocabulary"
    },
    {
        id: 19,
        content: "あしたは (きゅうじつ) ですか。",
        options: { A: "休実", B: "休曰", C: "日休", D: "休日" },
        correctAnswer: "D",
        explanation: "きゅうじつ (ngày nghỉ) được viết bằng Kanji là 休日.",
        category: "kanji"
    },
    {
        id: 20,
        content: "たなかさんは (かいもの) にいきます。",
        options: { A: "買いもの", B: "飲み物", C: "生き物", D: "食べ物" },
        correctAnswer: "A",
        explanation: "かいもの (mua sắm) được viết bằng Kanji là 買いもの.",
        category: "kanji"
    },
    {
        id: 21,
        content: "きのう、( ) ですから、スーパーへ買い物に行きました。",
        options: { A: "ほしかった", B: "ほしい", C: "ほしくない", D: "ほしな" },
        correctAnswer: "A",
        explanation: "Câu có nghĩa 'Vì hôm qua tôi đã muốn (thứ gì đó), nên tôi đã đi siêu thị'. Vì hành động xảy ra trong quá khứ (きのう), tính từ 'muốn' phải ở dạng quá khứ ほしかった.",
        category: "grammar"
    },
    {
        id: 22,
        content: "このまちはすこし ( )。",
        options: { A: "からいです", B: "ひまです", C: "にぎやかです", D: "おいしいです" },
        correctAnswer: "C",
        explanation: "Câu có nghĩa 'Thị trấn này hơi...'. にぎやかです (náo nhiệt) là một lựa chọn hợp lý để miêu tả thị trấn.",
        category: "vocabulary"
    },
    {
        id: 23,
        content: "Q: ツアンさんは ( ) がほしいですか。 A: いえ、ほしくないです。",
        options: { A: "だれ", B: "どこ", C: "いつ", D: "なに" },
        correctAnswer: "D",
        explanation: "Mẫu câu hỏi 'muốn cái gì' là なにがほしいですか. Dù câu trả lời là 'Không, tôi không muốn', đây là câu hỏi duy nhất đúng về mặt ngữ pháp.",
        category: "grammar"
    },
    {
        id: 24,
        content: "(らいしゅう) の 日曜日、ともだちとサッカーをします。",
        options: { A: "毎日", B: "毎週", C: "毎月", D: "毎年" },
        correctAnswer: "B",
        explanation: "Câu hỏi có lỗi, (らいしゅう) là tuần sau, nhưng các đáp án là từ chỉ tần suất. Dựa trên ngữ cảnh, có thể câu hỏi muốn hỏi về từ (まいしゅう) - mỗi tuần, ứng với 毎週.",
        category: "kanji"
    },
    {
        id: 25,
        content: "A: なつやすみ、くにへかえりましたか。 B: いいえ、( )。",
        options: { A: "かえりません", B: "かえり", C: "かえりませんでした", D: "かえります" },
        correctAnswer: "C",
        explanation: "Câu hỏi ở thì quá khứ 'bạn đã về nước chưa?'. Trả lời 'Không' thì động từ phải ở dạng phủ định quá khứ: かえりませんでした (đã không về).",
        category: "grammar"
    },
    {
        id: 26,
        content: "あした、にほんごのしけんがありますから、( )。 いそがしいです。",
        options: { A: "こんばん、あさごはんをたべます", B: "こんばん、うちでべんきょうします", C: "こんばん、えいがにいきます", D: "こんばんえいがをみます" },
        correctAnswer: "B",
        explanation: "'Vì ngày mai có bài kiểm tra tiếng Nhật, (tối nay tôi sẽ học bài ở nhà). Tôi rất bận.' Đây là câu trả lời logic nhất.",
        category: "grammar"
    },
    {
        id: 27,
        content: "きのう、しごとがおわったです。( )。",
        options: { A: "たいへんでした", B: "たいへんじゃないでした", C: "たいへんかったです", D: "たいへんです" },
        correctAnswer: "A",
        explanation: "きのう (hôm qua) yêu cầu tính từ ở dạng quá khứ. たいへん là tính từ 'na', dạng quá khứ là たいへんでした (đã rất vất vả).",
        category: "grammar"
    },
    {
        id: 28,
        content: "Hãy lựa chọn đáp án phù hợp nhất điền vào vị trí ( ★ ) trong câu sau đây.\n( ) で ( ) ( ) ( ★ )。",
        options: { A: "あにが", B: "を", C: "うち", D: "ききました" },
        correctAnswer: "D",
        explanation: "Câu hoàn chỉnh là 「うちで兄(あに)が音楽(おんがく)をききました。」 (Anh trai tôi đã nghe nhạc ở nhà). Từ đứng cuối cùng (★) là động từ ききました.",
        category: "grammar"
    },
    {
        id: 29,
        content: "なつやすみ、くに ( ) かえりますから、アルバイトをしません。",
        options: { A: "へ", B: "で", C: "は", D: "と" },
        correctAnswer: "A",
        explanation: "Trợ từ へ chỉ phương hướng 'về nước' (くにへかえります).",
        category: "grammar"
    },
    {
        id: 30,
        content: "しゅうまつ、せんせいは ( ) もいきませんでした。",
        options: { A: "どうして", B: "どう", C: "から", D: "どこ" },
        correctAnswer: "D",
        explanation: "Mẫu câu どこへもいきませんでした có nghĩa là 'đã không đi đâu cả'.",
        category: "grammar"
    },
    {
        id: 31,
        content: "きのう、ナタポンさんは日本語を ( ) から、テストがわかったです。",
        options: { A: "たべませんでした", B: "のみませんでした", C: "しませんでした", D: "べんきょうしませんでした" },
        correctAnswer: "D",
        explanation: "Câu này có vẻ phi logic ('Vì hôm qua Natapon không học tiếng Nhật nên đã hiểu bài kiểm tra'), nhưng べんきょうしませんでした (đã không học) là đáp án duy nhất phù hợp về mặt ngữ pháp (thì quá khứ) trong một câu có きのう (hôm qua).",
        category: "grammar"
    },
    {
        id: 32,
        content: "ともだちはコーヒーを (のみません)。",
        options: { A: "食べません", B: "会いません", C: "飲みません", D: "来ません" },
        correctAnswer: "C",
        explanation: "のみません (không uống) được viết bằng Kanji là 飲みません.",
        category: "kanji"
    },
    {
        id: 33,
        content: "A: たなかさんはなに ( ) ほしいですか。 B: くるまがほしいです。",
        options: { A: "の", B: "と", C: "が", D: "に" },
        correctAnswer: "C",
        explanation: "Mẫu câu diễn tả sự mong muốn là [Danh từ] + が + ほしいです.",
        category: "grammar"
    },
    {
        id: 34,
        content: "A: そのレストランの食べ物はどうでしたか。 B: おいしかったです。( )、たかかったです。",
        options: { A: "は", B: "と", C: "が", D: "の" },
        correctAnswer: "C",
        explanation: "Liên từ が được dùng để nối hai vế có ý nghĩa tương phản ('ngon nhưng đắt').",
        category: "grammar"
    },
    {
        id: 35,
        content: "日本のりょうりはあまりおいしくなかったですから、( )。",
        options: { A: "食べました", B: "食べた", C: "食べませんでした", D: "食べません" },
        correctAnswer: "C",
        explanation: "Vế đầu ở thì quá khứ ('đã không ngon lắm'), nên hành động ở vế sau cũng phải ở thì quá khứ. 'Vì không ngon nên tôi đã không ăn' (食べませんでした).",
        category: "grammar"
    },
    {
        id: 36,
        content: "あした、(食事) にいきます。",
        options: { A: "そくじ", B: "しょくじ", C: "たべじ", D: "りょうしょく" },
        correctAnswer: "B",
        explanation: "食事 (bữa ăn, việc ăn uống) có cách đọc là しょくじ.",
        category: "kanji"
    },
    {
        id: 37,
        content: "Hãy lựa chọn đáp án phù hợp nhất điền vào vị trí ( ★ ) trong câu sau đây.\n( ) で ( ) ( ) ( ★ ) です。",
        options: { A: "たべたい", B: "レストラン", C: "を", D: "ごはん" },
        correctAnswer: "A",
        explanation: "Câu hoàn chỉnh là 「レストランでごはんをたべたいです。」 (Tôi muốn ăn cơm ở nhà hàng). Từ ở vị trí ngôi sao (★) là たべたい.",
        category: "grammar"
    },
    {
        id: 38,
        content: "次の言葉の使い方として最もよいものを、ａｂｃｄから一つ選んでください。\nとても",
        options: { A: "きむらさんのまちはとてもきれいです。", B: "おんがくはとてもです。", C: "カメラはとてもです。", D: "この食べ物はとてもとまります。" },
        correctAnswer: "A",
        explanation: "とても (rất) là phó từ, phải đứng trước tính từ hoặc động từ mà nó bổ nghĩa. Câu A 'Thị trấn của Kimura rất đẹp' là cách dùng đúng.",
        category: "vocabulary"
    },
    {
        id: 39,
        content: "(先月)、アメリカへいきました。",
        options: { A: "せんげつ", B: "せんじつ", C: "せんしゅう", D: "こんしゅう" },
        correctAnswer: "A",
        explanation: "先月 (tháng trước) có cách đọc là せんげつ.",
        category: "kanji"
    },
    {
        id: 40,
        content: "このくるまは ( ) から、かいませんでした。",
        options: { A: "たかいです", B: "たかくありません", C: "たかかったです", D: "たかくないです" },
        correctAnswer: "C",
        explanation: "Hành động かいませんでした (đã không mua) ở quá khứ, nên lý do cũng phải ở quá khứ. 'Vì đã đắt' là たかかったです.",
        category: "grammar"
    },
    {
        id: 41,
        content: "きのう、パンを (食べました)。",
        options: { A: "たべました", B: "のみました", C: "かえりました", D: "かいました" },
        correctAnswer: "A",
        explanation: "Câu きのう、パンを (食べました) có nghĩa là 'Hôm qua, tôi đã ăn bánh mì'. Động từ たべました là đáp án đúng.",
        category: "kanji"
    },
    {
        id: 42,
        content: "きのう、うちでえいがを ( )。おもしろかったです。",
        options: { A: "みません", B: "みませんでした", C: "みました", D: "みます" },
        correctAnswer: "C",
        explanation: "きのう (hôm qua) yêu cầu động từ ở thì quá khứ. 'Xem phim' là えいがをみます, chia về quá khứ là みました.",
        category: "grammar"
    },
    {
        id: 43,
        content: "(先週) はとてもいそがしでした。",
        options: { A: "せんしゅう", B: "らいげつ", C: "せんげつ", D: "らいしゅう" },
        correctAnswer: "A",
        explanation: "先週 (tuần trước) có cách đọc là せんしゅう.",
        category: "kanji"
    },
    {
        id: 44,
        content: "日本の (たべもの) はとてもおいしいです。",
        options: { A: "食べ物", B: "生み物", C: "飲み物", D: "乗物" },
        correctAnswer: "A",
        explanation: "たべもの (đồ ăn) được viết bằng Kanji là 食べ物.",
        category: "kanji"
    },
    {
        id: 45,
        content: "【せんじつ】、レストランで しょくじしました。",
        options: { A: "月日", B: "前月", C: "前日", D: "名前" },
        correctAnswer: "C",
        explanation: "せんじつ (hôm trước, mấy hôm trước) được viết là 先日. Tuy nhiên, trong các đáp án không có 先日. 前日 (ngày hôm trước) là từ gần nghĩa nhất.",
        category: "kanji"
    },
    {
        id: 46,
        content: "【東京】で おまつりが あります。",
        options: { A: "とうきょう", B: "とぎょう", C: "とうきょ", D: "ときょう" },
        correctAnswer: "A",
        explanation: "東京 (Tokyo) có cách đọc là とうきょう.",
        category: "kanji"
    },
    {
        id: 47,
        content: "ここの ( ) は おいしいです。",
        options: { A: "ワイン", B: "めんせん", C: "じんじゃ", D: "ビル" },
        correctAnswer: "A",
        explanation: "ワイン (rượu vang) là thứ duy nhất có thể 'ngon' (おいしい) trong các lựa chọn.",
        category: "vocabulary"
    },
    {
        id: 48,
        content: "クラスに【男】の人が ふたり います。",
        options: { A: "おとこ", B: "おとご", C: "おんな", D: "おとな" },
        correctAnswer: "A",
        explanation: "Trong ngữ cảnh 【男】の人が... (người đàn ông), chữ 男 được đọc theo âm Kun'yomi là おとこ.",
        category: "kanji"
    },
    {
        id: 49,
        content: "A: きのうの天気は よかったですか。 B: いいえ、あまり ( )。",
        options: { A: "いくないです", B: "よかったです", C: "よくなかったです", D: "よくないです" },
        correctAnswer: "C",
        explanation: "Mẫu câu あまり...ません/くないです có nghĩa là 'không... lắm'. Dạng phủ định quá khứ của いいです là よくなかったです.",
        category: "grammar"
    },
    {
        id: 50,
        content: "FPTだいがくは みどりのが ( ) ところです。",
        options: { A: "おおい", B: "たかい", C: "あおい", D: "おもしろい" },
        correctAnswer: "A",
        explanation: "Câu có nghĩa 'Đại học FPT là một nơi có nhiều cây xanh'. 'Nhiều' là おおい.",
        category: "vocabulary"
    },
    {
        id: 51,
        content: "しんじゅく ( ) ともだち ( ) 会いました。",
        options: { A: "に - に", B: "で - で", C: "で - に", D: "に - で" },
        correctAnswer: "C",
        explanation: "で chỉ nơi diễn ra hành động (gặp ở Shinjuku). に chỉ đối tượng của hành động 'gặp' (gặp bạn).",
        category: "grammar"
    },
    {
        id: 52,
        content: "この ( ) は にぎやかです。",
        options: { A: "かわ", B: "まち", C: "くち", D: "した" },
        correctAnswer: "B",
        explanation: "まち (thị trấn, thành phố) là danh từ duy nhất phù hợp với tính từ にぎやか (náo nhiệt).",
        category: "vocabulary"
    },
    {
        id: 53,
        content: "Da Nangは ( ) ところです。",
        options: { A: "きれいの", B: "きれい", C: "きれいな", D: "きれいに" },
        correctAnswer: "C",
        explanation: "きれい là tính từ 'na'. Khi nó bổ nghĩa cho danh từ (ところ), nó phải có な ở cuối.",
        category: "grammar"
    },
    {
        id: 54,
        content: "レストランで カレーを【たべます】。",
        options: { A: "食べます", B: "会います", C: "飲みます", D: "買います" },
        correctAnswer: "A",
        explanation: "たべます (ăn) được viết bằng Kanji là 食べます.",
        category: "kanji"
    },
    {
        id: 55,
        content: "今度(こんど)のやすみに、東京( )しゃしん( )とりに( )行きたいです。",
        options: { A: "へ - へ - へ", B: "に - に - に", C: "へ - を - に", D: "で - へ - へ" },
        correctAnswer: "C",
        explanation: "Cấu trúc đúng là 東京へ(chỉ hướng)しゃしんを(bổ ngữ cho động từ)撮りに行きたいです(chỉ mục đích). Đáp án C phù hợp nhất.",
        category: "grammar"
    },
    {
        id: 56,
        content: "まいばん、ゲームをします。ゲームは ( ) です。",
        options: { A: "いそがしい", B: "たいへん", C: "ひま", D: "おもしろい" },
        correctAnswer: "D",
        explanation: "'Mỗi tối tôi đều chơi game. Game thì (thú vị)'. おもしろい là lựa chọn hợp lý nhất.",
        category: "vocabulary"
    },
    {
        id: 57,
        content: "このケーキは ( ) です。",
        options: { A: "しずか", B: "きらい", C: "あまい", D: "にぎやか" },
        correctAnswer: "C",
        explanation: "あまい (ngọt) là tính từ phù hợp nhất để miêu tả ケーキ (bánh ngọt).",
        category: "vocabulary"
    },
    {
        id: 58,
        content: "A: ハワさんのおくには どちらですか。 B: かんこくです。 A: ( )。 B: ソウル(Seoul)です。",
        options: { A: "そうですか", B: "かんこくですか", C: "かんこくのどちらですか", D: "かんこくのですか" },
        correctAnswer: "C",
        explanation: "Sau khi biết là Hàn Quốc, hỏi cụ thể hơn 'Ở đâu của Hàn Quốc vậy?' (かんこくのどちらですか) là hợp lý nhất để nhận được câu trả lời 'Là Seoul'.",
        category: "grammar"
    },
    {
        id: 59,
        content: "めんせつは ( ) です。",
        options: { A: "きもちがいい", B: "かんたん", C: "たいへん", D: "いそがしい" },
        correctAnswer: "C",
        explanation: "めんせつ (phỏng vấn) thường được miêu tả là たいへん (vất vả, khó khăn).",
        category: "vocabulary"
    },
    {
        id: 60,
        content: "キム: ランさん、きのうの パーテイーは ( )。 ラン: とても たのしかったです。",
        options: { A: "どんなですか", B: "どうでしたか", C: "どうですか", D: "どこですか" },
        correctAnswer: "B",
        explanation: "Hỏi về một sự kiện đã diễn ra trong quá khứ (きのうのパーテイー), ta dùng 'đã như thế nào?' - どうでしたか.",
        category: "grammar"
    },
    {
        id: 61,
        content: "まいにち、こいびとと きっさてんで べんきょうします。( ) です。",
        options: { A: "たのしい", B: "おいしい", C: "ひま", D: "たかい" },
        correctAnswer: "A",
        explanation: "'Mỗi ngày, tôi học bài cùng người yêu ở quán nước. (Thật là vui)'. たのしい (vui) là cảm xúc phù hợp nhất.",
        category: "vocabulary"
    },
    {
        id: 62,
        content: "A: きのう、ゲームをしました。 B: そうですか。( ) しましたか。 A: ４時間(ぐらい)しました。",
        options: { A: "どのぐらい", B: "どこで", C: "なにを", D: "だれと" },
        correctAnswer: "A",
        explanation: "Câu trả lời là 'khoảng 4 tiếng', chỉ thời lượng. Câu hỏi phải là 'trong bao lâu?', tức là どのぐらい.",
        category: "grammar"
    },
    {
        id: 63,
        content: "ともだちと ごえんに いきます。それから、しゃしんを ( )。",
        options: { A: "のぼります", B: "とります", C: "かかります", D: "しょくじします" },
        correctAnswer: "B",
        explanation: "しゃしんをとります là cụm từ cố định có nghĩa là 'chụp ảnh'.",
        category: "grammar"
    },
    {
        id: 64,
        content: "【ごぜん】6時に おきます。",
        options: { A: "午見", B: "年先", C: "午前", D: "午後" },
        correctAnswer: "C",
        explanation: "ごぜん (buổi sáng, a.m.) được viết bằng Kanji là 午前.",
        category: "kanji"
    },
    {
        id: 65,
        content: "A: ふゆやすみ、なにが ほしいですか。 B: なにも ( )。",
        options: { A: "ほしくないです", B: "ほしかったです", C: "ほしかった", D: "ほしいじゃありません" },
        correctAnswer: "A",
        explanation: "Mẫu câu なにも...ません/くないです có nghĩa là 'không... gì cả'. 'Tôi không muốn gì cả' là なにもほしくないです.",
        category: "grammar"
    },
    {
        id: 66,
        content: "Ha Dongは ハノイの【にし】です。",
        options: { A: "京", B: "東", C: "車", D: "西" },
        correctAnswer: "D",
        explanation: "にし (phía Tây) được viết bằng Kanji là 西.",
        category: "kanji"
    },
    {
        id: 67,
        content: "田中: しゅうまつ、( )へいきましたか。 ミラー: はい、おおさかへ いきました。",
        options: { A: "どこも", B: "どこへ", C: "どこ", D: "どこか" },
        correctAnswer: "D",
        explanation: "どこかへいきましたか là câu hỏi 'bạn có đi đâu đó không?'.",
        category: "grammar"
    },
    {
        id: 68,
        content: "日曜日、私は どこへもいきません。( )です。",
        options: { A: "かんたん", B: "たいへん", C: "ひま", D: "むずかしい" },
        correctAnswer: "C",
        explanation: "'Chủ nhật, tôi không đi đâu cả. (Tôi rảnh rỗi)'. ひま (rảnh rỗi) là từ hợp lý nhất.",
        category: "vocabulary"
    },
    {
        id: 69,
        content: "ハノイから ホーチミンまで ひこうき( ) 2時間半(にじかんはん)ぐらいです。",
        options: { A: "に", B: "も", C: "は", D: "で" },
        correctAnswer: "D",
        explanation: "Trợ từ で được dùng để chỉ phương tiện di chuyển (đi bằng máy bay).",
        category: "grammar"
    },
    {
        id: 70,
        content: "私のにわは あおいです。( )、人がおおいです。",
        options: { A: "と", B: "ね", C: "そして", D: "が" },
        correctAnswer: "C",
        explanation: "そして (và, sau đó) được dùng để liệt kê các đặc điểm cùng chiều. 'Sân nhà tôi màu xanh. Và, có rất nhiều người.'",
        category: "grammar"
    },
    {
        id: 71,
        content: "9時から10時まで にほんごを ( )。",
        options: { A: "起(お)きます", B: "いきます", C: "しゅくだいします", D: "べんきょうします" },
        correctAnswer: "D",
        explanation: "Cụm từ 'học tiếng Nhật' là にほんごをべんきょうします.",
        category: "grammar"
    },
    {
        id: 72,
        content: "A: アルバイトは たいへんでしたか。 B: はい、とても ( )。",
        options: { A: "たいへんくらい", B: "たいへんじゃありません", C: "たいへんです", D: "たいへんくないです" },
        correctAnswer: "C",
        explanation: "Câu hỏi là 'Có vất vả không?'. Trả lời 'Vâng, rất (vất vả)'. たいへんです là phù hợp.",
        category: "grammar"
    },
    {
        id: 73,
        content: "このビールは ( ) です。",
        options: { A: "つめたい", B: "ちいさい", C: "さむい", D: "あおい" },
        correctAnswer: "A",
        explanation: "つめたい (lạnh, mát) là tính từ thường dùng để miêu tả đồ uống như ビール (bia). さむい cũng là 'lạnh' nhưng dùng cho thời tiết.",
        category: "vocabulary"
    },
    {
        id: 74,
        content: "A: 土曜日、しんじゅのデパートへ いきました。 B: 何を 買(か)いましたか。 A: ( ) 買いませんでした。",
        options: { A: "なにを", B: "かさを", C: "カメラを", D: "なにも" },
        correctAnswer: "D",
        explanation: "B hỏi 'Bạn đã mua gì?'. A trả lời 'Tôi đã không mua gì cả'. Mẫu câu 'không mua gì cả' là なにも買いませんでした.",
        category: "grammar"
    },
    {
        id: 75,
        content: "きのう、Lanさんと いっしょに やきにく ( )。",
        options: { A: "をたべました", B: "をのみました", C: "をみました", D: "にいきました" },
        correctAnswer: "A",
        explanation: "Cụm từ 'ăn thịt nướng' là やきにくをたべます. Ở thì quá khứ là やきにくをたべました.",
        category: "grammar"
    },
    {
        id: 76,
        content: "A: せんしゅうの 日曜日、どこへ いきましたか。 B: そうですね。( ) いきませんでした。",
        options: { A: "どこかも", B: "どこへか", C: "どこかへ", D: "どこへも" },
        correctAnswer: "D",
        explanation: "どこへもいきませんでした là mẫu câu hoàn chỉnh có nghĩa là 'tôi đã không đi đâu cả'.",
        category: "grammar"
    },
    {
        id: 77,
        content: "タイは あついが ( ) です。",
        options: { A: "しずか", B: "おおい", C: "ゆうめい", D: "あおい" },
        correctAnswer: "C",
        explanation: "Câu có nghĩa 'Thái Lan thì nóng nhưng (nổi tiếng)'. ゆうめい (nổi tiếng) là một lựa chọn hợp lý để tạo thành câu có nghĩa.",
        category: "vocabulary"
    },
    {
        id: 78,
        content: "だいがくで【国語】を べんきょうしました。",
        options: { A: "くにご", B: "こにご", C: "ごご", D: "こくご" },
        correctAnswer: "D",
        explanation: "国語 (quốc ngữ, ngôn ngữ của một nước) có cách đọc là こくご.",
        category: "kanji"
    },
    {
        id: 79,
        content: "まいにち、うちで りょうりを ( )。",
        options: { A: "つくります", B: "しょくじします", C: "せんたくします", D: "あいます" },
        correctAnswer: "A",
        explanation: "りょうりをつくります là cụm từ có nghĩa là 'nấu ăn'.",
        category: "grammar"
    },
    {
        id: 80,
        content: "Linhさん、ここの【なまえ】は なんですか。",
        options: { A: "名利", B: "古然", C: "古前", D: "名前" },
        correctAnswer: "D",
        explanation: "なまえ (tên) được viết bằng Kanji là 名前.",
        category: "kanji"
    },
    {
        id: 81,
        content: "ごぜん7時からごご10時まで はたらきます。とても( )です。",
        options: { A: "いそがしい", B: "おもしろい", C: "むずかしい", D: "ひま" },
        correctAnswer: "A",
        explanation: "'Tôi làm việc từ 7h sáng đến 10h tối. Rất (bận rộn)'. いそがしい là từ phù hợp nhất.",
        category: "vocabulary"
    },
    {
        id: 82,
        content: "しゅうまつ こいびとに ( )。",
        options: { A: "とります", B: "つくります", C: "あいます", D: "のぼります" },
        correctAnswer: "C",
        explanation: "Cụm từ 'gặp người yêu' là こいびとにあいます. Trợ từ に đi với động từ あいます để chỉ đối tượng gặp gỡ.",
        category: "grammar"
    }
];