async function fetchGitHubData() {
    const username = 'manraj-mann'; // Replace with your GitHub username
    
    try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        // Display username
        document.getElementById('username').textContent = userData.name || username;
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();
        
        // Display repositories
        const reposDiv = document.getElementById('repos');
        repos.forEach(repo => {
            reposDiv.innerHTML += `
                <div class="repo-card">
                    <h2>${repo.name}</h2>
                    <p>${repo.description || 'No description available'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchGitHubData(); 