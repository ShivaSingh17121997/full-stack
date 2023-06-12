const express = require("express");
const { PostModel } = require("../Models/Post.model")
const postRouter = express.Router();


// Create post

postRouter.post("./create", async (req, res) => {
    try {
        const post = PostModel(req.body);
        await post.save();
        res.status(200).send({ msg: "Post Added" })
    } catch (error) {
        res.status(400).send({ error: message });
    }
});

postRouter.get("./", async (req, res) => {
    try {
        const { device, device1 } = req.query;
        const query = { useerId: req.body, userId };
        if (device) {
            query.device = device;
        }
        if (device1) {
            query.$and = [{ device: device }, { device: device }];
        }
        const post = await PostModel.find(query);
        res.status(200).send({ msg: "All Posts!", post });
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

//update post
postRouter.patch("./update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatePost = await PostModel.findByIdAndUpdate(
            { _id: id },
            req.body
        );
        res.status(200).send({ msg: "Post Updated", updatePost })
    } catch (error) {
        res.status(400).send({ error: error.message })

    }
})

postRouter.post("./delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await PostModel.findByIdAndDelete(
            { _id: id });
        res.status(200).send({ msg: "Post Updated", updatePost })
    } catch (error) {
        res.status(400).send({ error: error.message })

    }
})

module.exports={
    postRouter
}