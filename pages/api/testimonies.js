const testimonies = [
  'img1',
  'img2',
  'img3',
  'img4',
  'img5',
  'img6',
  'img7',
  'img8',
  'img9',
  'img10',
  'img11',
  'img12',
  'img13',
  'img14',
  'img15',
  'img16',
  'img17',
  'img18',
  'img19',
  'img20',
  'img21',
  'img22',
  'img23'
];

export default function handler(req, res) {
  res.status(200).json(testimonies);
}
