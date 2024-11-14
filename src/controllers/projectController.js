const Project = require("../model/project");

exports.getProjects =  async (req, res) => {
  try {
    const data = await Project.find();
    console.log("Projects find successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: " Internal server Error." });
  }
};

exports.addProject =  async (req, res) => {
  try {
    const data = req.body;
    const newproject = new Project(data);
    const response = await newproject.save();
    console.log("Project saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error." });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const updateData = req.body;
    const response = await Project.findByIdAndUpdate(
      projectId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    if(!response){
      return res.status(404).json({error: 'Project not found'})
    }
    console.log("Project data Updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error." });
  }
};

exports.deleteProject = async(req, res)=>{
  try{
    const projectId = req.params.id;
    const response = await Project.findByIdAndDelete(projectId);
    if(!response){
      return res.status(404).json({error: 'Project Not Found.'})
    }
    console.log('Project Deleted');
    res.status(200).json({messsge: 'Project Deleted Successfully.'});
  }catch(err){
    console.log(err);
    res.status(500).json({ error: "Internal server Error." });
  }
};
