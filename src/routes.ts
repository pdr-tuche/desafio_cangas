import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { CreatePostController } from "./controllers/CreatePostController";
import { GetAllPostsController } from "./controllers/GetAllPostsController";
import { DeletePostController } from "./controllers/DeletePostController";
import { UpdatePostController } from "./controllers/UpdatePostController";
import { CreateCommentController } from "./controllers/CreateCommentController";
import { GetAllCommentsController } from "./controllers/GetAllCommentsController";
import { DeleteCommentController } from "./controllers/DeleteCommentController";
import { GetPostByIdController } from "./controllers/GetPostByIdControllet";
import { GetCommentByIdController } from "./controllers/GetCommentByIdController";
import { LoginController } from "./controllers/LoginController";
import { VerifyTokenController } from "./controllers/VerifyTokenController";
import { UpdateCommentController } from "./controllers/UpdateCommentController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// Users routes
router.post("/users", new CreateUserController().handle);
router.get("/users", new GetAllUsersController().handle);
router.delete("/users/:id", new DeleteUserController().handle);
router.put("/users/:id", new UpdateUserController().handle);
router.get("/users/:id", new GetUserByIdController().handle);

// Posts routes
router.post("/posts", new CreatePostController().handle);
router.get("/posts", new GetAllPostsController().handle);
router.delete("/posts/:id", new DeletePostController().handle);
router.put("/posts/:id", new UpdatePostController().handle);
router.get("/posts/:id", new GetPostByIdController().handle);

// Comments routes
router.post("/comments", new CreateCommentController().handle);
router.get("/comments", new GetAllCommentsController().handle);
router.delete("/comments/:id", new DeleteCommentController().handle);
router.put("/comments/:id", new UpdateCommentController().handle);
router.get("/comments/:id", new GetCommentByIdController().handle);

// auth routes
router.post("/login", new LoginController().handle);
router.get("/verify", new VerifyTokenController().handle);

export { router };
