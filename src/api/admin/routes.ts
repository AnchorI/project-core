import { Routes } from "@interfaces/routes";
import { Router } from "express";

class AdminRoute implements Routes {
    public router = Router()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        //will-be-later
    }
}

export default new AdminRoute().router