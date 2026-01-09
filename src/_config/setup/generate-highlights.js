import fetch from '@11ty/eleventy-fetch';
import fs from 'node:fs/promises';
import path from 'node:path';

const dataPath = './src/_data/highlights.json';
const highlightDir = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  '../../assets/images/highlights'
);

async function fetchHighlight(url, filePath) {
  const waitCondition = 'wait:2';
  const timeout = 'timeout:5';
  const apiUrl = `https://v1.highlight.11ty.dev/${encodeURIComponent(url)}/large/_${waitCondition}_${timeout}/`;

  const buffer = await fetch(apiUrl, {
    duration: '1d',
    type: 'buffer'
  });

  await fs.writeFile(filePath, buffer);
  console.log(`Highlight saved to ${filePath}`);
}

async function generateHighlights() {
  const jsonData = JSON.parse(await fs.readFile(dataPath, 'utf-8'));

  try {
    await fs.access(highlightDir);
  } catch {
    await fs.mkdir(highlightDir, {recursive: true});
  }

  for (const item of jsonData) {
    const {name, link, filename} = item;
    const filePath = path.join(highlightDir, `${filename}.jpg`);
    try {
      await fetchHighlight(link, filePath);
    } catch (error) {
      console.error(`Error processing ${name}: ${error.message}`);
    }
  }
}

generateHighlights();
