'use strict';

window.onload = function() {
    var h2 = document.getElementsByClassName("h2")[0]
    var new_button = document.createElement("button")
    var button = h2.appendChild(new_button)
    button.classList.add("btn")
    button.classList.add("btn-default")
    button.classList.add("btn-sm")
    button.textContent = "リストに追加"
    button.onclick = addProblem
}

function addProblem() {
    var problem_name = document.getElementsByClassName("h2")[0]
                    .textContent
    var problem_url = document.URL
    var problem_genre = "未設定"
    var problem_status = getProblemStatus()
    // TODO: Difficulty を登録するオプションを付けたいかも
    var problem_difficulty = "未設定"

    var req_body = {
        "NewProblem": problem_name,
        "NewProblemUrl": problem_url,
        "ProblemGenre": problem_genre,
        "NewProblemStatus": problem_status,
        "NewProblemDifficulty": problem_difficulty,
    }

    postData("https://atcoder-list.herokuapp.com/create", req_body)
        .then(url => {
            console.log(url)
            // window.location.href = url;
        });
}

// TODO: AtCoder Problems の API から Status を動的に取得
// https://kenkoooo.com/atcoder/atcoder-api/results?user={user_id}
function getProblemStatus() {
    var problem_status = "未提出"
    return problem_status
}

// POST メソッドの実装の例
async function postData(url = '', data = {}) {
    // 既定のオプションには * が付いています
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    }).then(response => {
        console.log(response)
        return response.url
    })
}
  