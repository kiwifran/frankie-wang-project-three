const recipeApp ={};
//28 recipes stored in the recipes property.
recipeApp.recipes = {
    meat: [
        {
            name: "Bacon Bolognese",
            time:[22,"short-time"],
            servingNumber:[4,"more"],
            author:"Sara Buenfeld",
            picLink:"assets/recipe-pic/bacon-bolognese.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/2411643/bacon-bolognese",
            method: [
                "Boil the spaghetti following pack instructions. Meanwhile, heat the oil in a non-stick pan. Add the carrots, celery and bacon, and stir well. Cover the pan and cook, stirring occasionally, for 10 mins until the veg has softened.", 
                "Tip in the pesto, warm through, then stir through the drained spaghetti with the basil, if using."
            ]
        },
        {
            name: "Bacon & roast onion salad",
            time:[30,"short-time"],
            servingNumber:[1, "less"],
            author:"Good Food",
            picLink:"assets/recipe-pic/bacon-and-onion-salad.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/3077682/bacon-and-roast-onion-salad",
            method:[
                "Heat oven to 220C/200C fan/gas 7. Arrange the onion wedges on one side of a baking tray. Drizzle with ½ tbsp of the olive oil and season. Put in the oven and roast for 15 mins.",
                "Meanwhile, cook the peas in boiling water for 2 mins, drain and rinse in very cold water. Set aside.",
                "Make the dressing by mixing together another ½ tbsp of the oil, the vinegar, mustard and seasoning. Turn the onions, and put the bacon slices and bread next to them on the baking tray. Drizzle the remaining oil over the bread. Return the tray to the oven for 12 mins more, until the bacon and bread are golden.",
                "Put the lettuce and peas in a bowl, add the dressing and toss to combine. Arrange the onion and bread on top. Break up the bacon slightly and scatter over. Drizzle with a little more olive oil, if you like, and eat straight away."
            ]
        },
        {
            name: "Lentil & bacon soup",
            time:[35,"long-time"],
            servingNumber:[3,"less"],
            author:"Caroline Hire",
            picLink:"assets/recipe-pic/lentil-bacon-soup.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/2155646/lentil-and-bacon-soup",
            method:[
                "Heat the olive oil in a large saucepan. Add the onion, 1 pack of pancetta and the carrot. Cook on a low to medium heat for 10 minutes until the onions are soft.",
                "Add the cumin, turmeric, garlic and chilli and cook for a further 1 – 2 minutes until the aromas are released.",
                "Pour in 1.25 litres of boiling water, crumble in the stock cubes and add the lentils. Bring to a simmer and cook for 20 mins, stirring occasionally to ensure the lentils aren’t sticking.",
                "Meanwhile, fry the remaining lardons in a small frying pan for about 10 minutes until crispy. You don’t need to add any oil as plenty will run from the pancetta.",
                "Serve the soup with a sprinkle of crispy lardons on top."
            ]
        },
        {
            name: "Beef & bean hotpot",
            time:[60,"long-time"],
            servingNumber:[8,"more"],
            author:"Good Food",
            picLink:"assets/recipe-pic/beef-bean-hotpot.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/2627/beef-and-bean-hotpot",
            method:[
                "Heat a large non-stick pan, add the beef then fry over a medium-high heat until browned, stirring often and breaking up any lumps with a spoon. Crumble in the stock cube and mix well.",
                "Add the vegetables, stir to mix with the beef and pour in enough boiling water (about 1.3 litres) to cover. Bring to the boil, then lower the heat and stir well. Cover the pan and simmer gently for about 30 mins or until the vegetables are tender.",
                "Tip in the baked beans, sprinkle with Worcestershire sauce or Tabasco to taste, stir well and heat through. Taste for seasoning and sprinkle with parsley. Serve with extra Worcestershire sauce or Tabasco, for those who like a peppery hot taste."
            ]
        },
        {
            name: "Beef bulgogi stir-fry",
            time:[20,"short-time"],
            servingNumber:[4,"more"],
            author:"Jennifer Joyce",
            picLink:"assets/recipe-pic/beef-bulgogi-stir-fry.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/beef-bulgogi-stir-fry",
            method:[
                "Put the ginger, soy, mirin, garlic, pineapple, chilli flakes, sugar and 1 tsp of the sesame oil in a food processor and blend until fine. Pour the marinade into a bowl, add the meat, mix well and leave to sit while you prepare the onion.",
                "Heat the remaining sesame oil in a large wok or frying pan until very hot. Add the onion and stir-fry for a few mins. Add the beef and the marinade, stirring constantly until it’s cooked through, about 5 mins. Sprinkle with the sesame seeds and serve with rice and chopped spring onions."
            ]
        },
        {
            name: "Crispy chilli beef",
            time:[40,"long-time"],
            servingNumber:[3,"less"],
            author:"Cassie Best",
            picLink:"assets/recipe-pic/crispy-chilli-beef.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/2852672/crispy-chilli-beef",
            method:[
                "Put 350g thin-cut minute steak strips in a bowl and toss in 3 tbsp cornflour and 2 tsp Chinese five-spice powder.",
                "Heat 100ml vegetable oil in a wok or large frying pan until hot, then add the beef and fry until golden and crisp.",
                "Scoop out the beef and drain on kitchen paper. Pour away all but 1 tbsp oil.",
                "Add 1 thinly sliced red pepper, ½ thinly sliced red chilli, sliced white ends of 4 spring onions, 2 crushed garlic cloves and thumb-sized piece ginger, cut into matchsticks, to the pan. Stir-fry for 3 mins to soften, but don’t let the garlic and ginger burn.",
                "Mix the 4 tbsp rice wine vinegar or white wine vinegar, 1 tbsp soy sauce, 2 tbsp sweet chilli sauce and 2 tbsp tomato ketchup in a jug with 2 tbsp water, then pour over the veg.",
                "Bubble for 2 mins, then add the beef back to the pan and toss well to coat.",
                "Serve the beef on noodles with prawn crackers, if you like, scattered with the remaining ½ sliced red chilli and sliced green parts of the spring onions."

            ]
        },
        {
            name: "Bang bang chicken & vegetable noodles",
            time:[30,"short-time"],
            servingNumber:[4,"more"],
            author:"Cassie Best",
            picLink:"assets/recipe-pic/bang-bang-chicken.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/bang-bang-chicken-vegetable-noodles",
            method: [
                "Bring a large pan of seasoned water to a simmer, add the chicken breasts and lower the heat to a gentle simmer. Poach for 8-10 mins or until the chicken is cooked through – test by cutting in half through the thickest part. Transfer to a plate to cool down while you prepare the noodles.",
                "Using a spiralizer fitted with the thicker noodle setting (or a julienne peeler), turn the courgettes and carrots into curly noodles. Tip them into a bowl with the spring onions, beansprouts and soya beans.",
                "In another bowl, mash the peanut butter and soy sauce together to loosen the peanut butter, then whisk in the chilli sauce, sesame oil, lime zest and juice, and 1 tbsp water. When the chicken is cool enough to handle, use two forks to shred it. Add to the vegetables, drizzle over the dressing and gently toss everything together until well coated. Transfer to a platter and scatter over the peanuts and chilli (if using). Leftovers will make a great packed lunch."
            ]
        },
        {
            name: "Spring vegetable broth with shredded chicken",
            time:[20,"short-time"],
            servingNumber:[2,"less"],
            author:"Jennifer Joyce",
            picLink:"assets/recipe-pic/spring-vegetable-chicken.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/spring-vegetable-broth-shredded-chicken",
            method: [
                "Heat oven to 200C/180C fan/gas 6. Heat 1 tsp of the oil in a pan, brown the chicken, then remove. Bring the stock to the boil in the same pan, add the chicken and cook for 5 mins. Turn off the heat, cover with a lid and leave to stand for 30 mins.",
                "Put the bread cubes on a baking tray. Drizzle with the remaining oil, some salt and the Parmesan. Bake for 6 mins until crunchy and golden. Remove and scrape off the tray onto a plate.",
                "Remove the chicken from the pan and slice it. Bring the stock to the boil again and add the greens, asparagus and peas. Cook for 1 min, then add the beans and chicken. Heat everything through, then pour into bowls and top with the Parmesan toast to serve."
            ]
        },
        {
            name: "Spinach, bacon & white bean salad",
            time:[20,"short-time"],
            servingNumber:[4,"more"],
            author:"Good Food",
            picLink:"assets/recipe-pic/spinach-bacon-salad.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/2196646/spinach-bacon-and-white-bean-salad",
            method: [
                "Heat a large pan and dry-fry the bacon for about 2 mins each side until crispy. Remove and drain on kitchen paper. Keep the fat from the bacon in the pan, add the vinegar and bubble for a few secs before tipping in the peppers and beans. Season and heat through. Toss together the spinach, beans, peppers and bacon, then drizzle with a dressing of your choice."
            ]
        },
        {
            name: "Smoky maple duck salad",
            time:[30,"short-time"],
            servingNumber:[2,"less"],
            author:"Good Food",
            picLink:"assets/recipe-pic/smoky-maple-duck-salad.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/6382/smoky-maple-duck-salad",
            method:[
                "Heat oven to 220C/fan 200C/gas 7. Put a small roasting tin in the oven and let it heat up for a few mins. Season the duck skin and flesh well, then put into the tin, skin-side down, and roast for 10 mins until the skin is golden and crisp and the fat has run out. Leave for 15 mins if you like your duck well cooked through.",
                "Meanwhile, mix 2 tbsp maple syrup with the garlic and chilli paste. Tip the fat out from the pan, turn the duck skin-side up, then roast for another 5 mins, basting with the maple mix once or twice until sticky and glazed and the duck is pink in the middle. Remove and let the duck rest for 5 mins.",
                "Pile the salad and the radishes onto two serving plates. Slice the duck at an angle and nestle into the salad. Stir the rest of the maple syrup and the sherry vinegar into the pan juices, then drizzle over the salad, season and serve straight away."
            ]
        },
        {
            name: "Easy lamb hotpot",
            time:[60,"long-time"],
            servingNumber:[3,"less"],
            author:"Miriam Nice",
            picLink:"assets/recipe-pic/easy-lamb-hotpot.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/easy-lamb-hotpot",
            method: [
                "Boil the potatoes in a saucepan of boiling water for 15 mins until par-boiled, then drain and leave to steam dry and cool.",
                "Heat oven to 200C/180C fan/gas 6. Heat the oil in a large frying pan and fry the onion for 10 mins or until starting to soften. Add the carrot and cook for 5 mins until tender. Tip the carrot and onion mixture into a large 2-litre ovenproof dish. Put the pan back over high heat. Fry the lamb meatballs, turning, until golden on the outside. Put the meatballs into the ovenproof dish. Pour over the gravy and tuck in the bay leaves and thyme sprigs.",
                "Thinly slice the cooled potatoes and arrange over the top of the meatballs. Brush the potato with 1-2 tsp oil and add a good grinding of black pepper. Bake in the oven for 20-25 mins until the potatoes are tender and starting to become crisp at the edges, and the gravy is bubbling."
            ]
        },
        {
            name:"Aubergine curry with lamb cutlets",
            time:[60,"long-time"],
            servingNumber:[2,"less"],
            author:"Lulu Grimes",
            picLink:"assets/recipe-pic/aubergine-curry-lamb-cutlets.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/aubergine-curry-lamb-cutlets",
            method:[
                "For the lamb, mix the yogurt and turmeric, and brush it over each cutlet. Cut the aubergine into large wedges. Put a good slug of oil into a frying pan and fry the wedges on both side until they are browned all over and very soft (add more oil if you need to) – they should look almost translucent and lightly charred. Lift the wedges gently out of the pan with tongs, leaving the oil behind – if you have more than 1 tbsp oil left, pour some off.",
                "Put the fennel seeds and nigella seeds in the pan and heat them until they start to pop. Add the coriander, turmeric and chilli, and let the oil foam up a little with the spices. Add the ginger and garlic, and cook for 1 min, making sure the mixture doesn’t stick. Tip in the tomatoes and simmer the mixture for 3 mins or until it starts to thicken, then season well. Return the aubergine to the pan to continue cooking.",
                "Meanwhile, heat some oil in a frying pan. Salt the lamb cutlets on both sides and fry them until they are browned on the outside but still slightly pink inside. It’s important to make sure the fat is well browned.",
                "Spoon some yogurt over the curry and sprinkle with coriander leaves and nigella seeds. Serve with the lamb and chapatis or rice."
            ]
        },
        {
            name: "Sausage & butter bean stew",
            time:[55,"long-time"],
            servingNumber:[4,"more"],
            author:"Tom Kerridge",
            picLink:"assets/recipe-pic/sausage-butter-bean.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/sausage-butter-bean-stew",
            method:[
                "Gently heat the oil in a large pan. Fry the sausages all over until brown, then remove and set aside. Add the onion to the pan and fry for 5-10 mins until golden and soft, then add the celery, garlic and rosemary, and cook for 2 mins more. Pour over the stock and bring to the boil.",
                "Reduce the heat and simmer for 20 mins, then add the sausages back to the pan along with the butter beans. Simmer for 8 mins, then stir in the butter, parsley and lemon zest. Ladle into bowls and serve piping hot with lots of chunky bread."
            ]
        },
        {
            name: "Chunky Bolognese soup with penne",
            time:[45,"long-time"],
            servingNumber:[4,"more"],
            author:"Sara Buenfeld",
            picLink: "assets/recipe-pic/chunky-bolognese-soup.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/chunky-bolognese-soup",
            method:[
                "Heat the oil in a large non-stick pan and fry the onions for a few mins. Add the carrots, celery and garlic, then fry for 5 mins, stirring until the vegetables start to soften.",
                "Add the meat and stir well so it breaks down as it cooks. Once it’s turned brown, add the passata and bouillon along with 1.3 litres of boiling water. Add the paprika, thyme and some black pepper. Cover the pan and simmer for 15 mins.",
                "Tip in the penne and cook for 12-15 mins until tender. Stir through the cheese, then ladle into bowls. Sprinkle over extra cheese, if you like."
            ]
        }
    ],
    veggies: [
        {
            name: "Roast mushroom gnocchi",
            time: [40,"long-time"],
            servingNumber: [3,"less"],
            author: "Miriam Nice",
            picLink:"assets/recipe-pic/roast-mushroom-gnocchi.jpg",
            pageLink: "https://www.bbcgoodfood.com/recipes/roast-mushroom-gnocchi",
            method: [
                "Heat oven to 220C/200C fan/gas 7. Slice the mushrooms and put in a roasting tin with the gnocchi, then drizzle over 3 tbsp olive oil. Roast for 25-30 mins or until the gnocchi are golden, stirring occasionally to stop them sticking.", 
                "Once the gnocchi are ready, stir half the spinach into the tin to wilt it, then crumble the blue cheese over the top. Put it back in the oven just to melt the cheese, then serve with the remaining spinach, drizzled with a little olive oil."
            ]
        },
        {
            name: "Mushroom brunch",
            time: [20,"short-time"],
            servingNumber: [4,"more"],
            author: "Miriam Nice",
            picLink:"assets/recipe-pic/mushroom-brunch.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/mushroom-brunch",
            method: [
                "Slice the mushrooms and crush the garlic clove. Heat the olive oil in a large non-stick frying pan, then fry the garlic over a low heat for 1 min. Add the mushrooms and cook until soft. Then, add the kale. If the kale won’t all fit in the pan, add half and stir until wilted, then add the rest. Once all the kale is wilted, season.",
                "Now crack in the eggs and keep them cooking gently for 2-3 mins. Then, cover with the lid to for a further 2-3 mins or until the eggs are cooked to your liking. Serve with bread."
            ]
        },
        {
            name: "Mushrooms on toast",
            time: [20,"short-time"],
            servingNumber: [4,"more"],
            author: "Good Food",
            picLink:"assets/recipe-pic/mushrooms-on-toast.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/12800/mushrooms-on-toast",
            method: [
                "Toast the sourdough bread, cut each slice in half, then set aside. Heat a large frying pan with the olive oil. Fry the prosciutto in the pan for about 2 mins on each side until golden and crisp. Break into large pieces and set aside on some kitchen paper.",
                "Add the butter to the pan followed by the mushrooms. Cook for 2 mins, then add the garlic and crème fraîche. Cook for 3-5 mins more until the mushrooms are soft and lightly coated in the crème fraîche. Stir through a little parsley. Pile up on the toasts and top with the prosciutto and more parsley."
            ]
        },
        {
            name: "Healthy pasta primavera",
            time: [30,"short-time"],
            servingNumber: [4,"more"],
            author: "unknown",
            picLink:"assets/recipe-pic/healthy-pasta-primavera.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/healthy-pasta-primavera",
            method: [
                "Bring a pan of salted water to the boil and put a steamer (or colander) over the water. Steam the beans, asparagus and peas until just tender, then set aside. Boil the pasta following pack instructions.",
                "Meanwhile, fry the leeks gently in the oil and butter for 5 mins or until soft. Add the fromage frais to the leeks and very gently warm through, stirring constantly to ensure it doesn’t split. Add the herbs and steamed vegetables with a splash of pasta water to loosen.",
                "Drain the pasta and stir into the sauce. Adjust the seasoning, then serve scattered with the cheese and drizzled with a little extra olive oil."
            ]
        },
        {
            name: "Warm cauliflower salad",
            time: [50,"long-time"],
            servingNumber: [4,"more"],
            author: "Good Food",
            picLink:"assets/recipe-pic/warm-cauliflower-salad.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/1120662/warm-cauliflower-salad",
            method: [
                "Heat oven to 200C/180C fan/gas 6. Toss the cauliflower with the olive oil, season and roast for 15 mins. Stir in the red onion and carry on roasting for 15-20 mins more until tender.",
                "While the cauliflower is roasting, mix the vinegar, honey and raisins with some seasoning.",
                "When the cauliflower is done, stir in the dressing, dill, almonds and spinach, and serve."
            ]
        },
        {
            name: "Hot & sour aubergine",
            time: [20,"short-time"],
            servingNumber: [2,"less"],
            author:"Jennifer Joyce",
            picLink:"assets/recipe-pic/hot-sour-aubergine.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/hot-sour-aubergine",
            method: [
                "Put the aubergine in a bowl of lightly salted water and stand for 30 mins to soften. Drain and pat dry. Blanch the green beans in boiling water for 1 min then drain, rinse in cold water and drain again.",
                "To make the sauce, combine all the ingredients in a small bowl and set aside.",
                "Heat the oil in a large frying pan or wok over medium-high heat. When hot, cook the aubergine pieces until nicely browned on all sides – don’t turn them too early, let them get a nice colour first. When they start to brown, add the onion and chilli, and keep stir-frying for 4 mins or until soft.",
                "Add the sauce and green beans, cover with a lid, lower the heat and simmer for 2 mins or until the aubergine is soft. Serve with rice."
            ]
        },
        {
            name: "Roast aubergine with goulash sauce & sweet potato fries",
            time: [40,"long-time"],
            servingNumber: [2,"less"],
            author:"Sara Buenfeld",
            picLink: "assets/recipe-pic/aubergine-goulash.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/roast-aubergine-goulash-sauce-sweet-potato-fries",
            method: [
                "Heat oven to 240C/220C fan/gas 7. Brush the aubergine slices with 1 tsp oil, put on a baking sheet and roast for 15 mins. Meanwhile place a wire cooling rack on top of a baking tray. Toss the sweet potatoes and thyme with 2 tsp oil, then scatter them over the rack and set aside until ready to cook.",
                "Heat 1 tsp oil in a non-stick pan, add the onions, cover the pan and leave to cook for 5 mins. Take off the lid and stir – they should be a little charred now. Stir in the green pepper and garlic, cover the pan and cook for 5 mins more. Put the sweet potatoes in the oven and bake for 15 mins while you get on with the rest of the sauce.",
                "Stir the paprika into the onions and peppers, pour in 150ml water, then stir in the cherry tomatoes, tomato purée and bouillon. Cover and simmer for 10 mins while you cook the spinach according to pack instructions. Stir in the seeds.",
                "Arrange the aubergine, fries and spinach in bowls and spoon on the goulash sauce. Scatter with thyme, if you like."
            ]
        },
        {
            name: "Spicy cauliflower",
            time: [30,"short-time"],
            servingNumber: [8,"more"],
            author:"Roopa Gulati",
            picLink: "assets/recipe-pic/spicy-cauliflower.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/1713636/spicy-cauliflower",
            method: [
                "Heat the oil in a big pan or wok with a lid, then add the ginger and spices. Swirl everything around for a few secs until the spices are aromatic. Reduce the heat, then stir in the cauliflower and some seasoning. Put the lid on and cook for 10 mins or until softened, stirring occasionally. Sprinkle over the coriander before serving."
            ]
        },
        {
            name: "Orecchiette with anchovies & purple sprouting broccoli",
            time: [25,"short-time"],
            servingNumber: [2,"less"],
            author:"cassie Best",
            picLink: "assets/recipe-pic/orreciette.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/orecchiette-anchovies-purple-sprouting-broccoli",
            method: [
                "Cook the orecchiette following pack instructions. Meanwhile, heat 3 tbsp of the olive oil and 1 tbsp of the oil from the anchovies in a frying pan. Add the garlic and chilli, and sizzle for 3-4 mins until the garlic is just starting to turn golden. Add the anchovies and lemon juice, and cook for 1-2 mins more until the anchovies melt into the sauce. Put the remaining olive oil, breadcrumbs and lemon zest in another frying pan, stir together and cook until crisp.",
                "When the pasta has 4-5 mins to go, add the broccoli to the pan. When cooked, drain, reserving a cup of the pasta water, then add to the frying pan with the garlic and anchovies. Stir and cook over a low heat for a further 2 mins, adding a splash of pasta water if it looks dry. Season, then serve in pasta bowls with the lemony crumbs sprinkled over the top."
            ]
        },
        {
            name: "Creamy cauliflower & broccoli bake",
            time: [45,"long-time"],
            servingNumber: [8,"more"],
            author:"Lucy Netherton",
            picLink: "assets/recipe-pic/creamy-cauliflower-broccoli-bake.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/2831664/creamy-cauliflower-and-broccoli-bake",
            method: [
                "Cover the cauliflower in cold water, add the stock cube, then bring up to the boil. Add the broccoli and cook for 1 min, then drain (reserving some of the stock) and allow to steam-dry for 1-2 mins. (The veg shouldn’t be tender.) ",
                "Heat oven to 200C/180C fan/gas 6. Mix together the crème fraîche, mustard, wine (if using), nutmeg and some seasoning. Add the veg and mix well. Tip into an ovenproof dish, scatter with the breadcrumbs and bake for 30 mins until golden and crisp on the top."
            ]
        },
        {
            name: "Ginger sweet tofu with pak choi",
            time: [30,"short-time"],
            servingNumber: [2,"less"],
            author:"Ching-He Huang",
            picLink: "assets/recipe-pic/ginger-sweet-tofu.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/412629/ginger-sweet-tofu-with-pak-choi",
            method: [
                "Gently prick a few holes in the tofu with a toothpick(this will help the marinade to soak into it, giving better flavour), then cut into bite-size cubes.",
                "Mix the marinade ingredients together in a bowl and toss in the tofu pieces. Set aside to marinate for 10-15 mins.",
                "Heat a wok over high heat and add half the groundnut oil. When the oil starts to smoke, add the ginger slices and stir-fry for a few secs. Add the pak choy leaves and stir-fry for 1-2 mins. Add a small splash of water to create some steam and cook for 2 mins more. When the leaves have wilted and the stems are cooked but still a little crunchy, season with salt and transfer to a serving dish.",
                "Rinse the wok under cold water, then reheat it and add the remaining oil. When it starts to smoke, add the tofu pieces (retaining the marinade liquid) and stir-fry for 5-10 mins. Take care not to break up the tofu as you toss it to get it browned evenly on all sides. Season with the rice wine and rice vinegar. Add the remaining marinade liquid, bring to the bubble and let the liquid reduce. Sprinkle over the chilli flakes and toss well. Spoon onto the pak choy and serve immediately with jasmine rice, if you like."
            ]
        },
        {
            name: "Spinach & courgette lasagne",
            time: [75,"long-time"],
            servingNumber: [6,"more"],
            author:"Elena Silcock",
            picLink: "assets/recipe-pic/spinach-courgette-lasagne.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/spinach-courgette-lasagne",
            method: [
                "Pour boiling water over the spinach in a sieve or colander to wilt it. Leave until cool enough to handle, then squeeze out any excess liquid. Heat the oil in a non-stick frying pan over a medium heat, add the garlic and soften for 1 min. Tip in the nutmeg and cook for 1 min more, then add the mascarpone, spinach, half the cream and half the parmesan. Season generously, stir well and set aside.",
                "Heat oven to 180C/160C fan/gas 4. Spread a third of the filling over the base of a 20 x 30cm baking dish, cover with 3 lasagne sheets, then add a layer of courgettes. Repeat twice more. Pour the remaining cream over the final layer and sprinkle over the remaining parmesan. Bake for 40-45 mins or until the sauce is bubbling and the pasta has no resistance when you push a skewer through. Rest for 5 mins, then serve."
            ]
        },
        {
            name: "Courgette frittatas",
            time: [45,"long-time"],
            servingNumber: [2,"less"],
            author:"Miriam Nice",
            picLink: "assets/recipe-pic/courgette-frittatas.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/courgette-frittatas",
            method: [
                "Heat oven to 220C/200C fan/gas 7, then put an empty muffin tin inside. Coarsely grate 1 large or 2 small courgettes and slice 4 spring onions. Heat 2 tsp rapeseed oil in a frying pan and fry the spring onions for about 3 mins. Stir in 1 crushed garlic clove and the grated courgette and cook for another 1 min, then set aside to cool.",
                "Beat 3 large eggs, a good pinch dill fronds and 4 tbsp Greek yogurt together in a jug, then season. Stir in the courgette mixture. Take the muffin tin out of the oven and drop in eight muffin cases, divide the egg mixture between the cases and bake for 15-18 mins until set and golden. Serve hot or cold with salad."
            ]
        },
        {
            name: "Roasted carrot, rocket & lentil salad",
            time: [45,"long-time"],
            servingNumber: [2,"less"],
            author:"Sophie Godwin",
            picLink: "assets/recipe-pic/carrot-salad.jpg",
            pageLink:"https://www.bbcgoodfood.com/recipes/roasted-carrot-rocket-lentil-salad",
            method: [
                "Heat oven to 200C/180C fan/ gas 6. Toss the carrots in 1 tbsp oil, the cumin seeds and some seasoning. Spread out on a baking tray and roast for 30-35 mins until soft and charred around the edges.",
                "Meanwhile, whisk together the remaining oil, the lemon zest and juice, honey and mustard. Once the carrots are cooked, stir through all the remaining ingredients, then toss through the dressing to serve."
            ]
        }
    ]
}
//in the header users can click the button to jump to where quiz starts.
recipeApp.scrollDown = () => {
    $("button.scroll-down").on("click", function () {
        $("html, body").animate({ scrollTop: $("#questions").offset().top }, 1000);
    })
}
//use users' input to filter the recipes(first filter: preference for ingredient; second filter: preference for number of people being served; third filter about cooking time
recipeApp.filterChoices =(ingredientCond, numberCond, timeCond)=>{
    const ingredientOptions = recipeApp.recipes[ingredientCond];
    const numberOptions = ingredientOptions.filter(recipe => recipe.servingNumber[1] === numberCond);
    const timeOptions = numberOptions.filter(recipe => recipe.time[1] === timeCond);
    return timeOptions;
}
//use math.random to choose a final recipe from the options 
recipeApp.getFinalRecipe = (arr)=>{
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}
recipeApp.renderRecipes = (recipe)=>{
    const $recipeName = $(`<h2>Your recipe is ❤ <br/> ${recipe.name}</h2>`);
    // const $recipeServingNumber = $(`<h3>Serves ${recipe.servingNumber[0]} ❤</h3>`)
    // const $recipeTime = $(`<h3>Cooking time: ${recipe.time[0]}minutes</h3>`)
    const $recipeImgWrapper = $("<div class='image-wrapper'></div>");
    const $recipeImg = $(`<div class="recipe-image"><img src="${recipe.picLink}" alt="picture of ${recipe.name}"/></div>`)
    const $timeAndNumber = $(`<div class="info"><span class="number-info">Serves ${recipe.servingNumber[0]}</span><span class="time-info">Cooking time:${recipe.time[0]} minutes</span></div>`)
    $recipeImgWrapper.append($recipeImg,$timeAndNumber);
    const $cookingSteps = $("<div class='flex-wrapper'>");
    // console.log($recipeName,$recipeServingNumber,$recipeTime);
    console.log(recipe.method);
    //I choose to use for loop because in for loop I have access to the index and can use the index to add a serial number to cook step paragraphs.
    for(let i = 0; i <recipe.method.length; i++) {
        const step = recipe.method[i];
        if(recipe.method.length % 2 ===1 && i === recipe.method.length-1) {
            $cookingSteps.append(`<div class="cooking-step-special"><span class="method-order">${i + 1}</span><p>${step}</p></div>`); 
        }else {
            console.log(step);
            $cookingSteps.append(`<div class="cooking-step"><span class="method-order">${i + 1}</span><p>${step}</p></div>`); 
        }
        
    }
    const $recipeLink = $(`<div class='page-link'>Read <a href="${recipe.pageLink}" target="_blank">full recipe</a> including complete ingredients list written by ${recipe.author} at <a href="https://www.bbcgoodfood.com/" target="_blank">BBC Good Food page</a></div>`)
    // item.method.forEach(step => {
    //     $cookingSteps.append(`<div class="result cookingStep"><p>${step}</p></div>`);
    // });
    $("#results").empty();
    $("#results").addClass("result-wrapper");
    $("#results").append($recipeName,$recipeImgWrapper, $cookingSteps, $recipeLink);
    $(".another-try").html("<button class='reset'>Another recipe</button>")
    $("html, body").animate({ scrollTop: $("#results").offset().top }, 1000);
}
//when users submit the quiz form without answering all the question, a reminder will pop up.
recipeApp.renderNotice =()=>{
    const $notice = $("<div class='notice'>~(￣▽￣)~*Please answer all three questions!~(￣▽￣)~*</div>");
    $("#results").empty();
    $("#results").addClass("result-wrapper");
    $("#results").append($notice);
    $("html, body").animate({ scrollTop: $("#results").offset().top }, 500);
}
//when users submit the form with all three questions answered, three variables will store the users' choice. Then I use these variables to narrow down the range of qualified recipes and have an array in which all recipes meet users' choices. Then I use the random index generator choose a final one from the array, then display it on the page.
recipeApp.storeInput = ()=>{
    $("form").on("submit", function(e){
        e.preventDefault();
        const $ingredientPref = $("input[name='ingredient-pref']:checked").val();
        const $numberPref = $("input[name='number-pref']:checked").val();
        const $timePref = $("input[name='time-pref']:checked").val();
        console.log($ingredientPref,$numberPref,$timePref);
        if($ingredientPref!==undefined&&$numberPref!==undefined&&$timePref!==undefined){
            //use filterChoices method to get a final array 
            const finalOptions = recipeApp.filterChoices($ingredientPref, $numberPref, $timePref);
            //randomly choose a recipe in the final array using getFinalRecipe method
            const finalChoice = recipeApp.getFinalRecipe(finalOptions);
            //pass the final choice in the renderRecipes method to display its information.
            recipeApp.renderRecipes(finalChoice);
            // console.log(finalChoice.method);
            
        }else{
            //provide a reminder using renderNotice method.
            recipeApp.renderNotice();
            
        }
    })
}
//after recipe shows on the page, if users have another idea, they can click the reset button to fill the cleared form again.
recipeApp.reset = ()=>{
    $(".another-try").on("click", "button.reset", function (){
        $("form").trigger("reset");
        $("html, body").animate({ scrollTop: $("#questions").offset().top }, 500);
        //since the empty() method is triggered a little earlier than the scrolling up, I use the setTimeout to "hide" it from users.
        setTimeout(function () {
            $("#results").empty();
            $("#results").toggleClass("result-wrapper");
            $(".another-try").empty();
        }, 300);
    })
}
recipeApp.init =()=>{
    recipeApp.scrollDown();
    recipeApp.storeInput();
    recipeApp.reset();
}
$(function(){
    console.log("ready to go");
    recipeApp.init();
});