import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { CreatePostController } from "./controllers/CreatePostController";
import { GetAllPostsController } from "./controllers/GetAllPostsController";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// Users routes
router.post("/users", new CreateUserController().handle);
router.get("/users", new GetAllUsersController().handle);
router.delete("/users/:id", new DeleteUserController().handle);
router.put("/users/:id", new UpdateUserController().handle);

// Posts routes
router.post("/posts", new CreatePostController().handle);
router.get("/posts", new GetAllPostsController().handle);

export { router };
