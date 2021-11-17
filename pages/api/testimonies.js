const testimonies = [
  'https://images.pexels.com/photos/6675104/pexels-photo-6675104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6675104/pexels-photo-6675104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6675104/pexels-photo-6675104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6675104/pexels-photo-6675104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6675104/pexels-photo-6675104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/6675104/pexels-photo-6675104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/9770723/pexels-photo-9770723.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
];

export default function handler(req, res) {
  res.status(200).json(testimonies);
}


