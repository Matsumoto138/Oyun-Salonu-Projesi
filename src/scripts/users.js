const scoreboardData = [
  { rank: 1, username: "PuanAvcisi", score: 9850 },
  { rank: 2, username: "Zeynep_TR", score: 9200 },
  { rank: 3, username: "Kaan_99", score: 8750 },
  { rank: 4, username: "GeceKusu", score: 8100 },
  { rank: 5, username: "ProOyuncu", score: 7650 },
  { rank: 6, username: "Ayse123", score: 7200 },
  { rank: 7, username: "Firtina", score: 6800 },
  { rank: 8, username: "DemirYumruk", score: 6100 },
  { rank: 9, username: "Cilek_Kiz", score: 5450 },
  { rank: 10, username: "AcemiBirlik", score: 4900 }
];

var scoreboardTable = document.getElementById("scoreboard-body");

scoreboardData.forEach(function (entry) {
  var row = scoreboardTable.insertRow();
  var rankCell = row.insertCell(0);
  var usernameCell = row.insertCell(1);
  var scoreCell = row.insertCell(2);

  rankCell.textContent = entry.rank;
  usernameCell.textContent = entry.username;
  scoreCell.textContent = entry.score;
});