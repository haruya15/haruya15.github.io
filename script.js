// 使用するコードのリスト
const chords = ["C", "G", "Am", "F", "Dm7", "Em7", "Gsus4", "Bb", "E7", "Fm"];

// HTMLの中にある「ボタン」と「表示エリア」をプログラムから操作できるように取得する
const btn = document.getElementById('generateBtn');
const display = document.getElementById('display');

// ボタンをクリックした時の動作
btn.addEventListener('click', () => {
    let progression = [];

    // 4回繰り返してランダムにコードを選ぶ
    for(let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * chords.length);
        progression.push(chords[randomIndex]);
    }

    // 画面の「----」の部分を、生成したコードに書き換える
    display.innerText = progression.join(' → ');
    
    // ちょっとした演出：文字の色をランダムに変える
    display.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
});
