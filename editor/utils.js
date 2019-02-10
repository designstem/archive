const cleanColumns = content => {
  const pattern = /(\|[0-9\s]+\n)/g;
  return content.replace(pattern, "")
}

const parseColumns = slide => {
  const pattern = /(\|[0-9\s]+\n)/g;
  const match = slide.match(pattern);
  if (match) {
    const rowCount = match.length;
    const cols = match.map(m => {
      return m
        .trim()
        .replace(/\|/g, "")
        .split("")
        .filter(m => !m.match(/\s+/));
    });
    const colCount = cols[0].length;
    const areas = cols
      .map(m => `'${m.map(m => `a${m}`).join(" ")}'`)
      .join("\n");
    const content = slide.split(/\n-\n/).map(c => c.replace(pattern, ""));

    return { rowCount, colCount, areas, content };
  } else {
    const content = slide.split(/\n-\n/);
    return {
      rowCount: 1,
      colCount: content.length,
      areas: `'${content.map((_, i) => `a${i + 1}`).join(" ")}'`,
      content: content
    };
  }
};

export { cleanColumns, parseColumns }