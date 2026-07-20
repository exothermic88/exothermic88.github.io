// Central release/download configuration.
// When the SourceForge project exists, set SF_PROJECT to its unix name —
// the /files/latest/download URL then always serves the newest uploaded ISO.
export const SF_PROJECT = 'ncoslinux';
export const SF_DOWNLOAD_URL = `https://sourceforge.net/projects/${SF_PROJECT}/files/latest/download`;

export const GITHUB_REPO = 'exothermic88/NCOS';
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;
export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`;
export const GITHUB_API_LATEST = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

// Shown until the GitHub API answers (or when it is rate-limited / offline).
export const FALLBACK_VERSION = 'v1.0';

export const NCOS_REPO_URL = 'https://github.com/exothermic88/ncos-repo';
