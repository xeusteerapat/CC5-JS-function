const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  (yes = () => {
    alert("You Agreed");
  }),
  (no = () => {
    alert("You cancelled the execution");
  })
);
