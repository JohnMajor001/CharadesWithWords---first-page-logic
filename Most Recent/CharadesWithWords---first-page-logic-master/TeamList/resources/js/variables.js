// NAME VERBALISE?!!!!

var noOfTeams = 0;
var noOfPlayers = 0;
var addItemBtn = document.getElementById('addItemBtn');
var list = document.getElementById('list');
var readyBtn = document.getElementById('readyBtn');
var teamNamesArray = [];
var playerNamesArray = [];
var teamObjectsArray = [];

// THINGS I ADDED!!!
var maximumPasses = 3; // Only Useful really when settings page is created
var timesUpMessage = "Time's up!";
var whichTeamPlays = 0;
var timer = 30;
var categories = [];
// JUST FOR TEST PURPOSES, WILL NEED TO CHANGE WHEN SETTINGS PAGE COMES IN

var world = {
	name: 'World', 
	array: ['Globe', 'Mars', 'Jupiter', 'Uranus', 'Neptune', 'Saturn', 'Mercury', 'Venus', 'Earth', 'Pluto', 'Star', 
			'Europa', 'Pakistan', 'Kazakhstan', 'Uzbekistan', 'Afghanistan', 'Caucasus', 'Russia', 'Kyrgyzstan', 'Tajikstan', 
			'Turkmenistan', 'Iran', 'India', 'Azerbaijan', 'Kurdistan', 'Egypt', 'Kenya', 'South Africa', 'Swaziland', 'Zimbabwe', 
			'Chad', 'Madagascar', 'Sudan', 'Republic of the Congo', 'Democratic Republic of the Congo', 'Sierra Leone', 'Ghana', 'Botswana',
			'Ethiopia', 'Zambia', 'Uganda', 'Algeria', 'Angola', 'Rwanda', 'Cameroon', 'Somalia', 'Tanzania', 'Senegal', 'Libya', 
			'Ireland', 'England', 'Wales', 'Scotland', 'Dublin', 'Belfast', 'Galway', 'Liverpool', 'London', 'Manchester', 
			'Newcastle', 'Brighton', 'Stonehenge', 'The Giant\'s Causeway', 'Cardiff', 'Holyhead', 'Glasgow', 'Edinburgh',
			'Dundee', 'Downunder', 'Hastings', 'Cornwall', 'Lough Neagh', 'Buckingham Palace', 'Trafalgar Square',
			'Piccadilly Circus', 'King\'s Cross', 'France', 'Paris', 'Eiffel Tower', 'The Louvre', 'Arc de Triumph', 'Nice', 
			'Timbuktu', 'Bordeaux', '' ],
};

var objects = {
	name: 'Objects',
	array: ['Fork', 'Knife', 'Plate', 'Glass', 'Spyglass',
			 'Keyboard', 'Television Set', 'Mobile Phone', 'Sexton', 'Key Fob', 'Printer', 
			 'Bathtub', 'Shower', 'Boiler Plate', 'Knob', 'Handle', 'Nail', 'Hammer', 'Wrench', 
			 'Screwdriver', 'Remote Control', 'Button', 'Rubbish bag', 'Towel', 'Bath Robe',
			 'Bathing suit', 'Boxer Shorts', 'Underpants', 'Knitwear', 'Jumper', 'Jar', 'Envelope', 
			 'Bottle', 'Cheese Grater', 'Drawer', 'Tube', 'Box', 'Card', 'Bag', 'Handbag', 'Cowboy Boots',
			 'Leopard-print Trousers', 'Lamp Shade', 'Turntable', 'Flute', 'Guitar Case', 'SuitCase', 
			 'Saucepan', 'Pot', 'Mug', 'Lazy Susan', 'Shuttlecock', 'Tennis Ball', 'Piano', 'Surfboard',
			 'Sponge', 'Tin Can', 'Magazine', 'Newspaper', 'Catalogue', 'Tissuebox', 'Wallet',
			 'Jewellery Box', 'Water Jug', 'Lanturn', 'Lightbulb', 'Switch', 'Pad', 'Blackboard',
			 'Floppy Disk', 'Standing Mirror', 'Pouch', 'Cafeteria Tray', 'Book', 'fan', 'Mute',
			 'Key-ring', 'Soap Dispenser', 'Shopping Trolley', 'Umbrella', 'Cane', 'Optical Lenses',
			 'Bicycle', 'Dial', 'Tape Recorder', 'Mp3 Player', 'Walkman', 'Thermos', 'Notepad', 'Door Mat',
			 'Nailbrush', 'Toothbrush', 'Broom', 'Scissors', 'Tupperware Container', 'WhiteBoard',
			 'Golf Club', 'Golf Ball', 'Blade', 'Sword', 'Swiss Army Knife', 'Filter', 'Nozzle', 'Matchstick', 
			 'Hair Dryer'],
			};
