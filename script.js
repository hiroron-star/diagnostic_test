/* 
  不安タイプ診断テスト
  - 各質問のラジオ選択値を取得し、8つの不安タイプ別に合計スコアを計算
  - 結果を画面に表示
*/

function calculateResult() {
    const form = document.getElementById('anxietyForm');
    let answers = {};
  
    // 1〜20のラジオボタンの値を取得
    for (let i = 1; i <= 20; i++) {
      let qName = 'Q' + i;
      let checkedValue = form[qName].value; // 選択された値（文字列）
      if (!checkedValue) {
        alert(`質問${i}が未回答です。すべて回答してください。`);
        return;
      }
      answers[qName] = parseInt(checkedValue, 10);
    }
  
    // 各タイプの合計点を管理するオブジェクト
    let scores = {
      future: 0,      // 未来予報ビクビク型 (将来不安)
      social: 0,      // 人間関係オロオロ型 (対人不安)
      evaluation: 0,  // 評価ドキドキ型 (評価不安)
      perfection: 0,  // 完璧主義パニック型 (完璧主義)
      health: 0,      // 健康オタオタ型 (健康不安)
      existential: 0, // 存在意義グラグラ型 (存在論的不安)
      trauma: 0,      // トラウマシンドローム型 (トラウマ起因)
      pressure: 0,    // プレッシャー爆発型 (高ストレス環境)
    };
  
    // 質問番号をタイプ別に振り分け
    // future → Q1, Q3, Q11
    scores.future += answers.Q1 + answers.Q3 + answers.Q11;
  
    // social → Q2, Q4, Q12, Q18
    scores.social += answers.Q2 + answers.Q4 + answers.Q12 + answers.Q18;
  
    // evaluation → Q5, Q19
    scores.evaluation += answers.Q5 + answers.Q19;
  
    // perfection → Q6, Q13
    scores.perfection += answers.Q6 + answers.Q13;
  
    // health → Q7, Q14
    scores.health += answers.Q7 + answers.Q14;
  
    // existential → Q8, Q15
    scores.existential += answers.Q8 + answers.Q15;
  
    // trauma → Q9, Q16
    scores.trauma += answers.Q9 + answers.Q16;
  
    // pressure → Q10, Q17, Q20
    scores.pressure += answers.Q10 + answers.Q17 + answers.Q20;
  
    // 結果文の生成
    let resultMessage = "<ul>";
    resultMessage += generateTypeResult("未来予報ビクビク型（将来不安）", scores.future);
    resultMessage += generateTypeResult("人間関係オロオロ型（対人不安）", scores.social);
    resultMessage += generateTypeResult("評価ドキドキ型（評価不安）", scores.evaluation);
    resultMessage += generateTypeResult("完璧主義パニック型（完璧主義）", scores.perfection);
    resultMessage += generateTypeResult("健康オタオタ型（健康不安）", scores.health);
    resultMessage += generateTypeResult("存在意義グラグラ型（存在論的不安）", scores.existential);
    resultMessage += generateTypeResult("トラウマシンドローム型（トラウマ起因）", scores.trauma);
    resultMessage += generateTypeResult("プレッシャー爆発型（高ストレス環境）", scores.pressure);
    resultMessage += "</ul>";
  
    // 表示
    document.getElementById('resultText').innerHTML = resultMessage;
    document.getElementById('resultSection').style.display = "block";
  }
  
  // タイプ名とスコアを表示するための関数
  function generateTypeResult(typeName, score) {
    // 質問数によって最大得点は異なる
    // ここでは単純に「合計が高いほど不安度が高い」という表示だけを行う
    return `<li><span class="highlight">${typeName}：${score}点</span></li>`;
  }
  