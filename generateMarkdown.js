function generateMarkdown(data) {
    return `
# Project Title: ${data.title}
## About:
- Repo-name: ${data.repoName}
- Discription: ${data.discription}
- License: ${renderLicenseBadge(data.license)}
- Version of installation needed for deployment: ${data.installation}
*Is this ready for deployment: ${data.ready}
## Contact info:
- Contributors: ${data.contributors}
- Username: ${data.username}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;