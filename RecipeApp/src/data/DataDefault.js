import imgChickenSoup from '../asset/chickensoup.jpg';
import imgVegetableSoup from '../asset/vegetablesoup.jpg';
import imgPho from '../asset/pho.jpeg';
import imgBeefStew from '../asset/BeefStewRecipe.jpeg';
import imgPotatoSoup from '../asset/CreamyPotatoSoup.jpeg';
var dataDefault = [
  {
    id: 1,
    name: 'Pho Noodle',
    image: imgPho,
    ingredients:
      '5 to 6 pounds of beef knuckles or leg bones, 6 quarts cold water, 2 medium onions, quartered, 4-inch piece of fresh ginger, halved lengthwise, 2 cinnamon sticks, 1 tablespoon coriander seeds, 1 tablespoon fennel seeds, 6 star anise, 6 whole cloves, 1 black cardamom pod (see note below), 1 1/2 tablespoons salt, 1/4 cup fish sauce, 1-inch piece yellow rock sugar, 1 pound small (1/8-inch wide) dried or fresh “banh pho” noodles (see note, 1/2 pound raw eye of round, sirloin or tri-tip steak, thinly sliced across the grain (see note),1/4 cup thinly sliced onions (see note), 1/4 cup chopped cilantro leaves, Sprigs of fresh mint and/or Asian/Thai basil, Bean sprouts, Thinly sliced red chilies (such as Thai bird), Lime wedges, Fish sauce, Hoisin sauce',
    steps:
      'Add beef bones to a large pot that will hold at least 10 quarts. Then, cover bones with cold water. Place pot onto high heat and bring to a boil. Boil for 3 to 5 minutes. During this time, impurities and foam (or scum) will be released and rise to the top. Drain bones, discarding the water. Then, rinse bones with warm water and scrub stockpot to remove any residue that has stuck to the sides. Add the bones back to the stockpot and cover with 6 quarts of cold water. Meanwhile, move an oven rack to a high position then turn broiler to high. Line a baking sheet with aluminum foil. Place quartered onions and halved ginger onto baking sheet then broil for 10 to 15 minutes, turning onions and ginger occasionally so that they become charred or browned on all sides. Add cinnamon sticks, coriander seeds, fennel seeds, star anise, cloves and the black cardamom pod to a dry frying pan. Place onto low heat and cook, stirring occasionally until fragrant. About 5 minutes. Place toasted spices into a cotton muslin bag/herb sachet or cheesecloth then tie with butchers twine to seal. Bring stockpot with parboiled bones and water to a boil then lower to a gentle simmer. Add charred onion and ginger as well as the bag or sachet of toasted spices. Add 1 1/2 tablespoons of salt, a 1/4 cup of fish sauce and the rock sugar. Continue to simmer broth, uncovered, for 3 hours. If at any time foam or scum rises to the surface, use a spoon to remove it. Use tongs or a wide mesh spoon to remove bones, onion and ginger from broth then strain broth through a fine mesh strainer. The broth will have a layer of fat at the the top. There are two ways to remove this. First, if you plan to enjoy the broth now, skim the fat from the top of the broth using a spoon. If you do not mind waiting, you can also pour broth into containers then refrigerate overnight. As the broth cools, the fat will solidify, making it very easy to remove.',
  },
  {
    id: 2,
    name: 'Beef Stew',
    image: imgBeefStew,
    ingredients:
      '1 whole chicken (about 4 pounds), cut into pieces (including back), 8 cups water, Coarse salt, 3 medium onions, thinly sliced (4 cups), 2 celery stalks, sliced crosswise 1/4 inch thick, 4 garlic cloves, crushed, 6 medium carrots, sliced 1/2 inch thick',
    steps:
      'Bring chicken, water, and 1 tablespoon salt to a boil in a large stockpot. Skim foam. Add onions, celery, and garlic. Reduce heat. Simmer, partially covered, for 30 minutes. Remove breast, and set aside. Add carrots. Simmer, partially covered, for 40 minutes. Remove remaining chicken; discard back and wings. Let cool slightly. Remove meat from bones, and cut into bite-size pieces. Stir in desired amount of chicken; reserve the rest for another use. Skim fat. Season with salt.',
  },
  {
    id: 3,
    name: 'Potato Soup',
    image: imgPotatoSoup,
    ingredients:
      '1 whole chicken (about 4 pounds), cut into pieces (including back), 8 cups water, Coarse salt, 3 medium onions, thinly sliced (4 cups), 2 celery stalks, sliced crosswise 1/4 inch thick, 4 garlic cloves, crushed, 6 medium carrots, sliced 1/2 inch thick',
    steps:
      'Bring chicken, water, and 1 tablespoon salt to a boil in a large stockpot. Skim foam. Add onions, celery, and garlic. Reduce heat. Simmer, partially covered, for 30 minutes. Remove breast, and set aside. Add carrots. Simmer, partially covered, for 40 minutes. Remove remaining chicken; discard back and wings. Let cool slightly. Remove meat from bones, and cut into bite-size pieces. Stir in desired amount of chicken; reserve the rest for another use. Skim fat. Season with salt.',
  },
  {
    id: 4,
    name: 'Chicken Soup',
    image: imgChickenSoup,
    ingredients:
      '1 whole chicken (about 4 pounds), cut into pieces (including back), 8 cups water, Coarse salt, 3 medium onions, thinly sliced (4 cups), 2 celery stalks, sliced crosswise 1/4 inch thick, 4 garlic cloves, crushed, 6 medium carrots, sliced 1/2 inch thick',
    steps:
      'Bring chicken, water, and 1 tablespoon salt to a boil in a large stockpot. Skim foam. Add onions, celery, and garlic. Reduce heat. Simmer, partially covered, for 30 minutes. Remove breast, and set aside. Add carrots. Simmer, partially covered, for 40 minutes. Remove remaining chicken; discard back and wings. Let cool slightly. Remove meat from bones, and cut into bite-size pieces. Stir in desired amount of chicken; reserve the rest for another use. Skim fat. Season with salt.',
  },
  {
    id: 5,
    name: 'Vegetable Soup',
    image: imgVegetableSoup,
    ingredients:
      '2 Tbsp olive oil, 1 1/2 cups chopped yellow onion (1 medium), 2 cups peeled and chopped carrots (about 5), 1 1/4 cups chopped celery (about 3), 4 cloves garlic , minced, 4 (14.5 oz) cans low-sodium chicken broth* or vegetable broth, 2 (14.5 oz) cans diced tomatoes (undrained)',
    steps:
      'Heat olive oil in a large pot over medium-high heat. Add onions, carrots, and celery and saute 4 minutes then add garlic and saute 30 seconds longer. Add in broth tomatoes, potatoes, parsley, bay leaves, thyme and season with salt and pepper to taste*. Bring to a boil, then add green beans. Reduce heat to medium-low, cover and simmer until potatoes are almst fully tender, about 20 - 30 minutes. Add corn and peas and cook 5 minutes longer. Serve warm.',
  },
];

export default dataDefault;
