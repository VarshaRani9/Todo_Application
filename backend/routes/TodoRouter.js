const { Router } = require("express");
const { createTodo, updateTodo } = require("../types");
const todo = require("../DB/db");

const router = Router();

router.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  try {
    const newTodo = await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.status(201).json({
      todo: newTodo,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

router.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    res.status(200).json({
      todos,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

router.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  try {
    // const updatedTodo = await todo.update(
    //   {
    //     _id: req.body.id,
    //   },
    //   {
    //     completed: true,
    //   }
    // );

    const updatedTodo = await todo.findByIdAndUpdate(
      req.body.id,
      { completed: true },
      { new: true }
    );

    res.status(200).json({
      todo: updatedTodo,
    });
  } catch (e) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

module.exports = router;
