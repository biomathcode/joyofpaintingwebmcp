import rawPaintings from './bob_ross_paintings.csv?raw';
import rawBobRoss from './bob_ross.csv?raw';

function parseCSV(text) {
  const lines = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];
    if (c === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push(cell.trim());
      cell = '';
    } else if ((c === '\n' || (c === '\r' && next === '\n')) && !inQuotes) {
      if (c === '\r') i++;
      row.push(cell.trim());
      if (row.length > 1 || row[0] !== '') lines.push(row);
      row = [];
      cell = '';
    } else {
      cell += c;
    }
  }
  if (cell || row.length > 0) {
    row.push(cell.trim());
    if (row.length > 1 || row[0] !== '') lines.push(row);
  }
  return lines;
}

function parsePythonList(str) {
  if (!str) return [];
  return str
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((s) => s.replace(/\\\\r|\\\\n|\\r|\\n|\r|\n/g, '').replace(/^['"\s]+|['"\s]+$/g, '').trim())
    .filter(Boolean);
}

function extractYouTubeId(url) {
  if (!url) return '';
  const match = url.match(/(?:embed\/|v\/|watch\?v=|youtu\.be\/|\/v=|^)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : url.trim();
}

const COLOR_NAMES = [
  'Black_Gesso', 'Bright_Red', 'Burnt_Umber', 'Cadmium_Yellow', 'Dark_Sienna',
  'Indian_Red', 'Indian_Yellow', 'Liquid_Black', 'Liquid_Clear', 'Midnight_Black',
  'Phthalo_Blue', 'Phthalo_Green', 'Prussian_Blue', 'Sap_Green', 'Titanium_White',
  'Van_Dyke_Brown', 'Yellow_Ochre', 'Alizarin_Crimson'
];

function buildEpisodes() {
  const p1 = parseCSV(rawPaintings);
  const p2 = parseCSV(rawBobRoss);

  const h1 = p1[0] || [];
  const h2 = p2[0] || [];

  const episodes = [];

  for (let i = 1; i < p2.length; i++) {
    const row2 = p2[i];
    const row1 = p1[i] || [];

    const paintingIndex = parseInt(row2[0], 10) || i;
    const imgSrc = row2[1] || '';
    const title = row2[2] || `Episode ${i}`;
    const season = parseInt(row2[3], 10) || 1;
    const episodeNum = parseInt(row2[4], 10) || 1;
    const numColors = parseInt(row2[5], 10) || 0;
    const youtubeSrc = row2[6] || '';
    const id = extractYouTubeId(youtubeSrc);
    const colors = parsePythonList(row2[7]);
    const colorHex = parsePythonList(row2[8]);

    const colorPresence = {};
    COLOR_NAMES.forEach((cName) => {
      const idx2 = h2.indexOf(cName);
      const idx1 = h1.indexOf(cName);
      const boolVal = idx2 >= 0 ? row2[idx2] === 'TRUE' : false;
      const numVal = idx1 >= 0 ? row1[idx1] === '1' : false;
      colorPresence[cName] = boolVal || numVal;
    });

    episodes.push({
      index: paintingIndex,
      id,
      title,
      season,
      episode: episodeNum,
      numColors,
      youtubeSrc: youtubeSrc.startsWith('http') ? youtubeSrc : `https://www.youtube.com/embed/${id}`,
      watchUrl: `https://www.youtube.com/watch?v=${id}`,
      imgSrc,
      colors,
      colorHex,
      colorPresence
    });
  }

  return episodes;
}

export const BOB_ROSS_EPISODES = buildEpisodes();
export const EPISODE_BY_ID = Object.fromEntries(
  BOB_ROSS_EPISODES.map((ep) => [ep.id, ep])
);

// Also index by index number
export const EPISODE_BY_INDEX = Object.fromEntries(
  BOB_ROSS_EPISODES.map((ep) => [ep.index, ep])
);

// Group by season
export const SEASONS = Array.from(new Set(BOB_ROSS_EPISODES.map((ep) => ep.season))).sort((a, b) => a - b);

export function getEpisodesForSeason(season) {
  return BOB_ROSS_EPISODES.filter((ep) => ep.season === Number(season));
}

export function searchEpisodes(query) {
  if (!query || !query.trim()) return BOB_ROSS_EPISODES;
  const q = query.toLowerCase().trim();
  return BOB_ROSS_EPISODES.filter((ep) =>
    ep.title.toLowerCase().includes(q) ||
    `s${ep.season}e${ep.episode}`.includes(q) ||
    `season ${ep.season}`.includes(q) ||
    ep.colors.some((c) => c.toLowerCase().includes(q))
  );
}
