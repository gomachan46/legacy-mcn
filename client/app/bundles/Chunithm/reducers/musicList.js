import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

export const initialState = Immutable.fromJS({
    selected: null,
    musicList: [
        { "id" : 0, "name" : "天体観測" },
        { "id" : 3, "name" : "B.B.K.K.B.K.K." },
        { "id" : 5, "name" : "Scatman (Ski Ba Bop Ba Dop Bop)" },
        { "id" : 6, "name" : "Reach for the Stars" },
        { "id" : 9, "name" : "情熱大陸" },
        { "id" : 10, "name" : "All I Want" },
        { "id" : 12, "name" : "紅蓮の弓矢" },
        { "id" : 14, "name" : "コネクト" },
        { "id" : 17, "name" : "空色デイズ" },
        { "id" : 18, "name" : "千本桜" },
        { "id" : 21, "name" : "ナイト・オブ・ナイツ" },
        { "id" : 23, "name" : "一触即発☆禅ガール" },
        { "id" : 27, "name" : "タイガーランペイジ" },
        { "id" : 28, "name" : "Pursuing My True Self" },
        { "id" : 33, "name" : "Blue Noise" },
        { "id" : 38, "name" : "天ノ弱" },
        { "id" : 39, "name" : "1/3の純情な感情" },
        { "id" : 43, "name" : "太陽曰く燃えよカオス" },
        { "id" : 41, "name" : "sweet little sister" },
        { "id" : 46, "name" : "Bad Apple!! feat.nomico" },
        { "id" : 47, "name" : "六兆年と一夜物語" },
        { "id" : 45, "name" : "L9" },
        { "id" : 51, "name" : "My First Phone" },
        { "id" : 49, "name" : "エピクロスの虹はもう見えない" },
        { "id" : 48, "name" : "Unlimited Spark!" },
        { "id" : 54, "name" : "ブルーバード" },
        { "id" : 53, "name" : "Teriqma" },
        { "id" : 59, "name" : "Invitation" },
        { "id" : 58, "name" : "魂のルフラン" },
        { "id" : 57, "name" : "STAY AWAY" },
        { "id" : 56, "name" : "そばかす" },
        { "id" : 63, "name" : "Gate of Fate" },
        { "id" : 60, "name" : "only my railgun" },
        { "id" : 68, "name" : "乗り切れ受験ウォーズ" },
        { "id" : 69, "name" : "The wheel to the right" },
        { "id" : 70, "name" : "STAR" },
        { "id" : 71, "name" : "Infantoon Fantasy" },
        { "id" : 64, "name" : "今ぞ♡崇め奉れ☆オマエらよ！！～姫の秘メタル渇望～" },
        { "id" : 65, "name" : "Anemone" },
        { "id" : 67, "name" : "昵懇レファレンス" },
        { "id" : 76, "name" : "luna blu" },
        { "id" : 78, "name" : "crossing field" },
        { "id" : 79, "name" : "ＧＯ！ＧＯ！ラブリズム♥" },
        { "id" : 74, "name" : "リリーシア" },
        { "id" : 75, "name" : "Counselor" },
        { "id" : 85, "name" : "睡蓮花" },
        { "id" : 84, "name" : "V.I.P" },
        { "id" : 87, "name" : "Butter-Fly" },
        { "id" : 86, "name" : "キラーボール" },
        { "id" : 80, "name" : "Grab your sword" },
        { "id" : 83, "name" : "ロストワンの号哭" },
        { "id" : 82, "name" : "Memories of Sun and Moon" },
        { "id" : 92, "name" : "最終鬼畜妹・一部声" },
        { "id" : 95, "name" : "砂漠のハンティングガール♡" },
        { "id" : 94, "name" : "セツナトリップ" },
        { "id" : 89, "name" : "JET" },
        { "id" : 88, "name" : "The Concept of Love" },
        { "id" : 91, "name" : "Yet Another ”drizzly rain”" },
        { "id" : 103, "name" : "エンドマークに希望と涙を添えて" },
        { "id" : 100, "name" : "After the rain" },
        { "id" : 101, "name" : "Tango Rouge" },
        { "id" : 98, "name" : "魔理沙は大変なものを盗んでいきました" },
        { "id" : 99, "name" : "言ノ葉カルマ" },
        { "id" : 96, "name" : "チルノのパーフェクトさんすう教室" },
        { "id" : 97, "name" : "Help me, ERINNNNNN!!" },
        { "id" : 110, "name" : "Magia" },
        { "id" : 111, "name" : "staple stable" },
        { "id" : 108, "name" : "The ether" },
        { "id" : 109, "name" : "Emotions" },
        { "id" : 107, "name" : "We Gonna Journey" },
        { "id" : 104, "name" : "とーきょー全域★アキハバラ？" },
        { "id" : 105, "name" : "overcome" },
        { "id" : 118, "name" : "腐れ外道とチョコレゐト" },
        { "id" : 117, "name" : "M.S.S.Planet" },
        { "id" : 116, "name" : "君の知らない物語" },
        { "id" : 115, "name" : "Dreaming" },
        { "id" : 114, "name" : "Sweet Devil" },
        { "id" : 113, "name" : "ストリーミングハート" },
        { "id" : 112, "name" : "マジLOVE1000%" },
        { "id" : 120, "name" : "四次元跳躍機関" },
        { "id" : 136, "name" : "Äventyr" },
        { "id" : 141, "name" : "閃鋼のブリューナク" },
        { "id" : 140, "name" : "Guilty" },
        { "id" : 143, "name" : "ODDS&ENDS" },
        { "id" : 142, "name" : "Altale" },
        { "id" : 129, "name" : "Hacking to the Gate" },
        { "id" : 128, "name" : "The Formula" },
        { "id" : 130, "name" : "スカイクラッドの観測者" },
        { "id" : 133, "name" : "シリョクケンサ" },
        { "id" : 132, "name" : "イカサマライフゲイム" },
        { "id" : 135, "name" : "Vallista" },
        { "id" : 134, "name" : "HAELEQUIN (Original Remaster)" },
        { "id" : 152, "name" : "Gustav Battle" },
        { "id" : 154, "name" : "SAVIOR OF SONG" },
        { "id" : 155, "name" : "ブルー・フィールド" },
        { "id" : 156, "name" : "FREELY TOMORROW" },
        { "id" : 157, "name" : "ギガンティックO.T.N" },
        { "id" : 158, "name" : "フォルテシモBELL" },
        { "id" : 144, "name" : "Aragami" },
        { "id" : 145, "name" : "Change Our MIRAI！" },
        { "id" : 146, "name" : "夕暮れワンルーム" },
        { "id" : 147, "name" : "こころここから" },
        { "id" : 148, "name" : "Theme of SeelischTact" },
        { "id" : 149, "name" : "緋色のDance" },
        { "id" : 150, "name" : "brilliant better" },
        { "id" : 151, "name" : "Alma" },
        { "id" : 163, "name" : "幾四音-Ixion-" },
        { "id" : 178, "name" : "stella=steLLa" },
        { "id" : 176, "name" : "Dance!" },
        { "id" : 180, "name" : "怒槌" },
        { "id" : 204, "name" : "ちくわパフェだよ☆CKP" },
        { "id" : 207, "name" : "Your Affection (Daisuke Asakura Remix)" },
        { "id" : 206, "name" : "Signs Of Love (“Never More” ver.)" },
        { "id" : 203, "name" : "FLOWER" }
    ]
});

