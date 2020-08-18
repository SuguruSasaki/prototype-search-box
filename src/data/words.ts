
interface IWord {
    [key: string]: number
}
export const word: IWord = {
     "テスト": 1,
     "test" : 1,
     "Test" : 1,
     "TEST" : 1,
     "テス": 1,
     "研究": 2,
     "研": 2,
     "けんきゅう":2,
     "research": 2,
 }
 

 interface IResult {
    [key: number]: IContents[]
 }

export type IContents =  {
     text: string
 }

 export const results: IResult = {
     1: [
         { text: "英語で試験のこと. ソフトウェア工学におけるソフトウェアテストのこと .test - トップレベルドメイン（sTLD）の一つ。 カナダのプロレスラー、アンドリュー・マーチンのリングネーム · test (UNIX) - UNIXにおいて条件式を評価する" },
         { text: "ソフトウェアテスト は、コンピュータのプログラムから仕様にない振舞または欠陥を見つけ出す作業のことである。ソフトウェアテストで見つかったプログラム中の欠陥を修正する作業をデバッグという。"},
         { text: "なぜテストするのか。」これまでに何度かこの問. いを英語の先生方に向けたことがある。というの. は，どうもその根本的なところで，私たち言語テス. ト研究者と現場で生徒に直接英語を教える先生方と. で，意識が違っているのではないかと"}
     ],
     2: [
        { text: "研究とは、ある特定の物事について、人間の知識を集めて考察し、実験、観察、調査などを通して調べて、その物事についての事実を深く追求する一連の過程のことである。語義としては「研ぎ澄まし究めること」の意。" },
        { text: "日本国内で研究されている研究課題や研究者についてのデータベースサイトです。科研費をはじめ各省庁、JST、NEDO、AMEDなどの競争的研究資金の研究費データを独自に収集し、公開しています。"},
        { text: "オープンキャンパスで研究室を公開する大学も多く、入学前に研究の雰囲気を知るまたとない機会となっています。 文系・理系を問わず、研究には多種多様なテーマがあり、学生は教員以外にもさまざまな人と関わります"}
     ]
 }