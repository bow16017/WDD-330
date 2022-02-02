const hikeList = [
  {
    name: 'Mt. Charleston',
    imgSrc: 'charleston.jpg',
    imgAlt: 'Image of Mt. Charleston Peak',
    distance: '20 miles',
    difficulty: 'Difficult',
    description:
      'A breathtaking journey into the incomperable heights of the desert. Experience the unique environment of the Mojave.',
    directions:
      'After turning off the main freeway you’ll take Rt 157 for about 20 miles, climbing about 5000 feet up Kyle Canyon.'
  },
  {
    name: 'Mt. Timpanogos',
    imgSrc: 'timpanogos.jpg',
    imgAlt: 'Image of Mt. Timpanogos',
    distance: '16.8 miles',
    difficulty: 'Difficult',
    description:
      'A beautiful exploratory journey through the natural landscape of Utah. Experience the wonders of nature in the Uinta Mountain range.',
    directions:
      'If coming from Salt Lake City, take I-15 south to the Alpine Highway/UT 92. (Exit 284) Head east on the Alpine Highway/UT 92. Stay on this road for 18 miles to the Timpooneke Campground. Turn right into the campground. Drive through the campground for 0.3 miles to arrive at the trailhead.'
  },
  {
    name: 'Taylor Creek',
    imgSrc: 'taylorcreek.jpg',
    imgAlt: 'Image of Taylor Creek',
    distance: '4.9 miles',
    difficulty: 'Easy',
    description:
      'A pleasant ramble through the miracles of nature, ending with an astonishing surprise. Experience the miracle of natural archetecture.',
    directions:
      'The trailhead is located on the Kolob Canyons Road, 2.12 miles off of I-15, past the Kolob Canyon Visitor’s Center.'
  }
];
class hikeModel {
  getAllHikes() {
    return hikeList;
  }

  getHikeByName(name) {
    return hikeList.find(hike => hike.name === name);
  }
}

export default HikeModel;