
const walls = [
  {
    "poster": "assets/london-10-9-2018.jpg",
    "name": "Wall name",
    "map": "map",
    "date": "2018-9-10",
    "link": "http://link"
  },
  {
    "poster": "assets/london-10-9-2018.jpg",
    "name": "Wall name 2",
    "map": "map",
    "date": "2018-9-10",
    "link": "http://link"
  }
];

const wallsDiv = document.querySelector('.walls');

walls.forEach(wall => {
  const item = document.createElement('div');
  item.className = `wall`;

  const wallImage = document.createElement('div');
  wallImage.className = 'wall-image';
  const image = document.createElement('img');
  image.src = wall.poster;

  wallImage.appendChild(image);
  item.appendChild(wallImage);

  const wallInfo = document.createElement('div');
  wallInfo.className = 'wall-info';

  const name = document.createElement('h3');
  name.innerText = wall.name;

  const description = document.createElement('p');

  const link = document.createElement('a');
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.text = wall.nickname;
  link.href = wall.link;

  description.appendChild(link);
  wallInfo.appendChild(name);
  wallInfo.appendChild(description);

  item.appendChild(wallInfo);

  wallsDiv.insertBefore(item, wallsDiv.firstChild);
});
