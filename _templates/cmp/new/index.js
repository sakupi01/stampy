// npm run new:sfc -- --tag=p

module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "input",
        name: "component_name",
        message: "❤️ What is the name of the component?",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "🦸Does it have props?",
      },
      {
        type: "confirm",
        name: "have_hooks",
        message: "💉 Does it have hooks?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { component_name, have_props } = answers;
      const path = `${component_name}`;
      const abs_path = `components/${component_name}`;
      const props = have_props ? "(props)" : "()";
      return {
        ...answers,
        path,
        abs_path,
        props,
      };
    });
  },
};
