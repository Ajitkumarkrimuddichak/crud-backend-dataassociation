import Router from "express";
const router = Router();
import CourseModel from "../models/courseModels.js";

//Create Routers
//** Crete POST  Router **/
router.post("/companies", async (req, res) => {
  try {
    const postcourse = await CourseModel.create(req.body);
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
router.get("/companies", async (req, res) => {
  try {
    const postcourse = await CourseModel.find();
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
router.get("/companies/:companyId", async (req, res) => {
  const companyId = req.params.companyId;
  try {
    const postcourse = await CourseModel.findById(companyId);
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
router.put("/companies/:companyId", async (req, res) => {
  const companyId = req.params.companyId;
  try {
    const postcourse = await CourseModel.updateOne(
      {
        _id: companyId,
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
router.delete("/companies/:companyId", async (req, res) => {
  const companyId = req.params.companyId;
  try {
    const deletedCourse = await CourseModel.deleteOne({ _id: companyId });

    if (deletedCourse.deletedCount === 0) {
      //console.log(deletedCourse.deletedCount); //JS deleteCount method
      return res.status(404).json({
        success: false,
        message: "CourseModel not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "CourseModel deleted successfully",
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
export default router;
