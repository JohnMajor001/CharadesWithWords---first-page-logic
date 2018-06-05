var disney = {
	name: 'Disney',
	array: ['Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Daisy Duck', 'Goofy', 'Pluto', 'Chip \'n Dale', 'Pete', 
			'Clarabelle Cow', 'Max Goof', 'Bashful', 'Doc', 'Dopey', 'Grumpy', 'Happy', 'Humbert the Huntsman', 'The Magic Mirror',
			'Prince charming', 'Evil Queen', 'Sleepy', 'Sneezy', 'Snow White', 'Horace Horsecollar', 'Clara Cluck', 'Donna Duck',
			'The Blue Fairy', 'Cleo', 'Figaro', 'Foulfellow the Fox', 'Geppetto', 'Gideon the Cat', 'Jiminy Cricket', 'Lampwick',
			'Monstro', 'Pinocchio', 'Stromboli', 'The Coachman', 'Casey Junior', 'Dumbo', 'Timothy Q. Mouse', 'Mrs. Jumbo', 'Mr. Stork',
			'Jim Crow', 'Brer Bear', 'Brer Fox', 'Brer Rabbit', 'Anastasia Tremaine', 'Bruno', 'Cinderella', 'Drizella Tremaine',
			'Fairy Godmother', 'Jaq', 'Lady Tremaine', 'Octavius (Gus)', 'Prince Charming', 'The King', 'The Grand Duke', 'Alice',
			'Bill', 'Caterpillar', 'Cheshire Cat', 'Dinah', 'Dodo', 'Doorknob', 'Dormouse', 'Mad Hatter', 'March Hare', 'Queen of Hearts',
			'Tweedle Dee', 'Tweedle Dum', 'White Rabbit', 'Captain Hook', 'The Crocodile/Tic Toc', 'George Darling', 'John Darling',
			'The Lost Boys', 'Mary Darling', 'Michael Darling', 'Peter Pan', 'Mr. Smee', 'Tiger Lily', 'Tinker Bell', 'Wendy Darling',
			'Aunt Sarah', 'Darling', 'Jim Dear', 'Jock', 'Lady', 'Si and Am', 'Tramp', 'Trusty', 'Peg', 'King Stephan', 'King Hubert',
			'Aurora/Briar Rose', 'Fauna', 'Flora', 'Maleficent', 'Merryweather', 'Prince Philip', 'Anita', 'Coco', 'Cruella de Vil',
			'Danny', 'Lucky', 'Cadpig', 'Wally', 'Spot', 'Dipstick', 'Domino', 'Freckles', 'Horace', 'Jasper', 'Duffy', 'Nanny',
			'Oddball', 'Patch', 'Penny', 'Pepper', 'Perdita', 'Pongo', 'Roger', 'Rolly', 'Sarge', 'Tibbs', 'Archimedes', 
			'Sir Ector', 'Sir Kay', 'Merlin', 'Madam Mim', 'Wart/Arthur', 'Bert', 'Mrs. Banks', 'Mr. Banks', 'Jane', 'Mary Poppins',
			'Michael', 'Winnie the Pooh', 'Christopher Robin', 'Piglet', 'Eeyore', 'Kanga', 'Roo', 'Tigger', 'Rabbit', 'Owl', 
			'Gopher', 'Mrs. Heffalump', 'Lumpy', 'Cassy', 'Jagular', 'Woozles', 'Mowgli', 'Baloo', 'Bagheera', 'Shere Khan',
			'King Louie', 'Akela', 'Kaa', 'Colonel Hathi', 'Raksha', 'Shanti', 'Ranjan', 'Alan-a-Dale', 'Friar Tuck',
			'Captain of the Guard', 'Father Mouse and Mother Mouse', 'Lady Kluck', 'Little John', 'Maid Marian', 'Mother Rabbit',
			'Otto', 'Prince John', 'Robin Hood', 'Sheriff of Nottingham', 'Sir Hiss', 'Sis', 'Skippy', 'Tagalong', 'Toby',
			'Trigger & Nutsey', 'Baby Herman', 'Benny the Cab', 'Eddie Valiant', 'Jessica Rabbit', 'Judge Doom', 'Roger Rabbit',
			'The Toon Patrol', 'Ariel', 'Prince Eric', 'Flounder', 'Sebastian', 'Ursula', 'Scuttle', 'King Triton', 'Chef Louis',
			'Flotsam', 'Jetsam', 'Grimsby', 'Aquata', 'Andrina', 'Arista', 'Atina', 'Adella', 'Alanna', 'Melody', 'Morgana',
			'Athena', 'Beast/Prince Adam', 'Belle', 'Chip', 'Cogsworth', 'Gaston', 'LeFou', 'Lumiere', 'Maurice', 'Mrs. Potts',
			'Aladdin', 'Princess Jasmine', 'Genie', 'Rajah', 'Abu', 'Jafar', 'Iago', 'Magic Carpet', 'The Sultan', 'Ali Baba',
			'Cassim', 'Mufasa', 'Sarabi', 'Nala', 'Timon', 'Simba', 'Pumbaa', 'Rafiki', 'Zazu', 'Scar', 'Shenzi', 'Banzai',
			'Ed', 'Ben', 'Chief Powhatan', 'Flit', 'Governor Ratcliffe', 'Grandmother Willow', 'John Smith', 'Kekata',
			'Kocoum', 'Lon', 'Meeko', 'Nakoma', 'Percy', 'Pocahontas', 'Thomas', 'Wiggins', 'Woody', 'Buzz Lightyear', 'Jessie',
			'Mr. Potato head', 'Rex', 'Hamm', 'Slinky', 'Bullseye', 'Mrs. Potato head', 'Bo Peep', 'Andy Davis ', 'Al', 'Sarge',
			'Sid Philips', 'Stinky Pete the prospector', 'Wheezy', 'Lots-o\'-Huggin\' Bear', 'Dolly', 'Mr. Prickle Pants',
			'Buttercup', 'Trixie', 'Peas-In-Pod', 'Big Baby', 'Chatter Telephone', 'Bookworm', 'Stretch', 'Chunk', 'The Archdeacon',
			'Judge Claude Frollo', 'Clopin', 'Djali', 'Esmeralda', 'Hugo', 'Laverne', 'Madellaine', 'Captain Phoebus',
			'Quasimodo', 'Sarousch', 'Victor', 'Zephyr', 'Alcmene', 'Amphitryon', 'Atropos', 'Clotho', 'Hades', 'Hera', 'Hermes',
			'Hercules', 'Megara', 'Muses', 'Nessus', 'Pegasus', 'Pain', 'Panic', 'Phil', 'Zeus', 'Fa Mulan/Ping', 'Mushu', 'Li Shang',
			'Shan Yu', 'Chien-Po', 'Chi-Fu', 'Fa Zhou', 'Cri-Kee', 'Yao', 'The Matchmaker', 'Ling', 'Grandmother Fa', 'Fa Li', 
			'The Emperor of China', 'General Li', 'First Ancestor Fa', 'Flik', 'Princess Atta', 'Dot', 'Heimlich', 'Francis', 'Slim',
			'The Queen', 'Hopper', 'P.T. Flea', 'Dim', 'Rosie', 'Gypsy', 'Manny', 'Tuck and Roll', 'Molt', 'Bird', 'Professor Archimedes Q. Porter',
			'Mr. Clayton', 'Jane', 'Kala', 'Kerchak', 'Tantor', 'Tarzan', 'Terk/Terkina', 'Sparks', 'Chicha', 'Kronk', 'Kuzco', 'Pacha',
			'Yzma', 'Tito', 'Sulley', 'Mike', 'Boo', 'Randall', 'Mr. Waternoose', 'Roz', 'Celia', 'Fungus', 'George Sanderson', 
			'Needleman and Smitty', 'Yeti', 'Ms. Flint', 'Mr. Bile', 'Peter Pan', 'Captain Hook', 'Wendy Darling', 'Mr. Smee', 'Nana II',
			'Slightly', 'Cubby', 'Jane', 'Danny', 'Edward', 'Nibs', 'Twins', 'Tootles', 'Lilo', 'Stitch', 'Nani', 'David Kawena', 'Jumba',
			'Agent Pleakley', 'Captain Gantu', 'Cobra Bubbles', 'Mrs. Hasagawa', 'Beary', 'Big Al', 'Country Bears', 'Dex', 'Shaker',
			'Ted Betterhead', 'Thimble', 'Marlin', 'Dory', 'Nemo', 'Gill', 'Bootstrap Bill Turner', 'Captain Teague', 'Cutler Beckett',
			'Davy Jones', 'Elizabeth Swann', 'Hector Barbossa', 'Jack Sparrow', 'James Norrington', 'Joshamee Gibbs', 'Pintel', 'Ragetti',
			'Sao Feng', 'Tia Dalma', 'Will Turner', 'Bloat', 'Peach', 'Bubbles', 'Gurgle', 'Deb/Flo', 'Jacques', 'Nigel', 'Bruce', 'Anchor',
			'Chum', 'Crush', 'Squirt', 'Mr. Ray', 'Tad', 'Pearl', 'Denahi', 'Kenai', 'Koda', 'Rutt', 'Sitka', 'Tanana', 'Tug', 'Tuke', 
			'Sheldonpus', 'Bo', 'Syndrome', 'Elastigirl', 'EVE', 'WALL-E', 'Captain B. McCrea', 'BURN-E', 'Shelby Forthright', 'Steward Bots',
			'PR-T', 'Ship’s Computer', 'M-O', 'AUTO', 'Viole', 'Jack Jack', 'Edna', 'Bolt', 'Mittens', 'Dr. Calico', 'Frozones', 'Mirage',
			'Russell', 'Carl Fredricksen', 'Dug', 'Ellie Fredricksen', 'Charles Muntz', 'Kevin', 'Alpha', 'Beta', 'Gamma', 'Omega', 'Tiana',
			'Prince Naveen', 'Dr. Facilier', 'Mama Odie', 'Charlotte LaBouff', 'Eli ‘Big Daddy’ LaBouff', 'Cousin Randy', 'Marlon the Gator',
			'Eudora', 'Ian the Gator', 'Louis', 'Ray', 'Bomb Voyage', 'Rapunzel', 'Flynn Rider/Eugene', 'Pascal', 'Mother Gothel', 'Hook Hand Thug',
			'Captain of the Guard', 'Maximus', 'Merida', 'Queen Elinor', 'King Fergus', 'Lord MacGuffin', 'Lord Macintosh', 'Lord Dingwall',
			'Wee Dingwall', 'The Witch', 'Maudie', 'Gordon', 'Martin', 'Hamish', 'Hubert', 'Harris', 'Wreck-It Ralph', 'Vanellope Von Schweetz',
			'Fix-It Felix, Jr.', 'Sergeant Calhoun', 'King Candy', 'Taffyta Muttonfudge', 'Marakowski', 'Mr. Litwak', 'General Hologram',
			'Moppet Girl', 'Mayor Gene', 'Q*bert', 'Satan', 'Sour Bill', 'Turbo', 'Sonic', 'Elsa', 'Anna', 'Olaf', 'Kristoff', 'Sven', 'Hans', 
			'Baymax', 'Hiro Hamada', 'Tadashi Hamada', 'Fred', 'Honey Lemon', 'GoGo', 'Wasabi', 'Professor Robert Callaghan', 'Lt. Judy Hopps',
			'Nick Wilde', 'Finnick', 'Chief Bogo', 'Officer Clawhauser', 'Yax', 'Duke Weaselton', 'Gideon Grey', 'Mayor Lionheart',
			'Mrs. Otterton', 'Machas', 'Jerry Jumbeaux Jr.', 'Stu Hopps', 'Bonnie Hopps', 'Bellwether', 'Gazelle', 'Flash', 'Moana',
			'Hei Hei the Rooster', 'Tamatoa', 'Maui', 'Chief Tui', 'Gramma Tala', 'Sina', 'Pua the Pig'],
};

var marvel = {
	name: 'Marvel',
	array: [],
};














Marvel
Thor
Hammer
Iron man
Robert Downey jr
Chris Evans
Captain America
Shield
Vibranium
Wakanda
Black panther
Martin freeman
Goddess of death
Ragnarok 
Avengers
Thannis 
Green doll
Starlord
Raccoon
Groot
Infinity stones
That place with the dwarf 
Asgard 
Loki 
The hulk
The place the hulk was champion in
V... the army with the women
Dr strange
Scarlet Johansson 
Black widow
Hawkeye
Vision
Jarvis
Iron mama lady friend
Whatever plasma thing kept iron man alive?
The amazing Spider-Man
Toby Spider-Man
The other Spider-Man
Evil Spider-Man venom thing
Dr octopus
Green goblin
The glider
Radioactive spider
God of mischief
The king of Asgard
13 MAY 19:04
X-men
Dr xavier 
Gene gray
Lava lady
Cyclops
Nightshade or something
Teleporter Guy
Storm
Guy who freezes stuff
Gf of guy who freezes stuff: energy drainer
Blue doll
Magneto
Angel
Wolverine / Logan / his other name
Deadpool
“Phoenix”