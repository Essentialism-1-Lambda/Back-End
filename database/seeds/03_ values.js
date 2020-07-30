exports.seed = async function(knex) {
  await knex("recipes").insert([
    {
      name: "",
      details: ""
    },
    {
      name: "",
      details: ""
    },
    {
      name: "",
      details: ""
    },    
    {
      name: "",
      details: ""
    },
    {
      name: "",
      details: ""
    },
    {
      name: "Family",
      details: "Your family is your rock and the core foundation of your life."
    },
    {
      name: "Environmental",
      details: "You believe that the environment around you is the most important thing."
    },
    {
      name: "Financial",
      details: ""
    },    
    {
      name: "",
      details: ""
    },
    {
      name: "",
      details: ""
    },
  ])
 };
