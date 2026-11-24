const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};
export default function WorkingWithRemoteObjects(app) {
  const getAssignment = (req, res) => {
    res.json(assignment);
  };
  const getAssignmentTitle = (req, res) => {
    res.json(assignment.title);
  };
  const setAssignmentTitle = (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  };
  app.get("/lab5/assignment/title/:newTitle", setAssignmentTitle);
  const setAssignmentScore = (req, res) => {
    assignment.score = Number(req.params.score);
    res.json(assignment);
  };
  const setAssignmentCompleted = (req, res) => {
    assignment.completed = req.params.completed === "true";
    res.json(assignment);
  };
  const module = {
    id: "M101",
    name: "Introduction to Node.js",
    description: "Creating an Express server",
    course: "CS5610",
  };
  app.get("/lab5/assignment", getAssignment);
  app.get("/lab5/assignment/title", getAssignmentTitle);
  app.get("/lab5/assignment/score/:score", setAssignmentScore);
  app.get("/lab5/assignment/completed/:completed", setAssignmentCompleted);
  app.get("/lab5/module", (req, res) => res.json(module));
  app.get("/lab5/module/name", (req, res) => res.json(module.name));
  app.get("/lab5/module/name/:name", (req, res) => {
    module.name = req.params.name;
    res.json(module);
  });
  app.get("/lab5/module/description/:description", (req, res) => {
    module.description = req.params.description;
    res.json(module);
  });
}
