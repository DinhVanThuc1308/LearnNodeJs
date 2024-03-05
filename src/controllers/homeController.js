const getHomePage = (req,res) => {
    //process data
    // call model
    res.send("HomePage")
}
const getABC = (req,res)=>{
    //process data
    // call model
    res.send("ABC")
}
const getTest = (req,res)=>{
    //process data
    // call model
    res.render('sample.ejs')
}
module.exports = {
    getHomePage,
    getABC,
    getTest
};