function getMusic(id) {
    switch (id) {
        case 0:
            return {
                id: id,
                name: "天体観測",
                artist: "dj yoshitaka",
                image: "https://chunithm-net.com/mobile/img/101d4e7b03a5a89e.jpg",
                scores: [
                    {
                        level: "expert",
                        playCount: 2,
                        score: 984600,
                        isFullCombo: false,
                        isAllJustice: false,
                        isSuccess: true,
                        fullChain: 0,
                        scoreRank: 8,
                        updateDate: "2015-07-23 22:02:49.0"
                    }
                ]
            };
        case 3:
            return {
                id: id,
                name: "B.B.K.K.B.K.K",
                artist: "dj yoshitaka",
                image: "https://chunithm-net.com/mobile/img/101d4e7b03a5a89e.jpg",
                scores: [
                    {
                        level: "expert",
                        playCount: 2,
                        score: 984600,
                        isFullCombo: false,
                        isAllJustice: false,
                        isSuccess: true,
                        fullChain: 0,
                        scoreRank: 8,
                        updateDate: "2015-07-23 22:02:49.0"
                    }
                ]
            };
        case 203:
            return {
                id: id,
                name: "flower",
                artist: "dj yoshitaka",
                image: "https://chunithm-net.com/mobile/img/101d4e7b03a5a89e.jpg",
                scores: [
                    {
                        level: "expert",
                        playCount: 2,
                        score: 984600,
                        isFullCombo: false,
                        isAllJustice: false,
                        isSuccess: true,
                        fullChain: 0,
                        scoreRank: 8,
                        updateDate: "2015-07-23 22:02:49.0"
                    }
                ]
            };
        default:
            return null;
    }
}

export default function musicList(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_DETAIL:
            return state.set('selected', getMusic(action.musicId));
        default:
            return state;
    }
}
