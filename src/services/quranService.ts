export const fetchSurah = async (surahNumber: number, identifier: string) => {
  const response = await fetch(
    `https://api.alquran.cloud/v1/surah/${surahNumber}/${identifier}`,
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const { data } = await response.json();

  return data;
};
