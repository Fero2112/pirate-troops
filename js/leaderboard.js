// Fetching the leaderboard data from the Unity API
    function fetchLeaderboard() {
      // API URL
      const apiUrl = 'https://services.api.unity.com/leaderboards/v1/projects/27317be4-6f62-4c57-9c43-4eb77a5039ab/environments/adf2ac5b-2487-4de4-bd7a-6721c1cea5ec/leaderboards/Pirate_Troops_Ranking/scores';

      // Fetch the leaderboard data from the Unity API
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic MTIwZmE2NzAtZWUzYi00OGUyLTk1NjktZTg5ZjE4MDU1YjlhOjVKV0VIeWRQOFhyNzhCdWpHbzU5eDdXQm1uMVQ2QTFY'
        }
      })
        .then(response => response.json())
        .then(data => {
          // Display the fetched leaderboard data
          const leaderboardBody = document.getElementById('leaderboardBody');
          leaderboardBody.innerHTML = ''; // Clear previous rows

          // Iterate over the results and create table rows
          data.results.forEach(player => {
            const row = document.createElement('tr');

            // Rank
            const rankCell = document.createElement('td');
            rankCell.textContent = player.rank;
            row.appendChild(rankCell);

            // Player Name
            const nameCell = document.createElement('td');
            nameCell.textContent = player.playerName;
            row.appendChild(nameCell);

            // Score
            const scoreCell = document.createElement('td');
            scoreCell.textContent = player.score;
            row.appendChild(scoreCell);

            // Append the row to the table body
            leaderboardBody.appendChild(row);
          });
        })
        .catch(error => {
          console.error('Error fetching leaderboard:', error);
        });
    }

    // Call the function to fetch and display the leaderboard when the page loads
    document.addEventListener('DOMContentLoaded', fetchLeaderboard);