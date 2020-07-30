exports.seed = async function(knex) {
  await knex("recipes").insert([
    {
      name: "Creativity",
      details: "Ahhh to have the imagination of a 5 year old but live inside a 30 something body. Your family accuses you of never growing up but you understand the world around you in a light nobody else can."
    },
    {
      name: "Positivity",
      details: "Just remember if you are negative all the time, you get medicated and locked up in a padded room. However if you are positive all the time... You will still get medicated and locked up in a padded room. "
    },
    {
      name: "Efficiency",
      details: "I'll be to the point."
    },    
    {
      name: "Loyalty",
      details: "She may have cheated on you but we all know that your dog aint goin nowhere. oh... well... except it looks like she took the dog with her also. "
    },
    {
      name: "Spirituality",
      details: "Cult + time = religion. "
    },
    {
      name: "Family",
      details: "Family is the group of people who are tied to you no matter what actions follow the phrasing 'hey guys watch this...' Just remember some friends are just as good as family.  "
    },
    {
      name: "Environmental",
      details: "I like to believe that everybody is a fan of the environment. most of us hang pine scent in our cars at the very least right?"
    },
    {
      name: "Financial",
      details: "Some say money is the root of all evil. Some say money can't buy happiness. I say call me a sinner cause I am about to have a lotta fun hangin with my benjamin's"
    },    
    {
      name: "Health and Wellness",
      details: "Some say there is a limited number of heart beats a heart has before it gives out for good. I appreciate that you are intentionally increasing your heart rate. "
    },
    {
      name: "Community",
      details: "We all used to be happy to be apart of the community then COVID hit and made us come to our senses. "
    },
  ])
 };
