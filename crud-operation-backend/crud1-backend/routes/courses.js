const express = require("express");
const Course = require("../models/course");
const router = express.Router();

//Create Routers
//** Crete POST  Router **/
router.post("/", async (req, res) => {
  try {
    const postcourse = await Course.create(req.body);
    res.status(201).json(postcourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while deleting course",
      error,
    });
  }
});

//** Crete GET All Router **/
router.get("/", async (req, res) => {
  try {
    const postcourse = await Course.find();
    res.status(201).json(postcourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while deleting course",
      error,
    });
  }
});

//** Crete GET Single  Router **/
router.get("/:courceId", async (req, res) => {
  const courceId = req.params.courceId;
  try {
    const postcourse = await Course.findById(courceId);
    res.status(201).json(postcourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while deleting course",
      error,
    });
  }
});

//** Crete PUT  Router **/
router.put("/:courceId", async (req, res) => {
  const courceId = req.params.courceId;
  try {
    const postcourse = await Course.updateOne(
      {
        _id: courceId,
      },
      req.body
    );
    res.status(201).json(postcourse);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
});

//** Crete DELETE  Router **/
router.delete("/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const deletedCourse = await Course.deleteOne({ _id: courseId });

    if (deletedCourse.deletedCount === 0) {
      //console.log(deletedCourse.deletedCount); //JS deleteCount method
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while deleting course",
      error,
    });
  }
});
module.exports = router;
