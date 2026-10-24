// Central release/download configuration.
// SourceForge is the source of truth: the newest uploaded ISO is named
// ncos-vX.Y.Z-x86_64.iso, and /files/latest/download always serves it.
export const SF_PROJECT = 'ncoslinux';
export const SF_DOWNLOAD_URL = `https://sourceforge.net/projects/${SF_PROJECT}/files/latest/download`;
export const SF_FILES_URL = `https://sourceforge.net/projects/${SF_PROJECT}/files/`;
export const SF_BEST_RELEASE_API = `https://sourceforge.net/projects/${SF_PROJECT}/best_release.json`;

export const GITHUB_REPO = 'exothermic88/NCOS';
export const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;

// Used when SourceForge can't be reached at build time.
export const FALLBACK_VERSION = 'v2.1.3';

export const NCOS_REPO_URL = 'https://github.com/exothermic88/ncos-repo';

export interface LatestRelease {
  version: string;
  date: Date | null;
  sha256: string | null;
  filename: string | null;
}

let cached: Promise<LatestRelease> | undefined;

// Runs at build time (SourceForge sends no CORS headers, so the browser can't
// call it). The daily scheduled deploy picks up new uploads automatically.
export function getLatestRelease(): Promise<LatestRelease> {
  cached ??= fetchLatestRelease();
  return cached;
}

async function fetchLatestRelease(): Promise<LatestRelease> {
  const fallback: LatestRelease = { version: FALLBACK_VERSION, date: null, sha256: null, filename: null };
  try {
    const res = await fetch(SF_BEST_RELEASE_API, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(String(res.status));
    const { release } = await res.json();
    const filename: string = release.filename.replace(/^\//, '');
    const match = filename.match(/ncos-(v\d+(?:\.\d+)*)/i);
    if (!match) throw new Error(`unexpected filename ${filename}`);
    return {
      version: match[1],
      date: release.date ? new Date(`${release.date.replace(' ', 'T')}Z`) : null,
      sha256: release.sha256sum || null,
      filename,
    };
  } catch (err) {
    console.warn(`[release] SourceForge lookup failed, using ${FALLBACK_VERSION}:`, err);
    return fallback;
  }
}