var actions = {
	name: 'Actions', 
	array: ['Juggling', 'Walking', 'Running', 'Sprinting', 'Debating', 'Killing', 'Murdering', 'Slaughtering', 'Destroying', 
				'Swapping', 'Distracting', 'Playing', 'Disposing', 'Negotiating', 'Eating', 'Following', 'Jingling', 'Returning', 
				'Standing', 'Sleeping', 'Branding', 'Meeting', 'Dreaming', 'Singing', 'Waking', 'Loving', 'Skipping', 'Rhyming',
				'Chasing', 'Shadowing', 'Stalking', 'Going', 'Leaving', 'Exiting', 'Mourning', 'Disappearing', 'Calling', 
				'Reaching', 'Hopping', 'Waving', 'Circling', 'Driving', 'Laughing', 'Making', 'Hiding', 'Looking', 'Courting',
				'Humming', 'Holding', 'Counting', 'Numbering', 'Dancing', 'Lying', 'Questioning', 'Reversing', 'Tailing', 
				'Theorising', 'Coding', 'Starting', 'Beginning', 'Ending', 'Trying', 'Recording', 'Pouring', 'Scattering'],
			};
var nature = {
	name: 'Nature',
	array: ['Peach', 'Pineapple', 'Pear', 'Plum', 'Dragonfruit', 'Bunch of Bannanas', 'Kiwifruit', 'Carrot', 'Potato',
			'Red onion', 'Oregano', 'Orange', 'Apricot', 'Avocado', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
            'Cucumber', 'Crab apples', 'Boysenberry', 'Currant', 'Cherry Tree', 'Cherimoya',
            'Chico fruit', 'CloudBerry', 'Coconut', 'Cranberry', 'Damson', 'Date', 'Durian', 'Elderberry',
            'Feijoa', 'Fig', 'Goji berry', 'Rasin', 'Red grapes', 'Grapefruit', 'Giava', 'Honeyberry',
            'Huckleberry', 'Jabuticaba', 'Jackfruit',, 'Sharonfruit' 'Jambul', 'Jujube', 'Juniper berry', 'Kumquat', 'Lemon',
            'Lime', 'Loquat','Longan', 'Chili pepper', 'Corn kernel', 'Eggplant', 'Aubergine', 'Olive',
            'Pea', 'Pumpkin', 'Squash', 'Tomato', 'Prune', 'Plumcot', 'Pomegranate', 'Pomelo', 'Lychee',
            'Mango', 'Mangosteen', 'Marionberry', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Melon', 'Miracle fruit',
            'Mulberry', 'Nectarine', 'Nance', 'Blood Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya',
            'Passionfruit', 'Persimmon', 'Plantain', 'Purple Mangosteen', 'Quince', 'Raspberry', 'Salmonberry',
            'Rambutan', 'Salal berry', 'Salak', 'Satsuma', 'Soursop', 'Carambola', 'Star fruit', 'Strawberry',
            'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu', 'Barn Owl', 'Barnacle Goose', 'Swan', 'Black Guillemot',
            'Blackbird', 'Seagull', 'Blue Tit', 'Robin', 'Brent Goose', 'Bullfinch', 'Buzzard', 'Coal Tit', 'Chaffinch',
            'Collared Dove', 'Cuckoo', 'Dipper', 'Dunlin', 'Feral Pigeon', 'Grasshopper Warbler', 'Hawk', 'Great Tit',
            'Partridge', 'Hen', 'Cow', 'Bull', 'Heifer', 'Honey Buzzard', 'House Sparrow', 'Woodpecker', 'Jay', 'Kestrel',
            'Kingfisher', 'Lapwing', 'Little Gull', 'Long-tailed Duck', 'Magpie', 'Merlin', 'Thrush', 'Moorhen', 'Mallard',
            'Ostercatcher', 'Pheasant', 'Puffin', 'Pink-footed Goose', 'Peregrine', 'Pied Flycatcher', 'Quail', 'Raven', 'Red Grouse',
            'Ruddy Duck', 'Sandwich Tern', 'Short-eared Owl', 'Snowy Owl', 'Sparrowhawk', 'Starling', 'Swallow', 'Skylark', 'Turtle Dove',
            'French Hen', 'Woodcock', 'Wren', 'Afghan Hound', 'Airedale Terrier', 'American Foxhound', 'Pit Bull', 'Eskimo Dog',
            'Labrador', 'German Shepherd', 'French bulldog', 'Golden Retriever', 'Beagle', 'Poodle', 'Rottweiler', 'Pointers',
            'Siberian Husky', 'Dachshund', 'Great Dane', 'Pembroke Welsh Corgy', 'Doberman Pinschers', 'Australian Shepherds',
            'Shih Tzu', 'Boston Terrier', 'Havanese', 'Spaniel', 'Pug', 'Chihuahuas', 'Basset Hound', 'Border Colly', 'Rhodesian Ridgeback',
            'St. Bernards', 'Scottish Terrier', 'Dalmation', 'Irish Wolfhound', 'Greyhound', 'Chow Chows', 'Black and Tan Coonhounds',
            'Pharaoh Hound', 'English Foxhound', 'Maine Coon', 'Persian Cat', 'Siamese Cat', 'Sphynx Cat', 'Lynx', 'Burmese Cat',
            'Oriental Shorthair', 'Savannah cat', 'Egyptian Mau', 'Havana Brown', 'Pixie-bob', 'Stallion', 'Mare', 'Calf', 'Donkey',
            'Siamese Fighting Fish', 'Guppy', 'Carp', 'Goldfish', 'Arapaima', 'Wels Catfish', 'Blobfish', 'Cobia', 'Ocean Sunfish',
            'Angelfish', 'Northern Pike', 'Angler', 'Suckermouth Catfish', 'Tench', 'Rainbow Trout', 'Perch', 'Mackarel', 'Palette Surgeonfish',
            'Great White Shark', 'Giant Oarfish', 'Common Roach', 'Mosquito Fish', 'Bass', 'Greenland Shark', 'Basking Shark',
            'Goblin Shark', 'Whale Shark', 'Dolphin', 'Blue Whale', 'Orca', 'Humpback Whale', 'Sperm Whale', 'Narwhal', 'Gray Whale',
            'Dwarf Sperm Whale', 'Anaconda', 'Vipers', 'Python', 'Black Mamba', 'Taipan', 'Cobra', 'Rattlesnake', 'Kingsnakes',
            'Garter Snake', 'Boa', 'Elephant Trunk Snake', 'False Cobra', 'Mole Snake', 'Badger', 'Fox', 'Tortoise', 'Turtle',
            'Bandicoot', 'Mole', 'Tapeworm', 'Guinea Pig', 'Chameleon', 'Elephant', 'Woolly Mammoth', 'Saber-toothed Tiger', 'Lion',
            'White Tiger', 'Snow Leopard', 'Cheetah', 'Panther', 'Lemur', 'Monkey', 'Bonobo', 'Gorilla', 'Orangutan', 'Human',
            'Chimpanzee', 'Gibbon', 'Red Panda', 'Neanderthal', 'Proconsul', 'Velvet Monkey', 'Baboon', 'Guinea Baboon', 'Green Monkey',
            'Red-faced Spider Monkey', 'Black Snub-nosed Monkey', 'Silvery Lutung', 'Giant Panda', 'Polar Bear', 'Brown Bear',
            'American Black Bear', 'Sloth', 'Ursinae', 'Spectacled Bear', 'Atlas Bear', 'Blue Bear', 'Hail Stones', 'Snow', 'Twister',
            'Whirlwind', 'Sleet', 'Tornado', 'Whirlpool', 'Diplodocus', 'Stegosaurus', 'Triceratops', 'Pterodactyl', 'Tyrannosaurus Rex',
            'Theropod', 'Velociraptor', 'Iguana', 'Crocodile', 'Aligator', 'Gecko', 'Salamander', 'Newt', 'Horned Lizard', 'Bearded Dragon',
            'Archaeopteryx', 'Hammerhead Shark', 'Penguin', 'Emperor Penguin', 'Yellow-eyed Penguin', 'King Penguin', 'Little Blue Penguin',
            'Dodo', 'Dire wolf', 'Ankylosaurus', 'Crested Penguin', 'Megabats', 'Flying Foxes', 'Vampire Bat', 'Goat', 'Pig', 'Sow', 'Piglet',
            'Rat', 'Mouse', 'Glass Frog', 'Poison dart frog', 'Fire-bellied Toad', 'Tomato Frog', 'Electric Eel', 'Mongoose', 'Monk Fish',
            'Meerkat', 'Butterfly', 'Moth', 'Beetle', 'Honeybee', 'Army Ants', 'Mosquito', 'LadyBird', 'Fly', 'Flea', 'Bed bug', 'Cricket',
            'Termite', 'Mantis', 'Dragonfly', 'Earwig', 'Louse', 'Aphid', 'Cicada', 'Mole Cricket', 'Jerusalem Cricket', 'Mayfly',
            'Snakefly', 'Azalea', 'Balloon flower', 'Balsam', 'Begonia', 'Bellflower', 'Blackeyed Susan', 'Bleeding Heart', 'Buttercup',
            'Butterfly Weed', 'California Poppy', 'Castor Bean', 'Chrysanthemum', 'Sage', 'Daisy', 'Foxglove', 'Geranium', 'Glory of the Snow',
            'Goatsbeard', 'Hollyhock', 'Hyacinth', 'Runner Bean', 'Fin', 'Rapeseed', 'Wheat', 'Grass', 'Cannabis', 'Japanese Knotweed', 'Dandelion',
            'Algae', 'Toadstool', 'Mushroom', 'Celery', 'Cabbage', 'Chickweed', 'Spinach', 'Turnip', 'Conifer', 'Palm Tree', 'Deciduous shrub', 'Northern Red Oak',
            'Almond', 'Peanut', 'Pistachio', 'Pecan', 'Bay laurel', 'European Beech', 'Brazil Nut', 'Weeping Willow', 'Silver birch', 'Camphor Tree',
            'Sugar Maple'],
        };
// Order of Categories on the board is determined by this
categories.push(objects);
categories.push(actions);
categories.push(nature);


// Back up arrays
var backUpCategories = [];

var backUpObjects = [];
for(let poop = 0; poop < objects.array.length; poop++) {
	backUpObjects.push(objects.array[poop]);
}
var backUpActions = [];
for(let poop = 0; poop < actions.array.length; poop++) {
	backUpActions.push(actions.array[poop]);
}
var backUpNature = [];
for(let poop = 0; poop < nature.array.length; poop++) {
	backUpNature.push(nature.array[poop]);
}

backUpCategories.push(backUpObjects);
backUpCategories.push(backUpActions);
backUpCategories.push(backUpNature);

/*function team(playerNames, numberOfPlayers, score, position) {
  this.playerNames = playerNames;
  this.numberOfPlayers = numberOfPlayers;
  this.score = score;
  this.position = position;
}*/



// Things to do!
/* Make Team Name Box bigger
      Put 'X' at side of each third player box to deleteBtn
      do the same for team actually*/

// Organise arrays of player Names in accordance with relevant Team Names
