import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    name: "web product",
    type: "data",
    detailsproduct: "http://localhost:3000/product/:id",
  });
});
router.get("/product/:id", (req, res) => {
  res.send({
    id: req.params.id,
  });
});

router.get("/:category/:brand", (req, res) => {
  const { category, brand } = req.params;
  res.send({
    category,
    brand,
  });
});
export default router;
